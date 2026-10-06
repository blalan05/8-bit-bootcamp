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
import { getCampaignClimate } from '../campaigns/campaignRegistry.js';

const DRAIN_SECONDS = 240;
const PICKUP_RADIUS = 3;
const PICKUPS_PER_DAY = 3;
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

function createFireTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#4a3020';
  ctx.fillRect(2, 12, 12, 3);
  ctx.fillStyle = '#8b4513';
  ctx.fillRect(4, 10, 8, 2);
  ctx.fillStyle = '#d9a020';
  ctx.fillRect(5, 5, 6, 6);
  ctx.fillStyle = '#ff6b20';
  ctx.fillRect(6, 3, 4, 5);
  ctx.fillStyle = '#ffd94a';
  ctx.fillRect(7, 1, 2, 4);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

function createPonchoTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#4a5a3a';
  ctx.fillRect(3, 4, 10, 10);
  ctx.fillStyle = '#5c6b4a';
  ctx.fillRect(4, 5, 8, 8);
  ctx.fillStyle = '#3d4a2e';
  ctx.fillRect(3, 4, 10, 2);
  ctx.fillStyle = '#6a7a58';
  ctx.fillRect(5, 7, 6, 4);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

function createBottleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#8ec8e8';
  ctx.fillRect(5, 3, 6, 11);
  ctx.fillStyle = '#b8e0f8';
  ctx.fillRect(6, 5, 4, 7);
  ctx.fillStyle = '#4a90c2';
  ctx.fillRect(5, 2, 6, 2);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(7, 0, 2, 3);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

function createWaterskinTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#8a6f47';
  ctx.fillRect(4, 5, 8, 9);
  ctx.fillStyle = '#6d5637';
  ctx.fillRect(5, 6, 6, 7);
  ctx.fillStyle = '#a8874f';
  ctx.fillRect(6, 3, 4, 3);
  ctx.fillStyle = '#cfa96b';
  ctx.fillRect(7, 1, 2, 4);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

/**
 * Climate resource drain, map pickups, and exhaustion-casualty handling.
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

    this.pickups = [];
    this.pickupMeshes = [];
    this.exhaustionBusy = false;
    this.runFailureBusy = false;
    this._canteenTexture = createCanteenTexture();
    this._fireTexture = createFireTexture();
    this._ponchoTexture = createPonchoTexture();
    this._bottleTexture = createBottleTexture();
    this._waterskinTexture = createWaterskinTexture();

    this.spawnPickups();
  }

  get climate() {
    return getCampaignClimate(this.character);
  }

  updateCharacter(character) {
    this.character = ensureCampaign(character);
  }

  updateBounds(bounds) {
    this.bounds = bounds;
    this.spawnPickups();
  }

  get isActive() {
    return !isSandbox(this.character) && this.character.campaign?.phase !== 'graduated';
  }

  getPickupTexture() {
    const style = this.climate.pickupStyle;
    if (style === 'fire') return this._fireTexture;
    if (style === 'poncho') return this._ponchoTexture;
    if (style === 'bottle') return this._bottleTexture;
    if (style === 'waterskin') return this._waterskinTexture;
    return this._canteenTexture;
  }

  spawnPickups() {
    this.clearPickups();
    for (let i = 0; i < PICKUPS_PER_DAY; i++) {
      const x = 8 + Math.random() * (this.bounds.width - 16);
      const z = 8 + Math.random() * (this.bounds.height - 16);
      this.pickups.push({ x, z, id: `pickup-${Date.now()}-${i}` });

      const mat = new THREE.SpriteMaterial({ map: this.getPickupTexture(), transparent: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(2, 2, 1);
      sprite.position.set(x, 1.5, z);
      this.mapContainer.add(sprite);
      this.pickupMeshes.push(sprite);
    }
  }

  clearPickups() {
    for (const mesh of this.pickupMeshes) {
      this.mapContainer.remove(mesh);
      mesh.material?.dispose();
    }
    this.pickupMeshes = [];
    this.pickups = [];
  }

  onNewDay() {
    if (!this.isActive) return;
    this.spawnPickups();
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
      this.handleExhaustion();
    }
  }

  async handleExhaustion() {
    if (this.exhaustionBusy || this.runFailureBusy) return;

    if (isIronman(this.character)) {
      this.runFailureBusy = true;
      this.player.inputEnabled = false;
      await this.onRunFailure('heat');
      this.runFailureBusy = false;
      return;
    }

    this.exhaustionBusy = true;
    this.player.inputEnabled = false;
    const penalized = applyHeatExhaustionPenalty(this.character);
    this.character = penalized;
    this.onCharacterUpdate(penalized);
    await showHeatExhaustion(this.character);
    this.player.inputEnabled = true;
    this.exhaustionBusy = false;
  }

  checkPickup() {
    const px = this.player.position.x;
    const pz = this.player.position.z;
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const c = this.pickups[i];
      const dist = Math.hypot(px - c.x, pz - c.z);
      if (dist <= PICKUP_RADIUS) {
        const hydration = Math.min(100, (this.character.campaign.hydration ?? 0) + REFILL_AMOUNT);
        this.applyHydration(hydration);
        this.pickups.splice(i, 1);
        const mesh = this.pickupMeshes.splice(i, 1)[0];
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
    if (this.exhaustionBusy || this.runFailureBusy) return;

    const drainPerSec = 100 / DRAIN_SECONDS;
    const multiplier = getHydrationDrainMultiplier();
    const hydration = (this.character.campaign.hydration ?? 100) - drainPerSec * dt * multiplier;
    this.applyHydration(hydration);

    this.checkPickup();
  }

  dispose() {
    this.clearPickups();
    this._canteenTexture?.dispose();
    this._fireTexture?.dispose();
    this._ponchoTexture?.dispose();
    this._bottleTexture?.dispose();
    this._waterskinTexture?.dispose();
  }
}
