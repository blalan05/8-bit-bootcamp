/**
 * Writes the 32x48 Dress Blues NCO sprite (2x character resolution).
 * Run: bun scripts/buildNcoSprite.mjs
 *
 * The figure is front-facing and symmetric: each row is authored as the left
 * half (16 px) and mirrored, so edits stay centered.
 */

import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const W = 32;
const H = 48;
const HALF = W / 2;

/** Mirror a 16-px left half into a full 32-px row. */
function mirror(left) {
  if (left.length !== HALF) throw new Error(`Half row must be ${HALF} px: "${left}"`);
  return left + [...left].reverse().join('');
}

const blank = '.'.repeat(HALF);

const halves = [
  blank,
  '..........oooooo', // barracks cover crown
  '........oowwwwww',
  '.......owwwwwwwy', // eagle, globe & anchor
  '.......owwwwwwyy',
  '.......oWWWWWWWW',
  '........oNNNNNNN', // cap band
  '.........ooooooo', // visor
  '..........oSSSSS', // visor shadow
  '..........osooss', // brows
  '.........oSswoss', // ears + eyes
  '.........oSssssS', // nose
  '..........osssss',
  '..........osssSo', // mouth
  '...........oSsss', // chin
  '............ooSS', // neck
  '...........oNyNq', // standing collar + collar device
  '......oooooNnnnN', // shoulders
  '.....onnnnnNnnny', // gold buttons down the placket
  '....onnnnNnnnnnN',
  '....oyyyyNnnnnnN', // sergeant chevrons
  '....oqqqqNnnnnny',
  '....oyyyyNnnnnnN',
  '....oqqqqNnnnnnN',
  '....oyyyyNnnnnny',
  '....onnnnNnnnnnN',
  '....onnnnNwwwwyy', // white belt + buckle
  '....onnnnNwwwwyy',
  '....onnnnNnnnnnN',
  '....oqqqqNnnnnny', // cuffs
  '....ossssoNnnnnN', // hands
  '....oSssSoNnnnnN',
  '.....ooooooooooo', // coat hem
  '........oqmmmmmm', // trousers + blood stripe
  '........oqmmmmMo',
  '........oqmmmmMo',
  '........oqmmmmMo',
  '........oqmmmmMo',
  '........oqmmmmMo',
  '........oqmmmmMo',
  '........oqmmmmMo',
  '.......oooooooo.', // shoes
  '.......oWoooooo.',
  '.......oooooooo.',
];

const rows = halves.map(mirror);

/** Overwrite pixels starting at (x, y); used for asymmetric details. */
function paint(x, y, pixels) {
  rows[y] = rows[y].slice(0, x) + pixels + rows[y].slice(x + pixels.length);
}

// Ribbon rack over the wearer's left breast (viewer's right)
paint(18, 21, 'qypq');
paint(18, 22, 'gqyp');

while (rows.length < H) rows.push('.'.repeat(W));
if (rows.length > H) throw new Error(`Sprite is ${rows.length} rows, max ${H}`);

const def = {
  id: 'npc/nco',
  category: 'npc',
  width: W,
  height: H,
  pixels: rows
};

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'art', 'spriteDefinitions', 'npc_nco.json');
writeFileSync(out, `${JSON.stringify(def, null, 2)}\n`);
console.log(`Wrote ${def.id} ${W}x${H}`);
