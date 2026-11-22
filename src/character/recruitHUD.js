import { STAT_KEYS, formatStatLabel, STAT_TOOLTIPS } from './stats.js';
import { getBackgroundById } from './createCharacter.js';
import { isSandbox } from '../campaign/campaignState.js';
import { getCampaignForCharacter, getCampaignClimate } from '../campaigns/campaignRegistry.js';
import { rankedName } from '../campaign/rank.js';

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
    const campaignDef = getCampaignForCharacter(character);
    const climate = getCampaignClimate(character);
    const statRows = STAT_KEYS.map(key => `
      <div class="recruit-stat" title="${STAT_TOOLTIPS[key]}">
        <span class="recruit-stat-label">${formatStatLabel(key)}</span>
        <span class="recruit-stat-value">${character.stats[key]}</span>
      </div>
    `).join('');

    const campaign = character.campaign;
    const sandbox = isSandbox(character);
    const ironman = campaign?.difficulty === 'ironman';
    const periodLabel = campaignDef.periodLabel ?? 'Week';
    const weekMeta = campaign?.phase === 'graduated'
      ? `Complete · ${character.honorsTitle ?? 'Marine'}`
      : sandbox
        ? 'Sandbox · Free Play'
        : campaign
          ? `${periodLabel} ${campaign.week} · Day ${campaign.dayInWeek} · Ready ${campaign.readiness}%`
          : `Day ${character.bootDay ?? 0}`;

    const hydration = campaign?.hydration ?? 100;
    const tokens = campaign?.recycleTokens ?? 0;
    const hydrationBar = !sandbox && campaign?.phase !== 'graduated'
      ? `<div class="recruit-hydration">
          <span class="recruit-hydration-label">${climate.resourceLabel}</span>
          <div class="recruit-hydration-track"><div class="recruit-hydration-fill" style="width:${hydration}%"></div></div>
          <span class="recruit-hydration-value">${Math.round(hydration)}%</span>
        </div>`
      : '';

    const tokenBadge = ironman && tokens > 0
      ? `<span class="recruit-token-badge" title="Recycle tokens">${tokens} recycle</span>`
      : '';

    const modeBadge = sandbox
      ? '<span class="recruit-mode-badge recruit-mode-badge--sandbox">SANDBOX</span>'
      : ironman
        ? '<span class="recruit-mode-badge recruit-mode-badge--ironman">IRONMAN</span>'
        : '';

    el.innerHTML = `
      <div class="recruit-hud-name">${rankedName(character)} ${modeBadge}</div>
      <div class="recruit-hud-meta">${weekMeta} · ${bg.name} ${tokenBadge}</div>
      ${hydrationBar}
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
