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
