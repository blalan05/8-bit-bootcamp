/**
 * Journal knowledge: field manual entries unlocked by completing activities,
 * plus lessons recorded from side quest choices.
 */

import { getCampaignForCharacter, getCampaignWeeks } from '../campaigns/campaignRegistry.js';
import { dutyActivityId } from './rank.js';

/**
 * Era-neutral notes keyed by activityId. Activities are reused across campaigns,
 * so theater-specific text belongs in CAMPAIGN_FIELD_NOTES.
 * @type {Record<string, { topic: string, text: string }>}
 */
export const FIELD_NOTES = {
  yellowFootprints: {
    topic: 'The Yellow Footprints',
    text: 'Every recruit\'s first formation. The footprints are painted heels-together at a 45-degree angle: the position of attention before anyone has taught it to you.'
  },
  processing: {
    topic: 'Receiving',
    text: 'Haircut, medical, dental, gear issue, and paperwork, often on almost no sleep. Receiving strips away civilian habits before training begins.'
  },
  blackFriday: {
    topic: 'Pick-Up Day',
    text: 'The day a platoon meets its Drill Instructor team. Drill Instructors recite their creed in front of the recruits and promise to train them, by example, to the standards of the Corps.'
  },
  dressDrill: {
    topic: 'Speed Under Pressure',
    text: 'Dressing drills are not about clothes. They teach you to do it right first, then do it fast, while someone is yelling a countdown.'
  },
  drillCadence: {
    topic: 'Close Order Drill',
    text: 'Commands come in two parts: a preparatory command ("Forward...") and a command of execution ("MARCH"). Drill trains instant, unified response to orders.'
  },
  coreValues: {
    topic: 'Core Values & Leadership Traits',
    text: 'Honor, Courage, Commitment. The 14 leadership traits spell JJ DID TIE BUCKLE: Justice, Judgment, Dependability, Initiative, Decisiveness, Tact, Integrity, Enthusiasm, Bearing, Unselfishness, Courage, Knowledge, Loyalty, Endurance.'
  },
  knowledgeExam: {
    topic: 'General Orders',
    text: 'Eleven General Orders govern a sentry on post. The first: "To take charge of this post and all government property in view."'
  },
  ist: {
    topic: 'Initial Strength Test',
    text: 'Pull-ups or push-ups, a plank, and a 1.5-mile run. Recruits must pass before training can begin in earnest.'
  },
  paceRunner: {
    topic: 'Pacing',
    text: 'Even splits beat a fast first lap. Pick a pace you can hold, then hold it. The Marine PFT run is three miles.'
  },
  steadyAim: {
    topic: 'Fundamentals of Marksmanship',
    text: 'BRASS: Breathe, Relax, Aim, Stop, Squeeze. The shot should break in the natural pause at the bottom of your breath, and the trigger squeeze should surprise you.'
  },
  rifleQual: {
    topic: 'Every Marine a Rifleman',
    text: 'Prone is the most stable position and standing the least. Whatever their job, every Marine must qualify with the rifle.'
  },
  fieldStrip: {
    topic: 'Weapons Safety Rules',
    text: 'Treat every weapon as if it were loaded. Never point it at anything you do not intend to shoot. Keep your finger straight and off the trigger until ready to fire. Keep it on safe until you intend to fire.'
  },
  swimStrokes: {
    topic: 'Water Survival',
    text: 'A naval service has to swim. Every recruit must earn the basic water survival qualification before graduating.'
  },
  gearShed: {
    topic: 'Shedding Gear',
    text: 'Heavy gear will drown you. Training teaches you to ditch it calmly underwater, one piece at a time, instead of panicking toward the surface.'
  },
  logTeamLift: {
    topic: 'Log Drills',
    text: 'A log only goes up when every Marine on it lifts together. If one quits, the rest carry the weight.'
  },
  obstacleRun: {
    topic: 'The Fire Team',
    text: 'Four Marines: a team leader, an automatic rifleman, an assistant automatic rifleman, and a rifleman. Three fire teams make a squad.'
  },
  highObstacle: {
    topic: 'Confidence Course',
    text: 'Height is the enemy here, not the obstacle. Keep three points of contact and trust your grip.'
  },
  rappelTower: {
    topic: 'Rappelling',
    text: 'Your brake hand never leaves the rope. Control comes from the brake hand, not from gripping with the guide hand.'
  },
  gasChamber: {
    topic: 'The Gas Chamber',
    text: 'CS gas proves your mask works and that you can work in it. Seal, clear, and breathe slowly. Panic is what makes it hurt.'
  },
  mcmapSpar: {
    topic: 'MCMAP',
    text: 'The Marine Corps Martial Arts Program, introduced in 2001, blends mental, character, and physical discipline. Recruits earn the tan belt in boot camp.'
  },
  pugilDuel: {
    topic: 'Pugil Sticks',
    text: 'A padded pole stands in for a rifle and bayonet. It teaches aggression, balance, and reading an opponent without anyone getting skewered.'
  },
  bayonetCourse: {
    topic: 'The Bayonet',
    text: 'Bayonet drill trains you to drive through the target, recover, and keep moving down the lane. Aggression with control.'
  },
  inspection: {
    topic: 'Irish Pennants',
    text: 'A loose thread on a uniform is an "Irish pennant." Inspections teach that small details reflect overall discipline.'
  },
  footlockerInspection: {
    topic: 'A Place for Everything',
    text: 'Every item in a footlocker has a set place and fold. If your gear is in order, you can find it in the dark.'
  },
  nightCleanup: {
    topic: 'Firewatch',
    text: 'Recruits take turns standing hour-long watches through the night, guarding the squad bay while the platoon sleeps.'
  },
  fieldDay: {
    topic: 'Field Day',
    text: 'Despite the name, field day is not a day off. It means scrubbing the squad bay top to bottom for inspection.'
  },
  mailCall: {
    topic: 'Mail Call',
    text: 'Mail call is one of the few moments in the day that belongs to you. Morale is a team supply, so whatever arrives gets shared.'
  },
  writeLetter: {
    topic: 'Letters & OPSEC',
    text: 'Mail is morale, but loose lips sink ships. Never put unit locations, movements, or casualties in a letter. In past wars, censors blacked them out.'
  },
  landNav: {
    topic: 'Land Navigation',
    text: 'An azimuth is measured clockwise from north. Your pace count is personal: measure it over 100 meters and expect it to change on hills.'
  },
  buddyAid: {
    topic: 'Buddy Aid',
    text: 'Check the casualty, then treat what will kill them first. Stop massive bleeding, keep them breathing, guard against shock, and call for evacuation early.'
  },
  nightMove: {
    topic: 'Light Discipline',
    text: 'When a flare pops, freeze. The eye catches movement long before it picks out a shape.'
  },
  humpPrep: {
    topic: 'The Hike',
    text: 'A unit moves at the speed of its slowest Marine. Redistribute weight, not blame.'
  },
  reactionCourse: {
    topic: 'Leadership Reaction',
    text: 'Small teams solve obstacles with limited gear. The evaluators watch how the leader communicates more than whether the plank fits.'
  },
  crucibleDay: {
    topic: 'The Crucible',
    text: 'Fifty-four hours of events on little food and less sleep, covering dozens of miles on foot. Every event requires teamwork to finish.'
  },
  crucibleNight: {
    topic: 'Night Events',
    text: 'Exhaustion makes noise. Night movement in the Crucible tests discipline when nobody can see you cut corners.'
  },
  reaperHike: {
    topic: 'The Reaper',
    text: 'The steep final climb of the San Diego Crucible. At the end, recruits receive the Eagle, Globe, and Anchor and are called Marines for the first time.'
  },
  warriorBreakfast: {
    topic: 'Warrior\'s Breakfast',
    text: 'After the Crucible, new Marines sit down to an all-you-can-eat meal. It is the first meal in days that nobody rushes.'
  },
  gearTurnIn: {
    topic: 'Accountability',
    text: 'Every piece of issued gear is signed for. If it is missing, someone answers for it.'
  },
  finalDrill: {
    topic: 'Final Drill',
    text: 'Platoons are graded on drill from memory, with no prompts. The best platoon earns bragging rights for the rest of the cycle.'
  },
  billetBoard: {
    topic: 'Battalion Commander\'s Inspection',
    text: 'Rapid-fire knowledge questions from senior officers. Bearing matters as much as the answer: stay composed, eyes forward.'
  },
  familyDay: {
    topic: 'Family Day',
    text: 'The day before graduation, new Marines get on-base liberty with their families. For many families, it is the first time they have seen their Marine in three months.'
  },
  graduationParade: {
    topic: 'Eagle, Globe, and Anchor',
    text: 'The emblem was adopted in 1868. The eagle stands for the nation, the globe for worldwide service, and the anchor for the Corps\'s naval roots.'
  },
  fireteamOrders: {
    topic: 'The Fireteam',
    text: 'The Marine Corps built its rifle squad around four-Marine fireteams during WWII: a team leader, an automatic rifleman, an assistant, and a rifleman. A Corporal leads it.'
  },
  squadOrders: {
    topic: 'The Rifle Squad',
    text: 'Three fireteams and a squad leader, usually a Sergeant. Small-unit leaders make the decisions that win fights, because the officer is rarely standing next to them.'
  },
  pointMan: {
    topic: 'Walking Point',
    text: 'The point man leads the column and sees danger first. He watches the ground for signs, not the horizon, and halts the column at anything wrong.'
  },
  sentryPost: {
    topic: 'The Sentry',
    text: 'A sentry challenges anyone approaching and does not quit the post until properly relieved. The General Orders a recruit memorizes exist for this moment.'
  },
  carryWounded: {
    topic: 'Casualty Carry',
    text: 'Marines don\'t leave their wounded behind. Move the casualty from cover to cover, and get down when fire comes in. A second casualty helps no one.'
  },
  newGuy: {
    topic: 'Replacements',
    text: 'Replacements who arrived mid-campaign were most at risk in their first days. Veterans who took them under their wing saved lives.'
  },
  runner: {
    topic: 'Runners',
    text: 'Before radios reached every squad, and whenever they failed, orders traveled on foot. A runner who garbled the message could lose the fight.'
  },
  actingTeamLeader: {
    topic: 'Billets Above Rank',
    text: 'Junior Marines routinely fill the billet above their rank when leaders fall. Every Marine trains to take over the job of the Marine above him.'
  },
  sectorsOfFire: {
    topic: 'Sectors of Fire',
    text: 'Each Marine is assigned a sector that overlaps his neighbor\'s, so the whole front is covered with no gaps for an enemy to slip through.'
  },
  boundingOverwatch: {
    topic: 'Fire and Movement',
    text: 'One element fires to keep the enemy\'s heads down while the other moves. Then they swap. Nobody moves without someone covering.'
  },
  headCount: {
    topic: 'Consolidation',
    text: 'After contact, leaders account for every Marine, treat the wounded, redistribute ammunition, and report up before anyone relaxes.'
  },
  squadAttack: {
    topic: 'Base of Fire and Maneuver',
    text: 'A squad leader fixes the enemy with one fireteam while the others maneuver to the flank. Fire shifts away from the objective just before the assault.'
  },
  setDefense: {
    topic: 'Priorities of Work',
    text: 'In the defense, security goes out first. Then sectors, weapons, fighting holes, and a watch plan. The position improves as long as you hold it.'
  },
  briefTheSquad: {
    topic: 'Passing the Order',
    text: 'An order is only as good as the last Marine to hear it. Squad leaders repeat the situation, the mission, and the plan until every Marine can say it back.'
  },
  missionBriefing: {
    topic: 'After Action Review',
    text: 'What was supposed to happen? What happened? Why? What do we do next time? A debrief is about lessons, not blame.'
  },
  campaignHonors: {
    topic: 'Battle Streamers',
    text: 'Every campaign a unit fights in earns a streamer on its colors. The Marine Corps colors carry more than fifty.'
  },
  shipOut: {
    topic: 'Pre-Combat Checks',
    text: 'Combat-load your kit so what you need first comes out first. Water, ammunition, comms, and first aid get checked before every movement.'
  },
  foxholeDig: {
    topic: 'Fighting Positions',
    text: 'Dig deep enough to fire from cover and keep improving the hole as long as you hold it. The first scrape is never the last.'
  },
  mortarBracket: {
    topic: 'Bracketing Fire',
    text: 'Get one round over the target and one short, then split the difference. Halve the correction each time until rounds land on target.'
  },
  nightWatch: {
    topic: 'Positive Identification',
    text: 'Know what you are shooting at before you shoot. Target discrimination separates Marines from casualties of friendly fire.'
  },
  supplyRun: {
    topic: 'Logistics',
    text: '"Amateurs talk tactics, professionals talk logistics." The saying is attributed to Gen. Robert H. Barrow, the 27th Commandant.'
  },
  fieldMedic: {
    topic: 'Triage & "Doc"',
    text: 'Triage sorts casualties by who can be saved with the time and hands available. Since 1898, Navy hospital corpsmen have served with Marines, who call every one of them "Doc."'
  },
  convoyEscort: {
    topic: 'Moving as a Column',
    text: 'Keep your interval so one round cannot hit many. If you are ambushed, the way out of the kill zone is through it.'
  },
  checkpointSearch: {
    topic: 'Escalation of Force',
    text: 'Signs, hand signals, shouted warnings, and barriers give every driver a chance to comply before force is used. Read the cues and do not rush the call.'
  },
  bunkerRepair: {
    topic: 'Overhead Cover',
    text: 'Fill sandbags about three-quarters full so they shape to each other, and stagger the joints like brickwork.'
  },
  beachLanding: {
    topic: 'The Higgins Boat',
    text: 'The LCVP "Higgins boat" had a bow ramp that let Marines land straight onto a beach. On August 7, 1942, the 1st Marine Division landed on Guadalcanal.'
  },
  flagRaising: {
    topic: 'Two Flags on Suribachi',
    text: 'Marines raised two flags on Mt. Suribachi on February 23, 1945. Joe Rosenthal photographed the second, larger flag. That image became the Marine Corps War Memorial.'
  },
  frostbiteCheck: {
    topic: 'Cold Injuries',
    text: 'Rewarm frostbitten skin gently and never rub it. At the Chosin Reservoir, temperatures dropped to around -30°F, and survivors call themselves the "Chosin Few."'
  },
  weaponsCold: {
    topic: 'Weapons in Extreme Cold',
    text: 'Oil turns to sludge in deep cold. Run actions nearly dry and cycle them often so they do not freeze solid.'
  },
  bridgeRepair: {
    topic: 'Funchilin Pass',
    text: 'In December 1950, a blown bridge blocked the 1st Marine Division\'s route south. Air Force C-119s parachuted in treadway bridge sections, and engineers rebuilt the span.'
  },
  incomingArtillery: {
    topic: 'Siege of Khe Sanh',
    text: 'For 77 days in 1968, Marines held the Khe Sanh combat base under constant shelling. On the worst days, more than a thousand rounds fell.'
  },
  medevacSmoke: {
    topic: 'Marking the LZ',
    text: 'Smoke shows the pilot your position and the wind. Let the pilot name the color first, so the enemy cannot copy your signal with their own smoke.'
  },
  wallBreach: {
    topic: 'Room Clearing',
    text: 'Stack, breach, enter, and flow to your point of domination. Every Marine owns a sector, and nobody stops in the doorway.'
  },
  iedSweep: {
    topic: '5s and 25s',
    text: 'At every halt, check 5 meters around the vehicle, then 25. Look for disturbed earth, wires, and anything out of place.'
  },
  turretGunner: {
    topic: 'Calling Contacts',
    text: 'Direction, distance, description. A clear contact report gets the whole vehicle looking at the right threat.'
  },
  statueTopple: {
    topic: 'Firdos Square',
    text: 'On April 9, 2003, Marines of 3rd Battalion, 4th Marines used an M88 recovery vehicle to pull down Saddam Hussein\'s statue in Baghdad.'
  },
  camelCaravan: {
    topic: 'Eaton\'s March',
    text: 'In 1805, William Eaton led a force of mercenaries and eight Marines under Lt. Presley O\'Bannon some 500 miles across the Libyan desert from Egypt toward Derne.'
  },
  mutinyParley: {
    topic: 'Holding the Coalition',
    text: 'Eaton\'s mercenaries threatened mutiny again and again over pay and rations. Holding the force together was as hard as the march itself.'
  },
  derneCharge: {
    topic: 'Battle of Derne',
    text: 'On April 27, 1805, O\'Bannon\'s Marines and the expedition stormed Derne\'s harbor fortifications.'
  },
  cannonBattery: {
    topic: 'Muzzle-Loader Drill',
    text: 'Swab, powder, shot, ram, prime, fire. Skip the swab and a smoldering ember can set off the next charge in your face.'
  },
  derneColors: {
    topic: '"To the Shores of Tripoli"',
    text: 'Derne was the first time the U.S. flag flew over a captured fortress in the Old World. By tradition, O\'Bannon received a Mameluke sword, a pattern Marine officers still carry.'
  },
  gasAlarm: {
    topic: 'Devil Dogs',
    text: 'At Belleau Wood in June 1918, Marines held under gas and machine-gun fire. Legend says German troops called them "Teufel Hunden," Devil Dogs.'
  },
  jungleAmbush: {
    topic: 'The Banana Wars',
    text: 'In Nicaragua from 1927 to 1933, Marines fought Sandino\'s guerrillas. Lessons from those years shaped the Small Wars Manual, and Chesty Puller earned his first two Navy Crosses there.'
  },
  crowdControl: {
    topic: 'The Three Block War',
    text: 'In Somalia, Marines fed people, kept the peace, and fought, sometimes in the same city. Gen. Charles Krulak later called this the "three block war."'
  }
};

