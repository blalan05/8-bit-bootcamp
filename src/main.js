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
const clock = new THREE.Clock();

async function boot() {
  while (true) {
    const result = await showSlotSelect();

    if (result.type === 'continue') {
      startGame(result.character);
      return;
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
      startGame(cleared);
      return;
    }
  }
}

function startGame(character) {
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

  const parsedMap = mapsConfig.maps?.find(m => m.name === 'mcrdsd');
  player = new Player(camera, mapContainer, character, {
    width: parsedMap?.width ?? 60,
    height: parsedMap?.height ?? 50
  });
  scene.add(player);

  const startX = (parsedMap?.width ?? 60) / 2;
  const startZ = (parsedMap?.height ?? 50) / 2;
  player.position.set(startX, 0, startZ);

  tileLoader = new TileLoader(mapsConfig, mapContainer, {
    positionGetter: () => ({ x: player.position.x, z: player.position.z }),
    unloadDistance: 3
  });
  tileLoader.setMap('mcrdsd');

  // Fixed 2:1 dimetric angle: yaw 45deg, height = horizontal distance * tan(ISO_PITCH)
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
