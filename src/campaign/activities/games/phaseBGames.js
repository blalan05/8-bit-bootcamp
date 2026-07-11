import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, flashResult, createLoop, bindKeys,
  windowMsFor, runQTESequence, runClickSequence, runChoiceRounds
} from '../lib/minigameKit.js';

const NAV_LEGS = [
  { bearing: '045°', paces: 200, answer: 0, choices: ['NE ridge', 'SW draw', 'East trail', 'North creek'] },
  { bearing: '270°', paces: 150, answer: 2, choices: ['West fence', 'South road', 'West boulder', 'East hill'] },
  { bearing: '180°', paces: 100, answer: 1, choices: ['North CP', 'South ravine', 'East pond', 'West tower'] },
  { bearing: '315°', paces: 250, answer: 3, choices: ['SE field', 'NW path', 'East bridge', 'NW checkpoint'] },
  { bearing: '090°', paces: 175, answer: 0, choices: ['East trail marker', 'West bunker', 'South pit', 'North gate'] }
];

export async function runLandNav(container, character) {
  const rounds = NAV_LEGS.map(leg => ({
    prompt: `Bearing ${leg.bearing} · ${leg.paces} paces — which checkpoint?`,
    choices: leg.choices,
    answer: leg.answer
  }));
  const r = await runChoiceRounds(container, { rounds, title: 'Land Navigation', hint: 'Pick the correct checkpoint for each leg' });
  return buildActivityResult(r.score, ['intelligence'], r);
}

const AID_STEPS = ['Assess scene', 'Check breathing', 'Stop bleeding', 'Treat shock', 'Evacuate'];

export async function runBuddyAid(container, character) {
  let totalScore = 0;
  for (let c = 0; c < 3; c++) {
    const r = await runClickSequence(container, {
      items: AID_STEPS,
      correctOrder: AID_STEPS,
      timeMs: 15000,
      title: `Casualty ${c + 1}`,
      hint: 'ABC sequence — assess, breathing, bleeding, shock, evac'
    });
    totalScore += r.score;
  }
  return buildActivityResult(totalScore / 3, ['intelligence'], { casualties: 3 });
}

export async function runMcmapSpar(container, character) {
  const combos = [
    { label: 'JAB', code: 'KeyJ', keyLabel: 'J' },
    { label: 'BLOCK', code: 'KeyB', keyLabel: 'B' },
    { label: 'CROSS', code: 'KeyC', keyLabel: 'C' },
    { label: 'BLOCK', code: 'KeyB', keyLabel: 'B' },
    { label: 'HOOK', code: 'KeyH', keyLabel: 'H' },
    { label: 'BLOCK', code: 'KeyB', keyLabel: 'B' },
    { label: 'UPPERCUT', code: 'KeyU', keyLabel: 'U' },
    { label: 'BLOCK', code: 'KeyB', keyLabel: 'B' }
  ];
  const r = await runQTESequence(container, character, {
    prompts: combos,
    statKeys: ['strength', 'dexterity'],
    title: 'MCMAP Sparring',
    hint: 'Execute strikes and blocks on command'
  });
  return buildActivityResult(r.score, ['strength', 'dexterity'], r);
}

