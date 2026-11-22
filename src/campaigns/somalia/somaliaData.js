/**
 * Somalia expedition — Restore Hope, 1993.
 * locationName must match src/maps/maps.json (mogadishu map).
 */

export const SOMALIA_OPERATIONS = [
  {
    id: 1,
    name: 'Green Ramp',
    theme: 'Operation 1 — Ship out, supply run, checkpoint',
    days: [
      {
        id: 's1d1',
        title: 'Green Ramp',
        briefing: 'Report to Green Ramp. Marines deploy to Mogadishu for Operation Restore Hope. Man your stations.',
        locationName: 'Green Ramp',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 's1d2',
        title: 'Supply Run',
        briefing: 'Report to The Port. Haul relief supplies to the feeding stations under time pressure.',
        locationName: 'The Port',
        activityId: 'supplyRun',
        stats: ['endurance', 'strength']
      },
      {
        id: 's1d3',
        title: 'Checkpoint Duty',
        briefing: 'Report to Checkpoint Condor. Vehicles approach the wire — wave through, search, or halt.',
        locationName: 'Checkpoint Condor',
        activityId: 'checkpointSearch',
        stats: ['intelligence', 'dexterity']
      }
    ],
    sideQuests: [
      { id: 's1_well', title: 'The Water Well', availableAfterDay: 1, locationName: 'Feeding Station', questId: 'waterWell' }
    ]
  },
  {
    id: 2,
    name: 'Food Convoy',
    theme: 'Operation 2 — Convoy escort, IED sweep, crowd control',
    days: [
      {
        id: 's2d1',
        title: 'Convoy Escort',
        briefing: 'Report to The K-4 Circle. Escort the food convoy — advance on W, freeze on flares.',
        locationName: 'The K-4 Circle',
        activityId: 'convoyEscort',
        stats: ['dexterity', 'endurance']
      },
      {
        id: 's2d2',
        title: 'IED Sweep',
        briefing: 'Report to The Market. Sweep the route — mark suspicious objects, ignore clutter.',
        locationName: 'The Market',
        activityId: 'iedSweep',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 's2d3',
        title: 'Crowd Control',
        briefing: 'Report to Feeding Station. Hungry crowds at the wire — hold the line, open the gate, or call the terp.',
        locationName: 'Feeding Station',
        activityId: 'crowdControl',
        stats: ['leadership', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 's2_kid', title: 'The Kid at the Wire', availableAfterDay: 1, locationName: 'Checkpoint Condor', questId: 'kidAtWire' }
    ]
  },
  {
    id: 3,
    name: 'The Market',
    theme: 'Operation 3 — Night watch, medevac, triage',
    days: [
      {
        id: 's3d1',
        title: 'Night Watch',
        briefing: 'Report to The Market. Movement in the dark — spot probes before they reach the perimeter.',
        locationName: 'The Market',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 's3d2',
        title: 'Medevac',
        briefing: 'Report to Aid Station. Pop smoke, clear the LZ, and load casualties.',
        locationName: 'Aid Station',
        activityId: 'medevacSmoke',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 's3d3',
        title: 'Triage',
        briefing: 'Report to Aid Station. Treat casualties in the correct order.',
        locationName: 'Aid Station',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      }
    ]
  },
  {
    id: 4,
    name: 'The Airfield',
    theme: 'Operation 4 — Turret gunner, dig in, night push',
    days: [
      {
        id: 's4d1',
        title: 'Turret Gunner',
        briefing: 'Report to Airfield Perimeter. Ride the turret — traverse on contact, hold on civilian vehicles.',
        locationName: 'Airfield Perimeter',
        activityId: 'turretGunner',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 's4d2',
        title: 'Dig In',
        briefing: 'Report to Airfield Perimeter. Establish fighting positions around the airfield.',
        locationName: 'Airfield Perimeter',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 's4d3',
        title: 'Night Push',
        briefing: 'Report to Embassy Compound. Patrol at night. Freeze when illumination pops.',
        locationName: 'Embassy Compound',
        activityId: 'nightMove',
        stats: ['dexterity']
      }
    ]
  },
  {
    id: 5,
    name: 'Handoff',
    theme: 'Operation 5 — Final clearance, letters home, honors',
    days: [
      {
        id: 's5d1',
        title: 'Final Clearance',
        briefing: 'Report to Embassy Compound. Final security sweep before UN handoff.',
        locationName: 'Embassy Compound',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 's5d2',
        title: 'Letters Home',
        briefing: 'Report to Command Post. Write letters home from Mogadishu. Choose your words carefully.',
        locationName: 'Command Post',
        activityId: 'writeLetter',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 's5d3',
        title: 'Expedition Honors',
        briefing: 'Report to Green Ramp. Formation on the ramp. Restore Hope — earn your expedition honors.',
        locationName: 'Green Ramp',
        activityId: 'campaignHonors',
        stats: ['leadership']
      }
    ]
  }
];
