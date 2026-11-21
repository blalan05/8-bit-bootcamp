/**
 * Pool mini-game scenes for runQTESequence: Swim Qual lane (side view) and Gear Shed (underwater).
 * Native 160×80 canvas, sprites from in-code palette rows tinted with the recruit's skin/hair.
 */
import {
  createPixelStage, createBuffer, spriteFromRows, drawLine, drawOutline, px,
  drawPixelText, pixelTextWidth, recruitColors, createParticles,
  clamp, lerp, easeOut, easeInOut
} from '../lib/pixelArt.js';

const W = 160;
const H = 80;
const TAU = Math.PI * 2;
const ACCENT = '#ffd94a';
const MISS = '#ff6b6b';

const quant = (a, steps) => Math.round(a / (TAU / steps)) * (TAU / steps);
const hex = rgb => `#${rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join('')}`;
const rgbOf = css => [1, 3, 5].map(i => parseInt(css.slice(i, i + 2), 16));
const shadeRgb = css => hex(rgbOf(css).map(v => v * 0.6));

/** Horizontal color bands with a checker dither row at each band edge. */
function fillBands(g, x, y0, y1, width, topCss, botCss, bands) {
  const top = rgbOf(topCss);
  const bot = rgbOf(botCss);
  const colorOf = b => hex(top.map((v, i) => lerp(v, bot[i], b / (bands - 1))));
  let prev = -1;
  for (let y = y0; y < y1; y++) {
    const band = Math.min(bands - 1, Math.floor(((y - y0) / (y1 - y0)) * bands));
    px(g, x, y, colorOf(band), width, 1);
    if (prev >= 0 && band !== prev) {
      g.fillStyle = colorOf(prev);
      for (let dx = (y & 1); dx < width; dx += 2) g.fillRect(x + dx, y, 1, 1);
    }
    prev = band;
  }
}

function tileGrid(g, x, y, w, h, base, grout, step = 4) {
  px(g, x, y, base, w, h);
  g.fillStyle = grout;
  for (let gy = y; gy < y + h; gy += step) g.fillRect(x, gy, w, 1);
  for (let gx = x; gx < x + w; gx += step) g.fillRect(gx, y, 1, h);
}

function drawParticles(ctx, parts, camX, camY) {
  for (const p of parts.list) {
    const x = Math.round(p.x - camX);
    const y = Math.round(p.y - camY);
    if (p.kind === 'bubble') {
      if (p.size >= 3) {
        ctx.fillStyle = '#bfe8ff';
        ctx.fillRect(x, y - 1, 1, 1); ctx.fillRect(x - 1, y, 1, 1); ctx.fillRect(x + 1, y, 1, 1); ctx.fillRect(x, y + 1, 1, 1);
        px(ctx, x - 1, y - 1, '#ffffff');
      } else if (p.size === 2) {
        px(ctx, x, y, '#bfe8ff', 2, 2);
        px(ctx, x, y, '#ffffff');
      } else {
        px(ctx, x, y, '#d8f4ff');
      }
    } else if (p.kind === 'drop') {
      px(ctx, x, y, '#e8f6ff');
    } else if (p.kind === 'foam') {
      px(ctx, x - (p.w >> 1), y, p.age < p.life / 2 ? '#ffffff' : '#bfe8ff', p.w, 1);
    } else if (p.kind === 'puff') {
      if (p.age < p.life * 0.7 || (p.age >> 6) % 2) px(ctx, x, y, '#e8f0f8', 2, 2);
    }
  }
}

function updateParticles(parts, dt, surfaceAt) {
  parts.update(dt, p => {
    if (p.kind === 'bubble') {
      p.x += Math.sin(p.age * 0.012 + p.phase) * 0.012 * dt;
      if (p.y <= surfaceAt(p.x) + 1) return false;
    } else if (p.kind === 'drop') {
      if (p.vy > 0 && p.y >= surfaceAt(p.x)) return false;
    }
    return true;
  });
}

function bubble(parts, x, y, extra = {}) {
  parts.add({
    kind: 'bubble', x, y, vy: -(0.018 + Math.random() * 0.025), phase: Math.random() * TAU,
    size: Math.random() < 0.25 ? 2 : 1, life: 4000, ...extra
  });
}

function splash(parts, x, y, count = 6, power = 1) {
  for (let i = 0; i < count; i++) {
    parts.add({
      kind: 'drop', x: x + (Math.random() - 0.5) * 4, y: y - 1,
      vx: (Math.random() - 0.5) * 0.08 * power, vy: -(0.06 + Math.random() * 0.08) * power,
      g: 0.0005, life: 900
    });
  }
  parts.add({ kind: 'foam', x, y, w: 3 + Math.round(power * 2), life: 280 });
}

/** "AIR" label + 10 pips, top-left of the scene. */
function drawAirHud(ctx, air, t) {
  px(ctx, 2, 2, 'rgba(10, 12, 24, 0.7)', 38, 9);
  drawPixelText(ctx, 'AIR', 4, 4, '#e8e8f0');
  const low = air < 0.25;
  const color = low ? MISS : air < 0.5 ? ACCENT : '#6dff8a';
  for (let i = 0; i < 10; i++) {
    const filled = air > i / 10 + 0.001;
    const blinkOff = low && filled && Math.floor(t / 180) % 2;
    px(ctx, 18 + i * 2, 4, filled && !blinkOff ? color : '#3d3d5c', 1, 5);
  }
}

function drawSparkle(ctx, x, y, t, color = ACCENT) {
  const big = Math.floor(t / 140) % 2 === 0;
  x = Math.round(x); y = Math.round(y);
  const r = big ? 3 : 2;
  px(ctx, x - r, y, color, r * 2 + 1, 1);
  px(ctx, x, y - r, color, 1, r * 2 + 1);
  px(ctx, x, y, '#ffffff');
}

function meterSync(info) {
  let last = -1;
  return value => {
    if (Math.abs(value - last) < 0.004) return;
    last = value;
    info?.setMeter?.(value);
  };
}

/* ====================================================================== */
/* Swim Qual: side view of one 25 m lane                                   */
/* ====================================================================== */

const SWIM = { WORLD_W: 424, START: 12, FAR: 412, DECK_TOP: 18, DECK_BOT: 24, SURF: 30, FLOOR: 70 };
const PX_PER_M = (SWIM.FAR - SWIM.START) / 25;
const FLIP_X = SWIM.FAR - 38;
const SET_X = SWIM.FAR - 12;
const START_X = 46;
/** Swimmer buffer; (OX, OY) is the torso pivot. The waterline sits WATERLINE px above OY. */
const BW = 90;
const BH = 56;
const OX = 45;
const OY = 28;
const WATERLINE = 2;
const SHOULDER = [OX + 13, OY - 1];
const HIP = [OX - 8, OY];
const COCKED = Math.PI * 1.55;
const REACH = 0.12;
const ENTRY = Math.PI * 1.85;

