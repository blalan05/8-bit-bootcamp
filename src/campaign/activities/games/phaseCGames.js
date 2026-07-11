import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setMeter, setProgress, flashResult, createLoop, bindKeys,
  runQTESequence, runChoiceRounds, runClickSequence, avgStatT
} from '../lib/minigameKit.js';
import { runSteadyAim } from './phaseAGames.js';
import { runLandNav } from './phaseBGames.js';

export async function runHumpPrep(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Full Gear Hike', hint: 'W to march · Space to help a falling teammate (costs stamina)' });
    let progress = 0;
    let stamina = 1;
    let marching = false;
    let events = 0;

    ui.main.innerHTML = `<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-hike-fill"></div></div>`;
    const fill = ui.main.querySelector('#mg-hike-fill');

    const loop = createLoop({
      onTick: (_, __, dt) => {
        if (marching) {
          progress += 0.15 * (dt / 16);
          stamina -= 0.001 * (dt / 16);
          fill.style.width = `${Math.min(100, progress)}%`;
          setMeter(ui, stamina);
        }
        if (stamina <= 0) { stamina = 0; marching = false; }
        if (progress >= 100) end(0.85);
      }
    });

    let eventTimer = setInterval(() => {
      if (events < 3 && Math.random() > 0.5) {
        events++;
        ui.hint.textContent = 'Buddy falling back! Press Space to help (+LDR, -stamina)';
        ui._helpNeeded = true;
      }
    }, 5000);

    const unbind = bindKeys(['KeyW', 'Space'], (code) => {
      if (code === 'KeyW' && stamina > 0) marching = true;
      if (code === 'Space' && ui._helpNeeded) {
        ui._helpNeeded = false;
        stamina -= 0.15;
        ui.hint.textContent = 'Good leadership. Keep marching.';
        ui._ldrBonus = (ui._ldrBonus ?? 0) + 1;
      }
    });
    window.addEventListener('keyup', (e) => { if (e.code === 'KeyW') marching = false; });

    function end(base) {
      clearInterval(eventTimer);
      loop.stop();
      unbind();
      const bonus = (ui._ldrBonus ?? 0) * 0.05;
      ui.dispose();
      resolve(buildActivityResult(Math.min(1, base + bonus), ['endurance', 'leadership'], { progress, ldrHelps: ui._ldrBonus ?? 0 }));
    }
    setMeter(ui, 1);
  });
}

export async function runReactionCourse(container, character) {
  const sequence = ['Plank A', 'Rope swing', 'Barrel roll', 'Plank B', 'Team pull'];
  const r = await runClickSequence(container, {
    items: sequence,
    correctOrder: sequence,
    timeMs: 18000,
    title: 'Reaction Course',
    hint: 'Sequence the crossing in the fewest correct moves'
  });
  return buildActivityResult(r.score, ['intelligence', 'leadership'], r);
}

export async function runCrucibleDay(container, character) {
  const aim = await runSteadyAim(container, character);
  return buildActivityResult(aim.score * 0.9, ['endurance', 'strength'], { station: 'day', ...aim.details });
}

export async function runCrucibleNight(container, character) {
  const prompts = [
    { label: 'FREEZE', code: 'Space', keyLabel: 'Space' },
    { label: 'MOVE', code: 'KeyW', keyLabel: 'W' },
    { label: 'NAV LEFT', code: 'KeyA', keyLabel: 'A' },
    { label: 'NAV RIGHT', code: 'KeyD', keyLabel: 'D' },
    { label: 'FREEZE', code: 'Space', keyLabel: 'Space' },
    { label: 'MOVE', code: 'KeyW', keyLabel: 'W' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['endurance', 'intelligence'],
    title: 'Crucible Night',
    hint: 'Night movement — freeze on command'
  });
  return buildActivityResult(r.score, ['endurance', 'intelligence'], r);
}

export async function runReaperHike(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'The Reaper', hint: 'W to hike — stamina barely recovers. Finish to pass.' });
    let progress = 0;
    let stamina = 0.6;
    let hiking = false;

    ui.main.innerHTML = `<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-reaper-fill"></div></div>`;
    const fill = ui.main.querySelector('#mg-reaper-fill');

    const loop = createLoop({
      onTick: (_, __, dt) => {
        if (hiking && stamina > 0) {
          progress += 0.12 * (dt / 16);
          stamina -= 0.002 * (dt / 16);
        } else {
          stamina = Math.min(0.6, stamina + 0.0003 * (dt / 16));
        }
        fill.style.width = `${Math.min(100, progress)}%`;
        setMeter(ui, stamina);
        if (progress >= 100) {
          const score = stamina > 0.2 ? 0.95 : 0.65;
          finish(score);
        }
      }
    });

    const unbind = bindKeys(['KeyW'], () => { if (stamina > 0.05) hiking = true; });
    window.addEventListener('keyup', (e) => { if (e.code === 'KeyW') hiking = false; });

    function finish(score) {
      loop.stop();
      unbind();
      ui.dispose();
      resolve(buildActivityResult(score, ['endurance', 'leadership'], { progress }));
    }
    setMeter(ui, stamina);
  });
}

