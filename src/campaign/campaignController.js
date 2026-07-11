import { saveSlot, deleteSlot } from '../character/saveSlots.js';
import {
  ensureCampaign,
  advanceCampaignDay,
  isSideQuestDone,
  graduateCampaign,
  isGraduated,
  isIronman,
  consumeRecycleToken,
  setHydration
} from './campaignState.js';
import {
  getWeek,
  getDayDefinition,
  getAvailableSideQuests,
  isCampaignComplete,
  findLocation
} from './campaignData.js';
import { showSchedule, showWeekComplete, showComingSoon, showGraduation, showRecycled, showRunEnd } from './scheduleUI.js';
import { runActivity } from './runActivity.js';
import { offerSideQuest } from './sideQuests/sideQuestRegistry.js';
import { awardGrit } from './metaProgress.js';

export const PROXIMITY_THRESHOLD = 8;

/**
 * Orchestrates the boot camp day loop: schedule -> walk -> activity -> advance -> save.
 */
export class CampaignController {
  /**
   * @param {object} options
   * @param {object} options.character
   * @param {number} options.slotIndex
   * @param {import('../playerCharacter/player.js').Player} options.player
   * @param {object} options.parsedMap
   * @param {{ update: Function }} options.recruitHUD
   * @param {import('./hydration.js').HydrationSystem} [options.hydrationSystem]
   * @param {() => void} [options.onRunEnd]
   */
  constructor({ character, slotIndex, player, parsedMap, recruitHUD, hydrationSystem, onRunEnd }) {
    this.character = ensureCampaign(character);
    this.slotIndex = slotIndex ?? character.slotIndex ?? 0;
    this.player = player;
    this.parsedMap = parsedMap;
    this.recruitHUD = recruitHUD;
    this.hydrationSystem = hydrationSystem ?? null;
    this.onRunEnd = onRunEnd ?? null;

    this.busy = false;
    this.runEnded = false;
    this.awaitingProximity = false;
    this.currentDayDef = null;
    this._activityResolve = null;

    this.promptEl = document.createElement('div');
    this.promptEl.className = 'activity-prompt';
    this.promptEl.innerHTML = `
      <span class="activity-prompt-text" id="activity-prompt-text"></span>
      <button type="button" class="btn btn-primary activity-prompt-btn" id="activity-prompt-btn">Begin</button>
    `;
    this.promptEl.style.display = 'none';
    document.body.appendChild(this.promptEl);

    this.promptTextEl = this.promptEl.querySelector('#activity-prompt-text');
    this.promptBtn = this.promptEl.querySelector('#activity-prompt-btn');
    this.promptBtn.addEventListener('click', () => this.triggerActivity());
    this._onPromptKey = (e) => {
      if (e.key === 'Enter' && this.promptEl.style.display !== 'none' && !this.busy) {
        this.triggerActivity();
      }
    };
    window.addEventListener('keydown', this._onPromptKey);
  }

  updateCharacter(character) {
    this.character = ensureCampaign(character);
    this.player.character = this.character;
    this.player.updateAppearance();
    this.recruitHUD.update(this.character);
    this.hydrationSystem?.updateCharacter(this.character);
    saveSlot(this.slotIndex, this.character);
  }

  async start() {
    if (isGraduated(this.character)) return;
    await this.dayLoop();
    if (this.runEnded) return;
    if (isCampaignComplete(this.character.campaign.week) && !isGraduated(this.character)) {
      await this.handleGraduation();
    }
  }

  async handleGraduation() {
    const graduated = graduateCampaign(this.character);
    awardGrit(graduated, { graduated: true });
    await showGraduation(graduated);
    this.updateCharacter(graduated);
  }

  /**
   * Handle Ironman run failure. Returns true if the run ended.
   * @param {'performance'|'heat'} reason
   */
  async handleRunFailure(reason) {
    if (this.runEnded) return true;

    const tokens = this.character.campaign.recycleTokens ?? 0;
    if (tokens > 0) {
      let updated = consumeRecycleToken(this.character);
      if (reason === 'heat') {
        updated = setHydration(updated, 50);
      }
      this.updateCharacter(updated);
      await showRecycled(reason);
      if (!this.awaitingProximity) {
        this.player.inputEnabled = true;
      }
      return false;
    }

    this.runEnded = true;
    this.busy = true;
    this.player.inputEnabled = false;
    this.hidePrompt();

    const gritEarned = awardGrit(this.character, { graduated: false });
    await showRunEnd(this.character, reason, gritEarned);
    deleteSlot(this.slotIndex);
    this.onRunEnd?.();
    return true;
  }

