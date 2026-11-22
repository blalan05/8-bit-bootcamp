import { getCampaignForCharacter, getCampaignClimate } from '../campaigns/campaignRegistry.js';
import { perkName, PERK_INFO, rankedName } from './rank.js';

/**
 * Theater transition when campaign moves to a new map/theater.
 * @param {{ title: string, subtitle: string, paragraphs: string[], hint?: string, button?: string }} transition
 */
export function showTheaterTransition(transition) {
  const paragraphs = (transition.paragraphs ?? []).map(p =>
    `<p class="recruiter-copy">${p}</p>`
  ).join('');
  const hint = transition.hint
    ? `<p class="recruiter-copy recruiter-copy--small">${transition.hint}</p>`
    : '';

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${transition.title ?? 'New Orders'}</h2>
        <p class="menu-subtitle">${transition.subtitle ?? ''}</p>
        <div class="schedule-body">
          ${paragraphs}
          ${hint}
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="theater-continue">${transition.button ?? 'Continue'}</button>
        </div>
      </div>
    `;
    overlay.querySelector('#theater-continue').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
    overlay.querySelector('#theater-continue').focus();
  });
}

/**
 * Day-start schedule briefing overlay.
 * @param {object} character
 * @param {object} dayDef
 * @param {object} weekDef
 */
export function showSchedule(character, dayDef, weekDef) {
  const campaign = getCampaignForCharacter(character);
  const periodLabel = campaign.periodLabel ?? 'Week';
  const isCombat = campaign.usesRecruiter === false;
  const dayLabel = isCombat ? 'Mission Day' : 'Training Day';

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${periodLabel} ${weekDef.id}: ${weekDef.name}</h2>
        <p class="menu-subtitle">${dayLabel} ${character.campaign.dayInWeek}</p>
        <div class="schedule-body">
          <p class="schedule-assignment">${dayDef.title}</p>
          <p class="recruiter-copy">${dayDef.briefing}</p>
          <div class="schedule-location">
            <span class="schedule-label">Report to</span>
            <span class="schedule-value">${dayDef.locationName}</span>
          </div>
          <p class="recruiter-copy recruiter-copy--small">${campaign.mapHint}</p>
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="schedule-begin">${isCombat ? 'Begin Mission' : 'Begin Patrol'}</button>
        </div>
      </div>
    `;

    overlay.querySelector('#schedule-begin').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });

    document.body.appendChild(overlay);
    overlay.querySelector('#schedule-begin').focus();
  });
}

/**
 * Week complete overlay.
 * @param {object} weekDef
 * @param {object} [character]
 */
export function showWeekComplete(weekDef, character) {
  const campaign = getCampaignForCharacter(character);
  const periodLabel = campaign.periodLabel ?? 'Week';

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${periodLabel} ${weekDef.id} Complete</h2>
        <p class="menu-subtitle">${weekDef.name}</p>
        <p class="recruiter-copy">${weekDef.theme}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="week-continue">Continue</button>
        </div>
      </div>
    `;
    overlay.querySelector('#week-continue').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}

function showPanel(html, buttonLabel) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        ${html}
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="panel-ok">${buttonLabel}</button>
        </div>
      </div>
    `;
    overlay.querySelector('#panel-ok').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}

function perkListHtml(character, perks) {
  return perks.map(perk => `
    <p class="recruiter-copy recruiter-copy--small promotion-perk">
      <strong>${perkName(character, perk)}</strong> — ${PERK_INFO[perk].description}
    </p>`).join('');
}

/**
 * Promotion warrant read at the end of an operation.
 * @param {object} character promoted character
 * @param {{ from: object, to: object, meritorious: boolean, perks: string[] }} promotion
 */
export function showPromotion(character, promotion) {
  const { from, to, meritorious, perks } = promotion;
  const lead = to.id === 'sgt'
    ? 'You now lead a squad: three fireteams, twelve Marines.'
    : to.id === 'cpl'
      ? 'You now lead a fireteam of three Marines. You are a noncommissioned officer.'
      : 'More is expected of you now.';
  return showPanel(`
    <h2 class="menu-title">${meritorious ? 'Meritorious Promotion' : 'Promotion'}</h2>
    <p class="menu-subtitle">${from.title} → ${to.title}</p>
    <p class="schedule-assignment"><span class="rank-insignia">${to.abbr}</span>${character.name}</p>
    <p class="recruiter-copy">${meritorious ? 'An all-Honor operation. Your commander waived time in grade.' : 'Your conduct this operation earned the warrant.'} ${lead}</p>
    ${perks.length ? `<p class="recruiter-copy recruiter-copy--small">Unlocked:</p>${perkListHtml(character, perks)}` : ''}
  `, 'Pin It On');
}

