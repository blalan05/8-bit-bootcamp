import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, setMeter, flashResult, createLoop, bindKeys,
  windowMsFor, runQTESequence, runClickSequence, runChoiceRounds, runInspectionBoard, declarePadKeys,
  PREP_MS, RESULT_PAUSE_MS
} from '../lib/minigameKit.js';

const DRESS_MIN_MS = 2200;

const DRESS_ITEMS = [
  { call: 'BLOUSE!', label: 'Blouse', id: 'blouse' },
  { call: 'TROUSERS!', label: 'Trousers', id: 'trousers' },
  { call: 'BOOTS!', label: 'Boots', id: 'boots' },
  { call: 'COVER!', label: 'Cover', id: 'cover' },
  { call: 'BELT!', label: 'Belt', id: 'belt' },
  { call: 'SOCKS!', label: 'Socks', id: 'socks' }
];

export async function runDressDrill(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Dressing Drill', hint: 'STAND BY, then click the gear the D.I. calls — early clicks do not count' });
    let round = 0;
    let hits = 0;
    const total = 8;
    let timeLeft = 0;
    let current = null;
    let timer = null;
    let calling = false;

    function renderPile(targetId) {
      const shuffled = [...DRESS_ITEMS].sort(() => Math.random() - 0.5);
      ui.main.innerHTML = `
        <div class="mg-prompt mg-prep-word" id="mg-dress-call">STAND BY...</div>
        <div class="mg-countdown" id="mg-countdown">&nbsp;</div>
        <div class="mg-choices">${shuffled.map(item =>
          `<button type="button" class="btn btn-secondary mg-choice" data-id="${item.id}">${item.label}</button>`
        ).join('')}</div>`;
      ui.main.onclick = (e) => {
        const btn = e.target.closest('[data-id]');
        if (!btn || !current) return;
        if (!calling) { flashResult(ui, 'wait'); return; }
        ui.main.onclick = null;
        calling = false;
        clearInterval(timer);
        if (btn.dataset.id === targetId) {
          hits++;
          flashResult(ui, 'hit');
        } else {
          flashResult(ui, 'miss');
        }
        round++;
        setTimeout(nextRound, RESULT_PAUSE_MS);
      };
    }

    function startCall() {
      calling = true;
      const call = ui.main.querySelector('#mg-dress-call');
      call.textContent = current.call;
      call.className = 'mg-prompt mg-exec-word';
      const end = Date.now() + timeLeft;
      const tick = () => {
        timeLeft = end - Date.now();
        const el = ui.main.querySelector('#mg-countdown');
        if (el) el.textContent = Math.max(0, Math.ceil(timeLeft / 1000));
        if (timeLeft <= 0) {
          clearInterval(timer);
          calling = false;
          ui.main.onclick = null;
          flashResult(ui, 'miss');
          round++;
          setTimeout(nextRound, RESULT_PAUSE_MS);
        }
      };
      tick();
      timer = setInterval(tick, 100);
    }

    function nextRound() {
      if (round >= total) {
        ui.dispose();
        resolve(buildActivityResult(hits / total, ['dexterity'], { hits, total }));
        return;
      }
      current = DRESS_ITEMS[round % DRESS_ITEMS.length];
      const baseMs = windowMsFor(character, ['dexterity'], 2800, 3600);
      timeLeft = Math.max(DRESS_MIN_MS, baseMs - round * 80);
      setProgress(ui, round + 1, total);
      renderPile(current.id);
      setTimeout(startCall, PREP_MS);
    }
    nextRound();
  });
}

export async function runHighObstacle(container, character) {
  const prompts = [
    { label: 'GRIP LEFT' },
    { label: 'GRIP RIGHT' },
    { label: 'GRIP LEFT' },
    { label: 'GRIP RIGHT' },
    { label: 'PULL UP' },
    { label: 'GRIP LEFT' },
    { label: 'GRIP RIGHT' },
    { label: 'MOUNT TOP' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['strength', 'dexterity'],
    title: 'High Obstacle Course',
    hint: 'J left grip · L right grip · I pull up / mount'
  });
  return buildActivityResult(r.score, ['strength', 'dexterity'], r);
}

