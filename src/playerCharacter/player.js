import * as THREE from 'three';

export class Player extends THREE.Mesh {
  raycaster = new THREE.Raycaster();

  constructor(camera, map, bounds = { width: 50, height: 40 }) {
    super();

    this.geometry = new THREE.CapsuleGeometry(0.25, 0.5);
    this.material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    this.position.set(5, 0.5, 5);

    this.camera = camera;
    this.map = map;
    this.bounds = bounds;
    window.addEventListener('mousedown', this.onMouseDown.bind(this));
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
      this.position.set(clampedX, 0.5, clampedZ);
    }
  }
}



