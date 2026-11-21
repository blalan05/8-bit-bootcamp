import { buildActivityResult } from '../../activityRegistry.js';
import { runQTESequence, runClickSequence, runChoiceRounds } from '../lib/minigameKit.js';

const FOOTPRINT_COMMANDS = [
  { label: 'GET ON THE FOOTPRINTS!' },
  { label: 'EYES FRONT!' },
  { label: 'STAND AT ATTENTION!' },
  { label: 'HANDS AT YOUR SIDES!' },
  { label: 'CHIN UP!' },
  { label: 'DO NOT MOVE!' }
];

export async function runYellowFootprints(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: FOOTPRINT_COMMANDS,
    statKeys: ['leadership', 'dexterity'],
    title: 'Yellow Footprints',
    hint: 'Execute every command on the yellow footprints'
  });
  return buildActivityResult(r.score, ['leadership', 'dexterity'], r);
}

const PROCESSING_STEPS = [
  'Haircut',
  'Hygiene issue',
  'Medical screening',
  'Dental',
  'Initial gear issue'
];

export async function runProcessing(container, character) {
  const r = await runClickSequence(container, {
    items: PROCESSING_STEPS,
    correctOrder: PROCESSING_STEPS,
    timeMs: 20000,
    title: 'Receiving Pipeline',
    hint: 'Complete each station in the correct order'
  });
  return buildActivityResult(r.score, ['endurance', 'intelligence'], r);
}

const BLACK_FRIDAY_ROUNDS = [
  {
    prompt: 'The Senior Drill Instructor barks: "WHAT\'S YOUR NAME, RECRUIT?"',
    choices: [
      'Sir, this recruit\'s name is [name], sir!',
      'Uh... my name is...',
      'Sir, recruit [name] reporting as ordered, sir!'
    ],
    answer: 0
  },
  {
    prompt: '"WHERE ARE YOU FROM?"',
    choices: [
      'Sir, this recruit is from [hometown], sir!',
      'Sir, the United States of America, sir!',
      'Sir, MCRD San Diego, sir!'
    ],
    answer: 1
  },
  {
    prompt: '"WHY ARE YOU HERE?"',
    choices: [
      'Sir, to become a United States Marine, sir!',
      'Sir, because my recruiter said so, sir!',
      'Sir, to get in shape, sir!'
    ],
    answer: 0
  },
  {
    prompt: '"DO YOU UNDERSTAND?"',
    choices: [
      'Sir, yes sir!',
      'Sir, no sir!',
      'Sir, aye aye sir!'
    ],
    answer: 0
  }
];

export async function runBlackFriday(container, character) {
  const r = await runChoiceRounds(container, {
    rounds: BLACK_FRIDAY_ROUNDS,
    title: 'Black Friday',
    hint: 'Respond with proper bearing to your Senior Drill Instructor'
  });
  const score = Math.max(0.5, r.score);
  return buildActivityResult(score, ['leadership'], r);
}