export async function runRappelTower(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Rappel Tower', hint: 'Press K (brake hand down) in the green band each bounce' });
    let bounces = 0;
    let hits = 0;
    const total = 10;
    let bandPos = 50;
    let bandDir = 1;

    const loop = createLoop({
      onTick: (_, __, dt) => {
        bandPos += bandDir * dt * 40;
        if (bandPos >= 85 || bandPos <= 15) bandDir *= -1;
        ui.main.innerHTML = `
          <div class="mg-prompt">Bounce ${bounces + 1} / ${total}</div>
          <div class="mg-meter-track"><div class="mg-meter-bar" style="width:${bandPos}%;background:#6dff8a"></div></div>
          <div class="mg-key-hint">Press <kbd>K</kbd> in the green zone (40–70%)</div>`;
      }
    });

    const unbind = bindKeys(['KeyK'], () => {
      if (bounces >= total) return;
      if (bandPos >= 40 && bandPos <= 70) {
        hits++;
        flashResult(ui, 'hit');
      } else {
        flashResult(ui, 'miss');
      }
      bounces++;
      setProgress(ui, bounces, total);
      if (bounces >= total) {
        loop.stop();
        unbind();
        ui.dispose();
        resolve(buildActivityResult(hits / total, ['dexterity'], { hits, total }));
      }
    });
  });
}

export async function runGasChamber(container, character) {
  const phases = [
    { label: 'GAS — HOLD BREATH' },
    { label: 'CLEAR — MASK OFF' },
    { label: 'BREATHE — CONTROLLED EXHALE' },
    { label: 'GAS — HOLD BREATH' },
    { label: 'CLEAR — MASK OFF' },
    { label: 'BREATHE — CONTROLLED EXHALE' }
  ];
  let breath = 100;
  const r = await runQTESequence(container, character, {
    prompts: phases,
    statKeys: ['endurance'],
    title: 'Gas Chamber',
    hint: 'Space hold breath on GAS · J clear mask on CLEAR · I exhale on BREATHE',
    windowRange: [2200, 3000],
    onStart: (ui) => setMeter(ui, 1),
    onResult: (hit, _step, ui) => {
      if (!hit) breath = Math.max(0, breath - 20);
      setMeter(ui, breath / 100);
    }
  });
  return buildActivityResult(r.score, ['endurance'], { hits: r.hits, total: r.total });
}

export async function runNightCleanup(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Night Cleanup', hint: 'Hold L (right hand) to scrub · release on creaks' });
    let progress = 0;
    let noise = 20;
    let scrubbing = false;
    let creak = false;

    ui.main.innerHTML = `<div class="mg-night-bar"><div class="mg-night-fill" id="nc-fill"></div></div><div class="mg-prompt">Noise: <span id="nc-noise">${noise}</span>%</div>`;
    const fill = ui.main.querySelector('#nc-fill');
    const noiseEl = ui.main.querySelector('#nc-noise');

    const loop = createLoop({
      onTick: () => {
        if (scrubbing && !creak) {
          progress += 0.4;
          noise = Math.min(100, noise + 0.15);
          fill.style.width = `${Math.min(100, progress)}%`;
          noiseEl.textContent = Math.round(noise);
          if (noise >= 100) end(false);
          if (progress >= 100) end(true);
        }
      }
    });

    const creakTimer = setInterval(() => {
      creak = true;
      ui.hint.textContent = 'CREAK — freeze!';
      setTimeout(() => {
        creak = false;
        ui.hint.textContent = 'Hold L (right hand) to scrub · release on creaks';
      }, 1200);
    }, 3500);

    const onKeyDown = (e) => { if (e.code === 'KeyL' && !creak) scrubbing = true; };
    const onKeyUp = (e) => { if (e.code === 'KeyL') scrubbing = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    const undeclare = declarePadKeys(['KeyL']);

    function end(success) {
      clearInterval(creakTimer);
      loop.stop();
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      undeclare();
      ui.dispose();
      resolve(buildActivityResult(success ? 0.85 : progress / 100, ['dexterity'], { progress, noise }));
    }
  });
}

const LETTER_ROUNDS = [
  {
    prompt: 'How do you open the letter?',
    choices: ['Tell them you\'re doing fine and training hard.', 'Admit it\'s harder than you expected but you\'re not quitting.', 'Brag about how easy boot camp is.'],
    answer: 1
  },
  {
    prompt: 'What do you tell them about the D.I.?',
    choices: ['He\'s tough but fair — you\'re learning.', 'You hate him and want to come home.', 'You don\'t mention the D.I. at all.'],
    answer: 0
  },
  {
    prompt: 'How do you close?',
    choices: ['Love you. I\'ll make you proud.', 'See you whenever.', 'Don\'t write back, too busy.'],
    answer: 0
  }
];

export async function runWriteLetter(container, character) {
  const r = await runChoiceRounds(container, { rounds: LETTER_ROUNDS, title: 'Letter Home', hint: 'Compose your first letter — tone matters' });
  return buildActivityResult(Math.max(0.6, r.score), ['intelligence'], r);
}

