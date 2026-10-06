import { BOOTCAMP_WEEKS } from './bootcamp/bootcampData.js';
import { WWII_OPERATIONS } from './wwii/wwiiData.js';
import { KOREA_OPERATIONS } from './korea/koreaData.js';
import { VIETNAM_OPERATIONS } from './vietnam/vietnamData.js';
import { IRAQ_OPERATIONS } from './iraq/iraqData.js';
import { TRIPOLI_OPERATIONS } from './tripoli/tripoliData.js';
import { BELLEAU_OPERATIONS } from './belleau/belleauData.js';
import { NICARAGUA_OPERATIONS } from './nicaragua/nicaraguaData.js';
import { SOMALIA_OPERATIONS } from './somalia/somaliaData.js';

/** @typedef {'available' | 'comingSoon'} CampaignStatus */

export const DEFAULT_CLIMATE = {
  resourceLabel: 'Water',
  pickupStyle: 'canteen',
  exhaustionTitle: 'Heat Exhaustion',
  exhaustionCopy: 'You collapsed from dehydration. Corpsman revived you — readiness -5, hydration refilled to 50%.',
  pickupHint: 'Find canteens on the map before your next patrol.',
  casualtyLabel: 'Heat Casualty'
};

export const MAP_BACKGROUNDS = {
  mcrdsd: 0x2e3b28,
  guadalcanal: 0x3a4a2e,
  iwojima: 0x2a2520,
  inchon: 0x3a4540,
  chosin: 0xc8d4e0,
  khesanh: 0x4a3a2e,
  hue: 0x3d4248,
  baghdad: 0x5a4c36,
  fallujah: 0x4a4238,
  desertmarch: 0x6b5a3a,
  derne: 0x5a4f3c,
  belleauwood: 0x3f4530,
  nicaragua: 0x2f4a2c,
  mogadishu: 0x5c4f38
};

