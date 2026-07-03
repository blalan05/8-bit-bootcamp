import * as THREE from 'three';
import { createCharacterMesh, applyAppearanceToMesh } from '../character/appearance.js';

export class Player extends THREE.Group {
  raycaster = new THREE.Raycaster();

  constructor(camera, map, character, bounds = { width: 50, height: 40 }) {
    super();

    this.character = character;
    this.characterMesh = createCharacterMesh();
    this.characterMesh.position.y = 0.28;
    this.add(this.characterMesh);
    applyAppearanceToMesh(this.characterMesh, character);

    this.position.set(5, 0, 5);

    this.camera = camera;
    this.map = map;
    this.bounds = bounds;
    window.addEventListener('mousedown', this.onMouseDown.bind(this));
  }

  updateAppearance() {
    applyAppearanceToMesh(this.characterMesh, this.character);
  }

  onMouseDown(event) {
    const coords = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    this.raycaster.setFromCamera(coords, this.camera);

    const intersects = this.raycaster.intersectObjects([this.map], true);
    if (intersects.length > 0) {
      const { x, z } = intersects[0].point;
      const clampedX = Math.max(0, Math.min(this.bounds.width, x));
      const clampedZ = Math.max(0, Math.min(this.bounds.height, z));
      this.position.set(clampedX, 0, clampedZ);
    }
  }
}
