import { registerSW } from 'virtual:pwa-register';
import * as THREE from 'three';
import { installErrorListener, setPlayContext } from './telemetry.js';

installErrorListener();
registerSW({ immediate: true });
import Stats from 'three/addons/libs/stats.module.js';
import mapsConfig from './maps/maps.json';
import { TileLoader } from './maps/tileLoader.js';
import { getTileKeyAtPosition } from './maps/mapParser.js';
import { Player } from './playerCharacter/player.js';
import { CameraRig } from './playerCharacter/cameraRig.js';
import { QuestIndicator } from './ui/questIndicator.js';
import { showSlotSelect } from './character/slotSelectUI.js';
import { showCharacterCreation } from './character/characterCreationUI.js';
import { showRecruiterVisit } from './recruiter/recruiterVisitUI.js';
import { showCampaignSelect } from './campaigns/campaignSelectUI.js';
import { showDeploymentBriefing } from './campaigns/deploymentBriefingUI.js';
import { getCampaignForCharacter, getCampaignMapName, getMapBackground } from './campaigns/campaignRegistry.js';
import { saveSlot } from './character/saveSlots.js';
import { createRecruitHUD } from './character/recruitHUD.js';
import { ISO_PITCH } from './art/assetLoader.js';
import { CampaignController } from './campaign/campaignController.js';
import { SandboxController } from './campaign/sandboxController.js';
import { HydrationSystem } from './campaign/hydration.js';
import { ensureCampaign, isSandbox, createInitialCampaign } from './campaign/campaignState.js';
import { ExplorationTracker } from './maps/exploration.js';
import { GameMenu } from './ui/gameMenu.js';
import { syncTouchClass } from './campaign/activities/lib/touchPad.js';

syncTouchClass();

/** Internal render resolution divisor — bigger = chunkier pixels */
const PIXEL_SCALE = 3;
/** Vertical world units visible on screen */
const FRUSTUM_SIZE = 24;
/** Horizontal world units always visible; only tall portrait screens grow the frustum to keep it */
const MIN_VISIBLE_WIDTH = 18;
/** FPS panel only with ?debug */
const SHOW_PERF_STATS = new URLSearchParams(location.search).has('debug');

let renderer;
let scene;
let camera;
let cameraRig;
let questIndicator;
let player;
let tileLoader;
let recruitHUD;
let debugTileEl;
let perfStats;
let gameController;
let hydrationSystem;
let exploration;
let gameMenu;
const clock = new THREE.Clock();
let sessionEndCallback = null;

/**
 * Dev only: `?play=<activityId>` loops one mini-game with a throwaway recruit and no saves.
 * Add `&campaign=<id>` to play it as that campaign's first day using the activity, and
 * `&rank=<pvt|pfc|lcpl|cpl|sgt>` to try rank perks.
 */
async function playActivityDirect(activityId, campaignId, rankId) {
  const [{ createDraftCharacter, createCharacter, getAllBackgrounds }, { runActivity }, { getActivity }, { getCampaignWeeks }] = await Promise.all([
    import('./character/createCharacter.js'),
    import('./campaign/runActivity.js'),
    import('./campaign/activityRegistry.js'),
    import('./campaigns/campaignRegistry.js')
  ]);
  if (!getActivity(activityId)) {
    document.body.insertAdjacentHTML('beforeend', `<p class="recruiter-copy" style="padding:24px">Unknown activity "${activityId}".</p>`);
    return;
  }
  const draft = createDraftCharacter(getAllBackgrounds()[0].id);
  const recruit = createCharacter('Dev Recruit', draft.backgroundId, draft.appearance, 0, draft.coreStats, {
    mode: 'sandbox',
    difficulty: 'story',
    perkStat: null
  });
  let dayMeta = {};
  if (rankId) {
    recruit.mode = 'campaign';
    recruit.campaign = { ...recruit.campaign, rankId };
  }
  if (campaignId) {
    recruit.campaign = { ...recruit.campaign, campaignId };
    const day = getCampaignWeeks(recruit).flatMap(w => w.days ?? []).find(d => d.activityId === activityId);
    if (day) dayMeta = { title: day.title, briefing: day.briefing, locationName: day.locationName, stats: day.stats };
  }
  while (true) {
    await runActivity(recruit, activityId, { ...dayMeta, dayId: `dev-${activityId}` });
  }
}