/**
 * Meritorious PFC board at bootcamp graduation.
 * @param {object} character
 * @param {{ promoted: boolean, checks: { label: string, ok: boolean }[] }} board
 */
export function showMeritoriousBoard(character, { promoted, checks }) {
  const lines = checks.map(c =>
    `<p class="recruiter-copy recruiter-copy--small promotion-check promotion-check--${c.ok ? 'ok' : 'no'}">${c.label}</p>`
  ).join('');
  return showPanel(`
    <h2 class="menu-title">${promoted ? 'Meritorious Promotion' : 'Promotion Board'}</h2>
    <p class="menu-subtitle">${promoted ? 'Private → Private First Class' : 'Graduating as Private'}</p>
    <p class="schedule-assignment"><span class="rank-insignia">${promoted ? 'PFC' : 'Pvt'}</span>${character.name}</p>
    <p class="recruiter-copy">${promoted
      ? 'Your Drill Instructors put you up for meritorious promotion. You graduate a Private First Class.'
      : 'The board passed you over this time. Earn your stripes in the fleet.'}</p>
    ${lines}
    <p class="recruiter-copy recruiter-copy--small">Your rank carries into your next deployment.</p>
  `, promoted ? 'Pin It On' : 'Aye, aye');
}

/**
 * Stub week placeholder (fallback if a week has no days).
 * @param {object} weekDef
 */
export function showComingSoon(weekDef) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Week ${weekDef.id}: ${weekDef.name}</h2>
        <p class="menu-subtitle">Coming in a future update</p>
        <p class="recruiter-copy">${weekDef.theme}</p>
        <p class="recruiter-copy recruiter-copy--small">Week 1 vertical slice is complete. More training weeks are on the way. Free roam the depot until then.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="coming-soon-ok">Roger</button>
        </div>
      </div>
    `;
    overlay.querySelector('#coming-soon-ok').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}

/**
 * Campaign completion screen: graduation for the depot, campaign honors in the field.
 * @param {object} character
 */
export function showGraduation(character) {
  const campaign = getCampaignForCharacter(character);
  const field = campaign.usesRecruiter === false;
  const completion = campaign.completion ?? {};
  const honors = character.honorsTitle ?? 'United States Marine';
  const readiness = character.campaign?.readiness ?? 0;
  const completed = Object.keys(character.campaign?.completed ?? {}).length;
  const dayLabel = field ? 'Missions completed' : 'Training days';
  const honorsCopy = field
    ? `Campaign honors: <strong>${honors}</strong>. The battle streamer goes on the colors.`
    : `You have earned the title <strong>${honors}</strong>.`;

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel graduation-panel">
        <h2 class="menu-title">${completion.title ?? (field ? 'Campaign Complete' : 'Graduation')}</h2>
        <p class="menu-subtitle">${completion.subtitle ?? campaign.subtitle}</p>
        <p class="schedule-assignment">${rankedName(character)}</p>
        <p class="recruiter-copy">${honorsCopy}</p>
        <div class="graduation-stats">
          <div class="recruiter-result-row"><span>Readiness</span><span>${readiness}%</span></div>
          <div class="recruiter-result-row"><span>${dayLabel}</span><span>${completed}</span></div>
          <div class="recruiter-result-row"><span>Status</span><span>Complete</span></div>
        </div>
        <p class="recruiter-copy recruiter-copy--small">${completion.footer ?? 'Semper Fidelis.'}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="grad-ok">Dismiss</button>
        </div>
      </div>
    `;
    overlay.querySelector('#grad-ok').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}

/**
 * One-time briefing on the survival meter and its map pickups ("Hydrate or Die").
 * @param {object} character
 * @param {{ iconUrl: string, refill: number, perDay: number, ironman: boolean }} details
 */