export async function runWarriorBreakfast(container, character) {
  const items = ['Eggs', 'Bacon', 'Pancakes', 'Sausage', 'Toast', 'Fruit', 'Juice', 'Coffee'];
  const calls = ['Eggs', 'Bacon', 'Pancakes', 'Sausage', 'Toast', 'Fruit', 'Juice', 'Coffee', 'Eggs', 'Bacon'];
  const prompts = calls.map(item => ({
    label: `Grab ${item}`,
    code: 'Space',
    keyLabel: 'Space'
  }));
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['endurance'],
    title: 'Warrior Breakfast',
    hint: 'Press Space when the called item appears — generous windows'
  });
  return buildActivityResult(Math.max(0.7, r.score), ['endurance'], r);
}

export async function runGearTurnIn(container, character) {
  const rounds = [
    { prompt: 'Issued: 2 canteens. Shelf shows:', choices: ['2 canteens', '1 canteen', '3 canteens', '0 canteens'], answer: 0 },
    { prompt: 'Issued: 1 flak jacket. Shelf shows:', choices: ['2 jackets', '1 jacket', '0 jackets', '1 jacket + cover'], answer: 1 },
    { prompt: 'Issued: 3 magazines. Shelf shows:', choices: ['3 magazines', '2 magazines', '4 magazines', '1 magazine'], answer: 0 },
    { prompt: 'Issued: 1 E-tool. Shelf shows:', choices: ['1 E-tool', '2 E-tools', '0 E-tools', '1 shovel'], answer: 0 },
    { prompt: 'Issued: 2 pairs socks. Shelf shows:', choices: ['1 pair', '2 pairs', '3 pairs', '0 pairs'], answer: 1 }
  ];
  const r = await runChoiceRounds(container, { rounds, title: 'Gear Turn-In', hint: 'Match issued quantities to shelf counts' });
  return buildActivityResult(r.score, ['intelligence'], r);
}

export async function runFinalDrill(container, character) {
  const prompts = [
    { label: 'LEFT FACE', code: 'KeyL', keyLabel: 'L' },
    { label: 'RIGHT FACE', code: 'KeyR', keyLabel: 'R' },
    { label: 'ABOUT FACE', code: 'KeyA', keyLabel: 'A' },
    { label: 'FORWARD MARCH', code: 'KeyM', keyLabel: 'M' },
    { label: 'HALT', code: 'KeyH', keyLabel: 'H' },
    { label: 'LEFT FACE', code: 'KeyL', keyLabel: 'L' },
    { label: 'RIGHT FACE', code: 'KeyR', keyLabel: 'R' },
    { label: 'HALT', code: 'KeyH', keyLabel: 'H' },
    { label: 'ABOUT FACE', code: 'KeyA', keyLabel: 'A' },
    { label: 'HALT', code: 'KeyH', keyLabel: 'H' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['leadership', 'dexterity'],
    title: 'Final Drill Eval',
    hint: 'Execute from memory — no second chances on timing'
  });
  return buildActivityResult(r.score, ['leadership'], r);
}

export async function runBilletBoard(container, character) {
  const rounds = [
    { prompt: 'What are the three core values?', choices: ['Honor, Courage, Commitment', 'Duty, Honor, Country', 'Semper Fi', 'Adapt, Overcome'], answer: 0 },
    { prompt: 'What does JJDIDTIEBUCKLE represent?', choices: ['Leadership traits', 'Rifle parts', 'Chain of command', 'Uniform regs'], answer: 0 },
    { prompt: 'Who is your Battalion Commander?', choices: ['The senior officer present', 'My D.I.', 'The Sergeant Major', 'The President'], answer: 0 },
    { prompt: 'What is your weapon condition?', choices: ['Condition 4 until ordered', 'Always loaded', 'Condition 1 at all times', 'Unloaded in garrison'], answer: 0 },
    { prompt: 'Purpose of the Crucible?', choices: ['Test core values under stress', 'Extra PT', 'Punishment week', 'Family visit prep'], answer: 0 }
  ];
  const r = await runChoiceRounds(container, { rounds, title: "Billet Board", hint: 'Answer with composure — hesitation costs points' });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}

export async function runFamilyDay(container, character) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    const readiness = character.campaign?.readiness ?? 0;
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Family Day</h2>
        <p class="menu-subtitle">${character.name} — show them the depot</p>
        <p class="recruiter-copy">Your family sees a different person than the one who left home. Readiness: ${readiness}%.</p>
        <p class="recruiter-copy">You walk them past the Parade Deck, the Chow Hall, the barracks. They don't fully understand what you went through — but they see the pride.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="family-ok">Continue</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#family-ok').addEventListener('click', () => {
      overlay.remove();
      resolve(buildActivityResult(0.9, ['leadership'], { narrative: true }));
    }, { once: true });
  });
}

export async function runGraduationParade(container, character) {
  const prompts = [
    { label: 'PRESENT ARMS', code: 'KeyP', keyLabel: 'P' },
    { label: 'ORDER ARMS', code: 'KeyO', keyLabel: 'O' },
    { label: 'EYES RIGHT', code: 'KeyE', keyLabel: 'E' },
    { label: 'FORWARD MARCH', code: 'KeyM', keyLabel: 'M' },
    { label: 'HALT', code: 'KeyH', keyLabel: 'H' },
    { label: 'EGA CEREMONY', code: 'Enter', keyLabel: 'Enter' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['leadership'],
    title: 'Graduation Parade',
    hint: 'Final drill — then receive the Eagle, Globe, and Anchor'
  });
  return buildActivityResult(Math.max(0.85, r.score), ['leadership'], r);
}
