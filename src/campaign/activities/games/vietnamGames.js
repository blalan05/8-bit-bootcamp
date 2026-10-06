import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, flashResult, windowMsFor,
  runQTESequence, runClickSequence, bindKeys
} from '../lib/minigameKit.js';

export async function runIncomingArtillery(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Incoming Barrage',
      hint: 'Press D to dive on INCOMING — hold on ALL CLEAR'
    });

    let hits = 0;
    let misses = 0;
    let rounds = 0;
    const totalRounds = 8;
    let currentType = 'incoming';
    let active = false;
    let timer = null;

    function nextRound() {
      if (rounds >= totalRounds) {
        unbind();
        ui.dispose();
        const score = hits / totalRounds;
        resolve(buildActivityResult(score, ['dexterity', 'endurance'], { hits, misses }));
        return;
      }
      rounds++;
      currentType = Math.random() < 0.55 ? 'incoming' : 'clear';
      active = true;
      const windowMs = windowMsFor(character, ['dexterity', 'endurance'], 500, 1000);
      ui.main.innerHTML = `
        <div class="mg-prompt ${currentType === 'incoming' ? 'mg-prompt--hostile' : 'mg-prompt--friendly'}">
          ${currentType === 'incoming' ? 'INCOMING!' : 'ALL CLEAR'}
        </div>
        <div class="mg-key-hint">${currentType === 'incoming' ? 'Press <kbd>D</kbd> to dive' : 'Hold position — do nothing'}</div>
      `;
      setProgress(ui, rounds, totalRounds);
      timer = setTimeout(() => {
        if (!active) return;
        if (currentType === 'incoming') misses++;
        flashResult(ui, currentType === 'incoming' ? 'miss' : 'hit');
        active = false;
        setTimeout(nextRound, 400);
      }, windowMs);
    }

    const onKey = (code) => {
      if (!active || code !== 'KeyD') return;
      active = false;
      clearTimeout(timer);
      if (currentType === 'incoming') {
        hits++;
        flashResult(ui, 'hit');
      } else {
        misses++;
        flashResult(ui, 'miss');
      }
      setTimeout(nextRound, 400);
    };

    const unbind = bindKeys(['KeyD'], onKey);
    nextRound();
  });
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
  { label: 'STRETCHER TEAM — MOVE!', code: 'KeyM', keyLabel: 'M' },
  { label: 'LOAD CASUALTY!', code: 'Space', keyLabel: 'Space' },
  { label: 'SECURE LITTER!', code: 'KeyS', keyLabel: 'S' },
  { label: 'LIFT OFF!', code: 'Enter', keyLabel: 'Enter' }
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
  { label: 'STACK UP!', code: 'KeyS', keyLabel: 'S' },
  { label: 'BREACH!', code: 'KeyB', keyLabel: 'B' },
  { label: 'FRAG OUT!', code: 'KeyF', keyLabel: 'F' },
  { label: 'CLEAR LEFT!', code: 'KeyA', keyLabel: 'A' },
  { label: 'CLEAR RIGHT!', code: 'KeyD', keyLabel: 'D' },
  { label: 'ROOM CLEAR!', code: 'Enter', keyLabel: 'Enter' }
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
