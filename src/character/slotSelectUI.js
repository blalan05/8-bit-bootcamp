import { getAllSlots, deleteSlot, getSlotCount } from './saveSlots.js';
import { getBackgroundById } from './createCharacter.js';

function createConfirmDialog(message) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay confirm-overlay';
    overlay.innerHTML = `
      <div class="confirm-box">
        <p>${message}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-danger" data-action="yes">Delete</button>
          <button type="button" class="btn btn-secondary" data-action="no">Cancel</button>
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

/**
 * @returns {Promise<{ type: 'continue', character: object, slotIndex: number } | { type: 'create', slotIndex: number }>}
 */
export function showSlotSelect() {
  return new Promise(resolve => {
    let focusedSlot = 0;
    const slots = getAllSlots();

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel slot-panel">
        <h1 class="menu-title">8-BIT BOOTCAMP</h1>
        <p class="menu-subtitle">Select a save slot</p>
        <div class="slot-list" role="listbox"></div>
        <p class="menu-hint">Press 1–3 to select · Enter to confirm · Delete to remove save</p>
      </div>
    `;

    const slotList = overlay.querySelector('.slot-list');

    function renderSlots() {
      const current = getAllSlots();
      slotList.innerHTML = current.map((char, i) => {
        const selected = i === focusedSlot ? ' slot-card--focused' : '';
        if (!char) {
          return `
            <button type="button" class="slot-card slot-card--empty${selected}" data-slot="${i}" role="option">
              <span class="slot-label">Slot ${i + 1}</span>
              <span class="slot-name">New Recruit</span>
            </button>`;
        }
        const bg = getBackgroundById(char.backgroundId);
        return `
          <button type="button" class="slot-card slot-card--filled${selected}" data-slot="${i}" role="option">
            <span class="slot-label">Slot ${i + 1}</span>
            <span class="slot-name">${char.name}</span>
            <span class="slot-meta">Day ${char.bootDay ?? 0} · ${bg.name}</span>
          </button>`;
      }).join('');
    }

    function focusSlot(index) {
      focusedSlot = Math.max(0, Math.min(getSlotCount() - 1, index));
      renderSlots();
      slotList.querySelector(`[data-slot="${focusedSlot}"]`)?.focus();
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

    async function deleteFocusedSlot() {
      const char = getAllSlots()[focusedSlot];
      if (!char) return;
      const confirmed = await createConfirmDialog(
        `Delete recruit ${char.name}? This cannot be undone.`
      );
      if (confirmed) {
        deleteSlot(focusedSlot);
        renderSlots();
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
      if (e.key === 'Delete') deleteFocusedSlot();
    }

    slotList.addEventListener('click', (e) => {
      const card = e.target.closest('[data-slot]');
      if (!card) return;
      const index = Number(card.dataset.slot);
      focusSlot(index);
      activateSlot(index);
    });

    slotList.addEventListener('focusin', (e) => {
      const card = e.target.closest('[data-slot]');
      if (card) focusedSlot = Number(card.dataset.slot);
    });

    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
    renderSlots();
    slotList.querySelector(`[data-slot="${focusedSlot}"]`)?.focus();
  });
}
