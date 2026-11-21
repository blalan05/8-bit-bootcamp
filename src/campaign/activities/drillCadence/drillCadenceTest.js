import { MIN_STAT, MAX_STAT } from '../../../character/stats.js';
import { buildActivityResult } from '../../activityRegistry.js';
import { DrillCadenceScene, DRILL_KEYS } from './drillCadenceScene.js';
import { declarePadKeys } from '../lib/touchPad.js';

const LEFT_FACE = { prep: 'LEFT', exec: 'FACE!', key: 'KeyA' };
const RIGHT_FACE = { prep: 'RIGHT', exec: 'FACE!', key: 'KeyD' };
const FORWARD_MARCH = { prep: 'FORWARD', exec: 'MARCH!', key: 'KeyW' };
const HALT = { prep: 'SQUAD', exec: 'HALT!', key: 'KeyS' };

const COMMANDS = [
  LEFT_FACE, RIGHT_FACE, FORWARD_MARCH, HALT,
  LEFT_FACE, HALT, RIGHT_FACE, FORWARD_MARCH,
  HALT, LEFT_FACE, RIGHT_FACE, HALT
];

const DRILL_CODES = DRILL_KEYS.map(k => k.code);

/** Preparatory command hold before the press window opens. */
const PREP_MS = 1700;
/** Pause after HIT / MISS. */
const RESULT_PAUSE_MS = 700;

function statT(value) {
  return (Math.max(MIN_STAT, Math.min(MAX_STAT, value)) - MIN_STAT) / (MAX_STAT - MIN_STAT);
}

/** Execution window 2000..2600ms. */
function getWindowMs(dexterity, leadership) {
  const t = (statT(dexterity) + statT(leadership)) / 2;
  return Math.round(2000 + t * 600);
}

/**
 * @param {HTMLElement} container
 * @param {object} character
 */
export function runDrillCadence(container, character) {
  return new Promise(resolve => {
    const scene = new DrillCadenceScene(container, (code) => press(code));
    const windowMs = getWindowMs(character.stats.dexterity, character.stats.leadership);

    let index = 0;
    let hits = 0;
    let phase = 'idle';
    let running = true;
    let timer = null;

    scene.setHits(0, COMMANDS.length);
    scene.setIdle('READY...');

    function finish() {
      if (!running) return;
      running = false;
      clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
      undeclare();
      scene.dispose();
      const score = COMMANDS.length > 0 ? hits / COMMANDS.length : 0;
      resolve(buildActivityResult(score, ['leadership', 'dexterity'], { hits, total: COMMANDS.length }));
    }

    function settle(hit) {
      phase = 'result';
      clearTimeout(timer);
      const cmd = COMMANDS[index];
      if (hit) hits++;
      scene.flash(hit ? 'hit' : 'miss');
      scene.setKeys(cmd.key, hit ? 'hit' : 'miss');
      index++;
      scene.setHits(hits, COMMANDS.length);
      timer = setTimeout(nextCommand, RESULT_PAUSE_MS);
    }

    function nextCommand() {
      if (index >= COMMANDS.length) {
        finish();
        return;
      }
      const cmd = COMMANDS[index];
      phase = 'prep';
      scene.showPrep(cmd.prep, cmd.key);
      timer = setTimeout(() => {
        phase = 'exec';
        scene.pulseBeat();
        scene.showExec(cmd.exec, cmd.key);
        timer = setTimeout(() => settle(false), windowMs);
      }, PREP_MS);
    }

    function press(code) {
      if (!running || !DRILL_CODES.includes(code)) return;
      if (phase === 'prep') { scene.flash('wait'); return; }
      if (phase !== 'exec') return;
      settle(code === COMMANDS[index].key);
    }

    function onKey(e) {
      if (!DRILL_CODES.includes(e.code)) return;
      e.preventDefault();
      if (!e.repeat) press(e.code);
    }

    window.addEventListener('keydown', onKey);
    const undeclare = declarePadKeys(DRILL_CODES);
    timer = setTimeout(nextCommand, 1200);
  });
}
