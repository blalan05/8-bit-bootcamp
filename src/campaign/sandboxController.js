import { getCampaignWeeks } from '../campaigns/campaignRegistry.js';
import { findLocation } from './campaignData.js';
import { getActivity } from './activityRegistry.js';
import { saveSlot } from '../character/saveSlots.js';
import { ensureCampaign } from './campaignState.js';
import { runActivity } from './runActivity.js';

export const PROXIMITY_THRESHOLD = 8;

/** Sandbox-only activities not on the campaign schedule. */
const SANDBOX_EXTRAS = [
  { locationName: 'Pull-up Bars', activityId: 'ist', title: 'Initial Strength Test' }
];

/** Build location -> activities map from campaign schedule. */
export function buildLocationActivityMap(character) {
  const map = new Map();
  for (const week of getCampaignWeeks(character)) {
    for (const day of week.days ?? []) {
      const loc = day.locationName;
      if (!map.has(loc)) map.set(loc, []);
      const list = map.get(loc);
      if (!list.some(e => e.activityId === day.activityId)) {
        list.push({ activityId: day.activityId, title: day.title });
      }
    }
  }
  for (const extra of SANDBOX_EXTRAS) {
    if (!map.has(extra.locationName)) map.set(extra.locationName, []);
    const list = map.get(extra.locationName);
    if (!list.some(e => e.activityId === extra.activityId)) {
      list.push({ activityId: extra.activityId, title: extra.title });
    }
  }
  return map;
}

/**
 * Free-roam sandbox: replay any activity at its map location.
 */
export class SandboxController {
  /**
   * @param {object} options
   */
  constructor({ character, slotIndex, player, parsedMap, recruitHUD }) {
    this.character = ensureCampaign(character);
    this.slotIndex = slotIndex ?? character.slotIndex ?? 0;
    this.player = player;
    this.parsedMap = parsedMap;
    this.recruitHUD = recruitHUD;
    this.locationMap = buildLocationActivityMap(this.character);

    this.busy = false;
    this.nearbyLocation = null;
    this.nearbyActivities = [];

    this.promptEl = document.createElement('div');
    this.promptEl.className = 'activity-prompt sandbox-prompt';
    this.promptEl.innerHTML = `
      <span class="activity-prompt-text" id="sandbox-prompt-text"></span>
      <div class="sandbox-activity-btns" id="sandbox-activity-btns"></div>
    `;
    this.promptEl.style.display = 'none';
    document.body.appendChild(this.promptEl);

    this.promptTextEl = this.promptEl.querySelector('#sandbox-prompt-text');
    this.activityBtnsEl = this.promptEl.querySelector('#sandbox-activity-btns');

    this.activityBtnsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-activity]');
      if (!btn || this.busy) return;
      this.triggerActivity(btn.dataset.activity, btn.dataset.title);
    });
  }

  updateCharacter(character) {
    this.character = ensureCampaign(character);
    this.player.character = this.character;
    this.player.updateAppearance();
    this.recruitHUD.update(this.character);
    saveSlot(this.slotIndex, this.character);
  }

  async start() {
    // Sandbox has no scheduler — free roam immediately.
  }

  updateProximity() {
    if (this.busy) {
      this.hidePrompt();
      return;
    }

    let closest = null;
    let closestDist = Infinity;
    let closestActivities = [];

    for (const [locationName, activities] of this.locationMap) {
      const loc = findLocation(this.parsedMap, locationName);
      if (!loc) continue;
      const dist = Math.hypot(
        this.player.position.x - loc.x,
        this.player.position.z - loc.z
      );
      if (dist <= PROXIMITY_THRESHOLD && dist < closestDist) {
        closestDist = dist;
        closest = locationName;
        closestActivities = activities;
      }
    }

    if (closest) {
      this.nearbyLocation = closest;
      this.nearbyActivities = closestActivities;
      this.showPrompt(closest, closestActivities);
    } else {
      this.nearbyLocation = null;
      this.nearbyActivities = [];
      this.hidePrompt();
    }
  }

  showPrompt(locationName, activities) {
    this.promptTextEl.textContent = locationName;
    this.activityBtnsEl.innerHTML = activities.map(a => {
      const act = getActivity(a.activityId);
      const label = act?.title ?? a.title;
      return `<button type="button" class="btn btn-primary activity-prompt-btn" data-activity="${a.activityId}" data-title="${a.title}">${label}</button>`;
    }).join('');

    this.promptEl.style.display = 'flex';
  }

  hidePrompt() {
    this.promptEl.style.display = 'none';
  }

  async triggerActivity(activityId, title) {
    if (this.busy) return;

    this.busy = true;
    this.player.inputEnabled = false;
    this.hidePrompt();

    const updated = await runActivity(this.character, activityId, {
      dayId: `sandbox_${activityId}`,
      title,
      stats: []
    });

    this.updateCharacter(updated);
    this.busy = false;
    this.player.inputEnabled = true;
  }

  dispose() {
    this.promptEl.remove();
  }
}
