import { getMeta, PERKS, purchasePerk } from './metaProgress.js';

/**
 * "The Locker" perk shop overlay.
 */
export function showLocker() {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';

    function render() {
      const meta = getMeta();
      const perkRows = Object.values(PERKS).map(perk => {
        const owned = !!meta.perks[perk.id];
        const canBuy = !owned && meta.grit >= perk.cost;
        return `
          <div class="locker-perk${owned ? ' locker-perk--owned' : ''}">
            <div class="locker-perk-info">
              <span class="locker-perk-name">${perk.name}</span>
              <span class="locker-perk-desc">${perk.description}</span>
            </div>
            ${owned
              ? '<span class="locker-owned-badge">Owned</span>'
              : `<button type="button" class="btn btn-secondary locker-buy-btn" data-perk="${perk.id}" ${canBuy ? '' : 'disabled'}>${perk.cost} Grit</button>`
            }
          </div>`;
      }).join('');

      overlay.innerHTML = `
        <div class="menu-panel locker-panel">
          <h2 class="menu-title">The Locker</h2>
          <p class="menu-subtitle">Permanent perks for future recruits</p>
          <p class="locker-grit-balance">Grit: <strong>${meta.grit}</strong></p>
          <div class="locker-perk-list">${perkRows}</div>
          <div class="schedule-actions">
            <button type="button" class="btn btn-primary" id="locker-close">Close</button>
          </div>
        </div>
      `;

      overlay.querySelector('#locker-close')?.addEventListener('click', () => {
        overlay.remove();
        resolve();
      }, { once: true });

      overlay.querySelectorAll('.locker-buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const result = purchasePerk(btn.dataset.perk);
          if (!result.ok) return;
          render();
        });
      });
    }

    render();
    document.body.appendChild(overlay);
  });
}
