import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, setProgress, flashResult, setMeter,
  runQTESequence, runClickSequence, runWatchRounds, bindKeys, createLoop
} from '../lib/minigameKit.js';

const SHIP_OUT_COMMANDS = [
  { label: 'MAN YOUR STATIONS!' },
  { label: 'CHECK YOUR GEAR!' },
  { label: 'STAND BY TO LAND!' },
  { label: 'BOATS AWAY!' },
  { label: 'HIT THE BEACH!' }
];

export async function runShipOut(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: SHIP_OUT_COMMANDS,
    statKeys: ['leadership', 'intelligence'],
    title: 'Ship Out',
    hint: 'Execute every command before the Higgins boats launch'
  });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}

const BEACH_LANDING_COMMANDS = [
  { label: 'STAY LOW IN THE BOAT!' },
  { label: 'RAMP DOWN — GO!' },
  { label: 'MOVE LEFT!' },
  { label: 'DODGE INCOMING!' },
  { label: 'HIT THE SAND!' },
  { label: 'GET OFF THE BEACH!' }
];

export async function runBeachLanding(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: BEACH_LANDING_COMMANDS,
    statKeys: ['dexterity', 'endurance'],
    title: 'Beach Landing',
    hint: 'Ride the Higgins boat in and get off the beach on the cadence'
  });
  return buildActivityResult(r.score, ['dexterity', 'endurance'], r);
}

export async function runFoxholeDig(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Dig In',
      hint: 'Alternate J (left arm) and L (right arm) to dig — keep the pace in the green band'
    });
    let presses = 0;
    let hits = 0;
    let target = 30;
    let lastKey = '';
    const durationMs = 12000;

    ui.main.innerHTML = `
      <div class="mg-prompt">Digging foxhole — ${target} shovel strokes</div>
      <div class="mg-key-hint">Alternate <kbd>J</kbd> and <kbd>L</kbd></div>
    `;

    const loop = createLoop({
      durationMs,
      onTick: (_, elapsed) => {
        setMeter(ui, elapsed / durationMs);
        setProgress(ui, hits, target);
      },
      onFinish: finish
    });

    function finish() {
      unbind();
      loop.stop();
      ui.dispose();
      const score = Math.min(1, hits / target);
      resolve(buildActivityResult(score, ['strength', 'endurance'], { hits, target }));
    }

    const onKey = (code) => {
      if (code !== 'KeyJ' && code !== 'KeyL') return;
      if (code === lastKey) {
        flashResult(ui, 'miss');
        return;
      }
      lastKey = code;
      presses++;
      if (presses % 2 === 0) {
        hits++;
        flashResult(ui, 'hit');
        if (hits >= target) finish();
      }
    };

    const unbind = bindKeys(['KeyJ', 'KeyL'], onKey);
    setProgress(ui, 0, target);
  });
}

