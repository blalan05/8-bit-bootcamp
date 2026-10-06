import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, flashResult, windowMsFor,
  runQTESequence, runClickSequence, runChoiceRounds, bindKeys
} from '../lib/minigameKit.js';

export async function runIedSweep(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'IED Sweep',
      hint: 'Press M to mark SUSPICIOUS OBJECT — hold on ROADSIDE CLUTTER'
    });

    let hits = 0;
    let misses = 0;
    let rounds = 0;
    const totalRounds = 8;
    let currentType = 'suspicious';
    let active = false;
    let timer = null;

    function nextRound() {
      if (rounds >= totalRounds) {
        unbind();
        ui.dispose();
        const score = hits / totalRounds;
        resolve(buildActivityResult(score, ['dexterity', 'intelligence'], { hits, misses }));
        return;
      }
      rounds++;
      currentType = Math.random() < 0.55 ? 'suspicious' : 'clutter';
      active = true;
      const windowMs = windowMsFor(character, ['dexterity', 'intelligence'], 500, 1000);
      ui.main.innerHTML = `
        <div class="mg-prompt ${currentType === 'suspicious' ? 'mg-prompt--hostile' : 'mg-prompt--friendly'}">
          ${currentType === 'suspicious' ? 'SUSPICIOUS OBJECT' : 'ROADSIDE CLUTTER'}
        </div>
        <div class="mg-key-hint">${currentType === 'suspicious' ? 'Press <kbd>M</kbd> to mark' : 'Hold position — do nothing'}</div>
      `;
      setProgress(ui, rounds, totalRounds);
      timer = setTimeout(() => {
        if (!active) return;
        if (currentType === 'suspicious') misses++;
        flashResult(ui, currentType === 'suspicious' ? 'miss' : 'hit');
        active = false;
        setTimeout(nextRound, 400);
      }, windowMs);
    }

    const onKey = (code) => {
      if (!active || code !== 'KeyM') return;
      active = false;
      clearTimeout(timer);
      if (currentType === 'suspicious') {
        hits++;
        flashResult(ui, 'hit');
      } else {
        misses++;
        flashResult(ui, 'miss');
      }
      setTimeout(nextRound, 400);
    };

    const unbind = bindKeys(['KeyM'], onKey);
    nextRound();
  });
}

export async function runTurretGunner(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Turret Gunner',
      hint: 'Press A/D on CONTACT — hold fire on CIVILIAN VEHICLE'
    });

    let hits = 0;
    let misses = 0;
    let rounds = 0;
    const totalRounds = 8;
    let currentType = 'left';
    let active = false;
    let timer = null;

    const ROUND_TYPES = ['left', 'right', 'civilian'];

    function nextRound() {
      if (rounds >= totalRounds) {
        unbind();
        ui.dispose();
        const score = hits / totalRounds;
        resolve(buildActivityResult(score, ['dexterity', 'intelligence'], { hits, misses }));
        return;
      }
      rounds++;
      const roll = Math.random();
      currentType = roll < 0.35 ? 'left' : roll < 0.7 ? 'right' : 'civilian';
      active = true;
      const windowMs = windowMsFor(character, ['dexterity', 'intelligence'], 500, 1000);
      const labels = {
        left: 'CONTACT LEFT!',
        right: 'CONTACT RIGHT!',
        civilian: 'CIVILIAN VEHICLE'
      };
      const hints = {
        left: 'Press <kbd>A</kbd> to traverse left',
        right: 'Press <kbd>D</kbd> to traverse right',
        civilian: 'Hold fire — do nothing'
      };
      ui.main.innerHTML = `
        <div class="mg-prompt ${currentType === 'civilian' ? 'mg-prompt--friendly' : 'mg-prompt--hostile'}">
          ${labels[currentType]}
        </div>
        <div class="mg-key-hint">${hints[currentType]}</div>
      `;
      setProgress(ui, rounds, totalRounds);
      timer = setTimeout(() => {
        if (!active) return;
        if (currentType !== 'civilian') misses++;
        flashResult(ui, currentType !== 'civilian' ? 'miss' : 'hit');
        active = false;
        setTimeout(nextRound, 400);
      }, windowMs);
    }

    const onKey = (code) => {
      if (!active) return;
      const expected = currentType === 'left' ? 'KeyA' : currentType === 'right' ? 'KeyD' : null;
      if (currentType === 'civilian') {
        active = false;
        clearTimeout(timer);
        misses++;
        flashResult(ui, 'miss');
        setTimeout(nextRound, 400);
        return;
      }
      if (code !== expected) return;
      active = false;
      clearTimeout(timer);
      hits++;
      flashResult(ui, 'hit');
      setTimeout(nextRound, 400);
    };

    const unbind = bindKeys(['KeyA', 'KeyD'], onKey);
    nextRound();
  });
}

const CHECKPOINT_CHOICES = ['Wave Through', 'Search', 'Halt'];

const CHECKPOINT_ROUNDS = [
  { prompt: 'Family sedan, papers in order, driver waves — no weapons visible.', answer: 0 },
  { prompt: 'Panel van, no markings, driver avoids eye contact, wires visible under tarp.', answer: 2 },
  { prompt: 'Pickup truck, local contractor badge, empty bed, routine route.', answer: 0 },
  { prompt: 'SUV with tinted windows, nervous passenger, bulge under seat.', answer: 1 },
  { prompt: 'Water truck, UN markings, driver known to the terp.', answer: 0 },
  { prompt: 'Motorcycle approaches fast, rider reaches under jacket at the wire.', answer: 2 },
  { prompt: 'Taxi, three occupants, one refuses to exit when signaled.', answer: 1 },
  { prompt: 'Ambulance, red crescent, wounded visible through rear window.', answer: 0 }
];

export async function runCheckpointSearch(container, character) {
  const rounds = CHECKPOINT_ROUNDS.map(r => ({
    prompt: r.prompt,
    choices: CHECKPOINT_CHOICES,
    answer: r.answer
  }));
  const result = await runChoiceRounds(container, {
    rounds,
    title: 'Checkpoint Duty',
    hint: 'Wave Through, Search, or Halt — read the vehicle cues'
  });
  return buildActivityResult(result.score, ['intelligence', 'dexterity'], result);
}

const STATUE_PREP_STEPS = [
  'Rig the chain',
  'Clear the square',
  'Signal the M88'
];

const STATUE_PULL_COMMANDS = [
  { label: 'TAKE UP SLACK!', code: 'Space', keyLabel: 'Space' },
  { label: 'HEAVE — PULL!', code: 'Space', keyLabel: 'Space' },
  { label: 'SECURE THE RIG!', code: 'KeyS', keyLabel: 'S' },
  { label: 'STATUE DOWN!', code: 'Enter', keyLabel: 'Enter' }
];

export async function runStatueTopple(container, character) {
  const prep = await runClickSequence(container, {
    items: STATUE_PREP_STEPS,
    correctOrder: STATUE_PREP_STEPS,
    timeMs: 15000,
    title: 'Firdos Square',
    hint: 'Rig the chain and clear the square before the pull'
  });

  const pull = await runQTESequence(container, character, {
    prompts: STATUE_PULL_COMMANDS,
    statKeys: ['leadership', 'dexterity'],
    title: 'Pull It Down',
    hint: 'Marines and the M88 — pull the statue down on the cadence'
  });

  const score = (prep.score + pull.score) / 2;
  return buildActivityResult(score, ['leadership', 'dexterity'], { prep, pull });
}
