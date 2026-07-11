import { rasterizeSprite } from '../art/assetLoader.js';

export const NCO_NAME = 'Sgt. Vasquez';

/**
 * Recruiting station scene: office backdrop, NCO sprite in Dress Blue Charlies,
 * and dialogue box with say/ask interaction.
 */
export class NcoScene {
  /**
   * @param {HTMLElement} container
   */
  constructor(container) {
    this.container = container;
    this._keyHandler = null;
    this._resolveContinue = null;

    container.innerHTML = `
      <div class="station-scene">
        <div class="station-room">
          <div class="station-flag" aria-hidden="true"></div>
          <div class="station-desk" aria-hidden="true"></div>
          <div class="station-nco" id="station-nco"></div>
        </div>
        <div class="nco-dialogue">
          <div class="nco-nameplate">${NCO_NAME}</div>
          <p class="nco-text" id="nco-text"></p>
          <div class="nco-choices" id="nco-choices"></div>
          <div class="nco-actions" id="nco-actions"></div>
        </div>
      </div>
    `;

    const ncoSlot = container.querySelector('#station-nco');
    const canvas = rasterizeSprite('npc/nco');
    canvas.className = 'station-nco-sprite';
    const displayScale = 4;
    canvas.style.width = `${canvas.width * displayScale}px`;
    canvas.style.height = `${canvas.height * displayScale}px`;
    ncoSlot.appendChild(canvas);

    this.textEl = container.querySelector('#nco-text');
    this.choicesEl = container.querySelector('#nco-choices');
    this.actionsEl = container.querySelector('#nco-actions');
  }

  /**
   * Display a line of dialogue; resolves when the player continues.
   * @param {string} text
   * @returns {Promise<void>}
   */
  say(text) {
    return new Promise(resolve => {
      this.choicesEl.innerHTML = '';
      this.textEl.textContent = text;
      this.actionsEl.innerHTML = '<button type="button" class="btn btn-primary nco-continue" id="nco-continue">Continue</button>';

      const btn = this.actionsEl.querySelector('#nco-continue');
      const onContinue = () => {
        cleanup();
        resolve();
      };
      const cleanup = () => {
        btn.removeEventListener('click', onContinue);
        if (this._keyHandler) {
          window.removeEventListener('keydown', this._keyHandler);
          this._keyHandler = null;
        }
      };

      this._keyHandler = (e) => {
        if (e.key === 'Enter') onContinue();
      };
      window.addEventListener('keydown', this._keyHandler);
      btn.addEventListener('click', onContinue, { once: true });
      btn.focus();
    });
  }

  /**
   * Present a question with multiple-choice answers.
   * @param {{ prompt: string, choices: Array<{ text: string }> }} question
   * @returns {Promise<number>} choice index
   */
  ask(question) {
    return new Promise(resolve => {
      this.actionsEl.innerHTML = '';
      this.textEl.textContent = question.prompt;
      this.choicesEl.innerHTML = question.choices.map((choice, i) => `
        <button type="button" class="btn btn-secondary nco-choice" data-choice="${i}">${choice.text}</button>
      `).join('');

      this.choicesEl.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-choice]');
        if (!btn) return;
        resolve(Number(btn.dataset.choice));
      }, { once: true });
    });
  }

  dispose() {
    if (this._keyHandler) {
      window.removeEventListener('keydown', this._keyHandler);
    }
    this.container.innerHTML = '';
  }
}
