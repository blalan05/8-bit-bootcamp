import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, setMeter, flashResult, createLoop, bindKeys,
  windowMsFor, runQTESequence, runClickSequence, runChoiceRounds
} from '../lib/minigameKit.js';

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
    const ui = mountGame(container, { title: 'Dressing Drill', hint: 'Click the correct gear when the D.I. calls it' });
    let round = 0;
    let hits = 0;
    const total = 8;
    let timeLeft = 0;
    let current = null;
    let timer = null;

    function renderPile(targetId) {
      const shuffled = [...DRESS_ITEMS].sort(() => Math.random() - 0.5);
      ui.main.innerHTML = `
        <div class="mg-prompt">${current.call}</div>
        <div class="mg-countdown" id="mg-countdown">${Math.ceil(timeLeft / 1000)}</div>
        <div class="mg-choices">${shuffled.map(item =>
          `<button type="button" class="btn btn-secondary mg-choice" data-id="${item.id}">${item.label}</button>`
        ).join('')}</div>`;
      ui.main.onclick = (e) => {
        const btn = e.target.closest('[data-id]');
        if (!btn || !current) return;
        ui.main.onclick = null;
        clearInterval(timer);
        if (btn.dataset.id === targetId) {
          hits++;
          flashResult(ui, 'hit');
        } else {
          flashResult(ui, 'miss');
        }
        round++;
        setTimeout(nextRound, 400);
      };
    }

    function nextRound() {
      if (round >= total) {
        ui.dispose();
        resolve(buildActivityResult(hits / total, ['dexterity'], { hits, total }));
        return;
      }
      current = DRESS_ITEMS[round % DRESS_ITEMS.length];
      const baseMs = windowMsFor(character, ['dexterity'], 1200, 2000);
      timeLeft = Math.max(600, baseMs - round * 80);
      setProgress(ui, round + 1, total);
      renderPile(current.id);
      const end = Date.now() + timeLeft;
      timer = setInterval(() => {
        timeLeft = end - Date.now();
        const el = ui.main.querySelector('#mg-countdown');
        if (el) el.textContent = Math.max(0, Math.ceil(timeLeft / 1000));
        if (timeLeft <= 0) {
          clearInterval(timer);
          ui.main.onclick = null;
          flashResult(ui, 'miss');
          round++;
          setTimeout(nextRound, 400);
        }
      }, 100);
    }
    nextRound();
  });
}

export async function runHighObstacle(container, character) {
  const prompts = [
    { label: 'GRIP LEFT', code: 'KeyJ', keyLabel: 'J' },
    { label: 'GRIP RIGHT', code: 'KeyK', keyLabel: 'K' },
    { label: 'GRIP LEFT', code: 'KeyJ', keyLabel: 'J' },
    { label: 'GRIP RIGHT', code: 'KeyK', keyLabel: 'K' },
    { label: 'PULL UP', code: 'Space', keyLabel: 'Space' },
    { label: 'GRIP LEFT', code: 'KeyJ', keyLabel: 'J' },
    { label: 'GRIP RIGHT', code: 'KeyK', keyLabel: 'K' },
    { label: 'MOUNT TOP', code: 'Enter', keyLabel: 'Enter' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['strength', 'dexterity'],
    title: 'High Obstacle Course',
    hint: 'J/K alternate grips · Space pull · Enter mount'
  });
  return buildActivityResult(r.score, ['strength', 'dexterity'], r);
}

