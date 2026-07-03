export const STAT_KEYS = ['strength', 'dexterity', 'intelligence', 'endurance', 'leadership'];

export const BASE_STAT = 10;
export const MIN_STAT = 6;
export const MAX_STAT = 16;

export const STAT_TOOLTIPS = {
  strength: 'Pull-ups, log carries, pugel sticks',
  dexterity: 'Obstacle course, MCMAP, rappelling',
  intelligence: 'Lecture hall, tactics, written tests',
  endurance: 'Trail run, track, swim',
  leadership: 'Drill, parade deck, leading peers'
};

export function createBaseStats() {
  return {
    strength: BASE_STAT,
    dexterity: BASE_STAT,
    intelligence: BASE_STAT,
    endurance: BASE_STAT,
    leadership: BASE_STAT
  };
}

export function clampStat(value) {
  return Math.max(MIN_STAT, Math.min(MAX_STAT, value));
}

export function clampStats(stats) {
  const clamped = {};
  for (const key of STAT_KEYS) {
    clamped[key] = clampStat(stats[key] ?? BASE_STAT);
  }
  return clamped;
}

export function applyBackgroundModifiers(baseStats, modifiers = {}) {
  const stats = { ...baseStats };
  for (const key of STAT_KEYS) {
    stats[key] = clampStat((stats[key] ?? BASE_STAT) + (modifiers[key] ?? 0));
  }
  return stats;
}

export function formatStatLabel(key) {
  const labels = {
    strength: 'STR',
    dexterity: 'DEX',
    intelligence: 'INT',
    endurance: 'END',
    leadership: 'LDR'
  };
  return labels[key] ?? key.toUpperCase();
}
