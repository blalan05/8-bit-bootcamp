/**
 * Two-thumb on-screen pad for touch-primary devices.
 * Buttons dispatch synthetic keydown/keyup on window, so games need no touch-specific code.
 */

const LEFT_KEYS = [
  { slot: 'up', code: 'KeyW', arrow: 'ArrowUp' },
  { slot: 'left', code: 'KeyA', arrow: 'ArrowLeft' },
  { slot: 'down', code: 'KeyS', arrow: 'ArrowDown' },
  { slot: 'right', code: 'KeyD', arrow: 'ArrowRight' }
];
const RIGHT_KEYS = [
  { slot: 'up', code: 'KeyI' },
  { slot: 'left', code: 'KeyJ' },
  { slot: 'down', code: 'KeyK' },
  { slot: 'right', code: 'KeyL' }
];
const CENTER_KEYS = ['Space', 'Enter'];
const ARROW_CODES = LEFT_KEYS.map(k => k.arrow);

const CAPS = {
  ArrowUp: '↑', ArrowLeft: '←', ArrowDown: '↓', ArrowRight: '→',
  Space: 'SPACE', Enter: 'ENTER'
};
const KEY_VALUES = { Space: ' ', Enter: 'Enter' };

const capFor = code => CAPS[code] ?? code.replace(/^Key/, '');
const keyFor = code => KEY_VALUES[code] ?? (code.startsWith('Key') ? code.slice(3).toLowerCase() : code);

/** code -> number of live declarations */
const declared = new Map();
/** Bumped when the last session closes; undo functions from older games become no-ops. */
let generation = 0;
/** code -> highlight state */
let highlights = {};
/** host element -> frame element that got the layout modifier */
const sessions = new Map();
/** pointerId -> { code, button } */
const held = new Map();

let padEl = null;
let listening = false;
const coarseQuery = typeof matchMedia === 'function' ? matchMedia('(pointer: coarse)') : null;
const hoverQuery = typeof matchMedia === 'function' ? matchMedia('(hover: hover)') : null;

/** Touch-primary: coarse pointer, or touch points with no hover-capable pointer. */
export function isTouchPrimary() {
  if (coarseQuery?.matches) return true;
  return (navigator.maxTouchPoints ?? 0) > 0 && !hoverQuery?.matches;
}

/**
 * Declare key codes the current game listens for. Returns an undo function.
 * @param {string[]} codes
 */
export function declarePadKeys(codes) {
  const list = [...new Set(codes)];
  list.forEach(c => declared.set(c, (declared.get(c) ?? 0) + 1));
  render();
  const gen = generation;
  let done = false;
  return () => {
    if (done || gen !== generation) return;
    done = true;
    list.forEach(c => {
      const n = (declared.get(c) ?? 0) - 1;
      if (n > 0) declared.set(c, n); else declared.delete(c);
    });
    render();
  };
}

/**
 * Light pad buttons to mirror the on-screen key state.
 * setPadHighlight('KeyW', 'go') lights one key and clears the rest;
 * setPadHighlight({ KeyJ: 'go', KeyL: 'prep' }) sets several; setPadHighlight(null) clears.
 * @param {string|Record<string, string>|null} codeOrMap
 * @param {'prep'|'go'|'hold'|'hit'|'miss'} [state]
 */
export function setPadHighlight(codeOrMap, state = 'go') {
  if (!codeOrMap) highlights = {};
  else if (typeof codeOrMap === 'string') highlights = { [codeOrMap]: state };
  else highlights = { ...codeOrMap };
  paintHighlights();
}

/**
 * Show the pad while a mini-game is mounted in `host`. Returns a close function.
 * @param {HTMLElement} host
 */
export function openTouchPad(host) {
  sessions.get(host)?.close();
  const frame = host.closest('.menu-panel') ?? host;
  const session = { frame, close: () => closeSession(host, session) };
  sessions.set(host, session);
  startListening();
  render();
  return session.close;
}

function closeSession(host, session) {
  if (sessions.get(host) !== session) return;
  sessions.delete(host);
  session.frame.classList.remove('mg-pad-frame');
  if (sessions.size === 0) {
    generation++;
    declared.clear();
    highlights = {};
    stopListening();
  }
  render();
}

function activeCodes() {
  return new Set(declared.keys());
}

function render() {
  const show = sessions.size > 0 && isTouchPrimary();
  const active = activeCodes();
  const arrowMode = ARROW_CODES.some(c => active.has(c));
  const anyActive = [...LEFT_KEYS.flatMap(k => [k.code, k.arrow]), ...RIGHT_KEYS.map(k => k.code), ...CENTER_KEYS]
    .some(c => active.has(c));

  if (!show || !anyActive) {
    unmountPad();
    return;
  }
  mountPad();

  const leftActive = setCluster('left', LEFT_KEYS.map(k => ({ ...k, code: arrowMode ? k.arrow : k.code })), active);
  const rightActive = setCluster('right', RIGHT_KEYS, active);
  let centerActive = false;
  padEl.querySelectorAll('.mg-pad-center [data-pad-key]').forEach(btn => {
    const on = active.has(btn.dataset.padKey);
    btn.hidden = !on;
    centerActive ||= on;
    if (!on) releaseButton(btn);
  });
  padEl.querySelector('.mg-pad-center').hidden = !centerActive;
  padEl.classList.toggle('mg-pad--arrows', arrowMode);

  sessions.forEach(({ frame }) => frame.classList.add('mg-pad-frame'));
  const root = document.documentElement;
  root.classList.add('mg-pad-open');
  root.classList.toggle('mg-pad-open--left', leftActive);
  root.classList.toggle('mg-pad-open--right', rightActive);
  root.classList.toggle('mg-pad-open--center', centerActive);
  paintHighlights();
}