export function showSurvivalBriefing(character, { iconUrl, refill, perDay, ironman }) {
  const climate = getCampaignClimate(character);
  const resource = climate.resourceLabel;
  const dayKind = getCampaignForCharacter(character).usesRecruiter === false ? 'mission' : 'training';
  const consequence = ironman
    ? `Hit 0% in Ironman and you become a ${climate.casualtyLabel.toLowerCase()} — the run is over.`
    : `Hit 0% and you go down as a ${climate.casualtyLabel.toLowerCase()}: readiness -5 and a trip to the corpsman.`;
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel survival-briefing">
        <h2 class="menu-title">${climate.briefingTitle}</h2>
        <img class="survival-briefing-icon" src="${iconUrl}" alt="${climate.pickupName}" width="64" height="64" />
        <p class="recruiter-copy">Your <strong>${resource}</strong> meter (top-left, under your name) drains the whole time you're on patrol. Endurance events drain it faster.</p>
        <p class="recruiter-copy">Walk over a <strong>${climate.pickupName}</strong> to refill ${refill}%. ${perDay} are scattered across the map each ${dayKind} day.</p>
        <p class="recruiter-copy recruiter-copy--small">${consequence}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="survival-ok">Aye, aye</button>
        </div>
      </div>
    `;
    overlay.querySelector('#survival-ok').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}

/**
 * Story mode climate exhaustion warning (heat or frostbite).
 * @param {object} character
 */
export function showHeatExhaustion(character) {
  const climate = getCampaignClimate(character);
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${climate.exhaustionTitle}</h2>
        <p class="menu-subtitle">Story mode</p>
        <p class="recruiter-copy">${climate.exhaustionCopy}</p>
        <p class="recruiter-copy recruiter-copy--small">${climate.pickupHint}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="heat-ok">Roger</button>
        </div>
      </div>
    `;
    overlay.querySelector('#heat-ok').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}

/**
 * Ironman recycle token consumed — run continues.
 * @param {object} character
 * @param {string} reason
 */
export function showRecycled(character, reason) {
  const climate = getCampaignClimate(character);
  const field = getCampaignForCharacter(character).usesRecruiter === false;
  const labels = {
    performance: 'Performance Drop',
    heat: climate.casualtyLabel
  };
  const copy = field
    ? {
      title: 'Back in the Fight',
      body: 'Your squad leader vouched for you. One token consumed. Do not fail again.',
      button: 'Continue Mission'
    }
    : {
      title: 'Recycled',
      body: 'Your recycle paperwork was approved. One token consumed. Do not fail again.',
      button: 'Continue Training'
    };
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel runend-panel">
        <h2 class="menu-title">${copy.title}</h2>
        <p class="menu-subtitle">${labels[reason] ?? 'Failure'} — last chance</p>
        <p class="recruiter-copy">${copy.body}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="recycled-ok">${copy.button}</button>
        </div>
      </div>
    `;
    overlay.querySelector('#recycled-ok').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}

/**
 * Ironman run ended — debrief before slot wipe.
 * @param {object} character
 * @param {string} reason
 * @param {number} gritEarned
 */
export function showRunEnd(character, reason, gritEarned) {
  const campaign = getCampaignForCharacter(character);
  const climate = getCampaignClimate(character);
  const periodLabel = campaign.periodLabel ?? 'Week';
  const labels = {
    performance: 'Performance Drop',
    heat: climate.casualtyLabel
  };
  const week = character.campaign?.week ?? 1;
  const readiness = character.campaign?.readiness ?? 0;
  const completed = Object.keys(character.campaign?.completed ?? {}).length;

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel runend-panel">
        <h2 class="menu-title">Run Ended</h2>
        <p class="menu-subtitle">${labels[reason] ?? 'Dropped'}</p>
        <p class="schedule-assignment">${character.name}</p>
        <p class="recruiter-copy">Ironman run over. Grit earned carries to The Locker for your next ${campaign.usesRecruiter === false ? 'Marine' : 'recruit'}.</p>
        <div class="graduation-stats">
          <div class="recruiter-result-row"><span>${periodLabel}s reached</span><span>${week}</span></div>
          <div class="recruiter-result-row"><span>Days completed</span><span>${completed}</span></div>
          <div class="recruiter-result-row"><span>Readiness</span><span>${readiness}%</span></div>
          <div class="recruiter-result-row"><span>Grit earned</span><span class="stat-delta stat-delta--up">+${gritEarned}</span></div>
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="runend-ok">Return to Slots</button>
        </div>
      </div>
    `;
    overlay.querySelector('#runend-ok').addEventListener('click', () => {
      overlay.remove();
      resolve();
    }, { once: true });
    document.body.appendChild(overlay);
  });
}