const SWIM_PAL = { k: '#1c2a3a', K: '#111a26', o: '#6b7a3a', O: '#4d5a28', e: '#14141f', m: '#6a2028' };
const SWIM_TORSO = [
  'k'.repeat(7) + 'o'.repeat(18) + '.',
  'k'.repeat(7) + 'o'.repeat(19),
  'k'.repeat(7) + 'O' + 'o'.repeat(17) + 's',
  'K' + 'k'.repeat(6) + 'O'.repeat(18) + 's',
  'KK' + 'k'.repeat(5) + 'O'.repeat(18) + '.',
  '.' + 'K'.repeat(6) + 'O'.repeat(17) + '..'
];
/** Face-down, rolling, breathing (mouth clear), gasping. Head faces right, crown top-left. */
const SWIM_HEADS = {
  down: [
    '...hhhhh...', '.hhhhhhhhh.', 'hhhhhhhhhhs', 'hhhhhhhhsss', 'HhhhhhSssss',
    'HhhhhSSsSss', '.HhhsSSssse', '.HHssssssss', '..SSssssss.', '....SSSS...'
  ],
  turn1: [
    '...hhhhh...', '.hhhhhhhhh.', 'hhhhhhhhhss', 'hhhhhhhssss', 'HhhhhSsssss',
    'HhhhSSssess', '.HhhSsssss.', '.HHsssssmm.', '..SSsssss..', '....SSSS...'
  ],
  turn2: [
    '...hhhhh...', '.hhhhhhhhs.', 'hhhhhhhssss', 'hhhhhSsseSs', 'HhhhSSsssss',
    'HhhhSsssssm', '.HhhSssssmm', '.HHsssssmm.', '..SSsssss..', '....SSSS...'
  ],
  gasp: [
    '...hhhhh...', '.hhhhhhhhs.', 'hhhhhhhssss', 'hhhhhSsseSs', 'HhhhSSsssss',
    'HhhhSssssmm', '.HhhSsssmmm', '.HHssssmmm.', '..SSsssss..', '....SSSS...'
  ]
};
const FLAG_COLORS = ['#d84a4a', '#f0f0f0', '#3a64c8'];

function swimKind(step) {
  const label = String(step.label).toUpperCase();
  if (/TURN|PUSH OFF/.test(label)) return 'turn';
  if (/BREATHE/.test(label)) return 'breathe';
  return 'stroke';
}

function buildSwimBackdrop() {
  const width = W + Math.ceil((SWIM.WORLD_W - W) / 2) + 2;
  const { canvas, ctx: g } = createBuffer(width, SWIM.DECK_TOP);
  px(g, 0, 0, '#1b2238', width, SWIM.DECK_TOP);
  for (let x = 6; x < width; x += 32) {
    px(g, x, 1, '#f0e6b0', 4, 1);
    px(g, x - 1, 2, '#2c3450', 6, 1);
  }
  for (let x = 16; x < width; x += 56) {
    px(g, x, 4, '#3d3d5c', 22, 11);
    px(g, x + 1, 5, '#2c4470', 20, 9);
    drawLine(g, x + 3, 12, x + 8, 6, '#4a6ea8');
    drawLine(g, x + 13, 12, x + 17, 7, '#4a6ea8');
    px(g, x + 11, 5, '#3d3d5c', 1, 9);
    px(g, x + 1, 9, '#3d3d5c', 20, 1);
  }
  px(g, 0, SWIM.DECK_TOP - 1, '#262e48', width, 1);
  return canvas;
}

function buildSwimWorld() {
  const { WORLD_W, START, FAR, DECK_TOP, DECK_BOT, SURF, FLOOR } = SWIM;
  const { canvas, ctx: g } = createBuffer(WORLD_W, H);

  // Backstroke flags 5 m from each wall
  const flagA = START + 5 * PX_PER_M;
  const flagB = FAR - 5 * PX_PER_M;
  px(g, flagA, 6, '#7a828c', 1, DECK_TOP - 6);
  px(g, flagB, 6, '#7a828c', 1, DECK_TOP - 6);
  px(g, flagA, 7, '#c8c8d0', flagB - flagA, 1);
  for (let x = flagA + 2, i = 0; x < flagB - 2; x += 5, i++) {
    const c = FLAG_COLORS[i % 3];
    px(g, x, 8, c, 3, 1);
    px(g, x, 9, c, 2, 1);
    px(g, x, 10, c, 1, 1);
  }

  // 25 m sign on the far deck
  px(g, FAR - 1, 13, '#5d6670', 2, DECK_TOP - 13);
  px(g, FAR - 9, 3, '#8a6a1a', 17, 10);
  px(g, FAR - 8, 4, ACCENT, 15, 8);
  drawPixelText(g, '25M', FAR - 7, 5, '#14141f');

  // Deck with tile grout and distance marks
  px(g, 0, DECK_TOP, '#d6dce2', WORLD_W, 1);
  px(g, 0, DECK_TOP + 1, '#aab2ba', WORLD_W, DECK_BOT - DECK_TOP - 1);
  g.fillStyle = '#959da5';
  for (let x = 0; x < WORLD_W; x += 8) g.fillRect(x, DECK_TOP + 1, 1, DECK_BOT - DECK_TOP - 1);
  px(g, 0, DECK_BOT, '#5d6670', WORLD_W, 1);
  for (const m of [5, 10, 15, 20]) {
    const x = START + m * PX_PER_M;
    const label = String(m);
    drawPixelText(g, label, Math.round(x - pixelTextWidth(label) / 2), DECK_TOP + 1, '#4a525c');
  }

  // Far coping, gutter and wall above the waterline
  const COPING = DECK_BOT + 1;
  px(g, 0, COPING, '#cfd6dc', WORLD_W, 1);
  px(g, 0, COPING + 1, '#0f1822', WORLD_W, 2);
  px(g, 0, COPING + 3, '#4f84a8', WORLD_W, SURF - COPING - 3);

  fillBands(g, 0, SURF, FLOOR, WORLD_W, '#3c92da', '#164a8a', 6);

  // Bottom tiles + black lane line ending in a T
  px(g, 0, FLOOR, '#6fa9cc', WORLD_W, H - FLOOR);
  g.fillStyle = '#4d86ab';
  g.fillRect(0, FLOOR, WORLD_W, 1);
  g.fillRect(0, FLOOR + 6, WORLD_W, 1);
  for (let x = 0; x < WORLD_W; x += 8) {
    g.fillRect(x, FLOOR, 1, 6);
    g.fillRect(x + 4, FLOOR + 6, 1, H - FLOOR - 6);
  }
  px(g, START + 2 * PX_PER_M, FLOOR + 2, '#1d2f52', FAR - START - 4 * PX_PER_M, 2);
  px(g, START + 2 * PX_PER_M - 2, FLOOR + 1, '#1d2f52', 4, 4);
  px(g, FAR - 2 * PX_PER_M - 2, FLOOR + 1, '#1d2f52', 4, 4);

  // End walls with gutter notch and the target T on the inner face
  for (const [wx, inner] of [[0, START - 2], [FAR, FAR]]) {
    tileGrid(g, wx, COPING, 12, H - COPING, '#8fb8d0', '#6d97b2');
    px(g, wx, COPING, '#e4e8ec', 12, 1);
    px(g, inner === FAR ? FAR : START - 3, COPING + 1, '#0d1620', 3, SURF - COPING);
    px(g, inner, SURF + 18, '#1d2f52', 2, FLOOR - SURF - 22);
    px(g, inner === FAR ? FAR : START - 6, SURF + 16, '#1d2f52', 6, 2);
  }
  return canvas;
}

