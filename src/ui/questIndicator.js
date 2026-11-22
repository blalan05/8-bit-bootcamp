import * as THREE from 'three';
import { findLocation } from '../campaign/campaignData.js';

/** Screen insets (CSS px) that keep the edge arrow clear of the HUD, toolbar and prompt */
const EDGE_INSET = { top: 84, right: 36, bottom: 96, left: 36 };
const LABEL_GUTTER = 8;

/** Nudge a label centred on anchorX sideways so it never runs past the viewport edge. */
function keepLabelOnScreen(label, anchorX, viewportW) {
  const half = label.offsetWidth / 2;
  const x = Math.max(LABEL_GUTTER + half, Math.min(viewportW - LABEL_GUTTER - half, anchorX));
  label.style.transform = `translateX(${Math.round(x - anchorX)}px)`;
}

/**
 * Points the way to today's report location: a bobbing marker over it while it
 * is on screen, or an arrow pinned to the screen edge when it is not. The edge
 * arrow is clickable and walks the recruit toward the objective.
 */
export class QuestIndicator {
  /**
   * @param {object} options
   * @param {THREE.Camera} options.camera
   * @param {import('../playerCharacter/player.js').Player} options.player
   * @param {() => object | null} options.getParsedMap
   * @param {() => { locationName: string } | null} options.getObjective
   * @param {() => boolean} options.canShow
   */
  constructor({ camera, player, getParsedMap, getObjective, canShow }) {
    this.camera = camera;
    this.player = player;
    this.getParsedMap = getParsedMap;
    this.getObjective = getObjective;
    this.canShow = canShow;
    this._projected = new THREE.Vector3();
    /** @type {{ x: number, z: number } | null} */
    this._loc = null;

    this.marker = document.createElement('div');
    this.marker.className = 'quest-marker';
    this.marker.innerHTML = '<span class="quest-label"></span><span class="quest-chevron"></span>';
    this.marker.hidden = true;

    this.arrow = document.createElement('button');
    this.arrow.type = 'button';
    this.arrow.className = 'quest-arrow';
    this.arrow.innerHTML = '<span class="quest-arrow-head"></span><span class="quest-label"></span>';
    this.arrow.hidden = true;
    this.arrow.addEventListener('click', () => {
      if (this._loc) this.player.walkTo(this._loc.x, this._loc.z);
    });

    document.body.append(this.marker, this.arrow);
    this._markerLabel = this.marker.querySelector('.quest-label');
    this._arrowLabel = this.arrow.querySelector('.quest-label');
    this._arrowHead = this.arrow.querySelector('.quest-arrow-head');
    this._name = '';
  }

  update() {
    const objective = this.getObjective();
    const loc = objective && this.canShow()
      ? findLocation(this.getParsedMap(), objective.locationName)
      : null;
    this._loc = loc;

    if (!loc) {
      this.marker.hidden = true;
      this.arrow.hidden = true;
      return;
    }

    if (objective.locationName !== this._name) {
      this._name = objective.locationName;
      this._markerLabel.textContent = this._name;
      this._arrowLabel.textContent = this._name;
      this.arrow.title = `Walk to ${this._name}`;
    }

    const p = this._projected.set(loc.x, 0, loc.z).project(this.camera);
    const w = window.innerWidth;
    const h = window.innerHeight;
    const sx = (p.x + 1) / 2 * w;
    const sy = (1 - p.y) / 2 * h;

    if (sx >= 0 && sx <= w && sy >= 0 && sy <= h) {
      this.arrow.hidden = true;
      this.marker.hidden = false;
      this.marker.style.transform = `translate(${Math.round(sx)}px, ${Math.round(sy)}px)`;
      keepLabelOnScreen(this._markerLabel, sx, w);
      return;
    }

    const cx = w / 2;
    const cy = h / 2;
    const dx = sx - cx;
    const dy = sy - cy;
    const tx = dx > 0 ? (w - EDGE_INSET.right - cx) / dx : dx < 0 ? (EDGE_INSET.left - cx) / dx : Infinity;
    const ty = dy > 0 ? (h - EDGE_INSET.bottom - cy) / dy : dy < 0 ? (EDGE_INSET.top - cy) / dy : Infinity;
    const t = Math.min(tx, ty);

    const ax = cx + dx * t;
    this.marker.hidden = true;
    this.arrow.hidden = false;
    this.arrow.style.transform = `translate(${Math.round(ax)}px, ${Math.round(cy + dy * t)}px)`;
    this._arrowHead.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
    keepLabelOnScreen(this._arrowLabel, ax, w);
  }

  dispose() {
    this.marker.remove();
    this.arrow.remove();
  }
}
