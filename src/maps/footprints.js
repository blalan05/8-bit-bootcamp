import * as THREE from 'three';

export class FootprintsMap extends THREE.Mesh {
  constructor(width, height) {
    super();

    this.width = width;
    this.height = height;
    
    this.createMap()
    this.material = new THREE.MeshStandardMaterial({ color: 0x00aa00 });
    
    this.rotation.x = -Math.PI / 2;
  }

  createMap() {
    this.geometry.dispose()
    this.geometry = new THREE.PlaneGeometry(this.width, this.height);
    this.position.set(this.width / 2, 0, this.height / 2);
    this.createAdminBuilding();
  }

  createAdminBuilding() {
    const adminBuilding = new THREE.Mesh(
      new THREE.BoxGeometry(4, 6, 1.5),
      new THREE.MeshStandardMaterial({ color: 0xff0000 })
    );
    adminBuilding.position.set(2, 2, 0.75);
    this.add(adminBuilding);
  }

}