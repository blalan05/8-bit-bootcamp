/**
 * Writes the 24x24 campaign building sprites (bunker, cave, citadel, fort,
 * mosque, seawall, tent, urban) into assets/art/spriteDefinitions/.
 * Run: bun scripts/buildBuildingSprites.mjs
 *
 * Sprites are drawn with small fill/mirror helpers instead of hand-typed rows,
 * then given a 1-px silhouette outline. Leave a 1-px transparent margin around
 * each drawing so the outline fits.
 */

import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SIZE = 24;
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'art', 'spriteDefinitions');

function createCanvas() {
  const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill('.'));

  const set = (x, y, ch) => {
    if (x >= 0 && x < SIZE && y >= 0 && y < SIZE) grid[y][x] = ch;
  };

  return {
    set,
    fill(x, y, w, h, ch) {
      for (let dy = 0; dy < h; dy++) for (let dx = 0; dx < w; dx++) set(x + dx, y + dy, ch);
    },
    /** Copy the left half onto the right half, mirrored. */
    mirror() {
      for (const row of grid) for (let x = 0; x < SIZE / 2; x++) row[SIZE - 1 - x] = row[x];
    },
    /** Replace `from` pixels with `to` wherever pick(x, y) is true. */
    texture(from, to, pick) {
      grid.forEach((row, y) => row.forEach((ch, x) => {
        if (ch === from && pick(x, y)) row[x] = to;
      }));
    },
    /** Running-bond block courses: mortar rows every `courseH`, joints every `blockW`. */
    blocks(x, y, w, h, face, mortar, blockW = 6, courseH = 3) {
      for (let dy = 0; dy < h; dy++) {
        const course = Math.floor(dy / courseH);
        const offset = course % 2 ? blockW / 2 : 0;
        for (let dx = 0; dx < w; dx++) {
          const joint = dy % courseH === courseH - 1 || (dx + offset) % blockW === blockW - 1;
          set(x + dx, y + dy, joint ? mortar : face);
        }
      }
    },
    /** Sandbag courses: 2 rows per course, seams staggered every other course. */
    sandbags(x, y, w, courses) {
      for (let c = 0; c < courses; c++) {
        const offset = c % 2 ? 2 : 0;
        for (let dx = 0; dx < w; dx++) {
          set(x + dx, y + c * 2, (dx + offset) % 4 === 3 ? 'T' : 't');
          set(x + dx, y + c * 2 + 1, 'T');
        }
      }
    },
    /** Outline the silhouette: transparent pixels touching a filled pixel become 'o'. */
    outline() {
      const filled = (x, y) => grid[y]?.[x] !== undefined && grid[y][x] !== '.';
      const edge = [];
      grid.forEach((row, y) => row.forEach((ch, x) => {
        if (ch === '.' && (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1))) edge.push([x, y]);
      }));
      for (const [x, y] of edge) grid[y][x] = 'o';
    },
    rows: () => grid.map(row => row.join(''))
  };
}

const hash = (x, y) => ((x * 73856093) ^ (y * 19349663)) >>> 0;

