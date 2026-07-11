/**
 * Core Values matching scene.
 */
export class CoreValuesScene {
  /**
   * @param {HTMLElement} container
   */
  constructor(container) {
    this.container = container;
    container.innerHTML = `
      <div class="corevalues-scene">
        <div class="corevalues-trait" id="cv-trait"></div>
        <div class="corevalues-choices" id="cv-choices"></div>
        <div class="corevalues-progress" id="cv-progress"></div>
      </div>
    `;
    this.traitEl = container.querySelector('#cv-trait');
    this.choicesEl = container.querySelector('#cv-choices');
    this.progressEl = container.querySelector('#cv-progress');
  }

  showRound(trait, choices, index, total) {
    this.traitEl.textContent = trait;
    this.progressEl.textContent = `${index} / ${total}`;
    this.choicesEl.innerHTML = choices.map((text, i) => `
      <button type="button" class="btn btn-secondary cv-choice" data-choice="${i}">${text}</button>
    `).join('');
  }

  dispose() {
    this.container.innerHTML = '';
  }
}
