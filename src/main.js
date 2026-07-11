import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import mapsConfig from './maps/maps.json';
import { TileLoader } from './maps/tileLoader.js';
import { getTileKeyAtPosition } from './maps/mapParser.js';
import { Player } from './playerCharacter/player.js';
import { showSlotSelect } from './character/slotSelectUI.js';
import { showCharacterCreation } from './character/characterCreationUI.js';
import { showRecruiterVisit } from './recruiter/recruiterVisitUI.js';
import { saveSlot } from './character/saveSlots.js';
import { createRecruitHUD } from './character/recruitHUD.js';
import { ISO_PITCH } from './art/assetLoader.js';
import { CampaignController } from './campaign/campaignController.js';
import { SandboxController } from './campaign/sandboxController.js';
import { HydrationSystem } from './campaign/hydration.js';
import { ensureCampaign, isSandbox } from './campaign/campaignState.js';

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
      const character = await showCharacterCreation(result.slotIndex);
      if (!character) continue;

      const cleared = await showRecruiterVisit(character);
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
  renderer?.setAnimationLoop(null);

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

  const mapDef = mapsConfig.maps?.find(m => m.name === 'mcrdsd');
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
  tileLoader.setMap('mcrdsd');

  const parsedMap = tileLoader.getParsedMap();
  const slotIndex = character.slotIndex ?? 0;

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
      onRunEnd: () => endGameSession()
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
