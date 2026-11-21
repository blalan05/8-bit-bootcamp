import { buildActivityResult } from '../../activityRegistry.js';
import {
  runWatchRounds, runQTESequence, runClickSequence, runChoiceRounds
} from '../lib/minigameKit.js';

export async function runIedSweep(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'IED Sweep',
    hint: 'Press I (arms up) to mark SUSPICIOUS OBJECT — hold on ROADSIDE CLUTTER',
    statKeys: ['dexterity', 'intelligence'],
    stimuli: [
      { label: 'SUSPICIOUS OBJECT', weight: 0.55, code: 'KeyI', action: 'MARK IT' },
      { label: 'ROADSIDE CLUTTER', weight: 0.45, code: null }
    ]
  });
  return buildActivityResult(r.score, ['dexterity', 'intelligence'], { hits: r.hits, misses: r.misses });
}

export async function runTurretGunner(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'Turret Gunner',
    hint: 'Press A / D to traverse on CONTACT — hold fire on CIVILIAN VEHICLE',
    statKeys: ['dexterity', 'intelligence'],
    stimuli: [
      { label: 'CONTACT LEFT!', weight: 0.35, code: 'KeyA', action: 'TRAVERSE LEFT' },
      { label: 'CONTACT RIGHT!', weight: 0.35, code: 'KeyD', action: 'TRAVERSE RIGHT' },
      { label: 'CIVILIAN VEHICLE', weight: 0.3, code: null }
    ]
  });
  return buildActivityResult(r.score, ['dexterity', 'intelligence'], { hits: r.hits, misses: r.misses });
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
  { label: 'TAKE UP SLACK!' },
  { label: 'HEAVE — PULL!' },
  { label: 'SECURE THE RIG!' },
  { label: 'STATUE DOWN!' }
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
