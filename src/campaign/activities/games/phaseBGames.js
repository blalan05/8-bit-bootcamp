import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, flashResult, createLoop, bindKeys,
  runQTESequence, runClickSequence, runChoiceRounds, runInspectionBoard
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
    { label: 'JAB' },
    { label: 'BLOCK' },
    { label: 'CROSS' },
    { label: 'BLOCK' },
    { label: 'HOOK' },
    { label: 'BLOCK' },
    { label: 'UPPERCUT' },
    { label: 'BLOCK' }
  ];
  const r = await runQTESequence(container, character, {
    prompts: combos,
    statKeys: ['strength', 'dexterity'],
    title: 'MCMAP Sparring',
    hint: 'J jab · L cross / hook · I uppercut · K block — on the command of execution'
  });
  return buildActivityResult(r.score, ['strength', 'dexterity'], r);
}

export async function runPugilDuel(container, character) {
  const winds = 'OPPONENT WINDS UP';
  const tells = [
    { label: 'HIGH STRIKE', prep: winds, exec: 'HIGH STRIKE!', code: 'KeyI', lock: true },
    { label: 'LOW STRIKE', prep: winds, exec: 'LOW STRIKE!', code: 'KeyK', lock: true },
    { label: 'FEINT', prep: winds, exec: 'FEINT — DODGE!', code: 'KeyA', lock: true },
    { label: 'HIGH STRIKE', prep: winds, exec: 'HIGH STRIKE!', code: 'KeyI', lock: true },
    { label: 'LOW STRIKE', prep: winds, exec: 'LOW STRIKE!', code: 'KeyK', lock: true }
  ];
  const r = await runQTESequence(container, character, {
    prompts: tells,
    statKeys: ['strength', 'dexterity'],
    title: 'Pugil Duel',
    hint: 'I high block · K low block · A dodge the feint'
  });
  return buildActivityResult(r.score, ['strength', 'dexterity'], { wins: r.hits, total: r.total });
}