async function boot() {
  const params = import.meta.env.DEV ? new URLSearchParams(location.search) : null;
  const devActivity = params?.get('play');
  if (devActivity) return playActivityDirect(devActivity, params.get('campaign'), params.get('rank'));

  while (true) {
    const result = await showSlotSelect();

    if (result.type === 'continue') {
      await runGameSession(result.character);
      continue;
    }

    if (result.type === 'create') {
      const campaign = await showCampaignSelect();
      if (!campaign) continue;

      const character = await showCharacterCreation(result.slotIndex);
      if (!character) continue;

      let cleared;
      if (campaign.usesRecruiter) {
        cleared = await showRecruiterVisit(character);
        if (cleared) {
          cleared = {
            ...cleared,
            campaign: createInitialCampaign({
              campaignId: campaign.id,
              ...(cleared.campaign ?? {})
            })
          };
        }
      } else {
        cleared = await showDeploymentBriefing(character, campaign);
      }
      if (!cleared) continue;

      if (!saveSlot(result.slotIndex, cleared)) {
        alert('Could not save character. Check browser storage settings.');
        continue;
      }
      await runGameSession(cleared);
    }
  }
}

function runGameSession(character) {
  return new Promise(resolve => {
    sessionEndCallback = resolve;
    startGame(character);
  });
}

function endGameSession() {
  setPlayContext({ campaign: '', activity: '' });
  renderer?.setAnimationLoop(null);

  gameMenu?.dispose();
  gameMenu = null;
  exploration = null;

  gameController?.dispose();
  gameController = null;

  hydrationSystem?.dispose();
  hydrationSystem = null;

  player?.dispose();
  player = null;

  tileLoader = null;
  cameraRig?.dispose();
  cameraRig = null;
  questIndicator?.dispose();
  questIndicator = null;

  recruitHUD?.element?.remove();
  recruitHUD = null;

  debugTileEl?.remove();
  debugTileEl = null;

  perfStats?.dom?.remove();
  perfStats = null;

  if (renderer) {
    renderer.domElement.remove();
    renderer.dispose();
    renderer = null;
  }

  scene = null;
  camera = null;

  window.removeEventListener('resize', onResize);

  const done = sessionEndCallback;
  sessionEndCallback = null;
  done?.();
}

