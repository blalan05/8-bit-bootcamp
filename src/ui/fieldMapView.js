import { getMapBackground } from '../campaigns/campaignRegistry.js';
import { FOG_CELL_SIZE, getFogGrid, getCellIndex, isFogEnabled } from '../maps/exploration.js';
import { escapeHtml } from './html.js';

/** Vertical squash of the ground plane: classic 2:1 pixel isometric. */
const ISO_SQUASH = 0.5;
const ACTIVITY_PATCH_SIZE = 6;
const DEFAULT_BUILDING_SIZE = { x: 4, y: 3, z: 4 };
const HOVER_RADIUS = 4.5;

const MAP_TITLES = {
  mcrdsd: 'MCRD San Diego',
  guadalcanal: 'Guadalcanal',
  iwojima: 'Iwo Jima',
  inchon: 'Inchon',
  chosin: 'Chosin Reservoir',
  khesanh: 'Khe Sanh',
  hue: 'Hue City',
  baghdad: 'Baghdad',
  fallujah: 'Fallujah',
  desertmarch: 'Libyan Desert',
  derne: 'Derne',
  belleauwood: 'Belleau Wood',
  nicaragua: 'Nicaragua',
  mogadishu: 'Mogadishu'
};

const SPRITE_COLORS = {
  'ground/grass': '#4f7a3c',
  'ground/sand': '#c8b070',
  'ground/jungle': '#2e5a2a',
  'ground/mud': '#6a5038',
  'ground/road': '#5c5c64',
  'ground/snow': '#e8eef4',
  'ground/ice': '#a8d0e8',
  'ground/volcanic': '#3a302c',
  'activity/pool': '#3d7ab8',
  'activity/track': '#a0522d',
  'activity/training': '#8a8a4a',
  'activity/landing': '#5a8ab0',
  'activity/flag': '#c03030',
  'activity/helipad': '#5a6a5a',
  'activity/oasis': '#3aa0a0',
  'activity/bridge': '#7a6a4a',
  'activity/suribachi': '#5a4a40',
  'building/barracks': '#a08a6a',
  'building/bunker': '#6a6a58',
  'building/cave': '#4a4038',
  'building/chapel': '#d8d0c0',
  'building/chow': '#b07a50',
  'building/citadel': '#8a7a60',
  'building/fort': '#a09070',
  'building/mosque': '#d8c8a0',
  'building/office': '#9a9aa8',
  'building/seawall': '#7a7a7a',
  'building/tent': '#6a7a4a',
  'building/urban': '#8a8070'
};

const TYPE_COLORS = { building: '#9a9aa8', activity: '#8a8a4a', road: '#5c5c64' };

