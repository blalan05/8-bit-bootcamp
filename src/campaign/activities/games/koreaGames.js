import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, flashResult, windowMsFor, setMeter,
  runQTESequence, runClickSequence, bindKeys, createLoop
} from '../lib/minigameKit.js';

const FROSTBITE_STEPS = [
  'Check extremities',
  'Rewarm gradually',
  'Dry socks and boots',
  'No rubbing — tissue damage',
  'Evacuate to aid station'
];

export async function runFrostbiteCheck(container, character) {
  const r = await runClickSequence(container, {
    items: FROSTBITE_STEPS,
    correctOrder: FROSTBITE_STEPS,
    timeMs: 18000,
    title: 'Frostbite Triage',
    hint: 'Treat frostbite casualties in the correct order'
  });
  return buildActivityResult(r.score, ['intelligence'], r);
}

const WEAPONS_COLD_COMMANDS = [
  { label: 'WORK THE BOLT!', code: 'KeyB', keyLabel: 'B' },
  { label: 'HAND-WARM THE ACTION!', code: 'KeyH', keyLabel: 'H' },
  { label: 'DRY-FIRE CHECK!', code: 'KeyD', keyLabel: 'D' },
  { label: 'CYCLE AND CLEAR!', code: 'KeyC', keyLabel: 'C' },
  { label: 'RIFLE IS HOT!', code: 'Enter', keyLabel: 'Enter' }
];

export async function runWeaponsCold(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: WEAPONS_COLD_COMMANDS,
    statKeys: ['dexterity', 'intelligence'],
    title: 'Frozen Weapons',
    hint: 'Keep the M1 firing in sub-zero temperatures'
  });
  return buildActivityResult(r.score, ['dexterity', 'intelligence'], r);
}

export async function runConvoyEscort(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Fighting Withdrawal',
      hint: 'W to advance · freeze on flare · Space to help a straggler'
    });
    let progress = 0;
    let stamina = 1;
    let marching = false;
    let flareActive = false;
    let stragglerNeeded = false;
    let ldrBonus = 0;

    ui.main.innerHTML = `<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-hike-fill"></div></div>`;
    const fill = ui.main.querySelector('#mg-hike-fill');

    const loop = createLoop({
      onTick: (_, __, dt) => {
        if (marching && !flareActive) {
          progress += 0.12 * (dt / 16);
          stamina -= 0.0012 * (dt / 16);
          fill.style.width = `${Math.min(100, progress)}%`;
          setMeter(ui, stamina);
        }
        if (stamina <= 0) { stamina = 0; marching = false; }
        if (progress >= 100) finish();
      }
    });

    let flareTimer = setInterval(() => {
      if (Math.random() > 0.55) {
        flareActive = true;
        marching = false;
        ui.hint.textContent = 'FLARE — FREEZE!';
        setTimeout(() => {
          flareActive = false;
          ui.hint.textContent = 'W to advance · Space to help straggler';
        }, 1500);
      }
    }, 4500);

    let stragglerTimer = setInterval(() => {
      if (Math.random() > 0.6) {
        stragglerNeeded = true;
        ui.hint.textContent = 'Marine falling out! Press Space to help (+LDR, -stamina)';
      }
    }, 6000);

    const unbind = bindKeys(['KeyW', 'Space'], (code) => {
      if (code === 'KeyW' && stamina > 0 && !flareActive) marching = true;
      if (code === 'Space' && stragglerNeeded) {
        stragglerNeeded = false;
        stamina -= 0.12;
        ldrBonus += 1;
        ui.hint.textContent = 'Good leadership. Keep the column moving.';
      }
    });
    const onKeyUp = (e) => { if (e.code === 'KeyW') marching = false; };
    window.addEventListener('keyup', onKeyUp);

    function finish() {
      clearInterval(flareTimer);
      clearInterval(stragglerTimer);
      loop.stop();
      unbind();
      window.removeEventListener('keyup', onKeyUp);
      const score = Math.min(1, 0.75 + ldrBonus * 0.08);
      ui.dispose();
      resolve(buildActivityResult(score, ['endurance', 'leadership'], { progress, ldrBonus }));
    }

    setMeter(ui, 1);
    setProgress(ui, 0, 1);
  });
}

const BRIDGE_REPAIR_STEPS = [
  'Position truck',
  'Offload treadway',
  'Align first section',
  'Bolt sections',
  'Guide vehicles across'
];

export async function runBridgeRepair(container, character) {
  const r = await runClickSequence(container, {
    items: BRIDGE_REPAIR_STEPS,
    correctOrder: BRIDGE_REPAIR_STEPS,
    timeMs: 20000,
    title: 'Bridge Repair',
    hint: 'Assemble treadway sections before the column is cut off'
  });
  return buildActivityResult(r.score, ['intelligence', 'strength'], r);
}
