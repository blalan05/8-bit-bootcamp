import { NcoScene } from '../recruiter/ncoScene.js';
import { createInitialCampaign } from '../campaign/campaignState.js';

/**
 * Pre-deployment briefing for combat campaigns (replaces recruiter visit).
 * @param {object} character
 * @param {import('./campaignRegistry.js').CampaignDef} campaign
 * @returns {Promise<object | null>}
 */
export function showDeploymentBriefing(character, campaign) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel recruiter-panel">
        <h2 class="menu-title" id="briefing-title">Deployment Briefing</h2>
        <p class="menu-subtitle" id="briefing-subtitle">${campaign.subtitle}</p>
        <div class="recruiter-body" id="briefing-body"></div>
        <div class="recruiter-actions" id="briefing-actions"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const bodyEl = overlay.querySelector('#briefing-body');
    const actionsEl = overlay.querySelector('#briefing-actions');

    function cleanup(result) {
      overlay.remove();
      resolve(result);
    }

    async function runBriefing() {
      const scene = new NcoScene(bodyEl);
      const briefing = campaign.briefing ?? {};
      const nameplate = bodyEl.querySelector('.nco-nameplate');
      if (nameplate) nameplate.textContent = briefing.officer ?? 'Briefing Officer';

      await scene.say(`Marine ${character.name}, the ${campaign.title} briefing is now in effect.`);
      for (const line of briefing.lines ?? []) {
        await scene.say(line);
      }
      await scene.say(`Good luck, Marine. ${campaign.subtitle}.`);

      scene.dispose();
      actionsEl.innerHTML = `
        <button type="button" class="btn btn-primary" id="briefing-deploy">Deploy</button>
        <button type="button" class="btn btn-secondary" id="briefing-cancel">Cancel</button>
      `;

      actionsEl.querySelector('#briefing-deploy').addEventListener('click', () => {
        cleanup({
          ...character,
          campaign: createInitialCampaign({ campaignId: campaign.id })
        });
      }, { once: true });

      actionsEl.querySelector('#briefing-cancel').addEventListener('click', () => {
        cleanup(null);
      }, { once: true });
    }

    runBriefing();
  });
}
