/**
 * Close-order drill command rhythm scene.
 */
import { openTouchPad, setPadHighlight, touchCopy } from '../lib/touchPad.js';

export const DRILL_KEYS = [
  { code: 'KeyW', cap: 'W', label: 'Forward March' },
  { code: 'KeyA', cap: 'A', label: 'Left Face' },
  { code: 'KeyS', cap: 'S', label: 'Halt' },
  { code: 'KeyD', cap: 'D', label: 'Right Face' }
];

const FLASH_TEXT = { hit: 'HIT', miss: 'MISS', wait: 'STAND FAST' };

export class DrillCadenceScene {
  /**
   * @param {HTMLElement} container
   * @param {(code: string) => void} [onKeyClick]
   */
  constructor(container, onKeyClick) {
    this.container = container;
    container.innerHTML = `
      <div class="drill-scene">
        <div class="drill-deck" aria-hidden="true"></div>
        <div class="drill-command drill-command--idle" id="drill-command">
          <div class="drill-prep" id="drill-prep">READY</div>
          <div class="drill-exec" id="drill-exec">. . .</div>
        </div>
        <div class="drill-beat" id="drill-beat"></div>
        <div class="drill-hud">
          <span>Hits: <span id="drill-hits">0</span> / <span id="drill-total">0</span></span>
          <span class="drill-flash" id="drill-flash"></span>
        </div>
        <div class="drill-keys">
          ${DRILL_KEYS.map(k => `
            <button type="button" tabindex="-1" class="mg-key mg-key--prep" data-drill-key="${k.code}">
              <span class="mg-key-cap">${k.cap}</span><span class="mg-key-role">${k.label}</span>
            </button>`).join('')}
        </div>
        <div class="drill-rule">${touchCopy('Preparatory command = stand fast · command of execution = press the lit key')}</div>
      </div>
    `;

    this.boxEl = container.querySelector('#drill-command');
    this.prepEl = container.querySelector('#drill-prep');
    this.execEl = container.querySelector('#drill-exec');
    this.beatEl = container.querySelector('#drill-beat');
    this.hitsEl = container.querySelector('#drill-hits');
    this.totalEl = container.querySelector('#drill-total');
    this.flashEl = container.querySelector('#drill-flash');
    this.keyEls = [...container.querySelectorAll('[data-drill-key]')];
    this.closePad = openTouchPad(container);

    container.querySelector('.drill-keys').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-drill-key]');
      if (!btn || e.detail === 0) return;
      btn.blur();
      onKeyClick?.(btn.dataset.drillKey);
    });
  }

  /**
   * Preparatory command: shown, key dimmed, not scored.
   * @param {string} prep
   * @param {string} [code] expected key, shown dimmed on the touch pad
   */
  showPrep(prep, code) {
    this.boxEl.className = 'drill-command drill-command--prep';
    this.prepEl.textContent = prep;
    this.execEl.textContent = '. . .';
    this.setKeys(null);
    if (code) setPadHighlight(code, 'prep');
  }

  /** Command of execution: lights the key. */
  showExec(exec, code) {
    this.boxEl.className = 'drill-command drill-command--exec';
    this.execEl.textContent = exec;
    this.setKeys(code, 'go');
  }

  setIdle(text) {
    this.boxEl.className = 'drill-command drill-command--idle';
    this.prepEl.textContent = text;
    this.execEl.textContent = '. . .';
    this.setKeys(null);
  }

  /** @param {string|null} code @param {'go'|'hit'|'miss'} [state] */
  setKeys(code, state = 'go') {
    this.keyEls.forEach(btn => {
      btn.className = `mg-key mg-key--${btn.dataset.drillKey === code ? state : 'prep'}`;
    });
    setPadHighlight(code, state);
  }

  setHits(hits, total) {
    this.hitsEl.textContent = String(hits);
    this.totalEl.textContent = String(total);
  }

  pulseBeat() {
    this.beatEl.classList.add('drill-beat--pulse');
    setTimeout(() => this.beatEl.classList.remove('drill-beat--pulse'), 160);
  }

  /** @param {'hit'|'miss'|'wait'} type */
  flash(type) {
    clearTimeout(this.flashTimer);
    this.flashEl.textContent = FLASH_TEXT[type];
    this.flashEl.className = 'drill-flash';
    void this.flashEl.offsetWidth;
    this.flashEl.className = `drill-flash drill-flash--${type} drill-flash--show`;
    this.flashTimer = setTimeout(() => {
      this.flashEl.className = 'drill-flash';
    }, 700);
  }

  dispose() {
    clearTimeout(this.flashTimer);
    this.closePad();
    this.container.innerHTML = '';
  }
}
