/**
 * Close-order drill command rhythm scene.
 */
export class DrillCadenceScene {
  /**
   * @param {HTMLElement} container
   */
  constructor(container) {
    this.container = container;
    container.innerHTML = `
      <div class="drill-scene">
        <div class="drill-deck" aria-hidden="true"></div>
        <div class="drill-command" id="drill-command">READY</div>
        <div class="drill-beat" id="drill-beat"></div>
        <div class="drill-hud">
          <span>Hits: <span id="drill-hits">0</span> / <span id="drill-total">0</span></span>
          <span class="drill-flash" id="drill-flash"></span>
        </div>
        <div class="drill-keys">
          <span><kbd>L</kbd> Left Face</span>
          <span><kbd>R</kbd> Right Face</span>
          <span><kbd>M</kbd> March</span>
          <span><kbd>H</kbd> Halt</span>
        </div>
      </div>
    `;

    this.commandEl = container.querySelector('#drill-command');
    this.beatEl = container.querySelector('#drill-beat');
    this.hitsEl = container.querySelector('#drill-hits');
    this.totalEl = container.querySelector('#drill-total');
    this.flashEl = container.querySelector('#drill-flash');
  }

  setCommand(text) {
    this.commandEl.textContent = text;
  }

  setHits(hits, total) {
    this.hitsEl.textContent = String(hits);
    this.totalEl.textContent = String(total);
  }

  pulseBeat() {
    this.beatEl.classList.add('drill-beat--pulse');
    setTimeout(() => this.beatEl.classList.remove('drill-beat--pulse'), 120);
  }

  /** @param {'hit'|'miss'} type */
  flash(type) {
    this.flashEl.textContent = type === 'hit' ? 'HIT' : 'MISS';
    this.flashEl.className = `drill-flash drill-flash--${type} drill-flash--show`;
    setTimeout(() => {
      this.flashEl.className = 'drill-flash';
    }, 400);
  }

  dispose() {
    this.container.innerHTML = '';
  }
}
