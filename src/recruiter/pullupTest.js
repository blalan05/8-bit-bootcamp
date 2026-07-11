import {
  clampStat,
  getPullupTimingWindowMs,
  getPullupAscentMs,
  getPullupDescentMs,
  getPullupMaxEnergy,
  getPullupEnergyCost
} from '../character/stats.js';

export const PULLUP_SESSION_SEC = 45;
export const PULLUP_KEYS = { pull: 'KeyF', top: 'KeyJ', bottom: 'KeyK' };

const RELEVANT_CODES = [PULLUP_KEYS.pull, PULLUP_KEYS.top, PULLUP_KEYS.bottom];

export function gradePullups(reps) {
  let strDelta = 0;
  if (reps >= 10) strDelta = 1;
  else if (reps < 3) strDelta = -1;
  return { reps, strDelta };
}

export function applyPullupResult(character, strDelta) {
  if (!strDelta) return character;
  const stats = { ...character.stats };
  stats.strength = clampStat(stats.strength + strDelta);
  return { ...character, stats };
}

const HINT_HANG = 'Press <b>F</b> to pull up';
const HINT_RISING = 'Rise! Press <b>J</b> at the top';
const HINT_FALLING = 'Lower down. Press <b>K</b> at full hang';

/**
 * Rhythm pull-up mini-game. The recruit rises and falls; the player presses
 * F to start a rep, J at the top (chin over bar), and K at the bottom (full hang).
 * STR/END widen timing windows, speed the motion, and set the energy pool.
 * A rep counts when the top key lands in-window; hitting the bottom key too
 * makes it a perfect rep with reduced energy cost. Ends at the timer or 0 energy.
 *
 * @param {import('./pullupScene.js').PullupScene} scene
 * @param {object} character
 * @returns {Promise<{ reps: number, perfectReps: number, energyLeft: number, strDelta: number }>}
 */
export function runPullupMiniGame(scene, character) {
  return new Promise(resolve => {
    const str = character.stats.strength;
    const end = character.stats.endurance;
    const windowMs = getPullupTimingWindowMs(str, end);
    const ascentMs = getPullupAscentMs(str);
    const descentMs = getPullupDescentMs(str, end);
    const maxEnergy = getPullupMaxEnergy(str, end);

    let phase = 'hang'; // hang | rising | top | falling | bottom
    let reps = 0;
    let perfectReps = 0;
    let energy = maxEnergy;
    let phaseStart = 0;
    let windowStart = 0;
    let running = true;
    let lastTs = performance.now();
    let elapsed = 0;
    const sessionMs = PULLUP_SESSION_SEC * 1000;

    scene.setReps(0);
    scene.setEnergy(1);
    scene.setTimer(PULLUP_SESSION_SEC);
    scene.setPullHeight(0);
    scene.setPhaseHint(HINT_HANG);

    function finish() {
      if (!running) return;
      running = false;
      window.removeEventListener('keydown', onKey);
      resolve({ reps, perfectReps, energyLeft: energy, ...gradePullups(reps) });
    }

    function endCycle(perfect) {
      energy = Math.max(0, energy - getPullupEnergyCost(str, end, perfect));
      scene.setEnergy(energy / maxEnergy);
      phase = 'hang';
      scene.setPullHeight(0);
      if (energy <= 0) {
        finish();
        return;
      }
      scene.setPhaseHint(HINT_HANG);
    }

    function onKey(e) {
      if (!running || e.repeat || !RELEVANT_CODES.includes(e.code)) return;
      e.preventDefault();

      switch (phase) {
        case 'hang':
          if (e.code === PULLUP_KEYS.pull) {
            phase = 'rising';
            phaseStart = performance.now();
            scene.setPhaseHint(HINT_RISING);
          }
          break;
        case 'top':
          if (e.code === PULLUP_KEYS.top) {
            reps++;
            scene.setReps(reps);
            scene.flash('perfect');
            phase = 'falling';
            phaseStart = performance.now();
            scene.setPhaseHint(HINT_FALLING);
          } else {
            scene.flash('miss');
            endCycle(false);
          }
          break;
        case 'bottom':
          if (e.code === PULLUP_KEYS.bottom) {
            perfectReps++;
            scene.flash('perfect');
            endCycle(true);
          } else {
            scene.flash('miss');
            endCycle(false);
          }
          break;
        default:
          // rising or falling: any relevant press is mistimed
          scene.flash('miss');
          endCycle(false);
      }
    }

    function tick(ts) {
      if (!running) return;
      elapsed += ts - lastTs;
      lastTs = ts;

      scene.setTimer((sessionMs - elapsed) / 1000);
      if (elapsed >= sessionMs) {
        finish();
        return;
      }

      if (phase === 'rising') {
        const p = Math.min(1, (ts - phaseStart) / ascentMs);
        scene.setPullHeight(p);
        if (p >= 1) {
          phase = 'top';
          windowStart = ts;
        }
      } else if (phase === 'top') {
        scene.setPullHeight(1);
        if (ts - windowStart > windowMs) {
          scene.flash('miss');
          endCycle(false);
        }
      } else if (phase === 'falling') {
        const p = Math.min(1, (ts - phaseStart) / descentMs);
        scene.setPullHeight(1 - p);
        if (p >= 1) {
          phase = 'bottom';
          windowStart = ts;
        }
      } else if (phase === 'bottom') {
        scene.setPullHeight(0);
        if (ts - windowStart > windowMs) {
          scene.flash('miss');
          endCycle(false);
        }
      }

      requestAnimationFrame(tick);
    }

    window.addEventListener('keydown', onKey);
    requestAnimationFrame(tick);
  });
}
