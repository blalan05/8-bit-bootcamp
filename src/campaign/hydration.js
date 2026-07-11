import * as THREE from 'three';
import {
  ensureCampaign,
  isIronman,
  isSandbox,
  setHydration,
  applyHeatExhaustionPenalty
} from './campaignState.js';
import { getHydrationDrainMultiplier } from './metaProgress.js';
import { showHeatExhaustion } from './scheduleUI.js';

const DRAIN_SECONDS = 240;
const CANTEEN_RADIUS = 3;
const CANTEENS_PER_DAY = 3;
const REFILL_AMOUNT = 40;
const ENDURANCE_ACTIVITY_PENALTY = 15;

function createCanteenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#3d6b8a';
  ctx.fillRect(4, 2, 8, 12);
  ctx.fillStyle = '#6db8e8';
  ctx.fillRect(5, 4, 6, 8);
  ctx.fillStyle = '#8b6914';
  ctx.fillRect(6, 0, 4, 3);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

/**
 * Hydration drain, canteen pickups, and heat-casualty handling.
 */
export class HydrationSystem {
  /**
   * @param {object} options
   * @param {object} options.character
   * @param {import('../playerCharacter/player.js').Player} options.player
   * @param {THREE.Group} options.mapContainer
   * @param {{ width: number, height: number }} options.bounds
   * @param {(character: object) => void} options.onCharacterUpdate
   * @param {(reason: string) => Promise<boolean>} options.onRunFailure
   */
  constructor({ character, player, mapContainer, bounds, onCharacterUpdate, onRunFailure }) {
    this.character = ensureCampaign(character);
    this.player = player;
    this.mapContainer = mapContainer;
    this.bounds = bounds;
    this.onCharacterUpdate = onCharacterUpdate;
    this.onRunFailure = onRunFailure;

    this.canteens = [];
    this.canteenMeshes = [];
    this.heatExhaustionBusy = false;
    this.runFailureBusy = false;
    this._canteenTexture = createCanteenTexture();

    this.spawnCanteens();
  }

  updateCharacter(character) {
    this.character = ensureCampaign(character);
  }

  get isActive() {
    return !isSandbox(this.character) && this.character.campaign?.phase !== 'graduated';
  }

  spawnCanteens() {
    this.clearCanteens();
    const count = CANTEENS_PER_DAY;
    for (let i = 0; i < count; i++) {
      const x = 8 + Math.random() * (this.bounds.width - 16);
      const z = 8 + Math.random() * (this.bounds.height - 16);
      this.canteens.push({ x, z, id: `canteen-${Date.now()}-${i}` });

      const mat = new THREE.SpriteMaterial({ map: this._canteenTexture, transparent: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(2, 2, 1);
      sprite.position.set(x, 1.5, z);
      this.mapContainer.add(sprite);
      this.canteenMeshes.push(sprite);
    }
  }

  clearCanteens() {
    for (const mesh of this.canteenMeshes) {
      this.mapContainer.remove(mesh);
      mesh.material?.dispose();
    }
    this.canteenMeshes = [];
    this.canteens = [];
  }

  onNewDay() {
    if (!this.isActive) return;
    this.spawnCanteens();
  }

  /** Extra drain after endurance-tagged activities. */
  postActivityDrain(stats = []) {
    if (!this.isActive || !stats.includes('endurance')) return;
    const hydration = (this.character.campaign.hydration ?? 100) - ENDURANCE_ACTIVITY_PENALTY;
    this.applyHydration(hydration);
  }

  applyHydration(value) {
    const prev = this.character.campaign.hydration ?? 100;
    const clamped = Math.max(0, value);
    const updated = setHydration(this.character, clamped);
    this.character = updated;
    this.onCharacterUpdate(updated);
    if (clamped <= 0 && prev > 0) {
      this.handleDehydration();
    }
  }

  async handleDehydration() {
    if (this.heatExhaustionBusy || this.runFailureBusy) return;

    if (isIronman(this.character)) {
      this.runFailureBusy = true;
      this.player.inputEnabled = false;
      await this.onRunFailure('heat');
      this.runFailureBusy = false;
      return;
    }

    this.heatExhaustionBusy = true;
    this.player.inputEnabled = false;
    const penalized = applyHeatExhaustionPenalty(this.character);
    this.character = penalized;
    this.onCharacterUpdate(penalized);
    await showHeatExhaustion();
    this.player.inputEnabled = true;
    this.heatExhaustionBusy = false;
  }

  checkCanteenPickup() {
    const px = this.player.position.x;
    const pz = this.player.position.z;
    for (let i = this.canteens.length - 1; i >= 0; i--) {
      const c = this.canteens[i];
      const dist = Math.hypot(px - c.x, pz - c.z);
      if (dist <= CANTEEN_RADIUS) {
        const hydration = Math.min(100, (this.character.campaign.hydration ?? 0) + REFILL_AMOUNT);
        this.applyHydration(hydration);
        this.canteens.splice(i, 1);
        const mesh = this.canteenMeshes.splice(i, 1)[0];
        if (mesh) {
          this.mapContainer.remove(mesh);
          mesh.material?.dispose();
        }
      }
    }
  }

  /**
   * @param {number} dt - seconds since last frame
   */
  update(dt) {
    if (!this.isActive) return;
    if (!this.player.inputEnabled) return;
    if (this.heatExhaustionBusy || this.runFailureBusy) return;

    const drainPerSec = 100 / DRAIN_SECONDS;
    const multiplier = getHydrationDrainMultiplier();
    const hydration = (this.character.campaign.hydration ?? 100) - drainPerSec * dt * multiplier;
    this.applyHydration(hydration);

    this.checkCanteenPickup();
  }

  dispose() {
    this.clearCanteens();
    this._canteenTexture?.dispose();
  }
}
