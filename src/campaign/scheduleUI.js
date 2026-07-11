/**
 * Day-start schedule briefing overlay.
 * @param {object} character
 * @param {object} dayDef
 * @param {object} weekDef
 */
export function showSchedule(character, dayDef, weekDef) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Week ${weekDef.id}: ${weekDef.name}</h2>
        <p class="menu-subtitle">Training Day ${character.campaign.dayInWeek}</p>
        <div class="schedule-body">
          <p class="schedule-assignment">${dayDef.title}</p>
          <p class="recruiter-copy">${dayDef.briefing}</p>
          <div class="schedule-location">
            <span class="schedule-label">Report to</span>
            <span class="schedule-value">${dayDef.locationName}</span>
          </div>
          <p class="recruiter-copy recruiter-copy--small">Walk to the location on the MCRD map. A prompt will appear when you arrive.</p>
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="schedule-begin">Begin Patrol</button>
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
 */
export function showWeekComplete(weekDef) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Week ${weekDef.id} Complete</h2>
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
  return new Promise(resolve => {
    const honors = character.honorsTitle ?? 'United States Marine';
    const readiness = character.campaign?.readiness ?? 0;
    const completed = Object.keys(character.campaign?.completed ?? {}).length;

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel graduation-panel">
        <h2 class="menu-title">Graduation</h2>
        <p class="menu-subtitle">MCRD San Diego</p>
        <p class="schedule-assignment">${character.name}</p>
        <p class="recruiter-copy">After 13 weeks of training, you have earned the title <strong>${honors}</strong>.</p>
        <div class="graduation-stats">
          <div class="recruiter-result-row"><span>Readiness</span><span>${readiness}%</span></div>
          <div class="recruiter-result-row"><span>Training days</span><span>${completed}</span></div>
          <div class="recruiter-result-row"><span>Status</span><span>Graduated</span></div>
        </div>
        <p class="recruiter-copy recruiter-copy--small">Semper Fidelis. Free roam the depot or start a new recruit.</p>
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
 * Story mode heat exhaustion warning.
 */
export function showHeatExhaustion() {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Heat Exhaustion</h2>
        <p class="menu-subtitle">Story mode</p>
        <p class="recruiter-copy">You collapsed from dehydration. Corpsman revived you — readiness -5, hydration refilled to 50%.</p>
        <p class="recruiter-copy recruiter-copy--small">Find canteens on the map before your next patrol.</p>
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
 * @param {string} reason
 */
export function showRecycled(reason) {
  const labels = {
    performance: 'Performance Drop',
    heat: 'Heat Casualty'
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
  const labels = {
    performance: 'Performance Drop',
    heat: 'Heat Casualty'
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
          <div class="recruiter-result-row"><span>Weeks reached</span><span>${week}</span></div>
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
