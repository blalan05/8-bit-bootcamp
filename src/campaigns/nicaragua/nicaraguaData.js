/**
 * Banana Wars expedition — Nicaragua, 1927.
 * locationName must match src/maps/maps.json (nicaragua map).
 */

export const NICARAGUA_OPERATIONS = [
  {
    id: 1,
    name: 'Managua Detail',
    theme: 'Operation 1 — Ship out, supply run, checkpoint',
    days: [
      {
        id: 'n1d1',
        title: 'Managua Detail',
        briefing: 'Report to Managua Barracks. Marines deploy to Nicaragua. Man your stations.',
        locationName: 'Managua Barracks',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'n1d2',
        title: 'Supply Run',
        briefing: 'Report to The Airstrip. Haul supplies to the outpost under time pressure.',
        locationName: 'The Airstrip',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 'n1d3',
        title: 'Checkpoint Duty',
        briefing: 'Report to Managua Barracks. Vehicles approach the wire — wave through, search, or halt.',
        locationName: 'Managua Barracks',
        activityId: 'checkpointSearch',
        stats: ['intelligence', 'dexterity']
      }
    ],
    sideQuests: [
      { id: 'n1_mule', title: 'The Mule Skinner', availableAfterDay: 1, locationName: 'Mule Corral', questId: 'muleSkinner' }
    ]
  },
  {
    id: 2,
    name: 'Jungle Patrol',
    theme: 'Operation 2 — Land nav, ambush, field medic',
    days: [
      {
        id: 'n2d1',
        title: 'Jungle Patrol',
        briefing: 'Report to Jungle Trail. Follow the patrol map and mark every checkpoint.',
        locationName: 'Jungle Trail',
        activityId: 'landNav',
        stats: ['intelligence']
      },
      {
        id: 'n2d2',
        title: 'Jungle Ambush',
        briefing: 'Report to Jungle Trail. Sandinista ambush — return fire on muzzle flash, hold on villagers.',
        locationName: 'Jungle Trail',
        activityId: 'jungleAmbush',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'n2d3',
        title: 'Field Medic',
        briefing: 'Report to Aid Station. Treat casualties in the correct order.',
        locationName: 'Aid Station',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      }
    ]
  },
  {
    id: 3,
    name: 'Ocotal',
    theme: 'Operation 3 — Night watch, overwatch, bunker repair',
    days: [
      {
        id: 'n3d1',
        title: 'Night Watch',
        briefing: 'Report to Ocotal. Movement in the dark — spot probes before they reach the garrison.',
        locationName: 'Ocotal',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'n3d2',
        title: 'Overwatch',
        briefing: 'Report to The Ridge. Steady your aim and clear the approaches to Ocotal.',
        locationName: 'The Ridge',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'n3d3',
        title: 'Rebuild the Bunker',
        briefing: 'Report to Ocotal. Rebuild the garrison bunker before the next attack.',
        locationName: 'Ocotal',
        activityId: 'bunkerRepair',
        stats: ['strength', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'n3_coffee', title: 'Coffee With the Alcalde', availableAfterDay: 1, locationName: 'Coffee Plantation', questId: 'coffeeAlcalde' }
    ]
  },
  {
    id: 4,
    name: 'The Mule Train',
    theme: 'Operation 4 — Convoy escort, forced march, night move',
    days: [
      {
        id: 'n4d1',
        title: 'Convoy Escort',
        briefing: 'Report to Mule Corral. Escort the mule train — advance on W, freeze on flares.',
        locationName: 'Mule Corral',
        activityId: 'convoyEscort',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 'n4d2',
        title: 'Forced March',
        briefing: 'Report to River Crossing. Full gear march through the jungle. Manage pace and help Marines falling out.',
        locationName: 'River Crossing',
        activityId: 'humpPrep',
        stats: ['endurance', 'leadership']
      },
      {
        id: 'n4d3',
        title: 'Night Movement',
        briefing: 'Report to Jungle Trail. Patrol at night. Freeze when illumination pops.',
        locationName: 'Jungle Trail',
        activityId: 'nightMove',
        stats: ['dexterity']
      }
    ]
  },
  {
    id: 5,
    name: 'The Long Watch',
    theme: 'Operation 5 — Final defense, after action, honors',
    days: [
      {
        id: 'n5d1',
        title: 'Final Defense',
        briefing: 'Report to The Ridge. Hold the ridge against the final Sandinista push.',
        locationName: 'The Ridge',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'n5d2',
        title: 'After Action',
        briefing: 'Report to Command Post. Officers debrief the Nicaragua deployment.',
        locationName: 'Command Post',
        activityId: 'familyDay',
        stats: ['leadership']
      },
      {
        id: 'n5d3',
        title: 'Expedition Honors',
        briefing: 'Report to Managua Barracks. Formation at the barracks. Earn your expedition honors.',
        locationName: 'Managua Barracks',
        activityId: 'graduationParade',
        stats: ['leadership']
      }
    ]
  }
];
