import * as THREE from 'three';
import { MIN_STAT, MAX_STAT } from './stats.js';
import { createRecruitMaterial, updateRecruitMaterial } from '../art/assetLoader.js';
import outfits from './civilianOutfits.json';
import skinTones from './skinTones.json';
import hairColors from './hairColors.json';

export const SCHEMA_VERSION = 1;

export const HEIGHT_SCALE_MIN = 0.85;
export const HEIGHT_SCALE_MAX = 1.15;
export const MUSCLE_SCALE_MIN = 0.85;
export const MUSCLE_SCALE_MAX = 1.15;

export const DEFAULT_HEIGHT = 50;
export const DEFAULT_OUTFIT_ID = 'tshirt_jeans';
export const DEFAULT_SKIN_TONE_ID = 'medium';
export const DEFAULT_HAIR_COLOR_ID = 'brown';
export const DEFAULT_GENDER = 'male';

export function heightToScale(height) {
  const t = Math.max(0, Math.min(100, height)) / 100;
  return HEIGHT_SCALE_MIN + t * (HEIGHT_SCALE_MAX - HEIGHT_SCALE_MIN);
}

export function strengthToMuscleScale(strength) {
  const t = (strength - MIN_STAT) / (MAX_STAT - MIN_STAT);
  return MUSCLE_SCALE_MIN + t * (MUSCLE_SCALE_MAX - MUSCLE_SCALE_MIN);
}

export function genderHeightModifier(gender) {
  return gender === 'female' ? 0.98 : 1.02;
}

export function getOutfitById(id) {
  return outfits.find(o => o.id === id) ?? outfits[0];
}

export function getSkinToneById(id) {
  return skinTones.find(s => s.id === id) ?? skinTones[2];
}

export function getHairColorById(id) {
  return hairColors.find(h => h.id === id) ?? hairColors[2];
}

export function getAllOutfits() {
  return outfits;
}

export function getAllSkinTones() {
  return skinTones;
}

export function getAllHairColors() {
  return hairColors;
}

export function createDefaultAppearance() {
  return {
    height: DEFAULT_HEIGHT,
    skinToneId: DEFAULT_SKIN_TONE_ID,
    hairColorId: DEFAULT_HAIR_COLOR_ID,
    gender: DEFAULT_GENDER,
    civilianOutfitId: DEFAULT_OUTFIT_ID
  };
}

/** Base sprite plane size in world units (24x36 px source at 2x, 2:3 aspect) */
export const RECRUIT_SPRITE_WIDTH = 0.9;
export const RECRUIT_SPRITE_HEIGHT = 1.35;

/**
 * Map character appearance to recruit sprite palette swaps.
 * Palette chars: s = skin, h = hair, c = top, j = bottom (see artBible.json).
 */
function recruitPaletteOverrides(character) {
  const appearance = character?.appearance ?? {};
  const outfit = getOutfitById(appearance.civilianOutfitId ?? DEFAULT_OUTFIT_ID);
  const skin = getSkinToneById(appearance.skinToneId ?? DEFAULT_SKIN_TONE_ID);
  const hair = getHairColorById(appearance.hairColorId ?? DEFAULT_HAIR_COLOR_ID);
  return {
    s: skin.color,
    h: hair.color,
    c: outfit.topColor,
    j: outfit.bottomColor
  };
}

/**
 * Create the recruit billboard sprite (flat plane with pixel texture).
 * Caller sets rotation.y to face the camera (ISO_YAW in-game, 0 in the preview).
 * @returns {THREE.Mesh}
 */
export function createRecruitSprite(character) {
  const sprite = new THREE.Mesh(
    new THREE.PlaneGeometry(RECRUIT_SPRITE_WIDTH, RECRUIT_SPRITE_HEIGHT),
    createRecruitMaterial(recruitPaletteOverrides(character))
  );
  sprite.name = 'recruitSprite';
  applyAppearanceToSprite(sprite, character);
  return sprite;
}

/**
 * Apply height/muscle scaling and palette swaps to an existing recruit sprite.
 * @param {THREE.Mesh} sprite
 * @param {{ stats: object, appearance: object }} character
 */
export function applyAppearanceToSprite(sprite, character) {
  if (!sprite || !character) return;

  const appearance = character.appearance ?? {};
  const heightScale = heightToScale(appearance.height ?? DEFAULT_HEIGHT);
  const genderMod = genderHeightModifier(appearance.gender ?? DEFAULT_GENDER);
  const muscleScale = strengthToMuscleScale(character.stats?.strength ?? 10);
  const yScale = heightScale * genderMod;

  sprite.scale.set(muscleScale, yScale, 1);
  // Keep feet on the ground as the sprite grows/shrinks
  sprite.position.y = (RECRUIT_SPRITE_HEIGHT * yScale) / 2;

  updateRecruitMaterial(sprite.material, recruitPaletteOverrides(character));
}
