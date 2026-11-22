/**
 * Tripoli campaign — Alexandria to Derne, 1805.
 * locationName must match src/maps/maps.json (desertmarch / derne maps).
 */

export const TRIPOLI_OPERATIONS = [
  {
    id: 1,
    name: 'Eight Marines',
    theme: 'Operation 1 — Muster at Alexandria, load the caravan, first march',
    days: [
      {
        id: 't1d1',
        title: 'Muster at Alexandria',
        briefing: 'Report to Alexandria Camp. Eight Marines and Lieutenant O\'Bannon join Eaton\'s expedition. Man your stations.',
        locationName: 'Alexandria Camp',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 't1d2',
        title: 'Load the Caravan',
        briefing: 'Report to the Supply Cache. Load water skins, powder, and rations before the column moves out.',
        locationName: 'Supply Cache',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 't1d3',
        title: 'First Day\'s March',
        briefing: 'Report to The Caravan. Force the pace across the Libyan desert. Keep your stride in the green band.',
        locationName: 'The Caravan',
        activityId: 'paceRunner',
        stats: ['endurance']
      }
    ],
    sideQuests: [
      { id: 't1_guard', title: 'The Marine Guard', availableAfterDay: 1, locationName: 'Alexandria Camp', questId: 'marineGuard' }
    ]
  },
  {
    id: 2,
    name: 'The Caravan',
    theme: 'Operation 2 — Camels bolt, navigate by stars, guard the water',
    days: [
      {
        id: 't2d1',
        title: 'Camels Bolt',
        briefing: 'Report to The Caravan. A spooked camel breaks the column — grab the lead before the train scatters.',
        locationName: 'The Caravan',
        activityId: 'camelCaravan',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 't2d2',
        title: 'Navigate by the Stars',
        briefing: 'Report to Star Route. Follow Eaton\'s map and mark every checkpoint before the column moves through.',
        locationName: 'Star Route',
        activityId: 'landNav',
        stats: ['intelligence']
      },
      {
        id: 't2d3',
        title: 'Guard the Water',
        briefing: 'Report to The Wells. Movement in the dark — spot probes before they reach the water skins.',
        locationName: 'The Wells',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 't2_map', title: "Eaton's Map", availableAfterDay: 1, locationName: 'Command Tent', questId: 'eatonsMap' }
    ]
  },
  {
    id: 3,
    name: 'Mutiny at the Wells',
    theme: 'Operation 3 — Parley with mercenaries, share rations, hold the column',
    days: [
      {
        id: 't3d1',
        title: 'Parley with the Mercenaries',
        briefing: 'Report to Mercenary Camp. Greek and Arab mercenaries block the well — defuse the flashpoint.',
        locationName: 'Mercenary Camp',
        activityId: 'mutinyParley',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 't3d2',
        title: 'Share the Rations',
        briefing: 'Report to the Supply Cache. Issue gear in the correct order before the column moves again.',
        locationName: 'Supply Cache',
        activityId: 'supplyRun',
        stats: ['intelligence']
      },
      {
        id: 't3d3',
        title: 'Hold the Column Together',
        briefing: 'Report to The Caravan. Full gear march through the desert. Manage pace and help Marines falling out.',
        locationName: 'The Caravan',
        activityId: 'humpPrep',
        stats: ['endurance', 'leadership']
      }
    ],
    sideQuests: [
      { id: 't3_hamet', title: "Hamet's Cause", availableAfterDay: 1, locationName: 'Command Tent', questId: 'hametsCause' }
    ]
  },
  {
    id: 4,
    name: 'The Dead March',
    theme: 'Operation 4 — Forced march, heat casualties, Eaton\'s resolve',
    days: [
      {
        id: 't4d1',
        title: 'Forced March',
        briefing: 'Report to Dead March Flats. Water skins are empty — force the pace across the flats.',
        locationName: 'Dead March Flats',
        activityId: 'paceRunner',
        stats: ['endurance']
      },
      {
        id: 't4d2',
        title: 'Heat Casualties',
        briefing: 'Report to Aid Tent. Marines are dropping in the heat. Triage and treat in the correct order.',
        locationName: 'Aid Tent',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      },
      {
        id: 't4d3',
        title: 'Eaton\'s Resolve',
        briefing: 'Report to Command Tent. General Eaton addresses the column — five hundred miles and the fortress awaits.',
        locationName: 'Command Tent',
        activityId: 'missionBriefing',
        stats: ['leadership']
      }
    ],
    sideQuests: [
      { id: 't4_pay', title: 'The Promised Pay', availableAfterDay: 1, locationName: 'Mercenary Camp', questId: 'promisedPay' }
    ]
  },
  {
    id: 5,
    name: 'Bomba Bay',
    theme: 'Operation 5 — Signal the Argus, resupply, eve of battle',
    days: [
      {
        id: 't5d1',
        title: 'Signal the Argus',
        briefing: 'Report to Bomba Bay. Signal the Constitution offshore. Steady your aim and clear the approaches.',
        locationName: 'Bomba Bay',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 't5d2',
        title: 'Resupply from the Boats',
        briefing: 'Report to Bomba Bay. Haul powder and rations from the landing craft under time pressure.',
        locationName: 'Bomba Bay',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 't5d3',
        title: 'Eve of Battle',
        briefing: 'Report to Command Tent. Write letters home before the assault on Derne. Choose your words carefully.',
        locationName: 'Command Tent',
        activityId: 'writeLetter',
        stats: ['leadership', 'intelligence']
      }
    ]
  },
  {
    id: 6,
    name: 'The Assault Begins',
    theme: 'Operation 6 — Charge the battery, naval gunfire, through the breach',
    days: [
      {
        id: 't6d1',
        title: 'Charge the Harbor Battery',
        briefing: 'Report to Harbor Battery. Fix bayonets and charge the harbor guns with O\'Bannon\'s Marines.',
        locationName: 'Harbor Battery',
        activityId: 'derneCharge',
        stats: ['strength', 'dexterity']
      },
      {
        id: 't6d2',
        title: 'Naval Gunfire',
        briefing: 'Report to Derne Harbor. Constitution\'s guns bracket the fortress. Adjust fire on the ramparts.',
        locationName: 'Derne Harbor',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      },
      {
        id: 't6d3',
        title: 'Through the Breach',
        briefing: 'Report to The Breach. Assault through the breach under fire. Vault, crawl, and climb — keep moving.',
        locationName: 'The Breach',
        activityId: 'obstacleRun',
        stats: ['dexterity', 'strength']
      }
    ]
  },
  {
    id: 7,
    name: 'The Harbor Battery',
    theme: 'Operation 7 — Man the guns, hold ramparts, counterattack',
    days: [
      {
        id: 't7d1',
        title: 'Man the Captured Guns',
        briefing: 'Report to Harbor Battery. Load and fire the captured guns before the counterattack.',
        locationName: 'Harbor Battery',
        activityId: 'cannonBattery',
        stats: ['intelligence', 'dexterity']
      },
      {
        id: 't7d2',
        title: 'Hold the Ramparts',
        briefing: 'Report to Ramparts. Adjust for wind and engage from standing, kneeling, and prone.',
        locationName: 'Ramparts',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 't7d3',
        title: 'Counterattack at Dusk',
        briefing: 'Report to Ramparts. Movement on the walls — spot hostiles before they retake the battery.',
        locationName: 'Ramparts',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      }
    ]
  },
  {
    id: 8,
    name: 'Governor\'s Palace',
    theme: 'Operation 8 — House-to-house, bayonets, secure the walls',
    days: [
      {
        id: 't8d1',
        title: 'House to House',
        briefing: 'Report to Old Town. Assault through the streets at night. Freeze when illumination pops.',
        locationName: 'Old Town',
        activityId: 'nightMove',
        stats: ['dexterity']
      },
      {
        id: 't8d2',
        title: 'Bayonets in the Courtyard',
        briefing: 'Report to Governor\'s Palace. Fix bayonets and clear the courtyard.',
        locationName: 'Governor\'s Palace',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      },
      {
        id: 't8d3',
        title: 'Secure the Walls',
        briefing: 'Report to Water Gate. Dig in and establish fighting positions along the fortress walls.',
        locationName: 'Water Gate',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      }
    ]
  },
  {
    id: 9,
    name: 'The Counterattack',
    theme: 'Operation 9 — Repel assault, close quarters, patch the wounded',
    days: [
      {
        id: 't9d1',
        title: 'Repel the Assault',
        briefing: 'Report to Ramparts. Tripolitan forces counterattack the walls. Steady your aim and hold.',
        locationName: 'Ramparts',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 't9d2',
        title: 'Close Quarters',
        briefing: 'Report to Governor\'s Palace. Room-to-room fighting. Read your opponent and counter before they close.',
        locationName: 'Governor\'s Palace',
        activityId: 'pugilDuel',
        stats: ['strength', 'dexterity']
      },
      {
        id: 't9d3',
        title: 'Patch the Wounded',
        briefing: 'Report to Aid Tent. Treat casualties in the correct order before the next assault.',
        locationName: 'Aid Tent',
        activityId: 'buddyAid',
        stats: ['intelligence']
      }
    ]
  },
  {
    id: 10,
    name: 'Holding Derne',
    theme: 'Operation 10 — Rebuild battery, ration garrison, word from fleet',
    days: [
      {
        id: 't10d1',
        title: 'Rebuild the Battery',
        briefing: 'Report to Harbor Battery. Rebuild the captured guns before the next bombardment.',
        locationName: 'Harbor Battery',
        activityId: 'bunkerRepair',
        stats: ['strength', 'intelligence']
      },
      {
        id: 't10d2',
        title: 'Ration the Garrison',
        briefing: 'Report to Command Tent. Issue gear in the correct order — every ration counts.',
        locationName: 'Command Tent',
        activityId: 'supplyRun',
        stats: ['intelligence']
      },
      {
        id: 't10d3',
        title: 'Word from the Fleet',
        briefing: 'Report to Command Tent. Mail from the Argus and Constitution — read what the fleet sends.',
        locationName: 'Command Tent',
        activityId: 'mailCall',
        stats: ['leadership']
      }
    ]
  },
  {
    id: 11,
    name: 'The Colors Over Derne',
    theme: 'Operation 11 — Final defense, raise the colors, campaign honors',
    days: [
      {
        id: 't11d1',
        title: 'Final Defense',
        briefing: 'Report to Flag Bastion. Final push to hold Derne. Adjust for wind and engage from standing, kneeling, and prone.',
        locationName: 'Flag Bastion',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 't11d2',
        title: 'Raise the Colors',
        briefing: 'Report to Flag Bastion. Rig the halyard and hoist the first US flag over an Old World fortress.',
        locationName: 'Flag Bastion',
        activityId: 'derneColors',
        stats: ['leadership', 'dexterity']
      },
      {
        id: 't11d3',
        title: 'Campaign Honors',
        briefing: 'Report to Governor\'s Palace. Formation in the courtyard. Alexandria to Derne — earn your campaign honors.',
        locationName: 'Governor\'s Palace',
        activityId: 'campaignHonors',
        stats: ['leadership']
      }
    ]
  }
];
