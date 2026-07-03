import backgrounds from './backgrounds.json';
import { createBaseStats, applyBackgroundModifiers } from './stats.js';
import { createDefaultAppearance, SCHEMA_VERSION } from './appearance.js';

export function getBackgroundById(id) {
  return backgrounds.find(b => b.id === id) ?? backgrounds[0];
}

export function getAllBackgrounds() {
  return backgrounds;
}

export function previewStatsForBackground(backgroundId) {
  const background = getBackgroundById(backgroundId);
  return applyBackgroundModifiers(createBaseStats(), background.modifiers);
}

/**
 * @param {string} name
 * @param {string} backgroundId
 * @param {object} appearance
 * @param {number} slotIndex
 */
export function createCharacter(name, backgroundId, appearance, slotIndex = 0) {
  const background = getBackgroundById(backgroundId);
  const stats = applyBackgroundModifiers(createBaseStats(), background.modifiers);
  const defaults = createDefaultAppearance();

  return {
    schemaVersion: SCHEMA_VERSION,
    name: name.trim(),
    backgroundId: background.id,
    stats,
    appearance: {
      height: appearance?.height ?? defaults.height,
      skinToneId: appearance?.skinToneId ?? defaults.skinToneId,
      hairColorId: appearance?.hairColorId ?? defaults.hairColorId,
      gender: appearance?.gender ?? defaults.gender,
      civilianOutfitId: appearance?.civilianOutfitId ?? background.defaultOutfitId ?? defaults.civilianOutfitId
    },
    bootDay: 0,
    createdAt: new Date().toISOString(),
    slotIndex
  };
}

export function createDraftCharacter(backgroundId, appearanceOverrides = {}) {
  const background = getBackgroundById(backgroundId);
  const defaults = createDefaultAppearance();

  return {
    schemaVersion: SCHEMA_VERSION,
    name: '',
    backgroundId: background.id,
    stats: previewStatsForBackground(backgroundId),
    appearance: {
      ...defaults,
      civilianOutfitId: background.defaultOutfitId ?? defaults.civilianOutfitId,
      ...appearanceOverrides
    },
    bootDay: 0,
    createdAt: null,
    slotIndex: null
  };
}

export function validateCharacterName(name) {
  const trimmed = name.trim();
  if (trimmed.length < 2) return 'Name must be at least 2 characters';
  if (trimmed.length > 24) return 'Name must be 24 characters or less';
  return null;
}
