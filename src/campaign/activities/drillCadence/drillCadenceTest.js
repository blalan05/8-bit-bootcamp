import { MIN_STAT, MAX_STAT } from '../../../character/stats.js';
import { buildActivityResult } from '../../activityRegistry.js';
import { DrillCadenceScene } from './drillCadenceScene.js';

const COMMANDS = [
  { label: 'LEFT FACE', key: 'KeyL' },
  { label: 'RIGHT FACE', key: 'KeyR' },
  { label: 'FORWARD MARCH', key: 'KeyM' },
  { label: 'HALT', key: 'KeyH' },
  { label: 'LEFT FACE', key: 'KeyL' },
  { label: 'HALT', key: 'KeyH' },
  { label: 'RIGHT FACE', key: 'KeyR' },
  { label: 'FORWARD MARCH', key: 'KeyM' },
  { label: 'HALT', key: 'KeyH' },
  { label: 'LEFT FACE', key: 'KeyL' },
  { label: 'RIGHT FACE', key: 'KeyR' },
  { label: 'HALT', key: 'KeyH' }
];

function statT(value) {
  return (Math.max(MIN_STAT, Math.min(MAX_STAT, value)) - MIN_STAT) / (MAX_STAT - MIN_STAT);
}

function getBeatMs(dexterity, leadership) {
  const t = (statT(dexterity) + statT(leadership)) / 2;
  return Math.round(1400 - t * 400);
}

function getWindowMs(dexterity, leadership) {
  const t = (statT(dexterity) + statT(leadership)) / 2;
  return Math.round(500 + t * 350);
}

/**
 * @param {HTMLElement} container
 * @param {object} character
 */
export function runDrillCadence(container, character) {
  return new Promise(resolve => {
    const scene = new DrillCadenceScene(container);
    const dex = character.stats.dexterity;
    const ldr = character.stats.leadership;
    const beatMs = getBeatMs(dex, ldr);
    const windowMs = getWindowMs(dex, ldr);

    let index = 0;
    let hits = 0;
    let waiting = false;
    let windowStart = 0;
    let running = true;
    let beatTimer = null;

    scene.setHits(0, COMMANDS.length);
    scene.setCommand('READY...');

    function finish() {
      if (!running) return;
      running = false;
      clearTimeout(beatTimer);
      window.removeEventListener('keydown', onKey);
      scene.dispose();
      const score = COMMANDS.length > 0 ? hits / COMMANDS.length : 0;
      resolve(buildActivityResult(score, ['leadership', 'dexterity'], { hits, total: COMMANDS.length }));
    }

    function nextCommand() {
      if (index >= COMMANDS.length) {
        finish();
        return;
      }
      const cmd = COMMANDS[index];
      scene.pulseBeat();
      scene.setCommand(cmd.label);
      waiting = true;
      windowStart = performance.now();
      beatTimer = setTimeout(() => {
        if (waiting) {
          scene.flash('miss');
          index++;
          scene.setHits(hits, COMMANDS.length);
          waiting = false;
          setTimeout(nextCommand, beatMs * 0.4);
        }
      }, windowMs);
    }

    function onKey(e) {
      if (!running || !waiting) return;
      if (['KeyL', 'KeyR', 'KeyM', 'KeyH'].includes(e.code)) e.preventDefault();
      const cmd = COMMANDS[index];
      if (e.code === cmd.key) {
        clearTimeout(beatTimer);
        hits++;
        scene.flash('hit');
        index++;
        scene.setHits(hits, COMMANDS.length);
        waiting = false;
        setTimeout(nextCommand, beatMs * 0.35);
      } else if (['KeyL', 'KeyR', 'KeyM', 'KeyH'].includes(e.code)) {
        clearTimeout(beatTimer);
        scene.flash('miss');
        index++;
        scene.setHits(hits, COMMANDS.length);
        waiting = false;
        setTimeout(nextCommand, beatMs * 0.35);
      }
    }

    window.addEventListener('keydown', onKey);
    setTimeout(nextCommand, beatMs);
  });
}
