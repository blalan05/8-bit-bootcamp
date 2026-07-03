import * as THREE from 'three';
import { createCharacterMesh, applyAppearanceToMesh } from './appearance.js';

export class CharacterPreview {
  constructor(container) {
    this.container = container;
    this.width = 220;
    this.height = 320;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);

    this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 0.1, 100);
    this.camera.position.set(1.2, 0.9, 1.8);
    this.camera.lookAt(0, 0.45, 0);

    const sun = new THREE.DirectionalLight(0xffffff, 2);
    sun.position.set(2, 3, 2);
    this.scene.add(sun);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    this.mesh = createCharacterMesh();
    this.scene.add(this.mesh);

    this._boundAnimate = this._animate.bind(this);
    this._animating = true;
    requestAnimationFrame(this._boundAnimate);
  }

  update(character) {
    applyAppearanceToMesh(this.mesh, character);
  }

  _animate() {
    if (!this._animating) return;
    this.mesh.rotation.y += 0.008;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this._boundAnimate);
  }

  dispose() {
    this._animating = false;
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
