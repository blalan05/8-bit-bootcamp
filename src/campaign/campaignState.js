import { SCHEMA_VERSION } from '../character/appearance.js';
import { clampStat } from '../character/stats.js';

export const GRADES = ['unsat', 'passing', 'honor'];

/** Readiness points awarded per grade. */
export const READINESS_GAIN = {
  honor: 8,
  passing: 4,
  unsat: 1
};

/** Max stat +1 gains per stat per week. */
export const MAX_STAT_GAINS_PER_WEEK = 1;

export const DIFFICULTIES = ['story', 'ironman'];
export const MODES = ['campaign', 'sandbox'];

export function createInitialCampaign(overrides = {}) {
  return {
    week: 1,
    dayInWeek: 1,
    completed: {},
    readiness: 0,
    weekStatGains: {},
    sideQuests: {},
    phase: 'training',
    difficulty: 'story',
    hydration: 100,
    recycleTokens: 0,
    itUsed: {},
    ...overrides
  };
}

/** Ensure character has a v3 campaign block. */
export function ensureCampaign(character) {
  if (!character) return character;
  const campaign = character.campaign ?? createInitialCampaign();
  return {
    ...character,
    schemaVersion: SCHEMA_VERSION,
    mode: character.mode ?? 'campaign',
    campaign: {
      ...createInitialCampaign(),
      ...campaign,
      completed: { ...campaign.completed },
      weekStatGains: { ...campaign.weekStatGains },
      sideQuests: { ...campaign.sideQuests },
      itUsed: { ...campaign.itUsed }
    }
  };
}

export function isIronman(character) {
  return character?.campaign?.difficulty === 'ironman';
}

export function isSandbox(character) {
  return character?.mode === 'sandbox';
}

export function setHydration(character, value) {
  const characterWithCampaign = ensureCampaign(character);
  return {
    ...characterWithCampaign,
    campaign: {
      ...characterWithCampaign.campaign,
      hydration: Math.max(0, Math.min(100, value))
    }
  };
}

export function consumeRecycleToken(character) {
  const characterWithCampaign = ensureCampaign(character);
  const tokens = characterWithCampaign.campaign.recycleTokens ?? 0;
  if (tokens <= 0) return characterWithCampaign;
  return {
    ...characterWithCampaign,
    campaign: {
      ...characterWithCampaign.campaign,
      recycleTokens: tokens - 1
    }
  };
}

/** Story mode heat exhaustion: readiness penalty and partial refill. */
export function applyHeatExhaustionPenalty(character) {
  const characterWithCampaign = ensureCampaign(character);
  const campaign = { ...characterWithCampaign.campaign };
  campaign.readiness = Math.max(0, campaign.readiness - 5);
  campaign.hydration = 50;
  return { ...characterWithCampaign, campaign };
}

export function canUseIncentiveTraining(character, dayId) {
  return !character?.campaign?.itUsed?.[dayId];
}

export function markIncentiveTrainingUsed(character, dayId) {
  const characterWithCampaign = ensureCampaign(character);
  return {
    ...characterWithCampaign,
    campaign: {
      ...characterWithCampaign.campaign,
      itUsed: { ...characterWithCampaign.campaign.itUsed, [dayId]: true }
    }
  };
}

/**
 * Map a 0..1 performance score to a grade.
 * @param {number} score
 */
export function scoreToGrade(score) {
  if (score >= 0.85) return 'honor';
  if (score >= 0.5) return 'passing';
  return 'unsat';
}

/**
 * @param {string} grade
 * @returns {number}
 */
export function readinessForGrade(grade) {
  return READINESS_GAIN[grade] ?? 0;
}

function weekGainKey(week, stat) {
  return `w${week}_${stat}`;
}

/**
 * Whether an honor-grade stat bump is still allowed this week.
 */
export function canGainStat(campaign, week, stat) {
  const key = weekGainKey(week, stat);
  return (campaign.weekStatGains[key] ?? 0) < MAX_STAT_GAINS_PER_WEEK;
}

