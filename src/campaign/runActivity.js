import { formatStatLabel } from '../character/stats.js';
import { getActivity, buildActivityResult } from './activityRegistry.js';
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
import { setGameTitleOverride, setGameAssist, statT } from './activities/lib/minigameKit.js';
import { isFieldCampaign, getCampaignClimate, getCampaignForCharacter } from '../campaigns/campaignRegistry.js';
import { getFieldNote } from './fieldNotes.js';
import { hasPerk, perkName, perkUsesLeft, spendPerkUse, commandSize, PERK_INFO } from './rank.js';

const IT_HYDRATION_COST = 20;
const IT_PASS_THRESHOLD = 0.6;
const SKATE_SCORE = 0.6;
const SKATE_CAUGHT_SCORE = 0.35;
const SKATE_CAUGHT_CHANCE = 0.25;

/** Skating: a passing grade nobody earned, unless someone notices. */
function skateResult() {
  const caught = Math.random() < SKATE_CAUGHT_CHANCE;
  return {
    ...buildActivityResult(caught ? SKATE_CAUGHT_SCORE : SKATE_SCORE, [], { caught }),
    via: 'skate',
    note: caught
      ? 'Caught skating. Your squad leader noticed, and the whole squad heard about it.'
      : 'You skated. Nobody noticed. This time.'
  };
}

/** Delegating: your Marines do the work. A squad's three fireteams average out the luck. */
function delegateResult(character) {
  const teams = commandSize(character) / 3;
  const tilt = (statT(character.stats?.leadership ?? 10) - 0.5) * 0.2;
  let total = 0;
  for (let i = 0; i < teams; i++) total += 0.3 + Math.random() * 0.6;
  const score = Math.max(0, Math.min(1, total / teams + tilt));
  const who = teams > 1 ? 'Your squad' : 'Your fireteam';
  return {
    ...buildActivityResult(score, ['leadership'], { delegated: true }),
    via: 'delegate',
    note: `${who} handled it while you ran the show. ${score >= 0.85 ? 'They made you look good.' : score >= 0.5 ? 'Good enough.' : 'It went sideways.'}`
  };
}