export async function runPugilDuel(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Pugil Duel', hint: 'H high block · L low block · D dodge feint' });
    const tells = [
      { tell: 'HIGH STRIKE', counter: 'KeyH', label: 'H' },
      { tell: 'LOW STRIKE', counter: 'KeyL', label: 'L' },
      { tell: 'FEINT', counter: 'KeyD', label: 'D' },
      { tell: 'HIGH STRIKE', counter: 'KeyH', label: 'H' },
      { tell: 'LOW STRIKE', counter: 'KeyL', label: 'L' }
    ];
    let round = 0;
    let wins = 0;
    const windowMs = windowMsFor(character, ['strength', 'dexterity']);

    function nextRound() {
      if (round >= tells.length) {
        unbind();
        ui.dispose();
        resolve(buildActivityResult(wins / tells.length, ['strength', 'dexterity'], { wins, total: tells.length }));
        return;
      }
      const t = tells[round];
      ui.main.innerHTML = `<div class="mg-prompt">Opponent: ${t.tell}</div><div class="mg-key-hint">Counter: <kbd>${t.label}</kbd></div>`;
      setProgress(ui, round + 1, tells.length);
      let done = false;
      const timer = setTimeout(() => { if (!done) { flashResult(ui, 'miss'); round++; setTimeout(nextRound, 300); } }, windowMs);
      const handler = (code) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        if (code === t.counter) { wins++; flashResult(ui, 'hit'); } else flashResult(ui, 'miss');
        round++;
        setTimeout(nextRound, 300);
      };
      ui._handler = handler;
    }

    const unbind = bindKeys(['KeyH', 'KeyL', 'KeyD'], (code) => ui._handler?.(code));
    nextRound();
  });
}

export async function runBayonetCourse(container, character) {
  const prompts = [
    { label: 'THRUST', code: 'KeyT', keyLabel: 'T' },
    { label: 'SLASH', code: 'KeyS', keyLabel: 'S' },
    { label: 'THRUST', code: 'KeyT', keyLabel: 'T' },
    { label: 'SLASH', code: 'KeyS', keyLabel: 'S' },
    { label: 'THRUST', code: 'KeyT', keyLabel: 'T' },
    { label: 'SLASH', code: 'KeyS', keyLabel: 'S' },
    { label: 'THRUST', code: 'KeyT', keyLabel: 'T' },
    { label: 'FINISH', code: 'Enter', keyLabel: 'Enter' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['strength'],
    title: 'Bayonet Course',
    hint: 'T thrust · S slash — keep the rhythm'
  });
  return buildActivityResult(r.score, ['strength'], r);
}

const GENERAL_ORDERS = [
  { prompt: 'General Order 1: "To take charge of this post..." — finish:', choices: ['...and all government property in view.', '...and guard the chow hall.', '...and report to the D.I. only.', '...and sleep when able.'], answer: 0 },
  { prompt: 'General Order 2: "To walk my post in a military manner..." — finish:', choices: ['...keeping always on the alert.', '...only when the D.I. is watching.', '...at a relaxed pace.', '...with headphones permitted.'], answer: 0 },
  { prompt: 'General Order 3: "To report all violations..." — finish:', choices: ['...of orders I am instructed to enforce.', '...to my roommate only.', '...at the end of the week.', '...if I feel like it.'], answer: 0 },
  { prompt: 'General Order 4: "To repeat all calls..." — finish:', choices: ['...from posts more distant from the guardhouse than my own.', '...only during daylight.', '...when I have spare time.', '...to the recruit on my left.'], answer: 0 },
  { prompt: 'General Order 5: "To quit my post only when properly..." — finish:', choices: ['...relieved.', '...tired.', '...the D.I. says so.', '...chow is served.'], answer: 0 }
];

export async function runKnowledgeExam(container, character) {
  const r = await runChoiceRounds(container, { rounds: GENERAL_ORDERS, title: 'General Orders Exam', hint: 'Complete each order with the correct phrase' });
  return buildActivityResult(r.score, ['intelligence'], r);
}

