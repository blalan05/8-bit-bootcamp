import { clampStat, STAT_KEYS } from '../character/stats.js';

/**
 * Motivation questions asked by the recruiting NCO.
 * Each choice tags a stat; Q1 is double-weighted in pickBuffStat.
 */
export const RECRUITER_QUESTIONS = [
  {
    id: 'why_join',
    prompt: 'Why do you want to join the Marines?',
    weight: 2,
    choices: [
      { text: 'To lead Marines and earn respect.', stat: 'leadership' },
      { text: 'To prove I can handle anything.', stat: 'endurance' },
      { text: 'To get stronger and push my limits.', stat: 'strength' },
      { text: 'For education benefits and a fresh start.', stat: 'intelligence' },
      { text: 'To serve my country with honor.', stat: 'leadership' }
    ]
  },
  {
    id: 'what_bring',
    prompt: 'What do you bring to the table?',
    weight: 1,
    choices: [
      { text: 'I can take charge when things get rough.', stat: 'leadership' },
      { text: 'Quick feet and coordination.', stat: 'dexterity' },
      { text: 'I never quit on a long haul.', stat: 'endurance' },
      { text: 'I study hard and learn fast.', stat: 'intelligence' },
      { text: 'Raw physical strength.', stat: 'strength' }
    ]
  }
];

/**
 * @param {Array<{ questionId: string, choiceIndex: number }>} answers
 * @returns {string} stat key with highest weighted score
 */
export function pickBuffStat(answers) {
  const scores = Object.fromEntries(STAT_KEYS.map(k => [k, 0]));

  for (const answer of answers) {
    const question = RECRUITER_QUESTIONS.find(q => q.id === answer.questionId);
    if (!question) continue;
    const choice = question.choices[answer.choiceIndex];
    if (!choice) continue;
    scores[choice.stat] = (scores[choice.stat] ?? 0) + question.weight;
  }

  let best = STAT_KEYS[0];
  let bestScore = -1;
  for (const key of STAT_KEYS) {
    if (scores[key] > bestScore) {
      bestScore = scores[key];
      best = key;
    }
  }
  return best;
}

/**
 * Apply +1 to the standout stat from recruiter questions.
 * @param {object} character
 * @param {string} statKey
 */
export function applyStatBuff(character, statKey) {
  if (!STAT_KEYS.includes(statKey)) return character;
  const stats = { ...character.stats };
  stats[statKey] = clampStat(stats[statKey] + 1);
  return { ...character, stats };
}
