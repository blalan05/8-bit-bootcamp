/**
 * Small canvas pixel-art toolkit for mini-game scenes. Art is drawn at native resolution
 * on one canvas and scaled up by CSS (image-rendering: pixelated).
 * Sprites are rows of palette chars ('.' = transparent), same idea as runInspectionBoard.
 */
import { getSkinToneById, getHairColorById } from '../../../character/appearance.js';

/** Create the scene canvas inside `el`. */
export function createPixelStage(el, width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.className = 'mg-stage-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  el.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { canvas, ctx, width, height };
}

/** Offscreen canvas for compositing sprites. */
export function createBuffer(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { canvas, ctx };
}

/** Rasterize palette rows to a canvas. */
export function spriteFromRows(rows, palette) {
  const w = Math.max(...rows.map(r => r.length));
  const { canvas, ctx } = createBuffer(w, rows.length);
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const color = palette[row[x]];
      if (!color) continue;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  });
  return canvas;
}

/** Solid-color silhouette of a sprite. Pass a reusable `scratch` buffer to avoid allocating per frame. */
export function silhouette(sprite, color, scratch) {
  const buf = scratch ?? createBuffer(sprite.width, sprite.height);
  const { ctx } = buf;
  ctx.clearRect(0, 0, buf.canvas.width, buf.canvas.height);
  ctx.globalCompositeOperation = 'source-over';
  ctx.drawImage(sprite, 0, 0);
  ctx.globalCompositeOperation = 'source-in';
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, sprite.width, sprite.height);
  ctx.globalCompositeOperation = 'source-over';
  return buf.canvas;
}

/** Draw a 1px outline around a sprite at integer position. */
export function drawOutline(ctx, sprite, x, y, color, scratch) {
  const sil = silhouette(sprite, color, scratch);
  for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) ctx.drawImage(sil, x + dx, y + dy);
}

/** Bresenham line made of size×size squares. */
export function drawLine(ctx, x0, y0, x1, y1, color, size = 1) {
  x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
  const dx = Math.abs(x1 - x0);
  const dy = -Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  const off = Math.floor(size / 2);
  let err = dx + dy;
  ctx.fillStyle = color;
  for (;;) {
    ctx.fillRect(x0 - off, y0 - off, size, size);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x0 += sx; }
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
}

export function px(ctx, x, y, color, w = 1, h = 1) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), w, h);
}

const GLYPHS = {
  0: ['111', '101', '101', '101', '111'],
  1: ['010', '110', '010', '010', '111'],
  2: ['111', '001', '111', '100', '111'],
  3: ['111', '001', '011', '001', '111'],
  4: ['101', '101', '111', '001', '001'],
  5: ['111', '100', '111', '001', '111'],
  6: ['111', '100', '111', '101', '111'],
  7: ['111', '001', '010', '010', '010'],
  8: ['111', '101', '111', '101', '111'],
  9: ['111', '101', '111', '001', '111'],
  A: ['010', '101', '111', '101', '101'],
  F: ['111', '100', '110', '100', '100'],
  I: ['111', '010', '010', '010', '111'],
  M: ['10001', '11011', '10101', '10001', '10001'],
  R: ['110', '101', '110', '101', '101'],
  T: ['111', '010', '010', '010', '010']
};

export function pixelTextWidth(text) {
  let w = 0;
  for (const ch of String(text).toUpperCase()) w += (GLYPHS[ch]?.[0].length ?? 2) + 1;
  return Math.max(0, w - 1);
}

/** Tiny 3×5 pixel font (digits + A F I M R T). Returns drawn width. */
export function drawPixelText(ctx, text, x, y, color) {
  ctx.fillStyle = color;
  let cx = Math.round(x);
  for (const ch of String(text).toUpperCase()) {
    const g = GLYPHS[ch];
    if (!g) { cx += 3; continue; }
    g.forEach((row, ry) => {
      for (let rx = 0; rx < row.length; rx++) if (row[rx] === '1') ctx.fillRect(cx + rx, Math.round(y) + ry, 1, 1);
    });
    cx += g[0].length + 1;
  }
  return cx - Math.round(x) - 1;
}

function toCss(color) {
  return typeof color === 'number' ? `#${color.toString(16).padStart(6, '0')}` : color;
}

/** Scale an #rrggbb color's channels (f < 1 darkens, f > 1 lightens). */
export function shade(css, f) {
  const n = parseInt(css.slice(1), 16);
  const ch = s => Math.max(0, Math.min(255, Math.round(((n >> s) & 255) * f)));
  return `#${((ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).padStart(6, '0')}`;
}

/** The player's recruit colors from character.appearance. */
export function recruitColors(character) {
  const appearance = character?.appearance ?? {};
  const skin = toCss(getSkinToneById(appearance.skinToneId).color);
  const hair = toCss(getHairColorById(appearance.hairColorId).color);
  return {
    skin,
    skinShade: shade(skin, 0.75),
    skinLight: shade(skin, 1.12),
    hair,
    hairShade: shade(hair, 0.7)
  };
}

/** Simple particle pool: bubbles, splashes, debris. */
export function createParticles() {
  const list = [];
  return {
    list,
    add(p) { list.push({ life: 1000, age: 0, vx: 0, vy: 0, g: 0, size: 1, ...p }); },
    update(dt, fn) {
      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        p.age += dt;
        p.vy += p.g * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (fn?.(p) === false || p.age >= p.life) list.splice(i, 1);
      }
    },
    clear() { list.length = 0; }
  };
}

export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const easeOut = t => 1 - (1 - t) * (1 - t);
export const easeInOut = t => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2);
