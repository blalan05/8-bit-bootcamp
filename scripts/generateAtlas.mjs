/**
 * generateAtlas.mjs - Packs all sprite definitions into a single atlas.png + atlas.json.
 *
 * Usage: bun run generate:art  (or: bun scripts/generateAtlas.mjs)
 *
 * No dependencies: rasterizes pixel-grid JSON using the art bible palette and
 * writes the PNG by hand (zlib is built into node).
 *
 * Note: the game does NOT require this artifact at runtime — src/art/assetLoader.js
 * rasterizes the same definitions in the browser. This script exists to export a
 * conventional atlas for inspection or future production use.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import zlib from 'node:zlib';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const artDir = join(root, 'assets', 'art');
const defsDir = join(artDir, 'spriteDefinitions');

const artBible = JSON.parse(readFileSync(join(artDir, 'artBible.json'), 'utf8'));

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16)
  ];
}

const defs = readdirSync(defsDir)
  .filter(f => f.endsWith('.json'))
  .map(f => JSON.parse(readFileSync(join(defsDir, f), 'utf8')));

// The runtime rasterizer silently clips or pads malformed grids, so catch them here.
const problems = [];
for (const def of defs) {
  if (def.pixels.length !== def.height) problems.push(`${def.id}: ${def.pixels.length} rows, declared height ${def.height}`);
  def.pixels.forEach((row, y) => {
    if (row.length !== def.width) problems.push(`${def.id}: row ${y} is ${row.length} px, declared width ${def.width}`);
  });
  const unknown = new Set([...def.pixels.join('')].filter(ch => !(ch in artBible.palette)));
  if (unknown.size) problems.push(`${def.id}: unknown palette chars "${[...unknown].join('')}"`);
}
if (problems.length) {
  console.error(`Malformed sprite definitions:\n  ${problems.join('\n  ')}`);
  process.exit(1);
}

// Shelf packing: sort tallest first, fill rows up to atlas width
const ATLAS_WIDTH = 128;
defs.sort((a, b) => b.height - a.height);

let shelfY = 0;
let shelfHeight = 0;
let cursorX = 0;
const frames = {};

for (const def of defs) {
  if (cursorX + def.width > ATLAS_WIDTH) {
    shelfY += shelfHeight;
    cursorX = 0;
    shelfHeight = 0;
  }
  frames[def.id] = { x: cursorX, y: shelfY, w: def.width, h: def.height };
  cursorX += def.width;
  shelfHeight = Math.max(shelfHeight, def.height);
}
const atlasHeight = shelfY + shelfHeight;

// Paint RGBA buffer
const pixels = new Uint8Array(ATLAS_WIDTH * atlasHeight * 4);
for (const def of defs) {
  const frame = frames[def.id];
  for (let y = 0; y < def.height; y++) {
    const row = def.pixels[y] ?? '';
    for (let x = 0; x < def.width; x++) {
      const ch = row[x] ?? '.';
      const entry = artBible.palette[ch];
      if (!entry || entry.color === null) continue;
      const [r, g, b] = hexToRgb(entry.color);
      const i = ((frame.y + y) * ATLAS_WIDTH + frame.x + x) * 4;
      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = 255;
    }
  }
}

// --- Minimal PNG encoder (RGBA, filter 0) ---
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

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(ATLAS_WIDTH, 0);
ihdr.writeUInt32BE(atlasHeight, 4);
ihdr[8] = 8;  // bit depth
ihdr[9] = 6;  // color type RGBA
// compression, filter, interlace = 0

// Prepend filter byte 0 to each scanline
const raw = Buffer.alloc(atlasHeight * (1 + ATLAS_WIDTH * 4));
for (let y = 0; y < atlasHeight; y++) {
  const rowStart = y * (1 + ATLAS_WIDTH * 4);
  raw[rowStart] = 0;
  Buffer.from(pixels.buffer, y * ATLAS_WIDTH * 4, ATLAS_WIDTH * 4).copy(raw, rowStart + 1);
}

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(raw)),
  chunk('IEND', Buffer.alloc(0))
]);

writeFileSync(join(artDir, 'atlas.png'), png);
writeFileSync(join(artDir, 'atlas.json'), JSON.stringify({ width: ATLAS_WIDTH, height: atlasHeight, frames }, null, 2));

console.log(`atlas.png (${ATLAS_WIDTH}x${atlasHeight}) with ${defs.length} frames written to assets/art/`);
