/**
 * Fog-of-war bookkeeping. The map is divided into square cells; cells within
 * REVEAL_RADIUS of the player are marked explored and persisted on the save.
 */

import { isSandbox, setExploredCells } from '../campaign/campaignState.js';
import { getCampaignForCharacter } from '../campaigns/campaignRegistry.js';

/** World units per fog cell */
export const FOG_CELL_SIZE = 5;
/** World units around the player that count as seen */
export const REVEAL_RADIUS = 11;

/**
 * @param {{ width: number, height: number }} parsedMap
 */
export function getFogGrid(parsedMap) {
  return {
    cols: Math.ceil(parsedMap.width / FOG_CELL_SIZE),
    rows: Math.ceil(parsedMap.height / FOG_CELL_SIZE)
  };
}

export function getCellIndex(grid, x, z) {
  const col = Math.floor(x / FOG_CELL_SIZE);
  const row = Math.floor(z / FOG_CELL_SIZE);
  if (col < 0 || row < 0 || col >= grid.cols || row >= grid.rows) return -1;
  return row * grid.cols + col;
}

/** Fog applies to campaigns unless the campaign opts out (e.g. the home depot). */
export function isFogEnabled(character) {
  if (isSandbox(character)) return false;
  return getCampaignForCharacter(character).fogOfWar !== false;
}

export class ExplorationTracker {
  /**
   * @param {object} options
   * @param {() => object} options.getCharacter
   * @param {() => object | null} options.getParsedMap
   * @param {() => { x: number, z: number }} options.getPosition
   * @param {(character: object) => void} options.onCharacterUpdate
   */
  constructor({ getCharacter, getParsedMap, getPosition, onCharacterUpdate }) {
    this.getCharacter = getCharacter;
    this.getParsedMap = getParsedMap;
    this.getPosition = getPosition;
    this.onCharacterUpdate = onCharacterUpdate;
    /** @type {Map<string, Set<number>>} */
    this._known = new Map();
    this._lastKey = '';
  }

  /** @param {string} mapName */
  getExplored(mapName) {
    let set = this._known.get(mapName);
    if (!set) {
      set = new Set(this.getCharacter()?.campaign?.explored?.[mapName] ?? []);
      this._known.set(mapName, set);
    }
    return set;
  }

  update() {
    const parsedMap = this.getParsedMap();
    const character = this.getCharacter();
    if (!parsedMap || !character) return;

    const { x, z } = this.getPosition();
    const grid = getFogGrid(parsedMap);
    const here = getCellIndex(grid, x, z);
    const key = `${parsedMap.name}:${here}`;
    if (key === this._lastKey) return;
    this._lastKey = key;

    const explored = this.getExplored(parsedMap.name);
    const reach = Math.ceil(REVEAL_RADIUS / FOG_CELL_SIZE);
    const col0 = Math.floor(x / FOG_CELL_SIZE);
    const row0 = Math.floor(z / FOG_CELL_SIZE);
    let changed = false;

    for (let row = row0 - reach; row <= row0 + reach; row++) {
      for (let col = col0 - reach; col <= col0 + reach; col++) {
        if (col < 0 || row < 0 || col >= grid.cols || row >= grid.rows) continue;
        const cx = (col + 0.5) * FOG_CELL_SIZE;
        const cz = (row + 0.5) * FOG_CELL_SIZE;
        if (Math.hypot(cx - x, cz - z) > REVEAL_RADIUS) continue;
        const index = row * grid.cols + col;
        if (!explored.has(index)) {
          explored.add(index);
          changed = true;
        }
      }
    }

    if (changed) {
      const cells = [...explored].sort((a, b) => a - b);
      this.onCharacterUpdate(setExploredCells(character, parsedMap.name, cells));
    }
  }
}