const MAIL_ROUNDS = [
  {
    prompt: 'A care package arrives for your rack-mate. He offers to share.',
    choices: ['Politely decline — contraband isn\'t worth it.', 'Take one piece and enjoy it quietly.', 'Report it to the D.I. immediately.'],
    answer: 0
  },
  {
    prompt: 'Your mom sent cookies. The whole platoon smells them.',
    choices: ['Share with your fire team after chow.', 'Hide them under your rack.', 'Eat them all yourself tonight.'],
    answer: 0
  },
  {
    prompt: 'A letter says your girlfriend is moving on.',
    choices: ['Read it alone, square yourself away, press on.', 'Throw a fit in the squad bay.', 'Ignore it and pretend it never came.'],
    answer: 0
  }
];

export async function runMailCall(container, character) {
  const r = await runChoiceRounds(container, { rounds: MAIL_ROUNDS, title: 'Mail Call', hint: 'Packages and letters after the Crucible' });
  return buildActivityResult(Math.max(0.65, r.score), ['leadership'], r);
}

const FIELD_DAY_STATIONS = ['Quarterdeck', 'Head', 'Racks', 'Windows', 'Gear locker'];

export async function runFieldDay(container, character) {
  const r = await runClickSequence(container, {
    items: FIELD_DAY_STATIONS,
    correctOrder: FIELD_DAY_STATIONS,
    timeMs: 18000,
    title: 'Field Day',
    hint: 'Clean stations in order before the white-glove pass'
  });
  return buildActivityResult(r.score, ['endurance', 'leadership'], r);
}

const FOOTLOCKER_ITEMS = [
  {
    id: 'socks', name: 'Socks',
    ok: { desc: 'rolled, 6 pr', art: ['ww.ww.ww', 'ss.ss.ss', '........', 'ww.ww.ww', 'ss.ss.ss', '........'] },
    fault: { desc: 'loose, 5 pr', reason: 'SOCKS UNROLLED', cue: 'crooked',
      art: ['wwwww...', 'sssss...', '..wwwwww', '..ssssss', 'ww.ww...', 'ss.ss...'] }
  },
  {
    id: 'skivvies', name: 'Skivvies',
    ok: { desc: 'folded square', art: ['........', '.wwwwww.', '.wssssw.', '.wwwwww.', '.wssssw.', '.wwwwww.'] },
    fault: { desc: 'wadded up', reason: 'SKIVVIES WADDED',
      art: ['...ww...', '.wwsww..', 'wsw.wsww', '.wwsw.w.', '..www.s.', '........'] }
  },
  {
    id: 'towel', name: 'Towel',
    ok: { desc: 'folded 3x', art: ['........', 'gggggggg', 'GGGGGGGG', 'gggggggg', 'GGGGGGGG', 'gggggggg'] },
    fault: { desc: 'bunched up', reason: 'TOWEL UNFOLDED',
      art: ['..gg....', '.gGgg.g.', 'gGg.gGgg', 'gg.GgGg.', '.gggG.gg', '...gg...'] }
  },
  {
    id: 'razor', name: 'Razor',
    ok: { desc: 'capped, in kit', art: ['bbbbbbbb', 'bkkkkkkb', 'bkuuuukb', 'bkkssskb', 'bkkkkkkb', 'bbbbbbbb'] },
    fault: { desc: 'loose, uncapped', reason: 'RAZOR UNSECURED',
      art: ['bbbbb...', 'bkkkb.s.', 'bkkkb.ss', 'bkkkb..s', 'bbbbb..u', '......uu'] }
  },
  {
    id: 'boots', name: 'Boots',
    ok: { desc: 'shined', art: ['.BB..BB.', '.BB..BB.', '.BB..BB.', '.BwB.BwB', '.BBB.BBB', '........'] },
    fault: { desc: 'scuffed, dull', reason: 'BOOTS UNSHINED', cue: 'dull',
      art: ['.BB..BB.', '.Bh..BB.', '.BB..hB.', '.BBB.BBB', '.BhB.BBB', '........'] }
  },
  {
    id: 'belt', name: 'Belt',
    ok: { desc: 'brass bright', art: ['........', '..yyyy..', 'GGykkyGG', 'GGykkyGG', '..yyyy..', '........'] },
    fault: { desc: 'tarnished', reason: 'BUCKLE TARNISHED', cue: 'dull',
      art: ['........', '..dddd..', 'GGdkkdGG', 'GGdkkdGG', '..dddd..', '........'] }
  },
  {
    id: 'photo', name: 'Photo',
    ok: { desc: 'in lid tray', art: ['wwwwww..', 'wppppw..', 'wpnnpw..', 'wggggw..', 'wwwwww..', '........'] },
    fault: { desc: 'out of place', reason: 'PHOTO ADRIFT', cue: 'tilt',
      art: ['........', '..wwwwww', '..wppppw', '..wpnnpw', '..wggggw', '..wwwwww'] }
  },
  {
    id: 'letters', name: 'Letters',
    ok: { desc: 'squared', art: ['.eeeeee.', '.ewwwwe.', '.eeeeee.', '.nnnnnn.', '.eeeeee.', '.nnnnnn.'] },
    fault: { desc: 'fanned out', reason: 'MAIL ADRIFT',
      art: ['ee......', 'eeee.n..', '.eeeenn.', '...eeenn', '.nn..eee', 'nnn....e'] }
  },
  {
    id: 'padlock', name: 'Padlock',
    ok: { desc: 'locked', art: ['..ssss..', '.s....s.', '.s....s.', 'yyyyyyyy', 'yyykkyyy', 'yyyyyyyy'] },
    fault: { desc: 'hasp open', reason: 'LOCK OPEN',
      art: ['.ssss...', '.s..s...', '.s..s...', '.s......', 'yyyyyyyy', 'yyykkyyy'] }
  },
  {
    id: 'hygiene', name: 'Hygiene',
    ok: { desc: 'caps on', art: ['uu.kk.uu', 'ww.nn.ww', 'wu.nk.wu', 'ww.nn.ww', 'ww.nn.ww', '........'] },
    fault: { desc: 'cap missing', reason: 'CAP MISSING',
      art: ['uu....uu', 'ww.nn.ww', 'wu.nn.wu', 'ww.nn.ww', 'ww.nn.ww', '........'] }
  }
];

