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
  runBilletBoard, runFamilyDay, runGraduationParade
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

/** @type {Record<string, { title: string, subtitle: string, intro: string, run: Function }>} */
export const ACTIVITY_REGISTRY = {
  drillCadence: {
    title: 'Close Order Drill',
    subtitle: 'Parade Deck — on the cadence',
    intro: 'Press the matching key when the command flashes. <strong>L</strong> Left Face · <strong>R</strong> Right Face · <strong>M</strong> March · <strong>H</strong> Halt',
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
    intro: 'Press <strong>F</strong> to pull, <strong>J</strong> at chin-over-bar, <strong>K</strong> at full hang.',
    run: runIst
  },
  steadyAim: {
    title: 'Snapping In',
    subtitle: 'Rifle Range — steady aim',
    intro: 'Hold <strong>Space</strong> to steady your breath. Press <strong>F</strong> to fire when the reticle aligns with the ring.',
    run: runSteadyAim
  },
  paceRunner: {
    title: 'PFT Baseline',
    subtitle: '400m track — pace run',
    intro: 'Alternate <strong>J</strong> and <strong>K</strong> to maintain stride in the green band.',
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
    intro: '<strong>F</strong> to stroke · <strong>Space</strong> to breathe at the wall · <strong>T</strong> to turn.',
    run: runSwimStrokes
  },
  gearShed: {
    title: 'Gear Shed',
    subtitle: 'Pool — underwater shed',
    intro: 'Shed gear in the prompted order: H helmet · F flak · B belt · N boots · T trousers · Space surface.',
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
    intro: '<strong>V</strong> vault · <strong>C</strong> crawl · <strong>L</strong> climb · <strong>S</strong> swing · <strong>Enter</strong> finish.',
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
    intro: 'Read the opponent\'s tell. <strong>H</strong> high block · <strong>L</strong> low block · <strong>D</strong> dodge feint.',
    run: runPugilDuel
  },
  bayonetCourse: {
    title: 'Bayonet Course',
    subtitle: 'Drill Practice — thrust and slash',
    intro: '<strong>T</strong> thrust · <strong>S</strong> slash — keep the rhythm down the lane.',
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
    intro: 'Arrow keys adjust wind. <strong>F</strong> to fire at standing, kneeling, and prone.',
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
    intro: '<strong>W</strong> to march. <strong>Space</strong> to help a falling teammate (costs stamina).',
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
    intro: '<strong>W</strong> to hike. Stamina barely recovers. Finish to earn the title.',
    run: runReaperHike
  },
  warriorBreakfast: {
    title: 'Warrior Breakfast',
    subtitle: 'Chow Hall — earned meal',
    intro: 'Press <strong>Space</strong> when the called item appears on the serving line.',
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
    intro: 'Execute the full command sequence from memory. L · R · A · M · H.',
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
    intro: 'Final drill performance. P · O · E · M · H · Enter for the Eagle, Globe, and Anchor.',
    run: runGraduationParade
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
    run: runWriteLetter
  },
  nightCleanup: {
    title: 'Night Cleanup',
    subtitle: 'Barracks — firewatch scrub',
    intro: 'Hold <strong>S</strong> to scrub the quarterdeck. Release when you hear a creak.',
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
    intro: '<strong>J</strong>/<strong>K</strong> alternate grips · <strong>Space</strong> pull · <strong>Enter</strong> mount.',
    run: runHighObstacle
  },
  rappelTower: {
    title: 'Rappelling',
    subtitle: 'Rappell Course — controlled descent',
    intro: 'Press <strong>B</strong> in the green band on each bounce down the tower.',
    run: runRappelTower
  },
  gasChamber: {
    title: 'Gas Chamber',
    subtitle: 'Gas Chamber — mask discipline',
    intro: '<strong>Space</strong> hold breath · <strong>C</strong> clear mask · <strong>B</strong> controlled exhale.',
    run: runGasChamber
  },
  mailCall: {
    title: 'Mail Call',
    subtitle: 'Barracks — letters and packages',
    intro: 'Packages and letters from home. Choose how you handle what arrives.',
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
    intro: 'Execute every command before the Higgins boats launch for Guadalcanal.',
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
    intro: 'Alternate <strong>J</strong> and <strong>K</strong> to dig your fighting position.',
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
    intro: 'Press <strong>F</strong> on hostile movement. Do NOT fire on friendlies.',
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
    intro: 'Assemble the pipe, attach the flag, and hoist the colors on Suribachi. <strong>Space</strong> on the cadence.',
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
    intro: 'Work the bolt and hand-warm the action. <strong>B</strong> bolt · <strong>H</strong> warm · <strong>D</strong> dry-fire · <strong>C</strong> cycle.',
    run: runWeaponsCold
  },
  convoyEscort: {
    title: 'Fighting Withdrawal',
    subtitle: 'Frozen Reservoir — attack in a different direction',
    intro: '<strong>W</strong> to advance the column. Freeze on flares. <strong>Space</strong> to help a straggler.',
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
    intro: 'Press <strong>D</strong> to dive on INCOMING — hold position on ALL CLEAR.',
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
    intro: 'Press <strong>M</strong> to mark SUSPICIOUS OBJECT — hold on ROADSIDE CLUTTER.',
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
    intro: 'Press <strong>C</strong> to grab the lead on CAMEL BOLTS — hold on STEADY COLUMN.',
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
    intro: 'Press <strong>G</strong> to mask on GAS! GAS! GAS! — hold on FALSE ALARM.',
    run: runGasAlarm
  },
  jungleAmbush: {
    title: 'Jungle Ambush',
    subtitle: 'Nicaragua — return fire on muzzle flash',
    intro: 'Press <strong>F</strong> on MUZZLE FLASH — hold on VILLAGERS ON THE TRAIL.',
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
