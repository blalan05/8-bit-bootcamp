import { renderCharacterSheet } from './characterSheet.js';
import { renderFieldMap } from './fieldMapView.js';
import { renderJournal } from './journalView.js';

/**
 * @typedef {Object} GameMenuContext
 * @property {import('../playerCharacter/player.js').Player} player
 * @property {() => object} getCharacter
 * @property {() => object | null} getParsedMap
 * @property {() => object | null} getObjective - current day definition the player must report to
 * @property {() => { x: number, z: number }[]} getPickups
 * @property {import('../maps/exploration.js').ExplorationTracker} exploration
 * @property {() => boolean} canOpen
 */

const TABS = [
  { id: 'sheet', label: 'Character', key: 'c', render: renderCharacterSheet },
  { id: 'map', label: 'Map', key: 'm', render: renderFieldMap },
  { id: 'journal', label: 'Journal', key: 'j', render: renderJournal }
];

/**
 * In-game menu with Character, Map, and Journal tabs. Opened from the HUD
 * toolbar or hotkeys (C / M / J); pauses the player while open.
 */
export class GameMenu {
  /** @param {GameMenuContext} ctx */
  constructor(ctx) {
    this.ctx = ctx;
    this.activeTab = null;
    this.overlay = null;
    this._disposeView = null;

    this.toolbar = document.createElement('div');
    this.toolbar.className = 'game-toolbar';
    this.toolbar.innerHTML = TABS.map(tab => `
      <button type="button" class="btn btn-secondary btn-compact game-toolbar-btn" data-tab="${tab.id}" title="${tab.label} (${tab.key.toUpperCase()})">
        <span class="game-toolbar-key">${tab.key.toUpperCase()}</span>${tab.label}
      </button>
    `).join('');
    // Keep toolbar clicks from also setting a walk target on the map underneath.
    this.toolbar.addEventListener('mousedown', e => e.stopPropagation());
    this.toolbar.addEventListener('click', e => {
      const btn = e.target.closest('[data-tab]');
      if (btn) this.toggle(btn.dataset.tab);
    });
    document.body.appendChild(this.toolbar);

    this._onKeyDown = this.onKeyDown.bind(this);
    window.addEventListener('keydown', this._onKeyDown, true);
  }

  get isOpen() {
    return !!this.overlay;
  }

  onKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target instanceof HTMLElement && e.target.matches('input, textarea, select')) return;

    if (this.isOpen) {
      // Swallow keys so the activity prompt (Enter) and mini-game hotkeys stay inert.
      e.stopPropagation();
      if (e.key === 'Escape') {
        e.preventDefault();
        this.close();
        return;
      }
      const tab = TABS.find(t => t.key === e.key.toLowerCase());
      if (tab) {
        e.preventDefault();
        this.toggle(tab.id);
      }
      return;
    }

    const tab = TABS.find(t => t.key === e.key.toLowerCase());
    if (tab && this.ctx.canOpen()) {
      e.preventDefault();
      e.stopPropagation();
      this.open(tab.id);
    }
  }

  toggle(tabId) {
    if (this.isOpen && this.activeTab === tabId) {
      this.close();
    } else if (this.isOpen) {
      this.showTab(tabId);
    } else if (this.ctx.canOpen()) {
      this.open(tabId);
    }
  }

  open(tabId) {
    if (this.isOpen) return;
    this.ctx.player.paused = true;

    this.overlay = document.createElement('div');
    this.overlay.className = 'menu-overlay game-menu';
    this.overlay.innerHTML = `
      <div class="menu-panel game-menu-panel">
        <div class="game-menu-tabs" role="tablist">
          ${TABS.map(tab => `
            <button type="button" class="game-menu-tab" role="tab" data-tab="${tab.id}">
              <span class="game-toolbar-key">${tab.key.toUpperCase()}</span>${tab.label}
            </button>
          `).join('')}
          <button type="button" class="game-menu-close" aria-label="Close" title="Close (Esc)">X</button>
        </div>
        <div class="game-menu-body"></div>
      </div>
    `;
    this.overlay.addEventListener('click', e => {
      if (e.target === this.overlay || e.target.closest('.game-menu-close')) {
        this.close();
        return;
      }
      const tabBtn = e.target.closest('.game-menu-tab');
      if (tabBtn) this.showTab(tabBtn.dataset.tab);
    });
    document.body.appendChild(this.overlay);
    this.showTab(tabId);
  }

  showTab(tabId) {
    const tab = TABS.find(t => t.id === tabId);
    if (!tab || !this.overlay) return;

    this._disposeView?.();
    this._disposeView = null;
    this.activeTab = tabId;

    for (const btn of this.overlay.querySelectorAll('.game-menu-tab')) {
      const active = btn.dataset.tab === tabId;
      btn.classList.toggle('game-menu-tab--active', active);
      btn.setAttribute('aria-selected', String(active));
    }
    for (const btn of this.toolbar.querySelectorAll('[data-tab]')) {
      btn.classList.toggle('game-toolbar-btn--active', btn.dataset.tab === tabId);
    }

    const body = this.overlay.querySelector('.game-menu-body');
    body.innerHTML = '';
    body.scrollTop = 0;
    this._disposeView = tab.render(body, this.ctx, { close: () => this.close() }) ?? null;
  }

  close() {
    if (!this.isOpen) return;
    this._disposeView?.();
    this._disposeView = null;
    this.overlay.remove();
    this.overlay = null;
    this.activeTab = null;
    for (const btn of this.toolbar.querySelectorAll('[data-tab]')) {
      btn.classList.remove('game-toolbar-btn--active');
    }
    this.ctx.player.paused = false;
  }

  dispose() {
    this.close();
    window.removeEventListener('keydown', this._onKeyDown, true);
    this.toolbar.remove();
  }
}