/** @type {Record<string, object>} */
export const CAMPAIGNS = {
  bootcamp: {
    id: 'bootcamp',
    title: '8-BIT BOOTCAMP',
    subtitle: 'MCRD San Diego — Present Day',
    mapName: 'mcrdsd',
    weeks: BOOTCAMP_WEEKS,
    status: 'available',
    usesRecruiter: true,
    periodLabel: 'Week',
    unitLabel: 'Recruit',
    mapHint: 'Walk to the location on the MCRD map. A prompt will appear when you arrive.',
    completion: {
      title: 'Graduation',
      subtitle: 'MCRD San Diego',
      honors: [
        { min: 80, title: 'Honor Graduate' },
        { min: 50, title: 'Company Honors' },
        { min: 0, title: 'United States Marine' }
      ],
      footer: 'Semper Fidelis. Free roam the depot or start a new recruit.'
    }
  },
  wwii: {
    id: 'wwii',
    title: 'PACIFIC THEATER',
    subtitle: 'Guadalcanal & Iwo Jima',
    mapName: 'guadalcanal',
    weeks: WWII_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the island map. A prompt will appear when you arrive.',
    briefing: {
      officer: 'Capt. Halsey',
      lines: [
        'You are deploying with the 1st Marine Division. Guadalcanal is not training — it is combat.',
        'The Japanese hold the island. Your orders: land, secure Henderson Field, and hold until relieved.',
        'If you survive Guadalcanal, new orders will come. Iwo Jima waits — and a flag on Mt. Suribachi.',
        'Every operation on the schedule is a mission. Report to each location on the island map.'
      ]
    },
    theaters: [
      { mapName: 'guadalcanal', fromWeek: 1 },
      {
        mapName: 'iwojima',
        fromWeek: 7,
        transition: {
          title: 'New Orders',
          subtitle: 'February 1945 — Iwo Jima',
          paragraphs: [
            'Guadalcanal is behind you. Three years of war later, the Fleet turns toward a volcanic speck in the Pacific.',
            'Twenty-six thousand Marines will land on black sand. Mt. Suribachi dominates the island — take it, and the world will remember what happens on top.'
          ],
          hint: 'Your map has changed. Report to each mission location on Iwo Jima.',
          button: 'Ship Out'
        }
      }
    ],
    completion: {
      title: 'Campaign Victory',
      subtitle: 'Pacific Theater — Guadalcanal to Iwo Jima',
      honors: [
        { min: 80, title: 'Navy Cross' },
        { min: 50, title: 'Silver Star' },
        { min: 0, title: 'Combat Veteran' }
      ],
      footer: 'From Guadalcanal to Suribachi — the Corps held the line. Free roam or deploy again.'
    }
  },
  korea: {
    id: 'korea',
    title: 'FROZEN CHOSIN',
    subtitle: 'Inchon to Chosin, 1950',
    mapName: 'inchon',
    weeks: KOREA_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the map. A prompt will appear when you arrive.',
    climate: {
      resourceLabel: 'Warmth',
      pickupStyle: 'fire',
      exhaustionTitle: 'Frostbite',
      exhaustionCopy: 'You went down in the snow. Corpsman got you to a warming tent — readiness -5, warmth restored to 50%.',
      pickupHint: 'Find warming fires on the map before your next patrol.',
      casualtyLabel: 'Cold Casualty'
    },
    briefing: {
      officer: 'Col. Puller',
      lines: [
        'You are X Corps, 1st Marine Division. Inchon is not a rehearsal — it is an amphibious assault behind enemy lines.',
        'Land at Inchon, take Kimpo Airfield, cross the Han, and fight through Seoul.',
        'Then we go north. Orders say the war will be over by Christmas. The Chosin Reservoir says otherwise.',
        'Every operation on the schedule is a mission. Report to each location on the map.'
      ]
    },
    theaters: [
      { mapName: 'inchon', fromWeek: 1 },
      {
        mapName: 'chosin',
        fromWeek: 6,
        transition: {
          title: 'New Orders',
          subtitle: 'November 1950 — Chosin Reservoir',
          paragraphs: [
            'Seoul is behind you. The division pushed north into the mountains — and into winter.',
            'Chinese forces hit the reservoir in force. Temperatures plunge to thirty below. You will fight your way out — or die trying.'
          ],
          hint: 'Your map has changed. Find warming fires on the frozen ground. Report to each mission location.',
          button: 'March North'
        }
      }
    ],
    completion: {
      title: 'Campaign Victory',
      subtitle: 'Inchon to Hungnam, 1950',
      honors: [
        { min: 80, title: 'Navy Cross' },
        { min: 50, title: 'Silver Star' },
        { min: 0, title: 'The Chosin Few' }
      ],
      footer: 'Retreat hell — we are attacking in a different direction. Free roam or deploy again.'
    }
  },
  vietnam: {
    id: 'vietnam',
    title: 'HUE CITY',
    subtitle: 'Khe Sanh to Hue City, 1968',
    mapName: 'khesanh',
    weeks: VIETNAM_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the map. A prompt will appear when you arrive.',
    climate: {
      resourceLabel: 'Morale',
      pickupStyle: 'poncho',
      exhaustionTitle: 'Immersion Foot',
      exhaustionCopy: 'Weeks of monsoon rot took you down. Corpsman dried you out in the rear — readiness -5, morale restored to 50%.',
      pickupHint: 'Find dry ponchos on the map before your next patrol.',
      casualtyLabel: 'Monsoon Casualty'
    },
    briefing: {
      officer: 'Capt. Reyes',
      lines: [
        'You are 3rd Marine Division, deployed to the Khe Sanh plateau. This is not a training exercise — the NVA are digging in around the combat base.',
        'Hold the wire, patrol the hills, and keep the airstrip open. Every resupply run matters.',
        'When Tet breaks, everything changes. Hue City will need Marines in the streets and inside the Citadel.',
        'Every operation on the schedule is a mission. Report to each location on the map.'
      ]
    },
    theaters: [
      { mapName: 'khesanh', fromWeek: 1 },
      {
        mapName: 'hue',
        fromWeek: 6,
        transition: {
          title: 'Tet Offensive',
          subtitle: 'January 1968 — Hue City',
          paragraphs: [
            'The siege at Khe Sanh is behind you — orders pull the division south. While Marines held the wire, the NVA took Hue during the Tet ceasefire.',
            'Street fighting, house-to-house, and the ancient Citadel walls. The world is watching. Mount up.'
          ],
          hint: 'Your map has changed. Find dry ponchos in the monsoon. Report to each mission location in Hue.',
          button: 'Mount Up'
        }
      }
    ],
    completion: {
      title: 'Campaign Victory',
      subtitle: 'Khe Sanh to Hue, Tet 1968',
      honors: [
        { min: 80, title: 'Navy Cross' },
        { min: 50, title: 'Silver Star' },
        { min: 0, title: 'Tet Veteran' }
      ],
      footer: 'The Citadel colors flew again. Free roam or deploy again.'
    }
  },
  iraq: {
    id: 'iraq',
    title: 'FALLUJAH',
    subtitle: 'Baghdad to Fallujah, 2003–04',
    mapName: 'baghdad',
    weeks: IRAQ_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the map. A prompt will appear when you arrive.',
    climate: {
      resourceLabel: 'Water',
      pickupStyle: 'bottle',
      exhaustionTitle: 'Heat Casualty',
      exhaustionCopy: '120 degrees in full battle rattle. Corpsman got an IV in you in the shade of the ampitrac — readiness -5, water restored to 50%.',
      pickupHint: 'Find bottled water on the map before your next patrol.',
      casualtyLabel: 'Heat Casualty'
    },
    briefing: {
      officer: 'Maj. Torres',
      lines: [
        'You are 1st Marine Division, crossing the line of departure into Iraq. This is not a training exercise — Fedayeen and irregulars are waiting on Highway 1.',
        'Fight through Nasiriyah, push to Baghdad, and take Firdos Square. Every convoy and checkpoint matters.',
        'Baghdad will fall — but the war will not end. A year later they will call you back for Fallujah. House by house.',
        'Every operation on the schedule is a mission. Report to each location on the map.'
      ]
    },
    theaters: [
      { mapName: 'baghdad', fromWeek: 1 },
      {
        mapName: 'fallujah',
        fromWeek: 6,
        transition: {
          title: 'Operation Phantom Fury',
          subtitle: 'November 2004 — Fallujah',
          paragraphs: [
            'Baghdad fell but the war did not end. Insurgents hold Fallujah — the city that became a symbol of resistance.',
            'The division goes back to clear it block by block, house by house. Cross the berm and finish what started in the desert.'
          ],
          hint: 'Your map has changed. Find bottled water in the heat. Report to each mission location in Fallujah.',
          button: 'Cross the Berm'
        }
      }
    ],
    completion: {
      title: 'Campaign Victory',
      subtitle: 'Baghdad to Fallujah, 2003–04',
      honors: [
        { min: 80, title: 'Navy Cross' },
        { min: 50, title: 'Silver Star' },
        { min: 0, title: 'Phantom Fury Veteran' }
      ],
      footer: 'The city was cleared block by block. Free roam or deploy again.'
    }
  },
  tripoli: {
    id: 'tripoli',
    title: 'SHORES OF TRIPOLI',
    subtitle: 'Alexandria to Derne, 1805',
    mapName: 'desertmarch',
    weeks: TRIPOLI_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the map. A prompt will appear when you arrive.',
    climate: {
      resourceLabel: 'Water',
      pickupStyle: 'waterskin',
      exhaustionTitle: 'Desert Thirst',
      exhaustionCopy: 'Five hundred miles of Libyan desert took you down. The caravan shared its last skins — readiness -5, water restored to 50%.',
      pickupHint: 'Find water skins on the map before the column moves again.',
      casualtyLabel: 'Desert Casualty'
    },
    briefing: {
      officer: 'Lt. O\'Bannon',
      lines: [
        'You are eight Marines attached to William Eaton\'s expedition. Five hundred miles of Libyan desert stand between Alexandria and Derne.',
        'March with the caravan, hold the mercenaries together, and keep the water skins full.',
        'Derne awaits — the first time the flag will fly over a captured fortress of the Old World.',
        'Every operation on the schedule is a mission. Report to each location on the map.'
      ]
    },
    theaters: [
      { mapName: 'desertmarch', fromWeek: 1 },
      {
        mapName: 'derne',
        fromWeek: 6,
        transition: {
          title: 'The Shores of Tripoli',
          subtitle: 'April 1805 — Derne',
          paragraphs: [
            'The march is over. Five hundred miles behind you — the fortress and harbor batteries of Derne ahead.',
            'The Constitution is offshore. Fix bayonets and take the harbor battery. The flag has never flown over an Old World fortress — until today.'
          ],
          hint: 'Your map has changed. Find water skins in the heat. Report to each mission location at Derne.',
          button: 'Fix Bayonets'
        }
      }
    ],
    completion: {
      title: 'Campaign Victory',
      subtitle: 'Alexandria to Derne, 1805',
      honors: [
        { min: 80, title: 'Presidential Citation' },
        { min: 50, title: 'Brevet Officer' },
        { min: 0, title: 'Leatherneck' }
      ],
      footer: 'The first US flag over an Old World fortress. Free roam or deploy again.'
    }
  },
  belleau: {
    id: 'belleau',
    title: 'BELLEAU WOOD',
    subtitle: 'Devil Dogs, 1918',
    mapName: 'belleauwood',
    weeks: BELLEAU_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the map. A prompt will appear when you arrive.',
    briefing: {
      officer: 'Gunnery Sgt. Daly',
      lines: [
        'You are 4th Marine Brigade, deploying to the Marne front. The Germans are advancing through the wheat fields.',
        'Retreat? Hell — we\'re just attacking in a different direction. Take Belleau Wood and hold the line.',
        'The Boche will call you Teufel Hunden — Devil Dogs. Earn the name.',
        'Every operation on the schedule is a mission. Report to each location on the map.'
      ]
    },
    completion: {
      title: 'Expedition Victory',
      subtitle: 'Belleau Wood, 1918',
      honors: [
        { min: 80, title: 'Medal of Honor' },
        { min: 50, title: 'Croix de Guerre' },
        { min: 0, title: 'Devil Dog' }
      ],
      footer: 'Teufel Hunden. The wood is yours. Free roam or deploy again.'
    }
  },
  nicaragua: {
    id: 'nicaragua',
    title: 'BANANA WARS',
    subtitle: 'Nicaragua, 1927',
    mapName: 'nicaragua',
    weeks: NICARAGUA_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the map. A prompt will appear when you arrive.',
    briefing: {
      officer: 'Capt. Hatfield',
      lines: [
        'You are 5th Marine Regiment, deploying to Nicaragua. Sandinistas hold the jungle and the trails.',
        'Protect the elections, escort the mule trains, and hold Ocotal when they come.',
        'This is the Banana Wars — small wars, long watches, and mules that matter more than tanks.',
        'Every operation on the schedule is a mission. Report to each location on the map.'
      ]
    },
    completion: {
      title: 'Expedition Victory',
      subtitle: 'Nicaragua, 1927',
      honors: [
        { min: 80, title: 'Navy Cross' },
        { min: 50, title: 'Silver Star' },
        { min: 0, title: 'Old Breed' }
      ],
      footer: 'The long watch is over. Free roam or deploy again.'
    }
  },
  somalia: {
    id: 'somalia',
    title: 'RESTORE HOPE',
    subtitle: 'Somalia, 1993',
    mapName: 'mogadishu',
    weeks: SOMALIA_OPERATIONS,
    status: 'available',
    usesRecruiter: false,
    periodLabel: 'Operation',
    unitLabel: 'Marine',
    mapHint: 'Move to the marked location on the map. A prompt will appear when you arrive.',
    briefing: {
      officer: 'Col. Marsh',
      lines: [
        'You are 1st Marine Expeditionary Force, deploying to Mogadishu for Operation Restore Hope.',
        'Feed the hungry, secure the convoys, and hold the line when the crowds press the wire.',
        'This is peacekeeping — until it isn\'t. Every checkpoint and feeding station matters.',
        'Every operation on the schedule is a mission. Report to each location on the map.'
      ]
    },
    completion: {
      title: 'Expedition Victory',
      subtitle: 'Mogadishu, 1993',
      honors: [
        { min: 80, title: 'Navy Cross' },
        { min: 50, title: 'Bronze Star' },
        { min: 0, title: 'Peacekeeper' }
      ],
      footer: 'Restore Hope — handoff complete. Free roam or deploy again.'
    }
  }
};

