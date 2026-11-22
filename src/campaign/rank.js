import { getCampaignForCharacter, getCampaignWeeks } from '../campaigns/campaignRegistry.js';
import { getMeta, saveMeta } from './metaProgress.js';

/** Enlisted ranks. `grade` is the pay grade (E-1..E-5), used to carry rank between campaigns. */
export const RANKS = {
  pvt: { id: 'pvt', grade: 1, title: 'Private', abbr: 'Pvt' },
  pfc: { id: 'pfc', grade: 2, title: 'Private First Class', abbr: 'PFC' },
  lcpl: { id: 'lcpl', grade: 3, title: 'Lance Corporal', abbr: 'LCpl' },
  cpl: { id: 'cpl', grade: 4, title: 'Corporal', abbr: 'Cpl' },
  sgt: { id: 'sgt', grade: 5, title: 'Sergeant', abbr: 'Sgt' }
};

/**
 * Era-accurate rank ladders. PFC dates from 1917 and Lance Corporal became its own
 * grade in 1958, so earlier wars skip them.
 */
const LADDERS = {
  depot: ['pvt', 'pfc'],
  modern: ['pvt', 'pfc', 'lcpl', 'cpl', 'sgt'],
  interwar: ['pvt', 'pfc', 'cpl', 'sgt'],
  frontier: ['pvt', 'cpl', 'sgt']
};

const CAMPAIGN_LADDER = {
  bootcamp: 'depot',
  tripoli: 'frontier',
  belleau: 'interwar',
  nicaragua: 'interwar',
  wwii: 'interwar',
  korea: 'interwar',
  vietnam: 'modern',
  somalia: 'modern',
  iraq: 'modern'
};

/** Operations required at the current rank before promotion to the given rank. */
const TIME_IN_GRADE = { pfc: 1, lcpl: 2, cpl: 3, sgt: 3 };
/** Leadership stat required to pin on NCO rank. */
const LEADERSHIP_REQUIRED = { cpl: 11, sgt: 13 };
const PROMOTION_MIN_AVG = 0.7;

/** Bootcamp meritorious PFC board. */
const MERITORIOUS_PFC = { minAvg: 0.75, minHonorShare: 0.4, minLeadership: 11 };

export const PERK_INFO = {
  underground: {
    name: 'Lance Corporal Underground',
    eraName: 'Scuttlebutt',
    description: 'Word gets around: field intel before each event, a wrong answer struck out, and extra time on commands.'
  },
  skate: {
    name: 'Skating',
    description: 'Once per operation, skip an event and take a passing grade. Get caught and it\'s an UNSAT.'
  },
  delegate: {
    name: 'Delegate',
    description: 'Hand an event to your Marines. They earn the grade, good or bad. Leadership tilts the odds.'
  }
};

function ladderKey(character) {
  return CAMPAIGN_LADDER[getCampaignForCharacter(character).id] ?? 'modern';
}

/** @param {object} character */
export function getLadder(character) {
  return LADDERS[ladderKey(character)].map(id => RANKS[id]);
}

/** Current rank, or null for sandbox characters. */
export function getRank(character) {
  if (character?.mode === 'sandbox') return null;
  return RANKS[character?.campaign?.rankId] ?? RANKS.pvt;
}

/** Name with rank, e.g. "Cpl Smith". Recruits are addressed as Recruit until they graduate. */
export function rankedName(character) {
  const rank = getRank(character);
  if (!rank) return character?.name ?? '';
  const campaign = getCampaignForCharacter(character);
  if (campaign.usesRecruiter && character.campaign?.phase !== 'graduated' && rank.id === 'pvt') {
    return `Recruit ${character.name}`;
  }
  return `${rank.abbr} ${character.name}`;
}

/**
 * Perks unlocked at a rank. Ladders without Lance Corporal give its perks to the senior
 * non-NCO rank (PFC in WWII, none for 1805 Privates).
 */
export function getPerks(character) {
  const rank = getRank(character);
  if (!rank || getCampaignForCharacter(character).usesRecruiter) return [];
  if (rank.grade >= 4) return ['underground', 'delegate'];
  const ladder = getLadder(character);
  const seniorJunior = [...ladder].reverse().find(r => r.grade < 4);
  if (rank.grade >= 2 && seniorJunior?.id === rank.id) return ['underground', 'skate'];
  return [];
}

export function hasPerk(character, perk) {
  return getPerks(character).includes(perk);
}

/** Display name for a perk in this campaign's era. */
export function perkName(character, perk) {
  const info = PERK_INFO[perk];
  if (perk === 'underground' && ladderKey(character) !== 'modern') return info.eraName;
  return info.name;
}