const sprites = {
  bunker(c) {
    c.fill(4, 8, 16, 1, 'W');
    c.fill(3, 9, 18, 2, 'W');
    c.fill(3, 11, 18, 1, 'R');
    c.fill(4, 12, 16, 5, 'W');
    c.texture('W', 'r', (x, y) => hash(x, y) % 9 === 0);
    c.fill(7, 13, 10, 2, 'o');
    c.sandbags(3, 15, 18, 1);
    c.sandbags(1, 17, 22, 3);
    c.outline();
  },

  cave(c) {
    for (let y = 3; y < 23; y++) {
      const hw = Math.min(11, y - 1);
      c.fill(12 - hw, y, hw * 2, 1, 'r');
    }
    c.texture('r', 'R', (x, y) => hash(x, y) % 5 === 0);
    c.texture('r', 'W', (x, y) => y < 12 && hash(x, y) % 7 === 1);
    c.fill(1, 22, 22, 1, 'R');
    c.fill(7, 10, 10, 1, 'd');
    c.fill(7, 11, 1, 11, 'D');
    c.fill(16, 11, 1, 11, 'D');
    c.fill(8, 11, 8, 10, 'o');
    c.fill(8, 21, 8, 1, 'd');
    c.outline();
  },

  citadel(c) {
    c.blocks(1, 12, 22, 11, 'W', 'R');
    for (let x = 1; x < 23; x += 4) c.fill(x, 10, 2, 2, 'W');
    c.fill(9, 14, 6, 9, 'o');
    c.fill(10, 13, 4, 1, 'o');
    c.fill(7, 7, 10, 4, 'b');
    c.fill(8, 8, 1, 3, 'B');
    c.fill(11, 8, 2, 3, 'o');
    c.fill(15, 8, 1, 3, 'B');
    c.fill(8, 3, 8, 1, 'y');
    c.fill(6, 4, 12, 1, 'y');
    c.fill(4, 5, 16, 1, 'y');
    c.fill(5, 6, 14, 1, 'T');
    c.set(4, 4, 'y');
    c.set(19, 4, 'y');
    c.outline();
  },

  fort(c) {
    c.fill(1, 6, 6, 17, 't');
    for (let x = 1; x < 7; x += 2) c.set(x, 5, 't');
    c.fill(1, 7, 6, 1, 'T');
    c.set(3, 10, 'o'); c.set(3, 11, 'o');
    c.set(3, 16, 'o'); c.set(3, 17, 'o');
    c.fill(7, 10, 5, 13, 't');
    for (let x = 8; x < 12; x += 2) c.set(x, 9, 't');
    c.fill(7, 11, 5, 1, 'T');
    c.fill(6, 6, 1, 17, 'T');
    c.mirror();
    c.fill(10, 15, 4, 8, 'o');
    c.fill(11, 14, 2, 1, 'o');
    c.outline();
    // flag goes on after the outline so the pole stays 1 px wide
    c.fill(12, 1, 1, 8, 'o');
    c.fill(13, 1, 2, 1, 'n'); c.fill(15, 1, 2, 1, 'q');
    c.fill(13, 2, 2, 1, 'n'); c.fill(15, 2, 2, 1, 'w');
    c.fill(13, 3, 4, 1, 'q');
  },

  mosque(c) {
    c.fill(4, 13, 8, 10, 't');
    c.fill(4, 14, 8, 1, 'i');
    c.fill(6, 16, 2, 3, 'o');
    c.fill(10, 17, 2, 6, 'o');
    const dome = [2, 4, 5, 6, 6, 6, 6];
    dome.forEach((hw, i) => c.fill(12 - hw, 6 + i, hw, 1, 'i'));
    c.fill(8, 7, 1, 2, 'w');
    c.fill(11, 3, 1, 3, 'y');
    c.fill(1, 4, 2, 19, 'w');
    c.fill(0, 8, 4, 1, 'T');
    c.fill(1, 2, 2, 2, 'i');
    c.set(1, 1, 'i');
    c.fill(1, 12, 2, 1, 'W');
    c.mirror();
    c.fill(11, 6, 2, 7, 'i');
    c.texture('i', 'I', x => x >= 14 && x <= 17);
    c.outline();
  },

  seawall(c) {
    c.fill(1, 8, 22, 2, 'W');
    c.fill(1, 10, 22, 1, 'R');
    c.blocks(1, 11, 22, 10, 'r', 'R');
    c.texture('r', 'G', (x, y) => y > 17 && hash(x, y) % 4 === 0);
    c.fill(1, 21, 22, 2, 'p');
    c.texture('p', 'P', (x, y) => hash(x, y) % 3 === 0);
    c.fill(16, 6, 1, 15, 'd');
    c.fill(19, 6, 1, 15, 'd');
    for (let y = 7; y < 21; y += 3) c.fill(17, y, 2, 1, 'D');
    c.outline();
  },

  tent(c) {
    for (let y = 5; y < 15; y++) {
      const hw = Math.min(11, 2 + y - 5);
      c.fill(12 - hw, y, hw * 2, 1, 'v');
    }
    c.texture('v', 'V', (x, y) => x >= 12 && y < 15);
    c.fill(1, 15, 22, 7, 'v');
    c.fill(1, 15, 22, 1, 'V');
    c.fill(9, 16, 6, 6, 'V');
    c.fill(11, 17, 2, 5, 'o');
    c.fill(3, 17, 3, 2, 'V');
    c.fill(18, 17, 3, 2, 'V');
    c.fill(11, 4, 2, 1, 'D');
    c.outline();
  },

  urban(c) {
    c.fill(2, 4, 20, 1, 'B');
    c.fill(1, 5, 22, 2, 'b');
    c.fill(2, 7, 20, 15, 'y');
    c.fill(2, 7, 20, 1, 'T');
    c.fill(2, 14, 20, 1, 'T');
    for (const x of [4, 10, 16]) {
      c.fill(x, 9, 4, 4, 'o');
      c.fill(x, 9, 4, 1, 'f');
    }
    for (const x of [4, 16]) {
      c.fill(x, 16, 4, 4, 'o');
      c.fill(x, 16, 4, 1, 'f');
    }
    c.fill(10, 16, 4, 6, 'o');
    // shell damage
    c.fill(17, 4, 3, 1, '.');
    c.fill(18, 5, 2, 1, '.');
    c.fill(18, 6, 1, 1, '.');
    c.fill(13, 8, 2, 1, 'W');
    c.fill(14, 9, 1, 1, 'W');
    c.texture('y', 'T', (x, y) => hash(x, y) % 13 === 0);
    c.fill(15, 21, 6, 1, 'W');
    c.fill(16, 20, 4, 1, 'R');
    c.set(17, 19, 'W');
    c.outline();
  }
};

for (const [name, draw] of Object.entries(sprites)) {
  const canvas = createCanvas();
  draw(canvas);
  const def = {
    id: `building/${name}`,
    category: 'building',
    width: SIZE,
    height: SIZE,
    pixels: canvas.rows()
  };
  writeFileSync(join(outDir, `building_${name}.json`), `${JSON.stringify(def, null, 2)}\n`);
  console.log(`Wrote ${def.id}`);
}
