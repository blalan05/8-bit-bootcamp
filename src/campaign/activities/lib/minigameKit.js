import { MIN_STAT, MAX_STAT } from '../../../character/stats.js';
import { openTouchPad, declarePadKeys, setPadHighlight, touchCopy } from './touchPad.js';

export { declarePadKeys, setPadHighlight, touchCopy };

/** Preparatory command hold before the press window opens (not scored). */
export const PREP_MS = 1700;
/** Pause after HIT / MISS so the result can be read. */
export const RESULT_PAUSE_MS = 700;
/** No execution window may be shorter than this, whatever range a caller passes. */
export const MIN_WINDOW_MS = 1800;
/** "STAND BY" beat before click-sequence timers start. */
export const CLICK_STANDBY_MS = 1500;
/** Shortest timer any click-sequence game may run. */
export const MIN_CLICK_SEQUENCE_MS = 22000;

/** Normalize stat to 0..1 across MIN..MAX. */
export function statT(value) {
  return (Math.max(MIN_STAT, Math.min(MAX_STAT, value)) - MIN_STAT) / (MAX_STAT - MIN_STAT);
}

/** Average statT across multiple stats. */
export function avgStatT(character, keys) {
  const stats = character?.stats ?? {};
  const vals = keys.map(k => statT(stats[k] ?? 10));
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

/**
 * Execution window ms from stats (default 2000..2800).
 * Ranges starting below MIN_WINDOW_MS are shifted up so the stat spread is kept
 * but the window never drops under the floor.
 */
export function windowMsFor(character, keys, min = 2000, max = 2800) {
  const lo = Math.max(MIN_WINDOW_MS, min);
  const hi = Math.max(lo, max + (lo - min));
  const t = avgStatT(character, keys);
  return Math.round(lo + t * (hi - lo));
}

/** Speed multiplier 0.7..1.3 from stats. */
export function speedFor(character, keys) {
  const t = avgStatT(character, keys);
  return 0.7 + t * 0.6;
}

/**
 * rAF game loop with elapsed time.
 * @param {{ onTick: (ts: number, elapsed: number, dt: number) => void, durationMs?: number, onFinish?: () => void }} opts
 */
export function createLoop({ onTick, durationMs, onFinish }) {
  let running = true;
  let start = 0;
  let last = 0;

  const stop = () => {
    if (!running) return;
    running = false;
    onFinish?.();
  };

  const tick = (ts) => {
    if (!running) return;
    if (!start) {
      start = ts;
      last = ts;
    }
    const elapsed = ts - start;
    const dt = ts - last;
    last = ts;
    if (durationMs != null && elapsed >= durationMs) {
      stop();
      return;
    }
    onTick(ts, elapsed, dt);
    if (running) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
  return { stop, isRunning: () => running };
}

/**
 * Bind keydown handler with cleanup. The codes are also shown on the touch pad.
 * @param {string[]} codes
 * @param {(code: string, e: KeyboardEvent) => void} handler
 */
export function bindKeys(codes, handler) {
  const onKey = (e) => {
    if (codes.includes(e.code)) {
      e.preventDefault();
      handler(e.code, e);
    }
  };
  window.addEventListener('keydown', onKey);
  const undeclare = declarePadKeys(codes);
  return () => {
    window.removeEventListener('keydown', onKey);
    undeclare();
  };
}

/** @type {string | null} */
let titleOverride = null;

/**
 * Show this title on every mini-game shell until cleared. Field campaigns reuse depot
 * mini-games, so they show the mission name instead of e.g. "Pugil Duel".
 * @param {string | null} title
 */
export function setGameTitleOverride(title) {
  titleOverride = title || null;
}

/** @type {{ intel: string | null }} */
let assist = { intel: null };

/**
 * Turn on rank intel (the Lance Corporal Underground) for kit games until cleared:
 * a struck-out wrong answer, the first correct step marked, and longer press windows.
 * @param {string | null} intelName label shown in game, e.g. "Scuttlebutt"; null turns it off
 */
export function setGameAssist(intelName) {
  assist = { intel: intelName || null };
}

/** Press windows run this much longer with intel. */
const INTEL_WINDOW_BONUS = 1.2;

function appendIntel(ui, text) {
  if (!assist.intel) return;
  ui.hint.insertAdjacentHTML('beforeend', `<div class="mg-hint-intel">${assist.intel}: ${text}</div>`);
}

/** Build standard mini-game DOM shell. Opens the touch pad (touch devices only) until dispose. */
export function mountGame(container, { title = '', hint = '' } = {}) {
  const closePad = openTouchPad(container);
  container.innerHTML = `
    <div class="mg-scene">
      <div class="mg-title" id="mg-title">${titleOverride ?? title}</div>
      <div class="mg-main" id="mg-main"></div>
      <div class="mg-hud">
        <span id="mg-progress"></span>
        <span class="mg-flash" id="mg-flash"></span>
      </div>
      <div class="mg-meter-track"><div class="mg-meter-bar" id="mg-meter"></div></div>
      <div class="mg-hint" id="mg-hint">${touchCopy(hint)}</div>
    </div>
  `;
  return {
    main: container.querySelector('#mg-main'),
    progress: container.querySelector('#mg-progress'),
    flash: container.querySelector('#mg-flash'),
    meter: container.querySelector('#mg-meter'),
    hint: container.querySelector('#mg-hint'),
    title: container.querySelector('#mg-title'),
    dispose: () => {
      closePad();
      container.innerHTML = '';
    }
  };
}

export function setProgress(ui, current, total) {
  if (ui.progress) ui.progress.textContent = `${current} / ${total}`;
}

export function setMeter(ui, fraction) {
  if (ui.meter) ui.meter.style.width = `${Math.max(0, Math.min(1, fraction)) * 100}%`;
}

const FLASH_TEXT = { hit: 'HIT', miss: 'MISS', wait: 'STAND FAST' };

/** @param {'hit'|'miss'|'wait'} type */
export function flashResult(ui, type, text) {
  if (!ui.flash) return;
  clearTimeout(ui._flashTimer);
  ui.flash.textContent = text ?? FLASH_TEXT[type] ?? '';
  ui.flash.className = 'mg-flash';
  void ui.flash.offsetWidth;
  ui.flash.className = `mg-flash mg-flash--${type} mg-flash--show`;
  ui._flashTimer = setTimeout(() => { ui.flash.className = 'mg-flash'; }, RESULT_PAUSE_MS);
}

/* ---------- Limb keys ---------- */

const KEY_INFO = {
  KeyW: { cap: 'W', role: 'FORWARD' },
  KeyA: { cap: 'A', role: 'LEFT' },
  KeyS: { cap: 'S', role: 'HALT / DOWN' },
  KeyD: { cap: 'D', role: 'RIGHT' },
  KeyI: { cap: 'I', role: 'ARMS UP' },
  KeyJ: { cap: 'J', role: 'LEFT ARM' },
  KeyK: { cap: 'K', role: 'ARMS DOWN' },
  KeyL: { cap: 'L', role: 'RIGHT ARM' },
  Space: { cap: 'SPACE', role: 'HOLD' },
  Enter: { cap: 'ENTER', role: 'FINISH' }
};

const LIMB_CODES = Object.keys(KEY_INFO);

/** Ordered: first match wins. Arm-specific left/right must precede generic LEFT/RIGHT. */
const LIMB_RULES = [
  [/\bFINISH\b|CEREMONY|\bEGA\b|COLORS (ARE )?UP|STATUE DOWN|ROOM CLEAR|LIFT OFF|RIFLE IS HOT/, 'Enter'],
  [/HOLD (YOUR )?BREATH|\bSTEADY\b/, 'Space'],
  [/CLEAR\W+MASK|MASK OFF/, 'KeyJ'],
  [/GRIP LEFT|LEFT (ARM|HAND|SHOVEL)|\bJAB\b|FIX BAYONETS?|HAND-WARM|DROP FLAK/, 'KeyJ'],
  [/GRIP RIGHT|RIGHT (ARM|HAND|SHOVEL)|\bCROSS\b|\bHOOK\b|SLASH|SWING|\bFIRE\b|ENGAGE|FRAG|\bBOLT\b|\bMATCH\b|\bGRAB\b|STROKE|FREESTYLE|CLEAR THE BATTERY|DROP BELT/, 'KeyL'],
  [/EYES RIGHT|RIGHT FACE|RIGHT STRIDE|NAV RIGHT|MOVE RIGHT|CLEAR RIGHT|CONTACT RIGHT|DODGE|FEINT/, 'KeyD'],
  [/LEFT FACE|LEFT STRIDE|NAV LEFT|MOVE LEFT|CLEAR LEFT|CONTACT LEFT/, 'KeyA'],
  [/\bHALT\b|FREEZE|STAY LOW|DO NOT MOVE|ATTENTION|HIT THE SAND|CRAWL|INCOMING|ABOUT FACE|GET DOWN|\bDIVE\b|STAND BY|STACK UP|BRACE/, 'KeyS'],
  [/PULL UP|\bMOUNT\b|HEAVE|\bLIFT\b|CLIMB|PRESENT ARMS|CHIN UP|UPPERCUT|\bHIGH\b|\bMASK\b|\bMARK\b|BREATHE|HEAD UP|EYES FRONT|DROP HELMET|LOAD|RAISE|THRUST|TURN THE GUNS|REACH/, 'KeyI'],
  [/ORDER ARMS|HANDS AT|\bBLOCK\b|\bLOW\b|\bDROP\b|BRAKE|SLACK|SECURE|CYCLE|CHECK/, 'KeyK'],
  [/FORWARD|MARCH|\bMOVE\b|OVER THE WALL|BEACH|VAULT|FOOTPRINTS|\bGO\b|SURFACE|BREACH|STATIONS|AWAY|PUSH OFF/, 'KeyW'],
  [/\bLEFT\b/, 'KeyA'],
  [/\bRIGHT\b/, 'KeyD']
];

/** Display cap for a key code (W, J, SPACE, ENTER, arrows). */
export function keyCap(code) {
  if (KEY_INFO[code]) return KEY_INFO[code].cap;
  const arrows = { ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→' };
  return arrows[code] ?? String(code).replace(/^Key/, '');
}

/** Limb key for a command label, or null if no rule matches. */
export function limbKeyFor(label) {
  const text = String(label).toUpperCase();
  for (const [re, code] of LIMB_RULES) {
    if (re.test(text)) return code;
  }
  return null;
}

/**
 * Map prompt labels onto WASD (legs) / IJKL (arms) / Space (hold) / Enter (finish).
 * Prompts with `lock: true` keep their own code.
 */
export function assignLimbKeys(prompts) {
  return prompts.map(p => {
    if (p.lock) return { ...p, keyLabel: keyCap(p.code) };
    const code = limbKeyFor(p.label) ?? (LIMB_CODES.includes(p.code) ? p.code : 'KeyL');
    return { ...p, code, keyLabel: keyCap(code) };
  });
}

/**
 * Split an order into preparatory and execution text.
 * LEFT FACE → LEFT / FACE · HALT → SQUAD / HALT · JAB → PREPARE / JAB ·
 * "MARINES — HEAVE!" → MARINES / HEAVE!
 */
export function splitCommand(label) {
  const raw = String(label).trim();
  const bang = /!$/.test(raw) ? '!' : '';
  const text = raw.replace(/!+$/, '').trim();
  if (text.toUpperCase() === 'HALT') return { prep: 'SQUAD', exec: `HALT${bang}` };
  const dashed = text.split(/\s+[—–]\s+/);
  if (dashed.length >= 2) return { prep: dashed[0], exec: `${dashed.slice(1).join(' — ')}${bang}` };
  const words = text.split(/\s+/);
  if (words.length === 1) return { prep: 'PREPARE', exec: `${text}${bang}` };
  if (words.length === 2) return { prep: words[0], exec: `${words[1]}${bang}` };
  return { prep: text, exec: 'NOW!' };
}

/** Big clickable key button. state: prep | go | hold | hit | miss */
export function keyButtonHtml(code, state = 'prep', role) {
  const info = KEY_INFO[code];
  const label = role ?? info?.role ?? '';
  return `<button type="button" tabindex="-1" class="mg-key mg-key--${state}" data-mg-key="${code}">
    <span class="mg-key-cap">${keyCap(code)}</span>${label ? `<span class="mg-key-role">${label}</span>` : ''}
  </button>`;
}

/** Set every big key's state and mirror it onto the touch pad. */
function setKeyStates(root, stateFor) {
  const pad = {};
  root.querySelectorAll('[data-mg-key]').forEach(btn => {
    const state = stateFor(btn.dataset.mgKey);
    btn.className = `mg-key mg-key--${state}`;
    pad[btn.dataset.mgKey] = state;
  });
  setPadHighlight(pad);
}

/** Route clicks on [data-mg-key] buttons to the same handler as key presses. */
function bindKeyButtons(root, onPress) {
  const onClick = (e) => {
    const btn = e.target.closest('[data-mg-key]');
    if (!btn || e.detail === 0) return;
    btn.blur();
    onPress(btn.dataset.mgKey);
  };
  root.addEventListener('click', onClick);
  return () => root.removeEventListener('click', onClick);
}

const RULE_TEXT = 'Preparatory command = stand fast · command of execution = press the lit key';

function appendRule(ui, text = RULE_TEXT) {
  ui.hint.insertAdjacentHTML('beforeend', `<div class="mg-hint-rule">${touchCopy(text)}</div>`);
}

/**
 * Optional visual scene for runQTESequence, mounted above a compact prompt + key.
 * Pass an object or a factory `(character) => scene`. Every hook is optional; a hook that
 * throws is logged and ignored so a broken scene never breaks scoring.
 * @typedef {object} MinigameScene
 * @property {(el: HTMLElement, character: object, ctx: SceneContext) => void} [mount]
 * @property {(step: object) => void} [onPrep] preparatory command shown (step.index, step.code, step.label)
 * @property {(step: object) => void} [onExecute] command of execution: press window open
 * @property {(step: object) => void} [onHit]
 * @property {(step: object) => void} [onMiss] wrong key or window timed out
 * @property {(dt: number, elapsed: number) => void} [onTick] every animation frame (ms)
 * @property {() => void} [dispose] remove listeners, timers and DOM the scene added
 * @property {number} [holdMs] extra ms after the last result before teardown (outro animation)
 *
 * @typedef {object} SceneContext
 * @property {object} ui mountGame handles (meter, flash, progress…)
 * @property {object[]} steps assigned steps ({ label, code, keyLabel, index })
 * @property {number} prepMs
 * @property {number} windowMs
 * @property {number} resultMs
 * @property {(fraction: number) => void} setMeter
 */

function callScene(scene, hook, ...args) {
  if (!scene || typeof scene[hook] !== 'function') return;
  try {
    scene[hook](...args);
  } catch (err) {
    console.error(`[minigame scene] ${hook} failed`, err);
  }
}

/**
 * QTE sequence, drill style: preparatory command (not scored, presses = STAND FAST),
 * then the command of execution lights the key and opens the press window.
 * @param {{ prompts: {label: string, code?: string, prep?: string, exec?: string, lock?: boolean}[],
 *   statKeys: string[], title?: string, hint?: string, windowRange?: number[], prepMs?: number,
 *   onStart?: (ui: object) => void, onResult?: (hit: boolean, step: object, ui: object) => void,
 *   scene?: MinigameScene | ((character: object) => MinigameScene) }} opts
 */
export function runQTESequence(container, character, {
  prompts,
  statKeys,
  title,
  hint = '',
  windowRange = [],
  prepMs = PREP_MS,
  onStart,
  onResult,
  scene
}) {
  const steps = assignLimbKeys(prompts).map((s, index) => ({ ...s, index }));
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    appendRule(ui);
    appendIntel(ui, 'word is they call this one slow. Extra time on every command.');
    const windowMs = Math.round(windowMsFor(character, statKeys, ...windowRange) * (assist.intel ? INTEL_WINDOW_BONUS : 1));
    const codes = [...new Set(steps.map(s => s.code))];
    let index = 0;
    let hits = 0;
    let phase = 'idle';
    let timer = null;

    const sc = typeof scene === 'function' ? scene(character) : scene ?? null;
    let cmdHost = ui.main;
    let loop = null;
    if (sc) {
      ui.main.classList.add('mg-main--scene');
      ui.main.innerHTML = '<div class="mg-stage"></div><div class="mg-stage-cmd"></div>';
      cmdHost = ui.main.querySelector('.mg-stage-cmd');
      callScene(sc, 'mount', ui.main.querySelector('.mg-stage'), character, {
        ui, steps, prepMs, windowMs, resultMs: RESULT_PAUSE_MS, setMeter: f => setMeter(ui, f)
      });
      if (typeof sc.onTick === 'function') {
        loop = createLoop({ onTick: (_, elapsed, dt) => callScene(sc, 'onTick', dt, elapsed) });
      }
    }

    function press(code) {
      if (phase === 'prep') { flashResult(ui, 'wait'); return; }
      if (phase !== 'exec' || !codes.includes(code)) return;
      settle(code === steps[index].code);
    }

    function settle(hit) {
      phase = 'result';
      clearTimeout(timer);
      if (hit) hits++;
      flashResult(ui, hit ? 'hit' : 'miss');
      setKeyStates(ui.main, () => (hit ? 'hit' : 'miss'));
      callScene(sc, hit ? 'onHit' : 'onMiss', steps[index]);
      onResult?.(hit, steps[index], ui);
      index++;
      timer = setTimeout(next, RESULT_PAUSE_MS);
    }

    function commandHtml(step, prep) {
      const key = keyButtonHtml(step.code, 'prep');
      const note = '<div class="mg-phase-note">STAND FAST — wait for the command</div>';
      if (!sc) {
        return `
        <div class="mg-command mg-command--prep">
          <div class="mg-prep-word">${prep}</div>
          <div class="mg-exec-word">. . .</div>
          ${key}
          ${note}
        </div>`;
      }
      return `
        <div class="mg-command mg-command--prep mg-command--compact">
          <div class="mg-cmd-text">
            <div class="mg-prep-word">${prep}</div>
            <div class="mg-exec-word">. . .</div>
            ${note}
          </div>
          ${key}
        </div>`;
    }

    function next() {
      if (index >= steps.length) { finish(); return; }
      const step = steps[index];
      const split = splitCommand(step.label);
      const prep = step.prep ?? split.prep;
      const exec = step.exec ?? split.exec;
      phase = 'prep';
      setProgress(ui, index + 1, steps.length);
      cmdHost.innerHTML = commandHtml(step, prep);
      setPadHighlight(step.code, 'prep');
      callScene(sc, 'onPrep', step);
      timer = setTimeout(() => {
        phase = 'exec';
        const box = ui.main.querySelector('.mg-command');
        box.className = `mg-command mg-command--exec${sc ? ' mg-command--compact' : ''}`;
        box.querySelector('.mg-exec-word').textContent = exec;
        box.querySelector('.mg-phase-note').textContent = touchCopy(`PRESS ${step.keyLabel}`);
        setKeyStates(ui.main, () => 'go');
        callScene(sc, 'onExecute', step);
        timer = setTimeout(() => settle(false), windowMs);
      }, prepMs);
    }

    const onKey = (code, e) => { if (!e.repeat) press(code); };
    const unbind = bindKeys(codes, onKey);
    const unbindButtons = bindKeyButtons(ui.main, press);

    function teardown() {
      clearTimeout(timer);
      loop?.stop();
      callScene(sc, 'dispose');
      ui.dispose();
      resolve({ hits, total: steps.length, score: hits / steps.length });
    }

    function finish() {
      clearTimeout(timer);
      unbind();
      unbindButtons();
      const hold = sc?.holdMs ?? 0;
      if (hold > 0) timer = setTimeout(teardown, hold);
      else teardown();
    }

    onStart?.(ui);
    next();
  });
}

/**
 * Hold-fire stimulus rounds. Prep shows STAND BY with the action key(s) dimmed;
 * execution reveals the stimulus. Action stimulus: lit key must be pressed (timeout = miss).
 * Hold stimulus: any action key is a miss (timeout = hit). Wrong keys ignored.
 * @param {{ title: string, hint?: string, statKeys: string[], totalRounds?: number, windowRange?: number[],
 *   stimuli: { label: string, weight: number, code: string|null, action?: string }[] }} opts
 */
export function runWatchRounds(container, character, {
  title,
  hint = '',
  statKeys,
  totalRounds = 8,
  windowRange = [],
  stimuli
}) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    appendRule(ui, 'STAND BY = do not press yet · act only when the key lights · hold when it says HOLD');
    appendIntel(ui, 'word is they call this one slow. Extra time to react.');
    const windowMs = Math.round(windowMsFor(character, statKeys, ...windowRange) * (assist.intel ? INTEL_WINDOW_BONUS : 1));
    const codes = [...new Set(stimuli.map(s => s.code).filter(Boolean))];
    const totalWeight = stimuli.reduce((a, s) => a + s.weight, 0);
    let rounds = 0;
    let hits = 0;
    let misses = 0;
    let phase = 'idle';
    let current = null;
    let timer = null;

    const pick = () => {
      let roll = Math.random() * totalWeight;
      for (const s of stimuli) {
        roll -= s.weight;
        if (roll <= 0) return s;
      }
      return stimuli[stimuli.length - 1];
    };

    function settle(hit) {
      phase = 'result';
      clearTimeout(timer);
      if (hit) hits++; else misses++;
      flashResult(ui, hit ? 'hit' : 'miss');
      setKeyStates(ui.main, () => (hit ? 'hit' : 'miss'));
      timer = setTimeout(next, RESULT_PAUSE_MS);
    }

    function press(code) {
      if (!codes.includes(code)) return;
      if (phase === 'prep') { flashResult(ui, 'wait'); return; }
      if (phase !== 'exec') return;
      if (!current.code) { settle(false); return; }
      if (code === current.code) settle(true);
    }

    function next() {
      if (rounds >= totalRounds) { finish(); return; }
      rounds++;
      phase = 'prep';
      current = pick();
      setProgress(ui, rounds, totalRounds);
      ui.main.innerHTML = `
        <div class="mg-command mg-command--prep">
          <div class="mg-prep-word">STAND BY</div>
          <div class="mg-exec-word">. . .</div>
          <div class="mg-key-row">${codes.map(c => keyButtonHtml(c, 'prep')).join('')}</div>
          <div class="mg-phase-note">Watch — do not press yet</div>
        </div>`;
      setPadHighlight(Object.fromEntries(codes.map(c => [c, 'prep'])));
      timer = setTimeout(() => {
        phase = 'exec';
        const box = ui.main.querySelector('.mg-command');
        const hold = !current.code;
        box.className = `mg-command mg-command--exec ${hold ? 'mg-command--hold' : 'mg-command--hostile'}`;
        box.querySelector('.mg-exec-word').textContent = current.label;
        box.querySelector('.mg-phase-note').textContent = hold
          ? 'HOLD — DO NOTHING'
          : touchCopy(`PRESS ${keyCap(current.code)}${current.action ? ` — ${current.action}` : ''}`);
        setKeyStates(ui.main, c => (hold ? 'hold' : c === current.code ? 'go' : 'prep'));
        timer = setTimeout(() => settle(hold), windowMs);
      }, PREP_MS - 100 + Math.random() * 200);
    }

    const onKey = (code, e) => { if (!e.repeat) press(code); };
    const unbind = bindKeys(codes, onKey);
    const unbindButtons = bindKeyButtons(ui.main, press);

    function finish() {
      clearTimeout(timer);
      unbind();
      unbindButtons();
      ui.dispose();
      resolve({ hits, misses, total: totalRounds, score: hits / totalRounds });
    }

    next();
  });
}