function setCluster(side, keys, active) {
  const cluster = padEl.querySelector(`.mg-pad-cluster--${side}`);
  let any = false;
  keys.forEach(({ slot, code }) => {
    const btn = cluster.querySelector(`[data-slot="${slot}"]`);
    const on = active.has(code);
    if (btn.dataset.padKey !== code) {
      releaseButton(btn);
      btn.dataset.padKey = code;
      btn.querySelector('.mg-pad-cap').textContent = capFor(code);
    }
    btn.disabled = !on;
    btn.classList.toggle('mg-pad-btn--off', !on);
    if (!on) releaseButton(btn);
    any ||= on;
  });
  cluster.hidden = !any;
  return any;
}

function paintHighlights() {
  if (!padEl) return;
  padEl.querySelectorAll('[data-pad-key]').forEach(btn => {
    const state = highlights[btn.dataset.padKey];
    btn.classList.remove('mg-key--prep', 'mg-key--go', 'mg-key--hold', 'mg-key--hit', 'mg-key--miss');
    if (state) btn.classList.add(`mg-key--${state}`);
  });
}

function buttonHtml(slot, code) {
  return `<button type="button" tabindex="-1" class="mg-key mg-pad-btn mg-pad-btn--${slot}" data-slot="${slot}" data-pad-key="${code}">
    <span class="mg-pad-cap">${capFor(code)}</span></button>`;
}

function mountPad() {
  if (padEl) return;
  padEl = document.createElement('div');
  padEl.className = 'mg-pad';
  padEl.setAttribute('aria-hidden', 'true');
  padEl.innerHTML = `
    <div class="mg-pad-cluster mg-pad-cluster--left">${LEFT_KEYS.map(k => buttonHtml(k.slot, k.code)).join('')}</div>
    <div class="mg-pad-center">${CENTER_KEYS.map(c => buttonHtml(c.toLowerCase(), c)).join('')}</div>
    <div class="mg-pad-cluster mg-pad-cluster--right">${RIGHT_KEYS.map(k => buttonHtml(k.slot, k.code)).join('')}</div>`;
  padEl.addEventListener('pointerdown', onPointerDown);
  ['pointerup', 'pointercancel', 'pointerleave', 'lostpointercapture'].forEach(type =>
    padEl.addEventListener(type, onPointerEnd, true));
  ['contextmenu', 'dblclick', 'selectstart'].forEach(type =>
    padEl.addEventListener(type, e => e.preventDefault()));
  document.body.appendChild(padEl);
}

function unmountPad() {
  releaseAll();
  if (padEl) {
    padEl.remove();
    padEl = null;
  }
  sessions.forEach(({ frame }) => frame.classList.remove('mg-pad-frame'));
  document.documentElement.classList.remove('mg-pad-open', 'mg-pad-open--left', 'mg-pad-open--right', 'mg-pad-open--center');
}

function dispatchKey(type, code) {
  window.dispatchEvent(new KeyboardEvent(type, { code, key: keyFor(code), bubbles: true, cancelable: true }));
}

function onPointerDown(e) {
  const btn = e.target.closest('[data-pad-key]');
  if (!btn || btn.disabled || btn.hidden) return;
  e.preventDefault();
  const code = btn.dataset.padKey;
  if ([...held.values()].some(h => h.button === btn)) return;
  try { btn.setPointerCapture(e.pointerId); } catch { /* pointer already gone */ }
  held.set(e.pointerId, { code, button: btn });
  btn.classList.add('mg-pad-btn--pressed');
  dispatchKey('keydown', code);
}

function onPointerEnd(e) {
  releasePointer(e.pointerId);
}

function releasePointer(pointerId) {
  const h = held.get(pointerId);
  if (!h) return;
  held.delete(pointerId);
  h.button.classList.remove('mg-pad-btn--pressed');
  if (h.button.hasPointerCapture?.(pointerId)) {
    try { h.button.releasePointerCapture(pointerId); } catch { /* already released */ }
  }
  dispatchKey('keyup', h.code);
}

function releaseButton(btn) {
  [...held.entries()].forEach(([id, h]) => { if (h.button === btn) releasePointer(id); });
}

function releaseAll() {
  [...held.keys()].forEach(releasePointer);
}

function onVisibility() {
  if (document.hidden) releaseAll();
}

function onMediaChange() {
  render();
}

function startListening() {
  if (listening) return;
  listening = true;
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('blur', releaseAll);
  coarseQuery?.addEventListener?.('change', onMediaChange);
  hoverQuery?.addEventListener?.('change', onMediaChange);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  document.removeEventListener('visibilitychange', onVisibility);
  window.removeEventListener('blur', releaseAll);
  coarseQuery?.removeEventListener?.('change', onMediaChange);
  hoverQuery?.removeEventListener?.('change', onMediaChange);
}
