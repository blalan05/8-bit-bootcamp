import { buildActivityResult } from '../../activityRegistry.js';
import { runWatchRounds, runQTESequence, runClickSequence } from '../lib/minigameKit.js';

export async function runIncomingArtillery(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'Incoming Barrage',
    hint: 'Press S (get down) on INCOMING — hold on ALL CLEAR',
    statKeys: ['dexterity', 'endurance'],
    stimuli: [
      { label: 'INCOMING!', weight: 0.55, code: 'KeyS', action: 'GET DOWN' },
      { label: 'ALL CLEAR', weight: 0.45, code: null }
    ]
  });
  return buildActivityResult(r.score, ['dexterity', 'endurance'], { hits: r.hits, misses: r.misses });
}

const BUNKER_REPAIR_STEPS = [
  'Fill sandbags',
  'Stack the wall',
  'Brace the timbers',
  'Restring the wire',
  'Camouflage'
];

export async function runBunkerRepair(container, character) {
  const r = await runClickSequence(container, {
    items: BUNKER_REPAIR_STEPS,
    correctOrder: BUNKER_REPAIR_STEPS,
    timeMs: 18000,
    title: 'Rebuild the Bunker',
    hint: 'Repair the bunker before the next barrage'
  });
  return buildActivityResult(r.score, ['strength', 'intelligence'], r);
}

const MEDEVAC_PREP_STEPS = [
  'Pop smoke',
  'Clear the LZ',
  'Mark approach'
];

const MEDEVAC_LOAD_COMMANDS = [
  { label: 'STRETCHER TEAM — MOVE!' },
  { label: 'LOAD CASUALTY!' },
  { label: 'SECURE LITTER!' },
  { label: 'LIFT OFF!' }
];

export async function runMedevacSmoke(container, character) {
  const prep = await runClickSequence(container, {
    items: MEDEVAC_PREP_STEPS,
    correctOrder: MEDEVAC_PREP_STEPS,
    timeMs: 15000,
    title: 'Guide the Medevac',
    hint: 'Prepare the landing zone before loading casualties'
  });

  const load = await runQTESequence(container, character, {
    prompts: MEDEVAC_LOAD_COMMANDS,
    statKeys: ['leadership', 'intelligence'],
    title: 'Load Casualties',
    hint: 'Load casualties on the medevac cadence'
  });

  const score = (prep.score + load.score) / 2;
  return buildActivityResult(score, ['leadership', 'intelligence'], { prep, load });
}

const WALL_BREACH_COMMANDS = [
  { label: 'STACK UP!' },
  { label: 'BREACH!' },
  { label: 'FRAG OUT!' },
  { label: 'CLEAR LEFT!' },
  { label: 'CLEAR RIGHT!' },
  { label: 'ROOM CLEAR!' }
];

export async function runWallBreach(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: WALL_BREACH_COMMANDS,
    statKeys: ['dexterity', 'strength'],
    title: 'Breach and Clear',
    hint: 'Stack up, breach, frag out, and clear the room'
  });
  return buildActivityResult(r.score, ['dexterity', 'strength'], r);
}
