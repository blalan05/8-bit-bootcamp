import { getCampaignForCharacter, getCampaignClimate } from '../campaigns/campaignRegistry.js';

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
 * Graduation ceremony screen.
 * @param {object} character
 */
export function showGraduation(character) {
  const campaign = getCampaignForCharacter(character);
  const completion = campaign.completion ?? {};
  const honors = character.honorsTitle ?? 'United States Marine';
  const readiness = character.campaign?.readiness ?? 0;
  const completed = Object.keys(character.campaign?.completed ?? {}).length;
  const dayLabel = campaign.usesRecruiter === false ? 'Missions completed' : 'Training days';

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel graduation-panel">
        <h2 class="menu-title">${completion.title ?? 'Graduation'}</h2>
        <p class="menu-subtitle">${completion.subtitle ?? campaign.subtitle}</p>
        <p class="schedule-assignment">${character.name}</p>
        <p class="recruiter-copy">You have earned the title <strong>${honors}</strong>.</p>
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
  const labels = {
    performance: 'Performance Drop',
    heat: climate.casualtyLabel
  };
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel runend-panel">
        <h2 class="menu-title">Recycled</h2>
        <p class="menu-subtitle">${labels[reason] ?? 'Failure'} — last chance</p>
        <p class="recruiter-copy">Your recycle paperwork was approved. One token consumed. Do not fail again.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="recycled-ok">Continue Training</button>
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
        <p class="recruiter-copy">Ironman run over. Grit earned carries to The Locker for your next recruit.</p>
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