/**
 * Apply activity result to character: readiness, completion record, optional stat gain.
 * @param {object} character
 * @param {string} dayId - e.g. "w1d1"
 * @param {{ grade: string, score: number, stats?: string[] }} result
 */
export function applyActivityResult(character, dayId, result) {
  const characterWithCampaign = ensureCampaign(character);
  const campaign = { ...characterWithCampaign.campaign };
  const stats = { ...characterWithCampaign.stats };
  const week = campaign.week;

  const readinessDelta = readinessForGrade(result.grade);
  campaign.readiness = Math.min(100, campaign.readiness + readinessDelta);
  campaign.completed = {
    ...campaign.completed,
    [dayId]: { grade: result.grade, score: result.score }
  };

  const statDeltas = {};
  if (result.grade === 'honor' && result.stats?.length) {
    for (const stat of result.stats) {
      if (canGainStat(campaign, week, stat)) {
        const key = weekGainKey(week, stat);
        campaign.weekStatGains = {
          ...campaign.weekStatGains,
          [key]: (campaign.weekStatGains[key] ?? 0) + 1
        };
        stats[stat] = clampStat((stats[stat] ?? 10) + 1);
        statDeltas[stat] = 1;
      }
    }
  }

  const bootDay = (characterWithCampaign.bootDay ?? 0) + 1;

  return {
    ...characterWithCampaign,
    stats,
    bootDay,
    campaign,
    _lastResult: { dayId, ...result, readinessDelta, statDeltas }
  };
}

/**
 * Advance to the next day in the campaign schedule.
 * @param {object} character
 * @param {number} daysInWeek
 * @returns {{ character: object, weekComplete: boolean }}
 */
export function advanceCampaignDay(character, daysInWeek) {
  const characterWithCampaign = ensureCampaign(character);
  const campaign = { ...characterWithCampaign.campaign };
  let weekComplete = false;

  if (campaign.dayInWeek >= daysInWeek) {
    weekComplete = true;
    campaign.week += 1;
    campaign.dayInWeek = 1;
    campaign.weekStatGains = {};
  } else {
    campaign.dayInWeek += 1;
  }

  return {
    character: { ...characterWithCampaign, campaign },
    weekComplete
  };
}

/**
 * Mark a side quest as completed.
 */
export function completeSideQuest(character, questId, reward = {}) {
  const characterWithCampaign = ensureCampaign(character);
  const campaign = { ...characterWithCampaign.campaign };
  campaign.sideQuests = { ...campaign.sideQuests, [questId]: 'done' };

  let readiness = campaign.readiness;
  if (reward.readiness) {
    readiness = Math.min(100, readiness + reward.readiness);
  }

  const stats = { ...characterWithCampaign.stats };
  if (reward.stat && reward.statKey) {
    stats[reward.statKey] = clampStat((stats[reward.statKey] ?? 10) + reward.stat);
  }

  return {
    ...characterWithCampaign,
    stats,
    campaign: { ...campaign, readiness }
  };
}

export function isSideQuestDone(character, questId) {
  return character?.campaign?.sideQuests?.[questId] === 'done';
}

export function getDayId(week, dayInWeek) {
  return `w${week}d${dayInWeek}`;
}

/** Honors title from final readiness score. */
export function getHonorsTitle(readiness) {
  if (readiness >= 80) return 'Honor Graduate';
  if (readiness >= 50) return 'Company Honors';
  return 'United States Marine';
}

/** Mark campaign complete after graduation ceremony. */
export function graduateCampaign(character) {
  const characterWithCampaign = ensureCampaign(character);
  const honorsTitle = getHonorsTitle(characterWithCampaign.campaign.readiness);
  return {
    ...characterWithCampaign,
    honorsTitle,
    campaign: {
      ...characterWithCampaign.campaign,
      phase: 'graduated'
    }
  };
}

export function isGraduated(character) {
  return character?.campaign?.phase === 'graduated';
}
