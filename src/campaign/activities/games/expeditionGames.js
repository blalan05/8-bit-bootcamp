import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, flashResult, windowMsFor,
  runChoiceRounds, bindKeys
} from '../lib/minigameKit.js';

export async function runGasAlarm(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Gas Attack',
      hint: 'Press G to mask on GAS! GAS! GAS! — hold on FALSE ALARM'
    });

    let hits = 0;
    let misses = 0;
    let rounds = 0;
    const totalRounds = 8;
    let currentType = 'gas';
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
      currentType = Math.random() < 0.55 ? 'gas' : 'false';
      active = true;
      const windowMs = windowMsFor(character, ['dexterity', 'intelligence'], 500, 1000);
      ui.main.innerHTML = `
        <div class="mg-prompt ${currentType === 'gas' ? 'mg-prompt--hostile' : 'mg-prompt--friendly'}">
          ${currentType === 'gas' ? 'GAS! GAS! GAS!' : 'FALSE ALARM'}
        </div>
        <div class="mg-key-hint">${currentType === 'gas' ? 'Press <kbd>G</kbd> to mask' : 'Hold position — do nothing'}</div>
      `;
      setProgress(ui, rounds, totalRounds);
      timer = setTimeout(() => {
        if (!active) return;
        if (currentType === 'gas') misses++;
        flashResult(ui, currentType === 'gas' ? 'miss' : 'hit');
        active = false;
        setTimeout(nextRound, 400);
      }, windowMs);
    }

    const onKey = (code) => {
      if (!active || code !== 'KeyG') return;
      active = false;
      clearTimeout(timer);
      if (currentType === 'gas') {
        hits++;
        flashResult(ui, 'hit');
      } else {
        misses++;
        flashResult(ui, 'miss');
      }
      setTimeout(nextRound, 400);
    };

    const unbind = bindKeys(['KeyG'], onKey);
    nextRound();
  });
}

export async function runJungleAmbush(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Jungle Ambush',
      hint: 'Press F on MUZZLE FLASH — hold on VILLAGERS ON THE TRAIL'
    });

    let hits = 0;
    let misses = 0;
    let rounds = 0;
    const totalRounds = 8;
    let currentType = 'flash';
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
      currentType = Math.random() < 0.55 ? 'flash' : 'villagers';
      active = true;
      const windowMs = windowMsFor(character, ['dexterity', 'intelligence'], 500, 1000);
      ui.main.innerHTML = `
        <div class="mg-prompt ${currentType === 'flash' ? 'mg-prompt--hostile' : 'mg-prompt--friendly'}">
          ${currentType === 'flash' ? 'MUZZLE FLASH — RETURN FIRE!' : 'VILLAGERS ON THE TRAIL'}
        </div>
        <div class="mg-key-hint">${currentType === 'flash' ? 'Press <kbd>F</kbd> to return fire' : 'Hold fire — do nothing'}</div>
      `;
      setProgress(ui, rounds, totalRounds);
      timer = setTimeout(() => {
        if (!active) return;
        if (currentType === 'flash') misses++;
        flashResult(ui, currentType === 'flash' ? 'miss' : 'hit');
        active = false;
        setTimeout(nextRound, 400);
      }, windowMs);
    }

    const onKey = (code) => {
      if (!active || code !== 'KeyF') return;
      active = false;
      clearTimeout(timer);
      if (currentType === 'flash') {
        hits++;
        flashResult(ui, 'hit');
      } else {
        misses++;
        flashResult(ui, 'miss');
      }
      setTimeout(nextRound, 400);
    };

    const unbind = bindKeys(['KeyF'], onKey);
    nextRound();
  });
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
