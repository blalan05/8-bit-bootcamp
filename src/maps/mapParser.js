/**
 * MapParser - Parses maps.json and organizes map data into tiles.
 * Splits maps into tiles from bottom-left (0,0) to top-right (maxX, maxZ).
 * Objects are assigned to tiles based on their (x, z) position.
 */

/**
 * @typedef {Object} MapObject
 * @property {string} name
 * @property {string} type - 'building' | 'npc' | 'activity'
 * @property {Object} [size]
 * @property {number} x
 * @property {number} y
 * @property {number} z
 */

/**
 * @typedef {Object} MapTile
 * @property {number} tileX
 * @property {number} tileZ
 * @property {MapObject[]} objects
 */

/**
 * @typedef {Object} ParsedMap
 * @property {string} name
 * @property {number} width
 * @property {number} height
 * @property {number} tileSize
 * @property {number} tilesX - number of tiles along X
 * @property {number} tilesZ - number of tiles along Z
 * @property {Object.<string, MapObject[]>} tiles - key: "tileX,tileZ", value: objects in that tile
 */

/**
 * Parse maps config and organize into tiles.
 * @param {Object} config - Raw maps.json content
 * @returns {{ tileSize: number, maps: Map<string, ParsedMap> }}
 */
export function parseMaps(config) {
  const tileSize = config.tileSize ?? 10;
  const maps = new Map();

  for (const mapDef of config.maps ?? []) {
    if (!mapDef?.name) continue;

    const { width = 20, height = 20 } = mapDef;
    const tilesX = Math.ceil(width / tileSize);
    const tilesZ = Math.ceil(height / tileSize);
    const tiles = {};

    // Assign each object to the tile containing its (x, z) position
    for (const obj of mapDef.objects ?? []) {
      const tx = Math.floor(obj.x / tileSize);
      const tz = Math.floor(obj.z / tileSize);
      const key = `${tx},${tz}`;
      if (!tiles[key]) tiles[key] = [];
      tiles[key].push(obj);
    }

    maps.set(mapDef.name, {
      name: mapDef.name,
      width,
      height,
      tileSize,
      tilesX,
      tilesZ,
      tiles
    });
  }

  return { tileSize, maps };
}

/**
 * Get tile bounds in world coordinates (bottom-left to top-right).
 * @param {ParsedMap} parsedMap
 * @param {number} tileX
 * @param {number} tileZ
 * @returns {{ minX: number, maxX: number, minZ: number, maxZ: number }}
 */
export function getTileBounds(parsedMap, tileX, tileZ) {
  const { tileSize } = parsedMap;
  return {
    minX: tileX * tileSize,
    maxX: (tileX + 1) * tileSize,
    minZ: tileZ * tileSize,
    maxZ: (tileZ + 1) * tileSize
  };
}

/**
 * Get the tile key for a world position (x, z).
 * @param {ParsedMap} parsedMap
 * @param {number} x
 * @param {number} z
 * @returns {string}
 */
export function getTileKeyAtPosition(parsedMap, x, z) {
  const tx = Math.floor(x / parsedMap.tileSize);
  const tz = Math.floor(z / parsedMap.tileSize);
  return `${tx},${tz}`;
}

/**
 * Enumerate tiles from bottom-left to top-right.
 * @param {ParsedMap} parsedMap
 * @yields {{ tileX: number, tileZ: number, key: string }}
 */
export function* enumerateTiles(parsedMap) {
  for (let tz = 0; tz < parsedMap.tilesZ; tz++) {
    for (let tx = 0; tx < parsedMap.tilesX; tx++) {
      yield { tileX: tx, tileZ: tz, key: `${tx},${tz}` };
    }
  }
}
