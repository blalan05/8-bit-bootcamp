/**
 * Rasterize the bootcamp app icon from the art-bible palette and write
 * favicon, Apple touch icon, and PWA icons into public/.
 *
 * Usage: bun scripts/generateIcons.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

const palette = {
  '.': [0x1c, 0x25, 0x40],
  'o': [0x26, 0x26, 0x1e],
  'c': [0x6b, 0x73, 0x44],
  'C': [0x8a, 0x8f, 0x5a],
  'y': [0xff, 0xd9, 0x4a],
  's': [0xd8, 0xa8, 0x78],
  'd': [0xb8, 0x86, 0x58],
  'q': [0xb3, 0x20, 0x2e]
};

// 32×32 recruit bust. Subject sits inside the center 80% so a circular
// maskable crop still shows the cover, face, and shoulders.
const rows = [
  '................................',
  '................................',
  '..........oooooooooo............',
  '........ooCCCCCCCCCCoo..........',
  '........oCCCCCCCCCCCCo..........',
  '........oCCCCyyyyCCCCo..........',
  '........oCCCCCCCCCCCCo..........',
  '.......ooCCCCCCCCCCCCoo.........',
  '.....oooooooooooooooooooo.......',
  '.....o....................o.....',
  '....os..ssssssssssssssss..so....',
  '...osssssssssssssssssssssssso...',
  '...osssssssssssssssssssssssso...',
  '...ossssoosssssssssoossssssso...',
  '...ossssoosssssssssoossssssso...',
  '...osssssssssssssssssssssssso...',
  '...ossssssddddddddddsssssssso...',
  '....os..ssssssssssssssss..so....',
  '.....o......oooooooo......o.....',
  '.....oCCCCCCCCCCCCCCCCCCCCo.....',
  '....oCCCCCCCCCCCCCCCCCCCCCCo....',
  '....oCCCqqCCCCCCCCCCCCqqCCCo....',
  '...oCCCCCCCCCCCCCCCCCCCCCCCCo...',
  '...oCCCCCCCCCCCCCCCCCCCCCCCCo...',
  '...ooooooooooooooooooooooooo....',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................'
];

if (rows.length !== 32 || rows.some(row => row.length !== 32)) {
  const bad = rows
    .map((row, i) => (row.length === 32 ? null : `${i}:${row.length}`))
    .filter(Boolean);
  throw new Error(`Icon grid must be 32×32 (rows=${rows.length}, bad=${bad.join(',')})`);
}

function paint(grid) {
  const size = grid.length;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const rgb = palette[grid[y][x]];
      if (!rgb) throw new Error(`Unknown pixel '${grid[y][x]}' at ${x},${y}`);
      const i = (y * size + x) * 4;
      pixels[i] = rgb[0];
      pixels[i + 1] = rgb[1];
      pixels[i + 2] = rgb[2];
      pixels[i + 3] = 255;
    }
  }
  return pixels;
}

function scaleNearest(src, sw, sh, scale) {
  const dw = sw * scale;
  const dh = sh * scale;
  const dst = new Uint8Array(dw * dh * 4);
  for (let y = 0; y < dh; y++) {
    const sy = Math.floor(y / scale);
    for (let x = 0; x < dw; x++) {
      const sx = Math.floor(x / scale);
      const si = (sy * sw + sx) * 4;
      const di = (y * dw + x) * 4;
      dst[di] = src[si];
      dst[di + 1] = src[si + 1];
      dst[di + 2] = src[si + 2];
      dst[di + 3] = src[si + 3];
    }
  }
  return dst;
}

function padCenter(src, sw, sh, dw, dh, bg) {
  const dst = new Uint8Array(dw * dh * 4);
  for (let i = 0; i < dw * dh; i++) {
    dst[i * 4] = bg[0];
    dst[i * 4 + 1] = bg[1];
    dst[i * 4 + 2] = bg[2];
    dst[i * 4 + 3] = 255;
  }
  const ox = Math.floor((dw - sw) / 2);
  const oy = Math.floor((dh - sh) / 2);
  for (let y = 0; y < sh; y++) {
    for (let x = 0; x < sw; x++) {
      const si = (y * sw + x) * 4;
      const di = ((y + oy) * dw + (x + ox)) * 4;
      dst[di] = src[si];
      dst[di + 1] = src[si + 1];
      dst[di + 2] = src[si + 2];
      dst[di + 3] = src[si + 3];
    }
  }
  return dst;
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(width, height, pixels) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    const rowStart = y * (1 + width * 4);
    raw[rowStart] = 0;
    Buffer.from(pixels.buffer, pixels.byteOffset + y * width * 4, width * 4).copy(raw, rowStart + 1);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

function encodeIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = size === 256 ? 0 : size;
  entry[1] = size === 256 ? 0 : size;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

const bg = palette['.'];
const base = paint(rows);
const png32 = encodePng(32, 32, base);
const png192 = encodePng(192, 192, scaleNearest(base, 32, 32, 6));
const png512 = encodePng(512, 512, scaleNearest(base, 32, 32, 16));
const apple = encodePng(180, 180, padCenter(scaleNearest(base, 32, 32, 5), 160, 160, 180, 180, bg));
const maskable = encodePng(
  512,
  512,
  padCenter(scaleNearest(base, 32, 32, 12), 384, 384, 512, 512, bg)
);

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, 'favicon.png'), png32);
writeFileSync(join(publicDir, 'favicon.ico'), encodeIco(png32, 32));
writeFileSync(join(publicDir, 'apple-touch-icon.png'), apple);
writeFileSync(join(publicDir, 'pwa-192x192.png'), png192);
writeFileSync(join(publicDir, 'pwa-512x512.png'), png512);
writeFileSync(join(publicDir, 'maskable-512x512.png'), maskable);

console.log('Wrote favicon and PWA icons to public/');