function hexToRgb(hex) {
  const n = typeof hex === 'number' ? hex : parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function shade(hex, amount) {
  const [r, g, b] = hexToRgb(hex);
  const f = c => Math.round(amount >= 0 ? c + (255 - c) * amount : c * (1 + amount));
  return `rgb(${f(r)}, ${f(g)}, ${f(b)})`;
}

function objectColor(obj) {
  return SPRITE_COLORS[obj.spriteId] ?? TYPE_COLORS[obj.type] ?? '#888888';
}

function prettyMapName(name) {
  return MAP_TITLES[name] ?? name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * @param {HTMLElement} container
 * @param {import('./gameMenu.js').GameMenuContext} ctx
 * @param {{ close: () => void }} menu
 */
export function renderFieldMap(container, ctx, menu) {
  const parsedMap = ctx.getParsedMap();
  if (!parsedMap) {
    container.innerHTML = '<p class="recruiter-copy">No map data for this theater.</p>';
    return null;
  }

  const character = ctx.getCharacter();
  const fog = isFogEnabled(character);
  const grid = getFogGrid(parsedMap);
  const explored = ctx.exploration.getExplored(parsedMap.name);
  const isRevealed = (x, z) => !fog || explored.has(getCellIndex(grid, x, z));

  const objects = Object.values(parsedMap.tiles).flat();
  const objective = ctx.getObjective();
  const objectiveObj = objective
    ? objects.find(o => o.name === objective.locationName) ?? null
    : null;

  const discovered = objects.filter(o => o.type !== 'road' && (isRevealed(o.x, o.z) || o === objectiveObj));
  const locationNames = [...new Set(discovered.map(o => o.name))].sort((a, b) => {
    if (a === objectiveObj?.name) return -1;
    if (b === objectiveObj?.name) return 1;
    return a.localeCompare(b);
  });
  const totalCells = grid.cols * grid.rows;
  const exploredPct = fog ? Math.round((explored.size / totalCells) * 100) : 100;

  container.innerHTML = `
    <div class="fieldmap">
      <div class="fieldmap-header">
        <span class="fieldmap-title">${escapeHtml(prettyMapName(parsedMap.name))}</span>
        <span class="fieldmap-meta">${fog ? `Explored ${exploredPct}%` : 'Fully surveyed'}</span>
      </div>
      <div class="fieldmap-layout">
        <div class="fieldmap-canvas-wrap">
          <canvas class="fieldmap-canvas"></canvas>
        </div>
        <div class="fieldmap-side">
          ${objective ? `
            <div class="fieldmap-orders">
              <span class="schedule-label">Report to</span>
              <span class="schedule-value">${escapeHtml(objective.locationName)}</span>
              <span class="fieldmap-orders-title">${escapeHtml(objective.title)}</span>
            </div>
          ` : ''}
          <span class="schedule-label">Locations</span>
          <ul class="fieldmap-legend">
            ${locationNames.map(name => `
              <li><button type="button" class="fieldmap-legend-item${name === objectiveObj?.name ? ' fieldmap-legend-item--objective' : ''}" data-name="${escapeHtml(name)}">${escapeHtml(name)}</button></li>
            `).join('') || '<li class="fieldmap-empty">Nothing discovered yet.</li>'}
          </ul>
          <p class="fieldmap-hint">Click the map or a location to walk there.${fog ? ' Explore to lift the fog.' : ''}</p>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector('.fieldmap-canvas');
  const wrap = container.querySelector('.fieldmap-canvas-wrap');
  const g = canvas.getContext('2d');

  const W = parsedMap.width;
  const H = parsedMap.height;
  let scale = 1;
  let originX = 0;
  let originY = 0;
  let cssW = 0;
  let cssH = 0;
  /** @type {string | null} */
  let highlightName = null;
  /** @type {object | null} */
  let hoverObj = null;
  let frame = 0;

  const toScreen = (x, z) => [
    originX + (x - z + H) * scale,
    originY + (x + z) * ISO_SQUASH * scale
  ];

  const toWorld = (sx, sy) => {
    const u = (sx - originX) / scale - H;
    const v = (sy - originY) / (scale * ISO_SQUASH);
    return { x: (v + u) / 2, z: (v - u) / 2 };
  };

  function layout() {
    cssW = wrap.clientWidth;
    cssH = Math.max(220, wrap.clientHeight || Math.round(cssW * 0.62));
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    canvas.style.height = `${cssH}px`;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);

    const pad = 24;
    const spanU = W + H;
    const spanV = (W + H) * ISO_SQUASH;
    scale = Math.min((cssW - pad * 2) / spanU, (cssH - pad * 2) / spanV);
    originX = (cssW - spanU * scale) / 2;
    originY = (cssH - spanV * scale) / 2;
  }

  function quad(x0, z0, x1, z1) {
    const pts = [toScreen(x0, z0), toScreen(x1, z0), toScreen(x1, z1), toScreen(x0, z1)];
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < 4; i++) g.lineTo(pts[i][0], pts[i][1]);
    g.closePath();
  }

  function drawPatch(obj, size) {
    const half = size / 2;
    quad(obj.x - half, obj.z - half, obj.x + half, obj.z + half);
    g.fillStyle = objectColor(obj);
    g.fill();
  }

  function drawBuilding(obj) {
    const size = obj.size ?? DEFAULT_BUILDING_SIZE;
    const hx = size.x / 2;
    const hz = size.z / 2;
    const lift = size.y * scale * 0.55;
    const color = objectColor(obj);
    const [a, b, c, d] = [
      toScreen(obj.x - hx, obj.z - hz),
      toScreen(obj.x + hx, obj.z - hz),
      toScreen(obj.x + hx, obj.z + hz),
      toScreen(obj.x - hx, obj.z + hz)
    ];

    // Visible walls face the camera: the +x and +z sides.
    g.fillStyle = shade(color, -0.35);
    g.beginPath();
    g.moveTo(b[0], b[1]); g.lineTo(c[0], c[1]); g.lineTo(c[0], c[1] - lift); g.lineTo(b[0], b[1] - lift);
    g.closePath(); g.fill();

    g.fillStyle = shade(color, -0.15);
    g.beginPath();
    g.moveTo(c[0], c[1]); g.lineTo(d[0], d[1]); g.lineTo(d[0], d[1] - lift); g.lineTo(c[0], c[1] - lift);
    g.closePath(); g.fill();

    g.fillStyle = color;
    g.beginPath();
    g.moveTo(a[0], a[1] - lift); g.lineTo(b[0], b[1] - lift); g.lineTo(c[0], c[1] - lift); g.lineTo(d[0], d[1] - lift);
    g.closePath(); g.fill();
    g.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    g.lineWidth = 1;
    g.stroke();
  }

  function drawLabel(text, sx, sy, color = '#e8e8f0') {
    g.font = '8px "Press Start 2P", monospace';
    const w = g.measureText(text).width;
    const x = Math.max(4, Math.min(cssW - w - 10, sx - w / 2 - 4));
    const y = Math.max(4, sy - 22);
    g.fillStyle = 'rgba(10, 10, 20, 0.88)';
    g.fillRect(x, y, w + 8, 14);
    g.strokeStyle = color;
    g.strokeRect(x + 0.5, y + 0.5, w + 7, 13);
    g.fillStyle = color;
    g.fillText(text, x + 4, y + 11);
  }

  function draw() {
    frame++;
    const pulse = (Math.sin(frame / 8) + 1) / 2;
    g.clearRect(0, 0, cssW, cssH);

    const ground = getMapBackground(parsedMap.name);
    for (let row = 0; row < grid.rows; row++) {
      for (let col = 0; col < grid.cols; col++) {
        const x0 = col * FOG_CELL_SIZE;
        const z0 = row * FOG_CELL_SIZE;
        quad(x0, z0, Math.min(W, x0 + FOG_CELL_SIZE), Math.min(H, z0 + FOG_CELL_SIZE));
        g.fillStyle = (row + col) % 2 ? shade(ground, 0.18) : shade(ground, 0.24);
        g.fill();
      }
    }

    const sorted = [...objects].sort((a, b) => (a.x + a.z) - (b.x + b.z));
    for (const obj of sorted) {
      if (obj.type === 'road') drawPatch(obj, parsedMap.tileSize);
    }
    for (const obj of sorted) {
      if (obj.type === 'activity') drawPatch(obj, ACTIVITY_PATCH_SIZE);
    }
    for (const obj of sorted) {
      if (obj.type === 'building') drawBuilding(obj);
    }

    for (const pickup of ctx.getPickups()) {
      if (!isRevealed(pickup.x, pickup.z)) continue;
      const [sx, sy] = toScreen(pickup.x, pickup.z);
      g.fillStyle = '#6db8e8';
      g.fillRect(Math.round(sx) - 3, Math.round(sy) - 6, 6, 8);
      g.fillStyle = '#0a0a14';
      g.fillRect(Math.round(sx) - 1, Math.round(sy) - 8, 2, 2);
    }

    if (fog) {
      for (let row = 0; row < grid.rows; row++) {
        for (let col = 0; col < grid.cols; col++) {
          if (explored.has(row * grid.cols + col)) continue;
          const x0 = col * FOG_CELL_SIZE;
          const z0 = row * FOG_CELL_SIZE;
          // Slight overlap hides hairline seams between fogged cells.
          quad(x0 - 0.05, z0 - 0.05, Math.min(W, x0 + FOG_CELL_SIZE) + 0.05, Math.min(H, z0 + FOG_CELL_SIZE) + 0.05);
          g.fillStyle = (row + col) % 2 ? '#14141f' : '#181826';
          g.fill();
        }
      }
    }

    quad(0, 0, W, H);
    g.strokeStyle = '#0a0a14';
    g.lineWidth = 3;
    g.stroke();
    g.lineWidth = 1;

    for (const obj of discovered) {
      if (obj.name !== highlightName) continue;
      const [sx, sy] = toScreen(obj.x, obj.z);
      g.strokeStyle = '#ffffff';
      g.lineWidth = 2;
      g.beginPath();
      g.ellipse(sx, sy, 12, 6, 0, 0, Math.PI * 2);
      g.stroke();
      g.lineWidth = 1;
    }

    if (objectiveObj) {
      const [sx, sy] = toScreen(objectiveObj.x, objectiveObj.z);
      g.strokeStyle = '#ffd94a';
      g.lineWidth = 2;
      g.beginPath();
      g.ellipse(sx, sy, 10 + pulse * 6, (10 + pulse * 6) * ISO_SQUASH, 0, 0, Math.PI * 2);
      g.stroke();
      g.lineWidth = 1;
      g.fillStyle = '#ffd94a';
      g.beginPath();
      g.moveTo(sx, sy - 4);
      g.lineTo(sx - 5, sy - 14);
      g.lineTo(sx + 5, sy - 14);
      g.closePath();
      g.fill();
    }

    const pos = ctx.player.position;
    const [px, py] = toScreen(pos.x, pos.z);
    g.fillStyle = 'rgba(0, 0, 0, 0.4)';
    g.beginPath();
    g.ellipse(px, py, 6, 3, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = pulse > 0.5 ? '#ff6b6b' : '#ffffff';
    g.fillRect(Math.round(px) - 3, Math.round(py) - 10, 6, 8);
    g.strokeStyle = '#0a0a14';
    g.strokeRect(Math.round(px) - 3.5, Math.round(py) - 10.5, 7, 9);

    if (ctx.player.target) {
      const [tx, ty] = toScreen(ctx.player.target.x, ctx.player.target.z);
      g.strokeStyle = '#6dff8a';
      g.beginPath();
      g.moveTo(tx - 4, ty - 2); g.lineTo(tx + 4, ty + 2);
      g.moveTo(tx + 4, ty - 2); g.lineTo(tx - 4, ty + 2);
      g.stroke();
    }

    if (objectiveObj) {
      const [sx, sy] = toScreen(objectiveObj.x, objectiveObj.z);
      drawLabel(objectiveObj.name, sx, sy - 10, '#ffd94a');
    }
    if (hoverObj && hoverObj !== objectiveObj) {
      const [sx, sy] = toScreen(hoverObj.x, hoverObj.z);
      drawLabel(hoverObj.name, sx, sy);
    }

    raf = requestAnimationFrame(draw);
  }

  function pointerWorld(e) {
    const rect = canvas.getBoundingClientRect();
    return toWorld(e.clientX - rect.left, e.clientY - rect.top);
  }

  function nearestDiscovered(world, maxDist = HOVER_RADIUS) {
    let best = null;
    let bestDist = maxDist;
    for (const obj of discovered) {
      const d = Math.hypot(obj.x - world.x, obj.z - world.z);
      if (d < bestDist) {
        best = obj;
        bestDist = d;
      }
    }
    return best;
  }

  function walkTo(x, z) {
    ctx.player.walkTo(x, z);
    menu.close();
  }

  const onMove = e => {
    const world = pointerWorld(e);
    const inside = world.x >= 0 && world.z >= 0 && world.x <= W && world.z <= H;
    hoverObj = inside ? nearestDiscovered(world) : null;
    highlightName = hoverObj?.name ?? null;
    canvas.style.cursor = inside ? 'crosshair' : 'default';
  };

  const onLeave = () => {
    hoverObj = null;
    highlightName = null;
  };

  const onClick = e => {
    const world = pointerWorld(e);
    if (world.x < 0 || world.z < 0 || world.x > W || world.z > H) return;
    const target = nearestDiscovered(world) ?? world;
    walkTo(target.x, target.z);
  };

  const legend = container.querySelector('.fieldmap-legend');
  const onLegendOver = e => {
    const item = e.target.closest('[data-name]');
    highlightName = item?.dataset.name ?? null;
  };
  const onLegendClick = e => {
    const item = e.target.closest('[data-name]');
    if (!item) return;
    if (objectiveObj && item.dataset.name === objectiveObj.name) {
      walkTo(objectiveObj.x, objectiveObj.z);
      return;
    }
    const pos = ctx.player.position;
    const matches = discovered.filter(o => o.name === item.dataset.name);
    matches.sort((a, b) => Math.hypot(a.x - pos.x, a.z - pos.z) - Math.hypot(b.x - pos.x, b.z - pos.z));
    if (matches[0]) walkTo(matches[0].x, matches[0].z);
  };

  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('mouseleave', onLeave);
  canvas.addEventListener('click', onClick);
  legend.addEventListener('mouseover', onLegendOver);
  legend.addEventListener('mouseleave', onLeave);
  legend.addEventListener('click', onLegendClick);

  const resizeObserver = new ResizeObserver(() => layout());
  resizeObserver.observe(wrap);
  layout();
  let raf = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(raf);
    resizeObserver.disconnect();
  };
}
