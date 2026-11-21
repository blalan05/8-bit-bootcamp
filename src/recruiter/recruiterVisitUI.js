import { formatStatLabel } from '../character/stats.js';
import {
  selectAsvabQuestions,
  gradeAsvab,
  applyAsvabResult
} from './asvabTest.js';
import {
  runPullupMiniGame,
  applyPullupResult,
  PULLUP_SESSION_SEC
} from './pullupTest.js';
import { AsvabScene } from './asvabScene.js';
import { PullupScene } from './pullupScene.js';
import { NcoScene } from './ncoScene.js';
import { touchCopy } from '../campaign/activities/lib/touchPad.js';
import {
  RECRUITER_QUESTIONS,
  pickBuffStat,
  applyStatBuff
} from './recruiterQuestions.js';
/**
 * Recruiting office flow before shipping to MCRD: ASVAB mock + pull-up test.
 * @param {object} character
 * @returns {Promise<object | null>} updated character, or null if cancelled
 */
export function showRecruiterVisit(character) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel recruiter-panel">
        <h2 class="menu-title" id="recruiter-title">Recruiting Office</h2>
        <p class="menu-subtitle" id="recruiter-subtitle"></p>
        <div class="recruiter-body" id="recruiter-body"></div>
        <div class="recruiter-actions" id="recruiter-actions"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const titleEl = overlay.querySelector('#recruiter-title');
    const subtitleEl = overlay.querySelector('#recruiter-subtitle');
    const bodyEl = overlay.querySelector('#recruiter-body');
    const actionsEl = overlay.querySelector('#recruiter-actions');

    let updatedCharacter = { ...character, stats: { ...character.stats } };
    let asvabResult = null;
    let pullupResult = null;
    let stationBuffStat = null;
    let asvabScene = null;
    const panelEl = overlay.querySelector('.recruiter-panel');

    function cleanup(result) {
      overlay.remove();
      resolve(result);
    }

    function setActions(html) {
      actionsEl.innerHTML = html;
    }

    async function runStation() {
      panelEl.classList.add('recruiter-panel--station');
      titleEl.textContent = 'Recruiting Station';
      subtitleEl.textContent = 'MEPS — Processing';
      setActions('');
      bodyEl.innerHTML = '';

      const scene = new NcoScene(bodyEl);
      const answers = [];

      await scene.say(`At ease, ${updatedCharacter.name}. I'm your processing NCO.`);
      await scene.say('Before you ship to MCRD, I need to know what kind of recruit I\'m signing for.');
      await scene.say('Answer straight — your motivation goes in your file.');

      for (const question of RECRUITER_QUESTIONS) {
        const choiceIndex = await scene.ask(question);
        answers.push({ questionId: question.id, choiceIndex });
      }

      stationBuffStat = pickBuffStat(answers);
      updatedCharacter = applyStatBuff(updatedCharacter, stationBuffStat);

      await scene.say(
        `Good answer. That'll serve you well. ${formatStatLabel(stationBuffStat)} +1.`
      );
      await scene.say(
        `Next up: the ASVAB at the folding table, then pull-ups on the bar. ` +
        `You've got ${PULLUP_SESSION_SEC} seconds — don't gas out early.`
      );

      scene.dispose();
      panelEl.classList.remove('recruiter-panel--station');

      await runAsvab();
      showAsvabResults();
    }

    function askQuestion(question, index, total) {
      if (!asvabScene) return Promise.resolve(0);
      return asvabScene.showQuestion(question, index, total);
    }

    async function runAsvab() {
      panelEl.classList.add('recruiter-panel--asvab');
      titleEl.textContent = 'ASVAB';
      subtitleEl.textContent = 'Six-foot folding table · paper · issue crayon';
      bodyEl.innerHTML = '';
      asvabScene = new AsvabScene(bodyEl, updatedCharacter);

      const questions = selectAsvabQuestions(updatedCharacter.stats.intelligence);
      const answers = [];

      for (let i = 0; i < questions.length; i++) {
        answers.push(await askQuestion(questions[i], i + 1, questions.length));
      }

      asvabScene.dispose();
      asvabScene = null;
      panelEl.classList.remove('recruiter-panel--asvab');

      asvabResult = gradeAsvab(answers, questions);
      updatedCharacter = applyAsvabResult(updatedCharacter, asvabResult.intDelta);
    }

    function formatDelta(delta) {
      if (delta > 0) return `<span class="stat-delta stat-delta--up">+${delta}</span>`;
      if (delta < 0) return `<span class="stat-delta stat-delta--down">${delta}</span>`;
      return '<span class="stat-delta">No change</span>';
    }

    function showAsvabResults() {
      titleEl.textContent = 'ASVAB Results';
      subtitleEl.textContent = 'Sgt. Vasquez — "Score recorded."';
      bodyEl.innerHTML = `
        <p class="recruiter-copy">${asvabResult.correct} / ${asvabResult.total} correct (${Math.round(asvabResult.percent * 100)}%). ${formatStatLabel('intelligence')}: ${updatedCharacter.stats.intelligence} ${formatDelta(asvabResult.intDelta)}</p>
      `;
      setActions('<button type="button" class="btn btn-primary" id="btn-start-pullups">Pull-Up Test</button>');
      overlay.querySelector('#btn-start-pullups').addEventListener('click', () => {
        showPullupIntro();
      }, { once: true });
    }

    function showPullupIntro() {
      titleEl.textContent = 'Pull-Up Test';
      subtitleEl.textContent = 'Sgt. Vasquez — "Show me what you\'ve got on the bar."';
      bodyEl.innerHTML = `
        <p class="recruiter-copy">${touchCopy('Step up to the bar. Press <strong>I</strong> to pull, <strong>L</strong> as your chin clears the bar, and <strong>K</strong> at full hang.')}</p>
        <p class="recruiter-copy recruiter-copy--small">Strength and endurance widen your timing windows and set your energy. Perfect reps cost less energy. The test ends at the buzzer or when you gas out.</p>
      `;
      setActions('<button type="button" class="btn btn-primary" id="btn-begin-pullups">Approach the Bar</button>');
      overlay.querySelector('#btn-begin-pullups').addEventListener('click', async () => {
        panelEl.classList.add('recruiter-panel--pullup');
        titleEl.textContent = 'Pull-Up Test';
        subtitleEl.textContent = 'F: pull · J: chin over bar · K: full hang';
        setActions('');
        bodyEl.innerHTML = '';
        const pullupScene = new PullupScene(bodyEl, updatedCharacter);
        const result = await runPullupMiniGame(pullupScene, updatedCharacter);
        pullupScene.dispose();
        panelEl.classList.remove('recruiter-panel--pullup');

        pullupResult = result;
        updatedCharacter = applyPullupResult(updatedCharacter, pullupResult.strDelta);
        showFinalResults();
      }, { once: true });
    }

    function showFinalResults() {
      titleEl.textContent = 'Cleared for Boot Camp';
      subtitleEl.textContent = 'Sgt. Vasquez — "You\'re cleared to ship."';
      bodyEl.innerHTML = `
        <div class="recruiter-results">
          ${stationBuffStat ? `
          <div class="recruiter-result-row">
            <span>Interview</span>
            <span>${formatStatLabel(stationBuffStat)} ${formatDelta(1)}</span>
          </div>` : ''}
          <div class="recruiter-result-row">
            <span>ASVAB</span>
            <span>${asvabResult.correct}/${asvabResult.total} · ${formatStatLabel('intelligence')} ${formatDelta(asvabResult.intDelta)}</span>
          </div>
          <div class="recruiter-result-row">
            <span>Pull-ups</span>
            <span>${pullupResult.reps} reps (${pullupResult.perfectReps} perfect) · ${formatStatLabel('strength')} ${formatDelta(pullupResult.strDelta)}</span>
          </div>
          <div class="recruiter-final-stats">
            ${formatStatLabel('intelligence')} ${updatedCharacter.stats.intelligence} ·
            ${formatStatLabel('strength')} ${updatedCharacter.stats.strength}
          </div>
        </div>
      `;
      setActions('<button type="button" class="btn btn-primary" id="btn-ship-out">Ship to MCRD</button>');
      overlay.querySelector('#btn-ship-out').addEventListener('click', () => {
        cleanup({ ...updatedCharacter, recruiterCompleted: true });
      }, { once: true });
    }

    runStation();
  });
}
