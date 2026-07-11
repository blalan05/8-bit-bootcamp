import { SCHEMA_VERSION } from './appearance.js';
import { createInitialCampaign, ensureCampaign } from '../campaign/campaignState.js';

const SLOT_COUNT = 3;
const KEY_PREFIX = 'bootcamp-save-';

function slotKey(index) {
  return `${KEY_PREFIX}${index}`;
}

export function getSlotCount() {
  return SLOT_COUNT;
}

function migrateCharacter(raw) {
  if (!raw || typeof raw !== 'object') return null;
  if (!raw.name || !raw.stats || !raw.appearance) return null;

  if (raw.schemaVersion === 1) {
    return ensureCampaign({
      ...raw,
      schemaVersion: SCHEMA_VERSION,
      mode: 'campaign',
      campaign: createInitialCampaign({ difficulty: 'story' })
    });
  }

  if (raw.schemaVersion === 2) {
    return ensureCampaign({
      ...raw,
      schemaVersion: SCHEMA_VERSION,
      mode: raw.mode ?? 'campaign',
      campaign: {
        ...createInitialCampaign({ difficulty: 'story' }),
        ...raw.campaign,
        difficulty: raw.campaign?.difficulty ?? 'story',
        hydration: raw.campaign?.hydration ?? 100,
        recycleTokens: raw.campaign?.recycleTokens ?? 0,
        itUsed: raw.campaign?.itUsed ?? {}
      }
    });
  }

  if (raw.schemaVersion === SCHEMA_VERSION) {
    return ensureCampaign(raw);
  }

  return null;
}

function normalizeCharacter(raw) {
  return migrateCharacter(raw);
}

export function getSlot(index) {
  if (index < 0 || index >= SLOT_COUNT) return null;
  try {
    const raw = localStorage.getItem(slotKey(index));
    if (!raw) return null;
    return normalizeCharacter(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveSlot(index, character) {
  if (index < 0 || index >= SLOT_COUNT) return false;
  try {
    const payload = ensureCampaign({
      ...character,
      schemaVersion: SCHEMA_VERSION,
      slotIndex: index
    });
    localStorage.setItem(slotKey(index), JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

export function deleteSlot(index) {
  if (index < 0 || index >= SLOT_COUNT) return;
  localStorage.removeItem(slotKey(index));
}

export function getAllSlots() {
  return Array.from({ length: SLOT_COUNT }, (_, i) => getSlot(i));
}