/**
 * Click-order sequence game. Short STAND BY before the timer; timer never under MIN_CLICK_SEQUENCE_MS.
 */
export function runClickSequence(container, { items, correctOrder, timeMs, title, hint }) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    const totalMs = Math.max(MIN_CLICK_SEQUENCE_MS, Math.round(timeMs * 1.15));
    let picks = [];
    let timeLeft = totalMs;
    let started = false;
    let loop = null;
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    const status = ui.main.ownerDocument.createElement('div');
    status.className = 'mg-seq-status';

    ui.main.innerHTML = `<div class="mg-seq-btns">${shuffled.map((item, i) => {
      const tip = assist.intel && item === correctOrder[0] ? ' mg-seq-btn--intel' : '';
      return `<button type="button" class="btn btn-secondary mg-seq-btn${tip}" data-i="${i}">${item}</button>`;
    }).join('')}</div>`;
    ui.main.prepend(status);
    appendIntel(ui, 'the first step is marked.');

    const updateStatus = () => {
      status.textContent = started
        ? `Select in order (${picks.length}/${correctOrder.length}) · ${Math.ceil(timeLeft / 1000)}s`
        : 'STAND BY...';
    };

    function finish() {
      loop?.stop();
      ui.main.removeEventListener('click', onClick);
      const correct = picks.filter((p, i) => p === correctOrder[i]).length;
      ui.dispose();
      resolve({ score: correct / correctOrder.length, correct, total: correctOrder.length });
    }

    function onClick(e) {
      const btn = e.target.closest('[data-i]');
      if (!btn) return;
      if (!started) { flashResult(ui, 'wait'); return; }
      const item = shuffled[Number(btn.dataset.i)];
      picks.push(item);
      btn.disabled = true;
      setProgress(ui, picks.length, correctOrder.length);
      updateStatus();
      if (picks.length >= correctOrder.length) finish();
    }

    updateStatus();
    ui.main.addEventListener('click', onClick);
    setProgress(ui, 0, correctOrder.length);
    setTimeout(() => {
      started = true;
      updateStatus();
      loop = createLoop({
        durationMs: totalMs,
        onTick: (_, elapsed) => {
          timeLeft = totalMs - elapsed;
          updateStatus();
        },
        onFinish: finish
      });
    }, CLICK_STANDBY_MS);
  });
}