/** Skates or delegations allowed per operation. A Sergeant runs three fireteams. */
export function perkUsesPerOperation(character, perk) {
  if (!hasPerk(character, perk)) return 0;
  if (perk === 'delegate') return getRank(character).id === 'sgt' ? 2 : 1;
  return 1;
}

export function perkUsesLeft(character, perk) {
  const uses = character?.campaign?.perkUses;
  const used = uses?.week === character?.campaign?.week ? (uses[perk] ?? 0) : 0;
  return Math.max(0, perkUsesPerOperation(character, perk) - used);
}

export function spendPerkUse(character, perk) {
  const campaign = character.campaign;
  const current = campaign.perkUses?.week === campaign.week ? campaign.perkUses : { week: campaign.week };
  return {
    ...character,
    campaign: { ...campaign, perkUses: { ...current, [perk]: (current[perk] ?? 0) + 1 } }
  };
}

/** Marines under you when delegating: Corporal leads a fireteam (3), Sergeant a squad (12). */
export function commandSize(character) {
  return getRank(character)?.id === 'sgt' ? 12 : 3;
}

function setRank(character, rankId) {
  const meta = getMeta();
  meta.careerGrade = Math.max(meta.careerGrade ?? 1, RANKS[rankId].grade);
  saveMeta(meta);
  return {
    ...character,
    campaign: { ...character.campaign, rankId, rankSince: character.campaign.week }
  };
}

/**
 * Give a run its starting rank once. Recruits start as Private; deployments start at the
 * highest rank this player has earned that exists in the era.
 */
export function ensureRank(character) {
  if (!character?.campaign || character.mode === 'sandbox' || character.campaign.rankId) return character;
  const campaign = getCampaignForCharacter(character);
  let rankId = 'pvt';
  if (!campaign.usesRecruiter) {
    const career = getMeta().careerGrade ?? 1;
    rankId = [...getLadder(character)].reverse().find(r => r.grade <= career)?.id ?? 'pvt';
  }
  return { ...character, campaign: { ...character.campaign, rankId, rankSince: 1 } };
}

function nextRank(character) {
  const ladder = getLadder(character);
  const i = ladder.findIndex(r => r.id === getRank(character).id);
  return ladder[i + 1] ?? null;
}

/** Rank duty pools: what a Marine of this billet gets handed each operation. */
const DUTY_POOLS = {
  rifleman: ['pointMan', 'sentryPost', 'carryWounded'],
  senior: ['newGuy', 'runner', 'actingTeamLeader'],
  fireteam: ['sectorsOfFire', 'boundingOverwatch', 'headCount'],
  squad: ['squadAttack', 'setDefense', 'briefTheSquad']
};

const BILLET_NAMES = {
  rifleman: 'Rifleman',
  senior: 'Senior Marine',
  fireteam: 'Fireteam Leader',
  squad: 'Squad Leader'
};

function dutyBillet(character) {
  const rank = getRank(character);
  if (rank.grade >= 5) return 'squad';
  if (rank.grade >= 4) return 'fireteam';
  return hasPerk(character, 'skate') ? 'senior' : 'rifleman';
}

/** Billet label for the character sheet, or null outside deployments. */
export function billetName(character) {
  if (!getRank(character) || getCampaignForCharacter(character).usesRecruiter) return null;
  return BILLET_NAMES[dutyBillet(character)];
}

function hashString(text) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return Math.abs(h);
}

const DUTY_PREFIX = 'duty_';

/**
 * This operation's rank duty (deployed campaigns only): drawn from the current billet's
 * pool, rotating by operation and campaign so arriving at a different rank plays differently.
 * @returns {{ dayId: string, activityId: string, billet: string } | null}
 */
export function getRankDuty(character, weekId) {
  if (!getRank(character) || getCampaignForCharacter(character).usesRecruiter) return null;
  const done = Object.keys(character.campaign.completed ?? {}).find(id => id.startsWith(`${DUTY_PREFIX}${weekId}_`));
  if (done) return null;
  const billet = dutyBillet(character);
  const pool = DUTY_POOLS[billet];
  const activityId = pool[(weekId + hashString(getCampaignForCharacter(character).id)) % pool.length];
  return { dayId: `${DUTY_PREFIX}${weekId}_${activityId}`, activityId, billet: BILLET_NAMES[billet] };
}

/** Activity id behind a rank duty day id, or null. */
export function dutyActivityId(dayId) {
  const m = /^duty_\d+_(\w+)$/.exec(dayId);
  return m ? m[1] : null;
}

