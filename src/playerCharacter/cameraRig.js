import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/** Exponential catch-up rate (per second) while the camera follows the recruit */
const FOLLOW_RATE = 6;
/** Keyboard pan speed in world units per second at zoom 1 */
const KEY_PAN_SPEED = 22;
const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2.5;
/** Farthest the view can drift from the recruit; tiles only stream in around the player */
const MAX_PAN_DISTANCE = 14;

/** [screen-right, screen-up] per key */
const KEY_DIRS = {
  arrowup: [0, 1], w: [0, 1],
  arrowdown: [0, -1], s: [0, -1],
  arrowleft: [-1, 0], a: [-1, 0],
  arrowright: [1, 0], d: [1, 0]
};

/**
 * Isometric camera: drag / arrow keys / WASD pan across the ground, wheel or
 * pinch zooms, and the view follows the recruit whenever a new walk starts.
 * Panning by hand stops the follow until the next walk order or Space.
 */
export class CameraRig {
  /**
   * @param {object} options
   * @param {THREE.OrthographicCamera} options.camera
   * @param {HTMLElement} options.domElement
   * @param {import('./player.js').Player} options.player
   * @param {{ width: number, height: number }} options.bounds
   * @param {() => boolean} options.canControl
   */
  constructor({ camera, domElement, player, bounds, canControl }) {
    this.camera = camera;
    this.player = player;
    this.bounds = bounds;
    this.canControl = canControl;
    this.following = true;
    this._walkOrder = player.walkOrder;
    /** @type {Set<string>} */
    this._held = new Set();

    const controls = new OrbitControls(camera, domElement);
    controls.enableRotate = false;
    controls.screenSpacePanning = false;
    controls.minZoom = MIN_ZOOM;
    controls.maxZoom = MAX_ZOOM;
    controls.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
    controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
    controls.target.set(player.position.x, 0, player.position.z);
    controls.addEventListener('start', () => { this.following = false; });
    this.controls = controls;

    this._onKeyDown = this.onKeyDown.bind(this);
    this._onKeyUp = e => this._held.delete(e.key.toLowerCase());
    this._onBlur = () => this._held.clear();
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('blur', this._onBlur);
  }

  onKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target instanceof HTMLElement && e.target.matches('input, textarea, select, button')) return;
    if (!this.canControl()) return;

    const key = e.key.toLowerCase();
    if (KEY_DIRS[key]) {
      e.preventDefault();
      this._held.add(key);
      this.following = false;
    } else if (key === ' ') {
      e.preventDefault();
      this.following = true;
    }
  }

  /** Jump the view to a world point, keeping the current isometric offset. */
  snapTo(x, z) {
    this._shift(x - this.controls.target.x, z - this.controls.target.z);
    this.following = true;
  }

  /** @param {{ width: number, height: number }} bounds */
  setBounds(bounds) {
    this.bounds = bounds;
  }

  _shift(dx, dz) {
    this.controls.target.x += dx;
    this.controls.target.z += dz;
    this.camera.position.x += dx;
    this.camera.position.z += dz;
  }

  /** @param {number} dt */
  update(dt) {
    const active = this.canControl();
    this.controls.enabled = active;
    if (!active) this._held.clear();

    if (this.player.walkOrder !== this._walkOrder) {
      this._walkOrder = this.player.walkOrder;
      this.following = true;
    }

    if (this._held.size > 0) {
      let kx = 0;
      let ky = 0;
      for (const key of this._held) {
        kx += KEY_DIRS[key][0];
        ky += KEY_DIRS[key][1];
      }
      const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0).setY(0).normalize();
      const forward = this.camera.getWorldDirection(new THREE.Vector3()).setY(0).normalize();
      const step = (KEY_PAN_SPEED / this.camera.zoom) * dt;
      this._shift(
        (right.x * kx + forward.x * ky) * step,
        (right.z * kx + forward.z * ky) * step
      );
    }

    if (this.following) {
      const t = 1 - Math.exp(-FOLLOW_RATE * dt);
      this._shift(
        (this.player.position.x - this.controls.target.x) * t,
        (this.player.position.z - this.controls.target.z) * t
      );
    }

    this.controls.update();

    const { target } = this.controls;
    const { x: px, z: pz } = this.player.position;
    let cx = Math.max(0, Math.min(this.bounds.width, target.x));
    let cz = Math.max(0, Math.min(this.bounds.height, target.z));
    const away = Math.hypot(cx - px, cz - pz);
    if (away > MAX_PAN_DISTANCE) {
      cx = px + (cx - px) * (MAX_PAN_DISTANCE / away);
      cz = pz + (cz - pz) * (MAX_PAN_DISTANCE / away);
    }
    if (cx !== target.x || cz !== target.z) this._shift(cx - target.x, cz - target.z);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('blur', this._onBlur);
    this.controls.dispose();
  }
}
