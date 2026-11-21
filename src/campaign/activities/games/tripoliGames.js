import { buildActivityResult } from '../../activityRegistry.js';
import {
  runWatchRounds, runQTESequence, runClickSequence, runChoiceRounds
} from '../lib/minigameKit.js';

export async function runCamelCaravan(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'The Caravan',
    hint: 'Press J (left hand) to grab the lead on CAMEL BOLTS — hold on STEADY COLUMN',
    statKeys: ['dexterity', 'endurance'],
    stimuli: [
      { label: 'CAMEL BOLTS!', weight: 0.55, code: 'KeyJ', action: 'GRAB THE LEAD' },
      { label: 'STEADY COLUMN', weight: 0.45, code: null }
    ]
  });
  return buildActivityResult(r.score, ['dexterity', 'endurance'], { hits: r.hits, misses: r.misses });
}

const MUTINY_CHOICES = ['Pay Them', 'Promise Gold', 'Stand Firm'];

const MUTINY_ROUNDS = [
  { prompt: 'Greek mercenaries block the well. "No gold, no march."', answer: 1 },
  { prompt: 'Arab riders demand double rations before dawn.', answer: 0 },
  { prompt: 'A lieutenant draws steel on Eaton at the campfire.', answer: 2 },
  { prompt: 'The column refuses to move without water skins refilled.', answer: 0 },
  { prompt: 'Hamet\'s men threaten to desert back to Cairo.', answer: 1 },
  { prompt: 'Mutineers seize the supply cache at gunpoint.', answer: 2 },
  { prompt: 'Mercenaries demand payment before crossing the next ridge.', answer: 1 },
  { prompt: 'A Greek captain says his men will not fight without coin.', answer: 0 }
];

export async function runMutinyParley(container, character) {
  const rounds = MUTINY_ROUNDS.map(r => ({
    prompt: r.prompt,
    choices: MUTINY_CHOICES,
    answer: r.answer
  }));
  const result = await runChoiceRounds(container, {
    rounds,
    title: 'Mutiny at the Wells',
    hint: 'Pay Them, Promise Gold, or Stand Firm — read the flashpoint'
  });
  return buildActivityResult(result.score, ['leadership', 'intelligence'], result);
}

const DERNE_CHARGE_COMMANDS = [
  { label: 'FIX BAYONETS!' },
  { label: 'OVER THE WALL!' },
  { label: 'CLEAR THE BATTERY!' },
  { label: 'TURN THE GUNS!' },
  { label: 'COLORS UP!' }
];

export async function runDerneCharge(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: DERNE_CHARGE_COMMANDS,
    statKeys: ['strength', 'dexterity'],
    title: 'Charge the Harbor Battery',
    hint: 'Fix bayonets, over the wall, clear the battery, turn the guns'
  });
  return buildActivityResult(r.score, ['strength', 'dexterity'], r);
}

const CANNON_PREP_STEPS = [
  'Swab the bore',
  'Load powder',
  'Ram the shot',
  'Prime the vent',
  'Run out the gun'
];

const CANNON_FIRE_COMMANDS = [
  { label: 'MATCH TO THE VENT!' },
  { label: 'FIRE!' },
  { label: 'RELOAD!' },
  { label: 'FIRE!' }
];

export async function runCannonBattery(container, character) {
  const prep = await runClickSequence(container, {
    items: CANNON_PREP_STEPS,
    correctOrder: CANNON_PREP_STEPS,
    timeMs: 16000,
    title: 'Man the Harbor Battery',
    hint: 'Load and prime the captured guns before the counterattack'
  });

  const fire = await runQTESequence(container, character, {
    prompts: CANNON_FIRE_COMMANDS,
    statKeys: ['intelligence', 'dexterity'],
    title: 'Fire on the Cadence',
    hint: 'Turn the captured guns on the harbor'
  });

  const score = (prep.score + fire.score) / 2;
  return buildActivityResult(score, ['intelligence', 'dexterity'], { prep, fire });
}

const DERNE_COLORS_STEPS = [
  'Rig the halyard',
  'Clear the bastion',
  'Attach the colors',
  'Signal the fleet'
];

const DERNE_HOIST_COMMANDS = [
  { label: 'MARINES — HEAVE!' },
  { label: 'AGAIN — HEAVE HO!' },
  { label: 'SECURE THE STAFF!' },
  { label: 'COLORS ARE UP!' }
];

export async function runDerneColors(container, character) {
  const rig = await runClickSequence(container, {
    items: DERNE_COLORS_STEPS,
    correctOrder: DERNE_COLORS_STEPS,
    timeMs: 18000,
    title: 'Raise the Colors',
    hint: 'Rig the halyard on the Flag Bastion — first US flag over an Old World fortress'
  });

  const hoist = await runQTESequence(container, character, {
    prompts: DERNE_HOIST_COMMANDS,
    statKeys: ['leadership', 'dexterity'],
    title: 'Hoist the Flag',
    hint: 'Eight Marines and one flagstaff — hoist on the cadence'
  });

  const score = (rig.score + hoist.score) / 2;
  return buildActivityResult(score, ['leadership', 'dexterity'], { rig, hoist });
}
