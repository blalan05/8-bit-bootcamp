/**
 * Writes the 32x48 Dress Blues NCO sprite (2x character resolution).
 * Run: node scripts/buildNcoSprite.mjs
 */

import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const W = 32;

/** Pad or trim a row to exactly W characters. */
function row(s) {
  if (s.length > W) return s.slice(0, W);
  return s.padEnd(W, '.');
}

const rows = [
  row(''), // 0 spacer
  row(''), // 1
  row('............hhhhhhhh'), // 2 hair
  row('..........hhhhhhhhhhhh'), // 3
  row('........hhhhsssssssshhhh'), // 4
  row('........hhsssssssssssshh'), // 5
  row('........oosssssssssssso'), // 6 face
  row('........ossossossosso'), // 7 eyes
  row('........ossossossosso'), // 8
  row('.......oossssssssssso'), // 9 jaw
  row('..........oosso'), // 10 neck
  row('.......oNNnnqqqqqqnnNNo'), // 11 collar
  row('......oNNnnqqqqqqqqnnNNo'), // 12 collar
  row('..sqyooNNnnnnqqyynnnnnNNoosqy'), // 13 shoulders + chevrons both sleeves
  row('..soNNnnnnqqyyqqnnnnNNoos'), // 14 coat
  row('..soNNnnnnqqyyqqnnnnNNoos'), // 15
  row('..soNNnnnnqqyyqqnnnnNNoos'), // 16
  row('..soNNnnnnnnnnnnnnnnNNoos'), // 17 torso
  row('..soNNnnnnnnnnnnnnnnNNoos'), // 18
  row('..soNNnnnnnnnnnnnnnnNNoos'), // 19
  row('..soNNnnnnnnnnnnnnnnNNoos'), // 20
  row('..soNNnnnnnnnnnnnnnnNNoos'), // 21
  row('..soNNnnnnnnnnnnnnnnNNoos'), // 22
  row('..soNNnnnnnnnnnnnnnnNNoos'), // 23
  row('........owwwwwwwwww'), // 24 belt
  row('.........owyyyyywo'), // 25 buckle
  row('...qqmmmmmm..mmmmmmqq'), // 26 trousers
  row('...qqmmmmmm..mmmmmmqq'), // 27
  row('...qqmmmmmm..mmmmmmqq'), // 28
  row('...qqmmmmmm..mmmmmmqq'), // 29
  row('...qqmmmmmm..mmmmmmqq'), // 30
  row('...qqmmmmmm..mmmmmmqq'), // 31
  row('...qqmmmmmm..mmmmmmqq'), // 32
  row('...qqmmmmmm..mmmmmmqq'), // 33
  row('...qqmmmmmm..mmmmmmqq'), // 34
  row('....qqmmmm....mmmmqq'), // 35 taper
  row('....qqmmmm....mmmmqq'), // 36
  row('......oooooooo..oooooooo'), // 37 shoes
  row('......oooooooo..oooooooo'), // 38
  row(''), // 39
  row(''), // 40
  row(''), // 41
  row(''), // 42
  row(''), // 43
  row(''), // 44
  row(''), // 45
  row(''), // 46
  row(''), // 47
];

for (const [i, r] of rows.entries()) {
  if (r.length !== W) {
    console.error(`Row ${i}: length ${r.length}`);
    process.exit(1);
  }
}

const def = {
  id: 'npc/nco',
  category: 'npc',
  width: W,
  height: rows.length,
  pixels: rows
};

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'art', 'spriteDefinitions', 'npc_nco.json');
writeFileSync(out, `${JSON.stringify(def, null, 2)}\n`);
console.log(`Wrote ${def.id} ${W}x${rows.length}`);
