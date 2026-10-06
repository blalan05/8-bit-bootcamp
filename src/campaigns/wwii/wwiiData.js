/**
 * WWII Pacific Theater — Guadalcanal and Iwo Jima campaign schedule.
 * locationName must match a name in src/maps/maps.json.
 */

export const WWII_OPERATIONS = [
  {
    id: 1,
    name: 'The Landing',
    theme: 'Operation 1 — Ship out, beach assault, establish the beachhead',
    days: [
      {
        id: 'o1d1',
        title: 'Ship Out',
        briefing: 'Report to the Transport Ship. The 1st Marine Division is bound for Guadalcanal. Stand by for final orders before the Higgins boats launch.',
        locationName: 'Transport Ship',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'o1d2',
        title: 'Beach Landing',
        briefing: 'Report to the Landing Beach. Ride the Higgins boat in, hit the ramp on the cadence, and get off the beach before the Japanese zero in on your position.',
        locationName: 'Landing Beach',
        activityId: 'beachLanding',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 'o1d3',
        title: 'Beachhead',
        briefing: 'Report to the Supply Dump. Dig in, establish a perimeter, and secure the initial beachhead before nightfall.',
        locationName: 'Supply Dump',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      }
    ],
    sideQuests: [
      { id: 'o1_green', title: 'The Green Replacement', availableAfterDay: 1, locationName: 'Command Tent', questId: 'greenReplacement' }
    ]
  },
  {
    id: 2,
    name: 'Henderson Field',
    theme: 'Operation 2 — Secure and defend the airstrip',
    days: [
      {
        id: 'o2d1',
        title: 'Secure the Strip',
        briefing: 'Report to Henderson Field. Japanese snipers still hold the treeline. Steady your aim and clear the approaches to the airstrip.',
        locationName: 'Henderson Field',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'o2d2',
        title: 'Dig In',
        briefing: 'Report to the Foxhole Line. Every Marine digs. Establish fighting positions along the perimeter before the counterattack comes.',
        locationName: 'Foxhole Line',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 'o2d3',
        title: 'Counterattack',
        briefing: 'Report to the Ridge. The Japanese are coming in force. Fix bayonets and hold the high ground.',
        locationName: 'Ridge',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      }
    ],
    sideQuests: [
      { id: 'o2_dog', title: 'War Dog Handler', availableAfterDay: 1, locationName: 'Henderson Field', questId: 'warDogHandler' }
    ]
  },
  {
    id: 3,
    name: 'Jungle Patrols',
    theme: 'Operation 3 — Patrol routes, river crossings, jungle alertness',
    days: [
      {
        id: 'o3d1',
        title: 'Trail March',
        briefing: 'Report to the Jungle Trail. Force march through the jungle heat. Keep your pace and your water discipline.',
        locationName: 'Jungle Trail',
        activityId: 'paceRunner',
        stats: ['endurance']
      },
      {
        id: 'o3d2',
        title: 'River Crossing',
        briefing: 'Report to the River Crossing. The patrol must cross under fire. Vault, crawl, and climb — do not break formation.',
        locationName: 'River Crossing',
        activityId: 'obstacleRun',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'o3d3',
        title: 'Sniper Alley',
        briefing: 'Report to the Jungle Patrol route. Movement in the treeline — spot hostiles before they spot you. Do not shoot friendlies.',
        locationName: 'Jungle Patrol',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'o3d4',
        title: 'Booby Traps',
        briefing: 'Report to the Supply Dump. Follow the patrol map and mark every suspected trap before the column moves through.',
        locationName: 'Supply Dump',
        activityId: 'landNav',
        stats: ['intelligence']
      }
    ],
    sideQuests: [
      { id: 'o3_corpsman', title: 'Corpsman Down', availableAfterDay: 2, locationName: 'Field Hospital', questId: 'corpsmanDown' }
    ]
  },
  {
    id: 4,
    name: 'The Ridge',
    theme: 'Operation 4 — Night defense, mortar support, hold the line',
    days: [
      {
        id: 'o4d1',
        title: 'Night Watch',
        briefing: 'Report to the Foxhole Line. Stand watch through the night. Freeze when illumination pops — movement draws fire.',
        locationName: 'Foxhole Line',
        activityId: 'nightMove',
        stats: ['dexterity']
      },
      {
        id: 'o4d2',
        title: 'Mortar Support',
        briefing: 'Report to the Ridge. Call for mortar fire. Adjust range and deflection until rounds bracket the Japanese position.',
        locationName: 'Ridge',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      },
      {
        id: 'o4d3',
        title: 'Hold the Line',
        briefing: 'Report to the Ridge. Close combat on the high ground. Read your opponent and counter before they close the distance.',
        locationName: 'Ridge',
        activityId: 'pugilDuel',
        stats: ['strength', 'dexterity']
      }
    ]
  },
  {
    id: 5,
    name: 'Attrition',
    theme: 'Operation 5 — Supply runs, malaria, morale, forced marches',
    days: [
      {
        id: 'o5d1',
        title: 'Supply Run',
        briefing: 'Report to the Supply Dump. Hump ammo and rations to the forward line under time pressure. Every crate counts.',
        locationName: 'Supply Dump',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 'o5d2',
        title: 'Malaria',
        briefing: 'Report to the Field Hospital. The sick bay is overflowing. Triage casualties and execute field medicine in the correct order.',
        locationName: 'Field Hospital',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      },
      {
        id: 'o5d3',
        title: 'Mail from Home',
        briefing: 'Report to the Command Tent. Letters from home hit different out here. Choose how you handle what arrives.',
        locationName: 'Command Tent',
        activityId: 'writeLetter',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'o5d4',
        title: 'Forced March',
        briefing: 'Report to the Jungle Trail. Full gear march through the jungle. Manage pace and help Marines who are falling out.',
        locationName: 'Jungle Trail',
        activityId: 'humpPrep',
        stats: ['endurance', 'leadership']
      }
    ],
    sideQuests: [
      { id: 'o5_salty', title: 'The Salty Vet', availableAfterDay: 1, locationName: 'Command Tent', questId: 'saltyVet' }
    ]
  },
  {
    id: 6,
    name: 'Relief and Victory',
    theme: 'Operation 6 — Final push, Army relief, Guadalcanal honors',
    days: [
      {
        id: 'o6d1',
        title: 'Final Push',
        briefing: 'Report to the Ridge. Final assault to clear the Japanese positions. Adjust for wind and qualify across three firing positions.',
        locationName: 'Ridge',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'o6d2',
        title: 'Army Relief',
        briefing: 'Report to the Command Tent. Army units are arriving to relieve the division. Debrief with your officers on what you endured.',
        locationName: 'Command Tent',
        activityId: 'familyDay',
        stats: ['leadership']
      },
      {
        id: 'o6d3',
        title: 'Guadalcanal Honors',
        briefing: 'Report to Henderson Field. Formation on the airstrip. The division held Guadalcanal — new orders will come soon.',
        locationName: 'Henderson Field',
        activityId: 'graduationParade',
        stats: ['leadership']
      }
    ]
  },
  {
    id: 7,
    name: 'Iwo Jima: Invasion',
    theme: 'Operation 7 — D-Day on black sand, February 1945',
    days: [
      {
        id: 'o7d1',
        title: 'D-Day Landing',
        briefing: 'Report to the Invasion Beach. Twenty-six thousand Marines hit the volcanic ash today. Get off the beach before the Japanese gunners find your range.',
        locationName: 'Invasion Beach',
        activityId: 'beachLanding',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 'o7d2',
        title: 'Black Sand',
        briefing: 'Report to the Black Sand Beach. Dig in on the ash — every scoop exposes you to fire from the high ground.',
        locationName: 'Black Sand Beach',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 'o7d3',
        title: 'Pillbox Assault',
        briefing: 'Report to Pillbox Row. Steady your aim and clear the reinforced positions blocking the advance inland.',
        locationName: 'Pillbox Row',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'o7_flame', title: 'Flamethrower Team', availableAfterDay: 1, locationName: 'Supply Line', questId: 'flamethrowerTeam' }
    ]
  },
  {
    id: 8,
    name: 'Motoyama Airfield',
    theme: 'Operation 8 — Secure the airfield, fight the caves',
    days: [
      {
        id: 'o8d1',
        title: 'Secure the Strip',
        briefing: 'Report to Motoyama Airfield. The Japanese buried themselves under the runways. Clear the approaches and take the field.',
        locationName: 'Motoyama Airfield',
        activityId: 'obstacleRun',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'o8d2',
        title: 'Cave Fighting',
        briefing: 'Report to the Cave Network. Movement in the tunnels — spot hostiles before they spot you. Do not shoot Marines behind you.',
        locationName: 'Cave Network',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'o8d3',
        title: 'Adjust Fire',
        briefing: 'Report to the Supply Line. Call for supporting fire on the cave mouths. Bracket the targets before the infantry moves up.',
        locationName: 'Supply Line',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      }
    ]
  },
  {
    id: 9,
    name: 'Mt. Suribachi',
    theme: 'Operation 9 — Assault the mountain',
    days: [
      {
        id: 'o9d1',
        title: 'Base of Suribachi',
        briefing: 'Report to Mt. Suribachi Base. Full gear march up the volcanic slope. Help Marines who are falling out on the climb.',
        locationName: 'Mt. Suribachi Base',
        activityId: 'humpPrep',
        stats: ['endurance', 'leadership']
      },
      {
        id: 'o9d2',
        title: 'Climb Suribachi',
        briefing: 'Report to the Mt. Suribachi Slope. Force the pace up the mountain under fire. Keep your stride in the green band.',
        locationName: 'Mt. Suribachi Slope',
        activityId: 'paceRunner',
        stats: ['endurance']
      },
      {
        id: 'o9d3',
        title: 'Recon the Summit',
        briefing: 'Report to Mt. Suribachi Summit. Patrol the ridgeline and mark every position before the assault platoon moves up.',
        locationName: 'Mt. Suribachi Summit',
        activityId: 'landNav',
        stats: ['intelligence']
      }
    ],
    sideQuests: [
      { id: 'o9_codetalker', title: 'Code Talker', availableAfterDay: 1, locationName: 'Command Post', questId: 'codeTalker' }
    ]
  },
  {
    id: 10,
    name: 'Underground War',
    theme: 'Operation 10 — Tunnel rats, corpsmen, hold the line',
    days: [
      {
        id: 'o10d1',
        title: 'Tunnel Rats',
        briefing: 'Report to the Cave Network. Fix bayonets and clear the tunnels room by room. Keep the rhythm — hesitation gets Marines killed.',
        locationName: 'Cave Network',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'o10d2',
        title: 'Corpsman Forward',
        briefing: 'Report to the Field Hospital. Casualties are pouring in from the caves. Triage and treat in the correct order.',
        locationName: 'Field Hospital',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      },
      {
        id: 'o10d3',
        title: 'Hold Motoyama',
        briefing: 'Report to Pillbox Row. Close combat to hold the airfield perimeter. Read your opponent and counter before they close.',
        locationName: 'Pillbox Row',
        activityId: 'pugilDuel',
        stats: ['strength', 'dexterity']
      }
    ]
  },
  {
    id: 11,
    name: 'Raising the Colors',
    theme: 'Operation 11 — Mt. Suribachi, 23 February 1945',
    days: [
      {
        id: 'o11d1',
        title: 'Find the Pipe',
        briefing: 'Report to Mt. Suribachi Summit. A patrol has reached the top. Locate a pipe, assemble the pole, and prepare to raise the flag.',
        locationName: 'Mt. Suribachi Summit',
        activityId: 'flagRaising',
        stats: ['leadership', 'strength']
      },
      {
        id: 'o11d2',
        title: 'Raising the Flag',
        briefing: 'Report to Mt. Suribachi Summit. Six Marines, one flagpole, the world watching. Hoist the colors on Suribachi.',
        locationName: 'Mt. Suribachi Summit',
        activityId: 'flagRaising',
        stats: ['leadership', 'dexterity']
      }
    ]
  },
  {
    id: 12,
    name: 'Island Secured',
    theme: 'Operation 12 — Final clearing, after-action, Pacific victory',
    days: [
      {
        id: 'o12d1',
        title: 'Final Clearing',
        briefing: 'Report to Motoyama Airfield. Last Japanese holdouts on the island. Adjust for wind and qualify across three firing positions.',
        locationName: 'Motoyama Airfield',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'o12d2',
        title: 'After Action',
        briefing: 'Report to the Command Post. Officers debrief the battle. The flag on Suribachi is already an icon — tell them what it cost.',
        locationName: 'Command Post',
        activityId: 'familyDay',
        stats: ['leadership']
      },
      {
        id: 'o12d3',
        title: 'Pacific Victory',
        briefing: 'Report to Mt. Suribachi Summit. Formation below the flag. Guadalcanal to Iwo Jima — earn your campaign honors.',
        locationName: 'Mt. Suribachi Summit',
        activityId: 'graduationParade',
        stats: ['leadership']
      }
    ]
  }
];
