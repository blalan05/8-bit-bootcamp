import * as THREE from 'three';
import { createRecruitSprite, applyAppearanceToSprite } from '../character/appearance.js';
import { BASE_STAT, dexterityToWalkSpeedMultiplier } from '../character/stats.js';
import { ISO_YAW } from '../art/assetLoader.js';

/** Base world units per second at average dexterity (10) */
const BASE_WALK_SPEED = 14;/** Stop moving when within this distance of the target */
const ARRIVAL_THRESHOLD = 0.05;
/** Pointer travel (CSS px) beyond which a press counts as a pan drag, not a walk click */
const TAP_SLOP = 8;

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
    /** Bumped on every walkTo so the camera can tell a new walk order apart from an ongoing one. */
    this.walkOrder = 0;
    /** @type {{ id: number, x: number, y: number } | null} */
    this._press = null;

    this._onPointerDown = this.onPointerDown.bind(this);
    this._onPointerUp = this.onPointerUp.bind(this);
    window.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointerup', this._onPointerUp);
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
    this.walkOrder++;
  }

  onPointerDown(event) {
    if (!event.isPrimary || event.button !== 0 || !event.target?.closest?.('.game-canvas')) {
      this._press = null;
      return;
    }
    this._press = { id: event.pointerId, x: event.clientX, y: event.clientY };
  }

  /** A press that ends near where it started is a walk order; anything longer was a pan drag. */
  onPointerUp(event) {
    const press = this._press;
    this._press = null;
    if (!press || press.id !== event.pointerId) return;
    if (!this.inputEnabled || this.paused) return;
    if (Math.hypot(event.clientX - press.x, event.clientY - press.y) > TAP_SLOP) return;

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
    window.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointerup', this._onPointerUp);
  }
}
