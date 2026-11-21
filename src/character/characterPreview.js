import * as THREE from 'three';
import { createRecruitSprite, applyAppearanceToSprite } from './appearance.js';

/** World units the recruit rises from full hang to chin-over-bar. */
const PULL_RANGE = 0.9;

/**
 * Live recruit sprite preview for the character builder.
 * Renders at low internal resolution and upscales with hard pixels
 * to match the in-game 8-bit look.
 *
 * With `fit: true` the canvas display size is left to CSS and the render
 * resolution / camera aspect track it; `width`/`height` are only the initial size.
 *
 * @param {HTMLElement} container
 * @param {{ width?: number, height?: number, background?: number | null, pixelScale?: number, fit?: boolean }} [options]
 */
export class CharacterPreview {
  constructor(container, options = {}) {
    this.container = container;
    this.width = options.width ?? 220;
    this.height = options.height ?? 320;
    this.pixelScale = options.pixelScale ?? 4;

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(this.width / this.pixelScale, this.height / this.pixelScale, false);
    if (!options.fit) {
      this.renderer.domElement.style.width = `${this.width}px`;
      this.renderer.domElement.style.height = `${this.height}px`;
    }
    this.renderer.domElement.style.imageRendering = 'pixelated';
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    if (options.background === null) {
      this.scene.background = null;
    } else {
      this.scene.background = new THREE.Color(options.background ?? 0x1a1a2e);
    }

    const aspect = this.width / this.height;
    const viewHeight = 2;
    this.camera = new THREE.OrthographicCamera(
      (-viewHeight * aspect) / 2,
      (viewHeight * aspect) / 2,
      viewHeight / 2,
      -viewHeight / 2,
      0.1,
      10
    );
    this.camera.position.set(0, 0.85, 3);
    this.camera.lookAt(0, 0.85, 0);

    this.mesh = createRecruitSprite({ stats: {}, appearance: {} });
    this.scene.add(this.mesh);

    this._baseY = this.mesh.position.y;
    this._pullT = 0;

    this._resizeObserver = null;
    if (options.fit && typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(entries => {
        const box = entries[0]?.contentRect;
        if (box) this.resize(box.width, box.height);
      });
      this._resizeObserver.observe(this.renderer.domElement);
    }

    this._boundAnimate = this._animate.bind(this);
    this._animating = true;
    requestAnimationFrame(this._boundAnimate);
  }

  /**
   * Match render resolution and camera aspect to a new display size (CSS px).
   * @param {number} width
   * @param {number} height
   */
  resize(width, height) {
    if (width < 1 || height < 1) return;
    if (width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.renderer.setSize(
      Math.max(1, Math.round(width / this.pixelScale)),
      Math.max(1, Math.round(height / this.pixelScale)),
      false
    );
    const viewHeight = this.camera.top - this.camera.bottom;
    const halfWidth = (viewHeight * (width / height)) / 2;
    this.camera.left = -halfWidth;
    this.camera.right = halfWidth;
    this.camera.updateProjectionMatrix();
  }

  update(character) {
    applyAppearanceToSprite(this.mesh, character);
    this._baseY = this.mesh.position.y;
    this._applyPull();
  }

  /**
   * Vertical pull-up motion. 0 = full hang (arms extended), 1 = chin over the bar.
   * @param {number} t
   */
  setPullHeight(t) {
    this._pullT = Math.max(0, Math.min(1, t));
    this._applyPull();
  }

  _applyPull() {
    this.mesh.position.y = this._baseY + this._pullT * PULL_RANGE;
  }

  _animate() {
    if (!this._animating) return;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this._boundAnimate);
  }

  dispose() {
    this._animating = false;
    this._resizeObserver?.disconnect();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