/* ---------- Inspection board ---------- */

/** Inspection timer range; stats scale within it. */
export const INSPECTION_BASE_MS = 30000;
export const INSPECTION_MAX_MS = 38000;
/** How long missed discrepancies stay outlined after time runs out. */
export const INSPECTION_REVEAL_MS = 1200;
const FALSE_FLAG_MARK_MS = 900;

const INSPECT_PALETTE = {
  k: '#14141f', w: '#e8e8f0', s: '#b8b8c8', h: '#6a6a80',
  y: '#ffd94a', d: '#8a7a4a', b: '#6b4a2a', B: '#2a2a30',
  g: '#556b2f', G: '#3d4f22', l: '#8a9a5a', n: '#c8b88a',
  c: '#a08050', r: '#a84a4a', u: '#3d5a80', e: '#e0c890', p: '#8fa9c8'
};

/** Rows of palette chars ('.' = empty) → pixel block drawing. */
function pixelArtHtml(rows) {
  const cols = Math.max(...rows.map(r => r.length));
  const cells = rows.map(r => [...r.padEnd(cols, '.')].map(ch => {
    const color = INSPECT_PALETTE[ch];
    return color ? `<i style="background:${color}"></i>` : '<i></i>';
  }).join('')).join('');
  return `<span class="mg-insp-art" style="--cols:${cols}" aria-hidden="true">${cells}</span>`;
}

