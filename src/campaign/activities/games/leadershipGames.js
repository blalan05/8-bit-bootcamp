import { buildActivityResult } from '../../activityRegistry.js';
import { runChoiceRounds } from '../lib/minigameKit.js';

/** Corporal: lead a fireteam of three Marines. */
const FIRETEAM_ROUNDS = [
  {
    prompt: 'Your fireteam is crossing open ground. How do you move them?',
    choices: ['Wedge, spread out, every Marine watching a sector.', 'Single file, bunched up so nobody gets lost.', 'Let everyone pick their own route.'],
    answer: 0
  },
  {
    prompt: 'Before stepping off, what do you check?',
    choices: ['Every Marine\'s water, ammo, and gear, and that each one knows the plan.', 'Only your own gear. They\'re adults.', 'Nothing. The squad leader already checked.'],
    answer: 0
  },
  {
    prompt: 'Your automatic rifleman is nearly out of ammunition in contact.',
    choices: ['Redistribute from the riflemen and pass the count up to the squad leader.', 'Tell him to make it last.', 'Send him back alone to find more.'],
    answer: 0
  },
  {
    prompt: 'One of your Marines has gone quiet after bad news from home.',
    choices: ['Pull him aside, listen, and keep him close on the next move.', 'Tell him to toughen up in front of the team.', 'Leave it. Not your business.'],
    answer: 0
  }
];

/** Sergeant: lead a squad of three fireteams. */
const SQUAD_ROUNDS = [
  {
    prompt: 'Orders come down for a dawn attack. How do you brief the squad?',
    choices: ['The situation, the mission, how we do it, what we carry, and who takes over if you fall.', 'Point at the objective and say "follow me."', 'Tell the team leaders only. The rest don\'t need to know.'],
    answer: 0
  },
  {
    prompt: 'Contact front. One fireteam is pinned down.',
    choices: ['Base of fire with one team, maneuver another onto the flank.', 'Charge all three teams straight ahead.', 'Pull the whole squad back and wait.'],
    answer: 0
  },
  {
    prompt: 'A team leader goes down wounded.',
    choices: ['Name his replacement out loud and get the casualty moving to the corpsman.', 'Leave that team to sort itself out.', 'Take over the team yourself and stop running the squad.'],
    answer: 0
  },
  {
    prompt: 'Night falls. The squad is exhausted.',
    choices: ['Set security and a watch rotation. Your Marines eat before you do.', 'Everyone sleeps. You\'ve all earned it.', 'Eat first. Leaders need their strength.'],
    answer: 0
  }
];

export async function runFireteamOrders(container) {
  const r = await runChoiceRounds(container, {
    rounds: FIRETEAM_ROUNDS,
    title: 'Take the Fireteam',
    hint: 'Three Marines now look to you'
  });
  return buildActivityResult(r.score, ['leadership'], r);
}

export async function runSquadOrders(container) {
  const r = await runChoiceRounds(container, {
    rounds: SQUAD_ROUNDS,
    title: 'Take the Squad',
    hint: 'Three fireteams, twelve Marines'
  });
  return buildActivityResult(r.score, ['leadership'], r);
}
