import { CharacterPreview } from './characterPreview.js';
import { getAllBackgrounds, createDraftCharacter, createCharacter, validateCharacterName, getBackgroundById } from './createCharacter.js';
import { getAllOutfits, getAllSkinTones, getAllHairColors } from './appearance.js';
import { getRandomName } from './randomNames.js';
import { STAT_KEYS, formatStatLabel, STAT_TOOLTIPS, rollCoreStats, getFinalStats, getStatTotal, canDecreaseCoreStat, canIncreaseCoreStat } from './stats.js';
import { hasPerk } from '../campaign/metaProgress.js';

/**
 * Mode / difficulty selection step.
 * @returns {Promise<{ mode: string, difficulty: string, perkStat: string | null } | null>}
 */
function showModeSelect() {
  return new Promise(resolve => {
    let selected = { mode: 'campaign', difficulty: 'story', perkStat: null };
    const showPooleePicker = hasPerk('pooleePrep');

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';

    function render() {
      const pooleeSection = showPooleePicker && selected.mode !== 'sandbox'
        ? `<fieldset class="field perk-stat-field">
            <legend>Poolee Prep — +1 stat</legend>
            <div class="perk-stat-row">${STAT_KEYS.map(key =>
              `<button type="button" class="btn btn-secondary perk-stat-btn${selected.perkStat === key ? ' perk-stat-btn--selected' : ''}" data-stat="${key}">${formatStatLabel(key)}</button>`
            ).join('')}</div>
          </fieldset>`
        : '';

      overlay.innerHTML = `
        <div class="menu-panel mode-panel">
          <h2 class="menu-title">Select Mode</h2>
          <p class="menu-subtitle">How do you want to train?</p>
          <div class="mode-cards">
            <button type="button" class="mode-card${selected.mode === 'campaign' && selected.difficulty === 'story' ? ' mode-card--selected' : ''}" data-mode="campaign" data-difficulty="story">
              <span class="mode-card-title">Story Campaign</span>
              <span class="mode-card-desc">Forgiving 13-week schedule. Failed activities cost readiness. Hydration penalties, not death.</span>
            </button>
            <button type="button" class="mode-card${selected.mode === 'campaign' && selected.difficulty === 'ironman' ? ' mode-card--selected' : ''}" data-mode="campaign" data-difficulty="ironman">
              <span class="mode-card-title">Ironman Campaign</span>
              <span class="mode-card-desc">Rogue-lite rules. Unsat grades or dehydration end the run. Earn grit for The Locker. Recycle tokens forgive one failure.</span>
            </button>
            <button type="button" class="mode-card${selected.mode === 'sandbox' ? ' mode-card--selected' : ''}" data-mode="sandbox" data-difficulty="story">
              <span class="mode-card-title">Sandbox Free Play</span>
              <span class="mode-card-desc">Roam the depot and replay any activity at its location. No scheduler, no hydration.</span>
            </button>
          </div>
          ${pooleeSection}
          <div class="builder-actions">
            <button type="button" class="btn btn-secondary" id="mode-back">Back</button>
            <button type="button" class="btn btn-primary" id="mode-continue">Continue</button>
          </div>
        </div>
      `;

      overlay.querySelector('#mode-back').addEventListener('click', () => {
        overlay.remove();
        resolve(null);
      }, { once: true });

      overlay.querySelector('#mode-continue').addEventListener('click', () => {
        if (showPooleePicker && selected.mode !== 'sandbox' && !selected.perkStat) {
          selected.perkStat = 'leadership';
        }
        overlay.remove();
        resolve({ ...selected });
      }, { once: true });

      overlay.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', () => {
          selected.mode = card.dataset.mode;
          selected.difficulty = card.dataset.difficulty;
          render();
        });
      });

      overlay.querySelectorAll('.perk-stat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selected.perkStat = btn.dataset.stat;
          render();
        });
      });
    }

    render();
    document.body.appendChild(overlay);
  });
}

/**
 * @param {number} slotIndex
 * @returns {Promise<object | null>} character or null if back
 */
export async function showCharacterCreation(slotIndex) {
  const modeConfig = await showModeSelect();
  if (!modeConfig) return null;

  return new Promise(resolve => {
    const backgrounds = getAllBackgrounds();
    const outfits = getAllOutfits();
    const skinTones = getAllSkinTones();
    const hairColors = getAllHairColors();

    let draft = createDraftCharacter(backgrounds[0].id);
    let freePoints = 0;
    let preview = null;

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay builder-overlay';
    overlay.innerHTML = `
      <div class="menu-panel builder-panel">
        <div class="builder-preview" id="builder-preview"></div>
        <div class="builder-form">
          <h2 class="menu-title">New Recruit</h2>
          <p class="menu-subtitle mode-badge-label">${modeConfig.mode === 'sandbox' ? 'Sandbox' : modeConfig.difficulty === 'ironman' ? 'Ironman' : 'Story'} mode</p>
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
            <label class="gender-option"><input type="radio" name="gender" value="male" checked /> Male</label>
            <label class="gender-option"><input type="radio" name="gender" value="female" /> Female</label>
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
    preview = new CharacterPreview(previewContainer, { fit: true });

    const nameInput = overlay.querySelector('#char-name');
    const nameError = overlay.querySelector('#name-error');
    let nameTouched = false;
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

    function validateForm({ showError = nameTouched } = {}) {
      const err = validateCharacterName(nameInput.value);
      nameError.textContent = showError ? err ?? '' : '';
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

    nameInput.addEventListener('input', () => {
      nameTouched = true;
      refreshUI();
    });
    nameInput.addEventListener('blur', () => {
      nameTouched = true;
      validateForm();
    });

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
      if (!validateForm({ showError: true })) return;
      syncDraftFromForm();
      const character = createCharacter(
        nameInput.value,
        draft.backgroundId,
        draft.appearance,
        slotIndex,
        draft.coreStats,
        {
          mode: modeConfig.mode,
          difficulty: modeConfig.difficulty,
          perkStat: modeConfig.perkStat
        }
      );
      cleanup(character);
    });

    document.addEventListener('keydown', onKey);
    refreshUI();
    if (!window.matchMedia?.('(pointer: coarse)').matches) nameInput.focus();
  });
}
