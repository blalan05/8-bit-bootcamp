import { scoreToGrade } from './campaignState.js';
import { runDrillCadence } from './activities/drillCadence/drillCadenceTest.js';
import { runCoreValues } from './activities/coreValues/coreValuesTest.js';
import { runIst } from './activities/ist/istTest.js';
import {
  runSteadyAim, runPaceRunner, runFieldStrip, runSwimStrokes,
  runGearShed, runLogTeamLift, runObstacleRun
} from './activities/games/phaseAGames.js';
import {
  runLandNav, runBuddyAid, runMcmapSpar, runPugilDuel, runBayonetCourse,
  runKnowledgeExam, runInspection, runRifleQual, runNightMove
} from './activities/games/phaseBGames.js';
import {
  runHumpPrep, runReactionCourse, runCrucibleDay, runCrucibleNight,
  runReaperHike, runWarriorBreakfast, runGearTurnIn, runFinalDrill,
  runBilletBoard, runFamilyDay, runGraduationParade, runMissionBriefing, runCampaignHonors
} from './activities/games/phaseCGames.js';
import {
  runYellowFootprints, runProcessing, runBlackFriday
} from './activities/games/receivingGames.js';
import {
  runDressDrill, runHighObstacle, runRappelTower, runGasChamber,
  runNightCleanup, runWriteLetter, runMailCall, runFieldDay,
  runFootlockerInspection
} from './activities/games/dailyLifeGames.js';
import {
  runShipOut, runBeachLanding, runFoxholeDig, runMortarBracket,
  runNightWatch, runSupplyRun, runFieldMedic, runFlagRaising
} from './activities/games/wwiiGames.js';
import {
  runFrostbiteCheck, runWeaponsCold, runConvoyEscort, runBridgeRepair
} from './activities/games/koreaGames.js';
import {
  runIncomingArtillery, runBunkerRepair, runMedevacSmoke, runWallBreach
} from './activities/games/vietnamGames.js';
import {
  runIedSweep, runTurretGunner, runCheckpointSearch, runStatueTopple
} from './activities/games/iraqGames.js';
import {
  runCamelCaravan, runMutinyParley, runDerneCharge, runCannonBattery, runDerneColors
} from './activities/games/tripoliGames.js';
import {
  runGasAlarm, runJungleAmbush, runCrowdControl
} from './activities/games/expeditionGames.js';
import { runFireteamOrders, runSquadOrders } from './activities/games/leadershipGames.js';
import {
  runPointMan, runSentryPost, runCarryWounded, runNewGuy, runRunner, runActingTeamLeader,
  runSectorsOfFire, runBoundingOverwatch, runHeadCount, runSquadAttack, runSetDefense, runBriefTheSquad
} from './activities/games/rankDutyGames.js';