export async function runRappelTower(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Rappel Tower', hint: 'Press B in the green band each bounce' });
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
          <div class="mg-key-hint">Press <kbd>B</kbd> in the green zone (40–70%)</div>`;
      }
    });

    const unbind = bindKeys(['KeyB'], () => {
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
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Gas Chamber', hint: 'Hold breath on GAS · Clear mask on CLEAR · Exhale on BREATHE' });
    const phases = [
      { label: 'GAS — HOLD BREATH', code: 'Space', hold: true },
      { label: 'CLEAR — MASK OFF', code: 'KeyC' },
      { label: 'BREATHE — CONTROLLED EXHALE', code: 'KeyB' },
      { label: 'GAS — HOLD BREATH', code: 'Space', hold: true },
      { label: 'CLEAR — MASK OFF', code: 'KeyC' },
      { label: 'BREATHE — CONTROLLED EXHALE', code: 'KeyB' }
    ];
    let index = 0;
    let hits = 0;
    let breath = 100;

    function next() {
      if (index >= phases.length) {
        unbind();
        ui.dispose();
        resolve(buildActivityResult(hits / phases.length, ['endurance'], { hits, total: phases.length }));
        return;
      }
      const p = phases[index];
      ui.main.innerHTML = `<div class="mg-prompt">${p.label}</div><div class="mg-key-hint">Press <kbd>${p.code === 'Space' ? 'Space' : p.code.replace('Key', '')}</kbd></div>`;
      setProgress(ui, index + 1, phases.length);
      setMeter(ui, breath / 100);

      let handled = false;
      const timer = setTimeout(() => {
        if (!handled) {
          breath = Math.max(0, breath - 20);
          flashResult(ui, 'miss');
          index++;
          setTimeout(next, 300);
        }
      }, windowMsFor(character, ['endurance'], 800, 1400));

      ui._onPhase = (code) => {
        if (handled) return;
        if (code === p.code) {
          handled = true;
          clearTimeout(timer);
          hits++;
          flashResult(ui, 'hit');
          index++;
          setTimeout(next, 250);
        }
      };
    }

    const unbind = bindKeys(['Space', 'KeyC', 'KeyB'], (code) => ui._onPhase?.(code));
    next();
  });
}

export async function runNightCleanup(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Night Cleanup', hint: 'Hold S to scrub · release on creaks' });
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
        ui.hint.textContent = 'Hold S to scrub · release on creaks';
      }, 1200);
    }, 3500);

    const onKeyDown = (e) => { if (e.code === 'KeyS' && !creak) scrubbing = true; };
    const onKeyUp = (e) => { if (e.code === 'KeyS') scrubbing = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    function end(success) {
      clearInterval(creakTimer);
      loop.stop();
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
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

export async function runFootlockerInspection(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Footlocker Inspection', hint: 'Click every discrepancy before time runs out' });
    const errors = [
      { id: 'socks', x: 25, y: 70 },
      { id: 'boots', x: 40, y: 75 },
      { id: 'gig', x: 55, y: 40 },
      { id: 'locker', x: 70, y: 55 },
      { id: 'photos', x: 35, y: 25 }
    ];
    const found = new Set();
    ui.main.innerHTML = `<div class="mg-inspect-board">${errors.map(e =>
      `<button type="button" class="mg-inspect-spot" data-id="${e.id}" style="left:${e.x}%;top:${e.y}%"></button>`
    ).join('')}</div>`;

    const loop = createLoop({
      durationMs: 14000,
      onFinish: finish
    });

    function finish() {
      ui.main.removeEventListener('click', onClick);
      ui.dispose();
      resolve(buildActivityResult(found.size / errors.length, ['leadership', 'intelligence'], { found: found.size, total: errors.length }));
    }

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

const IT_COMMANDS = [
  { label: 'PUSH-UPS', keys: ['KeyJ', 'KeyK'], alternates: true },
  { label: 'MOUNTAIN CLIMBERS', keys: ['KeyJ', 'KeyK'], alternates: true },
  { label: 'SIDE STRADDLE HOPS', keys: ['Space'], alternates: false },
  { label: 'PUSH-UPS', keys: ['KeyJ', 'KeyK'], alternates: true },
  { label: 'MOUNTAIN CLIMBERS', keys: ['KeyJ', 'KeyK'], alternates: true }
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
      ui.main.innerHTML = `<div class="mg-prompt">${c.label}</div><div class="mg-key-hint">${c.alternates ? 'Alternate J / K rapidly' : 'Mash Space'}</div>`;
      setProgress(ui, cmd + 1, total);
      pace = 40;
      let presses = 0;
      const need = 12;
      const interval = setInterval(() => {
        pace = Math.max(0, pace - 2);
        setMeter(ui, pace / 100);
        if (pace <= 0) {
          clearInterval(interval);
          flashResult(ui, 'miss');
          cmd++;
          setTimeout(nextCommand, 300);
        }
      }, 200);

      ui._onKey = (code) => {
        if (c.alternates) {
          if (code !== 'KeyJ' && code !== 'KeyK') return;
          if (lastKey === code) return;
          lastKey = code;
        } else if (code !== 'Space') return;
        presses++;
        pace = Math.min(100, pace + 8);
        setMeter(ui, pace / 100);
        if (presses >= need) {
          clearInterval(interval);
          hits++;
          flashResult(ui, 'hit');
          cmd++;
          lastKey = null;
          setTimeout(nextCommand, 300);
        }
      };
    }

    const unbind = bindKeys(['KeyJ', 'KeyK', 'Space'], (code) => ui._onKey?.(code));
    nextCommand();
  });
}
