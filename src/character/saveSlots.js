import { SCHEMA_VERSION } from './appearance.js';

const SLOT_COUNT = 3;
const KEY_PREFIX = 'bootcamp-save-';

function slotKey(index) {
  return `${KEY_PREFIX}${index}`;
}

export function getSlotCount() {
  return SLOT_COUNT;
}

function normalizeCharacter(raw) {
  if (!raw || typeof raw !== 'object') return null;
  if (raw.schemaVersion !== SCHEMA_VERSION) return null;
  if (!raw.name || !raw.stats || !raw.appearance) return null;
  return raw;
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
    const payload = { ...character, schemaVersion: SCHEMA_VERSION, slotIndex: index };
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