export async function runMortarBracket(container, character) {
  return new Promise(resolve => {
    const ui = mountGame(container, {
      title: 'Mortar Bracket',
      hint: 'Arrow keys adjust range/deflection — Space to fire each volley'
    });

    let range = 50;
    let deflection = 50;
    let targetRange = 30 + Math.floor(Math.random() * 40);
    let targetDef = 30 + Math.floor(Math.random() * 40);
    let volleys = 0;
    let bestDistance = 100;
    const maxVolleys = 5;

    function render() {
      const dist = Math.abs(range - targetRange) + Math.abs(deflection - targetDef);
      ui.main.innerHTML = `
        <div class="mg-prompt">Adjust fire — bracket the target</div>
        <div class="mg-mortar-grid">
          <div>Range: <strong>${range}</strong> (target ~${targetRange})</div>
          <div>Deflection: <strong>${deflection}</strong> (target ~${targetDef})</div>
          <div>Bracket: <strong>${dist}</strong> mils off</div>
        </div>
        <div class="mg-key-hint">↑↓ range · ←→ deflection · <kbd>Space</kbd> fire</div>
      `;
      setProgress(ui, volleys, maxVolleys);
    }

    function fire() {
      const dist = Math.abs(range - targetRange) + Math.abs(deflection - targetDef);
      bestDistance = Math.min(bestDistance, dist);
      volleys++;
      flashResult(ui, dist <= 10 ? 'hit' : 'miss');
      targetRange += Math.floor(Math.random() * 11) - 5;
      targetDef += Math.floor(Math.random() * 11) - 5;
      targetRange = Math.max(10, Math.min(90, targetRange));
      targetDef = Math.max(10, Math.min(90, targetDef));
      if (volleys >= maxVolleys) {
        unbind();
        ui.dispose();
        const score = Math.max(0, 1 - bestDistance / 60);
        resolve(buildActivityResult(score, ['intelligence', 'dexterity'], { bestDistance, volleys }));
      } else {
        render();
      }
    }

    const onKey = (code) => {
      if (code === 'ArrowUp') range = Math.min(90, range + 5);
      if (code === 'ArrowDown') range = Math.max(10, range - 5);
      if (code === 'ArrowRight') deflection = Math.min(90, deflection + 5);
      if (code === 'ArrowLeft') deflection = Math.max(10, deflection - 5);
      if (code === 'Space') fire();
      render();
    };

    const unbind = bindKeys(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'], onKey);
    render();
  });
}

export async function runNightWatch(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'Sniper Alley',
    hint: 'Press L (right hand) on hostile movement — do NOT fire on friendlies',
    statKeys: ['dexterity', 'intelligence'],
    windowRange: [600, 1200],
    stimuli: [
      { label: 'MOVEMENT — HOSTILE!', weight: 0.65, code: 'KeyL', action: 'ENGAGE' },
      { label: 'MOVEMENT — FRIENDLY!', weight: 0.35, code: null }
    ]
  });
  return buildActivityResult(r.score, ['dexterity', 'intelligence'], { hits: r.hits, misses: r.misses });
}

const SUPPLY_RUN_STEPS = [
  'Ammo crates',
  'Water cans',
  'K-rations',
  'Medical kit',
  'Bandoliers',
  'Mortar rounds'
];

export async function runSupplyRun(container, character) {
  const r = await runClickSequence(container, {
    items: SUPPLY_RUN_STEPS,
    correctOrder: SUPPLY_RUN_STEPS,
    timeMs: 18000,
    title: 'Supply Run',
    hint: 'Load supplies in the correct order before the patrol moves out'
  });
  return buildActivityResult(r.score, ['endurance', 'strength'], r);
}

const FIELD_MEDIC_STEPS = [
  'Assess casualty',
  'Stop bleeding',
  'Open airway',
  'Treat shock',
  'Evacuate to aid station'
];

export async function runFieldMedic(container, character) {
  const r = await runClickSequence(container, {
    items: FIELD_MEDIC_STEPS,
    correctOrder: FIELD_MEDIC_STEPS,
    timeMs: 16000,
    title: 'Field Medic',
    hint: 'Triage and treat casualties in the correct order'
  });
  return buildActivityResult(r.score, ['intelligence'], r);
}

const FLAG_POLE_STEPS = [
  'Locate pipe',
  'Sink base in ash',
  'First pipe section',
  'Second pipe section',
  'Attach the flag'
];

const FLAG_HOIST_COMMANDS = [
  { label: 'MARINES — HEAVE!' },
  { label: 'AGAIN — HEAVE HO!' },
  { label: 'SECURE THE BASE!' },
  { label: 'COLORS ARE UP!' }
];

export async function runFlagRaising(container, character) {
  const assembly = await runClickSequence(container, {
    items: FLAG_POLE_STEPS,
    correctOrder: FLAG_POLE_STEPS,
    timeMs: 20000,
    title: 'Raising the Colors',
    hint: 'Assemble the flagpole on Mt. Suribachi'
  });

  const hoist = await runQTESequence(container, character, {
    prompts: FLAG_HOIST_COMMANDS,
    statKeys: ['leadership', 'dexterity'],
    title: 'Raising the Flag',
    hint: 'Six Marines, one pole — hoist on the cadence'
  });

  const score = (assembly.score + hoist.score) / 2;
  return buildActivityResult(score, ['leadership', 'dexterity'], { assembly, hoist });
}