export async function runBayonetCourse(container, character) {
  const prompts = [
    { label: 'THRUST' },
    { label: 'SLASH' },
    { label: 'THRUST' },
    { label: 'SLASH' },
    { label: 'THRUST' },
    { label: 'SLASH' },
    { label: 'THRUST' },
    { label: 'FINISH' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['strength'],
    title: 'Bayonet Course',
    hint: 'I thrust · L slash · Enter finish — keep the rhythm'
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

/** Ids double as grid areas in .mg-insp-board--uniform (cover at top, boots at bottom). */
const UNIFORM_ITEMS = [
  {
    id: 'cover', name: 'Cover',
    ok: { desc: 'square, level', art: ['........', '..gggg..', '.gggggg.', 'gggyyggg', 'GGGGGGGG', '........'] },
    fault: { desc: 'tilted left', reason: 'COVER TILTED', cue: 'tilt crooked' }
  },
  {
    id: 'collar', name: 'Collar',
    ok: { desc: 'EGA upright', art: ['ygyyyygy', 'gyyyyyyg', 'ggyuuygg', 'ggyuuygg', 'gggyyggg', 'ggyggygg'] },
    fault: { desc: 'EGA upside down', reason: 'EGA UPSIDE DOWN', cue: 'flip' }
  },
  {
    id: 'ribbons', name: 'Ribbons',
    ok: { desc: 'in order', art: ['........', 'rrkyykuu', 'rrkyykuu', 'ggknnkGG', 'ggknnkGG', '........'] },
    fault: { desc: 'out of order', reason: 'RIBBONS OUT OF ORDER', cue: 'shift',
      art: ['........', 'uukyykrr', 'uukyykrr', 'GGknnkgg', 'GGknnkgg', '........'] }
  },
  {
    id: 'buttons', name: 'Pockets',
    ok: { desc: 'buttoned', art: ['nnnnnnnn', 'nGGGGGGn', 'nGGyyGGn', 'nnnnnnnn', 'nnnnnnnn', 'nnnnnnnn'] },
    fault: { desc: 'flap open', reason: 'POCKET OPEN',
      art: ['.GGGG...', 'nnGGGGGn', 'nnnnnnnn', 'nnnnyynn', 'nnnnnnnn', 'nnnnnnnn'] }
  },
  {
    id: 'gig', name: 'Gig line',
    ok: { desc: 'aligned', art: ['nnnknnnn', 'nnnknnnn', 'GGykyyGG', 'gggkgggg', 'gggkgggg', 'gggkgggg'] },
    fault: { desc: 'off 1 inch', reason: 'GIG LINE OFF',
      art: ['nnnnnknn', 'nnnnnknn', 'GGykyyGG', 'gggkgggg', 'gggkgggg', 'gggkgggg'] }
  },
  {
    id: 'buckle', name: 'Buckle',
    ok: { desc: 'brass bright', art: ['........', 'GGyyyyGG', 'GGykkyGG', 'GGykkyGG', 'GGyyyyGG', '........'] },
    fault: { desc: 'tarnished', reason: 'BRASS TARNISHED', cue: 'dull',
      art: ['........', 'GGddddGG', 'GGdkkdGG', 'GGdkkdGG', 'GGddddGG', '........'] }
  },
  {
    id: 'trousers', name: 'Trousers',
    ok: { desc: 'sharp crease', art: ['gggggggg', 'glg..glg', 'glg..glg', 'glg..glg', 'glg..glg', 'glg..glg'] },
    fault: { desc: 'no crease', reason: 'NO CREASE',
      art: ['gggggggg', 'ggg..ggg', 'gGg..ggg', 'ggg..gGg', 'ggg..ggg', 'gGg..ggg'] }
  },
  {
    id: 'boots', name: 'Boots',
    ok: { desc: 'bloused', art: ['ggg..ggg', 'GGG..GGG', 'ccc..ccc', 'ccc..ccc', 'ccc..ccc', 'kkk..kkk'] },
    fault: { desc: 'not bloused', reason: 'UNBLOUSED',
      art: ['ggg..ggg', 'ggg..ggg', 'gggg.ggg', 'gcc..ggc', 'ccc..ccc', 'kkk..kkk'] }
  }
];

export async function runInspection(container, character) {
  const statKeys = ['leadership', 'intelligence'];
  const r = await runInspectionBoard(container, character, {
    title: 'Uniform Inspection',
    hint: 'Inspect top to bottom — tap each discrepancy before time runs out',
    caption: 'RECRUIT UNIFORM · COVER TO BOOTS',
    variant: 'uniform',
    items: UNIFORM_ITEMS,
    faultCount: 4,
    statKeys
  });
  return buildActivityResult(r.score, statKeys, { found: r.found, total: r.total, falseFlags: r.falseFlags });
}

export async function runRifleQual(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Table 1 Qualification', hint: 'Arrow keys adjust wind · L (right hand) to fire at each position' });
    const positions = ['STANDING', 'KNEELING', 'PRONE'];
    let pos = 0;
    let points = 0;
    let wind = 0;

    function render() {
      ui.main.innerHTML = `
        <div class="mg-prompt">${positions[pos]}</div>
        <div class="mg-wind">Wind: ${wind > 0 ? '+' : ''}${wind} · <kbd>←</kbd> <kbd>→</kbd> adjust · <kbd>L</kbd> fire</div>
        <div class="mg-aim-ring"><div class="mg-reticle" style="left:${50 + wind * 5}%"></div></div>`;
      setProgress(ui, pos + 1, positions.length);
    }

    const unbind = bindKeys(['ArrowLeft', 'ArrowRight', 'KeyL'], (code) => {
      if (code === 'ArrowLeft') wind = Math.max(-3, wind - 1);
      if (code === 'ArrowRight') wind = Math.min(3, wind + 1);
      if (code === 'KeyL') {
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
