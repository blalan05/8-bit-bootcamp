/**
 * TileLoader - Dynamically loads and unloads map tiles based on player position.
 * Loads tiles when user gets within 20% of a tile's edge.
 * Load order: bottom-left to top-right (increasing Z, then X).
 */

import * as THREE from 'three';
import { parseMaps, getTileBounds } from './mapParser.js';
import { MapTile } from './mapTile.js';

/** @type {number} Fraction of tile size that triggers loading (0.2 = 20%) */
const EDGE_THRESHOLD = 0.2;

/**
 * @typedef {Object} TileLoaderOptions
 * @property {() => { x: number, z: number }} positionGetter - Returns current user/player position
 * @property {number} [unloadDistance] - Tiles beyond this many tiles from current are unloaded (default: 3)
 */

export class TileLoader {
  /**
   * @param {Object} mapsConfig - Raw maps.json content (or parsed result)
   * @param {THREE.Object3D} parent - Scene or container to add tiles to
   * @param {TileLoaderOptions} options
   */
  constructor(mapsConfig, parent, options = {}) {
    this.parent = parent;
    this.positionGetter = options.positionGetter ?? (() => ({ x: 0, z: 0 }));
    this.unloadDistance = options.unloadDistance ?? 3;

    const parsed = mapsConfig.maps ? parseMaps(mapsConfig) : null;
    this.parsedMaps = parsed?.maps ?? (mapsConfig.parsedMaps ?? new Map());
    this.tileSize = parsed?.tileSize ?? mapsConfig.tileSize ?? 10;

    /** @type {Map<string, MapTile>} Loaded tiles keyed by "tileX,tileZ" */
    this.loadedTiles = new Map();
    /** @type {string} Current map name */
    this.currentMapName = null;
  }

  /**
   * Set the active map and load initial tiles.
   * @param {string} mapName
   */
  setMap(mapName) {
    this.currentMapName = mapName;
    this.update();
  }

  /**
   * Get parsed map config.
   * @param {string} [mapName]
   * @returns {import('./mapParser.js').ParsedMap | null}
   */
  getParsedMap(mapName = this.currentMapName) {
    return this.parsedMaps.get(mapName) ?? null;
  }

  /**
   * Check if position is within load trigger zone for a tile edge.
   * Returns which adjacent tiles need to be loaded.
   * @param {number} x
   * @param {number} z
   * @param {import('./mapParser.js').ParsedMap} parsedMap
   * @returns {{ tileX: number, tileZ: number }[]}
   */
  getTilesToLoad(x, z, parsedMap) {
    const { tileSize } = parsedMap;
    const tx = Math.floor(x / tileSize);
    const tz = Math.floor(z / tileSize);
    const margin = tileSize * EDGE_THRESHOLD;
    const tilesToLoad = new Set();

    // Always load current tile
    tilesToLoad.add(`${tx},${tz}`);

    const bounds = getTileBounds(parsedMap, tx, tz);

    // Within 20% of right edge -> load tile to the right
    if (x >= bounds.maxX - margin) tilesToLoad.add(`${tx + 1},${tz}`);
    // Within 20% of left edge -> load tile to the left
    if (x <= bounds.minX + margin) tilesToLoad.add(`${tx - 1},${tz}`);
    // Within 20% of top edge (high Z) -> load tile above
    if (z >= bounds.maxZ - margin) tilesToLoad.add(`${tx},${tz + 1}`);
    // Within 20% of bottom edge (low Z) -> load tile below
    if (z <= bounds.minZ + margin) tilesToLoad.add(`${tx},${tz - 1}`);

    // Corners: load diagonal tiles when near corner
    if (x >= bounds.maxX - margin && z >= bounds.maxZ - margin) tilesToLoad.add(`${tx + 1},${tz + 1}`);
    if (x <= bounds.minX + margin && z >= bounds.maxZ - margin) tilesToLoad.add(`${tx - 1},${tz + 1}`);
    if (x >= bounds.maxX - margin && z <= bounds.minZ + margin) tilesToLoad.add(`${tx + 1},${tz - 1}`);
    if (x <= bounds.minX + margin && z <= bounds.minZ + margin) tilesToLoad.add(`${tx - 1},${tz - 1}`);

    // Filter to map boundary: 0 <= tileX < tilesX, 0 <= tileZ < tilesZ
    return Array.from(tilesToLoad)
      .map(key => {
        const [tileX, tileZ] = key.split(',').map(Number);
        return { tileX, tileZ };
      })
      .filter(
        ({ tileX, tileZ }) =>
          tileX >= 0 &&
          tileX < parsedMap.tilesX &&
          tileZ >= 0 &&
          tileZ < parsedMap.tilesZ
      );
  }

  /**
   * Load a tile if not already loaded.
   * @param {number} tileX
   * @param {number} tileZ
   * @param {import('./mapParser.js').ParsedMap} parsedMap
   */
  loadTile(tileX, tileZ, parsedMap) {
    // Respect map boundary
    if (
      tileX < 0 ||
      tileX >= parsedMap.tilesX ||
      tileZ < 0 ||
      tileZ >= parsedMap.tilesZ
    )
      return;

    const key = `${tileX},${tileZ}`;
    if (this.loadedTiles.has(key)) return;

    const objects = parsedMap.tiles[key] ?? [];
    const tile = new MapTile(parsedMap, tileX, tileZ, objects);
    this.loadedTiles.set(key, tile);
    this.parent.add(tile);
  }

  /**
   * Unload tiles that are too far from the player.
   * @param {number} cx - Current X
   * @param {number} cz - Current Z
   */
  unloadDistantTiles(cx, cz) {
    const tx = Math.floor(cx / this.tileSize);
    const tz = Math.floor(cz / this.tileSize);

    for (const [key, tile] of this.loadedTiles.entries()) {
      const [tileX, tileZ] = key.split(',').map(Number);
      const dx = Math.abs(tileX - tx);
      const dz = Math.abs(tileZ - tz);
      if (dx > this.unloadDistance || dz > this.unloadDistance) {
        this.parent.remove(tile);
        tile.dispose();
        this.loadedTiles.delete(key);
      }
    }
  }

  /**
   * Call each frame or when position changes to update loaded tiles.
   */
  update() {
    const parsedMap = this.getParsedMap();
    if (!parsedMap) return;

    const { x, z } = this.positionGetter();

    const tilesToLoad = this.getTilesToLoad(x, z, parsedMap);
    for (const { tileX, tileZ } of tilesToLoad) {
      this.loadTile(tileX, tileZ, parsedMap);
    }

    this.unloadDistantTiles(x, z);
  }
}