export const CAMPAIGN_ORDER = ['bootcamp', 'tripoli', 'belleau', 'nicaragua', 'wwii', 'korea', 'vietnam', 'somalia', 'iraq'];

const DEFAULT_CAMPAIGN_ID = 'bootcamp';

/**
 * @param {string} [campaignId]
 */
export function getCampaignDef(campaignId = DEFAULT_CAMPAIGN_ID) {
  return CAMPAIGNS[campaignId] ?? CAMPAIGNS[DEFAULT_CAMPAIGN_ID];
}

/**
 * @param {object} [character]
 */
export function getCampaignForCharacter(character) {
  const id = character?.campaign?.campaignId ?? DEFAULT_CAMPAIGN_ID;
  return getCampaignDef(id);
}

/**
 * @param {object} [character]
 */
export function getCampaignWeeks(character) {
  return getCampaignForCharacter(character).weeks ?? [];
}

/**
 * @param {object} campaign
 * @param {number} week
 */
export function getTheaterForWeek(campaign, week) {
  const theaters = campaign.theaters;
  if (!theaters?.length) return null;
  let active = theaters[0];
  for (const theater of theaters) {
    if (week >= theater.fromWeek) active = theater;
  }
  return active;
}

/**
 * @param {object} [character]
 */
export function getCampaignClimate(character) {
  const campaign = getCampaignForCharacter(character);
  return { ...DEFAULT_CLIMATE, ...campaign.climate };
}

/**
 * @param {object} [character]
 */
export function getCampaignMapName(character) {
  const campaign = getCampaignForCharacter(character);
  const week = character?.campaign?.week ?? 1;
  return getCampaignMapNameForWeek(character, week);
}

/**
 * @param {object} [character]
 * @param {number} week
 */
export function getCampaignMapNameForWeek(character, week) {
  const campaign = getCampaignForCharacter(character);
  const theater = getTheaterForWeek(campaign, week);
  if (theater) return theater.mapName;
  return campaign.mapName ?? 'mcrdsd';
}

/**
 * Transition screen data when entering a new theater week.
 * @param {object} [character]
 * @param {number} week
 */
export function getTheaterTransitionForWeek(character, week) {
  const campaign = getCampaignForCharacter(character);
  const theater = getTheaterForWeek(campaign, week);
  if (!theater || theater.fromWeek !== week) return null;
  return theater.transition ?? null;
}

/**
 * @param {string} mapName
 */
export function getMapBackground(mapName) {
  return MAP_BACKGROUNDS[mapName] ?? 0x2e3b28;
}

/**
 * @param {string} campaignId
 */
export function isCampaignAvailable(campaignId) {
  return getCampaignDef(campaignId).status === 'available';
}
