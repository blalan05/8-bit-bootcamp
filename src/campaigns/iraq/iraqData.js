/**
 * Iraq campaign — Baghdad to Fallujah, 2003–2004.
 * locationName must match src/maps/maps.json (baghdad / fallujah maps).
 */

export const IRAQ_OPERATIONS = [
  {
    id: 1,
    name: 'Crossing the LD',
    theme: 'Operation 1 — Convoy staging, dig in at the breach, water resupply',
    days: [
      {
        id: 'i1d1',
        title: 'Convoy Staging',
        briefing: 'Report to the Line of Departure. 1st Marine Division stages for the push into Iraq. Man your stations and check your gear.',
        locationName: 'Line of Departure',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'i1d2',
        title: 'Dig In at the Breach',
        briefing: 'Report to the Line of Departure. Establish fighting positions before the column crosses the berm into Iraq.',
        locationName: 'Line of Departure',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 'i1d3',
        title: 'Water Resupply',
        briefing: 'Report to the Supply Point. Hump water crates to the staging area under time pressure. Hydration saves lives in the desert.',
        locationName: 'Supply Point',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      }
    ],
    sideQuests: [
      { id: 'i1_interpreter', title: 'The Interpreter', availableAfterDay: 1, locationName: 'Command Post', questId: 'theInterpreter' }
    ]
  },
  {
    id: 2,
    name: 'Nasiriyah',
    theme: 'Operation 2 — Bridge gauntlet, rooftop overwatch, casualty collection',
    days: [
      {
        id: 'i2d1',
        title: 'The Gauntlet',
        briefing: 'Report to Nasiriyah Bridge. Fedayeen hold the approaches — advance the column and freeze on flares.',
        locationName: 'Nasiriyah Bridge',
        activityId: 'convoyEscort',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 'i2d2',
        title: 'Rooftop Overwatch',
        briefing: 'Report to Nasiriyah Bridge. Overwatch the bridge from the rooftops. Steady your aim and clear the approaches.',
        locationName: 'Nasiriyah Bridge',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'i2d3',
        title: 'Casualty Collection',
        briefing: 'Report to the Aid Station. Marines are coming off the bridge. Triage and treat in the correct order.',
        locationName: 'Aid Station',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      }
    ]
  },
  {
    id: 3,
    name: 'The Sandstorm',
    theme: 'Operation 3 — Orange-out navigation, checkpoint duty, night perimeter',
    days: [
      {
        id: 'i3d1',
        title: 'Navigate the Orange-Out',
        briefing: 'Report to Highway 1. Sandstorm drops visibility to zero — follow the patrol map and mark every checkpoint.',
        locationName: 'Highway 1',
        activityId: 'landNav',
        stats: ['intelligence']
      },
      {
        id: 'i3d2',
        title: 'Checkpoint Duty',
        briefing: 'Report to the Checkpoint. Vehicles approach the wire — wave through, search, or halt based on the cues.',
        locationName: 'Checkpoint',
        activityId: 'checkpointSearch',
        stats: ['intelligence', 'dexterity']
      },
      {
        id: 'i3d3',
        title: 'Night Perimeter',
        briefing: 'Report to the Checkpoint. Movement in the dark — spot probes before they reach the wire.',
        locationName: 'Checkpoint',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'i3_reservist', title: 'The Reservist', availableAfterDay: 1, locationName: 'Supply Point', questId: 'theReservist' }
    ]
  },
  {
    id: 4,
    name: 'Highway 1',
    theme: 'Operation 4 — Turret gunner, IED sweep, forced pace to the Diyala',
    days: [
      {
        id: 'i4d1',
        title: 'Turret Gunner',
        briefing: 'Report to Highway 1. Ride the turret on the march — traverse on contact, hold fire on civilian vehicles.',
        locationName: 'Highway 1',
        activityId: 'turretGunner',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'i4d2',
        title: 'IED Sweep',
        briefing: 'Report to Highway 1. Sweep ahead of the column — mark suspicious objects, ignore roadside clutter.',
        locationName: 'Highway 1',
        activityId: 'iedSweep',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'i4d3',
        title: 'Forced Pace to the Diyala',
        briefing: 'Report to Diyala Bridge. Full gear march through the heat. Keep your stride in the green band.',
        locationName: 'Diyala Bridge',
        activityId: 'paceRunner',
        stats: ['endurance']
      }
    ]
  },
  {
    id: 5,
    name: 'Baghdad Falls',
    theme: 'Operation 5 — Bridge assault, Firdos Square, letters home',
    days: [
      {
        id: 'i5d1',
        title: 'Bridge Assault',
        briefing: 'Report to Diyala Bridge. Assault the bridge under fire. Vault, crawl, and climb — keep moving.',
        locationName: 'Diyala Bridge',
        activityId: 'obstacleRun',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'i5d2',
        title: 'Firdos Square',
        briefing: 'Report to Firdos Square. Rig the chain, clear the square, and pull down the statue on the cadence.',
        locationName: 'Firdos Square',
        activityId: 'statueTopple',
        stats: ['leadership', 'dexterity']
      },
      {
        id: 'i5d3',
        title: 'Letters Home',
        briefing: 'Report to the Command Post. Baghdad has fallen. Write letters home — choose your words carefully.',
        locationName: 'Command Post',
        activityId: 'writeLetter',
        stats: ['leadership', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'i5_carepackages', title: 'Care Packages', availableAfterDay: 1, locationName: 'Supply Point', questId: 'carePackages' }
    ]
  },
  {
    id: 6,
    name: 'Cross the Berm',
    theme: 'Operation 6 — Berm breach, first block, overwatch the advance',
    days: [
      {
        id: 'i6d1',
        title: 'Breach the Berm',
        briefing: 'Report to the Berm Breach. Full gear march through the breach point. Manage pace and help Marines falling out.',
        locationName: 'Berm Breach',
        activityId: 'humpPrep',
        stats: ['endurance', 'leadership']
      },
      {
        id: 'i6d2',
        title: 'First Block',
        briefing: 'Report to the Jolan District. Stack up, breach the wall, frag out, and clear the room.',
        locationName: 'Jolan District',
        activityId: 'wallBreach',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'i6d3',
        title: 'Overwatch the Advance',
        briefing: 'Report to the Rooftop OP. Adjust for wind and qualify across three firing positions.',
        locationName: 'Rooftop OP',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      }
    ]
  },
  {
    id: 7,
    name: 'The Jolan District',
    theme: 'Operation 7 — House-to-house, IEDs in doorways, ammo resupply',
    days: [
      {
        id: 'i7d1',
        title: 'House to House',
        briefing: 'Report to the Jolan District. Movement in the rubble — spot insurgents before they spot you.',
        locationName: 'Jolan District',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'i7d2',
        title: 'IEDs in the Doorways',
        briefing: 'Report to the Train Station. Sweep every doorway — mark suspicious objects, ignore roadside clutter.',
        locationName: 'Train Station',
        activityId: 'iedSweep',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'i7d3',
        title: 'Ammo Resupply',
        briefing: 'Report to the Government Center. Haul ammo crates under time pressure before the next assault.',
        locationName: 'Government Center',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      }
    ],
    sideQuests: [
      { id: 'i7_hellhouse', title: 'Hell House', availableAfterDay: 1, locationName: 'Jolan District', questId: 'hellHouseQuest' }
    ]
  },
  {
    id: 8,
    name: 'Government Center',
    theme: 'Operation 8 — Breach and clear, close quarters, mark the medevac',
    days: [
      {
        id: 'i8d1',
        title: 'Breach and Clear',
        briefing: 'Report to the Government Center. Stack up, breach, frag out, and clear the room.',
        locationName: 'Government Center',
        activityId: 'wallBreach',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'i8d2',
        title: 'Close Quarters',
        briefing: 'Report to the Industrial District. Room-to-room fighting. Read your opponent and counter before they close.',
        locationName: 'Industrial District',
        activityId: 'pugilDuel',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'i8d3',
        title: 'Mark the Medevac',
        briefing: 'Report to the Aid Station. Pop smoke, clear the LZ, and load casualties before the enemy adjusts fire.',
        locationName: 'Aid Station',
        activityId: 'medevacSmoke',
        stats: ['leadership', 'intelligence']
      }
    ]
  },
  {
    id: 9,
    name: 'Hell House',
    theme: 'Operation 9 — Entry under fire, pull the wounded, rooftop cordon',
    days: [
      {
        id: 'i9d1',
        title: 'Entry Under Fire',
        briefing: 'Report to the Jolan District. Fortified house — fix bayonets and clear the entry.',
        locationName: 'Jolan District',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'i9d2',
        title: 'Pull the Wounded',
        briefing: 'Report to the Aid Station. Marines are trapped inside. Treat casualties in the correct order.',
        locationName: 'Aid Station',
        activityId: 'buddyAid',
        stats: ['intelligence']
      },
      {
        id: 'i9d3',
        title: 'Rooftop Cordon',
        briefing: 'Report to the Rooftop OP. Insurgent snipers on the rooftops. Steady your aim and clear the positions.',
        locationName: 'Rooftop OP',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      }
    ]
  },
  {
    id: 10,
    name: 'Phase Line Fran',
    theme: 'Operation 10 — Mortars on strongpoints, night push, aid station triage',
    days: [
      {
        id: 'i10d1',
        title: 'Mortars on the Strongpoints',
        briefing: 'Report to Phase Line Fran. Insurgent positions behind the berm. Adjust fire and bracket the strongpoints.',
        locationName: 'Phase Line Fran',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      },
      {
        id: 'i10d2',
        title: 'Night Push',
        briefing: 'Report to the Industrial District. Push through the district at night. Freeze when illumination pops.',
        locationName: 'Industrial District',
        activityId: 'nightMove',
        stats: ['dexterity']
      },
      {
        id: 'i10d3',
        title: 'Aid Station Triage',
        briefing: 'Report to the Aid Station. Casualties overflow the triage tents. Treat in the correct order.',
        locationName: 'Aid Station',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      }
    ]
  },
  {
    id: 11,
    name: 'The City Falls',
    theme: 'Operation 11 — Final clearance, after action, campaign honors',
    days: [
      {
        id: 'i11d1',
        title: 'Final Clearance',
        briefing: 'Report to the Grand Mosque. Final push to clear the city. Adjust for wind and qualify across three positions.',
        locationName: 'Grand Mosque',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'i11d2',
        title: 'After Action',
        briefing: 'Report to the Command Post. Officers debrief the battle for Fallujah. Tell them what Phantom Fury cost.',
        locationName: 'Command Post',
        activityId: 'familyDay',
        stats: ['leadership']
      },
      {
        id: 'i11d3',
        title: 'Campaign Honors',
        briefing: 'Report to Phase Line Fran. Formation at the phase line. Baghdad to Fallujah — earn your campaign honors.',
        locationName: 'Phase Line Fran',
        activityId: 'graduationParade',
        stats: ['leadership']
      }
    ]
  }
];