/** @returns {import('../lib/minigameKit.js').MinigameScene} */
export function createSwimScene() {
  let stage = null;
  let buf = null;
  let backdrop = null;
  let world = null;
  let sprites = null;
  let colors = null;
  let info = null;
  let syncMeter = () => {};
  const parts = createParticles();
  let t = 0;
  let cam = 0;
  let air = 1;
  let kind = 'stroke';

  const s = {
    x: START_X, vx: 0, sx: 1, sy: 1, rot: 0, depth: 0, sink: 0, sinkHold: 0,
    arms: { near: COCKED, far: REACH }, armAnim: null,
    head: 'down', headLift: 0, gaspT: 0, sputterT: 0,
    tuck: 0, kp: 0, kickAmp: 1,
    mode: 'swim', modeT: 0, x0: START_X, flipArms: false,
    marker: null, wallFlash: false, exhaleT: 300
  };

  const surfaceAt = () => SWIM.SURF;

  function forwardTo(cur, target) {
    return cur + (((target - cur) % TAU) + TAU) % TAU;
  }

  function animateArms(toNear, toFar, dur) {
    s.armAnim = { fromN: s.arms.near, fromF: s.arms.far, toN: toNear, toF: toFar, t: 0, dur };
  }

  function holdPose(near, far, dur = 300) {
    animateArms(forwardTo(s.arms.near, near), forwardTo(s.arms.far, far), dur);
  }

  function stroke(dur = 520) {
    const n = s.armAnim ? s.armAnim.toN : s.arms.near;
    const f = s.armAnim ? s.armAnim.toF : s.arms.far;
    s.arms.near = n;
    s.arms.far = f;
    animateArms(n + TAU, f + TAU, dur);
  }

  function armPts(theta) {
    const tm = ((theta % TAU) + TAU) % TAU;
    const bend = tm > Math.PI ? Math.sin(tm - Math.PI) * 1.9 : Math.sin(tm) * 0.6;
    const [sx, sy] = SHOULDER;
    const ex = sx + 8 * Math.cos(theta);
    const ey = sy + 8 * Math.sin(theta);
    return { sx, sy, ex, ey, hx: ex + 9 * Math.cos(theta + bend), hy: ey + 9 * Math.sin(theta + bend) };
  }

  function legPose() {
    const kick = ph => ({
      thigh: Math.PI - s.kickAmp * 0.14 * Math.sin(ph),
      shin: Math.PI - s.kickAmp * 0.34 * Math.sin(ph - 1)
    });
    const mix = a => ({ thigh: lerp(a.thigh, 0.7, s.tuck), shin: lerp(a.shin, Math.PI - 0.4, s.tuck) });
    return { near: mix(kick(s.kp)), far: mix(kick(s.kp + Math.PI)) };
  }

  function legPts(l) {
    const [hx, hy] = HIP;
    const kx = hx + 10 * Math.cos(l.thigh);
    const ky = hy + 10 * Math.sin(l.thigh);
    return { hx, hy, kx, ky, fx: kx + 10 * Math.cos(l.shin), fy: ky + 10 * Math.sin(l.shin) };
  }

  function baseY() {
    return SWIM.SURF + WATERLINE + s.sink + s.depth;
  }

  function toWorld(lx, ly) {
    const dx = (lx - OX) * s.sx;
    const dy = (ly - OY) * s.sy;
    const r = s.rot ? quant(s.rot, 16) : 0;
    const c = Math.cos(r);
    const n = Math.sin(r);
    return [s.x + dx * c - dy * n, baseY() + dx * n + dy * c];
  }

  function drawSwimmer() {
    const b = buf.ctx;
    b.clearRect(0, 0, BW, BH);
    const near = quant(s.arms.near, 24);
    const far = quant(s.arms.far, 24);
    const legs = legPose();
    const arm = (theta, color, sleeve) => {
      const p = armPts(theta);
      drawLine(b, p.sx, p.sy, p.ex, p.ey, color, 2);
      drawLine(b, p.ex, p.ey, p.hx, p.hy, color, 2);
      drawLine(b, p.sx, p.sy, lerp(p.sx, p.ex, 0.35), lerp(p.sy, p.ey, 0.35), sleeve, 3);
      px(b, p.hx - 1, p.hy - 1, color, 3, 2);
    };
    const leg = (l, color) => {
      const p = legPts(l);
      drawLine(b, p.hx, p.hy, p.kx, p.ky, color, 3);
      drawLine(b, p.kx, p.ky, p.fx, p.fy, color, 3);
      px(b, p.fx - 3, p.fy - 1, color, 3, 2);
    };
    arm(far, colors.skinShade, SWIM_PAL.O);
    leg(legs.far, colors.skinShade);
    b.drawImage(sprites.torso, OX - 10, OY - 3);
    leg(legs.near, colors.skin);
    b.drawImage(sprites.heads[s.head], OX + 15, OY - 6 - Math.round(s.headLift));
    arm(near, colors.skin, SWIM_PAL.o);

    // Tint everything below the waterline
    const d = WATERLINE + s.sink + s.depth;
    b.globalCompositeOperation = 'source-atop';
    b.fillStyle = 'rgba(28, 100, 180, 0.55)';
    if (s.rot) b.fillRect(0, 0, BW, BH);
    else if (s.sy > 0) {
      const y0 = Math.ceil(OY - d / s.sy) + 1;
      b.fillRect(0, y0, BW, BH - y0);
    } else {
      const y1 = Math.floor(OY + d / -s.sy);
      b.fillRect(0, 0, BW, y1);
    }
    b.globalCompositeOperation = 'source-over';
  }

  function headWorld() {
    return toWorld(OX + 24, OY - s.headLift);
  }

  function sputter(count = 12) {
    const [hx, hy] = headWorld();
    for (let i = 0; i < count; i++) {
      bubble(parts, hx + (Math.random() - 0.5) * 8, hy + 2 + Math.random() * 6, { size: Math.random() < 0.4 ? 2 : 1 });
    }
    splash(parts, hx, SWIM.SURF, 5, 0.9);
    s.sink = 4;
    s.sinkHold = 380;
    s.sputterT = 520;
    s.head = 'turn1';
    s.headLift = 1;
  }

  function updateArms(dt) {
    if (!s.armAnim) return;
    const a = s.armAnim;
    const prevN = s.arms.near;
    const prevF = s.arms.far;
    a.t += dt;
    const k = easeInOut(clamp(a.t / a.dur, 0, 1));
    s.arms.near = lerp(a.fromN, a.toN, k);
    s.arms.far = lerp(a.fromF, a.toF, k);
    const entered = (prev, cur) => cur > prev && Math.floor((cur - ENTRY) / TAU) !== Math.floor((prev - ENTRY) / TAU);
    if (s.mode === 'swim' || s.mode === 'push') {
      if (entered(prevN, s.arms.near)) {
        const p = armPts(s.arms.near);
        const [wx] = toWorld(p.hx, p.hy);
        splash(parts, wx, SWIM.SURF, 7, 1);
      }
      if (entered(prevF, s.arms.far)) {
        const p = armPts(s.arms.far);
        const [wx] = toWorld(p.hx, p.hy);
        splash(parts, wx, SWIM.SURF, 3, 0.7);
      }
      for (const theta of [s.arms.near, s.arms.far]) {
        const p = armPts(theta);
        if (p.hy > OY + 2 && Math.random() < dt * 0.02) {
          const [wx, wy] = toWorld(p.hx, p.hy);
          bubble(parts, wx, wy);
        }
      }
    }
    if (a.t >= a.dur) {
      const norm = v => ((v % TAU) + TAU) % TAU;
      s.arms.near = norm(a.toN);
      s.arms.far = norm(a.toF);
      s.armAnim = null;
    }
  }

  function updateSwimmer(dt) {
    s.modeT += dt;
    s.kp += dt * 0.014;
    updateArms(dt);

    if (s.gaspT > 0) {
      s.gaspT -= dt;
      if (s.gaspT <= 0) { s.head = 'down'; s.headLift = 0; }
    }
    if (s.sputterT > 0) {
      s.sputterT -= dt;
      if (s.sputterT <= 0) { s.head = 'down'; s.headLift = 0; }
    }
    if (s.sinkHold > 0) s.sinkHold -= dt;
    else s.sink *= Math.exp(-dt / 350);

    if (s.mode === 'swim') {
      s.x = Math.min(FLIP_X, s.x + s.vx * dt);
      s.vx *= Math.exp(-dt / 500);
    } else if (s.mode === 'approach') {
      const p = s.modeT / info.prepMs;
      if (p < 0.6) {
        s.x = lerp(s.x0, FLIP_X, easeInOut(p / 0.6));
        s.kickAmp = 1;
      } else {
        const f = clamp((p - 0.6) / 0.4, 0, 1);
        if (!s.flipArms) {
          s.flipArms = true;
          holdPose(Math.PI / 2 + 0.5, Math.PI / 2 + 0.5, 250);
          splash(parts, s.x + 10, SWIM.SURF, 6, 1);
        }
        s.x = lerp(FLIP_X, SET_X, f);
        s.rot = Math.PI * easeInOut(f);
        s.tuck = clamp(f * 2.5, 0, 1);
        s.depth = 12 * Math.sin(f * Math.PI / 2);
        s.kickAmp = 0;
        if (Math.random() < dt * 0.03) {
          const [wx, wy] = toWorld(OX, OY);
          bubble(parts, wx, wy);
        }
      }
    } else if (s.mode === 'push' || s.mode === 'slip') {
      const push = s.mode === 'push';
      const twistMs = push ? 450 : 1000;
      const v = lerp(-1, 1, easeInOut(clamp(s.modeT / twistMs, 0, 1)));
      s.sy = v < -0.6 ? -1 : v < 0 ? -0.5 : v < 0.6 ? 0.5 : 1;
      s.tuck = Math.max(0, 1 - s.modeT / (push ? 200 : 700));
      s.depth = (push ? 12 : 9) * (1 - easeOut(clamp(s.modeT / 900, 0, 1))) + (push ? 0 : 3);
      s.x = Math.max(SWIM.START + 30, s.x + s.vx * dt);
      s.vx *= Math.exp(-dt / (push ? 650 : 900));
      if (push && s.modeT < 700 && Math.random() < dt * 0.06) {
        const p = legPts(legPose().near);
        const [wx, wy] = toWorld(p.fx, p.fy);
        bubble(parts, wx, wy, { size: Math.random() < 0.5 ? 2 : 1 });
      }
      if (push && s.modeT > 520 && !s.armAnim) {
        s.kickAmp = 1;
        stroke(520);
        s.vx = Math.min(s.vx, -0.08);
      }
    }

    // Exhale bubbles and kick churn while swimming face-down
    if ((s.mode === 'swim' || s.mode === 'push') && s.head === 'down') {
      s.exhaleT -= dt;
      if (s.exhaleT <= 0) {
        s.exhaleT = 220 + Math.random() * 220;
        const [hx, hy] = headWorld();
        bubble(parts, hx, hy + 2);
      }
    }
    if (s.kickAmp > 0 && s.tuck < 0.5 && Math.random() < dt * 0.014) {
      const p = legPts(legPose().near);
      const [wx, wy] = toWorld(p.fx, p.fy);
      if (wy <= SWIM.SURF + 1) splash(parts, wx, SWIM.SURF, 2, 0.5);
      else bubble(parts, wx, wy);
    }

    if (s.head !== 'gasp') air = Math.max(0.05, air - dt / 15000);
    syncMeter(air);
  }

  function render() {
    const { ctx } = stage;
    const target = clamp(s.x - (s.sx > 0 ? 66 : 94), 0, SWIM.WORLD_W - W);
    const camX = Math.round(cam = lerp(cam, target, 0.08));
    const blink = Math.floor(t / 150) % 2 === 0;

    ctx.drawImage(backdrop, -Math.round(camX / 2), 0);
    ctx.drawImage(world, -camX, 0);

    const x0 = Math.max(0, SWIM.START - camX);
    const x1 = Math.min(W, SWIM.FAR - camX);

    // Caustic light in the water
    ctx.fillStyle = 'rgba(150, 215, 255, 0.35)';
    for (let y = SWIM.SURF + 7; y < SWIM.FLOOR - 3; y += 9) {
      for (let x = x0; x < x1; x++) {
        const wx = x + camX;
        const v = Math.sin(wx * 0.13 + y * 0.7 + t * 0.0021) + Math.sin(wx * 0.051 - t * 0.0013 + y);
        if (v > 1.45) ctx.fillRect(x, y, 1, 1);
      }
    }

    // Surface ripples
    for (let x = x0; x < x1; x++) {
      const wx = x + camX;
      const off = Math.round(Math.sin(wx * 0.21 + t * 0.005) * 0.7 + Math.sin(wx * 0.063 - t * 0.0031) * 0.6);
      if (off > 0) px(ctx, x, SWIM.SURF, '#4f84a8');
      px(ctx, x, SWIM.SURF + off, '#cdeeff');
      px(ctx, x, SWIM.SURF + off + 1, '#7cc4f0');
    }

    // Lane ropes: far (smaller, slower) then our lane's rope
    for (const [par, w, h, gap, y, dim] of [[0.92, 3, 2, 5, SWIM.SURF - 3, true], [1, 5, 3, 6, SWIM.SURF - 2, false]]) {
      const offset = camX * par;
      for (let wx = SWIM.START + 2; wx < SWIM.FAR - w; wx += gap) {
        const sx = Math.round(wx - offset);
        if (sx < x0 || sx + w > x1) continue;
        const nearWall = wx < SWIM.START + 5 * PX_PER_M || wx > SWIM.FAR - 5 * PX_PER_M;
        const idx = Math.floor(wx / gap);
        let c = nearWall ? '#b04a52' : idx % 2 ? '#b8c2d2' : '#3a5f9e';
        if (dim) c = nearWall ? '#6e3a48' : idx % 2 ? '#6e7c98' : '#2a4272';
        const bob = Math.round(Math.sin(wx * 0.2 + t * 0.004) * 0.6);
        px(ctx, sx, y + bob, c, w, h);
        if (!dim) px(ctx, sx + 1, y + bob, idx % 2 && !nearWall ? '#dce2ea' : c, w - 2, 1);
      }
    }

    // Swimmer's shadow on the pool floor
    const shadowX = Math.round(s.x - camX - 22);
    px(ctx, shadowX + 4, SWIM.FLOOR + 1, 'rgba(10, 30, 60, 0.35)', 40, 1);
    px(ctx, shadowX, SWIM.FLOOR + 2, 'rgba(10, 30, 60, 0.35)', 48, 2);

    // Wall target flashes when it is time to push off
    if (s.wallFlash && blink) {
      px(ctx, SWIM.FAR - camX, SWIM.SURF + 16, ACCENT, 6, 2);
      px(ctx, SWIM.FAR - camX, SWIM.SURF + 18, ACCENT, 2, SWIM.FLOOR - SWIM.SURF - 22);
    }

    drawSwimmer();
    ctx.save();
    ctx.translate(Math.round(s.x - camX), Math.round(baseY()));
    if (s.rot) ctx.rotate(quant(s.rot, 16));
    ctx.scale(s.sx, s.sy);
    ctx.drawImage(buf.canvas, -OX, -OY);
    ctx.restore();

    drawParticles(ctx, parts, camX, 0);

    // Breath window: bow-wave pocket in front of the mouth
    if (s.marker === 'mouth') {
      const [mx] = headWorld();
      px(ctx, Math.round(mx - camX) + 2, SWIM.SURF - 1, '#ffffff', 4, 1);
      px(ctx, Math.round(mx - camX) + 6, SWIM.SURF, '#ffffff', 1, 1);
    }
    if (s.marker) {
      let p;
      if (s.marker === 'hand') {
        const a = armPts(quant(s.arms.near, 24));
        p = toWorld(a.hx, a.hy - 3);
      } else if (s.marker === 'mouth') {
        const [mx, my] = headWorld();
        p = [mx + 1, my - 7];
      } else {
        const l = legPts(legPose().near);
        p = toWorld(l.fx, l.fy);
        p[0] += 3;
      }
      drawSparkle(ctx, p[0] - camX, p[1], t);
    }

    drawAirHud(ctx, air, t);
  }

  return {
    holdMs: 1300,

    mount(el, character, ctxInfo) {
      info = ctxInfo;
      syncMeter = meterSync(info);
      colors = recruitColors(character);
      const pal = { ...SWIM_PAL, s: colors.skin, S: colors.skinShade, h: colors.hair, H: colors.hairShade };
      sprites = {
        torso: spriteFromRows(SWIM_TORSO, pal),
        heads: Object.fromEntries(Object.entries(SWIM_HEADS).map(([k, rows]) => [k, spriteFromRows(rows, pal)]))
      };
      stage = createPixelStage(el, W, H);
      el.classList.add('mg-stage--pool');
      buf = createBuffer(BW, BH);
      backdrop = buildSwimBackdrop();
      world = buildSwimWorld();
      cam = clamp(s.x - 66, 0, SWIM.WORLD_W - W);
      syncMeter(air);
      render();
    },

    onPrep(step) {
      kind = swimKind(step);
      s.marker = null;
      s.wallFlash = false;
      if (kind === 'stroke') {
        s.head = 'down';
        s.headLift = 0;
        holdPose(COCKED, REACH, 350);
      } else if (kind === 'breathe') {
        s.head = 'turn1';
        s.headLift = 0;
        holdPose(Math.PI - 0.2, REACH, 800);
      } else {
        s.mode = 'approach';
        s.modeT = 0;
        s.x0 = Math.min(s.x, FLIP_X);
        s.vx = 0;
        s.flipArms = false;
        s.head = 'down';
        s.headLift = 0;
        holdPose(-0.05, -0.05, 400);
      }
    },

    onExecute() {
      if (kind === 'stroke') {
        s.marker = 'hand';
        holdPose(COCKED + 0.15, REACH, 150);
      } else if (kind === 'breathe') {
        s.marker = 'mouth';
        s.head = 'turn2';
        s.headLift = 1;
      } else {
        s.mode = 'set';
        s.modeT = 0;
        s.x = SET_X;
        s.rot = 0;
        s.sx = -1;
        s.sy = -1;
        s.depth = 12;
        s.tuck = 1;
        s.marker = 'feet';
        s.wallFlash = true;
      }
    },

    onHit() {
      s.marker = null;
      s.wallFlash = false;
      if (kind === 'stroke') {
        stroke(520);
        s.vx += 0.09;
      } else if (kind === 'breathe') {
        s.head = 'gasp';
        s.headLift = 3;
        s.gaspT = 420;
        air = 1;
        const [hx, hy] = headWorld();
        for (let i = 0; i < 3; i++) {
          parts.add({ kind: 'puff', x: hx + 2 + i * 2, y: hy - 6 - i, vy: -0.01, vx: 0.01, life: 520 });
        }
        stroke(580);
        s.vx += 0.07;
      } else {
        s.mode = 'push';
        s.modeT = 0;
        s.vx = -0.24;
        holdPose(-0.05, -0.05, 220);
        for (let i = 0; i < 10; i++) bubble(parts, SWIM.FAR - 2, baseY() - 6 + Math.random() * 10, { size: 2 });
      }
    },

    onMiss() {
      s.marker = null;
      s.wallFlash = false;
      if (kind === 'turn') {
        s.mode = 'slip';
        s.modeT = 0;
        s.vx = -0.035;
        sputter(14);
        s.sink = 0;
        air = Math.max(0.05, air - 0.15);
        return;
      }
      s.vx = 0;
      sputter(kind === 'breathe' ? 16 : 10);
      air = Math.max(0.05, air - (kind === 'breathe' ? 0.2 : 0.1));
    },

    onTick(dt) {
      if (!stage) return;
      dt = Math.min(dt, 50);
      t += dt;
      updateSwimmer(dt);
      updateParticles(parts, dt, surfaceAt);
      render();
    },

    dispose() {
      parts.clear();
      stage?.canvas.remove();
      stage = null;
    }
  };
}