function weekResults(character, weekDef) {
  const completed = character.campaign.completed ?? {};
  const duty = Object.entries(completed)
    .filter(([id]) => id.startsWith(`${DUTY_PREFIX}${weekDef.id}_`))
    .map(([, r]) => r);
  return [...(weekDef.days ?? []).map(d => completed[d.id]).filter(Boolean), ...duty];
}

/**
 * Promotion board at the end of an operation (deployed campaigns only).
 * @returns {{ character: object, promotion: null | { from: object, to: object, meritorious: boolean, perks: string[] } }}
 */
export function evaluateOperationPromotion(character, weekDef) {
  const campaign = getCampaignForCharacter(character);
  const current = getRank(character);
  const target = current && !campaign.usesRecruiter ? nextRank(character) : null;
  if (!target) return { character, promotion: null };

  const results = weekResults(character, weekDef);
  if (!results.length) return { character, promotion: null };
  const avg = results.reduce((a, r) => a + r.score, 0) / results.length;
  const anyUnsat = results.some(r => r.grade === 'unsat');
  const meritorious = results.every(r => r.grade === 'honor' && !r.via);
  const opsInGrade = weekDef.id - (character.campaign.rankSince ?? 1) + 1;
  const leadership = character.stats?.leadership ?? 10;

  const timeOk = meritorious || opsInGrade >= (TIME_IN_GRADE[target.id] ?? 1);
  const performanceOk = avg >= PROMOTION_MIN_AVG && !anyUnsat;
  const leadershipOk = leadership >= (LEADERSHIP_REQUIRED[target.id] ?? 0);
  if (!timeOk || !performanceOk || !leadershipOk) return { character, promotion: null };

  const before = getPerks(character);
  const promoted = setRank(character, target.id);
  promoted.campaign.rankSince = weekDef.id + 1;
  const perks = getPerks(promoted).filter(p => !before.includes(p));
  return { character: promoted, promotion: { from: current, to: target, meritorious, perks } };
}

/**
 * Meritorious PFC board at bootcamp graduation.
 * @returns {{ character: object, promoted: boolean, checks: { label: string, ok: boolean }[] }}
 */
export function evaluateMeritoriousPfc(character) {
  const days = getCampaignWeeks(character).flatMap(w => w.days ?? []);
  const completed = character.campaign.completed ?? {};
  const results = days.map(d => completed[d.id]).filter(Boolean);
  const avg = results.length ? results.reduce((a, r) => a + r.score, 0) / results.length : 0;
  const honorShare = results.length ? results.filter(r => r.grade === 'honor').length / results.length : 0;
  const leadership = character.stats?.leadership ?? 10;
  const checks = [
    { label: `Average performance ${Math.round(avg * 100)}% (need ${MERITORIOUS_PFC.minAvg * 100}%)`, ok: avg >= MERITORIOUS_PFC.minAvg },
    { label: `Honor grades ${Math.round(honorShare * 100)}% of events (need ${MERITORIOUS_PFC.minHonorShare * 100}%)`, ok: honorShare >= MERITORIOUS_PFC.minHonorShare },
    { label: `Leadership ${leadership} (need ${MERITORIOUS_PFC.minLeadership})`, ok: leadership >= MERITORIOUS_PFC.minLeadership }
  ];
  const promoted = checks.every(c => c.ok);
  return { character: setRank(character, promoted ? 'pfc' : 'pvt'), promoted, checks };
}

/** What the next promotion needs, for the character sheet. */
export function describeNextPromotion(character) {
  const campaign = getCampaignForCharacter(character);
  const current = getRank(character);
  if (!current) return null;
  if (campaign.usesRecruiter) {
    return current.id === 'pvt' && character.campaign.phase !== 'graduated'
      ? 'Meritorious PFC at graduation: strong grades, frequent Honors, and Leadership 11+.'
      : null;
  }
  const target = nextRank(character);
  if (!target) return null;
  const opsInGrade = Math.max(0, (character.campaign.week ?? 1) - (character.campaign.rankSince ?? 1));
  const tig = TIME_IN_GRADE[target.id] ?? 1;
  const parts = [`${Math.min(opsInGrade, tig)}/${tig} operations in grade`, 'no UNSATs and 70%+ average in an operation'];
  if (LEADERSHIP_REQUIRED[target.id]) parts.push(`Leadership ${LEADERSHIP_REQUIRED[target.id]}+`);
  return `${target.title}: ${parts.join(' · ')}. An all-Honor operation waives time in grade.`;
}
