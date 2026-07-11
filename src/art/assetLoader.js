/**
 * assetLoader - Rasterizes sprite definitions (pixel-grid JSON + art bible palette)
 * into Three.js textures at runtime. Nearest-neighbor filtering keeps pixels crisp.
 *
 * Ground tiles are square top-down textures repeated across tile planes; buildings
 * and the recruit are camera-facing billboards. The isometric look comes from the
 * fixed orthographic camera (ISO_YAW / ISO_PITCH below).
 */

import * as THREE from 'three';
import artBible from '../../assets/art/artBible.json';
import manifest from '../../assets/art/spriteManifest.json';

/** Fixed camera angles for the 2:1 dimetric view. Billboards use ISO_YAW to face the camera. */
export const ISO_YAW = Math.PI / 4;
export const ISO_PITCH = Math.atan(0.5);

const defModules = import.meta.glob('../../assets/art/spriteDefinitions/*.json', { eager: true });

/** @type {Record<string, object>} spriteId -> definition */
const definitions = {};
for (const mod of Object.values(defModules)) {
  const def = mod.default ?? mod;
  definitions[def.id] = def;
}

export function getManifestDefault(category) {
  return manifest.defaults[category];
}

function colorToCss(color) {
  if (typeof color === 'number') return `#${color.toString(16).padStart(6, '0')}`;
  return color;
}

function cssToRgb(css) {
  return [
    parseInt(css.slice(1, 3), 16),
    parseInt(css.slice(3, 5), 16),
    parseInt(css.slice(5, 7), 16)
  ];
}

/**
 * Rasterize a sprite definition to a canvas.
 * @param {string} spriteId
 * @param {Record<string, string|number>} [paletteOverrides] - palette char -> color (for recruit swaps)
 * @returns {HTMLCanvasElement}
 */
export function rasterizeSprite(spriteId, paletteOverrides = {}) {
  const def = definitions[spriteId];
  if (!def) throw new Error(`Unknown sprite: ${spriteId}`);

  const canvas = document.createElement('canvas');
  canvas.width = def.width;
  canvas.height = def.height;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(def.width, def.height);

  for (let y = 0; y < def.height; y++) {
    const row = def.pixels[y] ?? '';
    for (let x = 0; x < def.width; x++) {
      const ch = row[x] ?? '.';
      const override = paletteOverrides[ch];
      const baseColor = artBible.palette[ch]?.color;
      const color = override !== undefined ? colorToCss(override) : baseColor;
      if (color == null) continue;
      const [r, g, b] = cssToRgb(color);
      const i = (y * def.width + x) * 4;
      img.data[i] = r;
      img.data[i + 1] = g;
      img.data[i + 2] = b;
      img.data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas;
}

function makeTexture(canvas) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const materialCache = new Map();

/**
 * Opaque ground material with the texture repeated `repeat` times across the plane.
 * Cached and shared — do not dispose per-tile.
 */
export function getTileMaterial(spriteId, repeat) {
  const key = `${spriteId}|tile|${repeat}`;
  if (materialCache.has(key)) return materialCache.get(key);

  const texture = makeTexture(rasterizeSprite(spriteId));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat, repeat);

  const material = new THREE.MeshBasicMaterial({ map: texture });
  material.userData.shared = true;
  materialCache.set(key, material);
  return material;
}

/**
 * Billboard material with transparent background (alphaTest keeps depth-buffer sorting correct).
 * Cached and shared — do not dispose per-tile.
 */
export function getBillboardMaterial(spriteId) {
  const key = `${spriteId}|billboard`;
  if (materialCache.has(key)) return materialCache.get(key);

  const material = new THREE.MeshBasicMaterial({
    map: makeTexture(rasterizeSprite(spriteId)),
    alphaTest: 0.5,
    side: THREE.DoubleSide
  });
  material.userData.shared = true;
  materialCache.set(key, material);
  return material;
}

/**
 * Per-character recruit material with skin/hair/outfit palette swapped in.
 * Not cached — caller owns it. Use updateRecruitMaterial on appearance change.
 */
export function createRecruitMaterial(paletteOverrides) {
  return new THREE.MeshBasicMaterial({
    map: makeTexture(rasterizeSprite(manifest.defaults.recruit, paletteOverrides)),
    alphaTest: 0.5,
    side: THREE.DoubleSide
  });
}

export function updateRecruitMaterial(material, paletteOverrides) {
  material.map?.dispose();
  material.map = makeTexture(rasterizeSprite(manifest.defaults.recruit, paletteOverrides));
  material.needsUpdate = true;
}

/**
 * Convert 2D grid coords to isometric screen-space offsets (classic 2:1 projection).
 * Unused by the 3D render path (the orthographic camera provides the projection),
 * kept as the reference mapping for future pure-2D uses (minimap, mini-games).
 */
export function gridToIso(col, row) {
  return {
    x: (col - row) * (artBible.tileWidth / 2),
    z: (col + row) * (artBible.tileHeight / 2)
  };
}