/* ====================================================================== */
/* Gear Shed: underwater at the deep end                                   */
/* ====================================================================== */

const GEAR = { WORLD_H: 108, SURF: 28, FLOOR: 98, LWALL: 12, RWALL: 150, CAM_Y: 24, JET_X: 128, LADDER_X: 136 };
const RB_W = 44;
const RB_H = 52;

const CAMO = { c: '#556b2f', C: '#3d4f22', n: '#7a6e48', N: '#2a2f1c' };
const GEAR_PAL = {
  ...CAMO,
  g: '#6b7a3a', G: '#4d5a28', d: '#3a3020',
  f: '#8a7a4a', F: '#6a5a35', p: '#7a6a40',
  b: '#b8a070', B: '#8a7650', y: '#d8c060',
  k: '#2e3d1c', K: '#1e2a12',
  t: '#8a7050', T: '#3e3024',
  e: '#14141f', m: '#5a2028'
};
const GEAR_HEADS = {
  hold: ['..hhhh..', '.hhhhhh.', '.hssssh.', '.sesses.', 'ssssssss', '.sssmss.', '.SssssS.', '..SSSS..'],
  strain: ['..hhhh..', '.hhhhhh.', '.hssssh.', '.SSssSS.', '.ssssss.', '.ssmmss.', '.SsmmsS.', '..SSSS..'],
  gasp: ['..hhhh..', '.hhhhhh.', '.hssssh.', '.sesses.', '.ssssss.', '.ssmmss.', '.Ssmmss.', '..SSSS..']
};
const GEAR_SPRITES = {
  helmet: [
    '...gggg...', '.gggnggGg.', 'ggnggggngg', 'GGGGGGGGGG', '.d......d.',
    '.d......d.', '.d......d.', '.d......d.', '..d....d..', '...dddd...'
  ],
  blouse: [
    '....ssss....', '.cCcsSSscCc.', 'cccCcnccCccc', 'cnccCcccncCc', 'ccCccncCcccc',
    'cccncccccnCc', 'cCccccCncccc', 'ccncCccccCnc', 'cccccnccCccc', 'cCcnccccccCc', '.ccccCcccnc.'
  ],
  flak: [
    '.FF........FF.', '.fF........Ff.', 'ffffffffffffff', 'fFffffffffffFf', 'fFfppffffppfFf',
    'fFfppffffppfFf', 'fFffffffffffFf', 'fFFFFFFFFFFFFf', 'ffpppffffpppff', '.FFFFFFFFFFFF.'
  ],
  belt: ['bbbbbyybbbbb', 'BBBBByyBBBBB'],
  shorts: ['kkkkkkkkkkkk', 'kkkkkKKkkkkk', 'kkkkk..kkkkk', 'kkkk....kkkk'],
  boot: ['.ttt.', '.ttt.', '.ttt.', '.tttt', 'ttttt', 'TTTTT'],
  trousers: [
    'cCcnccCccncc', 'ccccCcccnccC', 'cnCcc..cCccc', 'cccnc..ccnCc', 'cCccc..cCccc',
    'ccnCc..ccncc', 'cCcc....cncc', 'ccnc....cccC', 'cccC....Cncc', 'cncc....ccCc',
    'cccc....cccc', 'CCCC....CCCC'
  ]
};
const CAMO_TILE = ['cCcncc', 'ccnccC', 'nccCcc', 'cCccnc', 'ccncCc', 'Cccccn'];

