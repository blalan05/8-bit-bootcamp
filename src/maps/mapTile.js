/**
 * MapTile - Renders a single map tile with buildings, NPCs, and activities.
 * Coordinates: bottom-left to top-right. Each tile is positioned in world space.
 */

import * as THREE from 'three';
import { getTileBounds } from './mapParser.js';

/**
 * @typedef {Object} MapObject
 * @property {string} name
 * @property {string} type - 'building' | 'npc' | 'activity'
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
      new THREE.MeshStandardMaterial({ color: 0x00aa00 })
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
    const { type, x, y, z } = obj;

    // Object position is in world space; convert to local (relative to tile center)
    const localX = x - this.position.x;
    const localZ = z - this.position.z;

    switch (type) {
      case 'building': {
        const size = obj.size ?? { x: 2, y: 2, z: 2 };
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(size.x, size.y, size.z), // Three.js: width(X), height(Y), depth(Z)
          new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );
        mesh.position.set(localX, size.y / 2, localZ);
        mesh.userData.object = obj;
        return mesh;
      }
      case 'npc': {
        const mesh = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.2, 0.5),
          new THREE.MeshStandardMaterial({ color: 0xffff00 })
        );
        mesh.position.set(localX, 0.35, localZ);
        mesh.userData.object = obj;
        return mesh;
      }
      case 'activity': {
        const mesh = new THREE.Mesh(
          new THREE.CylinderGeometry(0.5, 0.5, 0.1),
          new THREE.MeshStandardMaterial({ color: 0x00aaff })
        );
        mesh.position.set(localX, 0.05, localZ);
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
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
}
