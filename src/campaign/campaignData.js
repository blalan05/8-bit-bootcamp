/**
 * 13-week boot camp campaign schedule (MCRD matrix).
 * locationName must match a name in src/maps/maps.json.
 */

export const CAMPAIGN_WEEKS = [
  {
    id: 1,
    name: 'Receiving',
    theme: 'Phase 1 — Receiving, processing, pick-up',
    days: [
      {
        id: 'w1d1',
        title: 'Yellow Footprints',
        briefing: 'Report to the Receiving Barracks. Step off the bus onto the yellow footprints and stand at attention until every command is executed.',
        locationName: 'Receiving Barracks',
        activityId: 'yellowFootprints',
        stats: ['leadership', 'dexterity']
      },
      {
        id: 'w1d2',
        title: 'Haircuts & Medical',
        briefing: 'Report to Medical. Run the receiving pipeline — haircut, hygiene issue, medical screening, dental, and initial gear issue.',
        locationName: 'Medical',
        activityId: 'processing',
        stats: ['endurance', 'intelligence']
      },
      {
        id: 'w1d3',
        title: 'Black Friday',
        briefing: 'Report to the Barracks. Today you are assigned to a company and platoon. Your Senior Drill Instructor takes charge.',
        locationName: 'Barracks',
        activityId: 'blackFriday',
        stats: ['leadership']
      }
    ],
    sideQuests: [
      { id: 'w1_straggler', title: 'The Straggler', availableAfterDay: 1, locationName: 'Barracks', questId: 'theStraggler' },
      { id: 'w1_chow', title: 'Chow Hall Protocol', availableAfterDay: 1, locationName: 'Chow Hall', questId: 'chowProtocol' }
    ]
  },
  {
    id: 2,
    name: 'Drill & PT',
    theme: 'Phase 1 — Dressing drill, close order, baseline fitness',
    days: [
      {
        id: 'w2d1',
        title: 'Dressing Drill',
        briefing: 'Report to the Barracks. The D.I. calls an article of clothing — don it before the countdown expires.',
        locationName: 'Barracks',
        activityId: 'dressDrill',
        stats: ['dexterity']
      },
      {
        id: 'w2d2',
        title: 'Close Order Drill',
        briefing: 'Report to the Parade Deck for close-order drill. Learn the cadence and execute every command on the beat.',
        locationName: 'Parade Deck',
        activityId: 'drillCadence',
        stats: ['leadership', 'dexterity']
      },
      {
        id: 'w2d3',
        title: 'PFT Baseline',
        briefing: 'Report to the 400m track. Alternate stride keys and keep your pace in the green band.',
        locationName: '400m track',
        activityId: 'paceRunner',
        stats: ['endurance']
      },
      {
        id: 'w2d4',
        title: 'Letter Home',
        briefing: 'Report to the Barracks. Write your first letter home — your family is waiting to hear from you.',
        locationName: 'Barracks',
        activityId: 'writeLetter',
        stats: ['intelligence']
      }
    ],
    sideQuests: [
      { id: 'w2_church', title: 'Sunday Service', availableAfterDay: 1, locationName: 'Church Auditorium', questId: 'sundayService' },
      { id: 'w2_remedial_drill', title: 'Remedial Drill', availableAfterDay: 2, locationName: 'Parade Deck', questId: 'remedialDrill', maxStats: { dexterity: 9 } },
      { id: 'w2_body_comp', title: 'Body Composition Program', availableAfterDay: 3, locationName: '400m track', questId: 'bodyCompProgram', maxStats: { endurance: 9 } }
    ]
  },
  {
    id: 3,
    name: 'Fundamentals',
    theme: 'Phase 1 — Core values, MCMAP, firewatch discipline',
    days: [
      {
        id: 'w3d1',
        title: 'Core Values Class',
        briefing: 'Report to the Lecture Hall for Core Values instruction. Know the traits — lives depend on Marines who live the code.',
        locationName: 'Lecture Hall',
        activityId: 'coreValues',
        stats: ['intelligence', 'leadership']
      },
      {
        id: 'w3d2',
        title: 'MCMAP Intro',
        briefing: 'Report to the MCMAP Pit. Execute strike and block combos on command.',
        locationName: 'MCMAP Pit',
        activityId: 'mcmapSpar',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'w3d3',
        title: 'Night Cleanup',
        briefing: 'Report to the Barracks. Firewatch quarterdeck scrub — clean quietly without waking the platoon.',
        locationName: 'Barracks',
        activityId: 'nightCleanup',
        stats: ['dexterity']
      }
    ],
    sideQuests: [
      { id: 'w3_housemouse', title: 'House Mouse', availableAfterDay: 1, locationName: 'Barracks', questId: 'houseMouse', maxHeight: 35 },
      { id: 'w3_remedial_knowledge', title: 'Remedial Knowledge', availableAfterDay: 1, locationName: 'Lecture Hall', questId: 'remedialKnowledge', maxStats: { intelligence: 9 } },
      { id: 'w3_remedial_strength', title: 'Remedial Strength', availableAfterDay: 2, locationName: 'Pull-up Bars', questId: 'remedialStrength', maxStats: { strength: 9 } }
    ]
  },
  {
    id: 4,
    name: 'Swim Week',
    theme: 'Phase 2 — Water survival, gear shed, inspections',
    days: [
      { id: 'w4d1', title: 'Swim Qualification', briefing: 'Report to the Pool. Match stroke rhythm and surface to breathe on cue.', locationName: 'Pool', activityId: 'swimStrokes', stats: ['endurance'] },
      { id: 'w4d2', title: 'Gear Shed', briefing: 'Report to the Pool. Shed gear in the correct order before your air runs out.', locationName: 'Pool', activityId: 'gearShed', stats: ['dexterity', 'endurance'] },
      { id: 'w4d3', title: 'Footlocker Inspection', briefing: 'Report to the Barracks. Spot every discrepancy in your footlocker before the D.I. finishes his walk.', locationName: 'Barracks', activityId: 'footlockerInspection', stats: ['leadership', 'intelligence'] }
    ],
    sideQuests: [
      { id: 'w4_scared', title: 'Scared of the Water', availableAfterDay: 1, locationName: 'Pool', questId: 'scaredOfWater' }
    ]
  },
  {
    id: 5,
    name: 'Team Week / Interior Guard',
    theme: 'Phase 2 — Log drills, obstacle courses, squad leadership',
    days: [
      { id: 'w5d1', title: 'Log Drills', briefing: 'Report to the Logs. Sync your lift when all four teammates align in the zone.', locationName: 'Logs', activityId: 'logTeamLift', stats: ['strength', 'leadership'] },
      { id: 'w5d2', title: 'Fire Team Course', briefing: 'Report to the Obstacle Course. Hit each obstacle key before the window closes.', locationName: 'Obstacle Course', activityId: 'obstacleRun', stats: ['dexterity'] },
      { id: 'w5d3', title: 'High Obstacle Course', briefing: 'Report to the Obstacle Course. Climb the high course — missed grips cost you height.', locationName: 'Obstacle Course', activityId: 'highObstacle', stats: ['strength', 'dexterity'] },
      { id: 'w5d4', title: 'Reaction Course', briefing: 'Report to the Obstacle Course. Sequence planks and ropes to cross the gap.', locationName: 'Obstacle Course', activityId: 'reactionCourse', stats: ['intelligence', 'leadership'] }
    ],
    sideQuests: [
      { id: 'w5_blister', title: 'Blister Check', availableAfterDay: 1, locationName: 'Barracks', questId: 'blisterCheck' },
      { id: 'w5_squadleader', title: 'Squad Leader', availableAfterDay: 1, locationName: 'Barracks', questId: 'squadLeader', minStats: { leadership: 13 } }
    ]
  },
  {
    id: 6,
    name: 'Combat Week',
    theme: 'Phase 2 — Pugil sticks, bayonet, rappelling',
    days: [
      { id: 'w6d1', title: 'Pugil Sticks', briefing: 'Report to Thunderdown. Read your opponent and counter before impact.', locationName: 'Thunderdown', activityId: 'pugilDuel', stats: ['strength', 'dexterity'] },
      { id: 'w6d2', title: 'Bayonet Course', briefing: 'Report to Drill Practice. Thrust and slash in rhythm down the lane.', locationName: 'Drill Practice', activityId: 'bayonetCourse', stats: ['strength'] },
      { id: 'w6d3', title: 'Rappelling', briefing: 'Report to the Rappell Course. Control your brake hand on the descent — bounce cadence matters.', locationName: 'Rappell Course', activityId: 'rappelTower', stats: ['dexterity'] }
    ]
  },
  {
    id: 7,
    name: 'Grass Week',
    theme: 'Phase 3 — Snapping in, weapons maintenance, knowledge',
    days: [
      { id: 'w7d1', title: 'Snapping In', briefing: 'Report to the Rifle Range. Steady your aim, control your breath, and place shots inside the ring.', locationName: 'Rifle Range', activityId: 'steadyAim', stats: ['dexterity', 'intelligence'] },
      { id: 'w7d2', title: 'Weapons Maintenance', briefing: 'Report to the Armoury. Field-strip the rifle in the correct order before time runs out.', locationName: 'Armoury', activityId: 'fieldStrip', stats: ['intelligence', 'dexterity'] },
      { id: 'w7d3', title: 'Knowledge Exam', briefing: 'Report to the Lecture Hall. Complete the General Orders — every word matters.', locationName: 'Lecture Hall', activityId: 'knowledgeExam', stats: ['intelligence'] }
    ],
    sideQuests: [
      { id: 'w7_carepkg', title: 'Care Package', availableAfterDay: 1, locationName: 'MCX', questId: 'carePackage' }
    ]
  },
  {
    id: 8,
    name: 'Table 1',
    theme: 'Phase 3 — Live-fire qualification, inspections, buddy aid',
    days: [
      { id: 'w8d1', title: 'Table 1 Qualification', briefing: 'Report to the Rifle Range. Adjust for wind and qualify across three positions.', locationName: 'Rifle Range', activityId: 'rifleQual', stats: ['dexterity', 'intelligence'] },
      { id: 'w8d2', title: 'Uniform Inspection', briefing: 'Report to the Barracks. Spot every discrepancy before the D.I. finishes his walk.', locationName: 'Barracks', activityId: 'inspection', stats: ['leadership', 'intelligence'] },
      { id: 'w8d3', title: 'Buddy Aid', briefing: 'Report to Medical. Triage casualties and execute first aid in the correct order.', locationName: 'Medical', activityId: 'buddyAid', stats: ['intelligence'] }
    ],
    sideQuests: [
      { id: 'w8_companymouse', title: 'Company House Mouse', availableAfterDay: 1, locationName: 'Company Office', questId: 'companyHouseMouse', maxHeight: 35, requiresQuest: 'w3_housemouse' }
    ]
  },
  {
    id: 9,
    name: 'Table 2 / BWT',
    theme: 'Phase 3 — Land nav, gas chamber, night ops, field hike',
    days: [
      { id: 'w9d1', title: 'Land Navigation', briefing: 'Report to the trail loop. Follow bearings and paces to each checkpoint.', locationName: 'The trail loop', activityId: 'landNav', stats: ['intelligence'] },
      { id: 'w9d2', title: 'Gas Chamber', briefing: 'Report to the Gas Chamber. Don and clear your mask on command — controlled breathing under CS gas.', locationName: 'Gas Chamber', activityId: 'gasChamber', stats: ['endurance'] },
      { id: 'w9d3', title: 'Night Infiltration', briefing: 'Report to Drill Practice. Move quietly — freeze when the flare pops.', locationName: 'Drill Practice', activityId: 'nightMove', stats: ['dexterity'] },
      { id: 'w9d4', title: 'Full Gear Hike', briefing: 'Report to the trail loop. Manage pace and help struggling teammates.', locationName: 'The trail loop', activityId: 'humpPrep', stats: ['endurance', 'leadership'] }
    ],
    sideQuests: [
      { id: 'w9_doubter', title: 'The Doubter', availableAfterDay: 1, locationName: 'Barracks', questId: 'theDoubter' }
    ]
  },
  {
    id: 10,
    name: 'The Crucible',
    theme: 'Phase 3 — 54-hour culminating event',
    days: [
      { id: 'w10d1', title: 'Crucible: Day Events', briefing: 'Report to the Crucible Trail. Complete the day gauntlet on shared fatigue.', locationName: 'Crucible Trail', activityId: 'crucibleDay', stats: ['endurance', 'strength'] },
      { id: 'w10d2', title: 'Crucible: Night Events', briefing: 'Return to the Crucible Trail. Night movement and navigation under fatigue.', locationName: 'Crucible Trail', activityId: 'crucibleNight', stats: ['endurance', 'intelligence'] },
      { id: 'w10d3', title: 'The Reaper', briefing: 'Final hike on the Crucible Trail. Finish strong — the title is earned here.', locationName: 'Crucible Trail', activityId: 'reaperHike', stats: ['endurance', 'leadership'] }
    ]
  },
  {
    id: 11,
    name: 'Warrior Week',
    theme: 'Phase 4 — Recovery, mail call, gear turn-in',
    days: [
      { id: 'w11d1', title: 'Warrior Breakfast', briefing: 'Report to the Chow Hall. Grab what the line calls for — you earned this meal.', locationName: 'Chow Hall', activityId: 'warriorBreakfast', stats: ['endurance'] },
      { id: 'w11d2', title: 'Mail Call', briefing: 'Report to the Barracks. Packages and letters from home — after the Crucible, they hit different.', locationName: 'Barracks', activityId: 'mailCall', stats: ['leadership'] },
      { id: 'w11d3', title: 'Gear Turn-In', briefing: 'Report to Supply. Match issued gear counts and find every shortage.', locationName: 'Supply', activityId: 'gearTurnIn', stats: ['intelligence'] }
    ]
  },
  {
    id: 12,
    name: 'Final Drill',
    theme: 'Phase 4 — Field day, parade prep, command inspection',
    days: [
      { id: 'w12d1', title: 'Field Day', briefing: 'Report to the Barracks. Clean every station in order before the D.I. white-glove pass.', locationName: 'Barracks', activityId: 'fieldDay', stats: ['endurance', 'leadership'] },
      { id: 'w12d2', title: 'Final Drill Eval', briefing: 'Report to the Parade Deck. Execute the full command sequence from memory.', locationName: 'Parade Deck', activityId: 'finalDrill', stats: ['leadership'] },
      { id: 'w12d3', title: "Battalion Commander's Inspection", briefing: 'Report to the Company Office. Answer rapid-fire questions with composure.', locationName: 'Company Office', activityId: 'billetBoard', stats: ['leadership', 'intelligence'] }
    ],
    sideQuests: [
      { id: 'w12_squared', title: 'Squared Away', availableAfterDay: 1, locationName: 'Barracks', questId: 'squaredAway' },
      { id: 'w12_guide', title: 'The Guide', availableAfterDay: 1, locationName: 'Parade Deck', questId: 'guide', minStats: { leadership: 14 }, requiresQuest: 'w5_squadleader' }
    ]
  },
  {
    id: 13,
    name: 'Graduation',
    theme: 'Phase 4 — Family Day, ceremony, MOS school orders',
    days: [
      { id: 'w13d1', title: 'Family Day', briefing: 'Report to Family Day. Walk your family through the depot — show them who you became.', locationName: 'Family Day', activityId: 'familyDay', stats: ['leadership'] },
      { id: 'w13d2', title: 'Graduation Parade', briefing: 'Report to the Parade Deck. Final drill performance and the Eagle, Globe, and Anchor.', locationName: 'Parade Deck', activityId: 'graduationParade', stats: ['leadership'] }
    ]
  }
];

