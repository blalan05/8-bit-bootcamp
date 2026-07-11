import { PullupScene } from '../../../recruiter/pullupScene.js';
import { runPullupMiniGame } from '../../../recruiter/pullupTest.js';
import { buildActivityResult } from '../../activityRegistry.js';

/**
 * Map IST rep count to a 0..1 score.
 * @param {number} reps
 */
export function istScoreFromReps(reps) {
  if (reps >= 10) return 1;
  if (reps >= 8) return 0.9;
  if (reps >= 6) return 0.75;
  if (reps >= 4) return 0.6;
  if (reps >= 2) return 0.4;
  return reps > 0 ? 0.25 : 0;
}

/**
 * @param {HTMLElement} container
 * @param {object} character
 */
export function runIst(container, character) {
  const scene = new PullupScene(container, character);
  return runPullupMiniGame(scene, character).then(result => {
    scene.dispose();
    const score = istScoreFromReps(result.reps);
    return buildActivityResult(score, ['strength', 'endurance'], {
      reps: result.reps,
      perfectReps: result.perfectReps,
      energyLeft: result.energyLeft
    });
  });
}