/** Gear piece → local sprite position on the recruit buffer and debris behavior. */
const GEAR_PIECES = {
  helmet: { sprite: 'helmet', x: 17, y: 2, vmax: 0.05, vx: -0.03 },
  flak: { sprite: 'flak', x: 15, y: 13, vmax: 0.045, vx: 0.03 },
  belt: { sprite: 'belt', x: 16, y: 22, vmax: 0.03, vx: -0.035 },
  trousers: { sprite: 'trousers', x: 16, y: 24, vmax: 0.02, vx: 0.04 }
};
/** Where the execute sparkle sits for each piece (local coords). */
const GEAR_ANCHORS = {
  helmet: [27, 1],
  flak: [31, 15],
  belt: [30, 22],
  boots: [33, 40],
  trousers: [31, 31]
};
/** Two-hand reach targets (local coords) for each piece. */
const REACH_TARGETS = {
  helmet: [[19, 9], [24, 9]],
  flak: [[15, 18], [28, 18]],
  belt: [[20, 23], [23, 23]],
  boots: [[12, 36], [31, 36]],
  trousers: [[16, 26], [27, 26]],
  surface: [[17, -5], [26, -5]]
};

function gearKind(step) {
  const label = String(step.label).toUpperCase();
  return ['helmet', 'flak', 'belt', 'boots', 'trousers', 'surface'].find(k => label.includes(k.toUpperCase())) ?? 'surface';
}

