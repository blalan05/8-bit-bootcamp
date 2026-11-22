/**
 * Vietnam campaign — Khe Sanh to Hue City, Tet 1968.
 * locationName must match src/maps/maps.json (khesanh / hue maps).
 */

export const VIETNAM_OPERATIONS = [
  {
    id: 1,
    name: 'Arrival at Khe Sanh',
    theme: 'Operation 1 — Helo in, dig the trenchline, hump ammo',
    days: [
      {
        id: 'v1d1',
        title: 'Helo In',
        briefing: 'Report to the Combat Base. CH-46 drops you on the Khe Sanh plateau. NVA trenches are visible on the ridgelines — dig in before nightfall.',
        locationName: 'Combat Base',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'v1d2',
        title: 'Dig the Trenchline',
        briefing: 'Report to the Trenchline. Monsoon mud and NVA mortars — establish fighting positions along the perimeter.',
        locationName: 'Trenchline',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 'v1d3',
        title: 'Hump Ammo',
        briefing: 'Report to the Ammo Dump. Hump crates to the trenchline under time pressure. Every round counts.',
        locationName: 'Ammo Dump',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      }
    ],
    sideQuests: [
      { id: 'v1_shorttimer', title: 'The Short-Timer', availableAfterDay: 1, locationName: 'Aid Station', questId: 'shortTimer' }
    ]
  },
  {
    id: 2,
    name: 'The Hill Fights',
    theme: 'Operation 2 — Hill 881, clear the crest, fire support',
    days: [
      {
        id: 'v2d1',
        title: 'Climb Hill 881',
        briefing: 'Report to Hill 881. Force the pace up the jungle slope under fire. Keep your stride in the green band.',
        locationName: 'Hill 881',
        activityId: 'paceRunner',
        stats: ['endurance']
      },
      {
        id: 'v2d2',
        title: 'Clear the Crest',
        briefing: 'Report to Hill 881. NVA bunkers on the crest. Steady your aim and clear the approaches.',
        locationName: 'Hill 881',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'v2d3',
        title: 'Fire Support',
        briefing: 'Report to the Command Post. Call for mortar and artillery. Bracket the NVA positions on the ridgeline.',
        locationName: 'Command Post',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      }
    ]
  },
  {
    id: 3,
    name: 'The Siege Begins',
    theme: 'Operation 3 — Incoming barrage, rebuild bunker, night watch',
    days: [
      {
        id: 'v3d1',
        title: 'Incoming Barrage',
        briefing: 'Report to the Trenchline. NVA rockets and mortars — hit the deck on INCOMING, hold position on ALL CLEAR.',
        locationName: 'Trenchline',
        activityId: 'incomingArtillery',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 'v3d2',
        title: 'Rebuild the Bunker',
        briefing: 'Report to the Combat Base. A direct hit collapsed the bunker. Rebuild before the next barrage.',
        locationName: 'Combat Base',
        activityId: 'bunkerRepair',
        stats: ['strength', 'intelligence']
      },
      {
        id: 'v3d3',
        title: 'Night Watch on the Wire',
        briefing: 'Report to The Wire. Movement in the treeline — spot hostiles before they probe the perimeter.',
        locationName: 'The Wire',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'v3_tunnel', title: 'Tunnel Rat', availableAfterDay: 1, locationName: 'Listening Post', questId: 'tunnelRat' }
    ]
  },
  {
    id: 4,
    name: 'Patrols in the Wire',
    theme: 'Operation 4 — Night movement, map treelines, listening post',
    days: [
      {
        id: 'v4d1',
        title: 'Night Movement',
        briefing: 'Report to The Wire. Patrol outside the perimeter. Freeze when illumination pops — movement draws fire.',
        locationName: 'The Wire',
        activityId: 'nightMove',
        stats: ['dexterity']
      },
      {
        id: 'v4d2',
        title: 'Map the Treelines',
        briefing: 'Report to Hill 881. Follow the patrol map and mark every NVA position before the column moves through.',
        locationName: 'Hill 881',
        activityId: 'landNav',
        stats: ['intelligence']
      },
      {
        id: 'v4d3',
        title: 'Listening Post',
        briefing: 'Report to the Listening Post. Movement in the dark — spot probes before they reach the wire.',
        locationName: 'Listening Post',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      }
    ]
  },
  {
    id: 5,
    name: 'Resupply Under Fire',
    theme: 'Operation 5 — Medevac, forced march, word of Tet',
    days: [
      {
        id: 'v5d1',
        title: 'Guide the Medevac',
        briefing: 'Report to the Drop Zone. Pop smoke, clear the LZ, and load casualties before the NVA adjust fire.',
        locationName: 'Drop Zone',
        activityId: 'medevacSmoke',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'v5d2',
        title: 'Forced March',
        briefing: 'Report to the Airstrip. Full gear march through monsoon mud. Manage pace and help Marines falling out.',
        locationName: 'Airstrip',
        activityId: 'humpPrep',
        stats: ['endurance', 'leadership']
      },
      {
        id: 'v5d3',
        title: 'Word of Tet',
        briefing: 'Report to the Command Post. Officers brief the company — Tet is coming. Everything is about to change.',
        locationName: 'Command Post',
        activityId: 'missionBriefing',
        stats: ['leadership']
      }
    ]
  },
  {
    id: 6,
    name: 'Crossing the Perfume',
    theme: 'Operation 6 — Boat ramp, secure compound, first contact',
    days: [
      {
        id: 'v6d1',
        title: 'Boat Ramp Under Fire',
        briefing: 'Report to the Boat Ramp. Cross the Perfume River under fire. Vault, crawl, and climb — keep moving.',
        locationName: 'Boat Ramp',
        activityId: 'obstacleRun',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'v6d2',
        title: 'Secure the Compound',
        briefing: 'Report to the MACV Compound. Dig in and establish a foothold in the city before the NVA counterattack.',
        locationName: 'MACV Compound',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 'v6d3',
        title: 'First Contact',
        briefing: 'Report to the Treasury Building. First contact in the streets. Fix bayonets and clear the block.',
        locationName: 'Treasury Building',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      }
    ],
    sideQuests: [
      { id: 'v6_photog', title: 'Combat Photographer', availableAfterDay: 1, locationName: 'University', questId: 'combatPhotographer' }
    ]
  },
  {
    id: 7,
    name: 'MACV Compound',
    theme: 'Operation 7 — House-to-house, ammo carry, rooftop sniper',
    days: [
      {
        id: 'v7d1',
        title: 'House to House',
        briefing: 'Report to the MACV Compound. Movement in the rubble — spot NVA before they spot you. Do not shoot civilians.',
        locationName: 'MACV Compound',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'v7d2',
        title: 'Ammo Up the Stairs',
        briefing: 'Report to the University. Haul ammo crates up the stairwells under time pressure.',
        locationName: 'University',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 'v7d3',
        title: 'Rooftop Sniper',
        briefing: 'Report to the Treasury Building. NVA snipers on the rooftops. Steady your aim and clear the positions.',
        locationName: 'Treasury Building',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      }
    ]
  },
  {
    id: 8,
    name: 'Block by Block',
    theme: 'Operation 8 — Breach and clear, close quarters, covering fire',
    days: [
      {
        id: 'v8d1',
        title: 'Breach and Clear',
        briefing: 'Report to the University. Stack up, breach the wall, frag out, and clear the room.',
        locationName: 'University',
        activityId: 'wallBreach',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'v8d2',
        title: 'Close Quarters',
        briefing: 'Report to the MACV Compound. Room-to-room fighting. Read your opponent and counter before they close.',
        locationName: 'MACV Compound',
        activityId: 'pugilDuel',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'v8d3',
        title: 'Covering Fire',
        briefing: 'Report to the Treasury Building. Adjust for wind and engage from standing, kneeling, and prone.',
        locationName: 'Treasury Building',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'v8_lieutenant', title: 'The New Lieutenant', availableAfterDay: 1, locationName: 'Command Post', questId: 'newLieutenant' }
    ]
  },
  {
    id: 9,
    name: 'The Citadel Walls',
    theme: 'Operation 9 — Bracket wall guns, scale rubble, night assault',
    days: [
      {
        id: 'v9d1',
        title: 'Bracket the Wall Guns',
        briefing: 'Report to the Citadel Wall. NVA guns behind the ancient ramparts. Adjust fire and bracket the positions.',
        locationName: 'Citadel Wall',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      },
      {
        id: 'v9d2',
        title: 'Scale the Rubble',
        briefing: 'Report to the Citadel Gate. Climb the rubble under fire — missed grips cost you height.',
        locationName: 'Citadel Gate',
        activityId: 'highObstacle',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'v9d3',
        title: 'Night Assault',
        briefing: 'Report to the Citadel Wall. Assault the walls at night. Freeze when illumination pops.',
        locationName: 'Citadel Wall',
        activityId: 'nightMove',
        stats: ['dexterity']
      }
    ]
  },
  {
    id: 10,
    name: 'Casualties of Tet',
    theme: 'Operation 10 — Triage, medevac, letters home',
    days: [
      {
        id: 'v10d1',
        title: 'Triage the Aid Station',
        briefing: 'Report to the Aid Station. Casualties overflow the triage tents. Treat in the correct order.',
        locationName: 'Aid Station',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      },
      {
        id: 'v10d2',
        title: 'Medevac from the Courtyard',
        briefing: 'Report to the Courtyard LZ. Pop smoke, clear the LZ, and load casualties before the NVA adjust fire.',
        locationName: 'Courtyard LZ',
        activityId: 'medevacSmoke',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'v10d3',
        title: 'Letters Home',
        briefing: 'Report to the Command Post. Write letters that may be the last ones home. Choose your words carefully.',
        locationName: 'Command Post',
        activityId: 'writeLetter',
        stats: ['leadership', 'intelligence']
      }
    ]
  },
  {
    id: 11,
    name: 'The Citadel Falls',
    theme: 'Operation 11 — Final assault, after action, campaign honors',
    days: [
      {
        id: 'v11d1',
        title: 'Final Assault',
        briefing: 'Report to the Citadel Gate. Final push to clear the Citadel. Adjust for wind and engage from standing, kneeling, and prone.',
        locationName: 'Citadel Gate',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'v11d2',
        title: 'After Action',
        briefing: 'Report to the Command Post. Officers debrief the battle for Hue. Tell them what Tet cost.',
        locationName: 'Command Post',
        activityId: 'missionBriefing',
        stats: ['leadership']
      },
      {
        id: 'v11d3',
        title: 'Campaign Honors',
        briefing: 'Report to the Citadel Wall. Formation below the ramparts. Khe Sanh to Hue — earn your campaign honors.',
        locationName: 'Citadel Wall',
        activityId: 'campaignHonors',
        stats: ['leadership']
      }
    ]
  }
];