function inspectTileHtml(item, faulty) {
  const state = faulty ? item.fault : item.ok;
  const cues = faulty && item.fault.cue
    ? item.fault.cue.split(/\s+/).map(c => ` mg-insp-cue--${c}`).join('')
    : '';
  return `<button type="button" class="mg-insp-tile${cues}" data-id="${item.id}" style="--area:${item.id}"
      aria-label="${item.name}: ${state.desc}">
    ${pixelArtHtml(state.art ?? item.ok.art)}
    <span class="mg-insp-name">${item.name}</span>
    <span class="mg-insp-desc">${state.desc}</span>
    <span class="mg-insp-mark" aria-hidden="true"></span>
  </button>`;
}

/**
 * Spot-the-discrepancy inspection. Every item is drawn; `faultCount` random items show
 * their faulty state. Tap a fault = found; tap a squared-away item = false flag (once each).
 * Score = max(0, (found − 0.5 × falseFlags) / faultCount).
 * @param {{ title: string, hint?: string, statKeys: string[], faultCount: number,
 *   timeMs?: number, variant?: string, caption?: string,
 *   items: { id: string, name: string, ok: { desc: string, art: string[] },
 *     fault: { desc: string, reason: string, art?: string[], cue?: string } }[] }} opts
 */
export function runInspectionBoard(container, character, {
  title,
  hint = '',
  items,
  faultCount,
  timeMs = INSPECTION_BASE_MS,
  statKeys,
  variant = 'grid',
  caption = ''
}) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    appendRule(ui, 'Tap what is out of regulation · wrong calls cost half a point');
    const total = Math.min(faultCount, items.length);
    const totalMs = windowMsFor(character, statKeys, timeMs, timeMs + (INSPECTION_MAX_MS - INSPECTION_BASE_MS));
    const faults = new Set([...items].sort(() => Math.random() - 0.5).slice(0, total).map(i => i.id));
    const byId = new Map(items.map(i => [i.id, i]));
    const resolved = new Set();
    const timers = [];
    let phase = 'standby';
    let found = 0;
    let falseFlags = 0;
    let timeLeft = totalMs;
    let loop = null;

    ui.main.innerHTML = `
      <div class="mg-seq-status mg-insp-status"></div>
      <div class="mg-insp-board mg-insp-board--${variant} mg-insp-board--standby">
        ${caption ? `<div class="mg-insp-caption">${caption}</div>` : ''}
        <div class="mg-insp-grid">${items.map(i => inspectTileHtml(i, faults.has(i.id))).join('')}</div>
      </div>`;
    const status = ui.main.querySelector('.mg-insp-status');
    const board = ui.main.querySelector('.mg-insp-board');

    const updateStatus = () => {
      const text = phase === 'standby'
        ? `STAND BY — inspect for ${total} discrepancies`
        : `Found ${found} / ${total} · ${Math.max(0, Math.ceil(timeLeft / 1000))}s`;
      if (status.textContent !== text) status.textContent = text;
    };

    const markTile = (tile, cls, desc) => {
      tile.classList.add(cls);
      tile.querySelector('.mg-insp-desc').textContent = desc;
      tile.setAttribute('aria-label', `${byId.get(tile.dataset.id).name}: ${desc}`);
    };

    function onClick(e) {
      const tile = e.target.closest('.mg-insp-tile');
      if (!tile || phase === 'done') return;
      if (phase === 'standby') { flashResult(ui, 'wait'); return; }
      const id = tile.dataset.id;
      if (resolved.has(id)) return;
      resolved.add(id);
      tile.setAttribute('aria-disabled', 'true');
      if (faults.has(id)) {
        found++;
        markTile(tile, 'mg-insp-tile--found', byId.get(id).fault.reason);
        flashResult(ui, 'hit');
        setProgress(ui, found, total);
        updateStatus();
        if (found >= total) end();
      } else {
        falseFlags++;
        tile.classList.add('mg-insp-tile--flag');
        flashResult(ui, 'miss');
        timers.push(setTimeout(() => {
          tile.classList.remove('mg-insp-tile--flag');
          tile.classList.add('mg-insp-tile--cleared');
        }, FALSE_FLAG_MARK_MS));
      }
    }

    function end() {
      if (phase === 'done') return;
      phase = 'done';
      loop?.stop();
      const missed = [...faults].filter(id => !resolved.has(id));
      missed.forEach(id => {
        const tile = board.querySelector(`.mg-insp-tile[data-id="${id}"]`);
        markTile(tile, 'mg-insp-tile--missed', byId.get(id).fault.reason);
      });
      status.textContent = missed.length
        ? `TIME — ${missed.length} discrepanc${missed.length === 1 ? 'y' : 'ies'} missed`
        : 'ALL DISCREPANCIES FOUND';
      timers.push(setTimeout(finish, missed.length ? INSPECTION_REVEAL_MS : RESULT_PAUSE_MS));
    }

    function finish() {
      timers.forEach(clearTimeout);
      ui.main.removeEventListener('click', onClick);
      ui.dispose();
      const score = Math.max(0, (found - 0.5 * falseFlags) / total);
      resolve({ score, found, total, falseFlags });
    }

    ui.main.addEventListener('click', onClick);
    setProgress(ui, 0, total);
    setMeter(ui, 1);
    updateStatus();
    timers.push(setTimeout(() => {
      phase = 'live';
      board.classList.remove('mg-insp-board--standby');
      updateStatus();
      loop = createLoop({
        durationMs: totalMs,
        onTick: (_, elapsed) => {
          timeLeft = totalMs - elapsed;
          setMeter(ui, timeLeft / totalMs);
          updateStatus();
        },
        onFinish: end
      });
    }, CLICK_STANDBY_MS));
  });
}

