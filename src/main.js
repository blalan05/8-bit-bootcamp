import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import mapsConfig from './maps/maps.json';
import { TileLoader } from './maps/tileLoader.js';
import { getTileKeyAtPosition } from './maps/mapParser.js';
import { Player } from './playerCharacter/player.js';
import { showSlotSelect } from './character/slotSelectUI.js';
import { showCharacterCreation } from './character/characterCreationUI.js';
import { saveSlot } from './character/saveSlots.js';
import { createRecruitHUD } from './character/recruitHUD.js';

let renderer;
let scene;
let camera;
let controls;
let player;
let tileLoader;
let recruitHUD;
let debugTileEl;
let perfStats;

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
      if (!saveSlot(result.slotIndex, character)) {
        alert('Could not save character. Check browser storage settings.');
        continue;
      }
      startGame(character);
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
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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

  controls.target.set(startX, 0.5, startZ);
  camera.position.set(startX - 5, 15, startZ - 5);
  controls.update();

  renderer.setAnimationLoop(animate);

  window.addEventListener('resize', onResize);
}

function animate() {
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
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

boot();
