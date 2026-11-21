import { formatStatLabel } from '../character/stats.js';
import { getActivity } from './activityRegistry.js';
import {
  applyActivityResult,
  canUseIncentiveTraining,
  markIncentiveTrainingUsed,
  setHydration,
  isSandbox
} from './campaignState.js';
import { runIncentiveTraining } from './activities/games/dailyLifeGames.js';
import { setPlayContext } from '../telemetry.js';
import { touchCopy } from './activities/lib/touchPad.js';

const IT_HYDRATION_COST = 20;
const IT_PASS_THRESHOLD = 0.6;

/**
 * Run a campaign activity inside the shared overlay shell.
 * @param {object} character
 * @param {string} activityId
 * @param {{ title?: string, subtitle?: string, stats?: string[], dayId?: string }} dayMeta
 * @returns {Promise<object>} updated character
 */
export function runActivity(character, activityId, dayMeta = {}) {
  const activity = getActivity(activityId);
  if (!activity) {
    return Promise.resolve(character);
  }

  setPlayContext({ activity: activityId });

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel recruiter-panel campaign-panel">
        <h2 class="menu-title" id="activity-title"></h2>
        <p class="menu-subtitle" id="activity-subtitle"></p>
        <div class="recruiter-body" id="activity-body"></div>
        <div class="recruiter-actions" id="activity-actions"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const titleEl = overlay.querySelector('#activity-title');
    const subtitleEl = overlay.querySelector('#activity-subtitle');
    const bodyEl = overlay.querySelector('#activity-body');
    const actionsEl = overlay.querySelector('#activity-actions');
    const panelEl = overlay.querySelector('.campaign-panel');

    let workingCharacter = character;
    const themedStats = dayMeta.stats ?? [];

    function cleanup(resultCharacter) {
      setPlayContext({ activity: '' });
      overlay.remove();
      resolve(resultCharacter);
    }

    function formatGrade(grade) {
      if (grade === 'honor') return '<span class="grade-badge grade-badge--honor">HONOR</span>';
      if (grade === 'passing') return '<span class="grade-badge grade-badge--passing">PASSING</span>';
      return '<span class="grade-badge grade-badge--unsat">UNSAT</span>';
    }

    function renderResultPanel(result, updated) {
      titleEl.textContent = 'Activity Complete';
      subtitleEl.textContent = `${Math.round(result.score * 100)}% performance`;

      const deltas = updated._lastResult?.statDeltas ?? {};
      const deltaLines = Object.entries(deltas).map(([key, val]) =>
        `<div class="recruiter-result-row"><span>${formatStatLabel(key)}</span><span class="stat-delta stat-delta--up">+${val}</span></div>`
      ).join('');

      bodyEl.innerHTML = `
        <div class="recruiter-results">
          <div class="recruiter-result-row">
            <span>Grade</span>
            <span>${formatGrade(result.grade)}</span>
          </div>
          <div class="recruiter-result-row">
            <span>Readiness</span>
            <span class="stat-delta stat-delta--up">+${updated._lastResult?.readinessDelta ?? 0}</span>
          </div>
          ${deltaLines}
          <div class="recruiter-final-stats">Readiness: ${updated.campaign.readiness} / 100</div>
        </div>
      `;
      actionsEl.innerHTML = '<button type="button" class="btn btn-primary" id="activity-continue">Continue</button>';
      overlay.querySelector('#activity-continue').addEventListener('click', () => {
        cleanup(updated);
      }, { once: true });
    }

    async function finalizeResult(result) {
      const updated = applyActivityResult(workingCharacter, dayMeta.dayId, result);
      workingCharacter = updated;
      renderResultPanel(result, updated);
    }

    async function offerIncentiveTraining(result) {
      titleEl.textContent = 'Performance Drop';
      subtitleEl.textContent = `${Math.round(result.score * 100)}% — UNSAT`;
      bodyEl.innerHTML = `
        <p class="recruiter-copy">The D.I. is not impressed. Get on the quarterdeck for Incentive Training, or accept your grade.</p>
        <p class="recruiter-copy recruiter-copy--small">IT costs <strong>20% hydration</strong>. One attempt per activity. Pass IT to retry the event.</p>
      `;
      actionsEl.innerHTML = `
        <button type="button" class="btn btn-danger" id="accept-grade">Accept Grade</button>
        <button type="button" class="btn btn-primary" id="incentive-training">Incentive Training</button>
      `;

      overlay.querySelector('#accept-grade').addEventListener('click', () => {
        finalizeResult(result);
      }, { once: true });

      overlay.querySelector('#incentive-training').addEventListener('click', async () => {
        workingCharacter = markIncentiveTrainingUsed(workingCharacter, dayMeta.dayId);
        const hydration = (workingCharacter.campaign.hydration ?? 100) - IT_HYDRATION_COST;
        workingCharacter = setHydration(workingCharacter, hydration);

        panelEl.classList.add('recruiter-panel--pullup');
        titleEl.textContent = 'Incentive Training';
        subtitleEl.textContent = 'Quarterdeck';
        actionsEl.innerHTML = '';
        bodyEl.innerHTML = '';

        const itResult = await runIncentiveTraining(bodyEl, workingCharacter);
        panelEl.classList.remove('recruiter-panel--pullup');

        if (itResult.score >= IT_PASS_THRESHOLD) {
          titleEl.textContent = dayMeta.title ?? activity.title;
          subtitleEl.textContent = 'Retry — no second IT';
          bodyEl.innerHTML = '';
          const retryRaw = await activity.run(bodyEl, workingCharacter);
          const retryResult = {
            ...retryRaw,
            stats: retryRaw.stats ?? themedStats
          };
          await finalizeResult(retryResult);
        } else {
          bodyEl.innerHTML = `<p class="recruiter-copy">You failed Incentive Training. The unsat stands.</p>`;
          actionsEl.innerHTML = '<button type="button" class="btn btn-primary" id="it-fail-ok">Continue</button>';
          overlay.querySelector('#it-fail-ok').addEventListener('click', () => {
            finalizeResult(result);
          }, { once: true });
        }
      }, { once: true });
    }

    async function showResults(result) {
      const canIT = !isSandbox(workingCharacter)
        && result.grade === 'unsat'
        && dayMeta.dayId
        && canUseIncentiveTraining(workingCharacter, dayMeta.dayId);

      if (canIT) {
        await offerIncentiveTraining(result);
        return;
      }
      await finalizeResult(result);
    }

    function showIntro() {
      titleEl.textContent = dayMeta.title ?? activity.title;
      subtitleEl.textContent = activity.subtitle;
      bodyEl.innerHTML = `<p class="recruiter-copy">${touchCopy(activity.intro)}</p>`;
      actionsEl.innerHTML = '<button type="button" class="btn btn-primary" id="activity-begin">Begin</button>';
      overlay.querySelector('#activity-begin').addEventListener('click', async () => {
        panelEl.classList.add('recruiter-panel--pullup');
        titleEl.textContent = dayMeta.title ?? activity.title;
        subtitleEl.textContent = 'In progress';
        actionsEl.innerHTML = '';
        bodyEl.innerHTML = '';

        const rawResult = await activity.run(bodyEl, workingCharacter);
        const result = {
          ...rawResult,
          stats: rawResult.stats ?? themedStats
        };

        panelEl.classList.remove('recruiter-panel--pullup');
        await showResults(result);
      }, { once: true });
    }

    showIntro();
  });
}
