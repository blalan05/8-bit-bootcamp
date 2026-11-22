import {
  STAT_KEYS,
  STAT_TOOLTIPS,
  MIN_STAT,
  MAX_STAT,
  formatStatLabel,
  dexterityToWalkSpeedMultiplier
} from '../character/stats.js';
import { getBackgroundById } from '../character/createCharacter.js';
import { CharacterPreview } from '../character/characterPreview.js';
import { isSandbox, isIronman, isGraduated } from '../campaign/campaignState.js';
import { getCampaignForCharacter, getCampaignClimate } from '../campaigns/campaignRegistry.js';
import { getTotalWeeks } from '../campaign/campaignData.js';
import { escapeHtml } from './html.js';
import { getRank, getPerks, perkName, perkUsesLeft, perkUsesPerOperation, describeNextPromotion, rankedName, billetName, PERK_INFO } from '../campaign/rank.js';

const STAT_NAMES = {
  strength: 'Strength',
  dexterity: 'Dexterity',
  intelligence: 'Intelligence',
  endurance: 'Endurance',
  leadership: 'Leadership'
};

function formatModifier(value) {
  if (!value) return '';
  const cls = value > 0 ? 'stat-delta--up' : 'stat-delta--down';
  return `<span class="stat-delta ${cls}">${value > 0 ? '+' : ''}${value}</span>`;
}

function meter(value, max = 100, modifier = '') {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return `<div class="sheet-meter ${modifier}"><div class="sheet-meter-fill" style="width:${pct}%"></div></div>`;
}

function row(label, value) {
  return `<div class="recruiter-result-row"><span>${label}</span><span>${value}</span></div>`;
}

/**
 * @param {HTMLElement} container
 * @param {import('./gameMenu.js').GameMenuContext} ctx
 */
export function renderCharacterSheet(container, ctx) {
  const character = ctx.getCharacter();
  const campaignDef = getCampaignForCharacter(character);
  const climate = getCampaignClimate(character);
  const campaign = character.campaign ?? {};
  const bg = getBackgroundById(character.backgroundId);
  const sandbox = isSandbox(character);
  const baseUnit = campaignDef.unitLabel ?? 'Recruit';
  const unitLabel = !isGraduated(character)
    ? baseUnit
    : campaignDef.usesRecruiter === false
      ? `${baseUnit} · ${character.honorsTitle ?? 'Campaign Honors'}`
      : (character.honorsTitle ?? 'Marine');

  const statRows = STAT_KEYS.map(key => {
    const value = character.stats?.[key] ?? 10;
    const pct = ((value - MIN_STAT) / (MAX_STAT - MIN_STAT)) * 100;
    return `
      <div class="sheet-stat" title="${STAT_TOOLTIPS[key]}">
        <span class="sheet-stat-label">${formatStatLabel(key)}</span>
        <span class="sheet-stat-name">${STAT_NAMES[key]} ${formatModifier(bg.modifiers?.[key])}</span>
        <div class="sheet-meter"><div class="sheet-meter-fill" style="width:${pct}%"></div></div>
        <span class="sheet-stat-value">${value}</span>
        <span class="sheet-stat-hint">${STAT_TOOLTIPS[key]}</span>
      </div>
    `;
  }).join('');

  const walkPct = Math.round(dexterityToWalkSpeedMultiplier(character.stats?.dexterity ?? 10) * 100);

  const results = Object.values(campaign.completed ?? {});
  const gradeCount = grade => results.filter(r => r.grade === grade).length;
  const periodLabel = campaignDef.periodLabel ?? 'Week';
  const sideQuestsDone = Object.values(campaign.sideQuests ?? {}).filter(v => v === 'done').length;
  const difficulty = sandbox ? 'Sandbox' : isIronman(character) ? 'Ironman' : 'Story';

  const record = sandbox
    ? `
      ${row('Mode', 'Sandbox · Free Play')}
      ${row('Activities run', results.length)}
    `
    : `
      ${row('Difficulty', difficulty)}
      ${row('Progress', isGraduated(character)
        ? 'Complete'
        : `${periodLabel} ${campaign.week} of ${getTotalWeeks(character)} · Day ${campaign.dayInWeek}`)}
      <div class="sheet-meter-row">
        <span>Readiness</span>${meter(campaign.readiness ?? 0)}<span>${campaign.readiness ?? 0}%</span>
      </div>
      <div class="sheet-meter-row">
        <span>${climate.resourceLabel}</span>${meter(campaign.hydration ?? 100, 100, 'sheet-meter--water')}<span>${Math.round(campaign.hydration ?? 100)}%</span>
      </div>
      ${row('Days completed', results.length)}
      ${row('Grades', `
        <span class="grade-badge grade-badge--honor">${gradeCount('honor')} HONOR</span>
        <span class="grade-badge grade-badge--passing">${gradeCount('passing')} PASS</span>
        <span class="grade-badge grade-badge--unsat">${gradeCount('unsat')} UNSAT</span>
      `)}
      ${row('Side quests done', sideQuestsDone)}
      ${isIronman(character) ? row('Recycle tokens', campaign.recycleTokens ?? 0) : ''}
    `;

  const rank = getRank(character);
  const nextPromotion = describeNextPromotion(character);
  const perkLines = getPerks(character).map(perk => {
    const perOp = perkUsesPerOperation(character, perk);
    const uses = perk === 'underground' ? '' : ` (${perkUsesLeft(character, perk)}/${perOp} this ${periodLabel.toLowerCase()})`;
    return `<p class="recruiter-copy recruiter-copy--small promotion-perk"><strong>${perkName(character, perk)}</strong>${uses} — ${PERK_INFO[perk].description}</p>`;
  }).join('');
  const rankSection = rank
    ? `
        <h3 class="sheet-heading">Rank</h3>
        <div class="sheet-record">
          ${row('Grade', `<span class="rank-insignia">${rank.abbr}</span>${rank.title} (E-${rank.grade})`)}
          ${billetName(character) ? row('Billet', `${billetName(character)} · rank duty each ${periodLabel.toLowerCase()}`) : ''}
        </div>
        ${perkLines}
        ${nextPromotion ? `<p class="recruiter-copy recruiter-copy--small">Next: ${nextPromotion}</p>` : ''}`
    : '';

  container.innerHTML = `
    <div class="sheet">
      <div class="sheet-portrait-col">
        <div class="sheet-portrait" id="sheet-portrait"></div>
        <p class="sheet-name">${escapeHtml(rankedName(character))}</p>
        <p class="sheet-rank">${escapeHtml(unitLabel)}</p>
        <p class="sheet-campaign">${campaignDef.title}<br>${campaignDef.subtitle ?? ''}</p>
      </div>
      <div class="sheet-main">
        <h3 class="sheet-heading">Background</h3>
        <p class="sheet-bg-name">${bg.name}</p>
        <p class="recruiter-copy recruiter-copy--small">${bg.description ?? ''}</p>

        <h3 class="sheet-heading">Attributes</h3>
        <div class="sheet-stats">${statRows}</div>
        <p class="sheet-derived">Walk speed ${walkPct}% (from DEX)</p>

        ${rankSection}

        <h3 class="sheet-heading">Service Record</h3>
        <div class="sheet-record">${record}</div>
      </div>
    </div>
  `;

  const preview = new CharacterPreview(container.querySelector('#sheet-portrait'), {
    width: 160,
    height: 232,
    background: null
  });
  preview.update(character);

  return () => preview.dispose();
}