/** @type {Record<string, { title: string, subtitle: string, intro: string, run: Function }>} */
export const ACTIVITY_REGISTRY = {
  drillCadence: {
    title: 'Close Order Drill',
    subtitle: 'Parade Deck — on the cadence',
    intro: 'Press the lit key on the command of execution. <strong>A</strong> Left Face · <strong>D</strong> Right Face · <strong>W</strong> Forward March · <strong>S</strong> Halt',
    run: runDrillCadence
  },
  coreValues: {
    title: 'Core Values Class',
    subtitle: 'Lecture Hall — know the code',
    intro: 'Match each leadership trait to its definition.',
    run: runCoreValues
  },
  ist: {
    title: 'Initial Strength Test',
    subtitle: 'Pull-up Bars — counted reps',
    intro: 'Press <strong>I</strong> to pull, <strong>L</strong> at chin-over-bar, <strong>K</strong> at full hang.',
    run: runIst
  },
  steadyAim: {
    title: 'Snapping In',
    subtitle: 'Rifle Range — steady aim',
    intro: 'Hold <strong>Space</strong> to steady your breath. Press <strong>L</strong> to fire when the reticle aligns with the ring.',
    run: runSteadyAim
  },
  paceRunner: {
    title: 'PFT Baseline',
    subtitle: '400m track — pace run',
    intro: '<strong>A</strong> left stride · <strong>D</strong> right stride — stay in step on the cadence.',
    run: runPaceRunner
  },
  fieldStrip: {
    title: 'Weapons Maintenance',
    subtitle: 'Armoury — field strip',
    intro: 'Click rifle parts in the correct disassembly order before time runs out.',
    run: runFieldStrip
  },
  swimStrokes: {
    title: 'Swim Qualification',
    subtitle: 'Pool — stroke rhythm',
    intro: '<strong>L</strong> to stroke · <strong>I</strong> to breathe (head up) · <strong>W</strong> to push off the wall.',
    run: runSwimStrokes
  },
  gearShed: {
    title: 'Gear Shed',
    subtitle: 'Pool — underwater shed',
    intro: 'Shed gear in the prompted order: <strong>I</strong> helmet · <strong>J</strong> flak · <strong>L</strong> belt · <strong>K</strong> boots and trousers · <strong>W</strong> surface.',
    run: runGearShed
  },
  logTeamLift: {
    title: 'Log Drills',
    subtitle: 'Logs — team sync lift',
    intro: 'Press <strong>Space</strong> when all four teammate markers align in the green zone.',
    run: runLogTeamLift
  },
  obstacleRun: {
    title: 'Fire Team Course',
    subtitle: 'Obstacle Course — QTE run',
    intro: '<strong>W</strong> vault · <strong>S</strong> crawl · <strong>I</strong> climb · <strong>L</strong> swing · <strong>Enter</strong> finish.',
    run: runObstacleRun
  },
  landNav: {
    title: 'Land Navigation',
    subtitle: 'Trail loop — map reading',
    intro: 'Given a bearing and pace count, choose the correct checkpoint for each leg.',
    run: runLandNav
  },
  buddyAid: {
    title: 'Buddy Aid',
    subtitle: 'Medical — triage',
    intro: 'Order first-aid steps correctly for each casualty: assess, breathing, bleeding, shock, evac.',
    run: runBuddyAid
  },
  mcmapSpar: {
    title: 'MCMAP Intro',
    subtitle: 'MCMAP Pit — combos',
    intro: 'Execute strike and block combos on command.',
    run: runMcmapSpar
  },
  pugilDuel: {
    title: 'Pugil Sticks',
    subtitle: 'Thunderdown — duel',
    intro: 'Read the opponent\'s tell. <strong>I</strong> high block · <strong>K</strong> low block · <strong>A</strong> dodge the feint.',
    run: runPugilDuel
  },
  bayonetCourse: {
    title: 'Bayonet Course',
    subtitle: 'Drill Practice — thrust and slash',
    intro: '<strong>I</strong> thrust · <strong>L</strong> slash · <strong>Enter</strong> finish — keep the rhythm down the lane.',
    run: runBayonetCourse
  },
  knowledgeExam: {
    title: 'Knowledge Exam',
    subtitle: 'Lecture Hall — General Orders',
    intro: 'Complete each General Order with the correct missing phrase.',
    run: runKnowledgeExam
  },
  inspection: {
    title: 'Uniform Inspection',
    subtitle: 'Barracks — spot discrepancies',
    intro: 'Click every uniform error on the board before the D.I. finishes his walk.',
    run: runInspection
  },
  rifleQual: {
    title: 'Table 1 Qualification',
    subtitle: 'Rifle Range — wind and positions',
    intro: 'Arrow keys adjust wind. Press <strong>L</strong> to fire at standing, kneeling, and prone.',
    run: runRifleQual
  },
  nightMove: {
    title: 'Night Infiltration',
    subtitle: 'Drill Practice — quiet movement',
    intro: 'Hold <strong>W</strong> to advance. Freeze when the flare pops — do not move.',
    run: runNightMove
  },
  humpPrep: {
    title: 'Full Gear Hike',
    subtitle: 'Trail loop — pace and leadership',
    intro: 'Hold <strong>W</strong> to march. Press <strong>I</strong> to lift a falling teammate (costs stamina).',
    run: runHumpPrep
  },
  reactionCourse: {
    title: 'Reaction Course',
    subtitle: 'Obstacle Course — team crossing',
    intro: 'Sequence planks, ropes, and barrels to cross the gap in the correct order.',
    run: runReactionCourse
  },
  crucibleDay: {
    title: 'Crucible: Day Events',
    subtitle: 'Crucible Trail — day gauntlet',
    intro: 'Marksmanship station under fatigue. Steady aim and execute.',
    run: runCrucibleDay
  },
  crucibleNight: {
    title: 'Crucible: Night Events',
    subtitle: 'Crucible Trail — night movement',
    intro: 'Freeze and move on command through the night course.',
    run: runCrucibleNight
  },
  reaperHike: {
    title: 'The Reaper',
    subtitle: 'Crucible Trail — final hike',
    intro: 'Hold <strong>W</strong> to hike. Stamina barely recovers. Finish to earn the title.',
    run: runReaperHike
  },
  warriorBreakfast: {
    title: 'Warrior Breakfast',
    subtitle: 'Chow Hall — earned meal',
    intro: 'Press <strong>L</strong> to grab the called item when it appears on the serving line.',
    run: runWarriorBreakfast
  },
  gearTurnIn: {
    title: 'Gear Turn-In',
    subtitle: 'Supply — inventory check',
    intro: 'Match issued gear quantities against what is on the shelf.',
    run: runGearTurnIn
  },
  finalDrill: {
    title: 'Final Drill Eval',
    subtitle: 'Parade Deck — from memory',
    intro: 'Execute the full command sequence from memory. <strong>A</strong> left face · <strong>D</strong> right face · <strong>S</strong> about face / halt · <strong>W</strong> forward march.',
    run: runFinalDrill
  },
  billetBoard: {
    title: "Battalion Commander's Inspection",
    subtitle: 'Company Office — billet board',
    intro: 'Answer rapid-fire knowledge questions with composure.',
    run: runBilletBoard
  },
  familyDay: {
    title: 'Family Day',
    subtitle: 'Family Day — epilogue',
    intro: 'Walk your family through the depot. Show them who you became.',
    run: runFamilyDay
  },
  graduationParade: {
    title: 'Graduation Parade',
    subtitle: 'Parade Deck — EGA ceremony',
    intro: 'Final drill performance. <strong>I</strong> present arms · <strong>K</strong> order arms · <strong>D</strong> eyes right · <strong>W</strong> march · <strong>S</strong> halt · <strong>Enter</strong> for the Eagle, Globe, and Anchor.',
    run: runGraduationParade
  },
  missionBriefing: {
    title: 'Mission Briefing',
    subtitle: 'Command Post — word from the line',
    intro: 'The unit gathers. Hear what comes next.',
    run: runMissionBriefing
  },
  campaignHonors: {
    title: 'Campaign Honors',
    subtitle: 'Honors Formation — battle streamer',
    intro: 'Final formation. <strong>I</strong> present arms · <strong>K</strong> order arms · <strong>D</strong> eyes right · <strong>W</strong> march · <strong>S</strong> halt · <strong>Enter</strong> as the streamer goes on the colors.',
    run: runCampaignHonors
  },
  fireteamOrders: {
    title: 'Take the Fireteam',
    subtitle: 'Fireteam Leader — three Marines',
    intro: 'You\'re a Corporal now. Make the calls a fireteam leader makes.',
    run: runFireteamOrders
  },
  squadOrders: {
    title: 'Take the Squad',
    subtitle: 'Squad Leader — three fireteams',
    intro: 'You\'re a Sergeant now. Twelve Marines, three team leaders, one plan.',
    run: runSquadOrders
  },
  pointMan: {
    title: 'Walk Point',
    subtitle: 'Rifleman duty — lead the column',
    intro: 'You\'re on point. Press <strong>S</strong> to halt the column on danger signs. Keep moving on a clear trail.',
    run: runPointMan
  },
  sentryPost: {
    title: 'Stand Your Post',
    subtitle: 'Rifleman duty — night sentry',
    intro: 'The line sleeps while you watch. Handle what comes to your post.',
    run: runSentryPost
  },
  carryWounded: {
    title: 'Carry the Wounded',
    subtitle: 'Rifleman duty — casualty carry',
    intro: 'A Marine is down. <strong>I</strong> lift · <strong>W</strong> move · <strong>S</strong> get down · <strong>K</strong> set him down at the aid station.',
    run: runCarryWounded
  },
  newGuy: {
    title: 'Square Away the New Guy',
    subtitle: 'Senior Marine duty — mentor a replacement',
    intro: 'A replacement just joined. Keep him alive long enough to learn.',
    run: runNewGuy
  },
  runner: {
    title: 'Runner',
    subtitle: 'Senior Marine duty — carry the message',
    intro: 'The word has to get through. Memorize the message, then deliver it word for word.',
    run: runRunner
  },
  actingTeamLeader: {
    title: 'Acting Team Leader',
    subtitle: 'Senior Marine duty — step up',
    intro: 'Your team leader is hit. Take charge on the command of execution.',
    run: runActingTeamLeader
  },
  sectorsOfFire: {
    title: 'Sectors of Fire',
    subtitle: 'Fireteam leader duty — site your Marines',
    intro: 'Place your three Marines so the team covers its sector with no gaps.',
    run: runSectorsOfFire
  },
  boundingOverwatch: {
    title: 'Bounding Overwatch',
    subtitle: 'Fireteam leader duty — fire and movement',
    intro: 'Move your fireteam in pairs: one covers, one moves. <strong>L</strong> fire · <strong>W</strong> move · <strong>S</strong> get down · <strong>K</strong> secure.',
    run: runBoundingOverwatch
  },
  headCount: {
    title: 'After Contact',
    subtitle: 'Fireteam leader duty — consolidate',
    intro: 'The shooting stopped. Consolidate your fireteam and report in the correct order.',
    run: runHeadCount
  },
  squadAttack: {
    title: 'Squad Attack',
    subtitle: 'Squad leader duty — three fireteams',
    intro: 'Take the hill with base of fire and maneuver.',
    run: runSquadAttack
  },
  setDefense: {
    title: 'Set the Defense',
    subtitle: 'Squad leader duty — build the position',
    intro: 'Night is coming. Build the squad\'s defense in the right order.',
    run: runSetDefense
  },
  briefTheSquad: {
    title: 'Brief the Squad',
    subtitle: 'Squad leader duty — pass the order',
    intro: 'The platoon commander gives you the order once. Twelve Marines need it exactly.',
    run: runBriefTheSquad
  },
  yellowFootprints: {
    title: 'Yellow Footprints',
    subtitle: 'Receiving Barracks — first formation',
    intro: 'Step off the bus onto the yellow footprints. Execute every barked command on time.',
    run: runYellowFootprints
  },
  processing: {
    title: 'Haircuts & Medical',
    subtitle: 'Medical — receiving pipeline',
    intro: 'Complete each receiving station in order: haircut, hygiene, medical, dental, gear issue.',
    run: runProcessing
  },
  blackFriday: {
    title: 'Black Friday',
    subtitle: 'Barracks — D.I. pick-up',
    intro: 'Your Senior Drill Instructor takes charge. Respond with proper bearing.',
    run: runBlackFriday
  },
  dressDrill: {
    title: 'Dressing Drill',
    subtitle: 'Barracks — blouses ready, MOVE',
    intro: 'The D.I. calls an article of clothing — click the correct gear before the countdown expires.',
    run: runDressDrill
  },
  writeLetter: {
    title: 'Letter Home',
    subtitle: 'Barracks — first letter',
    intro: 'Compose your first letter home. Your tone and honesty matter.',
    fieldTagline: 'letter home',
    fieldIntro: 'Write home between missions. Be honest, be kind, and give nothing away to the enemy.',
    run: runWriteLetter
  },
  nightCleanup: {
    title: 'Night Cleanup',
    subtitle: 'Barracks — firewatch scrub',
    intro: 'Hold <strong>L</strong> to scrub the quarterdeck. Release when you hear a creak.',
    run: runNightCleanup
  },
  footlockerInspection: {
    title: 'Footlocker Inspection',
    subtitle: 'Barracks — spot discrepancies',
    intro: 'Click every footlocker error before the D.I. finishes his walk.',
    run: runFootlockerInspection
  },
  highObstacle: {
    title: 'High Obstacle Course',
    subtitle: 'Obstacle Course — climb',
    intro: '<strong>J</strong> / <strong>L</strong> alternate grips · <strong>I</strong> pull up and mount.',
    run: runHighObstacle
  },
  rappelTower: {
    title: 'Rappelling',
    subtitle: 'Rappell Course — controlled descent',
    intro: 'Press <strong>K</strong> (brake hand) in the green band on each bounce down the tower.',
    run: runRappelTower
  },
  gasChamber: {
    title: 'Gas Chamber',
    subtitle: 'Gas Chamber — mask discipline',
    intro: '<strong>Space</strong> hold breath · <strong>J</strong> clear mask · <strong>I</strong> controlled exhale.',
    run: runGasChamber
  },
  mailCall: {
    title: 'Mail Call',
    subtitle: 'Barracks — letters and packages',
    intro: 'Packages and letters from home. Choose how you handle what arrives.',
    fieldIntro: 'Mail catches up with the unit. Choose how you handle what arrives.',
    run: runMailCall
  },
  fieldDay: {
    title: 'Field Day',
    subtitle: 'Barracks — white-glove clean',
    intro: 'Click cleaning stations in the correct order before the D.I. inspects.',
    run: runFieldDay
  },
  shipOut: {
    title: 'Ship Out',
    subtitle: 'Transport Ship — boats away',
    intro: 'Execute every command before the unit moves out.',
    run: runShipOut
  },
  beachLanding: {
    title: 'Beach Landing',
    subtitle: 'Landing Beach — Higgins boat assault',
    intro: 'Ride the Higgins boat in, hit the ramp on the cadence, and get off the beach.',
    run: runBeachLanding
  },
  foxholeDig: {
    title: 'Dig In',
    subtitle: 'Foxhole Line — shovel strokes',
    intro: 'Alternate <strong>J</strong> and <strong>L</strong> to dig your fighting position.',
    run: runFoxholeDig
  },
  mortarBracket: {
    title: 'Mortar Support',
    subtitle: 'Ridge — adjust fire',
    intro: 'Arrow keys adjust range and deflection. <strong>Space</strong> to fire each volley.',
    run: runMortarBracket
  },
  nightWatch: {
    title: 'Sniper Alley',
    subtitle: 'Jungle Patrol — night watch',
    intro: 'Press <strong>L</strong> on hostile movement. Do NOT fire on friendlies.',
    run: runNightWatch
  },
  supplyRun: {
    title: 'Supply Run',
    subtitle: 'Supply Dump — hump rations',
    intro: 'Load supplies in the correct order before the patrol moves out.',
    run: runSupplyRun
  },
  fieldMedic: {
    title: 'Field Medic',
    subtitle: 'Field Hospital — triage',
    intro: 'Triage casualties and execute field medicine in the correct order.',
    run: runFieldMedic
  },
  flagRaising: {
    title: 'Raising the Colors',
    subtitle: 'Mt. Suribachi — 23 February 1945',
    intro: 'Assemble the pipe, attach the flag, and hoist the colors on Suribachi. <strong>I</strong> heave · <strong>K</strong> secure · <strong>Enter</strong> colors up.',
    run: runFlagRaising
  },
  frostbiteCheck: {
    title: 'Frostbite Triage',
    subtitle: 'Aid Station — frozen casualties',
    intro: 'Treat frostbite casualties in the correct order before evac.',
    run: runFrostbiteCheck
  },
  weaponsCold: {
    title: 'Frozen Weapons',
    subtitle: 'Warming Tents — keep rifles firing',
    intro: 'Work the bolt and hand-warm the action. <strong>L</strong> bolt / dry-fire · <strong>J</strong> warm · <strong>K</strong> cycle · <strong>Enter</strong> rifle hot.',
    run: runWeaponsCold
  },
  convoyEscort: {
    title: 'Fighting Withdrawal',
    subtitle: 'Frozen Reservoir — attack in a different direction',
    intro: 'Hold <strong>W</strong> to advance the column. Freeze on flares. Press <strong>I</strong> to lift a straggler.',
    run: runConvoyEscort
  },
  bridgeRepair: {
    title: 'Bridge Repair',
    subtitle: 'Funchilin Pass — treadway assembly',
    intro: 'Assemble treadway sections in the correct order before the column is cut off.',
    run: runBridgeRepair
  },
  incomingArtillery: {
    title: 'Incoming Barrage',
    subtitle: 'Trenchline — rockets and mortars',
    intro: 'Press <strong>S</strong> to get down on INCOMING — hold position on ALL CLEAR.',
    run: runIncomingArtillery
  },
  bunkerRepair: {
    title: 'Rebuild the Bunker',
    subtitle: 'Combat Base — sandbags and timbers',
    intro: 'Fill sandbags, stack the wall, and brace the bunker before the next barrage.',
    run: runBunkerRepair
  },
  medevacSmoke: {
    title: 'Guide the Medevac',
    subtitle: 'Drop Zone — pop smoke and load casualties',
    intro: 'Pop smoke, clear the LZ, mark approach, then load casualties on the cadence.',
    run: runMedevacSmoke
  },
  wallBreach: {
    title: 'Breach and Clear',
    subtitle: 'University — stack up and clear the room',
    intro: 'Stack up, breach, frag out, clear left and right, then room clear.',
    run: runWallBreach
  },
  iedSweep: {
    title: 'IED Sweep',
    subtitle: 'Highway 1 — mark suspicious objects',
    intro: 'Press <strong>I</strong> to mark SUSPICIOUS OBJECT — hold on ROADSIDE CLUTTER.',
    run: runIedSweep
  },
  turretGunner: {
    title: 'Turret Gunner',
    subtitle: 'Highway 1 — traverse on contact',
    intro: 'Press <strong>A</strong>/<strong>D</strong> on CONTACT LEFT/RIGHT — hold fire on CIVILIAN VEHICLE.',
    run: runTurretGunner
  },
  checkpointSearch: {
    title: 'Checkpoint Duty',
    subtitle: 'Checkpoint — wave, search, or halt',
    intro: 'Read each vehicle\'s cues and choose Wave Through, Search, or Halt.',
    run: runCheckpointSearch
  },
  statueTopple: {
    title: 'Firdos Square',
    subtitle: 'Baghdad — pull down the statue',
    intro: 'Rig the chain, clear the square, signal the M88, then pull it down on the cadence.',
    run: runStatueTopple
  },
  camelCaravan: {
    title: 'The Caravan',
    subtitle: 'Libyan Desert — grab the lead',
    intro: 'Press <strong>J</strong> to grab the lead on CAMEL BOLTS — hold on STEADY COLUMN.',
    run: runCamelCaravan
  },
  mutinyParley: {
    title: 'Mutiny at the Wells',
    subtitle: 'Mercenary Camp — defuse the flashpoint',
    intro: 'Pay Them, Promise Gold, or Stand Firm — read each mercenary flashpoint.',
    run: runMutinyParley
  },
  derneCharge: {
    title: 'Charge the Harbor Battery',
    subtitle: 'Derne — fix bayonets and charge',
    intro: 'Fix bayonets, over the wall, clear the battery, turn the guns, colors up.',
    run: runDerneCharge
  },
  cannonBattery: {
    title: 'Man the Harbor Battery',
    subtitle: 'Derne — load and fire captured guns',
    intro: 'Swab, powder, shot, ram, prime — then fire on the cadence.',
    run: runCannonBattery
  },
  derneColors: {
    title: 'Raise the Colors',
    subtitle: 'Flag Bastion — first US flag over an Old World fortress',
    intro: 'Rig the halyard, clear the bastion, attach the colors, hoist on the cadence.',
    run: runDerneColors
  },
  gasAlarm: {
    title: 'Gas Attack',
    subtitle: 'Belleau Wood — mask up',
    intro: 'Press <strong>I</strong> to mask on GAS! GAS! GAS! — hold on FALSE ALARM.',
    run: runGasAlarm
  },
  jungleAmbush: {
    title: 'Jungle Ambush',
    subtitle: 'Nicaragua — return fire on muzzle flash',
    intro: 'Press <strong>L</strong> on MUZZLE FLASH — hold on VILLAGERS ON THE TRAIL.',
    run: runJungleAmbush
  },
  crowdControl: {
    title: 'Crowd Control',
    subtitle: 'Mogadishu — hold the line at the wire',
    intro: 'Hold the Line, Open the Gate, or Call the Terp — read each crowd situation.',
    run: runCrowdControl
  }
};

export function getActivity(activityId) {
  return ACTIVITY_REGISTRY[activityId] ?? null;
}

export function buildActivityResult(score, stats, details = {}) {
  return {
    score,
    grade: scoreToGrade(score),
    stats,
    details
  };
}
