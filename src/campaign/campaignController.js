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
import {
  showSchedule, showWeekComplete, showComingSoon, showGraduation, showRecycled, showRunEnd,
  showTheaterTransition, showPromotion, showMeritoriousBoard
} from './scheduleUI.js';
import { getCampaignMapName, getCampaignMapNameForWeek, getTheaterTransitionForWeek, getCampaignForCharacter } from '../campaigns/campaignRegistry.js';
import { runActivity } from './runActivity.js';
import { offerSideQuest } from './sideQuests/sideQuestRegistry.js';
import { awardGrit } from './metaProgress.js';
import { ensureRank, evaluateOperationPromotion, evaluateMeritoriousPfc, getRankDuty } from './rank.js';
import { getActivity } from './activityRegistry.js';

/** Leadership event run right after pinning on NCO rank. */
const PROMOTION_EVENTS = { cpl: 'fireteamOrders', sgt: 'squadOrders' };

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
   * @param {(mapName: string) => object | Promise<object>} [options.onMapChange]
   */
  constructor({ character, slotIndex, player, parsedMap, recruitHUD, hydrationSystem, onRunEnd, onMapChange }) {
    this.character = ensureRank(ensureCampaign(character));
    this.slotIndex = slotIndex ?? character.slotIndex ?? 0;
    this.player = player;
    this.parsedMap = parsedMap;
    this.recruitHUD = recruitHUD;
    this.hydrationSystem = hydrationSystem ?? null;
    this.onRunEnd = onRunEnd ?? null;
    this.onMapChange = onMapChange ?? null;
    this.currentMapName = getCampaignMapName(this.character);

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
    if (isCampaignComplete(this.character.campaign.week, this.character) && !isGraduated(this.character)) {
      await this.handleGraduation();
    }
  }

  async handleGraduation() {
    if (getCampaignForCharacter(this.character).usesRecruiter) {
      const board = evaluateMeritoriousPfc(this.character);
      this.updateCharacter(board.character);
      await showMeritoriousBoard(this.character, board);
    }
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
      await showRecycled(this.character, reason);
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
    while (!isCampaignComplete(this.character.campaign.week, this.character) && !this.runEnded) {
      const weekDef = getWeek(this.character.campaign.week, this.character);
      if (!weekDef) break;

      if (!weekDef.days?.length) {
        await showComingSoon(weekDef);
        return;
      }

      const dayDef = getDayDefinition(
        this.character.campaign.week,
        this.character.campaign.dayInWeek,
        this.character
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
    await this.hydrationSystem?.showBriefingIfNeeded();

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

    if (this.character.campaign.dayInWeek >= weekDef.days.length) {
      const ended = await this.runRankDuty(weekDef);
      if (ended) return;
    }

    const weekComplete = this.advanceDay(weekDef);
    if (weekComplete) {
      await showWeekComplete(weekDef, this.character);
      await this.maybePromote(weekDef);
      await this.maybeTransitionMap(weekDef.id);
    }
  }

  /** End-of-operation duty for the Marine's billet. Returns true if an Ironman run ended. */
  async runRankDuty(weekDef) {
    const duty = getRankDuty(this.character, weekDef.id);
    if (!duty) return false;
    const updated = await runActivity(this.character, duty.activityId, {
      dayId: duty.dayId,
      title: `${duty.billet} Duty: ${getActivity(duty.activityId).title}`,
      stats: []
    });
    this.updateCharacter(updated);
    if (isIronman(this.character) && updated._lastResult?.grade === 'unsat') {
      return this.handleRunFailure('performance');
    }
    return false;
  }

  async maybePromote(weekDef) {
    const { character, promotion } = evaluateOperationPromotion(this.character, weekDef);
    if (!promotion) return;
    this.updateCharacter(character);
    await showPromotion(this.character, promotion);

    const eventId = PROMOTION_EVENTS[promotion.to.id];
    if (eventId) {
      const updated = await runActivity(this.character, eventId, { dayId: `promo_${eventId}` });
      this.updateCharacter(updated);
    }
  }

  async maybeTransitionMap(completedWeekId) {
    const nextWeek = this.character.campaign.week;
    const newMapName = getCampaignMapNameForWeek(this.character, nextWeek);
    if (!this.onMapChange || newMapName === this.currentMapName) return;

    const transition = getTheaterTransitionForWeek(this.character, nextWeek);
    if (transition) {
      await showTheaterTransition(transition);
    }

    const parsedMap = await this.onMapChange(newMapName);
    if (parsedMap) {
      this.parsedMap = parsedMap;
      this.currentMapName = newMapName;
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
        stats: dayDef.stats,
        briefing: dayDef.briefing,
        locationName: dayDef.locationName
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
