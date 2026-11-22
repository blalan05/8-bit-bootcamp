import { clampStat, STAT_KEYS } from '../character/stats.js';
import { createInitialCampaign } from './campaignState.js';

const META_KEY = 'bootcamp-meta';

export const PERKS = {
  pooleePrep: {
    id: 'pooleePrep',
    name: 'Poolee Prep',
    cost: 15,
    description: '+1 to one starting stat of your choice'
  },
  secondCanteen: {
    id: 'secondCanteen',
    name: 'Second Canteen',
    cost: 20,
    description: 'Hydration drains 30% slower on patrol'
  },
  recyclePaperwork: {
    id: 'recyclePaperwork',
    name: 'Recycle Paperwork',
    cost: 30,
    description: 'Start each campaign run with 1 recycle token'
  },
  motivated: {
    id: 'motivated',
    name: 'Motivated',
    cost: 25,
    description: 'Start each campaign run at +5 readiness'
  }
};

function createDefaultMeta() {
  return {
    grit: 0,
    perks: {},
    runsCompleted: 0,
    bestReadiness: 0,
    /** Highest pay grade (E-1..E-5) earned in any run; deployments start at it. */
    careerGrade: 1
  };
}

export function getMeta() {
  try {
    const raw = localStorage.getItem(META_KEY);
    if (!raw) return createDefaultMeta();
    const parsed = JSON.parse(raw);
    return { ...createDefaultMeta(), ...parsed, perks: { ...parsed.perks } };
  } catch {
    return createDefaultMeta();
  }
}

export function saveMeta(meta) {
  try {
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    return true;
  } catch {
    return false;
  }
}

export function hasPerk(perkId) {
  return !!getMeta().perks[perkId];
}

export function purchasePerk(perkId) {
  const perk = PERKS[perkId];
  if (!perk) return { ok: false, reason: 'Unknown perk' };
  const meta = getMeta();
  if (meta.perks[perkId]) return { ok: false, reason: 'Already owned' };
  if (meta.grit < perk.cost) return { ok: false, reason: 'Not enough grit' };
  meta.grit -= perk.cost;
  meta.perks[perkId] = true;
  saveMeta(meta);
  return { ok: true, meta };
}

/**
 * Compute grit earned from a run.
 * @param {object} character
 * @param {{ graduated?: boolean }} opts
 */
export function computeGrit(character, { graduated = false } = {}) {
  const campaign = character?.campaign ?? {};
  const completed = Object.values(campaign.completed ?? {});
  const daysCompleted = completed.length;
  const honorCount = completed.filter(d => d.grade === 'honor').length;
  let grit = daysCompleted + honorCount * 2;
  if (graduated) grit += 25;
  if (campaign.difficulty === 'ironman') grit *= 2;
  return grit;
}

/**
 * Award grit to meta store after a run ends or graduates.
 * @param {object} character
 * @param {{ graduated?: boolean }} opts
 * @returns {number} grit earned this run
 */
export function awardGrit(character, { graduated = false } = {}) {
  const gritEarned = computeGrit(character, { graduated });
  const meta = getMeta();
  meta.grit += gritEarned;
  meta.runsCompleted += 1;
  const readiness = character?.campaign?.readiness ?? 0;
  meta.bestReadiness = Math.max(meta.bestReadiness, readiness);
  saveMeta(meta);
  return gritEarned;
}

/**
 * Apply purchased perks to a new character (campaign modes only).
 * @param {object} character
 * @param {{ perkStat?: string }} opts
 */
export function applyPerksToCharacter(character, { perkStat = null } = {}) {
  if (character.mode === 'sandbox') return character;

  const meta = getMeta();
  let stats = { ...character.stats };
  let campaign = { ...character.campaign };

  if (meta.perks.pooleePrep && perkStat && STAT_KEYS.includes(perkStat)) {
    stats[perkStat] = clampStat((stats[perkStat] ?? 10) + 1);
  }

  if (meta.perks.recyclePaperwork) {
    campaign.recycleTokens = (campaign.recycleTokens ?? 0) + 1;
  }

  if (meta.perks.motivated) {
    campaign.readiness = Math.min(100, (campaign.readiness ?? 0) + 5);
  }

  return { ...character, stats, campaign };
}

export function getHydrationDrainMultiplier() {
  return hasPerk('secondCanteen') ? 0.7 : 1;
}
