import { buildActivityResult } from '../../activityRegistry.js';
import { runWatchRounds, runChoiceRounds } from '../lib/minigameKit.js';

export async function runGasAlarm(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'Gas Attack',
    hint: 'Press I (arms up) to mask on GAS! GAS! GAS! — hold on FALSE ALARM',
    statKeys: ['dexterity', 'intelligence'],
    stimuli: [
      { label: 'GAS! GAS! GAS!', weight: 0.55, code: 'KeyI', action: 'MASK UP' },
      { label: 'FALSE ALARM', weight: 0.45, code: null }
    ]
  });
  return buildActivityResult(r.score, ['dexterity', 'intelligence'], { hits: r.hits, misses: r.misses });
}

export async function runJungleAmbush(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'Jungle Ambush',
    hint: 'Press L (right hand) on MUZZLE FLASH — hold on VILLAGERS ON THE TRAIL',
    statKeys: ['dexterity', 'intelligence'],
    stimuli: [
      { label: 'MUZZLE FLASH — RETURN FIRE!', weight: 0.55, code: 'KeyL', action: 'RETURN FIRE' },
      { label: 'VILLAGERS ON THE TRAIL', weight: 0.45, code: null }
    ]
  });
  return buildActivityResult(r.score, ['dexterity', 'intelligence'], { hits: r.hits, misses: r.misses });
}

const CROWD_CHOICES = ['Hold the Line', 'Open the Gate', 'Call the Terp'];

const CROWD_ROUNDS = [
  { prompt: 'Hungry crowd presses the wire at the feeding station. Children in front.', answer: 1 },
  { prompt: 'Armed militia approaches the checkpoint. Weapons visible.', answer: 0 },
  { prompt: 'Elder demands to speak with the commander through the terp.', answer: 2 },
  { prompt: 'Looters break into the warehouse while Marines watch.', answer: 0 },
  { prompt: 'Peaceful demonstration blocks the convoy route.', answer: 2 },
  { prompt: 'Rioters throw rocks at the perimeter. No weapons yet.', answer: 0 },
  { prompt: 'Families with food vouchers queue peacefully at the gate.', answer: 1 },
  { prompt: 'Unknown vehicle speeds toward the wire. No flag.', answer: 0 }
];

export async function runCrowdControl(container, character) {
  const rounds = CROWD_ROUNDS.map(r => ({
    prompt: r.prompt,
    choices: CROWD_CHOICES,
    answer: r.answer
  }));
  const result = await runChoiceRounds(container, {
    rounds,
    title: 'Crowd Control',
    hint: 'Hold the Line, Open the Gate, or Call the Terp — read the situation'
  });
  return buildActivityResult(result.score, ['leadership', 'intelligence'], result);
}
