import { STAT_KEYS, formatStatLabel, STAT_TOOLTIPS } from './stats.js';
import { getBackgroundById } from './createCharacter.js';

export function createRecruitHUD(character) {
  const el = document.createElement('div');
  el.className = 'recruit-hud';
  el.id = 'recruit-hud';

  function render() {
    if (!character) {
      el.innerHTML = '';
      return;
    }
    const bg = getBackgroundById(character.backgroundId);
    const statRows = STAT_KEYS.map(key => `
      <div class="recruit-stat" title="${STAT_TOOLTIPS[key]}">
        <span class="recruit-stat-label">${formatStatLabel(key)}</span>
        <span class="recruit-stat-value">${character.stats[key]}</span>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="recruit-hud-name">${character.name}</div>
      <div class="recruit-hud-meta">Day ${character.bootDay ?? 0} · ${bg.name}</div>
      <div class="recruit-hud-stats">${statRows}</div>
    `;
  }

  render();

  return {
    element: el,
    update(nextCharacter) {
      character = nextCharacter;
      render();
    }
  };
}