export async function runFootlockerInspection(container, character) {
  const statKeys = ['leadership', 'intelligence'];
  const r = await runInspectionBoard(container, character, {
    title: 'Footlocker Inspection',
    hint: 'Read every item — tap each discrepancy before time runs out',
    caption: 'FOOTLOCKER · TOP TRAY',
    variant: 'footlocker',
    items: FOOTLOCKER_ITEMS,
    faultCount: 4,
    statKeys
  });
  return buildActivityResult(r.score, statKeys, { found: r.found, total: r.total, falseFlags: r.falseFlags });
}

const IT_COMMANDS = [
  { label: 'PUSH-UPS', keys: ['KeyJ', 'KeyL'], guide: 'Arms: alternate J / L rapidly' },
  { label: 'MOUNTAIN CLIMBERS', keys: ['KeyA', 'KeyD'], guide: 'Legs: alternate A / D rapidly' },
  { label: 'SIDE STRADDLE HOPS', keys: ['KeyI', 'KeyK'], guide: 'Arms up / down: alternate I / K rapidly' },
  { label: 'PUSH-UPS', keys: ['KeyJ', 'KeyL'], guide: 'Arms: alternate J / L rapidly' },
  { label: 'MOUNTAIN CLIMBERS', keys: ['KeyA', 'KeyD'], guide: 'Legs: alternate A / D rapidly' }
];

export async function runIncentiveTraining(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Incentive Training', hint: 'Quarterdeck — keep pace in the red zone' });
    let cmd = 0;
    let pace = 50;
    let hits = 0;
    const total = IT_COMMANDS.length;
    let lastKey = null;

    function nextCommand() {
      if (cmd >= total) {
        unbind();
        ui.dispose();
        resolve(buildActivityResult(hits / total, ['endurance', 'strength'], { hits, total }));
        return;
      }
      const c = IT_COMMANDS[cmd];
      ui.main.innerHTML = `<div class="mg-prompt">${c.label}</div><div class="mg-key-hint">${c.guide}</div>`;
      setProgress(ui, cmd + 1, total);
      pace = 40;
      lastKey = null;
      let presses = 0;
      const need = 12;
      const interval = setInterval(() => {
        pace = Math.max(0, pace - 2);
        setMeter(ui, pace / 100);
        if (pace <= 0) {
          clearInterval(interval);
          ui._onKey = null;
          flashResult(ui, 'miss');
          cmd++;
          setTimeout(nextCommand, RESULT_PAUSE_MS);
        }
      }, 200);

      ui._onKey = (code) => {
        if (!c.keys.includes(code) || lastKey === code) return;
        lastKey = code;
        presses++;
        pace = Math.min(100, pace + 8);
        setMeter(ui, pace / 100);
        if (presses >= need) {
          clearInterval(interval);
          ui._onKey = null;
          hits++;
          flashResult(ui, 'hit');
          cmd++;
          setTimeout(nextCommand, RESULT_PAUSE_MS);
        }
      };
    }

    const unbind = bindKeys(['KeyJ', 'KeyL', 'KeyA', 'KeyD', 'KeyI', 'KeyK'], (code) => ui._onKey?.(code));
    nextCommand();
  });
}
