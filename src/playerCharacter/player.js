import * as THREE from 'three';
import { createRecruitSprite, applyAppearanceToSprite } from '../character/appearance.js';
import { BASE_STAT, dexterityToWalkSpeedMultiplier } from '../character/stats.js';
import { ISO_YAW } from '../art/assetLoader.js';

/** Base world units per second at average dexterity (10) */
const BASE_WALK_SPEED = 14;/** Stop moving when within this distance of the target */
const ARRIVAL_THRESHOLD = 0.05;

export class Player extends THREE.Group {
  raycaster = new THREE.Raycaster();

  constructor(camera, map, character, bounds = { width: 50, height: 40 }) {
    super();

    this.character = character;
    this.sprite = createRecruitSprite(character);
    this.sprite.rotation.y = ISO_YAW; // billboard faces the fixed isometric camera
    this.add(this.sprite);

    this.position.set(5, 0, 5);

    this.camera = camera;
    this.map = map;
    this.bounds = bounds;
    this.target = null;
    this.inputEnabled = true;
    /** Set while an in-game menu (map, journal, sheet) is open; independent of inputEnabled. */
    this.paused = false;

    this._onMouseDown = this.onMouseDown.bind(this);
    window.addEventListener('mousedown', this._onMouseDown);
  }

  updateAppearance() {
    applyAppearanceToSprite(this.sprite, this.character);
  }

  getWalkSpeed() {
    const dex = this.character?.stats?.dexterity ?? BASE_STAT;
    return BASE_WALK_SPEED * dexterityToWalkSpeedMultiplier(dex);
  }

  /**
   * Move toward the clicked target each frame.
   * @param {number} dt - elapsed seconds since last frame
   */
  update(dt) {
    if (!this.inputEnabled || this.paused || !this.target) return;

    const dx = this.target.x - this.position.x;
    const dz = this.target.z - this.position.z;
    const dist = Math.hypot(dx, dz);

    if (dist <= ARRIVAL_THRESHOLD) {
      this.position.set(this.target.x, 0, this.target.z);
      this.target = null;
      return;
    }

    const step = this.getWalkSpeed() * dt;
    const t = Math.min(1, step / dist);
    this.position.x += dx * t;
    this.position.z += dz * t;
  }

  /**
   * Walk toward a world position, clamped to the map bounds.
   * @param {number} x
   * @param {number} z
   */
  walkTo(x, z) {
    const clampedX = Math.max(0, Math.min(this.bounds.width, x));
    const clampedZ = Math.max(0, Math.min(this.bounds.height, z));
    this.target = new THREE.Vector3(clampedX, 0, clampedZ);
  }

  onMouseDown(event) {
    if (!this.inputEnabled || this.paused || event.button !== 0) return;

    const coords = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    this.raycaster.setFromCamera(coords, this.camera);

    const intersects = this.raycaster.intersectObjects([this.map], true);
    if (intersects.length > 0) {
      const { x, z } = intersects[0].point;
      this.walkTo(x, z);
    }
  }

  dispose() {
    window.removeEventListener('mousedown', this._onMouseDown);
  }
}
