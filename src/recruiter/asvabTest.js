import questionBank from './asvabQuestions.json';
import { clampStat } from '../character/stats.js';

export const ASVAB_QUESTION_COUNT = 6;

/** Pick difficulty mix based on current INT (final stat at test time). */
export function getDifficultySlots(intelligence) {
  if (intelligence <= 8) {
    return ['easy', 'easy', 'easy', 'easy', 'easy', 'medium'];
  }
  if (intelligence <= 11) {
    return ['easy', 'easy', 'medium', 'medium', 'medium', 'hard'];
  }
  if (intelligence <= 13) {
    return ['easy', 'medium', 'medium', 'medium', 'hard', 'hard'];
  }
  return ['medium', 'medium', 'hard', 'hard', 'hard', 'hard'];
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickQuestion(difficulty, usedIds) {
  const pool = shuffle(questionBank[difficulty] ?? questionBank.easy);
  return pool.find(q => !usedIds.has(q.id)) ?? pool[0];
}

/** @returns {Array<{ id, prompt, choices, answer, difficulty }>} */
export function selectAsvabQuestions(intelligence) {
  const slots = shuffle(getDifficultySlots(intelligence));
  const usedIds = new Set();
  const questions = [];

  for (const difficulty of slots.slice(0, ASVAB_QUESTION_COUNT)) {
    const q = pickQuestion(difficulty, usedIds);
    usedIds.add(q.id);
    questions.push({ ...q, difficulty });
  }

  return questions;
}

export function gradeAsvab(answers, questions) {
  let correct = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].answer) correct++;
  }

  const total = questions.length;
  const percent = total > 0 ? correct / total : 0;
  let intDelta = 0;
  if (percent >= 1) intDelta = 1;
  else if (percent < 0.15) intDelta = -1;

  return { correct, total, percent, intDelta };
}

export function applyAsvabResult(character, intDelta) {
  if (!intDelta) return character;
  const stats = { ...character.stats };
  stats.intelligence = clampStat(stats.intelligence + intDelta);
  return { ...character, stats };
}
