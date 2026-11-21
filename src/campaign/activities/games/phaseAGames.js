import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setMeter, setProgress, flashResult, createLoop, bindKeys,
  avgStatT, runQTESequence, runClickSequence
} from '../lib/minigameKit.js';
import { createSwimScene, createGearShedScene } from '../scenes/poolScenes.js';

export async function runSteadyAim(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Steady Aim',
      hint: 'Hold <kbd>Space</kbd> to steady · <kbd>L</kbd> (right hand) to fire when aligned'
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

    const unbind = bindKeys(['Space', 'KeyL'], (code) => {
      if (code === 'Space' && breath > 0.1) steady = true;
      if (code === 'KeyL' && shots < total) {
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
    label: i % 2 === 0 ? 'LEFT STRIDE' : 'RIGHT STRIDE'
  }));
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['endurance'],
    title: 'PFT Pace Run',
    hint: 'Legs: A left stride · D right stride — stay in step'
  });
  return buildActivityResult(r.score, ['endurance'], r);
}

const STRIP_STEPS = ['Clear rifle', 'Remove bolt', 'Remove charging handle', 'Remove buffer', 'Separate upper/lower', 'Remove trigger group'];

export async function runFieldStrip(container, character) {
  const r = await runClickSequence(container, {
    items: STRIP_STEPS,
    correctOrder: STRIP_STEPS,
    timeMs: 20000 + Math.round(avgStatT(character, ['intelligence', 'dexterity']) * 8000),
    title: 'Field Strip',
    hint: 'Click parts in correct disassembly order'
  });
  return buildActivityResult(r.score, ['intelligence', 'dexterity'], r);
}

export async function runSwimStrokes(container, character) {
  const prompts = [
    { label: 'FREESTYLE' },
    { label: 'BREATHE' },
    { label: 'FREESTYLE' },
    { label: 'BREATHE' },
    { label: 'FREESTYLE' },
    { label: 'BREATHE' },
    { label: 'FREESTYLE' },
    { label: 'TURN — PUSH OFF' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['endurance'],
    title: 'Swim Qual',
    hint: 'L (right arm) to stroke · I (head up) to breathe · W to push off the wall',
    scene: createSwimScene
  });
  return buildActivityResult(r.score, ['endurance'], r);
}

export async function runGearShed(container, character) {
  const prompts = [
    { label: 'DROP HELMET' },
    { label: 'DROP FLAK' },
    { label: 'DROP BELT' },
    { label: 'DROP BOOTS' },
    { label: 'DROP TROUSERS' },
    { label: 'SURFACE' }
  ];
  const r = await runQTESequence(container, character, {
    prompts,
    statKeys: ['dexterity', 'endurance'],
    title: 'Gear Shed',
    hint: 'Shed gear in order before air runs out — press the lit key',
    scene: createGearShedScene
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
    { label: 'VAULT' },
    { label: 'CRAWL' },
    { label: 'CLIMB' },
    { label: 'SWING' },
    { label: 'VAULT' },
    { label: 'CRAWL' },
    { label: 'CLIMB' },
    { label: 'FINISH' }
  ];
  const r = await runQTESequence(container, character, {
    prompts: obstacles,
    statKeys: ['dexterity'],
    title: 'Fire Team Course',
    hint: 'W vault · S crawl · I climb · L swing · Enter finish'
  });
  return buildActivityResult(r.score, ['dexterity'], r);
}