/**
 * Run a campaign activity inside the shared overlay shell.
 * @param {object} character
 * @param {string} activityId
 * @param {{ title?: string, subtitle?: string, stats?: string[], dayId?: string, briefing?: string, locationName?: string }} dayMeta
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
    const field = isFieldCampaign(character);
    const tagline = activity.subtitle.split(' — ')[1] ?? activity.subtitle;
    const subtitle = field && dayMeta.locationName
      ? `${dayMeta.locationName} — ${activity.fieldTagline ?? tagline}`
      : activity.subtitle;
    const intro = field ? (activity.fieldIntro ?? activity.intro) : activity.intro;
    const resourceLabel = getCampaignClimate(character).resourceLabel.toLowerCase();
    const it = field
      ? {
        title: 'Remedial PT',
        subtitle: 'Squad leader\'s orders',
        copy: 'Your squad leader isn\'t satisfied. Square away with Remedial PT, or accept your grade.'
      }
      : {
        title: 'Incentive Training',
        subtitle: 'Quarterdeck',
        copy: 'The D.I. is not impressed. Get on the quarterdeck for Incentive Training, or accept your grade.'
      };
    setGameTitleOverride(field ? dayMeta.title : null);
    const intelName = hasPerk(character, 'underground') ? perkName(character, 'underground') : null;
    setGameAssist(intelName);
    const scheduled = Boolean(dayMeta.dayId) && !/^(promo|duty)_/.test(String(dayMeta.dayId));

    function cleanup(resultCharacter) {
      setGameTitleOverride(null);
      setGameAssist(null);
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
        ${result.note ? `<p class="recruiter-copy">${result.note}</p>` : ''}
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
        <p class="recruiter-copy">${it.copy}</p>
        <p class="recruiter-copy recruiter-copy--small">${it.title} costs <strong>${IT_HYDRATION_COST}% ${resourceLabel}</strong>. One attempt per activity. Pass to retry the event.</p>
      `;
      actionsEl.innerHTML = `
        <button type="button" class="btn btn-danger" id="accept-grade">Accept Grade</button>
        <button type="button" class="btn btn-primary" id="incentive-training">${it.title}</button>
      `;

      overlay.querySelector('#accept-grade').addEventListener('click', () => {
        finalizeResult(result);
      }, { once: true });

      overlay.querySelector('#incentive-training').addEventListener('click', async () => {
        workingCharacter = markIncentiveTrainingUsed(workingCharacter, dayMeta.dayId);
        const hydration = (workingCharacter.campaign.hydration ?? 100) - IT_HYDRATION_COST;
        workingCharacter = setHydration(workingCharacter, hydration);

        panelEl.classList.add('recruiter-panel--pullup');
        titleEl.textContent = it.title;
        subtitleEl.textContent = it.subtitle;
        actionsEl.innerHTML = '';
        bodyEl.innerHTML = '';

        setGameTitleOverride(null);
        const itResult = await runIncentiveTraining(bodyEl, workingCharacter);
        setGameTitleOverride(field ? dayMeta.title : null);
        panelEl.classList.remove('recruiter-panel--pullup');

        if (itResult.score >= IT_PASS_THRESHOLD) {
          titleEl.textContent = dayMeta.title ?? activity.title;
          subtitleEl.textContent = 'Retry — no second IT';
          bodyEl.innerHTML = '';
          const retryRaw = await activity.run(bodyEl, workingCharacter, dayMeta);
          const retryResult = {
            ...retryRaw,
            stats: retryRaw.stats ?? themedStats
          };
          await finalizeResult(retryResult);
        } else {
          bodyEl.innerHTML = `<p class="recruiter-copy">You failed ${it.title}. The unsat stands.</p>`;
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

    function intelHtml() {
      if (!intelName) return '';
      const note = getFieldNote(getCampaignForCharacter(character).id, activityId);
      return note
        ? `<p class="recruiter-copy recruiter-copy--small"><strong>${intelName}:</strong> ${note.text}</p>`
        : '';
    }

    function perkButtonsHtml() {
      if (!scheduled) return '';
      return ['skate', 'delegate']
        .filter(perk => hasPerk(workingCharacter, perk))
        .map(perk => {
          const left = perkUsesLeft(workingCharacter, perk);
          const label = perk === 'skate' ? 'Skate' : `Delegate (${commandSize(workingCharacter)} Marines)`;
          return `<button type="button" class="btn btn-secondary" data-perk="${perk}" title="${PERK_INFO[perk].description}" ${left ? '' : 'disabled'}>${label} · ${left} left</button>`;
        }).join('');
    }

    function usePerk(perk) {
      workingCharacter = spendPerkUse(workingCharacter, perk);
      const result = perk === 'skate' ? skateResult() : delegateResult(workingCharacter);
      finalizeResult(result);
    }

    function showIntro() {
      titleEl.textContent = dayMeta.title ?? activity.title;
      subtitleEl.textContent = subtitle;
      bodyEl.innerHTML = `<p class="recruiter-copy">${touchCopy(intro)}</p>${intelHtml()}`;
      actionsEl.innerHTML = `${perkButtonsHtml()}<button type="button" class="btn btn-primary" id="activity-begin">Begin</button>`;
      actionsEl.querySelectorAll('[data-perk]').forEach(btn => {
        btn.addEventListener('click', () => usePerk(btn.dataset.perk), { once: true });
      });
      overlay.querySelector('#activity-begin').addEventListener('click', async () => {
        panelEl.classList.add('recruiter-panel--pullup');
        titleEl.textContent = dayMeta.title ?? activity.title;
        subtitleEl.textContent = 'In progress';
        actionsEl.innerHTML = '';
        bodyEl.innerHTML = '';

        const rawResult = await activity.run(bodyEl, workingCharacter, dayMeta);
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
