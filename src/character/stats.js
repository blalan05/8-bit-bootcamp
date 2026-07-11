export const STAT_KEYS = ['strength', 'dexterity', 'intelligence', 'endurance', 'leadership'];

export const BASE_STAT = 10;
export const MIN_STAT = 6;
export const MAX_STAT = 16;

export const STAT_TOOLTIPS = {
  strength: 'Pull-ups, log carries, pugel sticks',
  dexterity: 'Obstacle course, MCMAP, rappelling, movement speed',
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

/** Walk speed multiplier at min/max dexterity (same spread as muscle scale from STR). */
export const WALK_SPEED_MODIFIER_MIN = 0.85;
export const WALK_SPEED_MODIFIER_MAX = 1.15;

export function dexterityToWalkSpeedMultiplier(dexterity) {
  const t = (dexterity - MIN_STAT) / (MAX_STAT - MIN_STAT);
  return WALK_SPEED_MODIFIER_MIN + t * (WALK_SPEED_MODIFIER_MAX - WALK_SPEED_MODIFIER_MIN);
}

/** Target total for rolled core-stat spreads (5 stats × avg ~10). */
export const ROLL_TOTAL_MIN = 45;
export const ROLL_TOTAL_MAX = 55;

export function getStatTotal(stats) {
  return STAT_KEYS.reduce((sum, key) => sum + (stats[key] ?? BASE_STAT), 0);
}

/** Randomize core stats BG-style: fixed total budget, random spread across stats. */
export function rollCoreStats() {
  const targetTotal = ROLL_TOTAL_MIN + Math.floor(Math.random() * (ROLL_TOTAL_MAX - ROLL_TOTAL_MIN + 1));
  const stats = {};
  for (const key of STAT_KEYS) {
    stats[key] = MIN_STAT;
  }

  let remaining = targetTotal - STAT_KEYS.length * MIN_STAT;
  const maxRemaining = STAT_KEYS.length * (MAX_STAT - MIN_STAT);
  remaining = Math.max(0, Math.min(remaining, maxRemaining));

  let guard = maxRemaining * 4;
  while (remaining > 0 && guard-- > 0) {
    const key = STAT_KEYS[Math.floor(Math.random() * STAT_KEYS.length)];
    if (stats[key] < MAX_STAT) {
      stats[key]++;
      remaining--;
    }
  }

  return clampStats(stats);
}

export function getFinalStats(coreStats, modifiers = {}) {
  return applyBackgroundModifiers(coreStats, modifiers);
}

export function canDecreaseCoreStat(coreStats, key) {
  return (coreStats[key] ?? BASE_STAT) > MIN_STAT;
}

export function canIncreaseCoreStat(coreStats, key, freePoints) {
  return freePoints > 0 && (coreStats[key] ?? BASE_STAT) < MAX_STAT;
}

/** Normalize a stat value to 0..1 across the MIN_STAT..MAX_STAT range. */
function statT(value) {
  return (Math.max(MIN_STAT, Math.min(MAX_STAT, value)) - MIN_STAT) / (MAX_STAT - MIN_STAT);
}

/**
 * Pull-up timing tuning derived from strength and endurance.
 * Higher STR = faster ascent + wider windows; higher END = more energy + slower fatigue.
 */
export function getPullupTimingWindowMs(strength, endurance) {
  const t = (statT(strength) + statT(endurance)) / 2;
  return Math.round(180 + t * 170); // ~180ms (weak) -> ~350ms (strong)
}

export function getPullupAscentMs(strength) {
  return Math.round(900 - statT(strength) * 350); // ~900ms -> ~550ms
}

export function getPullupDescentMs(strength, endurance) {
  const t = (statT(strength) + statT(endurance)) / 2;
  return Math.round(700 - t * 250); // ~700ms -> ~450ms
}

export function getPullupMaxEnergy(strength, endurance) {
  const t = (statT(strength) + statT(endurance)) / 2;
  return Math.round(70 + t * 40); // ~70 -> ~110
}

export function getPullupEnergyCost(strength, endurance, perfect) {
  const t = (statT(strength) + statT(endurance)) / 2;
  const base = 14 - t * 4; // ~14 (weak) -> ~10 (strong)
  return perfect ? base * 0.6 : base;
}
