import { CharacterBuild } from '@/types/genshin';

export const CHARACTERS_DATA: CharacterBuild[] = [
  {
    id: 'furina',
    name: 'Furina',
    title: 'Regina of All Waters, Kindreds, Peoples and Laws',
    rarity: 5,
    element: 'hydro',
    weapon: 'sword',
    region: 'Fontaine',
    role: 'Sub DPS',
    icon: '💧',
    avatarUrl: 'https://genshin.jmp.blue/characters/furina/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/furina/card',
    splashUrl: 'https://genshin.jmp.blue/characters/furina/gacha-splash',
    description: 'Premier off-field Hydro sub-DPS and universal damage buffer who drains party HP to provide massive team-wide fanfare buffs.',
    signatureWeapon: 'Splendor of Tranquil Waters',
    bestWeapons: [
      {
        name: 'Splendor of Tranquil Waters',
        rarity: 5,
        description: 'BiS: Provides massive Crit DMG and boosts Skill DMG & HP whenever HP fluctuates.',
        iconUrl: 'https://genshin.jmp.blue/weapons/splendor-of-tranquil-waters/icon'
      },
      {
        name: 'Fleuve Cendre Ferryman (Pipe)',
        rarity: 4,
        description: 'Best F2P option: Free Fontaine fishing sword providing much needed ER% and Skill Crit Rate.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/fleuve-cendre-ferryman/icon'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Outstanding team battery option; significantly lowers team ER requirements.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/favonius-sword/icon'
      },
      {
        name: 'Key of Khaj-Nisut',
        rarity: 5,
        description: 'Huge HP stat stick that transfers team-wide Elemental Mastery in reaction teams.',
        iconUrl: 'https://genshin.jmp.blue/weapons/key-of-khaj-nisut/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Golden Troupe',
        count: 4,
        description: 'Supreme BiS: Grants up to +70% Elemental Skill DMG when off-field.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/golden-troupe/flower-of-life'
      },
      {
        name: 'Tenacity / Vourukasha',
        count: 2,
        description: '+20% HP / +20% HP (Early transition option before full Golden Troupe).',
        iconUrl: 'https://genshin.jmp.blue/artifacts/tenacity-of-the-millelith/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'HP% or Energy Recharge (if ER < 180%)',
      goblet: 'HP% or Hydro DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Energy Recharge (until ~180-200% solo Hydro)', 'Crit Rate', 'Crit DMG', 'HP%'],
      benchmarkEr: '180% - 200% (Solo Hydro), 160% (Double Hydro with Neuvillette/Yelan)',
      benchmarkCrCd: '70% / 150%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA - Leave at Lv 1)'],
    recommendedTeams: [
      {
        name: 'Neuvillette Hypercarry',
        members: ['Neuvillette', 'Furina', 'Kazuha', 'Baizhu'],
        notes: 'Highest sustained DPS team in the game; Neuvillette HP fluctuations instantly stack Furina Fanfare.'
      },
      {
        name: 'Sunfire / National Furina',
        members: ['Furina', 'Xiangling', 'Bennett', 'Jean'],
        notes: 'Jean provides team-wide burst heal to maximize Fanfare while Bennett/Xiangling enable huge Vaporize hits.'
      },
      {
        name: 'Noelle Mono-Geo Driver',
        members: ['Noelle', 'Furina', 'Gorou', 'Chiori'],
        notes: 'Noelle heals the entire team while dealing big Geo plunge/slash damage empowered by Furina.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Water That Failed To Transcend (Hydro Tulpa)',
      localSpecialty: 'Lakelight Lily (Fontaine)',
      mobDrop: 'Whopperflower Nectar',
      gem: 'Varunada Lazurite'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Justice (Tue/Fri/Sun)',
      weeklyBossDrop: 'Lightless Silk String (All-Devouring Narwhal)'
    },
    proTips: [
      'Always pair Furina with a dedicated team-wide healer (Jean, Baizhu, Xianyun, Charlotte, or Mika) to rapidly generate 300+ Fanfare stacks.',
      'Her Salon Solitaire pets drain team HP down to 50%; do not forget to heal before entering intense combat stages.',
      'She can walk infinitely on water as long as her Skill is active!'
    ]
  },
  {
    id: 'neuvillette',
    name: 'Neuvillette',
    title: 'Ordained Arbiter',
    rarity: 5,
    element: 'hydro',
    weapon: 'catalyst',
    region: 'Fontaine',
    role: 'Main DPS',
    icon: '🌊',
    avatarUrl: 'https://genshin.jmp.blue/characters/neuvillette/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/neuvillette/card',
    splashUrl: 'https://genshin.jmp.blue/characters/neuvillette/gacha-splash',
    description: 'Iudex of Fontaine wielding devastating continuous Hydro beam Charged Attacks that self-sustain with Sourcewater Droplets.',
    signatureWeapon: 'Tome of the Eternal Flow',
    bestWeapons: [
      {
        name: 'Tome of the Eternal Flow',
        rarity: 5,
        description: 'BiS: High Crit DMG, HP% boost, and massive Charged Attack DMG buff.',
        iconUrl: 'https://genshin.jmp.blue/weapons/tome-of-the-eternal-flow/icon'
      },
      {
        name: 'Sacrificial Jade',
        rarity: 4,
        description: 'Battle Pass gem: Incredible Crit Rate and up to 64% Max HP buff at R5.',
        iconUrl: 'https://genshin.jmp.blue/weapons/sacrificial-jade/icon'
      },
      {
        name: 'Prototype Amber',
        rarity: 4,
        description: 'Amazing F2P craftable: HP% sub, generates energy and team healing.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/prototype-amber/icon'
      },
      {
        name: 'Lost Prayer',
        rarity: 5,
        description: 'Crit Rate stat stick with movement speed bonus.',
        iconUrl: 'https://genshin.jmp.blue/weapons/lost-prayer-to-the-sacred-winds/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Marechaussee Hunter',
        count: 4,
        description: 'Undisputed BiS: Grants +15% Normal/Charged DMG and +36% free Crit Rate from HP drains.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/marechaussee-hunter/flower-of-life'
      },
      {
        name: 'Heart of Depth',
        count: 4,
        description: 'Strong alternative while farming Marechaussee Hunter.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/heart-of-depth/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'HP%',
      goblet: 'Hydro DMG Bonus or HP%',
      circlet: 'Crit DMG or Crit Rate',
      substats: ['Crit DMG', 'Crit Rate (cap at ~64% with 4pc MH)', 'HP%', 'Energy Recharge (120-130%)'],
      benchmarkEr: '120% - 130%',
      benchmarkCrCd: '55-64% CR (before +36% set buff) / 200%+ CD'
    },
    talentPriority: ['Normal / Charged Attack (NA)', 'Elemental Burst (Q)', 'Elemental Skill (E)'],
    recommendedTeams: [
      {
        name: 'Fontaine Sovereign Core',
        members: ['Neuvillette', 'Furina', 'Kazuha', 'Baizhu'],
        notes: 'Double Hydro resonance boosts HP, Kazuha shreds Hydro RES, and Baizhu provides shields and team-wide heals.'
      },
      {
        name: 'Rainbow Reaction Hypercarry',
        members: ['Neuvillette', 'Zhongli', 'Kazuha', 'Fischl'],
        notes: 'Guarantees 3 Draconic Glory stacks (A1 passive) for maximum 160% Charged Attack scaling at C0.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Fontemer Horn (Millennial Pearl Seahorse)',
      localSpecialty: 'Lumitoile (Fontaine)',
      mobDrop: 'Transoceanic Pearl / Chunk (Fontemer Aberrants)',
      gem: 'Varunada Lazurite'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Equity (Mon/Thu/Sun)',
      weeklyBossDrop: 'Everamber (Guardian of Apep’s Oasis)'
    },
    proTips: [
      'At C0, bring a shielder like Zhongli or Layla to avoid getting interrupted mid-beam.',
      'Absorbing 3 Sourcewater Droplets instantly completes his Charged Attack charge up time with zero stamina cost.',
      'Remember to trigger different Hydro elemental reactions to max out his Draconic Glory passive.'
    ]
  },
  {
    id: 'arlecchino',
    name: 'Arlecchino',
    title: 'The Knave / Father',
    rarity: 5,
    element: 'pyro',
    weapon: 'polearm',
    region: 'Fontaine',
    role: 'Main DPS',
    icon: '🔥',
    avatarUrl: 'https://genshin.jmp.blue/characters/arlecchino/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/arlecchino/card',
    splashUrl: 'https://genshin.jmp.blue/characters/arlecchino/gacha-splash',
    description: 'Fourth of the Fatui Harbingers. Converts the Bond of Life mechanic into blazing Pyro-infused Normal Attacks that shred enemies.',
    signatureWeapon: 'Crimson Moon’s Semblance',
    bestWeapons: [
      {
        name: 'Crimson Moon’s Semblance',
        rarity: 5,
        description: 'BiS: Grants scythe visual, heavy Crit Rate, and +36% DMG via Bond of Life.',
        iconUrl: 'https://genshin.jmp.blue/weapons/crimson-moons-semblance/icon'
      },
      {
        name: 'Staff of Homa',
        rarity: 5,
        description: 'Massive Crit DMG and ATK boost, especially since Arlecchino often plays at mid-low HP.',
        iconUrl: 'https://genshin.jmp.blue/weapons/staff-of-homa/icon'
      },
      {
        name: 'White Tassel',
        rarity: 3,
        description: 'Top F2P sleeper: +48% Normal Attack DMG at R5 with Crit Rate substat!',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/white-tassel/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Harmonic Whimsy',
        count: 4,
        description: 'BiS: Grants up to +54% unconditional DMG increase as Bond of Life increases/decreases.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/fragment-of-harmonic-whimsy/flower-of-life'
      },
      {
        name: 'Gladiator’s Finale',
        count: 4,
        description: 'Exceptional accessible alternative: +35% Normal Attack DMG and +18% ATK.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/gladiators-finale/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'ATK% or Elemental Mastery (in Vape teams)',
      goblet: 'Pyro DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Crit Rate', 'Crit DMG', 'ATK%', 'Elemental Mastery', 'ER (~115-120%)'],
      benchmarkEr: '115% - 120%',
      benchmarkCrCd: '75% / 170%+'
    },
    talentPriority: ['Normal Attack (NA)', 'Elemental Skill (E)', 'Elemental Burst (Q)'],
    recommendedTeams: [
      {
        name: 'Arlecchino Vaporize',
        members: ['Arlecchino', 'Yelan', 'Bennett', 'Kazuha'],
        notes: 'Classic hypercarry vape. Yelan ramps damage, Kazuha shreds Pyro, Bennett caps ATK.'
      },
      {
        name: 'Overload Father',
        members: ['Arlecchino', 'Chevreuse', 'Fischl', 'Beidou'],
        notes: 'Chevreuse gives 40% Pyro & Electro shred and 40% ATK buff without needing Anemo or Bennett circle.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Fragment of a Golden Melody (Legatus Golem)',
      localSpecialty: 'Rainbow Rose (Fontaine)',
      mobDrop: 'Fatui Insignia (Recruit / Sergeant / Officer)',
      gem: 'Agnidus Agate'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Order (Wed/Sat/Sun)',
      weeklyBossDrop: 'Fading Candle (The Knave / Arlecchino Weekly Boss)'
    },
    proTips: [
      'Arlecchino CANNOT receive external healing while in combat due to her passive! Only her own Elemental Burst heals her.',
      'Use Skill (E), wait 5 seconds for Blood-Debt Due to mature, then Charged Attack to absorb maximum Bond of Life.',
      'White Tassel R5 from Liyue chests beats most 4-star polearms on her.'
    ]
  },
  {
    id: 'kazuha',
    name: 'Kaedehara Kazuha',
    title: 'Scarlet Leaves Pursue Wild Waves',
    rarity: 5,
    element: 'anemo',
    weapon: 'sword',
    region: 'Inazuma',
    role: 'Buffer',
    icon: '🍃',
    avatarUrl: 'https://genshin.jmp.blue/characters/kazuha/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/kazuha/card',
    splashUrl: 'https://genshin.jmp.blue/characters/kazuha/gacha-splash',
    description: 'The golden standard of grouping, elemental shred, and elemental DMG boosting in Genshin Impact.',
    signatureWeapon: 'Freedom-Sworn',
    bestWeapons: [
      {
        name: 'Freedom-Sworn',
        rarity: 5,
        description: 'BiS: Massive EM and triggers team-wide Normal/Plunge DMG & ATK buffs.',
        iconUrl: 'https://genshin.jmp.blue/weapons/freedom-sworn/icon'
      },
      {
        name: 'Xiphos’ Moonlight',
        rarity: 4,
        description: 'Converts Kazuha’s high EM into Energy Recharge for himself and all teammates.',
        iconUrl: 'https://genshin.jmp.blue/weapons/xiphos-moonlight/icon'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Fixes ER requirements for both Kazuha and high-cost burst teammates.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/favonius-sword/icon'
      },
      {
        name: 'Iron Sting',
        rarity: 4,
        description: 'Easy F2P craftable weapon with 165 Elemental Mastery.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/iron-sting/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Viridescent Venerer (VV)',
        count: 4,
        description: 'Absolute non-negotiable: Shreds 40% Elemental RES of the swirled element for 10 seconds.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/viridescent-venerer/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'Elemental Mastery (or ER if struggling to burst)',
      goblet: 'Elemental Mastery',
      circlet: 'Elemental Mastery',
      substats: ['Elemental Mastery', 'Energy Recharge (160-180%)', 'Crit Rate (if using Favonius)'],
      benchmarkEr: '160% - 180%',
      benchmarkCrCd: 'Aim for 900 - 1000 Total EM'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Universal Elemental Buffer',
        members: ['Kazuha', 'Neuvillette', 'Furina', 'Baizhu'],
        notes: 'Fits into nearly any Pyro, Hydro, Cryo, or Electro composition to group enemies and amplify damage.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Marionette Core (Maguu Kenki)',
      localSpecialty: 'Sea Ganoderma (Inazuma)',
      mobDrop: 'Treasure Hoarder Insignias',
      gem: 'Vayuda Turquoise'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Diligence (Tue/Fri/Sun)',
      weeklyBossDrop: 'Gilded Scale (Azhdaha)'
    },
    proTips: [
      'Each 100 EM on Kazuha grants 4% Elemental DMG bonus to swirled elements (1000 EM = 40% DMG bonus for 8s).',
      'Hold E has much larger suction radius and generates 4 particles instead of 3 from Tap E.',
      'Double Swirl trick: If an enemy has Hydro and you stand in Bennett burst (self-Pyro), Kazuha swirls BOTH elements!'
    ]
  },
  {
    id: 'nahida',
    name: 'Nahida',
    title: 'Physic of Purity / Lesser Lord Kusanali',
    rarity: 5,
    element: 'dendro',
    weapon: 'catalyst',
    region: 'Sumeru',
    role: 'Sub DPS',
    icon: '🌱',
    avatarUrl: 'https://genshin.jmp.blue/characters/nahida/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/nahida/card',
    splashUrl: 'https://genshin.jmp.blue/characters/nahida/gacha-splash',
    description: 'The Dendro Archon. Delivers continuous, high-damage Tri-Karma purification ticks and up to 250 team EM buff inside her Shrine of Maya.',
    signatureWeapon: 'A Thousand Floating Dreams',
    bestWeapons: [
      {
        name: 'A Thousand Floating Dreams',
        rarity: 5,
        description: 'BiS: High EM, party EM buffs, and personal Dendro DMG bonus.',
        iconUrl: 'https://genshin.jmp.blue/weapons/a-thousand-floating-dreams/icon'
      },
      {
        name: 'Sacrificial Fragments',
        rarity: 4,
        description: 'Huge 221 EM substat and resets skill cooldown.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/sacrificial-fragments/icon'
      },
      {
        name: 'Magic Guide',
        rarity: 3,
        description: 'Remarkably strong 3-star F2P weapon with high EM and bonus damage to Hydro/Electro.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/magic-guide/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Deepwood Memories',
        count: 4,
        description: 'Core BiS: -30% Dendro RES shred to enemies, boosting both Nahida and Bloom/Hyperbloom reactions.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/deepwood-memories/flower-of-life'
      },
      {
        name: 'Gilded Dreams',
        count: 4,
        description: 'Great choice if another character (like Kuki or Baizhu) already wears Deepwood.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/gilded-dreams/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'Elemental Mastery',
      goblet: 'Elemental Mastery or Dendro DMG Bonus',
      circlet: 'Elemental Mastery or Crit Rate / Crit DMG',
      substats: ['Elemental Mastery (aim for 800-1000)', 'Crit Rate', 'Crit DMG', 'Energy Recharge (~130%)'],
      benchmarkEr: '120% - 130%',
      benchmarkCrCd: 'Aim for 800 - 1000 EM'
    },
    talentPriority: ['Elemental Skill (E)', 'Elemental Burst (Q)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Alhaitham Quickbloom',
        members: ['Alhaitham', 'Nahida', 'Furina', 'Kuki Shinobu'],
        notes: 'One of the most powerful teams in the game, combining heavy Spread hits with 30k+ Hyperbloom missiles.'
      },
      {
        name: 'Nilou Bountiful Bloom',
        members: ['Nilou', 'Nahida', 'Kokomi', 'Collei'],
        notes: 'Produces instant-exploding Bountiful Cores that wipe out AoE mobs in seconds.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Quelled Creeper (Dendro Hypostasis)',
      localSpecialty: 'Kalpalata Lotus (Sumeru)',
      mobDrop: 'Fungi Spores / Pollen',
      gem: 'Nagadus Emerald'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Ingenuity (Tue/Fri/Sun)',
      weeklyBossDrop: 'Puppet Strings (Journeyman / Scaramouche)'
    },
    proTips: [
      'Her Hold E can scan and pick up harvestable plants and local specialties from a distance across the map!',
      'When farming Fungi Spores, avoid attacking with Pyro or Electro, or they will drop Nucleus instead of Spores.',
      'Her passive converts excess EM over 200 into up to 24% Crit Rate and 80% DMG bonus.'
    ]
  },
  {
    id: 'raiden',
    name: 'Raiden Shogun',
    title: 'Plane of Euthymia',
    rarity: 5,
    element: 'electro',
    weapon: 'polearm',
    region: 'Inazuma',
    role: 'Sub DPS',
    icon: '⚡',
    avatarUrl: 'https://genshin.jmp.blue/characters/raiden/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/raiden/card',
    splashUrl: 'https://genshin.jmp.blue/characters/raiden/gacha-splash',
    description: 'The Electro Archon. Recharges entire team Bursts while dishing out devastating Musou no Hitotachi slashes, or triggers 35k+ Hyperblooms.',
    signatureWeapon: 'Engulfing Lightning',
    bestWeapons: [
      {
        name: 'Engulfing Lightning',
        rarity: 5,
        description: 'BiS: Converts ER% directly into ATK% and boosts ER after Burst.',
        iconUrl: 'https://genshin.jmp.blue/weapons/engulfing-lightning/icon'
      },
      {
        name: 'The Catch',
        rarity: 4,
        description: 'Unquestionably the best F2P weapon in Genshin! +32% Burst DMG and +12% Burst Crit Rate at R5.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/the-catch/icon'
      },
      {
        name: 'Dragon’s Bane',
        rarity: 4,
        description: 'BiS for Hyperbloom trigger builds (maximum Elemental Mastery).',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/dragons-bane/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'Supreme BiS for DPS/Battery: Converts up to 75% of ER into Elemental Burst DMG.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/emblem-of-severed-fate/flower-of-life'
      },
      {
        name: 'Flower of Paradise Lost',
        count: 4,
        description: 'Best for pure Hyperbloom trigger builds (Full EM).',
        iconUrl: 'https://genshin.jmp.blue/artifacts/flower-of-paradise-lost/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'Energy Recharge% (or EM for Hyperbloom)',
      goblet: 'Electro DMG Bonus or ATK% (or EM for Hyperbloom)',
      circlet: 'Crit Rate / Crit DMG (or EM for Hyperbloom)',
      substats: ['Energy Recharge (220-270%)', 'Crit Rate', 'Crit DMG', 'ATK%'],
      benchmarkEr: '230% - 270%',
      benchmarkCrCd: '60% / 140%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (Leave at Lv 1)'],
    recommendedTeams: [
      {
        name: 'Raiden National (Rational)',
        members: ['Raiden', 'Xiangling', 'Xingqiu', 'Bennett'],
        notes: 'The eternal boss-melting budget team. Raiden batteries Xiangling’s 80-cost burst while constantly triggering Overload/Vape.'
      },
      {
        name: 'AFK Hyperbloom',
        members: ['Raiden (Full EM)', 'Nahida', 'Yelan', 'Zhongli'],
        notes: 'Raiden’s E procs coordinated Electro on Dendro cores every 0.9s from infinite range.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Storm Beads (Thunder Manifestation)',
      localSpecialty: 'Amakumo Fruit (Inazuma / Seirai Island)',
      mobDrop: 'Old / Kageuchi / Famed Handguard (Nobushi)',
      gem: 'Vajrada Amethyst'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Light (Wed/Sat/Sun)',
      weeklyBossDrop: 'Mudra of the Malefic General'
    },
    proTips: [
      'The Catch is permanently obtainable for FREE from the Inazuma Fishing Association in exchange for Raimei Angelfish.',
      'Her E buffs teammate Burst damage based on their Burst energy cost.',
      'During her Burst state, Raiden is completely immune to Electro-Charged interruption.'
    ]
  },
  {
    id: 'zhongli',
    name: 'Zhongli',
    title: 'Vago Mundo / Rex Lapis',
    rarity: 5,
    element: 'geo',
    weapon: 'polearm',
    region: 'Liyue',
    role: 'Support',
    icon: '🪨',
    avatarUrl: 'https://genshin.jmp.blue/characters/zhongli/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/zhongli/card',
    splashUrl: 'https://genshin.jmp.blue/characters/zhongli/gacha-splash',
    description: 'The Geo Archon. Bestows the unbreakable Jade Shield with 100% uptime, petrifies enemies, and shreds all elemental and physical resistances.',
    signatureWeapon: 'Vortex Vanquisher',
    bestWeapons: [
      {
        name: 'Black Tassel',
        rarity: 3,
        description: 'Premier 3-star F2P BiS for shielders: Gives massive 46.9% HP at level 90!',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/black-tassel/icon'
      },
      {
        name: 'Favonius Lance',
        rarity: 4,
        description: 'Generates white energy particles on Crit to fuel party bursts.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/favonius-lance/icon'
      },
      {
        name: 'Staff of Homa',
        rarity: 5,
        description: 'For hybrid burst-DPS Zhongli who drops 100k+ meatball comets.',
        iconUrl: 'https://genshin.jmp.blue/weapons/staff-of-homa/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Tenacity of the Millelith',
        count: 4,
        description: '+20% HP and grants +20% team ATK and +30% shield strength when Stele pulses hit.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/tenacity-of-the-millelith/flower-of-life'
      },
      {
        name: 'Noblesse Oblige',
        count: 4,
        description: 'Alternative team ATK buffer on Burst cast.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/noblesse-oblige/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'HP%',
      goblet: 'HP% (or Geo DMG for Hybrid)',
      circlet: 'HP% (or Crit Rate for Favonius / Burst)',
      substats: ['HP%', 'HP Flat', 'Energy Recharge (130%)', 'Crit Rate (if using Favonius)'],
      benchmarkEr: '120% - 130%',
      benchmarkCrCd: 'Aim for 45,000 - 55,000 Max HP'
    },
    talentPriority: ['Elemental Skill (Hold E - Shield)', 'Elemental Burst (Q)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Universal Comfort Shield',
        members: ['Zhongli', 'Arlecchino', 'Yelan', 'Bennett'],
        notes: 'Shield allows fragile glass cannons to execute entire combos without dodging or taking fatal damage.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Basalt Pillar (Geo Hypostasis)',
      localSpecialty: 'Cor Lapis (Liyue)',
      mobDrop: 'Slime Condensate / Secretions / Concentrate',
      gem: 'Prithiva Topaz'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Gold (Wed/Sat/Sun)',
      weeklyBossDrop: 'Tusk of Monoceros Caeli (Childe)'
    },
    proTips: [
      'Jade Shield has a 20-second duration with only a 12-second cooldown, giving effortless 100% shield uptime.',
      'Nearby enemies have their Elemental and Physical RES decreased by 20% while shielded—the only universal shred in the game that does not require Swirl.',
      'Hold E can instantly mine all ore deposits in a large radius around Zhongli!'
    ]
  },
  {
    id: 'navia',
    name: 'Navia',
    title: 'Helm of the Spina di Rosula',
    rarity: 5,
    element: 'geo',
    weapon: 'claymore',
    region: 'Fontaine',
    role: 'Main DPS',
    icon: '💛',
    avatarUrl: 'https://genshin.jmp.blue/characters/navia/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/navia/card',
    splashUrl: 'https://genshin.jmp.blue/characters/navia/gacha-splash',
    description: 'President of the Spina di Rosula. Loads Crystallize shards into her gunbrella to blast enemies with astronomical burst shotgun damage.',
    signatureWeapon: 'Verdict',
    bestWeapons: [
      {
        name: 'Verdict',
        rarity: 5,
        description: 'BiS: High base ATK, Crit Rate, and +36% Elemental Skill DMG boost via Crystallize.',
        iconUrl: 'https://genshin.jmp.blue/weapons/verdict/icon'
      },
      {
        name: 'Serpent Spine',
        rarity: 4,
        description: 'Supreme 4-star option: Grants up to +50% all DMG and Crit Rate.',
        isF2P: false,
        iconUrl: 'https://genshin.jmp.blue/weapons/serpent-spine/icon'
      },
      {
        name: 'Ultimate Overlord’s Mega Magic Sword',
        rarity: 4,
        description: 'Free event claymore: High ER% and massive flat ATK% from Melusine quests.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/ultimate-overlords-mega-magic-sword/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Nighttime Whispers in the Echoing Woods',
        count: 4,
        description: 'BiS: +18% ATK and up to +50% Geo DMG Bonus upon obtaining a Crystallize shield.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/nighttime-whispers-in-the-echoing-woods/flower-of-life'
      },
      {
        name: 'Golden Troupe',
        count: 4,
        description: 'Excellent alternative for quickswap shotgun nuke playstyles (+70% Skill DMG).',
        iconUrl: 'https://genshin.jmp.blue/artifacts/golden-troupe/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'ATK%',
      goblet: 'Geo DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Crit Rate', 'Crit DMG', 'ATK%', 'Energy Recharge (~120-130%)'],
      benchmarkEr: '120% - 130%',
      benchmarkCrCd: '75% / 160%+'
    },
    talentPriority: ['Elemental Skill (Gunbrella E)', 'Elemental Burst (Q)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Navia Double Pyro / Furina',
        members: ['Navia', 'Furina', 'Bennett', 'Zhongli'],
        notes: 'Bennett and Furina push Navia gunbrella shotguns beyond 300,000+ damage per blast.'
      },
      {
        name: 'Chiori Double Geo Core',
        members: ['Navia', 'Chiori', 'Xiangling', 'Bennett'],
        notes: 'Chiori puppets attack coordinated with Navia while generating Crystallize shards rapidly.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Artificed Spare Clockwork Component — Coppelius',
      localSpecialty: 'Spring of the First Dewdrop',
      mobDrop: 'Transoceanic Pearl / Chunk',
      gem: 'Prithiva Topaz'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Equity (Mon/Thu/Sun)',
      weeklyBossDrop: 'Lightless Silk String (All-Devouring Narwhal)'
    },
    proTips: [
      'Each Crystallize shard absorbed adds 1 Shrapnel charge (up to 6 max). Firing at 3+ charges doubles shotgun pellet count!',
      'Hold E can pull in nearby Crystallize shards like a magnet from across the battlefield.',
      'Her gunbrella fires point-blank shotgun blasts—stand right in front of bosses for 100% pellet hit connection.'
    ]
  },
  {
    id: 'bennett',
    name: 'Bennett',
    title: 'Trial by Fire',
    rarity: 4,
    element: 'pyro',
    weapon: 'sword',
    region: 'Mondstadt',
    role: 'Buffer',
    icon: '🔥',
    avatarUrl: 'https://genshin.jmp.blue/characters/bennett/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/bennett/card',
    splashUrl: 'https://genshin.jmp.blue/characters/bennett/gacha-splash',
    description: 'The premier 6-star honorary support. Fantastic Voyage provides unmatched flat ATK buffs and rapid tick healing.',
    signatureWeapon: 'Aquila Favonia',
    bestWeapons: [
      {
        name: 'Aquila Favonia / Mistsplitter',
        rarity: 5,
        description: 'Highest base ATK (674) to maximize Bennett’s flat ATK buff scaling.',
        iconUrl: 'https://genshin.jmp.blue/weapons/aquila-favonia/icon'
      },
      {
        name: 'Sapwood Blade',
        rarity: 4,
        description: 'Best craftable F2P: High base ATK (565), ER% substat, and Leaf of Consciousness buff.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/sapwood-blade/icon'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Solves all team Energy problems with ease.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/favonius-sword/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Noblesse Oblige',
        count: 4,
        description: 'Absolute non-negotiable BiS: +20% team ATK for 12 seconds after Burst cast.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/noblesse-oblige/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'Energy Recharge% (or HP% if ER > 220%)',
      goblet: 'HP%',
      circlet: 'Healing Bonus or HP%',
      substats: ['Energy Recharge (200-230%+)', 'HP%', 'HP Flat', 'Crit Rate (if Favonius)'],
      benchmarkEr: '210% - 240%',
      benchmarkCrCd: 'Prioritize reaching 220%+ ER and 30k+ HP'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'National Core',
        members: ['Bennett', 'Xiangling', 'Xingqiu', 'Raiden'],
        notes: 'Xiangling snapshots Bennett’s massive ATK buff for the entire 14-second duration of Pyronado.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Everflame Seed (Pyro Regisvine)',
      localSpecialty: 'Windwheel Aster (Mondstadt)',
      mobDrop: 'Treasure Hoarder Insignias',
      gem: 'Agnidus Agate'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Resistance (Tue/Fri/Sun)',
      weeklyBossDrop: 'Dvalin’s Plume (Stormterror)'
    },
    proTips: [
      'Bennett’s ATK buff scales ONLY from his Character Base ATK + Weapon Base ATK. Artifact ATK% does NOT increase the buff!',
      'His Burst heals up to 70% of character max HP at blistering tick speeds.',
      'His C6 converts melee normal attacks to Pyro; while great for Xiangling/Arlecchino, it overrides Physical/Chongyun/Ayaka infusions.'
    ]
  },
  {
    id: 'xiangling',
    name: 'Xiangling',
    title: 'Exquisite Delicacy',
    rarity: 4,
    element: 'pyro',
    weapon: 'polearm',
    region: 'Liyue',
    role: 'Sub DPS',
    icon: '🥘',
    avatarUrl: 'https://genshin.jmp.blue/characters/xiangling/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/xiangling/card',
    splashUrl: 'https://genshin.jmp.blue/characters/xiangling/gacha-splash',
    description: 'The queen of off-field Pyro damage. Pyronado has zero internal cooldown (ICD), vaporizing every single spinning hit.',
    signatureWeapon: 'Staff of the Scarlet Sands',
    bestWeapons: [
      {
        name: 'The Catch',
        rarity: 4,
        description: 'BiS F2P weapon: +32% Burst DMG, +12% Burst Crit Rate, and high ER%.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/the-catch/icon'
      },
      {
        name: 'Staff of the Scarlet Sands',
        rarity: 5,
        description: 'Converts EM into raw ATK with massive Crit Rate.',
        iconUrl: 'https://genshin.jmp.blue/weapons/staff-of-the-scarlet-sands/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'Undisputed BiS: Translates her mandatory high ER into raw Pyronado damage.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/emblem-of-severed-fate/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'Energy Recharge% or Elemental Mastery',
      goblet: 'Pyro DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Energy Recharge (180-220%)', 'Crit Rate', 'Crit DMG', 'Elemental Mastery', 'ATK%'],
      benchmarkEr: '180% with Bennett, 220%+ without Bennett battery',
      benchmarkCrCd: '60% / 130%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E - Guoba)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'National / Vaporize Teams',
        members: ['Xiangling', 'Bennett', 'Xingqiu', 'Raiden'],
        notes: 'Bennett feeds Pyro particles into Xiangling, then Xiangling casts Pyronado inside Bennett circle to snapshot the buff.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Everflame Seed (Pyro Regisvine)',
      localSpecialty: 'Jueyun Chili (Liyue)',
      mobDrop: 'Slime Condensate / Secretions',
      gem: 'Agnidus Agate'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Diligence (Tue/Fri/Sun)',
      weeklyBossDrop: 'Dvalin’s Claw (Stormterror)'
    },
    proTips: [
      'Unlocks 100% FREE for every new player upon clearing Spiral Abyss Chamber 3-3.',
      'Pyronado has NO ICD (Internal Cooldown), meaning every rotation can trigger Vaporize or Melt for doubled damage.',
      'Always cast Bennett Burst and Skill first, then switch to Xiangling to catch particles and snapshot the buff.'
    ]
  },
  {
    id: 'xingqiu',
    name: 'Xingqiu',
    title: 'Juvenile Galant',
    rarity: 4,
    element: 'hydro',
    weapon: 'sword',
    region: 'Liyue',
    role: 'Sub DPS',
    icon: '🗡️',
    avatarUrl: 'https://genshin.jmp.blue/characters/xingqiu/icon',
    cardUrl: 'https://genshin.jmp.blue/characters/xingqiu/card',
    splashUrl: 'https://genshin.jmp.blue/characters/xingqiu/gacha-splash',
    description: 'The cornerstone of Hydro application, damage reduction, and interruption resistance in Genshin Impact.',
    signatureWeapon: 'Sacrificial Sword',
    bestWeapons: [
      {
        name: 'Sacrificial Sword',
        rarity: 4,
        description: 'Golden standard BiS: Resets his long 21s Skill cooldown and generates 10 Hydro particles.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/sacrificial-sword/icon'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Great battery alternative if Sacrificial Sword refinement is low.',
        isF2P: true,
        iconUrl: 'https://genshin.jmp.blue/weapons/favonius-sword/icon'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'BiS: Provides ER and directly amplifies Raincutter sword damage.',
        iconUrl: 'https://genshin.jmp.blue/artifacts/emblem-of-severed-fate/flower-of-life'
      }
    ],
    statPriorities: {
      sands: 'Energy Recharge% (or ATK% if using Sac Sword R3+)',
      goblet: 'Hydro DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Energy Recharge (180-210%)', 'Crit Rate', 'Crit DMG', 'ATK%'],
      benchmarkEr: '180% (Sac Sword R3+), 210%+ (without Sac Sword)',
      benchmarkCrCd: '60% / 120%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Vaporize / Bloom Driver',
        members: ['Xingqiu', 'Arlecchino', 'Zhongli', 'Yelan'],
        notes: 'Rain swords apply relentless Hydro, enable Vaporize, and grant 40%+ damage reduction to the active character.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Cleansing Heart (Oceanid)',
      localSpecialty: 'Silk Flower (Liyue)',
      mobDrop: 'Damaged / Stained / Ominous Mask (Hilichurls)',
      gem: 'Varunada Lazurite'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Gold (Wed/Sat/Sun)',
      weeklyBossDrop: 'Tail of Boreas (Andrius)'
    },
    proTips: [
      'Orbiting Rain Swords reduce incoming damage by up to ~45% and provide high interruption resistance.',
      'Can be picked for free every year during the Lantern Rite festival in Liyue.',
      'Pairing Xingqiu with Yelan creates the famous "Double Hydro" core, shredding Hydro RES and battery-ing each other.'
    ]
  }
];