function buildGearWorld() {
  const { WORLD_H, SURF, FLOOR, LWALL, RWALL, LADDER_X } = GEAR;
  const DECK = SURF - 8;
  const { canvas, ctx: g } = createBuffer(W, WORLD_H);
  px(g, 0, 0, '#1b2238', W, DECK);
  for (let x = 10; x < W; x += 36) {
    px(g, x, 3, '#f0e6b0', 6, 1);
    px(g, x - 2, 4, '#2c3450', 10, 1);
  }
  px(g, 0, DECK - 4, '#262e48', W, 4);
  px(g, 0, DECK, '#d6dce2', W, 1);
  px(g, 0, DECK + 1, '#aab2ba', W, 5);
  g.fillStyle = '#959da5';
  for (let x = 0; x < W; x += 8) g.fillRect(x, DECK + 1, 1, 5);
  px(g, 0, SURF - 2, '#cfd6dc', W, 1);
  px(g, 0, SURF - 1, '#0f1822', W, 1);

  fillBands(g, 0, SURF, FLOOR, W, '#2f84cc', '#0b2a55', 6);

  tileGrid(g, 0, FLOOR, W, WORLD_H - FLOOR, '#4d7fa6', '#36668c', 5);
  px(g, 74, FLOOR + 1, '#14223f', 14, 3);
  g.fillStyle = '#5a6a80';
  for (let x = 75; x < 88; x += 3) g.fillRect(x, FLOOR + 1, 1, 3);

  tileGrid(g, 0, DECK, LWALL, WORLD_H - DECK, '#6f9cbc', '#5583a6');
  tileGrid(g, RWALL, DECK, W - RWALL, WORLD_H - DECK, '#6f9cbc', '#5583a6');
  px(g, 0, DECK, '#e4e8ec', LWALL, 1);
  px(g, RWALL, DECK, '#e4e8ec', W - RWALL, 1);
  px(g, LWALL - 3, SURF - 2, '#0d1620', 3, 4);
  px(g, RWALL, SURF - 2, '#0d1620', 3, 4);
  px(g, 0, SURF + 5, '#14141f', 12, 9);
  drawPixelText(g, '4M', 2, SURF + 7, '#e8e8f0');

  // Depth tint on the side walls below the surface
  for (let y = SURF; y < WORLD_H; y++) {
    g.fillStyle = `rgba(8, 36, 80, ${(((y - SURF) / (WORLD_H - SURF)) * 0.55).toFixed(3)})`;
    g.fillRect(0, y, LWALL, 1);
    g.fillRect(RWALL, y, W - RWALL, 1);
  }

  // Ladder down the right wall, shaded darker with depth
  const rail = rgbOf('#c8d0d8');
  const deep = rgbOf('#2a4a70');
  const railAt = y => hex(rail.map((v, i) => lerp(v, deep[i], clamp((y - SURF) / (WORLD_H - SURF), 0, 1) * 0.8)));
  for (const rx of [LADDER_X, LADDER_X + 7]) {
    px(g, rx, DECK - 6, '#c8d0d8', RWALL - rx, 1);
    for (let y = DECK - 6; y < SURF + 44; y++) {
      px(g, rx, y, railAt(y));
      px(g, rx + 1, y, shadeRgb(railAt(y)));
    }
  }
  for (let y = SURF + 6; y < SURF + 44; y += 7) px(g, LADDER_X + 1, y, railAt(y), 6, 1);
  return canvas;
}

