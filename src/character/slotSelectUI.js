import { getAllSlots, deleteSlot, getSlotCount } from './saveSlots.js';
import { getBackgroundById } from './createCharacter.js';
import { getMeta } from '../campaign/metaProgress.js';
import { showLocker } from '../campaign/lockerUI.js';

function createConfirmDialog(message, { confirmLabel = 'Confirm', cancelLabel = 'Cancel' } = {}) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay confirm-overlay';
    overlay.innerHTML = `
      <div class="confirm-box">
        <p>${message}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-danger" data-action="yes">${confirmLabel}</button>
          <button type="button" class="btn btn-secondary" data-action="no">${cancelLabel}</button>
        </div>
      </div>
    `;

    const onKey = (e) => {
      if (e.key === 'Escape') cleanup(false);
      if (e.key === 'Enter') {
        const action = document.activeElement?.dataset?.action;
        if (action === 'yes') cleanup(true);
        if (action === 'no') cleanup(false);
      }
    };

    const cleanup = (confirmed) => {
      document.removeEventListener('keydown', onKey);
      overlay.remove();
      resolve(confirmed);
    };

    overlay.addEventListener('click', (e) => {
      const action = e.target.closest('[data-action]')?.dataset.action;
      if (action === 'yes') cleanup(true);
      if (action === 'no') cleanup(false);
    });

    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
    overlay.querySelector('[data-action=no]').focus();
  });
}

function modeBadge(character) {
  if (character.mode === 'sandbox') return '<span class="slot-badge slot-badge--sandbox">SANDBOX</span>';
  if (character.campaign?.difficulty === 'ironman') return '<span class="slot-badge slot-badge--ironman">IRONMAN</span>';
  return '';
}

/**
 * @returns {Promise<{ type: 'continue', character: object, slotIndex: number } | { type: 'create', slotIndex: number }>}
 */
export function showSlotSelect() {
  return new Promise(resolve => {
    let focusedSlot = 0;

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel slot-panel">
        <h1 class="menu-title">8-BIT BOOTCAMP</h1>
        <p class="menu-subtitle">Select a save slot</p>
        <p class="slot-grit" id="slot-grit"></p>
        <div class="slot-list" role="listbox"></div>
        <div class="slot-footer-actions">
          <button type="button" class="btn btn-secondary" id="btn-locker">The Locker</button>
        </div>
        <p class="menu-hint">Press 1–3 to select · Enter to confirm · Delete to reset focused slot</p>
      </div>
    `;

    const slotList = overlay.querySelector('.slot-list');
    const gritEl = overlay.querySelector('#slot-grit');

    function renderSlots() {
      const meta = getMeta();
      gritEl.innerHTML = `Grit: <strong>${meta.grit}</strong> · Runs: ${meta.runsCompleted} · Best readiness: ${meta.bestReadiness}%`;

      const current = getAllSlots();
      slotList.innerHTML = current.map((char, i) => {
        const selected = i === focusedSlot ? ' slot-row--focused' : '';
        if (!char) {
          return `
            <div class="slot-row${selected}">
              <button type="button" class="slot-card slot-card--empty" data-slot="${i}" role="option">
                <span class="slot-label">Slot ${i + 1}</span>
                <span class="slot-name">New Recruit</span>
              </button>
            </div>`;
        }
        const bg = getBackgroundById(char.backgroundId);
        const camp = char.campaign;
        const progress = char.mode === 'sandbox'
          ? 'Sandbox · free play'
          : camp?.phase === 'graduated'
            ? `Graduated · ${char.honorsTitle ?? 'Marine'}`
            : camp
              ? `Week ${camp.week} · Day ${camp.dayInWeek} · ${camp.readiness}% ready`
              : `Day ${char.bootDay ?? 0}`;
        return `
          <div class="slot-row${selected}">
            <button type="button" class="slot-card slot-card--filled" data-slot="${i}" role="option">
              <span class="slot-label">Slot ${i + 1} ${modeBadge(char)}</span>
              <span class="slot-name">${char.name}</span>
              <span class="slot-meta">${progress} · ${bg.name}</span>
            </button>
            <button type="button" class="btn btn-danger slot-reset-btn" data-slot="${i}" aria-label="Reset save slot ${i + 1}">Reset</button>
          </div>`;
      }).join('');
    }

    function focusSlot(index) {
      focusedSlot = Math.max(0, Math.min(getSlotCount() - 1, index));
      renderSlots();
      slotList.querySelector(`.slot-card[data-slot="${focusedSlot}"]`)?.focus();
    }

    function activateSlot(index) {
      const char = getAllSlots()[index];
      cleanup();
      if (char) {
        resolve({ type: 'continue', character: char, slotIndex: index });
      } else {
        resolve({ type: 'create', slotIndex: index });
      }
    }

    async function resetSlot(index) {
      const char = getAllSlots()[index];
      if (!char) return;
      const confirmed = await createConfirmDialog(
        `Reset slot ${index + 1} and delete ${char.name}? This cannot be undone.`,
        { confirmLabel: 'Reset Save' }
      );
      if (confirmed) {
        deleteSlot(index);
        focusedSlot = index;
        renderSlots();
        slotList.querySelector(`.slot-card[data-slot="${index}"]`)?.focus();
      }
    }

    function cleanup() {
      document.removeEventListener('keydown', onKey);
      overlay.remove();
    }

    function onKey(e) {
      if (e.key === '1') focusSlot(0);
      if (e.key === '2') focusSlot(1);
      if (e.key === '3') focusSlot(2);
      if (e.key === 'ArrowUp') focusSlot(focusedSlot - 1);
      if (e.key === 'ArrowDown') focusSlot(focusedSlot + 1);
      if (e.key === 'Enter') activateSlot(focusedSlot);
      if (e.key === 'Delete') resetSlot(focusedSlot);
    }

    slotList.addEventListener('click', (e) => {
      const resetButton = e.target.closest('.slot-reset-btn');
      if (resetButton) {
        e.stopPropagation();
        resetSlot(Number(resetButton.dataset.slot));
        return;
      }
      const card = e.target.closest('.slot-card');
      if (!card) return;
      const index = Number(card.dataset.slot);
      focusSlot(index);
      activateSlot(index);
    });

    slotList.addEventListener('focusin', (e) => {
      const card = e.target.closest('.slot-card');
      if (card) focusedSlot = Number(card.dataset.slot);
    });

    overlay.querySelector('#btn-locker').addEventListener('click', async () => {
      await showLocker();
      renderSlots();
    });

    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
    renderSlots();
    slotList.querySelector(`.slot-card[data-slot="${focusedSlot}"]`)?.focus();
  });
}