/**
 * @param {number} weekNumber
 */
export function getWeek(weekNumber) {
  return CAMPAIGN_WEEKS.find(w => w.id === weekNumber) ?? null;
}

/**
 * @param {number} week
 * @param {number} dayInWeek
 */
export function getDayDefinition(week, dayInWeek) {
  const weekDef = getWeek(week);
  if (!weekDef) return null;
  return weekDef.days[dayInWeek - 1] ?? null;
}

/**
 * Find map object coordinates by location name.
 * @param {object} parsedMap
 * @param {string} locationName
 */
export function findLocation(parsedMap, locationName) {
  if (!parsedMap?.tiles) return null;
  for (const objects of Object.values(parsedMap.tiles)) {
    const found = objects.find(o => o.name === locationName);
    if (found) return found;
  }
  return null;
}

/**
 * Side quests available on the current day.
 * @param {number} week
 * @param {number} dayInWeek
 * @param {object} character
 */
export function getAvailableSideQuests(week, dayInWeek, character) {
  const campaign = character?.campaign ?? character;
  const weekDef = getWeek(week);
  if (!weekDef?.sideQuests) return [];
  return weekDef.sideQuests.filter(sq => {
    if (campaign.sideQuests?.[sq.id] === 'done') return false;
    if (dayInWeek < sq.availableAfterDay) return false;

    if (sq.maxHeight != null) {
      const height = character?.appearance?.height ?? 50;
      if (height > sq.maxHeight) return false;
    }

    if (sq.minStats) {
      const stats = character?.stats ?? {};
      for (const [key, floor] of Object.entries(sq.minStats)) {
        if ((stats[key] ?? 10) < floor) return false;
      }
    }

    if (sq.maxStats) {
      const stats = character?.stats ?? {};
      for (const [key, ceiling] of Object.entries(sq.maxStats)) {
        if ((stats[key] ?? 10) > ceiling) return false;
      }
    }

    if (sq.requiresQuest && campaign.sideQuests?.[sq.requiresQuest] !== 'done') {
      return false;
    }

    return true;
  });
}

export function isCampaignComplete(week) {
  return week > CAMPAIGN_WEEKS.length;
}

export function getTotalWeeks() {
  return CAMPAIGN_WEEKS.length;
}