/** @returns {import('../lib/minigameKit.js').MinigameScene} */
export function createGearShedScene() {
  let stage = null;
  let world = null;
  let rb = null;
  let lay = null;
  let scratch = null;
  let sprites = null;
  let colors = null;
  let camoPattern = null;
  let info = null;
  let syncMeter = () => {};
  let drain = 0;
  const parts = createParticles();
  const debris = [];
  const worn = { helmet: true, flak: true, belt: true, boots: true, trousers: true };
  let t = 0;
  let air = 1;
  let camY = GEAR.CAM_Y;
  let jetT = 0;
  let noseT = 900;

  const s = {
    rx: 60, ry: 40, gear: null, hl: null,
    reach: 0, reachTarget: 0, reachRate: 0.002,
    wobbleT: 0, head: 'hold', headT: 0, kp: 0,
    mode: 'hold', modeT: 0, ry0: 40, broke: false
  };

  const surfaceAt = x => GEAR.SURF + Math.round(Math.sin(x * 0.18 + t * 0.004));

  function origin() {
    const wob = s.wobbleT > 0 ? Math.round(Math.sin(t * 0.06) * 2) : 0;
    const bob = s.mode === 'hold' ? Math.round(Math.sin(t * 0.003)) : 0;
    return [Math.round(s.rx - RB_W / 2) + wob, Math.round(s.ry) + bob];
  }

  function bootsT() {
    return s.gear === 'boots' ? easeInOut(s.reach) : 0;
  }

  function legPts() {
    const tuck = bootsT();
    const amp = s.mode === 'hold' ? 1 : 1.8;
    return [-1, 1].map(side => {
      const ph = s.kp + (side < 0 ? 0 : Math.PI);
      const thighKick = Math.PI / 2 - side * 0.1 + side * 0.09 * Math.sin(ph) * amp;
      const shinKick = thighKick - side * 0.05 + side * 0.12 * Math.sin(ph - 1) * amp;
      const thigh = lerp(thighKick, Math.PI / 2 - side * 0.9, tuck);
      const shin = lerp(shinKick, Math.PI / 2 - side * 0.15, tuck);
      const hx = side < 0 ? 19 : 24;
      const hy = 26;
      const kx = hx + 8 * Math.cos(thigh);
      const ky = hy + 8 * Math.sin(thigh);
      return { side, hx, hy, kx, ky, fx: kx + 8 * Math.cos(shin), fy: ky + 8 * Math.sin(shin) };
    });
  }

  function idleHands() {
    const flail = s.wobbleT > 0 ? 2.5 : 1;
    const ph = t * 0.006 * (s.wobbleT > 0 ? 3 : 1);
    if (s.mode === 'rise' && !s.broke) {
      const k = (t % 320) / 320;
      return [[lerp(17, 5, k), lerp(-5, 28, k)], [lerp(26, 38, k), lerp(-5, 28, k)]];
    }
    return [
      [8 + 2 * flail * Math.sin(ph), 24 + 1.5 * flail * Math.cos(ph)],
      [35 - 2 * flail * Math.sin(ph), 24 + 1.5 * flail * Math.cos(ph)]
    ];
  }

  function handTargets() {
    const idle = idleHands();
    if (!s.gear || s.reach <= 0) return idle;
    const k = easeInOut(s.reach);
    const tgt = REACH_TARGETS[s.gear];
    return idle.map((p, i) => [lerp(p[0], tgt[i][0], k), lerp(p[1], tgt[i][1], k)]);
  }

  function armIK(sx, sy, tx, ty, outward) {
    const L1 = 8;
    const L2 = 7;
    let dx = tx - sx;
    let dy = ty - sy;
    const dist = Math.hypot(dx, dy) || 1;
    const d = clamp(dist, 2, L1 + L2 - 0.01);
    dx /= dist; dy /= dist;
    const a = (L1 * L1 - L2 * L2 + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
    let nx = -dy;
    let ny = dx;
    if (Math.sign(nx || 1) !== outward) { nx = -nx; ny = -ny; }
    return {
      ex: sx + dx * a + nx * h, ey: sy + dy * a + ny * h,
      hx: sx + dx * d, hy: sy + dy * d
    };
  }

  function layer(name, draw, camo = false) {
    const hl = s.hl === name && t % 450 < 300;
    if (!hl && !camo) { draw(rb.ctx); return; }
    lay.ctx.clearRect(0, 0, RB_W, RB_H);
    draw(lay.ctx);
    if (camo) {
      lay.ctx.globalCompositeOperation = 'source-atop';
      lay.ctx.fillStyle = camoPattern;
      lay.ctx.fillRect(0, 0, RB_W, RB_H);
      lay.ctx.globalCompositeOperation = 'source-over';
    }
    if (hl) drawOutline(rb.ctx, lay.canvas, 0, 0, ACCENT, scratch);
    rb.ctx.drawImage(lay.canvas, 0, 0);
  }

  function drawRecruit() {
    const r = rb.ctx;
    r.clearRect(0, 0, RB_W, RB_H);
    const cr = Math.round(4 * bootsT());
    const legs = legPts();

    layer('legs', g => {
      for (const l of legs) {
        drawLine(g, l.hx, l.hy, l.kx, l.ky, colors.skin, 3);
        drawLine(g, l.kx, l.ky, l.fx, l.fy, colors.skinShade, 3);
        px(g, l.fx - 1 + l.side, l.fy, colors.skin, 3, 2);
      }
    });
    layer('shorts', g => g.drawImage(sprites.shorts, 16, 23));
    if (worn.trousers) {
      layer('trousers', g => {
        for (const l of legs) {
          drawLine(g, l.hx, l.hy, l.kx, l.ky, '#556b2f', 4);
          drawLine(g, l.kx, l.ky, lerp(l.kx, l.fx, 0.78), lerp(l.ky, l.fy, 0.78), '#556b2f', 4);
        }
        px(g, 16, 23, '#556b2f', 12, 4);
      }, true);
    }
    if (worn.boots) {
      layer('boots', g => {
        for (const l of legs) {
          drawLine(g, lerp(l.kx, l.fx, 0.68), lerp(l.ky, l.fy, 0.68), l.fx, l.fy, GEAR_PAL.t, 4);
          px(g, l.fx - 2 + l.side, l.fy, GEAR_PAL.t, 4, 2);
          px(g, l.fx - 2 + l.side, l.fy + 2, GEAR_PAL.T, 4, 1);
        }
      });
    }
    layer('blouse', g => g.drawImage(sprites.blouse, 16, 12 + cr));
    if (worn.belt) layer('belt', g => g.drawImage(sprites.belt, 16, 22));
    if (worn.flak) layer('flak', g => g.drawImage(sprites.flak, 15, 13 + cr));
    layer('head', g => g.drawImage(sprites.heads[s.head], 18, 4 + cr));
    if (worn.helmet) layer('helmet', g => g.drawImage(sprites.helmet, 17, 2 + cr));

    const hands = handTargets();
    [[16, -1], [27, 1]].forEach(([sx, outward], i) => {
      const a = armIK(sx, 13 + cr, hands[i][0], hands[i][1], outward);
      drawLine(r, sx, 13 + cr, a.ex, a.ey, '#556b2f', 2);
      drawLine(r, a.ex, a.ey, a.hx, a.hy, '#4d5a28', 2);
      px(r, a.hx - 1, a.hy - 1, colors.skin, 2, 2);
    });

    // Water tint below the local waterline
    const [, oy] = origin();
    const localSurf = clamp(GEAR.SURF - oy, 0, RB_H);
    r.globalCompositeOperation = 'source-atop';
    r.fillStyle = 'rgba(30, 110, 190, 0.3)';
    r.fillRect(0, localSurf, RB_W, RB_H - localSurf);
    r.globalCompositeOperation = 'source-over';
  }

  function dropGear(name) {
    worn[name] = false;
    const [ox, oy] = origin();
    const spawn = (sprite, x, y, vx, vmax) => {
      debris.push({ sprite, x, y, vx, vy: 0.005, vmax, rot: 0, vr: (Math.random() - 0.5) * 0.004 });
      for (let i = 0; i < 6; i++) bubble(parts, x + Math.random() * sprite.width, y + Math.random() * sprite.height);
    };
    if (name === 'boots') {
      for (const l of legPts()) {
        spawn(sprites.boot, ox + l.fx - 2, oy + l.fy - 4, l.side * 0.035, 0.06);
      }
      return;
    }
    const piece = GEAR_PIECES[name];
    const sprite = sprites[piece.sprite];
    spawn(sprite, ox + piece.x, oy + piece.y, piece.vx, piece.vmax);
  }

  function struggle(airLoss) {
    s.wobbleT = 700;
    s.head = 'strain';
    s.headT = 700;
    const [ox, oy] = origin();
    for (let i = 0; i < 10; i++) bubble(parts, ox + 20 + (Math.random() - 0.5) * 8, oy + 10 + Math.random() * 4, { size: Math.random() < 0.4 ? 2 : 1 });
    air = Math.max(0.03, air - airLoss);
  }

  function update(dt) {
    s.kp += dt * (s.mode === 'hold' ? 0.008 : 0.02);
    if (s.reach < s.reachTarget) s.reach = Math.min(s.reachTarget, s.reach + s.reachRate * dt);
    else if (s.reach > s.reachTarget) s.reach = Math.max(s.reachTarget, s.reach - dt / 300);
    if (s.wobbleT > 0) s.wobbleT -= dt;
    if (s.headT > 0) {
      s.headT -= dt;
      if (s.headT <= 0 && s.head === 'strain') s.head = 'hold';
    }

    if (s.mode === 'rise' || s.mode === 'riseFail') {
      s.modeT += dt;
      const k = easeOut(clamp(s.modeT / 1000, 0, 1));
      const target = s.mode === 'rise' ? GEAR.SURF - 12 : s.ry0 - 14;
      s.ry = lerp(s.ry0, target, k);
      if (s.mode === 'rise') camY = lerp(GEAR.CAM_Y, 2, k);
      if (s.mode === 'rise' && !s.broke && s.ry + 4 <= GEAR.SURF) {
        s.broke = true;
        s.head = 'gasp';
        air = 1;
        splash(parts, s.rx - 6, GEAR.SURF, 8, 1.4);
        splash(parts, s.rx + 6, GEAR.SURF, 8, 1.4);
        splash(parts, s.rx, GEAR.SURF, 6, 1.8);
      }
      if (s.mode === 'rise' && s.broke && Math.random() < dt * 0.01) splash(parts, s.rx + (Math.random() - 0.5) * 20, GEAR.SURF, 1, 0.5);
    }

    if (!s.broke) air = Math.max(0.03, air - drain * dt);
    if (air < 0.25 && s.head === 'hold') s.head = 'strain';
    syncMeter(air);

    // Bubble column from the floor jet, and slow leaks from the recruit's nose
    jetT -= dt;
    if (jetT <= 0) {
      jetT = 70 + Math.random() * 60;
      bubble(parts, GEAR.JET_X + (Math.random() - 0.5) * 3, GEAR.FLOOR - 1, {
        size: Math.random() < 0.2 ? 3 : Math.random() < 0.5 ? 2 : 1, vy: -(0.03 + Math.random() * 0.03)
      });
    }
    noseT -= dt;
    if (noseT <= 0 && !s.broke) {
      noseT = 800 + Math.random() * 500;
      const [ox, oy] = origin();
      bubble(parts, ox + 21, oy + 9);
      if (Math.random() < 0.5) bubble(parts, ox + 22, oy + 10);
    }
    if (s.mode === 'rise' && !s.broke && Math.random() < dt * 0.05) {
      const [ox, oy] = origin();
      bubble(parts, ox + 14 + Math.random() * 16, oy + 30 + Math.random() * 12, { size: 2 });
    }

    for (let i = debris.length - 1; i >= 0; i--) {
      const d = debris[i];
      const resting = d.y + d.sprite.height >= GEAR.FLOOR + 2;
      if (resting) {
        d.y = GEAR.FLOOR + 2 - d.sprite.height;
        d.vx *= Math.exp(-dt / 200);
        d.vy = 0;
        d.vr = 0;
      } else {
        d.vy = Math.min(d.vmax, d.vy + 0.00004 * dt);
        d.vx *= Math.exp(-dt / 1500);
        d.rot += d.vr * dt;
        if (Math.random() < dt * 0.01) bubble(parts, d.x + d.sprite.width / 2, d.y);
      }
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      if (d.x < -30 || d.x > W + 30) debris.splice(i, 1);
    }
  }

  function render() {
    const { ctx } = stage;
    const cy = Math.round(camY);
    ctx.drawImage(world, 0, -cy);

    // Light rays from the surface
    for (let i = 0; i < 4; i++) {
      const x0 = 16 + i * 34 + Math.sin(t * 0.0005 + i * 1.7) * 5;
      for (let y = GEAR.SURF + 1; y < GEAR.FLOOR; y++) {
        const depth = (y - GEAR.SURF) / (GEAR.FLOOR - GEAR.SURF);
        if (depth > 0.85) break;
        ctx.fillStyle = `rgba(190, 235, 255, ${(0.16 * (1 - depth / 0.85)).toFixed(3)})`;
        ctx.fillRect(Math.round(x0 + (y - GEAR.SURF) * 0.35), y - cy, Math.round(5 + depth * 8), 1);
      }
    }
    // Caustic flecks on the floor
    ctx.fillStyle = 'rgba(160, 220, 255, 0.5)';
    for (let x = GEAR.LWALL; x < GEAR.RWALL; x++) {
      if (Math.sin(x * 0.4 + t * 0.003) + Math.sin(x * 0.13 - t * 0.002) > 1.5) ctx.fillRect(x, GEAR.FLOOR + 1 - cy, 1, 1);
    }

    // Underside of the surface
    for (let x = GEAR.LWALL; x < GEAR.RWALL; x++) {
      const y = surfaceAt(x) - cy;
      if (y > GEAR.SURF - cy) px(ctx, x, GEAR.SURF - cy, '#0f1822');
      px(ctx, x, y, '#cdeeff');
      px(ctx, x, y + 1, '#6fb8e8');
    }

    for (const d of debris) {
      const cx = Math.round(d.x + d.sprite.width / 2);
      const cyy = Math.round(d.y + d.sprite.height / 2) - cy;
      ctx.save();
      ctx.translate(cx, cyy);
      ctx.rotate(quant(d.rot, 16));
      ctx.drawImage(d.sprite, -Math.round(d.sprite.width / 2), -Math.round(d.sprite.height / 2));
      ctx.restore();
    }

    drawRecruit();
    const [ox, oy] = origin();
    ctx.drawImage(rb.canvas, ox, oy - cy);

    drawParticles(ctx, parts, 0, cy);

    if (s.hl && s.hl !== 'surface') {
      const [ax, ay] = GEAR_ANCHORS[s.hl];
      drawSparkle(ctx, ox + ax, oy + ay - cy, t);
    }
    if (s.hl === 'surface' && t % 450 < 300) {
      for (let x = s.rx - 26; x < s.rx + 26; x += 4) px(ctx, x, GEAR.SURF - cy, ACCENT, 2, 1);
      const ax = Math.round(s.rx);
      const ay = oy - cy - 6;
      px(ctx, ax, ay - 3, ACCENT, 1, 1);
      px(ctx, ax - 1, ay - 2, ACCENT, 3, 1);
      px(ctx, ax - 2, ay - 1, ACCENT, 5, 1);
      px(ctx, ax, ay, ACCENT, 1, 3);
    }

    drawAirHud(ctx, air, t);
  }

  return {
    holdMs: 1500,

    mount(el, character, ctxInfo) {
      info = ctxInfo;
      syncMeter = meterSync(info);
      const cycle = (info?.prepMs ?? 1700) + (info?.windowMs ?? 2400) + (info?.resultMs ?? 700);
      drain = 0.55 / ((info?.steps?.length ?? 6) * cycle);
      colors = recruitColors(character);
      const pal = { ...GEAR_PAL, s: colors.skin, S: colors.skinShade, h: colors.hair, H: colors.hairShade };
      sprites = Object.fromEntries(Object.entries(GEAR_SPRITES).map(([k, rows]) => [k, spriteFromRows(rows, pal)]));
      sprites.heads = Object.fromEntries(Object.entries(GEAR_HEADS).map(([k, rows]) => [k, spriteFromRows(rows, pal)]));
      stage = createPixelStage(el, W, H);
      el.classList.add('mg-stage--pool');
      rb = createBuffer(RB_W, RB_H);
      lay = createBuffer(RB_W, RB_H);
      scratch = createBuffer(RB_W, RB_H);
      camoPattern = stage.ctx.createPattern(spriteFromRows(CAMO_TILE, CAMO), 'repeat');
      world = buildGearWorld();
      for (let i = 0; i < 24; i++) {
        bubble(parts, GEAR.JET_X + (Math.random() - 0.5) * 3, GEAR.SURF + 4 + Math.random() * (GEAR.FLOOR - GEAR.SURF - 6), { size: 1 + Math.floor(Math.random() * 3) });
      }
      syncMeter(air);
      render();
    },

    onPrep(step) {
      s.gear = gearKind(step);
      s.hl = null;
      s.reachTarget = 1;
      s.reachRate = 1 / ((info?.prepMs ?? 1700) * 0.75);
    },

    onExecute() {
      s.hl = s.gear;
      s.reach = 1;
    },

    onHit() {
      const g = s.gear;
      s.hl = null;
      if (g === 'surface') {
        s.mode = 'rise';
        s.modeT = 0;
        s.ry0 = s.ry;
        s.reachTarget = 0;
        s.reach = 0;
        return;
      }
      dropGear(g);
      s.reachTarget = 0;
    },

    onMiss() {
      const g = s.gear;
      s.hl = null;
      s.reachTarget = 0;
      if (g === 'surface') {
        s.mode = 'riseFail';
        s.modeT = 0;
        s.ry0 = s.ry;
        struggle(0.1);
        return;
      }
      struggle(0.08);
    },

    onTick(dt) {
      if (!stage) return;
      dt = Math.min(dt, 50);
      t += dt;
      update(dt);
      updateParticles(parts, dt, surfaceAt);
      render();
    },

    dispose() {
      parts.clear();
      debris.length = 0;
      stage?.canvas.remove();
      stage = null;
    }
  };
}
