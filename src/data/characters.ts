import { CharacterBuild } from '@/types/genshin';

export const CHARACTERS_DATA: CharacterBuild[] = [
  {
    "id": "aino",
    "name": "Aino",
    "title": "Nod-Krai 4★ HYDRO Sub DPS",
    "rarity": 4,
    "element": "hydro",
    "weapon": "claymore",
    "region": "Nod-Krai",
    "role": "Sub DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/aino/icon.png",
    "cardUrl": "/assets/characters/aino/card.png",
    "splashUrl": "/assets/characters/aino/splash.png",
    "description": "Aino is a 4-star HYDRO claymore wielder hailing from Nod-Krai. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe / Heart of Depth",
        "count": 4,
        "description": "BiS: Massive skill or normal attack hydro damage amplification.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Aino Core Synergy",
        "members": [
          "Aino",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "albedo",
    "name": "Albedo",
    "title": "Mondstadt 5★ GEO Sub DPS",
    "rarity": 5,
    "element": "geo",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Sub DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/albedo/icon.png",
    "cardUrl": "/assets/characters/albedo/card.png",
    "splashUrl": "/assets/characters/albedo/splash.png",
    "description": "Albedo is a 5-star GEO sword wielder hailing from Mondstadt. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Husk of Opulent Dreams",
        "count": 4,
        "description": "BiS: Stacks DEF% and Geo DMG Bonus.",
        "iconUrl": "/assets/artifacts/husk-of-opulent-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Albedo Core Synergy",
        "members": [
          "Albedo",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "alhaitham",
    "name": "Alhaitham",
    "title": "Admonishing Instruction & Scribe of the Akademiya",
    "rarity": 5,
    "element": "dendro",
    "weapon": "sword",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/alhaitham/icon.png",
    "cardUrl": "/assets/characters/alhaitham/card.png",
    "splashUrl": "/assets/characters/alhaitham/splash.png",
    "description": "Premier Dendro Spread and Hyperbloom on-field carry who generates Chisel-Light Mirrors to unleash high-frequency Dendro rain attacks.",
    "signatureWeapon": "Light of Foliar Incision",
    "bestWeapons": [
      {
        "name": "Light of Foliar Incision",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and converts EM into bonus Normal Attack & Skill DMG.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Iron Sting / Toukabou Shigure",
        "rarity": 4,
        "description": "Best F2P craftable: Provides valuable EM and unconditional DMG bonus.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Harbinger of Dawn",
        "rarity": 3,
        "description": "Top F2P 3-star: Massive Crit Rate & Crit DMG when kept above 90% HP with a shielder.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gilded Dreams",
        "count": 4,
        "description": "BiS: Grants up to +230 Elemental Mastery and bonus ATK.",
        "iconUrl": "/assets/artifacts/gilded-dreams.png"
      },
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "Alternative if no teammate is holding Deepwood: -30% Dendro RES shred.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "Elemental Mastery (300-400)",
        "Energy Recharge (130%)"
      ],
      "benchmarkEr": "125% - 135%",
      "benchmarkCrCd": "70% / 150%+"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Normal Attack (NA)",
      "Elemental Burst (Q)"
    ],
    "recommendedTeams": [
      {
        "name": "Alhaitham Quickbloom (Top Meta)",
        "members": [
          "Alhaitham",
          "Nahida",
          "Yelan",
          "Kuki Shinobu"
        ],
        "notes": "Combines Aggravate/Spread crits with Kuki full-EM Hyperblooms for the highest floor DPS in the game."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Pseudo-Stamens (Setekh Wenut)",
      "localSpecialty": "Sand Grease Pupa (Sumeru)",
      "mobDrop": "Faded Red Satin (Eremites)",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Ingenuity (Tue/Fri/Sun)",
      "weeklyBossDrop": "Mirror of Mushin (Scaramouche)"
    },
    "proTips": [
      "Master the 3-Mirror rotation: Start with Burst (Q) at 0 mirrors, wait 2s to gain 3 mirrors, attack for 4s, use Skill (E) to refresh 3 mirrors, attack for 4s, then Charged Attack to refresh again for 12s total 3-mirror uptime!"
    ]
  },
  {
    "id": "aloy",
    "name": "Aloy",
    "title": "Mondstadt 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "bow",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/aloy/icon.png",
    "cardUrl": "/assets/characters/aloy/card.png",
    "splashUrl": "/assets/characters/aloy/splash.png",
    "description": "Aloy is a 5-star CRYO bow wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Aloy Core Synergy",
        "members": [
          "Aloy",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "alyosha",
    "name": "Alyosha",
    "title": "Snezhnaya 4★ ELECTRO Main DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "polearm",
    "region": "Snezhnaya",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/alyosha/icon.png",
    "cardUrl": "/assets/characters/alyosha/card.png",
    "splashUrl": "/assets/characters/alyosha/splash.png",
    "description": "Alyosha is a 4-star ELECTRO polearm wielder hailing from Snezhnaya. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Alyosha Core Synergy",
        "members": [
          "Alyosha",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Snezhnaya World Boss Drop",
      "localSpecialty": "Snezhnaya Regional Specialty",
      "mobDrop": "Snezhnaya Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Snezhnaya Talent Teachings / Guides",
      "weeklyBossDrop": "Snezhnaya Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "amber",
    "name": "Amber",
    "title": "Mondstadt 4★ PYRO Main DPS",
    "rarity": 4,
    "element": "pyro",
    "weapon": "bow",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/amber/icon.png",
    "cardUrl": "/assets/characters/amber/card.png",
    "splashUrl": "/assets/characters/amber/splash.png",
    "description": "Amber is a 4-star PYRO bow wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Amber Core Synergy",
        "members": [
          "Amber",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "arataki-itto",
    "name": "Arataki Itto",
    "title": "Inazuma 5★ GEO Main DPS",
    "rarity": 5,
    "element": "geo",
    "weapon": "claymore",
    "region": "Inazuma",
    "role": "Main DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/arataki-itto/icon.png",
    "cardUrl": "/assets/characters/arataki-itto/card.png",
    "splashUrl": "/assets/characters/arataki-itto/splash.png",
    "description": "Arataki Itto is a 5-star GEO claymore wielder hailing from Inazuma. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Husk of Opulent Dreams",
        "count": 4,
        "description": "BiS: Stacks DEF% and Geo DMG Bonus.",
        "iconUrl": "/assets/artifacts/husk-of-opulent-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Arataki Itto Core Synergy",
        "members": [
          "Arataki Itto",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "arlecchino",
    "name": "Arlecchino",
    "title": "The Knave / Father",
    "rarity": 5,
    "element": "pyro",
    "weapon": "polearm",
    "region": "Snezhnaya",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/arlecchino/icon.png",
    "cardUrl": "/assets/characters/arlecchino/card.png",
    "splashUrl": "/assets/characters/arlecchino/splash.png",
    "description": "Fourth of the Fatui Harbingers. Converts the Bond of Life mechanic into blazing Pyro-infused Normal Attacks that shred enemies.",
    "signatureWeapon": "Crimson Moon’s Semblance",
    "bestWeapons": [
      {
        "name": "Crimson Moon’s Semblance",
        "rarity": 5,
        "description": "BiS: Grants scythe visual, heavy Crit Rate, and +36% DMG via Bond of Life.",
        "iconUrl": "/assets/weapons/crimson-moons-semblance.png"
      },
      {
        "name": "White Tassel",
        "rarity": 3,
        "description": "Top F2P sleeper: +48% Normal Attack DMG at R5 with Crit Rate substat!",
        "isF2P": true,
        "iconUrl": "/assets/weapons/white-tassel.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Harmonic Whimsy",
        "count": 4,
        "description": "BiS: Grants up to +54% unconditional DMG increase as Bond of Life increases/decreases.",
        "iconUrl": "/assets/artifacts/fragment-of-harmonic-whimsy.png"
      },
      {
        "name": "Gladiator’s Finale",
        "count": 4,
        "description": "Exceptional accessible alternative: +35% Normal Attack DMG and +18% ATK.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Elemental Mastery (in Vape teams)",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "ER (~115-120%)"
      ],
      "benchmarkEr": "115% - 120%",
      "benchmarkCrCd": "75% / 170%+"
    },
    "talentPriority": [
      "Normal Attack (NA)",
      "Elemental Skill (E)",
      "Elemental Burst (Q)"
    ],
    "recommendedTeams": [
      {
        "name": "Arlecchino Vaporize",
        "members": [
          "Arlecchino",
          "Yelan",
          "Bennett",
          "Kazuha"
        ],
        "notes": "Classic hypercarry vape. Yelan ramps damage, Kazuha shreds Pyro, Bennett caps ATK."
      },
      {
        "name": "Overload Father",
        "members": [
          "Arlecchino",
          "Chevreuse",
          "Fischl",
          "Beidou"
        ],
        "notes": "Chevreuse gives 40% Pyro & Electro shred and 40% ATK buff without needing Anemo or Bennett circle."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fragment of a Golden Melody (Legatus Golem)",
      "localSpecialty": "Rainbow Rose (Fontaine)",
      "mobDrop": "Fatui Insignia (Recruit / Sergeant / Officer)",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Order (Wed/Sat/Sun)",
      "weeklyBossDrop": "Fading Candle (The Knave / Arlecchino Weekly Boss)"
    },
    "proTips": [
      "Arlecchino CANNOT receive external healing while in combat due to her passive! Only her own Elemental Burst heals her.",
      "Use Skill (E), wait 5 seconds for Blood-Debt Due to mature, then Charged Attack to absorb maximum Bond of Life.",
      "White Tassel R5 from Liyue chests beats most 4-star polearms on her."
    ]
  },
  {
    "id": "baizhu",
    "name": "Baizhu",
    "title": "Liyue 5★ DENDRO Healer",
    "rarity": 5,
    "element": "dendro",
    "weapon": "catalyst",
    "region": "Liyue",
    "role": "Healer",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/baizhu/icon.png",
    "cardUrl": "/assets/characters/baizhu/card.png",
    "splashUrl": "/assets/characters/baizhu/splash.png",
    "description": "Baizhu is a 5-star DENDRO catalyst wielder hailing from Liyue. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Baizhu Core Synergy",
        "members": [
          "Baizhu",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "barbara",
    "name": "Barbara",
    "title": "Mondstadt 4★ HYDRO Healer",
    "rarity": 4,
    "element": "hydro",
    "weapon": "catalyst",
    "region": "Mondstadt",
    "role": "Healer",
    "icon": "💧",
    "avatarUrl": "/assets/characters/barbara/icon.png",
    "cardUrl": "/assets/characters/barbara/card.png",
    "splashUrl": "/assets/characters/barbara/splash.png",
    "description": "Barbara is a 4-star HYDRO catalyst wielder hailing from Mondstadt. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Barbara Core Synergy",
        "members": [
          "Barbara",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "beidou",
    "name": "Beidou",
    "title": "Liyue 4★ ELECTRO Sub DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "claymore",
    "region": "Liyue",
    "role": "Sub DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/beidou/icon.png",
    "cardUrl": "/assets/characters/beidou/card.png",
    "splashUrl": "/assets/characters/beidou/splash.png",
    "description": "Beidou is a 4-star ELECTRO claymore wielder hailing from Liyue. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Beidou Core Synergy",
        "members": [
          "Beidou",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "bennett",
    "name": "Bennett",
    "title": "Trial by Fire",
    "rarity": 4,
    "element": "pyro",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Buffer",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/bennett/icon.png",
    "cardUrl": "/assets/characters/bennett/card.png",
    "splashUrl": "/assets/characters/bennett/splash.png",
    "description": "The premier 6-star honorary support. Fantastic Voyage provides unmatched flat ATK buffs and rapid tick healing.",
    "signatureWeapon": "Aquila Favonia",
    "bestWeapons": [
      {
        "name": "Sapwood Blade",
        "rarity": 4,
        "description": "Best craftable F2P: High base ATK (565), ER% substat, and Leaf of Consciousness buff.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sapwood-blade.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Solves all team Energy problems with ease.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "Absolute non-negotiable BiS: +20% team ATK for 12 seconds after Burst cast.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% (or HP% if ER > 220%)",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (200-230%+)",
        "HP%",
        "HP Flat",
        "Crit Rate (if Favonius)"
      ],
      "benchmarkEr": "210% - 240%",
      "benchmarkCrCd": "Prioritize reaching 220%+ ER and 30k+ HP"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "National Core",
        "members": [
          "Bennett",
          "Xiangling",
          "Xingqiu",
          "Raiden"
        ],
        "notes": "Xiangling snapshots Bennett’s massive ATK buff for the entire 14-second duration of Pyronado."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Everflame Seed (Pyro Regisvine)",
      "localSpecialty": "Windwheel Aster (Mondstadt)",
      "mobDrop": "Treasure Hoarder Insignias",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Resistance (Tue/Fri/Sun)",
      "weeklyBossDrop": "Dvalin’s Plume (Stormterror)"
    },
    "proTips": [
      "Bennett’s ATK buff scales ONLY from his Character Base ATK + Weapon Base ATK. Artifact ATK% does NOT increase the buff!",
      "His Burst heals up to 70% of character max HP at blistering tick speeds.",
      "His C6 converts melee normal attacks to Pyro; while great for Xiangling/Arlecchino, it overrides Physical/Chongyun/Ayaka infusions."
    ]
  },
  {
    "id": "candace",
    "name": "Candace",
    "title": "Sumeru 4★ HYDRO Main DPS",
    "rarity": 4,
    "element": "hydro",
    "weapon": "polearm",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/candace/icon.png",
    "cardUrl": "/assets/characters/candace/card.png",
    "splashUrl": "/assets/characters/candace/splash.png",
    "description": "Candace is a 4-star HYDRO polearm wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe / Heart of Depth",
        "count": 4,
        "description": "BiS: Massive skill or normal attack hydro damage amplification.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Candace Core Synergy",
        "members": [
          "Candace",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "charlotte",
    "name": "Charlotte",
    "title": "Fontaine 4★ CRYO Healer",
    "rarity": 4,
    "element": "cryo",
    "weapon": "catalyst",
    "region": "Fontaine",
    "role": "Healer",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/charlotte/icon.png",
    "cardUrl": "/assets/characters/charlotte/card.png",
    "splashUrl": "/assets/characters/charlotte/splash.png",
    "description": "Charlotte is a 4-star CRYO catalyst wielder hailing from Fontaine. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Charlotte Core Synergy",
        "members": [
          "Charlotte",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "chasca",
    "name": "Chasca",
    "title": "Natlan 5★ ANEMO Main DPS",
    "rarity": 5,
    "element": "anemo",
    "weapon": "bow",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/chasca/icon.png",
    "cardUrl": "/assets/characters/chasca/card.png",
    "splashUrl": "/assets/characters/chasca/splash.png",
    "description": "Chasca is a 5-star ANEMO bow wielder hailing from Natlan. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Chasca Core Synergy",
        "members": [
          "Chasca",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Natlan World Boss Drop",
      "localSpecialty": "Natlan Regional Specialty",
      "mobDrop": "Natlan Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Natlan Talent Teachings / Guides",
      "weeklyBossDrop": "Natlan Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "chevreuse",
    "name": "Chevreuse",
    "title": "Fontaine 4★ PYRO Buffer",
    "rarity": 4,
    "element": "pyro",
    "weapon": "polearm",
    "region": "Fontaine",
    "role": "Buffer",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/chevreuse/icon.png",
    "cardUrl": "/assets/characters/chevreuse/card.png",
    "splashUrl": "/assets/characters/chevreuse/splash.png",
    "description": "Chevreuse is a 4-star PYRO polearm wielder hailing from Fontaine. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Chevreuse Core Synergy",
        "members": [
          "Chevreuse",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "chiori",
    "name": "Chiori",
    "title": "Inazuma 5★ GEO Sub DPS",
    "rarity": 5,
    "element": "geo",
    "weapon": "sword",
    "region": "Inazuma",
    "role": "Sub DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/chiori/icon.png",
    "cardUrl": "/assets/characters/chiori/card.png",
    "splashUrl": "/assets/characters/chiori/splash.png",
    "description": "Chiori is a 5-star GEO sword wielder hailing from Inazuma. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Husk of Opulent Dreams",
        "count": 4,
        "description": "BiS: Stacks DEF% and Geo DMG Bonus.",
        "iconUrl": "/assets/artifacts/husk-of-opulent-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Chiori Core Synergy",
        "members": [
          "Chiori",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "chongyun",
    "name": "Chongyun",
    "title": "Liyue 4★ CRYO Main DPS",
    "rarity": 4,
    "element": "cryo",
    "weapon": "claymore",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/chongyun/icon.png",
    "cardUrl": "/assets/characters/chongyun/card.png",
    "splashUrl": "/assets/characters/chongyun/splash.png",
    "description": "Chongyun is a 4-star CRYO claymore wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Chongyun Core Synergy",
        "members": [
          "Chongyun",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "citlali",
    "name": "Citlali",
    "title": "Natlan 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "catalyst",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/citlali/icon.png",
    "cardUrl": "/assets/characters/citlali/card.png",
    "splashUrl": "/assets/characters/citlali/splash.png",
    "description": "Citlali is a 5-star CRYO catalyst wielder hailing from Natlan. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Citlali Core Synergy",
        "members": [
          "Citlali",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Natlan World Boss Drop",
      "localSpecialty": "Natlan Regional Specialty",
      "mobDrop": "Natlan Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Natlan Talent Teachings / Guides",
      "weeklyBossDrop": "Natlan Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "clorinde",
    "name": "Clorinde",
    "title": "Fontaine 5★ ELECTRO Main DPS",
    "rarity": 5,
    "element": "electro",
    "weapon": "sword",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/clorinde/icon.png",
    "cardUrl": "/assets/characters/clorinde/card.png",
    "splashUrl": "/assets/characters/clorinde/splash.png",
    "description": "Clorinde is a 5-star ELECTRO sword wielder hailing from Fontaine. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Clorinde Core Synergy",
        "members": [
          "Clorinde",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "collei",
    "name": "Collei",
    "title": "Sumeru 4★ DENDRO Sub DPS",
    "rarity": 4,
    "element": "dendro",
    "weapon": "bow",
    "region": "Sumeru",
    "role": "Sub DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/collei/icon.png",
    "cardUrl": "/assets/characters/collei/card.png",
    "splashUrl": "/assets/characters/collei/splash.png",
    "description": "Collei is a 4-star DENDRO bow wielder hailing from Sumeru. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "BiS: Shreds target Dendro RES by 30% for 8s.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery or ATK%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Collei Core Synergy",
        "members": [
          "Collei",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "columbina",
    "name": "Columbina",
    "title": "Nod-Krai 5★ HYDRO Main DPS",
    "rarity": 5,
    "element": "hydro",
    "weapon": "catalyst",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/columbina/icon.png",
    "cardUrl": "/assets/characters/columbina/card.png",
    "splashUrl": "/assets/characters/columbina/splash.png",
    "description": "Columbina is a 5-star HYDRO catalyst wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe / Heart of Depth",
        "count": 4,
        "description": "BiS: Massive skill or normal attack hydro damage amplification.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Columbina Core Synergy",
        "members": [
          "Columbina",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "cyno",
    "name": "Cyno",
    "title": "Sumeru 5★ ELECTRO Main DPS",
    "rarity": 5,
    "element": "electro",
    "weapon": "polearm",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/cyno/icon.png",
    "cardUrl": "/assets/characters/cyno/card.png",
    "splashUrl": "/assets/characters/cyno/splash.png",
    "description": "Cyno is a 5-star ELECTRO polearm wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Cyno Core Synergy",
        "members": [
          "Cyno",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "dahlia",
    "name": "Dahlia",
    "title": "Mondstadt 4★ HYDRO Main DPS",
    "rarity": 4,
    "element": "hydro",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/dahlia/icon.png",
    "cardUrl": "/assets/characters/dahlia/card.png",
    "splashUrl": "/assets/characters/dahlia/splash.png",
    "description": "Dahlia is a 4-star HYDRO sword wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe / Heart of Depth",
        "count": 4,
        "description": "BiS: Massive skill or normal attack hydro damage amplification.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Dahlia Core Synergy",
        "members": [
          "Dahlia",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "dehya",
    "name": "Dehya",
    "title": "Sumeru 5★ PYRO Main DPS",
    "rarity": 5,
    "element": "pyro",
    "weapon": "claymore",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/dehya/icon.png",
    "cardUrl": "/assets/characters/dehya/card.png",
    "splashUrl": "/assets/characters/dehya/splash.png",
    "description": "Dehya is a 5-star PYRO claymore wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Dehya Core Synergy",
        "members": [
          "Dehya",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "diluc",
    "name": "Diluc",
    "title": "Mondstadt 5★ PYRO Main DPS",
    "rarity": 5,
    "element": "pyro",
    "weapon": "claymore",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/diluc/icon.png",
    "cardUrl": "/assets/characters/diluc/card.png",
    "splashUrl": "/assets/characters/diluc/splash.png",
    "description": "Diluc is a 5-star PYRO claymore wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Diluc Core Synergy",
        "members": [
          "Diluc",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "diona",
    "name": "Diona",
    "title": "Mondstadt 4★ CRYO Healer",
    "rarity": 4,
    "element": "cryo",
    "weapon": "bow",
    "region": "Mondstadt",
    "role": "Healer",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/diona/icon.png",
    "cardUrl": "/assets/characters/diona/card.png",
    "splashUrl": "/assets/characters/diona/splash.png",
    "description": "Diona is a 4-star CRYO bow wielder hailing from Mondstadt. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Diona Core Synergy",
        "members": [
          "Diona",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "dori",
    "name": "Dori",
    "title": "Sumeru 4★ ELECTRO Main DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "claymore",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/dori/icon.png",
    "cardUrl": "/assets/characters/dori/card.png",
    "splashUrl": "/assets/characters/dori/splash.png",
    "description": "Dori is a 4-star ELECTRO claymore wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Dori Core Synergy",
        "members": [
          "Dori",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "durin",
    "name": "Durin",
    "title": "Mondstadt 5★ PYRO Main DPS",
    "rarity": 5,
    "element": "pyro",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/durin/icon.png",
    "cardUrl": "/assets/characters/durin/card.png",
    "splashUrl": "/assets/characters/durin/splash.png",
    "description": "Durin is a 5-star PYRO sword wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Durin Core Synergy",
        "members": [
          "Durin",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "emilie",
    "name": "Emilie",
    "title": "Fontaine 5★ DENDRO Sub DPS",
    "rarity": 5,
    "element": "dendro",
    "weapon": "polearm",
    "region": "Fontaine",
    "role": "Sub DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/emilie/icon.png",
    "cardUrl": "/assets/characters/emilie/card.png",
    "splashUrl": "/assets/characters/emilie/splash.png",
    "description": "Emilie is a 5-star DENDRO polearm wielder hailing from Fontaine. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "BiS: Shreds target Dendro RES by 30% for 8s.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery or ATK%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Emilie Core Synergy",
        "members": [
          "Emilie",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "escoffier",
    "name": "Escoffier",
    "title": "Fontaine 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "polearm",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/escoffier/icon.png",
    "cardUrl": "/assets/characters/escoffier/card.png",
    "splashUrl": "/assets/characters/escoffier/splash.png",
    "description": "Escoffier is a 5-star CRYO polearm wielder hailing from Fontaine. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Escoffier Core Synergy",
        "members": [
          "Escoffier",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "eula",
    "name": "Eula",
    "title": "Mondstadt 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "claymore",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/eula/icon.png",
    "cardUrl": "/assets/characters/eula/card.png",
    "splashUrl": "/assets/characters/eula/splash.png",
    "description": "Eula is a 5-star CRYO claymore wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Eula Core Synergy",
        "members": [
          "Eula",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "faruzan",
    "name": "Faruzan",
    "title": "Sumeru 4★ ANEMO Buffer",
    "rarity": 4,
    "element": "anemo",
    "weapon": "bow",
    "region": "Sumeru",
    "role": "Buffer",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/faruzan/icon.png",
    "cardUrl": "/assets/characters/faruzan/card.png",
    "splashUrl": "/assets/characters/faruzan/splash.png",
    "description": "Faruzan is a 4-star ANEMO bow wielder hailing from Sumeru. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Viridescent Venerer",
        "count": 4,
        "description": "BiS: 40% elemental RES shred to the swirled element.",
        "iconUrl": "/assets/artifacts/viridescent-venerer.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Elemental Mastery",
      "circlet": "Elemental Mastery",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Faruzan Core Synergy",
        "members": [
          "Faruzan",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "fischl",
    "name": "Fischl",
    "title": "Mondstadt 4★ ELECTRO Sub DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "bow",
    "region": "Mondstadt",
    "role": "Sub DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/fischl/icon.png",
    "cardUrl": "/assets/characters/fischl/card.png",
    "splashUrl": "/assets/characters/fischl/splash.png",
    "description": "Fischl is a 4-star ELECTRO bow wielder hailing from Mondstadt. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Fischl Core Synergy",
        "members": [
          "Fischl",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "flins",
    "name": "Flins",
    "title": "Nod-Krai 5★ ELECTRO Main DPS",
    "rarity": 5,
    "element": "electro",
    "weapon": "polearm",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/flins/icon.png",
    "cardUrl": "/assets/characters/flins/card.png",
    "splashUrl": "/assets/characters/flins/splash.png",
    "description": "Flins is a 5-star ELECTRO polearm wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Flins Core Synergy",
        "members": [
          "Flins",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "freminet",
    "name": "Freminet",
    "title": "Fontaine 4★ CRYO Main DPS",
    "rarity": 4,
    "element": "cryo",
    "weapon": "claymore",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/freminet/icon.png",
    "cardUrl": "/assets/characters/freminet/card.png",
    "splashUrl": "/assets/characters/freminet/splash.png",
    "description": "Freminet is a 4-star CRYO claymore wielder hailing from Fontaine. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Freminet Core Synergy",
        "members": [
          "Freminet",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "furina",
    "name": "Furina",
    "title": "Regina of All Waters, Kindreds, Peoples and Laws",
    "rarity": 5,
    "element": "hydro",
    "weapon": "sword",
    "region": "Fontaine",
    "role": "Sub DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/furina/icon.png",
    "cardUrl": "/assets/characters/furina/card.png",
    "splashUrl": "/assets/characters/furina/splash.png",
    "description": "Premier off-field Hydro sub-DPS and universal damage buffer who drains party HP to provide massive team-wide fanfare buffs.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Provides massive Crit DMG and boosts Skill DMG & HP whenever HP fluctuates.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: Free Fontaine fishing sword providing much needed ER% and Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Outstanding team battery option; significantly lowers team ER requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe",
        "count": 4,
        "description": "Supreme BiS: Grants up to +70% Elemental Skill DMG when off-field.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      },
      {
        "name": "Tenacity of the Millelith",
        "count": 2,
        "description": "+20% HP (Early transition option before full Golden Troupe).",
        "iconUrl": "/assets/artifacts/tenacity-of-the-millelith.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge (if ER < 180%)",
      "goblet": "HP% or Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Energy Recharge (until ~180-200% solo Hydro)",
        "Crit Rate",
        "Crit DMG",
        "HP%"
      ],
      "benchmarkEr": "180% - 200% (Solo Hydro), 160% (Double Hydro with Neuvillette/Yelan)",
      "benchmarkCrCd": "70% / 150%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA - Leave at Lv 1)"
    ],
    "recommendedTeams": [
      {
        "name": "Neuvillette Hypercarry",
        "members": [
          "Neuvillette",
          "Furina",
          "Kazuha",
          "Baizhu"
        ],
        "notes": "Highest sustained DPS team in the game; Neuvillette HP fluctuations instantly stack Furina Fanfare."
      },
      {
        "name": "Sunfire / National Furina",
        "members": [
          "Furina",
          "Xiangling",
          "Bennett",
          "Jean"
        ],
        "notes": "Jean provides team-wide burst heal to maximize Fanfare while Bennett/Xiangling enable huge Vaporize hits."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Water That Failed To Transcend (Hydro Tulpa)",
      "localSpecialty": "Lakelight Lily (Fontaine)",
      "mobDrop": "Whopperflower Nectar",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Justice (Tue/Fri/Sun)",
      "weeklyBossDrop": "Lightless Silk String (All-Devouring Narwhal)"
    },
    "proTips": [
      "Always pair Furina with a dedicated team-wide healer (Jean, Baizhu, Xianyun, Charlotte, or Mika) to rapidly generate 300+ Fanfare stacks.",
      "Her Salon Solitaire pets drain team HP down to 50%; do not forget to heal before entering intense combat stages.",
      "She can walk infinitely on water as long as her Skill is active!"
    ]
  },
  {
    "id": "gaming",
    "name": "Gaming",
    "title": "Liyue 4★ PYRO Main DPS",
    "rarity": 4,
    "element": "pyro",
    "weapon": "claymore",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/gaming/icon.png",
    "cardUrl": "/assets/characters/gaming/card.png",
    "splashUrl": "/assets/characters/gaming/splash.png",
    "description": "Gaming is a 4-star PYRO claymore wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Gaming Core Synergy",
        "members": [
          "Gaming",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "ganyu",
    "name": "Ganyu",
    "title": "Liyue 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "bow",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/ganyu/icon.png",
    "cardUrl": "/assets/characters/ganyu/card.png",
    "splashUrl": "/assets/characters/ganyu/splash.png",
    "description": "Ganyu is a 5-star CRYO bow wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Ganyu Core Synergy",
        "members": [
          "Ganyu",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "gorou",
    "name": "Gorou",
    "title": "Inazuma 4★ GEO Buffer",
    "rarity": 4,
    "element": "geo",
    "weapon": "bow",
    "region": "Inazuma",
    "role": "Buffer",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/gorou/icon.png",
    "cardUrl": "/assets/characters/gorou/card.png",
    "splashUrl": "/assets/characters/gorou/splash.png",
    "description": "Gorou is a 4-star GEO bow wielder hailing from Inazuma. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Gorou Core Synergy",
        "members": [
          "Gorou",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "hutao",
    "name": "Hu Tao",
    "title": "77th Director of the Wangsheng Funeral Parlor",
    "rarity": 5,
    "element": "pyro",
    "weapon": "polearm",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "👻",
    "avatarUrl": "/assets/characters/hutao/icon.png",
    "cardUrl": "/assets/characters/hutao/card.png",
    "splashUrl": "/assets/characters/hutao/splash.png",
    "description": "Premier single-target Pyro hypercarry who trades HP for colossal ATK, delivering devastating jump/dash-canceled Charged Attack Vaporizes.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: Enormous Crit DMG, Max HP%, and scaling ATK bonus when below 50% HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "Dragon's Bane",
        "rarity": 4,
        "description": "Best F2P option: High EM and +36% DMG against enemies affected by Hydro or Pyro.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: +15% Vaporize reaction DMG bonus and Pyro DMG stacks.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Elemental Mastery (if EM < 100)",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "Elemental Mastery (100-200)",
        "HP%"
      ],
      "benchmarkEr": "110%",
      "benchmarkCrCd": "70% / 200%+ (HP 30k+)"
    },
    "talentPriority": [
      "Normal Attack (NA)",
      "Elemental Skill (E)",
      "Elemental Burst (Q)"
    ],
    "recommendedTeams": [
      {
        "name": "Double Hydro Hu Tao",
        "members": [
          "Hu Tao",
          "Yelan",
          "Xingqiu",
          "Zhongli"
        ],
        "notes": "Xingqiu + Yelan ensure 100% Hydro uptime for Hu Tao Charged Attacks while Zhongli protects with unbreakable shield."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Juvenile Jade (Primo Geovishap)",
      "localSpecialty": "Silk Flower (Liyue)",
      "mobDrop": "Energy Nectar (Whopperflower)",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Diligence (Tue/Fri/Sun)",
      "weeklyBossDrop": "Shard of a Foul Legacy (Childe)"
    },
    "proTips": [
      "Normal Attack talent MUST be leveled equally with Elemental Skill—her Charged Attack multipliers come from NA!",
      "Learn jump-canceling at C0 (jump immediately after starting Charged Attack) to conserve stamina."
    ]
  },
  {
    "id": "iansan",
    "name": "Iansan",
    "title": "Natlan 4★ ELECTRO Main DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "polearm",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/iansan/icon.png",
    "cardUrl": "/assets/characters/iansan/card.png",
    "splashUrl": "/assets/characters/iansan/splash.png",
    "description": "Iansan is a 4-star ELECTRO polearm wielder hailing from Natlan. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Iansan Core Synergy",
        "members": [
          "Iansan",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Natlan World Boss Drop",
      "localSpecialty": "Natlan Regional Specialty",
      "mobDrop": "Natlan Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Natlan Talent Teachings / Guides",
      "weeklyBossDrop": "Natlan Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "ifa",
    "name": "Ifa",
    "title": "Natlan 4★ ANEMO Main DPS",
    "rarity": 4,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/ifa/icon.png",
    "cardUrl": "/assets/characters/ifa/card.png",
    "splashUrl": "/assets/characters/ifa/splash.png",
    "description": "Ifa is a 4-star ANEMO catalyst wielder hailing from Natlan. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Ifa Core Synergy",
        "members": [
          "Ifa",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Natlan World Boss Drop",
      "localSpecialty": "Natlan Regional Specialty",
      "mobDrop": "Natlan Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Natlan Talent Teachings / Guides",
      "weeklyBossDrop": "Natlan Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "illuga",
    "name": "Illuga",
    "title": "Nod-Krai 4★ GEO Main DPS",
    "rarity": 4,
    "element": "geo",
    "weapon": "polearm",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/illuga/icon.png",
    "cardUrl": "/assets/characters/illuga/card.png",
    "splashUrl": "/assets/characters/illuga/splash.png",
    "description": "Illuga is a 4-star GEO polearm wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Husk of Opulent Dreams",
        "count": 4,
        "description": "BiS: Stacks DEF% and Geo DMG Bonus.",
        "iconUrl": "/assets/artifacts/husk-of-opulent-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Illuga Core Synergy",
        "members": [
          "Illuga",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "ineffa",
    "name": "Ineffa",
    "title": "Nod-Krai 5★ ELECTRO Main DPS",
    "rarity": 5,
    "element": "electro",
    "weapon": "polearm",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/ineffa/icon.png",
    "cardUrl": "/assets/characters/ineffa/card.png",
    "splashUrl": "/assets/characters/ineffa/splash.png",
    "description": "Ineffa is a 5-star ELECTRO polearm wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Ineffa Core Synergy",
        "members": [
          "Ineffa",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "jahoda",
    "name": "Jahoda",
    "title": "Nod-Krai 4★ ANEMO Main DPS",
    "rarity": 4,
    "element": "anemo",
    "weapon": "bow",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/jahoda/icon.png",
    "cardUrl": "/assets/characters/jahoda/card.png",
    "splashUrl": "/assets/characters/jahoda/splash.png",
    "description": "Jahoda is a 4-star ANEMO bow wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Jahoda Core Synergy",
        "members": [
          "Jahoda",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "jean",
    "name": "Jean",
    "title": "Mondstadt 5★ ANEMO Healer",
    "rarity": 5,
    "element": "anemo",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Healer",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/jean/icon.png",
    "cardUrl": "/assets/characters/jean/card.png",
    "splashUrl": "/assets/characters/jean/splash.png",
    "description": "Jean is a 5-star ANEMO sword wielder hailing from Mondstadt. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Freedom-Sworn",
    "bestWeapons": [
      {
        "name": "Freedom-Sworn",
        "rarity": 5,
        "description": "BiS Support: Grants team-wide Normal/Charged Attack and ATK buffs.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Jean Core Synergy",
        "members": [
          "Jean",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "kachina",
    "name": "Kachina",
    "title": "Natlan 4★ GEO Support",
    "rarity": 4,
    "element": "geo",
    "weapon": "polearm",
    "region": "Natlan",
    "role": "Support",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/kachina/icon.png",
    "cardUrl": "/assets/characters/kachina/card.png",
    "splashUrl": "/assets/characters/kachina/splash.png",
    "description": "Kachina is a 4-star GEO polearm wielder hailing from Natlan. Specializes as an elite Support in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Scroll of the Hero of Cinder City",
        "count": 4,
        "description": "BiS: +40% elemental DMG bonus to party members on Nightsoul triggers.",
        "iconUrl": "/assets/artifacts/archaic-petra.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kachina Core Synergy",
        "members": [
          "Kachina",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Natlan World Boss Drop",
      "localSpecialty": "Natlan Regional Specialty",
      "mobDrop": "Natlan Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Natlan Talent Teachings / Guides",
      "weeklyBossDrop": "Natlan Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "kazuha",
    "name": "Kaedehara Kazuha",
    "title": "Scarlet Leaves Pursue Wild Waves",
    "rarity": 5,
    "element": "anemo",
    "weapon": "sword",
    "region": "Inazuma",
    "role": "Buffer",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/kazuha/icon.png",
    "cardUrl": "/assets/characters/kazuha/card.png",
    "splashUrl": "/assets/characters/kazuha/splash.png",
    "description": "The golden standard of grouping, elemental shred, and elemental DMG boosting in Genshin Impact.",
    "signatureWeapon": "Freedom-Sworn",
    "bestWeapons": [
      {
        "name": "Freedom-Sworn",
        "rarity": 5,
        "description": "BiS: Massive EM and triggers team-wide Normal/Plunge DMG & ATK buffs.",
        "iconUrl": "/assets/weapons/freedom-sworn.png"
      },
      {
        "name": "Xiphos’ Moonlight",
        "rarity": 4,
        "description": "Converts Kazuha’s high EM into Energy Recharge for himself and all teammates.",
        "iconUrl": "/assets/weapons/xiphos-moonlight.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Fixes ER requirements for both Kazuha and high-cost burst teammates.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Viridescent Venerer (VV)",
        "count": 4,
        "description": "Absolute non-negotiable: Shreds 40% Elemental RES of the swirled element for 10 seconds.",
        "iconUrl": "/assets/artifacts/viridescent-venerer.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery (or ER if struggling to burst)",
      "goblet": "Elemental Mastery",
      "circlet": "Elemental Mastery",
      "substats": [
        "Elemental Mastery",
        "Energy Recharge (160-180%)",
        "Crit Rate (if using Favonius)"
      ],
      "benchmarkEr": "160% - 180%",
      "benchmarkCrCd": "Aim for 900 - 1000 Total EM"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Universal Elemental Buffer",
        "members": [
          "Kazuha",
          "Neuvillette",
          "Furina",
          "Baizhu"
        ],
        "notes": "Fits into nearly any Pyro, Hydro, Cryo, or Electro composition to group enemies and amplify damage."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Marionette Core (Maguu Kenki)",
      "localSpecialty": "Sea Ganoderma (Inazuma)",
      "mobDrop": "Treasure Hoarder Insignias",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Diligence (Tue/Fri/Sun)",
      "weeklyBossDrop": "Gilded Scale (Azhdaha)"
    },
    "proTips": [
      "Each 100 EM on Kazuha grants 4% Elemental DMG bonus to swirled elements (1000 EM = 40% DMG bonus for 8s).",
      "Hold E has much larger suction radius and generates 4 particles instead of 3 from Tap E.",
      "Double Swirl trick: If an enemy has Hydro and you stand in Bennett burst (self-Pyro), Kazuha swirls BOTH elements!"
    ]
  },
  {
    "id": "kaeya",
    "name": "Kaeya",
    "title": "Mondstadt 4★ CRYO Sub DPS",
    "rarity": 4,
    "element": "cryo",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Sub DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/kaeya/icon.png",
    "cardUrl": "/assets/characters/kaeya/card.png",
    "splashUrl": "/assets/characters/kaeya/splash.png",
    "description": "Kaeya is a 4-star CRYO sword wielder hailing from Mondstadt. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kaeya Core Synergy",
        "members": [
          "Kaeya",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "ayaka",
    "name": "Kamisato Ayaka",
    "title": "Frostflake Heron & Shirasagi Himegimi",
    "rarity": 5,
    "element": "cryo",
    "weapon": "sword",
    "region": "Inazuma",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/ayaka/icon.png",
    "cardUrl": "/assets/characters/ayaka/card.png",
    "splashUrl": "/assets/characters/ayaka/splash.png",
    "description": "Premier Cryo burst hypercarry who unleashes Soumetsu, a 20-hit slicing frost storm that obliterates frozen targets in seconds.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS: High Base ATK, Crit DMG, and up to +28% elemental DMG bonus stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Amenoma Kageuchi",
        "rarity": 4,
        "description": "Best F2P craftable: Inazuma forge sword that refunds up to 36 energy after bursting.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "Supreme BiS: Grants +40% free Crit Rate against frozen enemies (+55% with Cryo resonance).",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK%",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit DMG",
      "substats": [
        "Crit DMG",
        "ATK%",
        "Energy Recharge (130-140%)",
        "Crit Rate (35-45% max)"
      ],
      "benchmarkEr": "130% (with Amenoma), 140%+ (without)",
      "benchmarkCrCd": "40% / 220%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Normal Attack (NA)",
      "Elemental Skill (E)"
    ],
    "recommendedTeams": [
      {
        "name": "Ayaka Premium Freeze",
        "members": [
          "Kamisato Ayaka",
          "Shenhe",
          "Kazuha",
          "Kokomi"
        ],
        "notes": "Kokomi applies Hydro jellyfish for permanent Freeze while Shenhe and Kazuha buffer Ayaka 20-hit Soumetsu."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Perpetual Heart (Perpetual Mechanical Array)",
      "localSpecialty": "Sakura Bloom (Inazuma)",
      "mobDrop": "Famed Handguard (Nobushi)",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Elegance (Tue/Fri/Sun)",
      "weeklyBossDrop": "Bloodjade Branch (Azhdaha)"
    },
    "proTips": [
      "Do NOT over-invest in Crit Rate! 4pc Blizzard Strayer (+40%) + Cryo Resonance (+15%) provides 55% free Crit Rate against frozen targets.",
      "Sprint briefly into an enemy before bursting to gain +18% Cryo DMG bonus from her A4 passive."
    ]
  },
  {
    "id": "kamisato-ayato",
    "name": "Kamisato Ayato",
    "title": "Inazuma 5★ HYDRO Main DPS",
    "rarity": 5,
    "element": "hydro",
    "weapon": "sword",
    "region": "Inazuma",
    "role": "Main DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/kamisato-ayato/icon.png",
    "cardUrl": "/assets/characters/kamisato-ayato/card.png",
    "splashUrl": "/assets/characters/kamisato-ayato/splash.png",
    "description": "Kamisato Ayato is a 5-star HYDRO sword wielder hailing from Inazuma. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe / Heart of Depth",
        "count": 4,
        "description": "BiS: Massive skill or normal attack hydro damage amplification.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kamisato Ayato Core Synergy",
        "members": [
          "Kamisato Ayato",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "kaveh",
    "name": "Kaveh",
    "title": "Sumeru 4★ DENDRO Main DPS",
    "rarity": 4,
    "element": "dendro",
    "weapon": "claymore",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/kaveh/icon.png",
    "cardUrl": "/assets/characters/kaveh/card.png",
    "splashUrl": "/assets/characters/kaveh/splash.png",
    "description": "Kaveh is a 4-star DENDRO claymore wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "BiS: Shreds target Dendro RES by 30% for 8s.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery or ATK%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kaveh Core Synergy",
        "members": [
          "Kaveh",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "keqing",
    "name": "Keqing",
    "title": "Liyue 5★ ELECTRO Main DPS",
    "rarity": 5,
    "element": "electro",
    "weapon": "sword",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/keqing/icon.png",
    "cardUrl": "/assets/characters/keqing/card.png",
    "splashUrl": "/assets/characters/keqing/splash.png",
    "description": "Keqing is a 5-star ELECTRO sword wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Keqing Core Synergy",
        "members": [
          "Keqing",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "kinich",
    "name": "Kinich",
    "title": "Turnfire Hunt",
    "rarity": 5,
    "element": "dendro",
    "weapon": "claymore",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "🦖",
    "avatarUrl": "/assets/characters/kinich/icon.png",
    "cardUrl": "/assets/characters/kinich/card.png",
    "splashUrl": "/assets/characters/kinich/splash.png",
    "description": "Acrobatic Dendro claymore DPS who tethers to targets with Yumkasaurus grappling hooks, firing lethal Scalespiker Cannon shots.",
    "signatureWeapon": "Fang of the Mountain King",
    "bestWeapons": [
      {
        "name": "Fang of the Mountain King",
        "rarity": 5,
        "description": "BiS: High Base ATK, Crit Rate, and massive stacking Skill & Burst damage when triggering Burning or Burgeon.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Natlan forge claymore boosting Elemental Skill DMG by up to 32% after triggering Pyro reactions.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Obsidian Codex",
        "count": 4,
        "description": "BiS: Provides +40% Crit Rate in Nightsoul state, maximizing consistency on giant Scalespiker cannon hits.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      },
      {
        "name": "Unfinished Reverie",
        "count": 4,
        "description": "Alternative: Provides a massive +50% unconditional DMG bonus in Burning reaction teams.",
        "iconUrl": "/assets/artifacts/gilded-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit DMG / Crit Rate",
      "substats": [
        "Crit DMG",
        "Crit Rate",
        "ATK%",
        "Energy Recharge (~120%)"
      ],
      "benchmarkEr": "115% - 130%",
      "benchmarkCrCd": "60% / 160%+"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kinich Burning Cannon",
        "members": [
          "Kinich",
          "Bennett",
          "Xiangling",
          "Emilie"
        ],
        "notes": "Burning triggers fast Nightsoul point regeneration, enabling Kinich to fire 4 to 5 Scalespiker cannons per rotation."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Overripe Flamegranate",
      "localSpecialty": "Quenepa Berry (Natlan)",
      "mobDrop": "Saurian Fangs & Claws",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Kindling (Tue/Fri/Sun)",
      "weeklyBossDrop": "All-Devouring Narwhal drop"
    },
    "proTips": [
      "Grapple around the target and circle into the blind spot zones to gain 3 bonus Nightsoul points instantly.",
      "Fire the Scalespiker cannon immediately upon reaching 20 Nightsoul points for maximum DPS uptime."
    ]
  },
  {
    "id": "kirara",
    "name": "Kirara",
    "title": "Inazuma 4★ DENDRO Support",
    "rarity": 4,
    "element": "dendro",
    "weapon": "sword",
    "region": "Inazuma",
    "role": "Support",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/kirara/icon.png",
    "cardUrl": "/assets/characters/kirara/card.png",
    "splashUrl": "/assets/characters/kirara/splash.png",
    "description": "Kirara is a 4-star DENDRO sword wielder hailing from Inazuma. Specializes as an elite Support in high-efficiency team synergies.",
    "signatureWeapon": "Freedom-Sworn",
    "bestWeapons": [
      {
        "name": "Freedom-Sworn",
        "rarity": 5,
        "description": "BiS Support: Grants team-wide Normal/Charged Attack and ATK buffs.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kirara Core Synergy",
        "members": [
          "Kirara",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "klee",
    "name": "Klee",
    "title": "Mondstadt 5★ PYRO Main DPS",
    "rarity": 5,
    "element": "pyro",
    "weapon": "catalyst",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/klee/icon.png",
    "cardUrl": "/assets/characters/klee/card.png",
    "splashUrl": "/assets/characters/klee/splash.png",
    "description": "Klee is a 5-star PYRO catalyst wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Klee Core Synergy",
        "members": [
          "Klee",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "kujou-sara",
    "name": "Kujou Sara",
    "title": "Inazuma 4★ ELECTRO Buffer",
    "rarity": 4,
    "element": "electro",
    "weapon": "bow",
    "region": "Inazuma",
    "role": "Buffer",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/kujou-sara/icon.png",
    "cardUrl": "/assets/characters/kujou-sara/card.png",
    "splashUrl": "/assets/characters/kujou-sara/splash.png",
    "description": "Kujou Sara is a 4-star ELECTRO bow wielder hailing from Inazuma. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kujou Sara Core Synergy",
        "members": [
          "Kujou Sara",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "kuki-shinobu",
    "name": "Kuki Shinobu",
    "title": "Inazuma 4★ ELECTRO Sub DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "sword",
    "region": "Inazuma",
    "role": "Sub DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/kuki-shinobu/icon.png",
    "cardUrl": "/assets/characters/kuki-shinobu/card.png",
    "splashUrl": "/assets/characters/kuki-shinobu/splash.png",
    "description": "Kuki Shinobu is a 4-star ELECTRO sword wielder hailing from Inazuma. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Kuki Shinobu Core Synergy",
        "members": [
          "Kuki Shinobu",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "lan-yan",
    "name": "Lan Yan",
    "title": "Liyue 4★ ANEMO Main DPS",
    "rarity": 4,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/lan-yan/icon.png",
    "cardUrl": "/assets/characters/lan-yan/card.png",
    "splashUrl": "/assets/characters/lan-yan/splash.png",
    "description": "Lan Yan is a 4-star ANEMO catalyst wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Lan Yan Core Synergy",
        "members": [
          "Lan Yan",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "lauma",
    "name": "Lauma",
    "title": "Nod-Krai 5★ DENDRO Main DPS",
    "rarity": 5,
    "element": "dendro",
    "weapon": "catalyst",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/lauma/icon.png",
    "cardUrl": "/assets/characters/lauma/card.png",
    "splashUrl": "/assets/characters/lauma/splash.png",
    "description": "Lauma is a 5-star DENDRO catalyst wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "BiS: Shreds target Dendro RES by 30% for 8s.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery or ATK%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Lauma Core Synergy",
        "members": [
          "Lauma",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "layla",
    "name": "Layla",
    "title": "Sumeru 4★ CRYO Support",
    "rarity": 4,
    "element": "cryo",
    "weapon": "sword",
    "region": "Sumeru",
    "role": "Support",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/layla/icon.png",
    "cardUrl": "/assets/characters/layla/card.png",
    "splashUrl": "/assets/characters/layla/splash.png",
    "description": "Layla is a 4-star CRYO sword wielder hailing from Sumeru. Specializes as an elite Support in high-efficiency team synergies.",
    "signatureWeapon": "Freedom-Sworn",
    "bestWeapons": [
      {
        "name": "Freedom-Sworn",
        "rarity": 5,
        "description": "BiS Support: Grants team-wide Normal/Charged Attack and ATK buffs.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Layla Core Synergy",
        "members": [
          "Layla",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "linnea",
    "name": "Linnea",
    "title": "Nod-Krai 5★ GEO Main DPS",
    "rarity": 5,
    "element": "geo",
    "weapon": "bow",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/linnea/icon.png",
    "cardUrl": "/assets/characters/linnea/card.png",
    "splashUrl": "/assets/characters/linnea/splash.png",
    "description": "Linnea is a 5-star GEO bow wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Husk of Opulent Dreams",
        "count": 4,
        "description": "BiS: Stacks DEF% and Geo DMG Bonus.",
        "iconUrl": "/assets/artifacts/husk-of-opulent-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Linnea Core Synergy",
        "members": [
          "Linnea",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "lisa",
    "name": "Lisa",
    "title": "Mondstadt 4★ ELECTRO Sub DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "catalyst",
    "region": "Mondstadt",
    "role": "Sub DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/lisa/icon.png",
    "cardUrl": "/assets/characters/lisa/card.png",
    "splashUrl": "/assets/characters/lisa/splash.png",
    "description": "Lisa is a 4-star ELECTRO catalyst wielder hailing from Mondstadt. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Lisa Core Synergy",
        "members": [
          "Lisa",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "lohen",
    "name": "Lohen",
    "title": "Mondstadt 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "polearm",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/lohen/icon.png",
    "cardUrl": "/assets/characters/lohen/card.png",
    "splashUrl": "/assets/characters/lohen/splash.png",
    "description": "Lohen is a 5-star CRYO polearm wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Lohen Core Synergy",
        "members": [
          "Lohen",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "lynette",
    "name": "Lynette",
    "title": "Fontaine 4★ ANEMO Main DPS",
    "rarity": 4,
    "element": "anemo",
    "weapon": "sword",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/lynette/icon.png",
    "cardUrl": "/assets/characters/lynette/card.png",
    "splashUrl": "/assets/characters/lynette/splash.png",
    "description": "Lynette is a 4-star ANEMO sword wielder hailing from Fontaine. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Lynette Core Synergy",
        "members": [
          "Lynette",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "lyney",
    "name": "Lyney",
    "title": "Fontaine 5★ PYRO Main DPS",
    "rarity": 5,
    "element": "pyro",
    "weapon": "bow",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/lyney/icon.png",
    "cardUrl": "/assets/characters/lyney/card.png",
    "splashUrl": "/assets/characters/lyney/splash.png",
    "description": "Lyney is a 5-star PYRO bow wielder hailing from Fontaine. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Lyney Core Synergy",
        "members": [
          "Lyney",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "mavuika",
    "name": "Mavuika",
    "title": "Habitation of the Blazing Sun",
    "rarity": 5,
    "element": "pyro",
    "weapon": "claymore",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/mavuika/icon.png",
    "cardUrl": "/assets/characters/mavuika/card.png",
    "splashUrl": "/assets/characters/mavuika/splash.png",
    "description": "Pyro Archon of Natlan. Commands the eternal Sacred Flame with motorcycle-powered combat sweeps, persistent off-field Pyro, and devastating Nightsoul bursts.",
    "signatureWeapon": "A Thousand Blazing Suns",
    "bestWeapons": [
      {
        "name": "A Thousand Blazing Suns",
        "rarity": 5,
        "description": "BiS: Provides immense Crit Rate and boosts ATK & Crit DMG when entering Nightsoul Blessing.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Excellent Skill & Burst amplifier after triggering Pyro reactions.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Obsidian Codex",
        "count": 4,
        "description": "BiS for on-field: +40% Crit Rate during Nightsoul Blessing.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Elemental Mastery",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit DMG / Crit Rate",
      "substats": [
        "Crit DMG",
        "Crit Rate",
        "ATK%",
        "Elemental Mastery"
      ],
      "benchmarkEr": "130%",
      "benchmarkCrCd": "65% / 180%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Archon Sunfire Vaporize",
        "members": [
          "Mavuika",
          "Furina",
          "Xilonen",
          "Bennett"
        ],
        "notes": "Combines Xilonen RES shred, Furina fanfare buffs, and Bennett flat ATK for apocalyptic Pyro cleaves."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Lord of Primal Fire core",
      "localSpecialty": "Sprayfeather Gill (Natlan)",
      "mobDrop": "Saurian Fangs & Claws",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Contention (Mon/Thu/Sun)",
      "weeklyBossDrop": "Lord of Primal Fire crown"
    },
    "proTips": [
      "Maintains permanent Pyro aura on enemies, making her the premier Pyro enabler in the entire game."
    ]
  },
  {
    "id": "mika",
    "name": "Mika",
    "title": "Mondstadt 4★ CRYO Healer",
    "rarity": 4,
    "element": "cryo",
    "weapon": "polearm",
    "region": "Mondstadt",
    "role": "Healer",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/mika/icon.png",
    "cardUrl": "/assets/characters/mika/card.png",
    "splashUrl": "/assets/characters/mika/splash.png",
    "description": "Mika is a 4-star CRYO polearm wielder hailing from Mondstadt. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Mika Core Synergy",
        "members": [
          "Mika",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "mona",
    "name": "Mona",
    "title": "Mondstadt 5★ HYDRO Buffer",
    "rarity": 5,
    "element": "hydro",
    "weapon": "catalyst",
    "region": "Mondstadt",
    "role": "Buffer",
    "icon": "💧",
    "avatarUrl": "/assets/characters/mona/icon.png",
    "cardUrl": "/assets/characters/mona/card.png",
    "splashUrl": "/assets/characters/mona/splash.png",
    "description": "Mona is a 5-star HYDRO catalyst wielder hailing from Mondstadt. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Mona Core Synergy",
        "members": [
          "Mona",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "mualani",
    "name": "Mualani",
    "title": "Splish-Splash Wavechaser",
    "rarity": 5,
    "element": "hydro",
    "weapon": "catalyst",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "🌊",
    "avatarUrl": "/assets/characters/mualani/icon.png",
    "cardUrl": "/assets/characters/mualani/card.png",
    "splashUrl": "/assets/characters/mualani/splash.png",
    "description": "Nightsoul-blessed Hydro catalyst hypercarry who surfs on Sharky to stack Wavechaser bites, delivering massive single-hit Forward Vaporize bursts.",
    "signatureWeapon": "Surf's Up",
    "bestWeapons": [
      {
        "name": "Surf's Up",
        "rarity": 5,
        "description": "BiS: High Crit DMG, bonus Max HP, and massive Normal Attack DMG bonus during Nightsoul Blessing.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Ring of Yaxche",
        "rarity": 4,
        "description": "Best F2P craftable: Natlan forge catalyst that converts Max HP directly into Normal Attack DMG bonus.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Sacrificial Jade",
        "rarity": 4,
        "description": "Battle Pass standout: Enormous Crit Rate and +64% HP boost when off-field between surf rotations.",
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Obsidian Codex",
        "count": 4,
        "description": "BiS: Grants +15% DMG during Nightsoul and a game-breaking +40% Crit Rate upon consuming Nightsoul points.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Elemental Mastery",
      "goblet": "Hydro DMG Bonus or HP%",
      "circlet": "Crit DMG (due to 40% free Crit Rate from Obsidian Codex)",
      "substats": [
        "Crit DMG",
        "Elemental Mastery (120-200 for Vape)",
        "HP%",
        "Energy Recharge (120%)"
      ],
      "benchmarkEr": "115% - 125%",
      "benchmarkCrCd": "50% / 220%+ (with 4pc Obsidian Codex)"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Forward Vaporize Shark Bomb",
        "members": [
          "Mualani",
          "Xiangling",
          "Zhongli",
          "Furina"
        ],
        "notes": "Xiangling applies off-field Pyro while Mualani surfs into enemies to trigger 300k+ Forward Vaporize Sharky bites."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mark of the Binding Blessing",
      "localSpecialty": "Saurian Claw Succulent (Natlan)",
      "mobDrop": "Saurian Fangs & Claws",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Contention (Mon/Thu/Sun)",
      "weeklyBossDrop": "Lord of Primal Fire horn"
    },
    "proTips": [
      "Surfing into enemies marks them with Wavechaser stacks. Always bite at 3 full stacks for exponential damage multipliers.",
      "4-piece Obsidian Codex gives 40% free Crit Rate during Nightsoul, making Crit DMG circlets mandatory."
    ]
  },
  {
    "id": "nahida",
    "name": "Nahida",
    "title": "Physic of Purity / Lesser Lord Kusanali",
    "rarity": 5,
    "element": "dendro",
    "weapon": "catalyst",
    "region": "Sumeru",
    "role": "Sub DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/nahida/icon.png",
    "cardUrl": "/assets/characters/nahida/card.png",
    "splashUrl": "/assets/characters/nahida/splash.png",
    "description": "The Dendro Archon. Delivers continuous, high-damage Tri-Karma purification ticks and up to 250 team EM buff inside her Shrine of Maya.",
    "signatureWeapon": "A Thousand Floating Dreams",
    "bestWeapons": [
      {
        "name": "A Thousand Floating Dreams",
        "rarity": 5,
        "description": "BiS: High EM, party EM buffs, and personal Dendro DMG bonus.",
        "iconUrl": "/assets/weapons/a-thousand-floating-dreams.png"
      },
      {
        "name": "Sacrificial Fragments",
        "rarity": 4,
        "description": "Huge 221 EM substat and resets skill cooldown.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "Core BiS: -30% Dendro RES shred to enemies, boosting both Nahida and Bloom/Hyperbloom reactions.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery",
      "goblet": "Elemental Mastery or Dendro DMG Bonus",
      "circlet": "Elemental Mastery or Crit Rate / Crit DMG",
      "substats": [
        "Elemental Mastery (aim for 800-1000)",
        "Crit Rate",
        "Crit DMG",
        "Energy Recharge (~130%)"
      ],
      "benchmarkEr": "120% - 130%",
      "benchmarkCrCd": "Aim for 800 - 1000 EM"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Alhaitham Quickbloom",
        "members": [
          "Alhaitham",
          "Nahida",
          "Furina",
          "Kuki Shinobu"
        ],
        "notes": "One of the most powerful teams in the game, combining heavy Spread hits with 30k+ Hyperbloom missiles."
      },
      {
        "name": "Nilou Bountiful Bloom",
        "members": [
          "Nilou",
          "Nahida",
          "Kokomi",
          "Collei"
        ],
        "notes": "Produces instant-exploding Bountiful Cores that wipe out AoE mobs in seconds."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Quelled Creeper (Dendro Hypostasis)",
      "localSpecialty": "Kalpalata Lotus (Sumeru)",
      "mobDrop": "Fungi Spores / Pollen",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Ingenuity (Tue/Fri/Sun)",
      "weeklyBossDrop": "Puppet Strings (Journeyman / Scaramouche)"
    },
    "proTips": [
      "Her Hold E can scan and pick up harvestable plants and local specialties from a distance across the map!",
      "When farming Fungi Spores, avoid attacking with Pyro or Electro, or they will drop Nucleus instead of Spores.",
      "Her passive converts excess EM over 200 into up to 24% Crit Rate and 80% DMG bonus."
    ]
  },
  {
    "id": "navia",
    "name": "Navia",
    "title": "Helm of the Spina di Rosula",
    "rarity": 5,
    "element": "geo",
    "weapon": "claymore",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "💛",
    "avatarUrl": "/assets/characters/navia/icon.png",
    "cardUrl": "/assets/characters/navia/card.png",
    "splashUrl": "/assets/characters/navia/splash.png",
    "description": "President of the Spina di Rosula. Loads Crystallize shards into her gunbrella to blast enemies with astronomical burst shotgun damage.",
    "signatureWeapon": "Verdict",
    "bestWeapons": [
      {
        "name": "Verdict",
        "rarity": 5,
        "description": "BiS: High base ATK, Crit Rate, and +36% Elemental Skill DMG boost via Crystallize.",
        "iconUrl": "/assets/weapons/verdict.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe",
        "count": 4,
        "description": "Excellent alternative for quickswap shotgun nuke playstyles (+70% Skill DMG).",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK%",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Energy Recharge (~120-130%)"
      ],
      "benchmarkEr": "120% - 130%",
      "benchmarkCrCd": "75% / 160%+"
    },
    "talentPriority": [
      "Elemental Skill (Gunbrella E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Navia Double Pyro / Furina",
        "members": [
          "Navia",
          "Furina",
          "Bennett",
          "Zhongli"
        ],
        "notes": "Bennett and Furina push Navia gunbrella shotguns beyond 300,000+ damage per blast."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Artificed Spare Clockwork Component — Coppelius",
      "localSpecialty": "Spring of the First Dewdrop",
      "mobDrop": "Transoceanic Pearl / Chunk",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Equity (Mon/Thu/Sun)",
      "weeklyBossDrop": "Lightless Silk String (All-Devouring Narwhal)"
    },
    "proTips": [
      "Each Crystallize shard absorbed adds 1 Shrapnel charge (up to 6 max). Firing at 3+ charges doubles shotgun pellet count!",
      "Hold E can pull in nearby Crystallize shards like a magnet from across the battlefield.",
      "Her gunbrella fires point-blank shotgun blasts—stand right in front of bosses for 100% pellet hit connection."
    ]
  },
  {
    "id": "nefer",
    "name": "Nefer",
    "title": "Nod-Krai 5★ DENDRO Main DPS",
    "rarity": 5,
    "element": "dendro",
    "weapon": "catalyst",
    "region": "Nod-Krai",
    "role": "Main DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/nefer/icon.png",
    "cardUrl": "/assets/characters/nefer/card.png",
    "splashUrl": "/assets/characters/nefer/splash.png",
    "description": "Nefer is a 5-star DENDRO catalyst wielder hailing from Nod-Krai. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "BiS: Shreds target Dendro RES by 30% for 8s.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery or ATK%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Nefer Core Synergy",
        "members": [
          "Nefer",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Nod-Krai World Boss Drop",
      "localSpecialty": "Nod-Krai Regional Specialty",
      "mobDrop": "Nod-Krai Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Nod-Krai Talent Teachings / Guides",
      "weeklyBossDrop": "Nod-Krai Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "neuvillette",
    "name": "Neuvillette",
    "title": "Ordained Arbiter",
    "rarity": 5,
    "element": "hydro",
    "weapon": "catalyst",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "🌊",
    "avatarUrl": "/assets/characters/neuvillette/icon.png",
    "cardUrl": "/assets/characters/neuvillette/card.png",
    "splashUrl": "/assets/characters/neuvillette/splash.png",
    "description": "Iudex of Fontaine wielding devastating continuous Hydro beam Charged Attacks that self-sustain with Sourcewater Droplets.",
    "signatureWeapon": "Tome of the Eternal Flow",
    "bestWeapons": [
      {
        "name": "Tome of the Eternal Flow",
        "rarity": 5,
        "description": "BiS: High Crit DMG, HP% boost, and massive Charged Attack DMG buff.",
        "iconUrl": "/assets/weapons/tome-of-the-eternal-flow.png"
      },
      {
        "name": "Sacrificial Jade",
        "rarity": 4,
        "description": "Battle Pass gem: Incredible Crit Rate and up to 64% Max HP buff at R5.",
        "iconUrl": "/assets/weapons/sacrificial-jade.png"
      },
      {
        "name": "Prototype Amber",
        "rarity": 4,
        "description": "Amazing F2P craftable: HP% sub, generates energy and team healing.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/prototype-amber.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Marechaussee Hunter",
        "count": 4,
        "description": "Undisputed BiS: Grants +15% Normal/Charged DMG and +36% free Crit Rate from HP drains.",
        "iconUrl": "/assets/artifacts/marechaussee-hunter.png"
      }
    ],
    "statPriorities": {
      "sands": "HP%",
      "goblet": "Hydro DMG Bonus or HP%",
      "circlet": "Crit DMG or Crit Rate",
      "substats": [
        "Crit DMG",
        "Crit Rate (cap at ~64% with 4pc MH)",
        "HP%",
        "Energy Recharge (120-130%)"
      ],
      "benchmarkEr": "120% - 130%",
      "benchmarkCrCd": "55-64% CR (before +36% set buff) / 200%+ CD"
    },
    "talentPriority": [
      "Normal / Charged Attack (NA)",
      "Elemental Burst (Q)",
      "Elemental Skill (E)"
    ],
    "recommendedTeams": [
      {
        "name": "Fontaine Sovereign Core",
        "members": [
          "Neuvillette",
          "Furina",
          "Kazuha",
          "Baizhu"
        ],
        "notes": "Double Hydro resonance boosts HP, Kazuha shreds Hydro RES, and Baizhu provides shields and team-wide heals."
      },
      {
        "name": "Rainbow Reaction Hypercarry",
        "members": [
          "Neuvillette",
          "Zhongli",
          "Kazuha",
          "Fischl"
        ],
        "notes": "Guarantees 3 Draconic Glory stacks (A1 passive) for maximum 160% Charged Attack scaling at C0."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontemer Horn (Millennial Pearl Seahorse)",
      "localSpecialty": "Lumitoile (Fontaine)",
      "mobDrop": "Transoceanic Pearl / Chunk (Fontemer Aberrants)",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Equity (Mon/Thu/Sun)",
      "weeklyBossDrop": "Everamber (Guardian of Apep’s Oasis)"
    },
    "proTips": [
      "At C0, bring a shielder like Zhongli or Layla to avoid getting interrupted mid-beam.",
      "Absorbing 3 Sourcewater Droplets instantly completes his Charged Attack charge up time with zero stamina cost.",
      "Remember to trigger different Hydro elemental reactions to max out his Draconic Glory passive."
    ]
  },
  {
    "id": "nicole",
    "name": "Nicole",
    "title": "Mondstadt 5★ PYRO Main DPS",
    "rarity": 5,
    "element": "pyro",
    "weapon": "catalyst",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/nicole/icon.png",
    "cardUrl": "/assets/characters/nicole/card.png",
    "splashUrl": "/assets/characters/nicole/splash.png",
    "description": "Nicole is a 5-star PYRO catalyst wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Nicole Core Synergy",
        "members": [
          "Nicole",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "nilou",
    "name": "Nilou",
    "title": "Sumeru 5★ HYDRO Main DPS",
    "rarity": 5,
    "element": "hydro",
    "weapon": "sword",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/nilou/icon.png",
    "cardUrl": "/assets/characters/nilou/card.png",
    "splashUrl": "/assets/characters/nilou/splash.png",
    "description": "Nilou is a 5-star HYDRO sword wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe / Heart of Depth",
        "count": 4,
        "description": "BiS: Massive skill or normal attack hydro damage amplification.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Nilou Core Synergy",
        "members": [
          "Nilou",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "ningguang",
    "name": "Ningguang",
    "title": "Liyue 4★ GEO Main DPS",
    "rarity": 4,
    "element": "geo",
    "weapon": "catalyst",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/ningguang/icon.png",
    "cardUrl": "/assets/characters/ningguang/card.png",
    "splashUrl": "/assets/characters/ningguang/splash.png",
    "description": "Ningguang is a 4-star GEO catalyst wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Husk of Opulent Dreams",
        "count": 4,
        "description": "BiS: Stacks DEF% and Geo DMG Bonus.",
        "iconUrl": "/assets/artifacts/husk-of-opulent-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Ningguang Core Synergy",
        "members": [
          "Ningguang",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "noelle",
    "name": "Noelle",
    "title": "Mondstadt 4★ GEO Support",
    "rarity": 4,
    "element": "geo",
    "weapon": "claymore",
    "region": "Mondstadt",
    "role": "Support",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/noelle/icon.png",
    "cardUrl": "/assets/characters/noelle/card.png",
    "splashUrl": "/assets/characters/noelle/splash.png",
    "description": "Noelle is a 4-star GEO claymore wielder hailing from Mondstadt. Specializes as an elite Support in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Noelle Core Synergy",
        "members": [
          "Noelle",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "odette",
    "name": "Odette",
    "title": "Snezhnaya 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "sword",
    "region": "Snezhnaya",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/odette/icon.png",
    "cardUrl": "/assets/characters/odette/card.png",
    "splashUrl": "/assets/characters/odette/splash.png",
    "description": "Odette is a 5-star CRYO sword wielder hailing from Snezhnaya. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Odette Core Synergy",
        "members": [
          "Odette",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Snezhnaya World Boss Drop",
      "localSpecialty": "Snezhnaya Regional Specialty",
      "mobDrop": "Snezhnaya Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Snezhnaya Talent Teachings / Guides",
      "weeklyBossDrop": "Snezhnaya Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "ororon",
    "name": "Ororon",
    "title": "Natlan 4★ ELECTRO Sub DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "bow",
    "region": "Natlan",
    "role": "Sub DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/ororon/icon.png",
    "cardUrl": "/assets/characters/ororon/card.png",
    "splashUrl": "/assets/characters/ororon/splash.png",
    "description": "Ororon is a 4-star ELECTRO bow wielder hailing from Natlan. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Ororon Core Synergy",
        "members": [
          "Ororon",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Natlan World Boss Drop",
      "localSpecialty": "Natlan Regional Specialty",
      "mobDrop": "Natlan Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Natlan Talent Teachings / Guides",
      "weeklyBossDrop": "Natlan Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "prune",
    "name": "Prune",
    "title": "Mondstadt 4★ ANEMO Main DPS",
    "rarity": 4,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/prune/icon.png",
    "cardUrl": "/assets/characters/prune/card.png",
    "splashUrl": "/assets/characters/prune/splash.png",
    "description": "Prune is a 4-star ANEMO catalyst wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Prune Core Synergy",
        "members": [
          "Prune",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "qiqi",
    "name": "Qiqi",
    "title": "Liyue 5★ CRYO Healer",
    "rarity": 5,
    "element": "cryo",
    "weapon": "sword",
    "region": "Liyue",
    "role": "Healer",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/qiqi/icon.png",
    "cardUrl": "/assets/characters/qiqi/card.png",
    "splashUrl": "/assets/characters/qiqi/splash.png",
    "description": "Qiqi is a 5-star CRYO sword wielder hailing from Liyue. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Freedom-Sworn",
    "bestWeapons": [
      {
        "name": "Freedom-Sworn",
        "rarity": 5,
        "description": "BiS Support: Grants team-wide Normal/Charged Attack and ATK buffs.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Qiqi Core Synergy",
        "members": [
          "Qiqi",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "raiden",
    "name": "Raiden Shogun",
    "title": "Plane of Euthymia",
    "rarity": 5,
    "element": "electro",
    "weapon": "polearm",
    "region": "Inazuma",
    "role": "Sub DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/raiden/icon.png",
    "cardUrl": "/assets/characters/raiden/card.png",
    "splashUrl": "/assets/characters/raiden/splash.png",
    "description": "The Electro Archon. Recharges entire team Bursts while dishing out devastating Musou no Hitotachi slashes, or triggers 35k+ Hyperblooms.",
    "signatureWeapon": "Engulfing Lightning",
    "bestWeapons": [
      {
        "name": "Engulfing Lightning",
        "rarity": 5,
        "description": "BiS: Converts ER% directly into ATK% and boosts ER after Burst.",
        "iconUrl": "/assets/weapons/engulfing-lightning.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Unquestionably the best F2P weapon in Genshin! +32% Burst DMG and +12% Burst Crit Rate at R5.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate",
        "count": 4,
        "description": "Supreme BiS for DPS/Battery: Converts up to 75% of ER into Elemental Burst DMG.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% (or EM for Hyperbloom)",
      "goblet": "Electro DMG Bonus or ATK% (or EM for Hyperbloom)",
      "circlet": "Crit Rate / Crit DMG (or EM for Hyperbloom)",
      "substats": [
        "Energy Recharge (220-270%)",
        "Crit Rate",
        "Crit DMG",
        "ATK%"
      ],
      "benchmarkEr": "230% - 270%",
      "benchmarkCrCd": "60% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (Leave at Lv 1)"
    ],
    "recommendedTeams": [
      {
        "name": "Raiden National (Rational)",
        "members": [
          "Raiden",
          "Xiangling",
          "Xingqiu",
          "Bennett"
        ],
        "notes": "The eternal boss-melting budget team. Raiden batteries Xiangling’s 80-cost burst while constantly triggering Overload/Vape."
      },
      {
        "name": "AFK Hyperbloom",
        "members": [
          "Raiden (Full EM)",
          "Nahida",
          "Yelan",
          "Zhongli"
        ],
        "notes": "Raiden’s E procs coordinated Electro on Dendro cores every 0.9s from infinite range."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Storm Beads (Thunder Manifestation)",
      "localSpecialty": "Amakumo Fruit (Inazuma / Seirai Island)",
      "mobDrop": "Old / Kageuchi / Famed Handguard (Nobushi)",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Light (Wed/Sat/Sun)",
      "weeklyBossDrop": "Mudra of the Malefic General"
    },
    "proTips": [
      "The Catch is permanently obtainable for FREE from the Inazuma Fishing Association in exchange for Raimei Angelfish.",
      "Her E buffs teammate Burst damage based on their Burst energy cost.",
      "During her Burst state, Raiden is completely immune to Electro-Charged interruption."
    ]
  },
  {
    "id": "razor",
    "name": "Razor",
    "title": "Mondstadt 4★ ELECTRO Main DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "claymore",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/razor/icon.png",
    "cardUrl": "/assets/characters/razor/card.png",
    "splashUrl": "/assets/characters/razor/splash.png",
    "description": "Razor is a 4-star ELECTRO claymore wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Razor Core Synergy",
        "members": [
          "Razor",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "rosaria",
    "name": "Rosaria",
    "title": "Mondstadt 4★ CRYO Sub DPS",
    "rarity": 4,
    "element": "cryo",
    "weapon": "polearm",
    "region": "Mondstadt",
    "role": "Sub DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/rosaria/icon.png",
    "cardUrl": "/assets/characters/rosaria/card.png",
    "splashUrl": "/assets/characters/rosaria/splash.png",
    "description": "Rosaria is a 4-star CRYO polearm wielder hailing from Mondstadt. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Rosaria Core Synergy",
        "members": [
          "Rosaria",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "sandrone",
    "name": "Sandrone",
    "title": "Snezhnaya 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "claymore",
    "region": "Snezhnaya",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/sandrone/icon.png",
    "cardUrl": "/assets/characters/sandrone/card.png",
    "splashUrl": "/assets/characters/sandrone/splash.png",
    "description": "Sandrone is a 5-star CRYO claymore wielder hailing from Snezhnaya. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Sandrone Core Synergy",
        "members": [
          "Sandrone",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Snezhnaya World Boss Drop",
      "localSpecialty": "Snezhnaya Regional Specialty",
      "mobDrop": "Snezhnaya Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Snezhnaya Talent Teachings / Guides",
      "weeklyBossDrop": "Snezhnaya Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "sangonomiya-kokomi",
    "name": "Sangonomiya Kokomi",
    "title": "Inazuma 5★ HYDRO Healer",
    "rarity": 5,
    "element": "hydro",
    "weapon": "catalyst",
    "region": "Inazuma",
    "role": "Healer",
    "icon": "💧",
    "avatarUrl": "/assets/characters/sangonomiya-kokomi/icon.png",
    "cardUrl": "/assets/characters/sangonomiya-kokomi/card.png",
    "splashUrl": "/assets/characters/sangonomiya-kokomi/splash.png",
    "description": "Sangonomiya Kokomi is a 5-star HYDRO catalyst wielder hailing from Inazuma. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Sangonomiya Kokomi Core Synergy",
        "members": [
          "Sangonomiya Kokomi",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "sayu",
    "name": "Sayu",
    "title": "Inazuma 4★ ANEMO Main DPS",
    "rarity": 4,
    "element": "anemo",
    "weapon": "claymore",
    "region": "Inazuma",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/sayu/icon.png",
    "cardUrl": "/assets/characters/sayu/card.png",
    "splashUrl": "/assets/characters/sayu/splash.png",
    "description": "Sayu is a 4-star ANEMO claymore wielder hailing from Inazuma. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Sayu Core Synergy",
        "members": [
          "Sayu",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "sethos",
    "name": "Sethos",
    "title": "Sumeru 4★ ELECTRO Main DPS",
    "rarity": 4,
    "element": "electro",
    "weapon": "bow",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/sethos/icon.png",
    "cardUrl": "/assets/characters/sethos/card.png",
    "splashUrl": "/assets/characters/sethos/splash.png",
    "description": "Sethos is a 4-star ELECTRO bow wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Sethos Core Synergy",
        "members": [
          "Sethos",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "shenhe",
    "name": "Shenhe",
    "title": "Liyue 5★ CRYO Buffer",
    "rarity": 5,
    "element": "cryo",
    "weapon": "polearm",
    "region": "Liyue",
    "role": "Buffer",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/shenhe/icon.png",
    "cardUrl": "/assets/characters/shenhe/card.png",
    "splashUrl": "/assets/characters/shenhe/splash.png",
    "description": "Shenhe is a 5-star CRYO polearm wielder hailing from Liyue. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Shenhe Core Synergy",
        "members": [
          "Shenhe",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "shikanoin-heizou",
    "name": "Shikanoin Heizou",
    "title": "Inazuma 4★ ANEMO Main DPS",
    "rarity": 4,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Inazuma",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/shikanoin-heizou/icon.png",
    "cardUrl": "/assets/characters/shikanoin-heizou/card.png",
    "splashUrl": "/assets/characters/shikanoin-heizou/splash.png",
    "description": "Shikanoin Heizou is a 4-star ANEMO catalyst wielder hailing from Inazuma. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Shikanoin Heizou Core Synergy",
        "members": [
          "Shikanoin Heizou",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "sigewinne",
    "name": "Sigewinne",
    "title": "Fontaine 5★ HYDRO Healer",
    "rarity": 5,
    "element": "hydro",
    "weapon": "bow",
    "region": "Fontaine",
    "role": "Healer",
    "icon": "💧",
    "avatarUrl": "/assets/characters/sigewinne/icon.png",
    "cardUrl": "/assets/characters/sigewinne/card.png",
    "splashUrl": "/assets/characters/sigewinne/splash.png",
    "description": "Sigewinne is a 5-star HYDRO bow wielder hailing from Fontaine. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Sigewinne Core Synergy",
        "members": [
          "Sigewinne",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "skirk",
    "name": "Skirk",
    "title": "Mondstadt 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/skirk/icon.png",
    "cardUrl": "/assets/characters/skirk/card.png",
    "splashUrl": "/assets/characters/skirk/splash.png",
    "description": "Skirk is a 5-star CRYO sword wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Skirk Core Synergy",
        "members": [
          "Skirk",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "sucrose",
    "name": "Sucrose",
    "title": "Mondstadt 4★ ANEMO Support",
    "rarity": 4,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Mondstadt",
    "role": "Support",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/sucrose/icon.png",
    "cardUrl": "/assets/characters/sucrose/card.png",
    "splashUrl": "/assets/characters/sucrose/splash.png",
    "description": "Sucrose is a 4-star ANEMO catalyst wielder hailing from Mondstadt. Specializes as an elite Support in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Viridescent Venerer",
        "count": 4,
        "description": "BiS: 40% elemental RES shred to the swirled element.",
        "iconUrl": "/assets/artifacts/viridescent-venerer.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Elemental Mastery",
      "circlet": "Elemental Mastery",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Sucrose Core Synergy",
        "members": [
          "Sucrose",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "tartaglia",
    "name": "Tartaglia (Childe)",
    "title": "Eleventh of the Fatui Harbingers",
    "rarity": 5,
    "element": "hydro",
    "weapon": "bow",
    "region": "Snezhnaya",
    "role": "Main DPS",
    "icon": "🗡️",
    "avatarUrl": "/assets/characters/tartaglia/icon.png",
    "cardUrl": "/assets/characters/tartaglia/card.png",
    "splashUrl": "/assets/characters/tartaglia/splash.png",
    "description": "Master warrior of Snezhnaya who switches between bow and dual Hydro daggers, triggering quadratic Riptide AoE explosions.",
    "signatureWeapon": "Polar Star",
    "bestWeapons": [
      {
        "name": "Polar Star",
        "rarity": 5,
        "description": "BiS: Provides high Crit Rate and stacking ATK% buffs on NA, CA, Skill, and Burst.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P burst option: Massively boosts Riptide and Vaporize Burst damage.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Nymph's Dream",
        "count": 4,
        "description": "BiS: Provides +30% Hydro DMG and +25% ATK stacks in melee stance.",
        "iconUrl": "/assets/artifacts/heart-of-depth.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK%",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery (~100 for Vape)"
      ],
      "benchmarkEr": "120% (Melee Burst) / 100% (Ranged Burst)",
      "benchmarkCrCd": "70% / 150%+"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "International (Top Meta Core)",
        "members": [
          "Tartaglia",
          "Xiangling",
          "Kazuha",
          "Bennett"
        ],
        "notes": "The golden standard of Genshin teams: Double Swirl with Kazuha enables massive Vaporize hits from both Childe and Xiangling."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Cleansing Heart",
      "localSpecialty": "Frostfrost Lily / Starconch",
      "mobDrop": "Fatui Skirmisher Insignias",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Freedom / Permafrost",
      "weeklyBossDrop": "Shard of a Foul Legacy"
    },
    "proTips": [
      "Cast Ranged Burst (Q) at the start of rotation to refund 20 Energy and immediately apply Riptide to all targets.",
      "Keep melee stance duration under 9-10 seconds to avoid long Skill cooldown penalties."
    ]
  },
  {
    "id": "thoma",
    "name": "Thoma",
    "title": "Inazuma 4★ PYRO Support",
    "rarity": 4,
    "element": "pyro",
    "weapon": "polearm",
    "region": "Inazuma",
    "role": "Support",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/thoma/icon.png",
    "cardUrl": "/assets/characters/thoma/card.png",
    "splashUrl": "/assets/characters/thoma/splash.png",
    "description": "Thoma is a 4-star PYRO polearm wielder hailing from Inazuma. Specializes as an elite Support in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Thoma Core Synergy",
        "members": [
          "Thoma",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "tighnari",
    "name": "Tighnari",
    "title": "Sumeru 5★ DENDRO Main DPS",
    "rarity": 5,
    "element": "dendro",
    "weapon": "bow",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/tighnari/icon.png",
    "cardUrl": "/assets/characters/tighnari/card.png",
    "splashUrl": "/assets/characters/tighnari/splash.png",
    "description": "Tighnari is a 5-star DENDRO bow wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "BiS: Shreds target Dendro RES by 30% for 8s.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery or ATK%",
      "goblet": "Dendro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Tighnari Core Synergy",
        "members": [
          "Tighnari",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "varesa",
    "name": "Varesa",
    "title": "Natlan 5★ ELECTRO Main DPS",
    "rarity": 5,
    "element": "electro",
    "weapon": "catalyst",
    "region": "Natlan",
    "role": "Main DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/varesa/icon.png",
    "cardUrl": "/assets/characters/varesa/card.png",
    "splashUrl": "/assets/characters/varesa/splash.png",
    "description": "Varesa is a 5-star ELECTRO catalyst wielder hailing from Natlan. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Varesa Core Synergy",
        "members": [
          "Varesa",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Natlan World Boss Drop",
      "localSpecialty": "Natlan Regional Specialty",
      "mobDrop": "Natlan Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Natlan Talent Teachings / Guides",
      "weeklyBossDrop": "Natlan Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "varka",
    "name": "Varka",
    "title": "Knight of Boreas & Expedition Grand Master",
    "rarity": 5,
    "element": "anemo",
    "weapon": "claymore",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🐺",
    "avatarUrl": "/assets/characters/varka/icon.png",
    "cardUrl": "/assets/characters/varka/card.png",
    "splashUrl": "/assets/characters/varka/splash.png",
    "description": "Legendary Grand Master of the Knights of Favonius who commands polar winds across the autonomous frontiers of Nod-Krai with devastating high-impact Anemo slashes.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Colossal ATK% stat boost and party-wide 40% ATK buff when striking enemies below 30% HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Tidal Shadow",
        "rarity": 4,
        "description": "Best F2P craftable: +48% ATK bonus whenever healed by party healers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Viridescent Venerer",
        "count": 4,
        "description": "BiS: 40% elemental RES shred to reacted elements with high Anemo burst scaling.",
        "iconUrl": "/assets/artifacts/viridescent-venerer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK%",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Energy Recharge (130%)"
      ],
      "benchmarkEr": "130%",
      "benchmarkCrCd": "70% / 160%+"
    },
    "talentPriority": [
      "Normal Attack (NA)",
      "Elemental Skill (E)",
      "Elemental Burst (Q)"
    ],
    "recommendedTeams": [
      {
        "name": "Polar Gale Cleave",
        "members": [
          "Varka",
          "Faruzan",
          "Furina",
          "Bennett"
        ],
        "notes": "Combines Faruzan C6 Anemo shred and Furina DMG bonus for massive 100k+ sweep swings."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sovereign Aurora Warden Core",
      "localSpecialty": "Aurora Blossom (Nod-Krai)",
      "mobDrop": "Fatui Insignias / Frontier Badges",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Aurora (Mon/Thu/Sun)",
      "weeklyBossDrop": "Sovereign Aurora Warden feather"
    },
    "proTips": [
      "Varka combines the raw physical force of a heavy claymore with swirling polar blizzards for unmatched crowd control."
    ]
  },
  {
    "id": "venti",
    "name": "Venti",
    "title": "Windborne Bard & Anemo Archon Barbatos",
    "rarity": 5,
    "element": "anemo",
    "weapon": "bow",
    "region": "Mondstadt",
    "role": "Support",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/venti/icon.png",
    "cardUrl": "/assets/characters/venti/card.png",
    "splashUrl": "/assets/characters/venti/splash.png",
    "description": "The supreme crowd-control Archon who creates an overwhelming black hole vortex, grouping all light and medium enemies while refunding 15 energy to the party.",
    "signatureWeapon": "Elegy for the End",
    "bestWeapons": [
      {
        "name": "Elegy for the End",
        "rarity": 5,
        "description": "BiS Support: Grants team +100 EM and +20% ATK on burst trigger.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P damage: Grants high EM and up to +48% Skill & Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Viridescent Venerer",
        "count": 4,
        "description": "BiS: 40% elemental RES shred to the swirled element.",
        "iconUrl": "/assets/artifacts/viridescent-venerer.png"
      }
    ],
    "statPriorities": {
      "sands": "Elemental Mastery or Energy Recharge",
      "goblet": "Elemental Mastery or Anemo DMG Bonus",
      "circlet": "Elemental Mastery or Crit Rate",
      "substats": [
        "Elemental Mastery",
        "Energy Recharge (160-180%)",
        "Crit Rate",
        "Crit DMG"
      ],
      "benchmarkEr": "170%+",
      "benchmarkCrCd": "Triple EM (EM Sands / EM Goblet / EM Circlet)"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Morgana (Classic Freeze)",
        "members": [
          "Venti",
          "Ganyu",
          "Mona",
          "Diona"
        ],
        "notes": "Venti vortex groups enemies into Ganyu icicles and Mona Omen bubble for 100% frozen lockdown."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Hurricane Seed (Anemo Hypostasis)",
      "localSpecialty": "Cecilia (Mondstadt)",
      "mobDrop": "Slime Concentrate",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Ballad (Wed/Sat/Sun)",
      "weeklyBossDrop": "Tail of Boreas (Andrius)"
    },
    "proTips": [
      "Venti refunds 15 energy to all party members of whichever element was absorbed into the vortex."
    ]
  },
  {
    "id": "vesna",
    "name": "Vesna",
    "title": "Snezhnaya 5★ ANEMO Main DPS",
    "rarity": 5,
    "element": "anemo",
    "weapon": "sword",
    "region": "Snezhnaya",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/vesna/icon.png",
    "cardUrl": "/assets/characters/vesna/card.png",
    "splashUrl": "/assets/characters/vesna/splash.png",
    "description": "Vesna is a 5-star ANEMO sword wielder hailing from Snezhnaya. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Vesna Core Synergy",
        "members": [
          "Vesna",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Snezhnaya World Boss Drop",
      "localSpecialty": "Snezhnaya Regional Specialty",
      "mobDrop": "Snezhnaya Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Snezhnaya Talent Teachings / Guides",
      "weeklyBossDrop": "Snezhnaya Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "vodyanitsa",
    "name": "Vodyanitsa",
    "title": "Snezhnaya 5★ HYDRO Main DPS",
    "rarity": 5,
    "element": "hydro",
    "weapon": "catalyst",
    "region": "Snezhnaya",
    "role": "Main DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/vodyanitsa/icon.png",
    "cardUrl": "/assets/characters/vodyanitsa/card.png",
    "splashUrl": "/assets/characters/vodyanitsa/splash.png",
    "description": "Vodyanitsa is a 5-star HYDRO catalyst wielder hailing from Snezhnaya. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe / Heart of Depth",
        "count": 4,
        "description": "BiS: Massive skill or normal attack hydro damage amplification.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Vodyanitsa Core Synergy",
        "members": [
          "Vodyanitsa",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized HYDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Snezhnaya World Boss Drop",
      "localSpecialty": "Snezhnaya Regional Specialty",
      "mobDrop": "Snezhnaya Common Mob Drop",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Snezhnaya Talent Teachings / Guides",
      "weeklyBossDrop": "Snezhnaya Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "wanderer",
    "name": "Wanderer",
    "title": "Sumeru 5★ ANEMO Main DPS",
    "rarity": 5,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Sumeru",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/wanderer/icon.png",
    "cardUrl": "/assets/characters/wanderer/card.png",
    "splashUrl": "/assets/characters/wanderer/splash.png",
    "description": "Wanderer is a 5-star ANEMO catalyst wielder hailing from Sumeru. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Wanderer Core Synergy",
        "members": [
          "Wanderer",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Sumeru World Boss Drop",
      "localSpecialty": "Sumeru Regional Specialty",
      "mobDrop": "Sumeru Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Sumeru Talent Teachings / Guides",
      "weeklyBossDrop": "Sumeru Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "wonderland-manekin",
    "name": "Wonderland Manekin",
    "title": "Mondstadt 5★ ANEMO Main DPS",
    "rarity": 5,
    "element": "anemo",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/wonderland-manekin/icon.png",
    "cardUrl": "/assets/characters/wonderland-manekin/card.png",
    "splashUrl": "/assets/characters/wonderland-manekin/splash.png",
    "description": "Wonderland Manekin is a 5-star ANEMO sword wielder hailing from Mondstadt. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Wonderland Manekin Core Synergy",
        "members": [
          "Wonderland Manekin",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mondstadt World Boss Drop",
      "localSpecialty": "Mondstadt Regional Specialty",
      "mobDrop": "Mondstadt Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Mondstadt Talent Teachings / Guides",
      "weeklyBossDrop": "Mondstadt Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "wriothesley",
    "name": "Wriothesley",
    "title": "Fontaine 5★ CRYO Main DPS",
    "rarity": 5,
    "element": "cryo",
    "weapon": "catalyst",
    "region": "Fontaine",
    "role": "Main DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/wriothesley/icon.png",
    "cardUrl": "/assets/characters/wriothesley/card.png",
    "splashUrl": "/assets/characters/wriothesley/splash.png",
    "description": "Wriothesley is a 5-star CRYO catalyst wielder hailing from Fontaine. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS: Grants +20% Crit Rate against Cryo-afflicted and +40% against Frozen targets.",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Wriothesley Core Synergy",
        "members": [
          "Wriothesley",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized CRYO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Fontaine World Boss Drop",
      "localSpecialty": "Fontaine Regional Specialty",
      "mobDrop": "Fontaine Common Mob Drop",
      "gem": "Shivada Jade"
    },
    "talentMaterials": {
      "bookName": "Fontaine Talent Teachings / Guides",
      "weeklyBossDrop": "Fontaine Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "xiangling",
    "name": "Xiangling",
    "title": "Exquisite Delicacy",
    "rarity": 4,
    "element": "pyro",
    "weapon": "polearm",
    "region": "Liyue",
    "role": "Sub DPS",
    "icon": "🥘",
    "avatarUrl": "/assets/characters/xiangling/icon.png",
    "cardUrl": "/assets/characters/xiangling/card.png",
    "splashUrl": "/assets/characters/xiangling/splash.png",
    "description": "The queen of off-field Pyro damage. Pyronado has zero internal cooldown (ICD), vaporizing every single spinning hit.",
    "signatureWeapon": "The Catch",
    "bestWeapons": [
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "BiS F2P weapon: +32% Burst DMG, +12% Burst Crit Rate, and high ER%.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate",
        "count": 4,
        "description": "Undisputed BiS: Translates her mandatory high ER into raw Pyronado damage.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or Elemental Mastery",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Energy Recharge (180-220%)",
        "Crit Rate",
        "Crit DMG",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% with Bennett, 220%+ without Bennett battery",
      "benchmarkCrCd": "60% / 130%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E - Guoba)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "National / Vaporize Teams",
        "members": [
          "Xiangling",
          "Bennett",
          "Xingqiu",
          "Raiden"
        ],
        "notes": "Bennett feeds Pyro particles into Xiangling, then Xiangling casts Pyronado inside Bennett circle to snapshot the buff."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Everflame Seed (Pyro Regisvine)",
      "localSpecialty": "Jueyun Chili (Liyue)",
      "mobDrop": "Slime Condensate / Secretions",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Diligence (Tue/Fri/Sun)",
      "weeklyBossDrop": "Dvalin’s Claw (Stormterror)"
    },
    "proTips": [
      "Unlocks 100% FREE for every new player upon clearing Spiral Abyss Chamber 3-3.",
      "Pyronado has NO ICD (Internal Cooldown), meaning every rotation can trigger Vaporize or Melt for doubled damage.",
      "Always cast Bennett Burst and Skill first, then switch to Xiangling to catch particles and snapshot the buff."
    ]
  },
  {
    "id": "xianyun",
    "name": "Xianyun",
    "title": "Liyue 5★ ANEMO Buffer",
    "rarity": 5,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Liyue",
    "role": "Buffer",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/xianyun/icon.png",
    "cardUrl": "/assets/characters/xianyun/card.png",
    "splashUrl": "/assets/characters/xianyun/splash.png",
    "description": "Xianyun is a 5-star ANEMO catalyst wielder hailing from Liyue. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Viridescent Venerer",
        "count": 4,
        "description": "BiS: 40% elemental RES shred to the swirled element.",
        "iconUrl": "/assets/artifacts/viridescent-venerer.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Elemental Mastery",
      "circlet": "Elemental Mastery",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Xianyun Core Synergy",
        "members": [
          "Xianyun",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "xiao",
    "name": "Xiao",
    "title": "Liyue 5★ ANEMO Main DPS",
    "rarity": 5,
    "element": "anemo",
    "weapon": "polearm",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/xiao/icon.png",
    "cardUrl": "/assets/characters/xiao/card.png",
    "splashUrl": "/assets/characters/xiao/splash.png",
    "description": "Xiao is a 5-star ANEMO polearm wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Xiao Core Synergy",
        "members": [
          "Xiao",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "xilonen",
    "name": "Xilonen",
    "title": "Nameless Wilds",
    "rarity": 5,
    "element": "geo",
    "weapon": "sword",
    "region": "Natlan",
    "role": "Buffer",
    "icon": "🐆",
    "avatarUrl": "/assets/characters/xilonen/icon.png",
    "cardUrl": "/assets/characters/xilonen/card.png",
    "splashUrl": "/assets/characters/xilonen/splash.png",
    "description": "Supreme universal buffer and RES shredder who roller skates in Nightsoul Blessing, shredding 36% Elemental RES and providing massive heals.",
    "signatureWeapon": "Peak Patrol Song",
    "bestWeapons": [
      {
        "name": "Peak Patrol Song",
        "rarity": 5,
        "description": "BiS: High DEF% stat and grants party-wide all-elemental DMG bonus scaling with DEF.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Flute of Ezpitzal",
        "rarity": 4,
        "description": "Best F2P craftable: Natlan forge sword granting huge DEF% and bonus DEF after casting Elemental Skill.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Premier team battery: Supplies energy particles for high-cost teammates like Xiangling or Furina.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Scroll of the Hero of Cinder City",
        "count": 4,
        "description": "BiS Support: Grants an unprecedented +40% Elemental DMG bonus to all party members of matching reacted elements.",
        "iconUrl": "/assets/artifacts/archaic-petra.png"
      }
    ],
    "statPriorities": {
      "sands": "DEF% or Energy Recharge",
      "goblet": "DEF%",
      "circlet": "DEF% or Healing Bonus / Crit Rate (for Favonius)",
      "substats": [
        "DEF%",
        "Energy Recharge (160%+)",
        "Crit Rate (if using Favonius)"
      ],
      "benchmarkEr": "160% - 180%",
      "benchmarkCrCd": "DEF 3000+ benchmark"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Universal 36% RES Shred Core",
        "members": [
          "Xilonen",
          "Neuvillette",
          "Furina",
          "Kazuha"
        ],
        "notes": "Xilonen shreds Hydro RES by 36% while Cinder City grants +40% Hydro DMG, skyrocketing hypercarry output."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Gold-Inscribed Secret Source Core",
      "localSpecialty": "Withering Purpurbloom (Natlan)",
      "mobDrop": "Saurian Fangs & Claws",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Conflict (Wed/Sat/Sun)",
      "weeklyBossDrop": "Scattered Ruins / Knave drop"
    },
    "proTips": [
      "Xilonen performs the role of an Anemo VV shredder for Pyro, Hydro, Cryo, and Electro, but without needing Swirl setups!",
      "Press Skill and hit 2 Normal Attacks to activate Sampler shred and trigger 4pc Cinder City team-wide 40% buffs."
    ]
  },
  {
    "id": "xingqiu",
    "name": "Xingqiu",
    "title": "Juvenile Galant",
    "rarity": 4,
    "element": "hydro",
    "weapon": "sword",
    "region": "Liyue",
    "role": "Sub DPS",
    "icon": "🗡️",
    "avatarUrl": "/assets/characters/xingqiu/icon.png",
    "cardUrl": "/assets/characters/xingqiu/card.png",
    "splashUrl": "/assets/characters/xingqiu/splash.png",
    "description": "The cornerstone of Hydro application, damage reduction, and interruption resistance in Genshin Impact.",
    "signatureWeapon": "Sacrificial Sword",
    "bestWeapons": [
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "description": "Golden standard BiS: Resets his long 21s Skill cooldown and generates 10 Hydro particles.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-sword.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Great battery alternative if Sacrificial Sword refinement is low.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate",
        "count": 4,
        "description": "BiS: Provides ER and directly amplifies Raincutter sword damage.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% (or ATK% if using Sac Sword R3+)",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Energy Recharge (180-210%)",
        "Crit Rate",
        "Crit DMG",
        "ATK%"
      ],
      "benchmarkEr": "180% (Sac Sword R3+), 210%+ (without Sac Sword)",
      "benchmarkCrCd": "60% / 120%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Vaporize / Bloom Driver",
        "members": [
          "Xingqiu",
          "Arlecchino",
          "Zhongli",
          "Yelan"
        ],
        "notes": "Rain swords apply relentless Hydro, enable Vaporize, and grant 40%+ damage reduction to the active character."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Cleansing Heart (Oceanid)",
      "localSpecialty": "Silk Flower (Liyue)",
      "mobDrop": "Damaged / Stained / Ominous Mask (Hilichurls)",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Gold (Wed/Sat/Sun)",
      "weeklyBossDrop": "Tail of Boreas (Andrius)"
    },
    "proTips": [
      "Orbiting Rain Swords reduce incoming damage by up to ~45% and provide high interruption resistance.",
      "Can be picked for free every year during the Lantern Rite festival in Liyue.",
      "Pairing Xingqiu with Yelan creates the famous \"Double Hydro\" core, shredding Hydro RES and battery-ing each other."
    ]
  },
  {
    "id": "xinyan",
    "name": "Xinyan",
    "title": "Liyue 4★ PYRO Main DPS",
    "rarity": 4,
    "element": "pyro",
    "weapon": "claymore",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/xinyan/icon.png",
    "cardUrl": "/assets/characters/xinyan/card.png",
    "splashUrl": "/assets/characters/xinyan/splash.png",
    "description": "Xinyan is a 4-star PYRO claymore wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Wolf's Gravestone",
    "bestWeapons": [
      {
        "name": "Wolf's Gravestone",
        "rarity": 5,
        "description": "BiS: Massive ATK% scaling and party-wide 40% ATK buff below 30% enemy HP.",
        "iconUrl": "/assets/weapons/wolfs-gravestone.png"
      },
      {
        "name": "Earth Shaker",
        "rarity": 4,
        "description": "Best F2P craftable: Significant Skill and Burst DMG buffs on elemental triggers.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      },
      {
        "name": "Favonius Greatsword",
        "rarity": 4,
        "description": "Top battery option for high-cost claymore bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-greatsword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Xinyan Core Synergy",
        "members": [
          "Xinyan",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "yae-miko",
    "name": "Yae Miko",
    "title": "Inazuma 5★ ELECTRO Sub DPS",
    "rarity": 5,
    "element": "electro",
    "weapon": "catalyst",
    "region": "Inazuma",
    "role": "Sub DPS",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/yae-miko/icon.png",
    "cardUrl": "/assets/characters/yae-miko/card.png",
    "splashUrl": "/assets/characters/yae-miko/splash.png",
    "description": "Yae Miko is a 5-star ELECTRO catalyst wielder hailing from Inazuma. Specializes as an elite Sub DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate / Thundering Fury",
        "count": 4,
        "description": "BiS: Converts ER directly into massive Burst damage or reduces Skill cooldowns.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Electro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Yae Miko Core Synergy",
        "members": [
          "Yae Miko",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ELECTRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Vajrada Amethyst"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "yanfei",
    "name": "Yanfei",
    "title": "Liyue 4★ PYRO Main DPS",
    "rarity": 4,
    "element": "pyro",
    "weapon": "catalyst",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/yanfei/icon.png",
    "cardUrl": "/assets/characters/yanfei/card.png",
    "splashUrl": "/assets/characters/yanfei/splash.png",
    "description": "Yanfei is a 4-star PYRO catalyst wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Yanfei Core Synergy",
        "members": [
          "Yanfei",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "yaoyao",
    "name": "Yaoyao",
    "title": "Liyue 4★ DENDRO Healer",
    "rarity": 4,
    "element": "dendro",
    "weapon": "polearm",
    "region": "Liyue",
    "role": "Healer",
    "icon": "🌱",
    "avatarUrl": "/assets/characters/yaoyao/icon.png",
    "cardUrl": "/assets/characters/yaoyao/card.png",
    "splashUrl": "/assets/characters/yaoyao/splash.png",
    "description": "Yaoyao is a 4-star DENDRO polearm wielder hailing from Liyue. Specializes as an elite Healer in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Ocean-Hued Clam / Maiden Beloved",
        "count": 4,
        "description": "BiS: Boosts healing output and converts overhealing into AoE physical damage bubbles.",
        "iconUrl": "/assets/artifacts/maiden-beloved.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "HP%",
      "circlet": "Healing Bonus or HP%",
      "substats": [
        "Energy Recharge (160%+)",
        "HP%",
        "DEF%"
      ],
      "benchmarkEr": "160% - 180%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Yaoyao Core Synergy",
        "members": [
          "Yaoyao",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized DENDRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Nagadus Emerald"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (160% - 180%) before maximizing Crit substats."
    ]
  },
  {
    "id": "yelan",
    "name": "Yelan",
    "title": "Valley Orchid & Secret Intelligence Agent",
    "rarity": 5,
    "element": "hydro",
    "weapon": "bow",
    "region": "Liyue",
    "role": "Sub DPS",
    "icon": "🎲",
    "avatarUrl": "/assets/characters/yelan/icon.png",
    "cardUrl": "/assets/characters/yelan/card.png",
    "splashUrl": "/assets/characters/yelan/splash.png",
    "description": "Premier off-field Hydro sub-DPS who fires coordinated Exquisite Throw water arrows while granting up to +50% ramping damage to the on-field character.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS DPS: +88.2% Crit DMG and +20% unconditional DMG bonus near enemies.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "BiS Energy F2P: Completely solves Yelan high ER requirements and batteries the party.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate",
        "count": 4,
        "description": "Supreme BiS: Grants ER% and converts up to 75% ER directly into Burst DMG.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge (if ER < 180%)",
      "goblet": "Hydro DMG Bonus or HP%",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Energy Recharge (180-210% solo Hydro)",
        "Crit Rate",
        "Crit DMG",
        "HP%"
      ],
      "benchmarkEr": "180-200% (Solo Hydro), 150-160% (Double Hydro with Xingqiu/Furina)",
      "benchmarkCrCd": "70% / 150%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Double Hydro Driver",
        "members": [
          "Yelan",
          "Xingqiu",
          "Hu Tao",
          "Zhongli"
        ],
        "notes": "Hydro resonance gives +25% Max HP, boosting both Yelan damage and Hu Tao ATK conversion."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Runic Fang (Ruin Serpent)",
      "localSpecialty": "Starconch (Liyue)",
      "mobDrop": "Fatui Skirmisher Insignias",
      "gem": "Varunada Lazurite"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Prosperity (Mon/Thu/Sun)",
      "weeklyBossDrop": "Gilded Scale (Azhdaha)"
    },
    "proTips": [
      "Her Elemental Skill sprint is the fastest overworld travel ability in the game and regenerates stamina while running.",
      "Her passive talent increases active character damage by 1% plus 3.5% every second, reaching 50% max buff."
    ]
  },
  {
    "id": "yoimiya",
    "name": "Yoimiya",
    "title": "Inazuma 5★ PYRO Main DPS",
    "rarity": 5,
    "element": "pyro",
    "weapon": "bow",
    "region": "Inazuma",
    "role": "Main DPS",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/yoimiya/icon.png",
    "cardUrl": "/assets/characters/yoimiya/card.png",
    "splashUrl": "/assets/characters/yoimiya/splash.png",
    "description": "Yoimiya is a 5-star PYRO bow wielder hailing from Inazuma. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Aqua Simulacra",
    "bestWeapons": [
      {
        "name": "Aqua Simulacra",
        "rarity": 5,
        "description": "BiS: +88.2% Crit DMG and unconditional 20% DMG bonus near targets.",
        "iconUrl": "/assets/weapons/aqua-simulacra.png"
      },
      {
        "name": "The Stringless",
        "rarity": 4,
        "description": "Best F2P reaction bow: Huge Elemental Mastery and Skill/Burst DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-stringless.png"
      },
      {
        "name": "Favonius Warbow",
        "rarity": 4,
        "description": "Premier utility bow for 100% burst uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Crimson Witch of Flames",
        "count": 4,
        "description": "BiS: Amplifies Vaporize and Melt reaction damage by +15%.",
        "iconUrl": "/assets/artifacts/crimson-witch-of-flames.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Pyro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Yoimiya Core Synergy",
        "members": [
          "Yoimiya",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized PYRO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Agnidus Agate"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "yumemizuki-mizuki",
    "name": "Yumemizuki Mizuki",
    "title": "Inazuma 5★ ANEMO Main DPS",
    "rarity": 5,
    "element": "anemo",
    "weapon": "catalyst",
    "region": "Inazuma",
    "role": "Main DPS",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/yumemizuki-mizuki/icon.png",
    "cardUrl": "/assets/characters/yumemizuki-mizuki/card.png",
    "splashUrl": "/assets/characters/yumemizuki-mizuki/splash.png",
    "description": "Yumemizuki Mizuki is a 5-star ANEMO catalyst wielder hailing from Inazuma. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Splendor of Tranquil Waters",
    "bestWeapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "rarity": 5,
        "description": "BiS: Enormous Crit scaling and skill damage amplification.",
        "iconUrl": "/assets/weapons/splendor-of-tranquil-waters.png"
      },
      {
        "name": "Sacrificial Fragments / Mappa Mare",
        "rarity": 4,
        "description": "Best F2P option: High EM and elemental damage bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      },
      {
        "name": "Favonius Codex / TTDS",
        "rarity": 3,
        "description": "Thrilling Tales of Dragon Slayers (+48% ATK buff to next active character).",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-fragments.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Gladiator / Shimenawa",
        "count": 4,
        "description": "Universal ATK% and Normal Attack DMG bonus.",
        "iconUrl": "/assets/artifacts/gladiators-finale.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Anemo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Yumemizuki Mizuki Core Synergy",
        "members": [
          "Yumemizuki Mizuki",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized ANEMO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Inazuma World Boss Drop",
      "localSpecialty": "Inazuma Regional Specialty",
      "mobDrop": "Inazuma Common Mob Drop",
      "gem": "Vayuda Turquoise"
    },
    "talentMaterials": {
      "bookName": "Inazuma Talent Teachings / Guides",
      "weeklyBossDrop": "Inazuma Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "yun-jin",
    "name": "Yun Jin",
    "title": "Liyue 4★ GEO Buffer",
    "rarity": 4,
    "element": "geo",
    "weapon": "polearm",
    "region": "Liyue",
    "role": "Buffer",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/yun-jin/icon.png",
    "cardUrl": "/assets/characters/yun-jin/card.png",
    "splashUrl": "/assets/characters/yun-jin/splash.png",
    "description": "Yun Jin is a 4-star GEO polearm wielder hailing from Liyue. Specializes as an elite Buffer in high-efficiency team synergies.",
    "signatureWeapon": "Staff of Homa",
    "bestWeapons": [
      {
        "name": "Staff of Homa",
        "rarity": 5,
        "description": "BiS: High Crit DMG and universal ATK conversion based on Max HP.",
        "iconUrl": "/assets/weapons/staff-of-homa.png"
      },
      {
        "name": "The Catch",
        "rarity": 4,
        "description": "Best F2P fishing weapon: +32% Burst DMG and +12% Burst Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Essential F2P support polearm for team energy requirements.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/the-catch.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "BiS: Grants +20% ATK to all party members for 12s following Elemental Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge% or DEF% / HP%",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (180%+)",
        "Crit Rate",
        "Elemental Mastery",
        "ATK%"
      ],
      "benchmarkEr": "180% - 200%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Yun Jin Core Synergy",
        "members": [
          "Yun Jin",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (180% - 200%) before maximizing Crit substats."
    ]
  },
  {
    "id": "zhongli",
    "name": "Zhongli",
    "title": "Vago Mundo / Rex Lapis",
    "rarity": 5,
    "element": "geo",
    "weapon": "polearm",
    "region": "Liyue",
    "role": "Support",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/zhongli/icon.png",
    "cardUrl": "/assets/characters/zhongli/card.png",
    "splashUrl": "/assets/characters/zhongli/splash.png",
    "description": "The Geo Archon. Bestows the unbreakable Jade Shield with 100% uptime, petrifies enemies, and shreds all elemental and physical resistances.",
    "signatureWeapon": "Vortex Vanquisher",
    "bestWeapons": [
      {
        "name": "Black Tassel",
        "rarity": 3,
        "description": "Premier 3-star F2P BiS for shielders: Gives massive 46.9% HP at level 90!",
        "isF2P": true,
        "iconUrl": "/assets/weapons/black-tassel.png"
      },
      {
        "name": "Favonius Lance",
        "rarity": 4,
        "description": "Generates white energy particles on Crit to fuel party bursts.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-lance.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Tenacity of the Millelith",
        "count": 4,
        "description": "+20% HP and grants +20% team ATK and +30% shield strength when Stele pulses hit.",
        "iconUrl": "/assets/artifacts/tenacity-of-the-millelith.png"
      },
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "Alternative team ATK buffer on Burst cast.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "HP%",
      "goblet": "HP% (or Geo DMG for Hybrid)",
      "circlet": "HP% (or Crit Rate for Favonius / Burst)",
      "substats": [
        "HP%",
        "HP Flat",
        "Energy Recharge (130%)",
        "Crit Rate (if using Favonius)"
      ],
      "benchmarkEr": "120% - 130%",
      "benchmarkCrCd": "Aim for 45,000 - 55,000 Max HP"
    },
    "talentPriority": [
      "Elemental Skill (Hold E - Shield)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Universal Comfort Shield",
        "members": [
          "Zhongli",
          "Arlecchino",
          "Yelan",
          "Bennett"
        ],
        "notes": "Shield allows fragile glass cannons to execute entire combos without dodging or taking fatal damage."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Basalt Pillar (Geo Hypostasis)",
      "localSpecialty": "Cor Lapis (Liyue)",
      "mobDrop": "Slime Condensate / Secretions / Concentrate",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Teachings/Guide/Philosophies of Gold (Wed/Sat/Sun)",
      "weeklyBossDrop": "Tusk of Monoceros Caeli (Childe)"
    },
    "proTips": [
      "Jade Shield has a 20-second duration with only a 12-second cooldown, giving effortless 100% shield uptime.",
      "Nearby enemies have their Elemental and Physical RES decreased by 20% while shielded—the only universal shred in the game that does not require Swirl.",
      "Hold E can instantly mine all ore deposits in a large radius around Zhongli!"
    ]
  },
  {
    "id": "zibai",
    "name": "Zibai",
    "title": "Liyue 5★ GEO Main DPS",
    "rarity": 5,
    "element": "geo",
    "weapon": "sword",
    "region": "Liyue",
    "role": "Main DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/zibai/icon.png",
    "cardUrl": "/assets/characters/zibai/card.png",
    "splashUrl": "/assets/characters/zibai/splash.png",
    "description": "Zibai is a 5-star GEO sword wielder hailing from Liyue. Specializes as an elite Main DPS in high-efficiency team synergies.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG, and elemental DMG stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Fleuve Cendre Ferryman (Pipe)",
        "rarity": 4,
        "description": "Best F2P option: High Energy Recharge and bonus Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Best battery: Generates clear energy particles for team burst consistency.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Husk of Opulent Dreams",
        "count": 4,
        "description": "BiS: Stacks DEF% and Geo DMG Bonus.",
        "iconUrl": "/assets/artifacts/husk-of-opulent-dreams.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Elemental Mastery",
        "Energy Recharge (120-140%)"
      ],
      "benchmarkEr": "120% - 140%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Zibai Core Synergy",
        "members": [
          "Zibai",
          "Bennett",
          "Kazuha",
          "Furina"
        ],
        "notes": "Synergizes with universal elemental supports for maximized GEO damage and reaction triggers."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Liyue World Boss Drop",
      "localSpecialty": "Liyue Regional Specialty",
      "mobDrop": "Liyue Common Mob Drop",
      "gem": "Prithiva Topaz"
    },
    "talentMaterials": {
      "bookName": "Liyue Talent Teachings / Guides",
      "weeklyBossDrop": "Liyue Trounce Domain Trophy"
    },
    "proTips": [
      "Maintain optimal rotation order to maximize undefined buff and damage windows.",
      "Focus on meeting benchmark Energy Recharge (120% - 140%) before maximizing Crit substats."
    ]
  },
  {
    "id": "traveler-anemo",
    "name": "Traveler (Anemo)",
    "title": "Honorary Knight of Favonius",
    "rarity": 5,
    "element": "anemo",
    "weapon": "sword",
    "region": "Mondstadt",
    "role": "Support",
    "icon": "🍃",
    "avatarUrl": "/assets/characters/traveler-anemo/icon.png",
    "cardUrl": "/assets/characters/traveler-anemo/card.png",
    "splashUrl": "/assets/characters/traveler-anemo/splash.png",
    "description": "Traveler attuned to the gentle breezes of Mondstadt. Gathers and shreds enemy resistances with swirling vortexes and provides team EM boosts.",
    "signatureWeapon": "Freedom-Sworn",
    "bestWeapons": [
      {
        "name": "Freedom-Sworn",
        "rarity": 5,
        "description": "BiS Support: Massive EM and provides party-wide Normal/Charged Attack and ATK% buffs on triggering elemental reactions.",
        "iconUrl": "/assets/weapons/freedom-sworn.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Premier F2P battery: High ER and consistent neutral energy particle generation on Crit hits.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      },
      {
        "name": "Iron Sting",
        "rarity": 4,
        "description": "Craftable F2P: High Elemental Mastery stat stick maximizing Swirl damage output.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/iron-sting.png"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "rarity": 4,
        "description": "F2P Fishing Sword: Grants vital Energy Recharge and +16% Skill Crit Rate.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Viridescent Venerer",
        "count": 4,
        "description": "Mandatory BiS: +60% Swirl DMG and shreds enemy elemental RES by 40% to the swirled element for 10s.",
        "iconUrl": "/assets/artifacts/viridescent-venerer.png"
      },
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "Alternative support set: +20% Burst DMG and grants all party members +20% ATK for 12s on Burst cast.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge or Elemental Mastery",
      "goblet": "Elemental Mastery or Anemo DMG Bonus",
      "circlet": "Elemental Mastery or Crit Rate (for Favonius)",
      "substats": [
        "Energy Recharge (160-190%)",
        "Elemental Mastery",
        "Crit Rate (if using Favonius)",
        "ATK%"
      ],
      "benchmarkEr": "160% - 190%",
      "benchmarkCrCd": "50% / 100% (Hybrid) or Full EM"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Anemo VV National",
        "members": [
          "Traveler (Anemo)",
          "Xiangling",
          "Xingqiu",
          "Bennett"
        ],
        "notes": "Infuses Palm Vortex and Gust Surge with Pyro to maximize Swirl triggers while shredding Pyro/Hydro RES for Xiangling and Xingqiu."
      },
      {
        "name": "Mondstadt Freeze Enabler",
        "members": [
          "Traveler (Anemo)",
          "Kamisato Ayaka",
          "Furina",
          "Charlotte"
        ],
        "notes": "Pulls frozen opponents into swirling cryo storms while providing continuous 4pc Viridescent Venerer Cryo RES shred."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Hurricane Seed",
      "localSpecialty": "Windwheel Aster",
      "mobDrop": "Damaged / Stained / Ominous Mask",
      "gem": "Brilliant Diamond"
    },
    "talentMaterials": {
      "bookName": "Teachings of Ballad / Resistance / Freedom",
      "weeklyBossDrop": "Dvalin's Sigh"
    },
    "proTips": [
      "Hold Palm Vortex (E) for maximum vacuum duration and elemental absorption, triggering 4pc VV resistance shred before swapping.",
      "Position Gust Surge (Burst) so the advancing tornado carries mobs against terrain or walls rather than carrying them out of your melee reach."
    ]
  },
  {
    "id": "traveler-geo",
    "name": "Traveler (Geo)",
    "title": "Resonator of the Earth",
    "rarity": 5,
    "element": "geo",
    "weapon": "sword",
    "region": "Liyue",
    "role": "Sub DPS",
    "icon": "🪨",
    "avatarUrl": "/assets/characters/traveler-geo/icon.png",
    "cardUrl": "/assets/characters/traveler-geo/card.png",
    "splashUrl": "/assets/characters/traveler-geo/splash.png",
    "description": "Traveler attuned to Liyue's bedrock. Summons massive Starfell meteorite constructs with huge burst multipliers and creates a shockwave stone zone providing party Crit Rate.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: High Base ATK, Crit DMG substat, and unconditional all-elemental DMG bonus stacks.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Primordial Jade Cutter",
        "rarity": 5,
        "description": "Top Stat Stick: Massive 44.1% Crit Rate and bonus ATK scaling based on Max HP.",
        "iconUrl": "/assets/weapons/primordial-jade-cutter.png"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "rarity": 4,
        "description": "Best F2P option: Boosts Skill Crit Rate by 16% and ensures Burst availability off-cooldown.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Harbinger of Dawn",
        "rarity": 3,
        "description": "F2P budget gem: Grants massive Crit Rate and Crit DMG when remaining above 90% HP.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/harbinger-of-dawn.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe",
        "count": 4,
        "description": "BiS Skill DPS: Up to +70% Elemental Skill DMG when off-field, turning Starfell Sword into a tactical nuke.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      },
      {
        "name": "Archaic Petra",
        "count": 2,
        "description": "Classic Geo Burst setup: Combines +15% Geo DMG with +20% Burst DMG (Noblesse 2pc).",
        "iconUrl": "/assets/artifacts/archaic-petra.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK%",
      "goblet": "Geo DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "ATK%",
        "Energy Recharge (130-150%)"
      ],
      "benchmarkEr": "130% - 150%",
      "benchmarkCrCd": "65% / 140%+"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Geo Resonance Construct Core",
        "members": [
          "Traveler (Geo)",
          "Zhongli",
          "Navia",
          "Bennett"
        ],
        "notes": "Meteorite constructs resonate with Zhongli's pillar and generate crystallize shards continuously for Navia's Rosula charges."
      },
      {
        "name": "Mono Geo Resonators",
        "members": [
          "Traveler (Geo)",
          "Arataki Itto",
          "Gorou",
          "Chiori"
        ],
        "notes": "Wake of Earth provides +10% free Crit Rate within its perimeter and activates Chiori's automaton summon via Geo constructs."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Basalt Pillar",
      "localSpecialty": "Cor Lapis",
      "mobDrop": "Damaged / Stained / Ominous Mask",
      "gem": "Brilliant Diamond"
    },
    "talentMaterials": {
      "bookName": "Teachings of Prosperity / Diligence / Gold",
      "weeklyBossDrop": "Ring of Boreas"
    },
    "proTips": [
      "Aim Starfell Sword (E) adjacent to large bosses rather than directly beneath them to prevent constructs from instantly shattering or lifting enemies away.",
      "Wake of Earth (Burst) constructs do not count against the standard 3-construct limit, allowing full synergy with Zhongli and Chiori."
    ]
  },
  {
    "id": "traveler-electro",
    "name": "Traveler (Electro)",
    "title": "Conductor of Eternity",
    "rarity": 5,
    "element": "electro",
    "weapon": "sword",
    "region": "Inazuma",
    "role": "Support",
    "icon": "⚡",
    "avatarUrl": "/assets/characters/traveler-electro/icon.png",
    "cardUrl": "/assets/characters/traveler-electro/card.png",
    "splashUrl": "/assets/characters/traveler-electro/splash.png",
    "description": "Traveler attuned to the thunderous power of Inazuma. Serves as a universal party battery, dropping Abundance Amulets that instantly refund flat energy and boost teammates' Energy Recharge.",
    "signatureWeapon": "Favonius Sword",
    "bestWeapons": [
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "BiS Battery: Highest ER scaling and team particle generation, magnifying Traveler's energy refund utility.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "description": "Reset Utility: Chance to reset Skill cooldown, allowing double deployment of Abundance Amulets.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-sword.png"
      },
      {
        "name": "Skyward Blade",
        "rarity": 5,
        "description": "5-Star Energy Engine: Generous Energy Recharge, Base ATK, and bonus Crit Rate.",
        "iconUrl": "/assets/weapons/skyward-blade.png"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "rarity": 4,
        "description": "Reliable F2P: Generates substantial Energy Recharge after casting Skill.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Emblem of Severed Fate",
        "count": 4,
        "description": "BiS Set: +20% Energy Recharge and converts up to 75% of ER into Elemental Burst DMG bonus.",
        "iconUrl": "/assets/artifacts/emblem-of-severed-fate.png"
      },
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "Universal Support: Buffs entire party ATK by 20% after casting Bellowing Thunder.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge",
      "goblet": "Electro DMG Bonus or ATK%",
      "circlet": "Crit Rate (for Favonius consistency)",
      "substats": [
        "Energy Recharge (240%+)",
        "Crit Rate",
        "ATK%",
        "Crit DMG"
      ],
      "benchmarkEr": "240% - 280%",
      "benchmarkCrCd": "50% / 100%"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Superconduct Physical Battery",
        "members": [
          "Traveler (Electro)",
          "Eula",
          "Raiden Shogun",
          "Diona"
        ],
        "notes": "Allows Eula to reliably cast her 80-cost Lightfall Sword every rotation while supplying steady Superconduct triggers."
      },
      {
        "name": "Electro-Charged Taser Core",
        "members": [
          "Traveler (Electro)",
          "Kamisato Ayato",
          "Beidou",
          "Jean"
        ],
        "notes": "Solves Beidou's extreme energy requirements completely, enabling off-field lightning chains alongside Ayato's Hydro slashes."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Storm Beads",
      "localSpecialty": "Naku Weed",
      "mobDrop": "Damaged / Stained / Ominous Mask",
      "gem": "Brilliant Diamond"
    },
    "talentMaterials": {
      "bookName": "Teachings of Transience / Elegance / Light",
      "weeklyBossDrop": "Dragon Lord's Crown"
    },
    "proTips": [
      "Lightning Blade (E) generates 3 Abundance Amulets. Swap immediately to your energy-hungry main carry (like Eula or Xiao) to pick up the amulets for a flat energy refund and ER boost.",
      "Stacking pure Energy Recharge converts directly into additional party ER buffs through the 4th Ascension passive Resounding Roar."
    ]
  },
  {
    "id": "traveler-dendro",
    "name": "Traveler (Dendro)",
    "title": "Verdant Dreamer",
    "rarity": 5,
    "element": "dendro",
    "weapon": "sword",
    "region": "Sumeru",
    "role": "Sub DPS",
    "icon": "🌿",
    "avatarUrl": "/assets/characters/traveler-dendro/icon.png",
    "cardUrl": "/assets/characters/traveler-dendro/card.png",
    "splashUrl": "/assets/characters/traveler-dendro/splash.png",
    "description": "Traveler infused with the wisdom of Sumeru's foliage. Deploys a Lea Lotus Lamp that reacts with Hydro, Electro, and Pyro to expand field coverage, trigger Hyperbloom/Burgeon, and maintain constant off-field Dendro application.",
    "signatureWeapon": "Freedom-Sworn",
    "bestWeapons": [
      {
        "name": "Sapwood Blade",
        "rarity": 4,
        "description": "BiS F2P Craftable: High ER secondary and drops Leaf of Consciousness for +120 EM to active characters on reaction.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sapwood-blade.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Top battery sword: Meets the strict 200%+ ER threshold while fueling entire team's burst rotations.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "rarity": 4,
        "description": "F2P Fishing Sword: Supplies heavy ER and extra Crit Rate for Elemental Skill Razorgrass Blade.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Freedom-Sworn",
        "rarity": 5,
        "description": "Premium Support: Massive Elemental Mastery and team ATK% & Normal Attack buff triggers.",
        "iconUrl": "/assets/weapons/freedom-sworn.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Deepwood Memories",
        "count": 4,
        "description": "Essential Dendro BiS: Shreds enemy Dendro RES by 30% for 8s on Skill/Burst hit, vastly scaling team Bloom and Spread DMG.",
        "iconUrl": "/assets/artifacts/deepwood-memories.png"
      },
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "Team ATK Support: +20% party ATK if another team member is already equipping 4pc Deepwood.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "Energy Recharge",
      "goblet": "Dendro DMG Bonus or Elemental Mastery",
      "circlet": "Crit Rate (for Favonius) or Crit DMG",
      "substats": [
        "Energy Recharge (200-220%)",
        "Crit Rate",
        "Elemental Mastery",
        "Crit DMG",
        "ATK%"
      ],
      "benchmarkEr": "200% - 220%",
      "benchmarkCrCd": "55% / 120%"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Hyperbloom Artillery Core",
        "members": [
          "Traveler (Dendro)",
          "Xingqiu",
          "Kuki Shinobu",
          "Alhaitham"
        ],
        "notes": "Creates a relentless carpet of Dendro Cores with Xingqiu while Kuki triggers rapid 30k+ homing Hyperbloom strikes."
      },
      {
        "name": "Nilou Bountiful Bloom",
        "members": [
          "Traveler (Dendro)",
          "Nilou",
          "Sangonomiya Kokomi",
          "Nahida"
        ],
        "notes": "Hydro contact expands the Lea Lotus Lamp into an enormous lotus sphere, instantly detonating cascading Bountiful Cores."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Majestic Hooked Beak",
      "localSpecialty": "Rukkhashava Mushrooms",
      "mobDrop": "Damaged / Stained / Ominous Mask",
      "gem": "Brilliant Diamond"
    },
    "talentMaterials": {
      "bookName": "Teachings of Admonition / Ingenuity / Praxis",
      "weeklyBossDrop": "Mudra of the Malefic General"
    },
    "proTips": [
      "CAUTION: Touch Hydro or Electro to your Lea Lotus Lamp FIRST before any Pyro! Contacting Pyro immediately causes the lamp to explode and vanish prematurely.",
      "Hydro transfigures the lamp into a larger radius; Electro increases its attack frequency. Both are ideal for Dendro reaction setups."
    ]
  },
  {
    "id": "traveler-hydro",
    "name": "Traveler (Hydro)",
    "title": "Fountain of Justice",
    "rarity": 5,
    "element": "hydro",
    "weapon": "sword",
    "region": "Fontaine",
    "role": "Sub DPS",
    "icon": "💧",
    "avatarUrl": "/assets/characters/traveler-hydro/icon.png",
    "cardUrl": "/assets/characters/traveler-hydro/card.png",
    "splashUrl": "/assets/characters/traveler-hydro/splash.png",
    "description": "Traveler graced by the tides of Fontaine. Unleashes pressurized torrents with rapid Aquacrest water jets and launches floating tide bubbles while toggling Fontaine's native Ousia alignment.",
    "signatureWeapon": "Primordial Jade Cutter",
    "bestWeapons": [
      {
        "name": "Primordial Jade Cutter",
        "rarity": 5,
        "description": "BiS Stat Stick: 44.1% Crit Rate and +20% HP bonus directly converting into bonus ATK.",
        "iconUrl": "/assets/weapons/primordial-jade-cutter.png"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "rarity": 4,
        "description": "Fontaine F2P BiS: High ER and boosts Skill Crit Rate by 16%, synergizing perfectly with Aquacrest Saber shots.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Team utility: Recharges Traveler's 80-cost Burst while providing team-wide white energy particles.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "description": "Dual Casts: Enables double Aquacrest torrential casts for rapid Sourcewater Droplet production.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/sacrificial-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Golden Troupe",
        "count": 4,
        "description": "BiS Skill DMG: Increases Elemental Skill DMG by up to 70%, buffing continuous Torrent Surge water jets.",
        "iconUrl": "/assets/artifacts/golden-troupe.png"
      },
      {
        "name": "Marechaussee Hunter",
        "count": 4,
        "description": "Synergy Set: Dewdrop firing consumes HP, quickly granting up to +36% free Crit Rate.",
        "iconUrl": "/assets/artifacts/marechaussee-hunter.png"
      }
    ],
    "statPriorities": {
      "sands": "HP% or Energy Recharge",
      "goblet": "Hydro DMG Bonus",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "Crit DMG",
        "HP%",
        "Energy Recharge (160-180%)",
        "Elemental Mastery"
      ],
      "benchmarkEr": "160% - 180%",
      "benchmarkCrCd": "60% / 130%+"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Fontaine Ousia Hydro Engine",
        "members": [
          "Traveler (Hydro)",
          "Furina",
          "Xiangling",
          "Bennett"
        ],
        "notes": "Sourcewater Droplet HP fluctuations grant Furina instant Fanfare points while enabling forward Vaporize triggers."
      },
      {
        "name": "Electro-Charge Swirl Tides",
        "members": [
          "Traveler (Hydro)",
          "Fischl",
          "Beidou",
          "Jean"
        ],
        "notes": "Torrent Surge triggers off-field Electro-Charged bolts from Oz and Stormbreaker alongside VV resistance shred from Jean."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Artificed Spare Clockwork Component - Coppelius",
      "localSpecialty": "Romaritime Flower",
      "mobDrop": "Damaged / Stained / Ominous Mask",
      "gem": "Brilliant Diamond"
    },
    "talentMaterials": {
      "bookName": "Teachings of Equity / Justice / Order",
      "weeklyBossDrop": "Worldspan Fern"
    },
    "proTips": [
      "Holding Aquacrest Saber (E) consumes Traveler's HP to fire higher damage Torrent Surges and creates Sourcewater Droplets on hit.",
      "Picking up Sourcewater Droplets restores HP, counteracting Dewdrop consumption and triggering HP oscillation passives."
    ]
  },
  {
    "id": "traveler-pyro",
    "name": "Traveler (Pyro)",
    "title": "Pilgrim of the Sacred Flame",
    "rarity": 5,
    "element": "pyro",
    "weapon": "sword",
    "region": "Natlan",
    "role": "Buffer",
    "icon": "🔥",
    "avatarUrl": "/assets/characters/traveler-pyro/icon.png",
    "cardUrl": "/assets/characters/traveler-pyro/card.png",
    "splashUrl": "/assets/characters/traveler-pyro/splash.png",
    "description": "Traveler ignited by the fires of Natlan. Taps into the ancient power of Nightsoul's Blessing, unleashing Blazing Scorcher flame strikes and conferring huge party elemental damage buffs via the sacred Cinder City scrolls.",
    "signatureWeapon": "Peak Patrol Song",
    "bestWeapons": [
      {
        "name": "Peak Patrol Song",
        "rarity": 5,
        "description": "BiS Support: Massive DEF substat and provides team-wide elemental DMG bonuses upon Nightsoul triggers.",
        "iconUrl": "/assets/weapons/peak-patrol-song.png"
      },
      {
        "name": "Flute of Ezpitzal",
        "rarity": 4,
        "description": "BiS Natlan Craftable: Provides immense DEF% scaling and converts DEF into bonus Elemental Skill DMG.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/flute-of-ezpitzal.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "F2P Battery: Ensures quick Burst recharge and battery capabilities for heavy Pyro carries.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "rarity": 4,
        "description": "Solid F2P option: Boosts Skill Crit Rate and ER after entering Nightsoul's Blessing.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Scroll of the Hero of Cinder City",
        "count": 4,
        "description": "BiS Support: Grants +40% Elemental DMG bonus to all party members for elements involved in Nightsoul reactions.",
        "iconUrl": "/assets/artifacts/scroll-of-the-hero-of-cinder-city.png"
      },
      {
        "name": "Obsidian Codex",
        "count": 4,
        "description": "BiS On-Field: Grants +15% DMG during Nightsoul and +40% Crit Rate upon consuming Nightsoul points.",
        "iconUrl": "/assets/artifacts/obsidian-codex.png"
      }
    ],
    "statPriorities": {
      "sands": "DEF% or Energy Recharge",
      "goblet": "Pyro DMG Bonus or DEF%",
      "circlet": "Crit Rate / Crit DMG",
      "substats": [
        "Crit Rate",
        "DEF%",
        "Energy Recharge (140-160%)",
        "Crit DMG",
        "Elemental Mastery"
      ],
      "benchmarkEr": "140% - 160%",
      "benchmarkCrCd": "60% / 120%+"
    },
    "talentPriority": [
      "Elemental Skill (E)",
      "Elemental Burst (Q)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Natlan Nightsoul Vanguard",
        "members": [
          "Traveler (Pyro)",
          "Mavuika",
          "Xilonen",
          "Kinich"
        ],
        "notes": "Enters Nightsoul's Blessing to trigger Scroll of the Hero of Cinder City, granting a massive 40% DMG boost across Pyro and Dendro."
      },
      {
        "name": "Vaporize Nightsoul Buffer",
        "members": [
          "Traveler (Pyro)",
          "Mualani",
          "Furina",
          "Xilonen"
        ],
        "notes": "Applies Pyro aura while buffing Mualani's shark bites with +40% Hydro DMG from Cinder City scroll mechanics."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Mark of the Binding Blessing",
      "localSpecialty": "Saurian Claw Succulent",
      "mobDrop": "Damaged / Stained / Ominous Mask",
      "gem": "Brilliant Diamond"
    },
    "talentMaterials": {
      "bookName": "Teachings of Conflict / Contention / Kindling",
      "weeklyBossDrop": "Denial and Judgment"
    },
    "proTips": [
      "Triggering Nightsoul reactions with 4pc Scroll of the Hero of Cinder City provides a game-changing 40% elemental damage bonus to your whole party.",
      "Scales strongly with DEF; craft and refine the Flute of Ezpitzal in Natlan for optimal F2P performance."
    ]
  },
  {
    "id": "traveler-cryo",
    "name": "Traveler (Cryo)",
    "title": "Frostbound Sovereign",
    "rarity": 5,
    "element": "cryo",
    "weapon": "sword",
    "region": "Snezhnaya",
    "role": "Sub DPS",
    "icon": "❄️",
    "avatarUrl": "/assets/characters/traveler-cryo/icon.png",
    "cardUrl": "/assets/characters/traveler-cryo/card.png",
    "splashUrl": "/assets/characters/traveler-cryo/splash.png",
    "description": "Traveler enveloped by the biting frost of Snezhnaya. Generates localized permafrost fields, freezing adversaries in their tracks and amplifying party Crit Rate through Cryo resonance.",
    "signatureWeapon": "Mistsplitter Reforged",
    "bestWeapons": [
      {
        "name": "Mistsplitter Reforged",
        "rarity": 5,
        "description": "BiS DPS: Massive Crit DMG and grants Cryo DMG bonus stacks upon dealing elemental damage.",
        "iconUrl": "/assets/weapons/mistsplitter-reforged.png"
      },
      {
        "name": "Finale of the Deep",
        "rarity": 4,
        "description": "BiS F2P Craftable: Grants hefty ATK% buffs and clears Bond of Life for additional flat ATK bonuses.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/finale-of-the-deep.png"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "rarity": 4,
        "description": "Fontaine F2P: Grants Energy Recharge and +16% Skill Crit Rate for constant Cryo rotation uptime.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/fleuve-cendre-ferryman.png"
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "description": "Support Option: High energy battery fueling off-field Cryo burst storms.",
        "isF2P": true,
        "iconUrl": "/assets/weapons/favonius-sword.png"
      }
    ],
    "bestArtifacts": [
      {
        "name": "Blizzard Strayer",
        "count": 4,
        "description": "BiS Freeze DPS: +15% Cryo DMG, +20% Crit Rate against Cryo-affected enemies, and an extra +20% if frozen (+40% total).",
        "iconUrl": "/assets/artifacts/blizzard-strayer.png"
      },
      {
        "name": "Noblesse Oblige",
        "count": 4,
        "description": "Support Set: +20% Burst DMG and +20% ATK buff to all party members after casting Frost Burst.",
        "iconUrl": "/assets/artifacts/noblesse-oblige.png"
      }
    ],
    "statPriorities": {
      "sands": "ATK% or Energy Recharge",
      "goblet": "Cryo DMG Bonus",
      "circlet": "Crit DMG",
      "substats": [
        "Crit DMG",
        "ATK%",
        "Energy Recharge (140-160%)",
        "Crit Rate (low requirement with 4pc Blizzard Strayer)"
      ],
      "benchmarkEr": "140% - 160%",
      "benchmarkCrCd": "35-45% / 180%+"
    },
    "talentPriority": [
      "Elemental Burst (Q)",
      "Elemental Skill (E)",
      "Normal Attack (NA)"
    ],
    "recommendedTeams": [
      {
        "name": "Permafrost Absolute Zero",
        "members": [
          "Traveler (Cryo)",
          "Furina",
          "Kaedehara Kazuha",
          "Escoffier"
        ],
        "notes": "Freezes targets permanently inside the blizzard storm, maximizing the +55% total Crit Rate bonus from Blizzard Strayer + Cryo Resonance."
      },
      {
        "name": "Forward Melt Vanguard",
        "members": [
          "Traveler (Cryo)",
          "Mavuika",
          "Bennett",
          "Xiangling"
        ],
        "notes": "Unleashes off-field Cryo hail storms that continuously enable 2.0x Forward Melt multipliers for Pyro carries."
      }
    ],
    "ascensionMaterials": {
      "bossDrop": "Crystalline Bloom",
      "localSpecialty": "Snezhnayan Winter Rose",
      "mobDrop": "Damaged / Stained / Ominous Mask",
      "gem": "Brilliant Diamond"
    },
    "talentMaterials": {
      "bookName": "Teachings of Frost / Glaze / Winter",
      "weeklyBossDrop": "Shadow of the Warrior"
    },
    "proTips": [
      "In Freeze teams, 4pc Blizzard Strayer + Cryo Resonance provides +55% Crit Rate, allowing you to prioritize pure Crit DMG and ATK% on artifact substats.",
      "Pre-cast Frost Burst before deploying Pyro or Hydro carries to maintain persistent elemental application throughout rotation windows."
    ]
  }
];
