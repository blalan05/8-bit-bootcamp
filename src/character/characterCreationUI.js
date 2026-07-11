import { CharacterPreview } from './characterPreview.js';
import { getAllBackgrounds, createDraftCharacter, createCharacter, validateCharacterName, getBackgroundById } from './createCharacter.js';
import { getAllOutfits, getAllSkinTones, getAllHairColors } from './appearance.js';
import { getRandomName } from './randomNames.js';
import { STAT_KEYS, formatStatLabel, STAT_TOOLTIPS, rollCoreStats, getFinalStats, getStatTotal, canDecreaseCoreStat, canIncreaseCoreStat } from './stats.js';

/**
 * @param {number} slotIndex
 * @returns {Promise<object | null>} character or null if back
 */
export function showCharacterCreation(slotIndex) {
  return new Promise(resolve => {
    const backgrounds = getAllBackgrounds();
    const outfits = getAllOutfits();
    const skinTones = getAllSkinTones();
    const hairColors = getAllHairColors();

    let draft = createDraftCharacter(backgrounds[0].id);
    let freePoints = 0;
    let preview = null;

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel builder-panel">
        <div class="builder-preview" id="builder-preview"></div>
        <div class="builder-form">
          <h2 class="menu-title">New Recruit</h2>
          <label class="field">
            <span>Name</span>
            <div class="name-row">
              <input type="text" id="char-name" maxlength="24" placeholder="Full name" autocomplete="off" />
              <button type="button" class="btn btn-secondary" id="btn-random-name">Randomize</button>
            </div>
            <span class="field-error" id="name-error"></span>
          </label>
          <fieldset class="field">
            <legend>Gender</legend>
            <label><input type="radio" name="gender" value="male" checked /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
          </fieldset>
          <fieldset class="field">
            <legend>Skin Tone</legend>
            <div class="swatch-row" id="skin-swatches"></div>
          </fieldset>
          <fieldset class="field">
            <legend>Hair Color</legend>
            <div class="swatch-row" id="hair-swatches"></div>
          </fieldset>
          <fieldset class="field">
            <legend>Background</legend>
            <div class="background-list" id="background-list"></div>
          </fieldset>
          <fieldset class="field">
            <legend>Stats</legend>
            <div class="stat-toolbar">
              <button type="button" class="btn btn-secondary btn-compact" id="btn-roll-stats">Roll Stats</button>
              <span class="stat-meta" id="stat-total">Total: 50</span>
              <span class="stat-meta stat-meta--points" id="stat-points">Points: 0</span>
            </div>
            <p class="stat-hint">Lower a stat (−) to earn a point, then raise another (+). Background bonuses apply on top.</p>
            <div class="stats-grid" id="stats-grid"></div>
          </fieldset>
          <label class="field">
            <span>Height</span>
            <input type="range" id="char-height" min="0" max="100" value="50" />
          </label>
          <fieldset class="field">
            <legend>Civilian Outfit</legend>
            <div class="outfit-row" id="outfit-row"></div>
          </fieldset>
          <div class="builder-actions">
            <button type="button" class="btn btn-secondary" id="btn-back">Back</button>
            <button type="button" class="btn btn-primary" id="btn-enter" disabled>Visit Recruiter</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const previewContainer = overlay.querySelector('#builder-preview');
    preview = new CharacterPreview(previewContainer);

    const nameInput = overlay.querySelector('#char-name');
    const nameError = overlay.querySelector('#name-error');
    const enterBtn = overlay.querySelector('#btn-enter');
    const heightInput = overlay.querySelector('#char-height');
    const skinSwatches = overlay.querySelector('#skin-swatches');
    const hairSwatches = overlay.querySelector('#hair-swatches');
    const backgroundList = overlay.querySelector('#background-list');
    const statsGrid = overlay.querySelector('#stats-grid');
    const statTotalEl = overlay.querySelector('#stat-total');
    const statPointsEl = overlay.querySelector('#stat-points');
    const outfitRow = overlay.querySelector('#outfit-row');

    function renderSwatches(container, items, selectedId, dataAttr, colorKey = 'color') {
      container.innerHTML = items.map(item => `
        <button type="button"
          class="swatch${item.id === selectedId ? ' swatch--selected' : ''}"
          data-${dataAttr}="${item.id}"
          title="${item.name}"
          style="background:#${item[colorKey].toString(16).padStart(6, '0')}"
          aria-label="${item.name}"
          aria-pressed="${item.id === selectedId}"
        ></button>
      `).join('');
    }

    function renderBackgrounds() {
      backgroundList.innerHTML = backgrounds.map(bg => `
        <label class="background-option${draft.backgroundId === bg.id ? ' background-option--selected' : ''}">
          <input type="radio" name="background" value="${bg.id}" ${draft.backgroundId === bg.id ? 'checked' : ''} />
          <span class="background-name">${bg.name}</span>
          <span class="background-desc">${bg.description}</span>
        </label>
      `).join('');
    }

    function syncDraftStats() {
      const bg = getBackgroundById(draft.backgroundId);
      draft.stats = getFinalStats(draft.coreStats, bg.modifiers);
    }

    function renderStats() {
      const bg = getBackgroundById(draft.backgroundId);
      const final = getFinalStats(draft.coreStats, bg.modifiers);

      statsGrid.innerHTML = STAT_KEYS.map(key => {
        const core = draft.coreStats[key];
        const value = final[key];
        const mod = value - core;
        const modHtml = mod !== 0
          ? `<span class="stat-bg-mod">${mod > 0 ? '+' : ''}${mod}</span>`
          : '';
        const highlight = key === 'strength' ? ' stat--str' : '';
        const canDown = canDecreaseCoreStat(draft.coreStats, key);
        const canUp = canIncreaseCoreStat(draft.coreStats, key, freePoints);

        return `
          <div class="stat-row${highlight}" title="${STAT_TOOLTIPS[key]}">
            <span class="stat-label">${formatStatLabel(key)}</span>
            <div class="stat-controls">
              <button type="button" class="stat-btn" data-stat="${key}" data-delta="-1" ${canDown ? '' : 'disabled'} aria-label="Decrease ${formatStatLabel(key)}">−</button>
              <span class="stat-value">${value}</span>
              <button type="button" class="stat-btn" data-stat="${key}" data-delta="1" ${canUp ? '' : 'disabled'} aria-label="Increase ${formatStatLabel(key)}">+</button>
            </div>
            ${modHtml}
          </div>`;
      }).join('');

      statTotalEl.textContent = `Total: ${getStatTotal(draft.coreStats)}`;
      statPointsEl.textContent = `Points: ${freePoints}`;
    }

    function renderOutfits() {
      outfitRow.innerHTML = outfits.map(o => `
        <button type="button"
          class="outfit-btn${draft.appearance.civilianOutfitId === o.id ? ' outfit-btn--selected' : ''}"
          data-outfit="${o.id}"
          aria-pressed="${draft.appearance.civilianOutfitId === o.id}"
        >${o.name}</button>
      `).join('');
    }

    function syncDraftFromForm() {
      draft.name = nameInput.value;
      draft.appearance.gender = overlay.querySelector('input[name="gender"]:checked')?.value ?? 'male';
      draft.appearance.height = Number(heightInput.value);
    }

    function refreshUI() {
      syncDraftFromForm();
      syncDraftStats();
      renderSwatches(skinSwatches, skinTones, draft.appearance.skinToneId, 'skin');
      renderSwatches(hairSwatches, hairColors, draft.appearance.hairColorId, 'hair');
      renderBackgrounds();
      renderStats();
      renderOutfits();
      preview.update(draft);
      validateForm();
    }

    function validateForm() {
      const err = validateCharacterName(nameInput.value);
      nameError.textContent = err ?? '';
      enterBtn.disabled = !!err || !draft.backgroundId;
      return !err;
    }

    function cleanup(result) {
      preview?.dispose();
      document.removeEventListener('keydown', onKey);
      overlay.remove();
      resolve(result);
    }

    function onKey(e) {
      if (e.key === 'Escape') cleanup(null);
    }

    nameInput.addEventListener('input', refreshUI);

    overlay.querySelector('#btn-random-name').addEventListener('click', () => {
      nameInput.value = getRandomName(draft.appearance.gender);
      refreshUI();
    });

    overlay.querySelectorAll('input[name="gender"]').forEach(el => {
      el.addEventListener('change', refreshUI);
    });

    heightInput.addEventListener('input', refreshUI);

    skinSwatches.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-skin]');
      if (!btn) return;
      draft.appearance.skinToneId = btn.dataset.skin;
      refreshUI();
    });

    hairSwatches.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-hair]');
      if (!btn) return;
      draft.appearance.hairColorId = btn.dataset.hair;
      refreshUI();
    });

    backgroundList.addEventListener('change', (e) => {
      if (e.target.name !== 'background') return;
      draft.backgroundId = e.target.value;
      const bg = getBackgroundById(draft.backgroundId);
      draft.appearance.civilianOutfitId = bg.defaultOutfitId;
      refreshUI();
    });

    overlay.querySelector('#btn-roll-stats').addEventListener('click', () => {
      draft.coreStats = rollCoreStats();
      freePoints = 0;
      refreshUI();
    });

    statsGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.stat-btn');
      if (!btn || btn.disabled) return;

      const key = btn.dataset.stat;
      const delta = Number(btn.dataset.delta);

      if (delta < 0 && canDecreaseCoreStat(draft.coreStats, key)) {
        draft.coreStats = { ...draft.coreStats, [key]: draft.coreStats[key] - 1 };
        freePoints++;
        refreshUI();
        return;
      }

      if (delta > 0 && canIncreaseCoreStat(draft.coreStats, key, freePoints)) {
        draft.coreStats = { ...draft.coreStats, [key]: draft.coreStats[key] + 1 };
        freePoints--;
        refreshUI();
      }
    });

    outfitRow.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-outfit]');
      if (!btn) return;
      draft.appearance.civilianOutfitId = btn.dataset.outfit;
      refreshUI();
    });

    overlay.querySelector('#btn-back').addEventListener('click', () => cleanup(null));

    overlay.querySelector('#btn-enter').addEventListener('click', () => {
      if (!validateForm()) return;
      syncDraftFromForm();
      const character = createCharacter(
        nameInput.value,
        draft.backgroundId,
        draft.appearance,
        slotIndex,
        draft.coreStats
      );
      cleanup(character);
    });

    document.addEventListener('keydown', onKey);
    refreshUI();
    nameInput.focus();
  });
}
