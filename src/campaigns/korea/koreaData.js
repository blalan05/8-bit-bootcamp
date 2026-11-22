/**
 * Korea campaign — Inchon to Chosin Reservoir, 1950.
 * locationName must match src/maps/maps.json (inchon / chosin maps).
 */

export const KOREA_OPERATIONS = [
  {
    id: 1,
    name: 'The Landing at Inchon',
    theme: 'Operation 1 — Amphibious assault, sea wall, secure the harbor',
    days: [
      {
        id: 'k1d1',
        title: 'Ship Out',
        briefing: 'Report to the Landing Craft. X Corps is hitting Inchon behind enemy lines. Stand by for final orders before the ramps drop.',
        locationName: 'Landing Craft',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'k1d2',
        title: 'Scale the Sea Wall',
        briefing: 'Report to the Sea Wall. Thirty-foot tidal seawall — climb it under fire before the tide turns and traps the boats.',
        locationName: 'Sea Wall',
        activityId: 'highObstacle',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'k1d3',
        title: 'Secure the Harbor',
        briefing: 'Report to Inchon Harbor. Dig in and establish a beachhead before the North Koreans counterattack from the high ground.',
        locationName: 'Inchon Harbor',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      }
    ],
    sideQuests: [
      { id: 'k1_tootsie', title: 'Tootsie Rolls', availableAfterDay: 1, locationName: 'Supply Dock', questId: 'tootsieRolls' }
    ]
  },
  {
    id: 2,
    name: 'Kimpo Airfield',
    theme: 'Operation 2 — Clear approaches, take the field, hold the line',
    days: [
      {
        id: 'k2d1',
        title: 'Clear Approaches',
        briefing: 'Report to Kimpo Airfield. North Korean snipers hold the treeline. Steady your aim and clear the approaches.',
        locationName: 'Kimpo Airfield',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'k2d2',
        title: 'Take the Field',
        briefing: 'Report to Kimpo Airfield. Assault the runways under fire. Vault, crawl, and climb — do not break formation.',
        locationName: 'Kimpo Airfield',
        activityId: 'obstacleRun',
        stats: ['dexterity', 'strength']
      },
      {
        id: 'k2d3',
        title: 'Hold the Line',
        briefing: 'Report to Barricade Row. Counterattack incoming. Fix bayonets and hold the perimeter.',
        locationName: 'Barricade Row',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      }
    ]
  },
  {
    id: 3,
    name: 'Han River Crossing',
    theme: 'Operation 3 — River assault, recon routes, mortar support',
    days: [
      {
        id: 'k3d1',
        title: 'Cross Under Fire',
        briefing: 'Report to the Han River. The regiment crosses under fire. Vault, crawl, and climb — keep moving.',
        locationName: 'Han River',
        activityId: 'obstacleRun',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 'k3d2',
        title: 'Recon Routes',
        briefing: 'Report to Seoul Streets. Follow the patrol map and mark every checkpoint before the column moves through.',
        locationName: 'Seoul Streets',
        activityId: 'landNav',
        stats: ['intelligence']
      },
      {
        id: 'k3d3',
        title: 'Mortars on the Far Bank',
        briefing: 'Report to Barricade Row. Call for mortar fire on the far bank. Bracket the targets before the infantry moves up.',
        locationName: 'Barricade Row',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      }
    ]
  },
  {
    id: 4,
    name: 'Seoul Street Fighting',
    theme: 'Operation 4 — House-to-house, barricades, rooftop marksman',
    days: [
      {
        id: 'k4d1',
        title: 'House to House',
        briefing: 'Report to Seoul Streets. Movement in the alleys — spot hostiles before they spot you. Do not shoot civilians.',
        locationName: 'Seoul Streets',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'k4d2',
        title: 'Barricade Assault',
        briefing: 'Report to Barricade Row. Clear barricades and haul supplies forward under time pressure.',
        locationName: 'Barricade Row',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 'k4d3',
        title: 'Rooftop Marksman',
        briefing: 'Report to Seoul Streets. North Korean snipers on the rooftops. Adjust for wind and engage from standing, kneeling, and prone.',
        locationName: 'Seoul Streets',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'k4_chosin_few', title: 'The Chosin Few', availableAfterDay: 1, locationName: 'Aid Station', questId: 'chosinFew' }
    ]
  },
  {
    id: 5,
    name: 'North to the Reservoir',
    theme: 'Operation 5 — Mail from home, forced march north, first snow',
    days: [
      {
        id: 'k5d1',
        title: 'Mail from Home',
        briefing: 'Report to the Command Post. Letters from home before the march north. Choose how you handle what arrives.',
        locationName: 'Command Post',
        activityId: 'mailCall',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'k5d2',
        title: 'Forced March North',
        briefing: 'Report to Seoul Streets. Full gear march toward the reservoir. Manage pace and help Marines who are falling out.',
        locationName: 'Seoul Streets',
        activityId: 'humpPrep',
        stats: ['endurance', 'leadership']
      },
      {
        id: 'k5d3',
        title: 'First Snow',
        briefing: 'Report to the Command Post. Officers brief the division on what waits at the Chosin Reservoir. Winter is coming.',
        locationName: 'Command Post',
        activityId: 'missionBriefing',
        stats: ['leadership']
      }
    ]
  },
  {
    id: 6,
    name: 'Yudam-ni',
    theme: 'Operation 6 — Dig in frozen ground, night watch at -30, hold the perimeter',
    days: [
      {
        id: 'k6d1',
        title: 'Frozen Foxholes',
        briefing: 'Report to Yudam-ni Perimeter. Dig fighting positions in frozen ground. Every stroke of the entrenching tool costs warmth.',
        locationName: 'Yudam-ni Perimeter',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 'k6d2',
        title: 'Night Watch',
        briefing: 'Report to Yudam-ni Perimeter. Stand watch at thirty below. Freeze when illumination pops — movement draws Chinese fire.',
        locationName: 'Yudam-ni Perimeter',
        activityId: 'nightMove',
        stats: ['dexterity']
      },
      {
        id: 'k6d3',
        title: 'Hold the Perimeter',
        briefing: 'Report to Yudam-ni Perimeter. Close combat on the frozen line. Read your opponent and counter before they close.',
        locationName: 'Yudam-ni Perimeter',
        activityId: 'pugilDuel',
        stats: ['strength', 'dexterity']
      }
    ],
    sideQuests: [
      { id: 'k6_fox_runner', title: 'Fox Company Runner', availableAfterDay: 1, locationName: 'Toktong Pass', questId: 'foxCompanyRunner' }
    ]
  },
  {
    id: 7,
    name: 'Toktong Pass',
    theme: 'Operation 7 — Relief march, night watch, mortar support for Fox Company',
    days: [
      {
        id: 'k7d1',
        title: 'Relief March',
        briefing: 'Report to Toktong Pass. Force march through the snow to relieve Fox Company. Keep your stride in the green band.',
        locationName: 'Toktong Pass',
        activityId: 'paceRunner',
        stats: ['endurance']
      },
      {
        id: 'k7d2',
        title: 'Pass at Night',
        briefing: 'Report to Fox Hill. Chinese probes in the dark — spot movement before they overrun the pass.',
        locationName: 'Fox Hill',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'k7d3',
        title: 'Mortars for Fox',
        briefing: 'Report to Toktong Pass. Fox Company is surrounded. Adjust fire and bracket the Chinese positions on the ridgeline.',
        locationName: 'Toktong Pass',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      }
    ]
  },
  {
    id: 8,
    name: 'Frozen Wounded',
    theme: 'Operation 8 — Frostbite triage, supply drop, frozen weapons',
    days: [
      {
        id: 'k8d1',
        title: 'Frostbite Triage',
        briefing: 'Report to the Aid Station. Casualties with frozen feet and hands. Triage frostbite in the correct order.',
        locationName: 'Aid Station',
        activityId: 'frostbiteCheck',
        stats: ['intelligence']
      },
      {
        id: 'k8d2',
        title: 'Supply Drop',
        briefing: 'Report to Hagaru-ri. Recover ammo and rations from the airdrop before the column moves out.',
        locationName: 'Hagaru-ri',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 'k8d3',
        title: 'Frozen Weapons',
        briefing: 'Report to Warming Tents. M1 bolts are freezing shut. Work the actions and keep the rifles firing.',
        locationName: 'Warming Tents',
        activityId: 'weaponsCold',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'k8_chesty', title: "Chesty's Words", availableAfterDay: 1, locationName: 'Koto-ri', questId: 'chestysWords' }
    ]
  },
  {
    id: 9,
    name: 'Attack in a Different Direction',
    theme: 'Operation 9 — Fighting withdrawal, roadblocks, rear guard',
    days: [
      {
        id: 'k9d1',
        title: 'Fighting Withdrawal',
        briefing: 'Report to Frozen Reservoir. Attack in a different direction — escort the column south under fire.',
        locationName: 'Frozen Reservoir',
        activityId: 'convoyEscort',
        stats: ['endurance', 'leadership']
      },
      {
        id: 'k9d2',
        title: 'Clear Roadblocks',
        briefing: 'Report to Koto-ri. Chinese roadblocks on the MSR. Steady your aim and clear the positions.',
        locationName: 'Koto-ri',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'k9d3',
        title: 'Rear Guard',
        briefing: 'Report to Toktong Pass. Hold the rear while the column withdraws. Bayonet work at close range.',
        locationName: 'Toktong Pass',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      }
    ]
  },
  {
    id: 10,
    name: 'Funchilin Pass',
    theme: 'Operation 10 — Bridge repair, cross under guard, final ridge fight',
    days: [
      {
        id: 'k10d1',
        title: 'Bridge Out',
        briefing: 'Report to Funchilin Bridge. The bridge is destroyed. Assemble treadway sections before the column is cut off.',
        locationName: 'Funchilin Bridge',
        activityId: 'bridgeRepair',
        stats: ['intelligence', 'strength']
      },
      {
        id: 'k10d2',
        title: 'Cross Under Guard',
        briefing: 'Report to Funchilin Bridge. Move the column across under fire. Freeze when illumination pops.',
        locationName: 'Funchilin Bridge',
        activityId: 'nightMove',
        stats: ['dexterity']
      },
      {
        id: 'k10d3',
        title: 'Final Ridge Fight',
        briefing: 'Report to Fox Hill. Last ridge before Hungnam. Adjust for wind and engage from standing, kneeling, and prone.',
        locationName: 'Fox Hill',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      }
    ]
  },
  {
    id: 11,
    name: 'Hungnam Evacuation',
    theme: 'Operation 11 — Embark the division, after action, campaign honors',
    days: [
      {
        id: 'k11d1',
        title: 'Embark the Division',
        briefing: 'Report to Hungnam Docks. One hundred thousand troops and refugees evacuate by sea. Execute every command on the loading ramp.',
        locationName: 'Hungnam Docks',
        activityId: 'shipOut',
        stats: ['leadership', 'endurance']
      },
      {
        id: 'k11d2',
        title: 'After Action',
        briefing: 'Report to the Command Post. Officers debrief the breakout. Tell them what the Chosin cost.',
        locationName: 'Command Post',
        activityId: 'missionBriefing',
        stats: ['leadership']
      },
      {
        id: 'k11d3',
        title: 'Campaign Honors',
        briefing: 'Report to Hungnam Docks. Formation on the pier. Inchon to Chosin — earn your campaign honors.',
        locationName: 'Hungnam Docks',
        activityId: 'campaignHonors',
        stats: ['leadership']
      }
    ]
  }
];
