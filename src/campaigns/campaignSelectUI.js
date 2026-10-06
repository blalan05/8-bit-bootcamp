import { CAMPAIGN_ORDER, CAMPAIGNS } from './campaignRegistry.js';

/**
 * @returns {Promise<import('./campaignRegistry.js').CampaignDef | null>}
 */
export function showCampaignSelect() {
  return new Promise(resolve => {
    let focusedIndex = 0;
    const campaigns = CAMPAIGN_ORDER.map(id => CAMPAIGNS[id]);

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel slot-panel campaign-panel">
        <h1 class="menu-title">SELECT CAMPAIGN</h1>
        <p class="menu-subtitle">Choose your deployment</p>
        <div class="campaign-list" role="listbox"></div>
        <p class="menu-hint">Arrow keys to focus · Enter to select · Esc to cancel</p>
      </div>
    `;

    const listEl = overlay.querySelector('.campaign-list');

    function render() {
      listEl.innerHTML = campaigns.map((campaign, i) => {
        const selected = i === focusedIndex ? ' campaign-card--focused' : '';
        const locked = campaign.status === 'comingSoon';
        const badge = locked
          ? '<span class="slot-badge slot-badge--locked">COMING SOON</span>'
          : '<span class="slot-badge slot-badge--available">AVAILABLE</span>';
        return `
          <button type="button"
            class="campaign-card${selected}${locked ? ' campaign-card--locked' : ''}"
            data-index="${i}"
            data-id="${campaign.id}"
            role="option"
            ${locked ? 'disabled' : ''}>
            <span class="campaign-card-title">${campaign.title} ${badge}</span>
            <span class="campaign-card-subtitle">${campaign.subtitle}</span>
          </button>`;
      }).join('');
    }

    function focusIndex(index) {
      focusedIndex = Math.max(0, Math.min(campaigns.length - 1, index));
      render();
      listEl.querySelector(`[data-index="${focusedIndex}"]`)?.focus();
    }

    function activate(index) {
      const campaign = campaigns[index];
      if (campaign.status !== 'available') return;
      cleanup();
      resolve(campaign);
    }

    function cleanup() {
      document.removeEventListener('keydown', onKey);
      overlay.remove();
    }

    function onKey(e) {
      if (e.key === 'Escape') {
        cleanup();
        resolve(null);
      }
      if (e.key === 'ArrowUp') focusIndex(focusedIndex - 1);
      if (e.key === 'ArrowDown') focusIndex(focusedIndex + 1);
      if (e.key === 'Enter') activate(focusedIndex);
    }

    listEl.addEventListener('click', (e) => {
      const card = e.target.closest('.campaign-card');
      if (!card || card.disabled) return;
      const index = Number(card.dataset.index);
      focusIndex(index);
      activate(index);
    });

    listEl.addEventListener('focusin', (e) => {
      const card = e.target.closest('.campaign-card');
      if (card) focusedIndex = Number(card.dataset.index);
    });

    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
    render();
    listEl.querySelector(`[data-index="${focusedIndex}"]`)?.focus();
  });
}
