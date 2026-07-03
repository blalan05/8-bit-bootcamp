import * as THREE from 'three';
import { MIN_STAT, MAX_STAT } from './stats.js';
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

/** @returns {THREE.Group} */
export function createCharacterMesh() {
  const group = new THREE.Group();
  group.name = 'characterMesh';

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 12, 12),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );
  head.name = 'head';
  head.position.y = 0.72;

  const hair = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );
  hair.name = 'hair';
  hair.position.y = 0.78;

  const torso = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.22, 0.35, 4, 8),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );
  torso.name = 'torso';
  torso.position.y = 0.38;

  const legs = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.2, 0.18, 4, 8),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );
  legs.name = 'legs';
  legs.position.y = 0.12;

  group.add(head, hair, torso, legs);
  return group;
}

/**
 * @param {THREE.Group} meshGroup
 * @param {{ stats: object, appearance: object }} character
 */
export function applyAppearanceToMesh(meshGroup, character) {
  if (!meshGroup || !character) return;

  const appearance = character.appearance ?? {};
  const heightScale = heightToScale(appearance.height ?? DEFAULT_HEIGHT);
  const genderMod = genderHeightModifier(appearance.gender ?? DEFAULT_GENDER);
  const muscleScale = strengthToMuscleScale(character.stats?.strength ?? 10);

  const outfit = getOutfitById(appearance.civilianOutfitId ?? DEFAULT_OUTFIT_ID);
  const skin = getSkinToneById(appearance.skinToneId ?? DEFAULT_SKIN_TONE_ID);
  const hair = getHairColorById(appearance.hairColorId ?? DEFAULT_HAIR_COLOR_ID);

  meshGroup.scale.set(muscleScale, heightScale * genderMod, muscleScale);

  const head = meshGroup.getObjectByName('head');
  const hairMesh = meshGroup.getObjectByName('hair');
  const torso = meshGroup.getObjectByName('torso');
  const legs = meshGroup.getObjectByName('legs');

  if (head?.material) head.material.color.setHex(skin.color);
  if (hairMesh?.material) hairMesh.material.color.setHex(hair.color);
  if (torso?.material) torso.material.color.setHex(outfit.topColor);
  if (legs?.material) legs.material.color.setHex(outfit.bottomColor);
}