/**
 * Per-campaign overrides when a reused activity means something different in that theater.
 * @type {Record<string, Record<string, { topic: string, text: string }>>}
 */
export const CAMPAIGN_FIELD_NOTES = {
  bootcamp: {
    writeLetter: {
      topic: 'Letters Home',
      text: 'Apart from a short, scripted call on arrival, letters are a recruit\'s only link home. Write often, because your family is counting the days too.'
    }
  },
  korea: {
    convoyEscort: {
      topic: 'Attacking in a Different Direction',
      text: '"Retreat, hell! We\'re not retreating, we\'re just advancing in a different direction." That line is attributed to Maj. Gen. Oliver P. Smith, who led the 1st Marine Division out of the Chosin trap in December 1950.'
    }
  }
};

/**
 * @param {string} campaignId
 * @param {string} activityId
 */
export function getFieldNote(campaignId, activityId) {
  return CAMPAIGN_FIELD_NOTES[campaignId]?.[activityId] ?? FIELD_NOTES[activityId] ?? null;
}

/**
 * Field notes unlocked by completed schedule days (or sandbox runs), in the order learned.
 * @param {object} character
 * @returns {{ activityId: string, topic: string, text: string, source: string }[]}
 */
export function getLearnedFieldNotes(character) {
  const campaign = getCampaignForCharacter(character);
  const completed = character?.campaign?.completed ?? {};
  const periodLabel = campaign.periodLabel ?? 'Week';
  const seen = new Set();
  const notes = [];

  const add = (activityId, source) => {
    if (seen.has(activityId)) return;
    const note = getFieldNote(campaign.id, activityId);
    if (!note) return;
    seen.add(activityId);
    notes.push({ activityId, ...note, source });
  };

  for (const week of getCampaignWeeks(character)) {
    for (const day of week.days ?? []) {
      if (completed[day.id]) add(day.activityId, `${periodLabel} ${week.id} · ${day.title}`);
    }
  }

  for (const dayId of Object.keys(completed)) {
    if (dayId.startsWith('sandbox_')) add(dayId.slice('sandbox_'.length), 'Sandbox');
    if (dayId.startsWith('promo_')) add(dayId.slice('promo_'.length), 'Promotion');
    const dutyId = dutyActivityId(dayId);
    if (dutyId) add(dutyId, 'Rank duty');
  }

  return notes;
}

/**
 * Side quest lessons recorded for this character, in schedule order.
 * @param {object} character
 * @returns {{ id: string, title: string, choice: string, response?: string, source: string }[]}
 */
export function getLessonsLearned(character) {
  const lessons = character?.campaign?.lessons ?? {};
  const periodLabel = getCampaignForCharacter(character).periodLabel ?? 'Week';
  const result = [];
  for (const week of getCampaignWeeks(character)) {
    for (const sq of week.sideQuests ?? []) {
      const lesson = lessons[sq.id];
      if (lesson) {
        result.push({ id: sq.id, title: sq.title, ...lesson, source: `${periodLabel} ${week.id}` });
      }
    }
  }
  return result;
}
