/**
 * Campaign schedule helpers.
 * locationName must match a name in src/maps/maps.json.
 */

export { BOOTCAMP_WEEKS as CAMPAIGN_WEEKS } from '../campaigns/bootcamp/bootcampData.js';

import { getCampaignWeeks } from '../campaigns/campaignRegistry.js';
/**
 * @param {number} weekNumber
 * @param {object} [character]
 */
export function getWeek(weekNumber, character) {
  const weeks = getCampaignWeeks(character);
  return weeks.find(w => w.id === weekNumber) ?? null;
}

/**
 * @param {number} week
 * @param {number} dayInWeek
 * @param {object} [character]
 */
export function getDayDefinition(week, dayInWeek, character) {
  const weekDef = getWeek(week, character);
  if (!weekDef) return null;
  return weekDef.days[dayInWeek - 1] ?? null;
}

/**
 * Find map object coordinates by location name.
 * @param {object} parsedMap
 * @param {string} locationName
 */
export function findLocation(parsedMap, locationName) {
  if (!parsedMap?.tiles) return null;
  for (const objects of Object.values(parsedMap.tiles)) {
    const found = objects.find(o => o.name === locationName);
    if (found) return found;
  }
  return null;
}

/**
 * Side quests available on the current day.
 * @param {number} week
 * @param {number} dayInWeek
 * @param {object} character
 */
export function getAvailableSideQuests(week, dayInWeek, character) {
  const campaign = character?.campaign ?? character;
  const weekDef = getWeek(week, character);
  if (!weekDef?.sideQuests) return [];
  return weekDef.sideQuests.filter(sq => {
    if (campaign.sideQuests?.[sq.id] === 'done') return false;
    if (dayInWeek < sq.availableAfterDay) return false;

    if (sq.maxHeight != null) {
      const height = character?.appearance?.height ?? 50;
      if (height > sq.maxHeight) return false;
    }

    if (sq.minStats) {
      const stats = character?.stats ?? {};
      for (const [key, floor] of Object.entries(sq.minStats)) {
        if ((stats[key] ?? 10) < floor) return false;
      }
    }

    if (sq.maxStats) {
      const stats = character?.stats ?? {};
      for (const [key, ceiling] of Object.entries(sq.maxStats)) {
        if ((stats[key] ?? 10) > ceiling) return false;
      }
    }

    if (sq.requiresQuest && campaign.sideQuests?.[sq.requiresQuest] !== 'done') {
      return false;
    }

    return true;
  });
}

export function isCampaignComplete(week, character) {
  return week > getCampaignWeeks(character).length;
}

export function getTotalWeeks(character) {
  return getCampaignWeeks(character).length;
}
