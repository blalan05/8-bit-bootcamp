/**
 * MapTile - Renders a single map tile with buildings, NPCs, and activities.
 * Coordinates: bottom-left to top-right. Each tile is positioned in world space.
 *
 * Visuals use the 8-bit sprite pipeline: ground and activities are flat planes
 * with repeated pixel textures, buildings are camera-facing billboard sprites.
 */

import * as THREE from 'three';
import { getTileBounds } from './mapParser.js';
import { getTileMaterial, getBillboardMaterial, getManifestDefault, ISO_YAW } from '../art/assetLoader.js';

/** World units covered by one texture repetition (matches artBible.worldUnitsPerTexture) */
const TEXTURE_WORLD_UNITS = 2;
const ACTIVITY_PATCH_SIZE = 6;
const BUILDING_SPRITE_SIZE = 4;

/**
 * @typedef {Object} MapObject
 * @property {string} name
 * @property {string} type - 'building' | 'npc' | 'activity' | 'road'
 * @property {string} [spriteId] - sprite override; falls back to type default from the manifest
 * @property {Object} [size]
 * @property {number} x
 * @property {number} y
 * @property {number} z
 */

export class MapTile extends THREE.Group {
  /**
   * @param {import('./mapParser.js').ParsedMap} parsedMap
   * @param {number} tileX
   * @param {number} tileZ
   * @param {MapObject[]} objects
   */
  constructor(parsedMap, tileX, tileZ, objects) {
    super();

    this.parsedMap = parsedMap;
    this.tileX = tileX;
    this.tileZ = tileZ;
    this.tileSize = parsedMap.tileSize;

    const bounds = getTileBounds(parsedMap, tileX, tileZ);
    this.position.set(
      bounds.minX + this.tileSize / 2,
      0,
      bounds.minZ + this.tileSize / 2
    );

    this.userData.key = `${tileX},${tileZ}`;

    // Ground plane for this tile
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(this.tileSize, this.tileSize),
      getTileMaterial(getManifestDefault('ground'), this.tileSize / TEXTURE_WORLD_UNITS)
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    this.add(ground);

    // Create objects (buildings, NPCs, activities) - positions are in world space
    for (const obj of objects) {
      const mesh = this.createObjectMesh(obj);
      if (mesh) this.add(mesh);
    }
  }

  /**
   * Create a Three.js mesh from a map object definition.
   * @param {MapObject} obj
   * @returns {THREE.Mesh | null}
   */
  createObjectMesh(obj) {
    const { type, x, z } = obj;

    // Object position is in world space; convert to local (relative to tile center)
    const localX = x - this.position.x;
    const localZ = z - this.position.z;

    switch (type) {
      case 'building': {
        const size = obj.size ?? { x: BUILDING_SPRITE_SIZE, y: BUILDING_SPRITE_SIZE, z: BUILDING_SPRITE_SIZE };
        const height = Math.max(size.x, size.y);
        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(size.x, height),
          getBillboardMaterial(obj.spriteId ?? getManifestDefault('building'))
        );
        mesh.rotation.y = ISO_YAW;
        mesh.position.set(localX, height / 2, localZ);
        mesh.userData.object = obj;
        return mesh;
      }
      case 'npc': {
        const mesh = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.2, 0.5),
          new THREE.MeshStandardMaterial({ color: 0xffff00 })
        );
        mesh.userData.ownMaterial = true;
        mesh.position.set(localX, 0.35, localZ);
        mesh.userData.object = obj;
        return mesh;
      }
      case 'activity': {
        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(ACTIVITY_PATCH_SIZE, ACTIVITY_PATCH_SIZE),
          getTileMaterial(
            obj.spriteId ?? getManifestDefault('activity'),
            ACTIVITY_PATCH_SIZE / TEXTURE_WORLD_UNITS
          )
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(localX, 0.02, localZ);
        mesh.userData.object = obj;
        return mesh;
      }
      case 'road': {
        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(this.tileSize, this.tileSize),
          getTileMaterial(obj.spriteId ?? getManifestDefault('road'), this.tileSize / TEXTURE_WORLD_UNITS)
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(localX, 0.01, localZ);
        mesh.userData.object = obj;
        return mesh;
      }
      default:
        return null;
    }
  }

  dispose() {
    this.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      // Sprite materials are cached and shared across tiles - only dispose owned ones
      if (child.material && child.userData.ownMaterial) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
}
