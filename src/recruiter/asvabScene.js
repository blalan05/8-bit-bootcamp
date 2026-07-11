import { CharacterPreview } from '../character/characterPreview.js';

/**
 * ASVAB testing scene: 6ft folding table, paper booklet, issue crayon,
 * and the recruit sprite seated to the right.
 */
export class AsvabScene {
  /**
   * @param {HTMLElement} container
   * @param {object} character
   */
  constructor(container, character) {
    this.container = container;
    this.character = character;
    this.preview = null;
    this._choiceHandler = null;

    container.innerHTML = `
      <div class="asvab-scene">
        <div class="asvab-room">
          <div class="asvab-table-unit">
            <div class="folding-table">
              <div class="folding-table-top"></div>
              <div class="folding-table-legs">
                <span class="folding-leg folding-leg--left"></span>
                <span class="folding-leg folding-leg--right"></span>
              </div>
            </div>
            <div class="asvab-paper" id="asvab-paper">
              <div class="asvab-paper-header">
                <span>ASVAB</span>
                <span id="asvab-paper-meta">Form 183 · MEPS</span>
              </div>
              <div class="asvab-paper-body" id="asvab-paper-body"></div>
            </div>
            <div class="asvab-crayon" title="Issue crayon — do not lose">
              <span class="asvab-crayon-body"></span>
              <span class="asvab-crayon-label">CRAYON</span>
            </div>
          </div>
          <div class="asvab-recruit-seat">
            <div class="asvab-chair-back"></div>
            <div class="asvab-recruit-slot" id="asvab-recruit-slot"></div>
          </div>
        </div>
      </div>
    `;

    const slot = container.querySelector('#asvab-recruit-slot');
    this.preview = new CharacterPreview(slot, {
      width: 120,
      height: 160,
      background: null,
      pixelScale: 3
    });
    this.preview.update(character);
  }

  /**
   * @param {object} question
   * @param {number} index
   * @param {number} total
   * @returns {Promise<number>} selected choice index
   */
  showQuestion(question, index, total) {
    return new Promise(resolve => {
      const metaEl = this.container.querySelector('#asvab-paper-meta');
      const bodyEl = this.container.querySelector('#asvab-paper-body');

      metaEl.textContent = `Q ${index}/${total} · ${question.difficulty}`;

      bodyEl.innerHTML = `
        <p class="asvab-question">${question.prompt}</p>
        <div class="asvab-bubbles" id="asvab-bubbles">
          ${question.choices.map((choice, i) => `
            <button type="button" class="asvab-bubble" data-choice="${i}">
              <span class="asvab-bubble-mark" aria-hidden="true"></span>
              <span class="asvab-bubble-letter">${String.fromCharCode(65 + i)}.</span>
              <span class="asvab-bubble-text">${choice}</span>
            </button>
          `).join('')}
        </div>
        <p class="asvab-paper-footer">Use issue crayon. Fill bubble completely.</p>
      `;

      const bubbles = bodyEl.querySelector('#asvab-bubbles');
      if (this._choiceHandler) {
        bubbles.removeEventListener('click', this._choiceHandler);
      }

      this._choiceHandler = (e) => {
        const btn = e.target.closest('[data-choice]');
        if (!btn) return;
        bubbles.removeEventListener('click', this._choiceHandler);
        this._choiceHandler = null;
        btn.classList.add('asvab-bubble--filled');
        resolve(Number(btn.dataset.choice));
      };

      bubbles.addEventListener('click', this._choiceHandler);
    });
  }

  dispose() {
    if (this._choiceHandler) {
      this.container.querySelector('#asvab-bubbles')?.removeEventListener('click', this._choiceHandler);
    }
    this.preview?.dispose();
    this.container.innerHTML = '';
  }
}
