import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import mapsConfig from './maps/maps.json';
import { TileLoader } from './maps/tileLoader.js';
import { Player } from './playerCharacter/player.js';

const stats = new Stats();
document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera, renderer.domElement);

const sun = new THREE.DirectionalLight();
sun.intensity = 3;
sun.position.set(1, 2, 3);
scene.add(sun);

const ambientLight = new THREE.AmbientLight();
ambientLight.intensity = 0.5;
scene.add(ambientLight);

const mapContainer = new THREE.Group();
scene.add(mapContainer);

const parsedMap = mapsConfig.maps?.find(m => m.name === 'Footprints');
const player = new Player(camera, mapContainer, {
  width: parsedMap?.width ?? 50,
  height: parsedMap?.height ?? 40
});
scene.add(player);

const tileLoader = new TileLoader(mapsConfig, mapContainer, {
  positionGetter: () => ({ x: player.position.x, z: player.position.z }),
  unloadDistance: 3
});
tileLoader.setMap('Footprints');

controls.target.set(5, 0.5, 5);
camera.position.set(0, 2, 0);
controls.update();

function animate() {
  tileLoader.update();
  controls.update();
  stats.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});