import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setMeter, setProgress, flashResult, createLoop, bindKeys,
  windowMsFor, avgStatT, runQTESequence, runClickSequence
} from '../lib/minigameKit.js';

export async function runSteadyAim(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Steady Aim',
      hint: 'Hold <kbd>Space</kbd> to steady · <kbd>F</kbd> to fire when aligned'
    });
    let shots = 0;
    let hits = 0;
    const total = 6;
    let reticleX = 50;
    let drift = 1.5;
    let breath = 1;
    let steady = false;

    ui.main.innerHTML = `<div class="mg-aim-ring"><div class="mg-reticle" id="mg-reticle"></div></div>`;
    const reticle = ui.main.querySelector('#mg-reticle');

    const loop = createLoop({
      durationMs: 30000,
      onTick: (_, __, dt) => {
        if (!steady) {
          reticleX += drift * (dt / 16);
          if (reticleX > 85 || reticleX < 15) drift *= -1;
        } else {
          breath -= 0.003 * (dt / 16);
          if (breath <= 0) { steady = false; breath = 0; }
        }
        reticle.style.left = `${reticleX}%`;
        setMeter(ui, breath);
      },
      onFinish: end
    });

    const unbind = bindKeys(['Space', 'KeyF'], (code) => {
      if (code === 'Space' && breath > 0.1) steady = true;
      if (code === 'KeyF' && shots < total) {
        shots++;
        const dist = Math.abs(reticleX - 50);
        if (dist < 12) { hits++; flashResult(ui, 'hit'); } else flashResult(ui, 'miss');
        setProgress(ui, shots, total);
        steady = false;
        if (shots >= total) end();
      }
    });

    function end() {
      loop.stop();
      unbind();
      ui.dispose();
      resolve(buildActivityResult(hits / total, ['dexterity', 'intelligence'], { hits, total }));
    }
    setProgress(ui, 0, total);
  });
}

export async function runPaceRunner(container, character) {
  const prompts = Array.from({ length: 14 }, (_, i) => ({
    label: i % 2 === 0 ? 'LEFT STRIDE' : 'RIGHT STRIDE',
    code: i % 2 === 0 ? 'KeyJ' : 'KeyK',
    keyLabel: i % 2 === 0 ? 'J' : 'K'
  }));
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['endurance'],
    title: 'PFT Pace Run',
    hint: 'Alternate J and K to stay in stride'
  });
  return buildActivityResult(r.score, ['endurance'], r);
}

const STRIP_STEPS = ['Clear rifle', 'Remove bolt', 'Remove charging handle', 'Remove buffer', 'Separate upper/lower', 'Remove trigger group'];

export async function runFieldStrip(container, character) {
  const r = await runClickSequence(container, {
    items: STRIP_STEPS,
    correctOrder: STRIP_STEPS,
    timeMs: 20000 + windowMsFor(character, ['intelligence', 'dexterity'], 0, 8000),
    title: 'Field Strip',
    hint: 'Click parts in correct disassembly order'
  });
  return buildActivityResult(r.score, ['intelligence', 'dexterity'], r);
}

export async function runSwimStrokes(container, character) {
  const prompts = [
    { label: 'FREESTYLE', code: 'KeyF', keyLabel: 'F' },
    { label: 'BREATHE', code: 'Space', keyLabel: 'Space' },
    { label: 'FREESTYLE', code: 'KeyF', keyLabel: 'F' },
    { label: 'BREATHE', code: 'Space', keyLabel: 'Space' },
    { label: 'FREESTYLE', code: 'KeyF', keyLabel: 'F' },
    { label: 'BREATHE', code: 'Space', keyLabel: 'Space' },
    { label: 'FREESTYLE', code: 'KeyF', keyLabel: 'F' },
    { label: 'TURN', code: 'KeyT', keyLabel: 'T' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['endurance'],
    title: 'Swim Qual',
    hint: 'F to stroke · Space to breathe at the wall'
  });
  return buildActivityResult(r.score, ['endurance'], r);
}

export async function runGearShed(container, character) {
  const prompts = [
    { label: 'DROP HELMET', code: 'KeyH', keyLabel: 'H' },
    { label: 'DROP FLAK', code: 'KeyF', keyLabel: 'F' },
    { label: 'DROP BELT', code: 'KeyB', keyLabel: 'B' },
    { label: 'DROP BOOTS', code: 'KeyN', keyLabel: 'N' },
    { label: 'DROP TROUSERS', code: 'KeyT', keyLabel: 'T' },
    { label: 'SURFACE', code: 'Space', keyLabel: 'Space' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['dexterity', 'endurance'],
    title: 'Gear Shed',
    hint: 'Shed gear in order before air runs out'
  });
  return buildActivityResult(r.score, ['dexterity', 'endurance'], r);
}

export async function runLogTeamLift(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title: 'Log Team Lift', hint: 'Press <kbd>Space</kbd> when all markers align in the green zone' });
    let lifts = 0;
    let hits = 0;
    const total = 8;
    const markers = [0, 0, 0, 0];
    const window = 15 + avgStatT(character, ['leadership']) * 10;

    ui.main.innerHTML = `<div class="mg-log-lane">${markers.map((_, i) =>
      `<div class="mg-log-marker" id="m${i}"></div>`).join('')}</div><div class="mg-log-zone"></div>`;

    const loop = createLoop({
      onTick: () => {
        markers.forEach((_, i) => {
          markers[i] = (markers[i] + 2 + i * 0.3) % 100;
          const el = ui.main.querySelector(`#m${i}`);
          if (el) el.style.left = `${markers[i]}%`;
        });
      }
    });

    const unbind = bindKeys(['Space'], () => {
      const aligned = markers.every(m => m > 40 && m < 40 + window);
      lifts++;
      if (aligned) { hits++; flashResult(ui, 'hit'); } else flashResult(ui, 'miss');
      setProgress(ui, lifts, total);
      if (lifts >= total) {
        loop.stop();
        unbind();
        ui.dispose();
        resolve(buildActivityResult(hits / total, ['strength', 'leadership'], { hits, total }));
      }
    });
    setProgress(ui, 0, total);
  });
}

export async function runObstacleRun(container, character) {
  const obstacles = [
    { label: 'VAULT', code: 'KeyV', keyLabel: 'V' },
    { label: 'CRAWL', code: 'KeyC', keyLabel: 'C' },
    { label: 'CLIMB', code: 'KeyL', keyLabel: 'L' },
    { label: 'SWING', code: 'KeyS', keyLabel: 'S' },
    { label: 'VAULT', code: 'KeyV', keyLabel: 'V' },
    { label: 'CRAWL', code: 'KeyC', keyLabel: 'C' },
    { label: 'CLIMB', code: 'KeyL', keyLabel: 'L' },
    { label: 'FINISH', code: 'Enter', keyLabel: 'Enter' }
  ];
  const r = await runQTESequence(container, character, {
    prompts: obstacles,
    statKeys: ['dexterity'],
    title: 'Fire Team Course',
    hint: 'V vault · C crawl · L climb · S swing'
  });
  return buildActivityResult(r.score, ['dexterity'], r);
}