/**
 * Multiple choice rounds (distinct from ASVAB — used for matching/fill-in).
 */
export function runChoiceRounds(container, { rounds, title, hint }) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    appendIntel(ui, 'one wrong answer is struck out each round.');
    let index = 0;
    let correct = 0;

    function next() {
      if (index >= rounds.length) {
        ui.dispose();
        resolve({ score: correct / rounds.length, correct, total: rounds.length });
        return;
      }
      const r = rounds[index];
      const choices = [...r.choices].sort(() => Math.random() - 0.5);
      const wrong = r.choices.map((_, i) => i).filter(i => i !== r.answer);
      const struck = assist.intel && wrong.length > 1 ? wrong[Math.floor(Math.random() * wrong.length)] : -1;
      ui.main.innerHTML = `
        <div class="mg-prompt">${r.prompt}</div>
        <div class="mg-choices">${choices.map(c => {
          const i = r.choices.indexOf(c);
          return i === struck
            ? `<button type="button" class="btn btn-secondary mg-choice mg-choice--struck" disabled>${c}</button>`
            : `<button type="button" class="btn btn-secondary mg-choice" data-i="${i}">${c}</button>`;
        }).join('')}</div>`;
      setProgress(ui, index + 1, rounds.length);

      ui.main.onclick = (e) => {
        const btn = e.target.closest('.mg-choice');
        if (!btn || btn.disabled) return;
        ui.main.onclick = null;
        if (Number(btn.dataset.i) === r.answer) correct++;
        index++;
        next();
      };
    }
    next();
  });
}