  async dayLoop() {
    while (!isCampaignComplete(this.character.campaign.week) && !this.runEnded) {
      const weekDef = getWeek(this.character.campaign.week);
      if (!weekDef) break;

      if (!weekDef.days?.length) {
        await showComingSoon(weekDef);
        return;
      }

      const dayDef = getDayDefinition(
        this.character.campaign.week,
        this.character.campaign.dayInWeek
      );
      if (!dayDef) break;

      if (this.character.campaign.completed[dayDef.id]) {
        this.advanceDay(weekDef);
        continue;
      }

      await this.runSingleDay(dayDef, weekDef);
      if (this.runEnded) return;
    }
  }

  async runSingleDay(dayDef, weekDef) {
    this.busy = true;
    this.player.inputEnabled = false;

    await showSchedule(this.character, dayDef, weekDef);
    this.hydrationSystem?.onNewDay();

    this.currentDayDef = dayDef;
    this.awaitingProximity = true;
    this.busy = false;
    this.player.inputEnabled = true;

    await new Promise(resolve => {
      this._activityResolve = resolve;
    });

    if (this.runEnded) return;

    const sideQuests = getAvailableSideQuests(
      this.character.campaign.week,
      this.character.campaign.dayInWeek,
      this.character
    );

    for (const sq of sideQuests) {
      if (!isSideQuestDone(this.character, sq.id)) {
        const updated = await offerSideQuest(this.character, sq);
        this.updateCharacter(updated);
      }
    }

    const weekComplete = this.advanceDay(weekDef);
    if (weekComplete) {
      await showWeekComplete(weekDef);
    }
  }

  advanceDay(weekDef) {
    const { character, weekComplete } = advanceCampaignDay(
      this.character,
      weekDef.days.length
    );
    this.updateCharacter(character);
    return weekComplete;
  }

  updateProximity() {
    if (!this.awaitingProximity || this.busy || !this.currentDayDef || this.runEnded) {
      this.hidePrompt();
      return;
    }

    const loc = findLocation(this.parsedMap, this.currentDayDef.locationName);
    if (!loc) {
      this.hidePrompt();
      return;
    }

    const dist = Math.hypot(
      this.player.position.x - loc.x,
      this.player.position.z - loc.z
    );

    if (dist <= PROXIMITY_THRESHOLD) {
      this.showPrompt(this.currentDayDef);
    } else {
      this.hidePrompt();
    }
  }

  showPrompt(dayDef) {
    this.promptTextEl.textContent = `${dayDef.title} — ${dayDef.locationName}`;
    this.promptEl.style.display = 'flex';
  }

  hidePrompt() {
    this.promptEl.style.display = 'none';
  }

  async triggerActivity() {
    if (!this.awaitingProximity || this.busy || !this.currentDayDef || this.runEnded) return;

    this.busy = true;
    this.awaitingProximity = false;
    this.player.inputEnabled = false;
    this.hidePrompt();

    const dayDef = this.currentDayDef;
    const updated = await runActivity(
      this.character,
      dayDef.activityId,
      {
        dayId: dayDef.id,
        title: dayDef.title,
        stats: dayDef.stats
      }
    );

    this.updateCharacter(updated);
    this.hydrationSystem?.postActivityDrain(dayDef.stats ?? []);

    if (isIronman(this.character) && updated._lastResult?.grade === 'unsat') {
      const ended = await this.handleRunFailure('performance');
      if (ended) return;
    }

    this.currentDayDef = null;
    this.busy = false;

    if (this._activityResolve) {
      this._activityResolve();
      this._activityResolve = null;
    }
  }

  dispose() {
    window.removeEventListener('keydown', this._onPromptKey);
    this.promptEl.remove();
  }
}