function startGame(character) {
  character = ensureCampaign(character);
  setPlayContext({
    campaign: getCampaignForCharacter(character).id,
    activity: ''
  });

  if (SHOW_PERF_STATS) {
    perfStats = new Stats();
    document.body.appendChild(perfStats.dom);
  }

  debugTileEl = document.createElement('div');
  debugTileEl.className = 'location-hud';
  document.body.appendChild(debugTileEl);

  recruitHUD = createRecruitHUD(character);
  document.body.appendChild(recruitHUD.element);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(1);
  renderer.setSize(window.innerWidth / PIXEL_SCALE, window.innerHeight / PIXEL_SCALE, false);
  renderer.domElement.classList.add('game-canvas');
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2e3b28);

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 200);
  fitFrustum();

  const sun = new THREE.DirectionalLight();
  sun.intensity = 3;
  sun.position.set(1, 2, 3);
  scene.add(sun);

  const ambientLight = new THREE.AmbientLight();
  ambientLight.intensity = 0.5;
  scene.add(ambientLight);

  const mapContainer = new THREE.Group();
  scene.add(mapContainer);

  const campaignDef = getCampaignForCharacter(character);
  const mapName = getCampaignMapName(character);

  const mapDef = mapsConfig.maps?.find(m => m.name === mapName);
  const bounds = {
    width: mapDef?.width ?? 60,
    height: mapDef?.height ?? 50
  };

  player = new Player(camera, mapContainer, character, bounds);
  scene.add(player);

  const startX = bounds.width / 2;
  const startZ = bounds.height / 2;
  player.position.set(startX, 0, startZ);

  tileLoader = new TileLoader(mapsConfig, mapContainer, {
    positionGetter: () => ({ x: player.position.x, z: player.position.z }),
    unloadDistance: 3
  });
  tileLoader.setMap(mapName);

  const parsedMap = tileLoader.getParsedMap();
  const slotIndex = character.slotIndex ?? 0;

  scene.background = new THREE.Color(getMapBackground(mapName));

  const reloadMap = async (newMapName) => {
    const newMapDef = mapsConfig.maps?.find(m => m.name === newMapName);
    const newBounds = {
      width: newMapDef?.width ?? 60,
      height: newMapDef?.height ?? 50
    };
    player.bounds = newBounds;
    const centerX = newBounds.width / 2;
    const centerZ = newBounds.height / 2;
    player.position.set(centerX, 0, centerZ);
    player.target = null;
    cameraRig?.setBounds(newBounds);
    cameraRig?.snapTo(centerX, centerZ);
    tileLoader.setMap(newMapName);
    scene.background = new THREE.Color(getMapBackground(newMapName));
    hydrationSystem?.updateBounds?.(newBounds);
    return tileLoader.getParsedMap();
  };

  if (isSandbox(character)) {
    gameController = new SandboxController({
      character,
      slotIndex,
      player,
      parsedMap,
      recruitHUD
    });
  } else {
    gameController = new CampaignController({
      character,
      slotIndex,
      player,
      parsedMap,
      recruitHUD,
      onRunEnd: () => endGameSession(),
      onMapChange: reloadMap
    });

    hydrationSystem = new HydrationSystem({
      character,
      player,
      mapContainer,
      bounds,
      onCharacterUpdate: (c) => gameController.updateCharacter(c),
      onRunFailure: (reason) => gameController.handleRunFailure(reason)
    });
    gameController.hydrationSystem = hydrationSystem;
  }

  exploration = new ExplorationTracker({
    getCharacter: () => gameController.character,
    getParsedMap: () => tileLoader.getParsedMap(),
    getPosition: () => ({ x: player.position.x, z: player.position.z }),
    onCharacterUpdate: (c) => gameController.updateCharacter(c)
  });

  gameMenu = new GameMenu({
    player,
    exploration,
    getCharacter: () => gameController.character,
    getParsedMap: () => tileLoader.getParsedMap(),
    getObjective: () => (gameController.awaitingProximity ? gameController.currentDayDef : null),
    getPickups: () => (hydrationSystem?.isActive ? hydrationSystem.pickups : []),
    canOpen: () => !gameController.busy && !gameController.runEnded
      && !document.querySelector('.menu-overlay:not(.game-menu)')
  });

  gameController.start();

  const horizontal = 40;
  const offset = horizontal * Math.SQRT1_2;
  camera.position.set(startX + offset, horizontal * Math.tan(ISO_PITCH), startZ + offset);

  const worldInputReady = () => player.inputEnabled && !player.paused
    && !gameController.busy && !gameController.runEnded
    && !document.querySelector('.menu-overlay');

  cameraRig = new CameraRig({
    camera,
    domElement: renderer.domElement,
    player,
    bounds,
    canControl: worldInputReady
  });
  cameraRig.update(0);

  questIndicator = new QuestIndicator({
    camera,
    player,
    getParsedMap: () => tileLoader.getParsedMap(),
    getObjective: () => (gameController.awaitingProximity ? gameController.currentDayDef : null),
    canShow: worldInputReady
  });

  renderer.setAnimationLoop(animate);
  window.addEventListener('resize', onResize);
}

function animate() {
  const dt = clock.getDelta();
  player.update(dt);
  hydrationSystem?.update(dt);
  gameController?.updateProximity();
  tileLoader.update();
  exploration?.update();
  cameraRig.update(dt);
  questIndicator.update();
  perfStats?.update();

  const parsedMap = tileLoader.getParsedMap();
  if (parsedMap) {
    const key = getTileKeyAtPosition(parsedMap, player.position.x, player.position.z);
    const objects = parsedMap.tiles[key] ?? [];
    const names = objects.map(o => o.name).filter(Boolean);
    debugTileEl.textContent = names.length > 0 ? names.join(' · ') : `Tile ${key}`;
  } else {
    debugTileEl.textContent = '--';
  }

  renderer.render(scene, camera);
}

function fitFrustum() {
  const aspect = window.innerWidth / window.innerHeight;
  const height = Math.max(FRUSTUM_SIZE, MIN_VISIBLE_WIDTH / aspect);
  camera.left = (-height * aspect) / 2;
  camera.right = (height * aspect) / 2;
  camera.top = height / 2;
  camera.bottom = -height / 2;
  camera.updateProjectionMatrix();
}

function onResize() {
  fitFrustum();
  renderer.setSize(window.innerWidth / PIXEL_SCALE, window.innerHeight / PIXEL_SCALE, false);
}

boot();
