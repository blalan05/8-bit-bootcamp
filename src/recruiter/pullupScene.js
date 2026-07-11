import { CharacterPreview } from '../character/characterPreview.js';

/**
 * Pull-up test scene: paired PFT bar stations with 4x4 posts, a crossbar,
 * and the recruit hanging from the active (left) bar. Also renders the HUD
 * (reps, timer, energy) and timing feedback.
 */
export class PullupScene {
  /**
   * @param {HTMLElement} container
   * @param {object} character
   */
  constructor(container, character) {
    this.container = container;
    this.character = character;
    this.preview = null;
    this._flashTimer = null;

    container.innerHTML = `
      <div class="pullup-scene">
        <div class="pullup-yard">
          <div class="pullup-station pullup-station--active">
            <div class="pullup-bar"></div>
            <span class="pullup-post pullup-post--left"></span>
            <span class="pullup-post pullup-post--right"></span>
            <div class="pullup-recruit-slot" id="pullup-recruit-slot"></div>
            <div class="pullup-timing-flash" id="pullup-flash"></div>
          </div>
          <div class="pullup-station">
            <div class="pullup-bar"></div>
            <span class="pullup-post pullup-post--left"></span>
            <span class="pullup-post pullup-post--right"></span>
          </div>
        </div>
        <div class="pullup-hud">
          <div class="pullup-hud-row">
            <span class="pullup-reps">Reps: <span id="pullup-reps">0</span></span>
            <span class="pullup-timer" id="pullup-timer">0.0s</span>
          </div>
          <div class="pullup-energy">
            <span class="pullup-energy-label">Energy</span>
            <div class="pullup-energy-track"><div class="pullup-energy-bar" id="pullup-energy-bar"></div></div>
          </div>
          <div class="pullup-phase-hint" id="pullup-phase-hint">Get on the bar</div>
        </div>
      </div>
    `;

    const slot = container.querySelector('#pullup-recruit-slot');
    this.preview = new CharacterPreview(slot, {
      width: 110,
      height: 150,
      background: null,
      pixelScale: 3
    });
    this.preview.update(character);

    this.repsEl = container.querySelector('#pullup-reps');
    this.timerEl = container.querySelector('#pullup-timer');
    this.energyBarEl = container.querySelector('#pullup-energy-bar');
    this.phaseHintEl = container.querySelector('#pullup-phase-hint');
    this.flashEl = container.querySelector('#pullup-flash');
  }

  setPullHeight(t) {
    this.preview?.setPullHeight(t);
  }

  setReps(reps) {
    this.repsEl.textContent = String(reps);
  }

  setTimer(seconds) {
    this.timerEl.textContent = `${Math.max(0, seconds).toFixed(1)}s`;
  }

  setEnergy(fraction) {
    this.energyBarEl.style.width = `${Math.max(0, Math.min(1, fraction)) * 100}%`;
  }

  setPhaseHint(html) {
    this.phaseHintEl.innerHTML = html;
  }

  /** @param {'perfect' | 'miss'} type */
  flash(type) {
    if (!this.flashEl) return;
    clearTimeout(this._flashTimer);
    this.flashEl.textContent = type === 'perfect' ? 'PERFECT' : 'MISS';
    this.flashEl.className = `pullup-timing-flash pullup-timing-flash--${type} pullup-timing-flash--show`;
    this._flashTimer = setTimeout(() => {
      this.flashEl.className = 'pullup-timing-flash';
    }, 500);
  }

  dispose() {
    clearTimeout(this._flashTimer);
    this.preview?.dispose();
    this.container.innerHTML = '';
  }
}
