import { registerSW } from 'virtual:pwa-register';
import * as THREE from 'three';
import { installErrorListener, setPlayContext } from './telemetry.js';

installErrorListener();
registerSW({ immediate: true });
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import mapsConfig from './maps/maps.json';
import { TileLoader } from './maps/tileLoader.js';
import { getTileKeyAtPosition } from './maps/mapParser.js';
import { Player } from './playerCharacter/player.js';
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

/** Internal render resolution divisor — bigger = chunkier pixels */
const PIXEL_SCALE = 3;
/** Vertical world units visible on screen */
const FRUSTUM_SIZE = 24;

let renderer;
let scene;
let camera;
let controls;
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

async function boot() {
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
  controls?.dispose();
  controls = null;

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

  perfStats = new Stats();
  document.body.appendChild(perfStats.dom);

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

  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.OrthographicCamera(
    (-FRUSTUM_SIZE * aspect) / 2,
    (FRUSTUM_SIZE * aspect) / 2,
    FRUSTUM_SIZE / 2,
    -FRUSTUM_SIZE / 2,
    0.1,
    200
  );
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableRotate = false;

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
  controls.target.set(startX, 0, startZ);
  camera.position.set(startX + offset, horizontal * Math.tan(ISO_PITCH), startZ + offset);
  controls.update();

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
  controls.update();
  perfStats.update();

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

function onResize() {
  const aspect = window.innerWidth / window.innerHeight;
  camera.left = (-FRUSTUM_SIZE * aspect) / 2;
  camera.right = (FRUSTUM_SIZE * aspect) / 2;
  camera.top = FRUSTUM_SIZE / 2;
  camera.bottom = -FRUSTUM_SIZE / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / PIXEL_SCALE, window.innerHeight / PIXEL_SCALE, false);
}

boot();