export async function runInspection(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Uniform Inspection', hint: 'Click every discrepancy before time runs out' });
    const errors = [
      { id: 'gig', label: 'Gig line off', x: 45, y: 55 },
      { id: 'boots', label: 'Boots unbloused', x: 30, y: 80 },
      { id: 'cover', label: 'Cover tilted', x: 50, y: 15 },
      { id: 'ribbon', label: 'Ribbon out of order', x: 60, y: 45 }
    ];
    const found = new Set();
    ui.main.innerHTML = `<div class="mg-inspect-board">${errors.map(e =>
      `<button type="button" class="mg-inspect-spot" data-id="${e.id}" style="left:${e.x}%;top:${e.y}%"></button>`
    ).join('')}</div>`;

    const loop = createLoop({
      durationMs: 12000,
      onFinish: () => {
        ui.main.removeEventListener('click', onClick);
        ui.dispose();
        resolve(buildActivityResult(found.size / errors.length, ['leadership', 'intelligence'], { found: found.size, total: errors.length }));
      }
    });

    function onClick(e) {
      const spot = e.target.closest('[data-id]');
      if (!spot) return;
      found.add(spot.dataset.id);
      spot.classList.add('mg-inspect-found');
      setProgress(ui, found.size, errors.length);
      if (found.size >= errors.length) loop.stop();
    }
    ui.main.addEventListener('click', onClick);
    setProgress(ui, 0, errors.length);
  });
}

export async function runRifleQual(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Table 1 Qualification', hint: 'Arrow keys adjust wind · F to fire at each position' });
    const positions = ['STANDING', 'KNEELING', 'PRONE'];
    let pos = 0;
    let points = 0;
    let wind = 0;

    function render() {
      ui.main.innerHTML = `
        <div class="mg-prompt">${positions[pos]}</div>
        <div class="mg-wind">Wind: ${wind > 0 ? '+' : ''}${wind} · ← → adjust · F fire</div>
        <div class="mg-aim-ring"><div class="mg-reticle" style="left:${50 + wind * 5}%"></div></div>`;
      setProgress(ui, pos + 1, positions.length);
    }

    const unbind = bindKeys(['ArrowLeft', 'ArrowRight', 'KeyF'], (code) => {
      if (code === 'ArrowLeft') wind = Math.max(-3, wind - 1);
      if (code === 'ArrowRight') wind = Math.min(3, wind + 1);
      if (code === 'KeyF') {
        const targetWind = [1, -1, 0][pos];
        const diff = Math.abs(wind - targetWind);
        if (diff === 0) { points += 3; flashResult(ui, 'hit'); }
        else if (diff === 1) { points += 2; flashResult(ui, 'hit'); }
        else flashResult(ui, 'miss');
        pos++;
        wind = 0;
        if (pos >= positions.length) {
          unbind();
          ui.dispose();
          resolve(buildActivityResult(points / 9, ['dexterity', 'intelligence'], { points, max: 9 }));
        } else render();
      } else render();
    });
    render();
  });
}

export async function runNightMove(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Night Infiltration', hint: 'W to advance quietly · freeze when flare pops (do nothing)' });
    let progress = 0;
    let flare = false;
    let moving = false;

    ui.main.innerHTML = `<div class="mg-night-bar"><div class="mg-night-fill" id="mg-night-fill"></div></div><div class="mg-flare" id="mg-flare"></div>`;
    const fill = ui.main.querySelector('#mg-night-fill');
    const flareEl = ui.main.querySelector('#mg-flare');

    const loop = createLoop({
      onTick: () => {
        if (moving && !flare) {
          progress += 0.3;
          fill.style.width = `${Math.min(100, progress)}%`;
        }
        if (progress >= 100) end();
      }
    });

    let flareTimer = setInterval(() => {
      flare = true;
      flareEl.classList.add('mg-flare--on');
      setTimeout(() => {
        if (moving) { progress = Math.max(0, progress - 15); flashResult(ui, 'miss'); }
        flare = false;
        flareEl.classList.remove('mg-flare--on');
      }, 1500);
    }, 4000);

    const unbind = bindKeys(['KeyW'], () => { if (!flare) moving = true; });
    const onKeyUp = (e) => { if (e.code === 'KeyW') moving = false; };
    window.addEventListener('keyup', onKeyUp);

    function end() {
      clearInterval(flareTimer);
      loop.stop();
      unbind();
      window.removeEventListener('keyup', onKeyUp);
      ui.dispose();
      resolve(buildActivityResult(progress / 100, ['dexterity'], { progress }));
    }
  });
}
