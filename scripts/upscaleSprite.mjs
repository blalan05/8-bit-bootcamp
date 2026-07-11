/**
 * Doubles a sprite definition (each pixel -> 2x2 block).
 * Usage: node scripts/upscaleSprite.mjs assets/art/spriteDefinitions/recruit_civilian.json
 */

import { readFileSync, writeFileSync } from 'node:fs';

const path = process.argv[2];
if (!path) {
  console.error('Usage: node scripts/upscaleSprite.mjs <sprite.json>');
  process.exit(1);
}

const def = JSON.parse(readFileSync(path, 'utf8'));
const pixels = [];

for (const row of def.pixels) {
  const wide = [...row].flatMap(ch => [ch, ch]).join('');
  pixels.push(wide, wide);
}

const next = {
  ...def,
  width: def.width * 2,
  height: def.height * 2,
  pixels
};

for (const [i, row] of next.pixels.entries()) {
  if (row.length !== next.width) {
    console.error(`Row ${i} width ${row.length}, expected ${next.width}`);
    process.exit(1);
  }
}

writeFileSync(path, `${JSON.stringify(next, null, 2)}\n`);
console.log(`Upscaled ${def.id} to ${next.width}x${next.height}`);
