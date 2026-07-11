import backgrounds from './backgrounds.json';
import { createBaseStats, applyBackgroundModifiers, getFinalStats } from './stats.js';
import { createDefaultAppearance, SCHEMA_VERSION } from './appearance.js';
import { createInitialCampaign } from '../campaign/campaignState.js';
import { applyPerksToCharacter } from '../campaign/metaProgress.js';

export function getBackgroundById(id) {
  return backgrounds.find(b => b.id === id) ?? backgrounds[0];
}

export function getAllBackgrounds() {
  return backgrounds;
}

export function previewStatsForBackground(backgroundId, coreStats = null) {
  const background = getBackgroundById(backgroundId);
  return getFinalStats(coreStats ?? createBaseStats(), background.modifiers);
}

/**
 * @param {string} name
 * @param {string} backgroundId
 * @param {object} appearance
 * @param {number} slotIndex
 * @param {object} [coreStats] - player-allocated stats before background modifiers
 * @param {{ mode?: string, difficulty?: string, perkStat?: string }} [options]
 */
export function createCharacter(name, backgroundId, appearance, slotIndex = 0, coreStats = null, options = {}) {
  const { mode = 'campaign', difficulty = 'story', perkStat = null } = options;
  const background = getBackgroundById(backgroundId);
  const stats = applyBackgroundModifiers(coreStats ?? createBaseStats(), background.modifiers);
  const defaults = createDefaultAppearance();

  const campaignOverrides = mode === 'sandbox'
    ? {}
    : { difficulty };

  let character = {
    schemaVersion: SCHEMA_VERSION,
    name: name.trim(),
    mode,
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
    campaign: createInitialCampaign(campaignOverrides),
    createdAt: new Date().toISOString(),
    slotIndex
  };

  if (mode !== 'sandbox') {
    character = applyPerksToCharacter(character, { perkStat });
  }

  return character;
}

export function createDraftCharacter(backgroundId, appearanceOverrides = {}, coreStats = null) {
  const background = getBackgroundById(backgroundId);
  const defaults = createDefaultAppearance();
  const baseCore = coreStats ?? createBaseStats();

  return {
    schemaVersion: SCHEMA_VERSION,
    name: '',
    backgroundId: background.id,
    coreStats: { ...baseCore },
    stats: getFinalStats(baseCore, background.modifiers),
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
