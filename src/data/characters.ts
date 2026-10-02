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
    avatarUrl: '/assets/characters/furina/icon.png',
    cardUrl: '/assets/characters/furina/card.png',
    splashUrl: '/assets/characters/furina/splash.png',
    description: 'Premier off-field Hydro sub-DPS and universal damage buffer who drains party HP to provide massive team-wide fanfare buffs.',
    signatureWeapon: 'Splendor of Tranquil Waters',
    bestWeapons: [
      {
        name: 'Splendor of Tranquil Waters',
        rarity: 5,
        description: 'BiS: Provides massive Crit DMG and boosts Skill DMG & HP whenever HP fluctuates.',
        iconUrl: '/assets/weapons/splendor-of-tranquil-waters.png'
      },
      {
        name: 'Fleuve Cendre Ferryman (Pipe)',
        rarity: 4,
        description: 'Best F2P option: Free Fontaine fishing sword providing much needed ER% and Skill Crit Rate.',
        isF2P: true,
        iconUrl: '/assets/weapons/fleuve-cendre-ferryman.png'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Outstanding team battery option; significantly lowers team ER requirements.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Golden Troupe',
        count: 4,
        description: 'Supreme BiS: Grants up to +70% Elemental Skill DMG when off-field.',
        iconUrl: '/assets/artifacts/golden-troupe.png'
      },
      {
        name: 'Tenacity of the Millelith',
        count: 2,
        description: '+20% HP (Early transition option before full Golden Troupe).',
        iconUrl: '/assets/artifacts/tenacity-of-the-millelith.png'
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
    avatarUrl: '/assets/characters/neuvillette/icon.png',
    cardUrl: '/assets/characters/neuvillette/card.png',
    splashUrl: '/assets/characters/neuvillette/splash.png',
    description: 'Iudex of Fontaine wielding devastating continuous Hydro beam Charged Attacks that self-sustain with Sourcewater Droplets.',
    signatureWeapon: 'Tome of the Eternal Flow',
    bestWeapons: [
      {
        name: 'Tome of the Eternal Flow',
        rarity: 5,
        description: 'BiS: High Crit DMG, HP% boost, and massive Charged Attack DMG buff.',
        iconUrl: '/assets/weapons/tome-of-the-eternal-flow.png'
      },
      {
        name: 'Sacrificial Jade',
        rarity: 4,
        description: 'Battle Pass gem: Incredible Crit Rate and up to 64% Max HP buff at R5.',
        iconUrl: '/assets/weapons/sacrificial-jade.png'
      },
      {
        name: 'Prototype Amber',
        rarity: 4,
        description: 'Amazing F2P craftable: HP% sub, generates energy and team healing.',
        isF2P: true,
        iconUrl: '/assets/weapons/prototype-amber.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Marechaussee Hunter',
        count: 4,
        description: 'Undisputed BiS: Grants +15% Normal/Charged DMG and +36% free Crit Rate from HP drains.',
        iconUrl: '/assets/artifacts/marechaussee-hunter.png'
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
    avatarUrl: '/assets/characters/arlecchino/icon.png',
    cardUrl: '/assets/characters/arlecchino/card.png',
    splashUrl: '/assets/characters/arlecchino/splash.png',
    description: 'Fourth of the Fatui Harbingers. Converts the Bond of Life mechanic into blazing Pyro-infused Normal Attacks that shred enemies.',
    signatureWeapon: 'Crimson Moon’s Semblance',
    bestWeapons: [
      {
        name: 'Crimson Moon’s Semblance',
        rarity: 5,
        description: 'BiS: Grants scythe visual, heavy Crit Rate, and +36% DMG via Bond of Life.',
        iconUrl: '/assets/weapons/crimson-moons-semblance.png'
      },
      {
        name: 'White Tassel',
        rarity: 3,
        description: 'Top F2P sleeper: +48% Normal Attack DMG at R5 with Crit Rate substat!',
        isF2P: true,
        iconUrl: '/assets/weapons/white-tassel.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Harmonic Whimsy',
        count: 4,
        description: 'BiS: Grants up to +54% unconditional DMG increase as Bond of Life increases/decreases.',
        iconUrl: '/assets/artifacts/fragment-of-harmonic-whimsy.png'
      },
      {
        name: 'Gladiator’s Finale',
        count: 4,
        description: 'Exceptional accessible alternative: +35% Normal Attack DMG and +18% ATK.',
        iconUrl: '/assets/artifacts/gladiators-finale.png'
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
    avatarUrl: '/assets/characters/kazuha/icon.png',
    cardUrl: '/assets/characters/kazuha/card.png',
    splashUrl: '/assets/characters/kazuha/splash.png',
    description: 'The golden standard of grouping, elemental shred, and elemental DMG boosting in Genshin Impact.',
    signatureWeapon: 'Freedom-Sworn',
    bestWeapons: [
      {
        name: 'Freedom-Sworn',
        rarity: 5,
        description: 'BiS: Massive EM and triggers team-wide Normal/Plunge DMG & ATK buffs.',
        iconUrl: '/assets/weapons/freedom-sworn.png'
      },
      {
        name: 'Xiphos’ Moonlight',
        rarity: 4,
        description: 'Converts Kazuha’s high EM into Energy Recharge for himself and all teammates.',
        iconUrl: '/assets/weapons/xiphos-moonlight.png'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Fixes ER requirements for both Kazuha and high-cost burst teammates.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Viridescent Venerer (VV)',
        count: 4,
        description: 'Absolute non-negotiable: Shreds 40% Elemental RES of the swirled element for 10 seconds.',
        iconUrl: '/assets/artifacts/viridescent-venerer.png'
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
    avatarUrl: '/assets/characters/nahida/icon.png',
    cardUrl: '/assets/characters/nahida/card.png',
    splashUrl: '/assets/characters/nahida/splash.png',
    description: 'The Dendro Archon. Delivers continuous, high-damage Tri-Karma purification ticks and up to 250 team EM buff inside her Shrine of Maya.',
    signatureWeapon: 'A Thousand Floating Dreams',
    bestWeapons: [
      {
        name: 'A Thousand Floating Dreams',
        rarity: 5,
        description: 'BiS: High EM, party EM buffs, and personal Dendro DMG bonus.',
        iconUrl: '/assets/weapons/a-thousand-floating-dreams.png'
      },
      {
        name: 'Sacrificial Fragments',
        rarity: 4,
        description: 'Huge 221 EM substat and resets skill cooldown.',
        isF2P: true,
        iconUrl: '/assets/weapons/sacrificial-fragments.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Deepwood Memories',
        count: 4,
        description: 'Core BiS: -30% Dendro RES shred to enemies, boosting both Nahida and Bloom/Hyperbloom reactions.',
        iconUrl: '/assets/artifacts/deepwood-memories.png'
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
    avatarUrl: '/assets/characters/raiden/icon.png',
    cardUrl: '/assets/characters/raiden/card.png',
    splashUrl: '/assets/characters/raiden/splash.png',
    description: 'The Electro Archon. Recharges entire team Bursts while dishing out devastating Musou no Hitotachi slashes, or triggers 35k+ Hyperblooms.',
    signatureWeapon: 'Engulfing Lightning',
    bestWeapons: [
      {
        name: 'Engulfing Lightning',
        rarity: 5,
        description: 'BiS: Converts ER% directly into ATK% and boosts ER after Burst.',
        iconUrl: '/assets/weapons/engulfing-lightning.png'
      },
      {
        name: 'The Catch',
        rarity: 4,
        description: 'Unquestionably the best F2P weapon in Genshin! +32% Burst DMG and +12% Burst Crit Rate at R5.',
        isF2P: true,
        iconUrl: '/assets/weapons/the-catch.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'Supreme BiS for DPS/Battery: Converts up to 75% of ER into Elemental Burst DMG.',
        iconUrl: '/assets/artifacts/emblem-of-severed-fate.png'
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
    avatarUrl: '/assets/characters/zhongli/icon.png',
    cardUrl: '/assets/characters/zhongli/card.png',
    splashUrl: '/assets/characters/zhongli/splash.png',
    description: 'The Geo Archon. Bestows the unbreakable Jade Shield with 100% uptime, petrifies enemies, and shreds all elemental and physical resistances.',
    signatureWeapon: 'Vortex Vanquisher',
    bestWeapons: [
      {
        name: 'Black Tassel',
        rarity: 3,
        description: 'Premier 3-star F2P BiS for shielders: Gives massive 46.9% HP at level 90!',
        isF2P: true,
        iconUrl: '/assets/weapons/black-tassel.png'
      },
      {
        name: 'Favonius Lance',
        rarity: 4,
        description: 'Generates white energy particles on Crit to fuel party bursts.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-lance.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Tenacity of the Millelith',
        count: 4,
        description: '+20% HP and grants +20% team ATK and +30% shield strength when Stele pulses hit.',
        iconUrl: '/assets/artifacts/tenacity-of-the-millelith.png'
      },
      {
        name: 'Noblesse Oblige',
        count: 4,
        description: 'Alternative team ATK buffer on Burst cast.',
        iconUrl: '/assets/artifacts/noblesse-oblige.png'
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
    avatarUrl: '/assets/characters/navia/icon.png',
    cardUrl: '/assets/characters/navia/card.png',
    splashUrl: '/assets/characters/navia/splash.png',
    description: 'President of the Spina di Rosula. Loads Crystallize shards into her gunbrella to blast enemies with astronomical burst shotgun damage.',
    signatureWeapon: 'Verdict',
    bestWeapons: [
      {
        name: 'Verdict',
        rarity: 5,
        description: 'BiS: High base ATK, Crit Rate, and +36% Elemental Skill DMG boost via Crystallize.',
        iconUrl: '/assets/weapons/verdict.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Golden Troupe',
        count: 4,
        description: 'Excellent alternative for quickswap shotgun nuke playstyles (+70% Skill DMG).',
        iconUrl: '/assets/artifacts/golden-troupe.png'
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
    avatarUrl: '/assets/characters/bennett/icon.png',
    cardUrl: '/assets/characters/bennett/card.png',
    splashUrl: '/assets/characters/bennett/splash.png',
    description: 'The premier 6-star honorary support. Fantastic Voyage provides unmatched flat ATK buffs and rapid tick healing.',
    signatureWeapon: 'Aquila Favonia',
    bestWeapons: [
      {
        name: 'Sapwood Blade',
        rarity: 4,
        description: 'Best craftable F2P: High base ATK (565), ER% substat, and Leaf of Consciousness buff.',
        isF2P: true,
        iconUrl: '/assets/weapons/sapwood-blade.png'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Solves all team Energy problems with ease.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Noblesse Oblige',
        count: 4,
        description: 'Absolute non-negotiable BiS: +20% team ATK for 12 seconds after Burst cast.',
        iconUrl: '/assets/artifacts/noblesse-oblige.png'
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
    avatarUrl: '/assets/characters/xiangling/icon.png',
    cardUrl: '/assets/characters/xiangling/card.png',
    splashUrl: '/assets/characters/xiangling/splash.png',
    description: 'The queen of off-field Pyro damage. Pyronado has zero internal cooldown (ICD), vaporizing every single spinning hit.',
    signatureWeapon: 'The Catch',
    bestWeapons: [
      {
        name: 'The Catch',
        rarity: 4,
        description: 'BiS F2P weapon: +32% Burst DMG, +12% Burst Crit Rate, and high ER%.',
        isF2P: true,
        iconUrl: '/assets/weapons/the-catch.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'Undisputed BiS: Translates her mandatory high ER into raw Pyronado damage.',
        iconUrl: '/assets/artifacts/emblem-of-severed-fate.png'
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
    avatarUrl: '/assets/characters/xingqiu/icon.png',
    cardUrl: '/assets/characters/xingqiu/card.png',
    splashUrl: '/assets/characters/xingqiu/splash.png',
    description: 'The cornerstone of Hydro application, damage reduction, and interruption resistance in Genshin Impact.',
    signatureWeapon: 'Sacrificial Sword',
    bestWeapons: [
      {
        name: 'Sacrificial Sword',
        rarity: 4,
        description: 'Golden standard BiS: Resets his long 21s Skill cooldown and generates 10 Hydro particles.',
        isF2P: true,
        iconUrl: '/assets/weapons/sacrificial-sword.png'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Great battery alternative if Sacrificial Sword refinement is low.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'BiS: Provides ER and directly amplifies Raincutter sword damage.',
        iconUrl: '/assets/artifacts/emblem-of-severed-fate.png'
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
  },
  // ==========================================
  // NATLAN CHARACTERS (VERSION 5.0)
  // ==========================================
  {
    id: 'mualani',
    name: 'Mualani',
    title: 'Splish-Splash Wavechaser',
    rarity: 5,
    element: 'hydro',
    weapon: 'catalyst',
    region: 'Natlan',
    role: 'Main DPS',
    icon: '🌊',
    avatarUrl: '/assets/characters/mualani/icon.png',
    cardUrl: '/assets/characters/mualani/card.png',
    splashUrl: '/assets/characters/mualani/splash.png',
    description: 'Nightsoul-blessed Hydro catalyst hypercarry who surfs on Sharky to stack Wavechaser bites, delivering massive single-hit Forward Vaporize bursts.',
    signatureWeapon: "Surf's Up",
    bestWeapons: [
      {
        name: "Surf's Up",
        rarity: 5,
        description: 'BiS: High Crit DMG, bonus Max HP, and massive Normal Attack DMG bonus during Nightsoul Blessing.',
        iconUrl: '/assets/weapons/splendor-of-tranquil-waters.png'
      },
      {
        name: 'Ring of Yaxche',
        rarity: 4,
        description: 'Best F2P craftable: Natlan forge catalyst that converts Max HP directly into Normal Attack DMG bonus.',
        isF2P: true,
        iconUrl: '/assets/weapons/fleuve-cendre-ferryman.png'
      },
      {
        name: 'Sacrificial Jade',
        rarity: 4,
        description: 'Battle Pass standout: Enormous Crit Rate and +64% HP boost when off-field between surf rotations.',
        iconUrl: '/assets/weapons/sacrificial-fragments.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Obsidian Codex',
        count: 4,
        description: 'BiS: Grants +15% DMG during Nightsoul and a game-breaking +40% Crit Rate upon consuming Nightsoul points.',
        iconUrl: '/assets/artifacts/golden-troupe.png'
      }
    ],
    statPriorities: {
      sands: 'HP% or Elemental Mastery',
      goblet: 'Hydro DMG Bonus or HP%',
      circlet: 'Crit DMG (due to 40% free Crit Rate from Obsidian Codex)',
      substats: ['Crit DMG', 'Elemental Mastery (120-200 for Vape)', 'HP%', 'Energy Recharge (120%)'],
      benchmarkEr: '115% - 125%',
      benchmarkCrCd: '50% / 220%+ (with 4pc Obsidian Codex)'
    },
    talentPriority: ['Elemental Skill (E)', 'Elemental Burst (Q)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Forward Vaporize Shark Bomb',
        members: ['Mualani', 'Xiangling', 'Zhongli', 'Furina'],
        notes: 'Xiangling applies off-field Pyro while Mualani surfs into enemies to trigger 300k+ Forward Vaporize Sharky bites.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Mark of the Binding Blessing',
      localSpecialty: 'Saurian Claw Succulent (Natlan)',
      mobDrop: 'Saurian Fangs & Claws',
      gem: 'Varunada Lazurite'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Contention (Mon/Thu/Sun)',
      weeklyBossDrop: 'Lord of Primal Fire horn'
    },
    proTips: [
      'Surfing into enemies marks them with Wavechaser stacks. Always bite at 3 full stacks for exponential damage multipliers.',
      '4-piece Obsidian Codex gives 40% free Crit Rate during Nightsoul, making Crit DMG circlets mandatory.'
    ]
  },
  {
    id: 'kinich',
    name: 'Kinich',
    title: 'Turnfire Hunt',
    rarity: 5,
    element: 'dendro',
    weapon: 'claymore',
    region: 'Natlan',
    role: 'Main DPS',
    icon: '🦖',
    avatarUrl: '/assets/characters/kinich/icon.png',
    cardUrl: '/assets/characters/kinich/card.png',
    splashUrl: '/assets/characters/kinich/splash.png',
    description: 'Acrobatic Dendro claymore DPS who tethers to targets with Yumkasaurus grappling hooks, firing lethal Scalespiker Cannon shots.',
    signatureWeapon: 'Fang of the Mountain King',
    bestWeapons: [
      {
        name: 'Fang of the Mountain King',
        rarity: 5,
        description: 'BiS: High Base ATK, Crit Rate, and massive stacking Skill & Burst damage when triggering Burning or Burgeon.',
        iconUrl: '/assets/weapons/wolfs-gravestone.png'
      },
      {
        name: 'Earth Shaker',
        rarity: 4,
        description: 'Best F2P craftable: Natlan forge claymore boosting Elemental Skill DMG by up to 32% after triggering Pyro reactions.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-greatsword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Obsidian Codex',
        count: 4,
        description: 'BiS: Provides +40% Crit Rate in Nightsoul state, maximizing consistency on giant Scalespiker cannon hits.',
        iconUrl: '/assets/artifacts/deepwood-memories.png'
      },
      {
        name: 'Unfinished Reverie',
        count: 4,
        description: 'Alternative: Provides a massive +50% unconditional DMG bonus in Burning reaction teams.',
        iconUrl: '/assets/artifacts/gilded-dreams.png'
      }
    ],
    statPriorities: {
      sands: 'ATK%',
      goblet: 'Dendro DMG Bonus',
      circlet: 'Crit DMG / Crit Rate',
      substats: ['Crit DMG', 'Crit Rate', 'ATK%', 'Energy Recharge (~120%)'],
      benchmarkEr: '115% - 130%',
      benchmarkCrCd: '60% / 160%+'
    },
    talentPriority: ['Elemental Skill (E)', 'Elemental Burst (Q)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Kinich Burning Cannon',
        members: ['Kinich', 'Bennett', 'Xiangling', 'Emilie'],
        notes: 'Burning triggers fast Nightsoul point regeneration, enabling Kinich to fire 4 to 5 Scalespiker cannons per rotation.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Overripe Flamegranate',
      localSpecialty: 'Quenepa Berry (Natlan)',
      mobDrop: 'Saurian Fangs & Claws',
      gem: 'Nagadus Emerald'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Kindling (Tue/Fri/Sun)',
      weeklyBossDrop: 'All-Devouring Narwhal drop'
    },
    proTips: [
      'Grapple around the target and circle into the blind spot zones to gain 3 bonus Nightsoul points instantly.',
      'Fire the Scalespiker cannon immediately upon reaching 20 Nightsoul points for maximum DPS uptime.'
    ]
  },
  {
    id: 'xilonen',
    name: 'Xilonen',
    title: 'Nameless Wilds',
    rarity: 5,
    element: 'geo',
    weapon: 'sword',
    region: 'Natlan',
    role: 'Buffer',
    icon: '🐆',
    avatarUrl: '/assets/characters/xilonen/icon.png',
    cardUrl: '/assets/characters/xilonen/card.png',
    splashUrl: '/assets/characters/xilonen/splash.png',
    description: 'Supreme universal buffer and RES shredder who roller skates in Nightsoul Blessing, shredding 36% Elemental RES and providing massive heals.',
    signatureWeapon: 'Peak Patrol Song',
    bestWeapons: [
      {
        name: 'Peak Patrol Song',
        rarity: 5,
        description: 'BiS: High DEF% stat and grants party-wide all-elemental DMG bonus scaling with DEF.',
        iconUrl: '/assets/weapons/splendor-of-tranquil-waters.png'
      },
      {
        name: 'Flute of Ezpitzal',
        rarity: 4,
        description: 'Best F2P craftable: Natlan forge sword granting huge DEF% and bonus DEF after casting Elemental Skill.',
        isF2P: true,
        iconUrl: '/assets/weapons/fleuve-cendre-ferryman.png'
      },
      {
        name: 'Favonius Sword',
        rarity: 4,
        description: 'Premier team battery: Supplies energy particles for high-cost teammates like Xiangling or Furina.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Scroll of the Hero of Cinder City',
        count: 4,
        description: 'BiS Support: Grants an unprecedented +40% Elemental DMG bonus to all party members of matching reacted elements.',
        iconUrl: '/assets/artifacts/archaic-petra.png'
      }
    ],
    statPriorities: {
      sands: 'DEF% or Energy Recharge',
      goblet: 'DEF%',
      circlet: 'DEF% or Healing Bonus / Crit Rate (for Favonius)',
      substats: ['DEF%', 'Energy Recharge (160%+)', 'Crit Rate (if using Favonius)'],
      benchmarkEr: '160% - 180%',
      benchmarkCrCd: 'DEF 3000+ benchmark'
    },
    talentPriority: ['Elemental Skill (E)', 'Elemental Burst (Q)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Universal 36% RES Shred Core',
        members: ['Xilonen', 'Neuvillette', 'Furina', 'Kazuha'],
        notes: 'Xilonen shreds Hydro RES by 36% while Cinder City grants +40% Hydro DMG, skyrocketing hypercarry output.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Gold-Inscribed Secret Source Core',
      localSpecialty: 'Withering Purpurbloom (Natlan)',
      mobDrop: 'Saurian Fangs & Claws',
      gem: 'Prithiva Topaz'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Conflict (Wed/Sat/Sun)',
      weeklyBossDrop: 'Scattered Ruins / Knave drop'
    },
    proTips: [
      'Xilonen performs the role of an Anemo VV shredder for Pyro, Hydro, Cryo, and Electro, but without needing Swirl setups!',
      'Press Skill and hit 2 Normal Attacks to activate Sampler shred and trigger 4pc Cinder City team-wide 40% buffs.'
    ]
  },
  {
    id: 'mavuika',
    name: 'Mavuika',
    title: 'Habitation of the Blazing Sun',
    rarity: 5,
    element: 'pyro',
    weapon: 'claymore',
    region: 'Natlan',
    role: 'Main DPS',
    icon: '🔥',
    avatarUrl: '/assets/characters/mavuika/icon.png',
    cardUrl: '/assets/characters/mavuika/card.png',
    splashUrl: '/assets/characters/mavuika/splash.png',
    description: 'Pyro Archon of Natlan. Commands the eternal Sacred Flame with motorcycle-powered combat sweeps, persistent off-field Pyro, and devastating Nightsoul bursts.',
    signatureWeapon: 'A Thousand Blazing Suns',
    bestWeapons: [
      {
        name: 'A Thousand Blazing Suns',
        rarity: 5,
        description: 'BiS: Provides immense Crit Rate and boosts ATK & Crit DMG when entering Nightsoul Blessing.',
        iconUrl: '/assets/weapons/wolfs-gravestone.png'
      },
      {
        name: 'Earth Shaker',
        rarity: 4,
        description: 'Best F2P craftable: Excellent Skill & Burst amplifier after triggering Pyro reactions.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-greatsword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Obsidian Codex',
        count: 4,
        description: 'BiS for on-field: +40% Crit Rate during Nightsoul Blessing.',
        iconUrl: '/assets/artifacts/crimson-witch-of-flames.png'
      }
    ],
    statPriorities: {
      sands: 'ATK% or Elemental Mastery',
      goblet: 'Pyro DMG Bonus',
      circlet: 'Crit DMG / Crit Rate',
      substats: ['Crit DMG', 'Crit Rate', 'ATK%', 'Elemental Mastery'],
      benchmarkEr: '130%',
      benchmarkCrCd: '65% / 180%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Archon Sunfire Vaporize',
        members: ['Mavuika', 'Furina', 'Xilonen', 'Bennett'],
        notes: 'Combines Xilonen RES shred, Furina fanfare buffs, and Bennett flat ATK for apocalyptic Pyro cleaves.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Lord of Primal Fire core',
      localSpecialty: 'Sprayfeather Gill (Natlan)',
      mobDrop: 'Saurian Fangs & Claws',
      gem: 'Agnidus Agate'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Contention (Mon/Thu/Sun)',
      weeklyBossDrop: 'Lord of Primal Fire crown'
    },
    proTips: [
      'Maintains permanent Pyro aura on enemies, making her the premier Pyro enabler in the entire game.'
    ]
  },

  // ==========================================
  // NOD-KRAI CHARACTERS (VERSION 6.0)
  // ==========================================
  {
    id: 'varka',
    name: 'Varka',
    title: 'Knight of Boreas & Expedition Grand Master',
    rarity: 5,
    element: 'anemo',
    weapon: 'claymore',
    region: 'Nod-Krai',
    role: 'Main DPS',
    icon: '🐺',
    avatarUrl: '/assets/characters/varka/icon.png',
    cardUrl: '/assets/characters/varka/card.png',
    splashUrl: '/assets/characters/varka/splash.png',
    description: 'Legendary Grand Master of the Knights of Favonius who commands polar winds across the autonomous frontiers of Nod-Krai with devastating high-impact Anemo slashes.',
    signatureWeapon: "Wolf's Gravestone",
    bestWeapons: [
      {
        name: "Wolf's Gravestone",
        rarity: 5,
        description: 'BiS: Colossal ATK% stat boost and party-wide 40% ATK buff when striking enemies below 30% HP.',
        iconUrl: '/assets/weapons/wolfs-gravestone.png'
      },
      {
        name: 'Tidal Shadow',
        rarity: 4,
        description: 'Best F2P craftable: +48% ATK bonus whenever healed by party healers.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-greatsword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Viridescent Venerer',
        count: 4,
        description: 'BiS: 40% elemental RES shred to reacted elements with high Anemo burst scaling.',
        iconUrl: '/assets/artifacts/viridescent-venerer.png'
      }
    ],
    statPriorities: {
      sands: 'ATK%',
      goblet: 'Anemo DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Crit Rate', 'Crit DMG', 'ATK%', 'Energy Recharge (130%)'],
      benchmarkEr: '130%',
      benchmarkCrCd: '70% / 160%+'
    },
    talentPriority: ['Normal Attack (NA)', 'Elemental Skill (E)', 'Elemental Burst (Q)'],
    recommendedTeams: [
      {
        name: 'Polar Gale Cleave',
        members: ['Varka', 'Faruzan', 'Furina', 'Bennett'],
        notes: 'Combines Faruzan C6 Anemo shred and Furina DMG bonus for massive 100k+ sweep swings.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Sovereign Aurora Warden Core',
      localSpecialty: 'Aurora Blossom (Nod-Krai)',
      mobDrop: 'Fatui Insignias / Frontier Badges',
      gem: 'Vayuda Turquoise'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Aurora (Mon/Thu/Sun)',
      weeklyBossDrop: 'Sovereign Aurora Warden feather'
    },
    proTips: [
      'Varka combines the raw physical force of a heavy claymore with swirling polar blizzards for unmatched crowd control.'
    ]
  },
  {
    id: 'alva',
    name: 'Alva',
    title: 'High Steppe Vanguard',
    rarity: 4,
    element: 'cryo',
    weapon: 'polearm',
    region: 'Nod-Krai',
    role: 'Sub DPS',
    icon: '❄️',
    avatarUrl: '/assets/characters/alva/icon.png',
    cardUrl: '/assets/characters/alva/card.png',
    splashUrl: '/assets/characters/alva/splash.png',
    description: 'Frontier ranger who sets Cryo tripwires and launches rapid piercing spears across the autonomous frontier.',
    signatureWeapon: 'The Catch',
    bestWeapons: [
      {
        name: 'The Catch',
        rarity: 4,
        description: 'BiS F2P: Free fishing polearm granting +32% Burst DMG and +12% Burst Crit Rate.',
        isF2P: true,
        iconUrl: '/assets/weapons/the-catch.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'BiS: Converts ER into relentless off-field Cryo burst strikes.',
        iconUrl: '/assets/artifacts/emblem-of-severed-fate.png'
      }
    ],
    statPriorities: {
      sands: 'Energy Recharge% or ATK%',
      goblet: 'Cryo DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Energy Recharge (180%)', 'Crit Rate', 'Crit DMG', 'ATK%'],
      benchmarkEr: '180%+',
      benchmarkCrCd: '60% / 120%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Melt / Freeze Enabler',
        members: ['Alva', 'Xiangling', 'Bennett', 'Kazuha'],
        notes: 'Provides high-frequency off-field Cryo application for Melt teams.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Sovereign Aurora Warden Core',
      localSpecialty: 'Aurora Blossom (Nod-Krai)',
      mobDrop: 'Operative Pocket Watch',
      gem: 'Shivada Jade'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Frontier (Tue/Fri/Sun)',
      weeklyBossDrop: 'Sovereign Aurora Warden feather'
    },
    proTips: [
      'Alva is one of the easiest 4-stars to build using standard Emblem of Severed Fate pieces and The Catch.'
    ]
  },

  // ==========================================
  // SNEZHNAYA CHARACTERS (VERSION 7.0 - AUG 2026)
  // ==========================================
  {
    id: 'tartaglia',
    name: 'Tartaglia (Childe)',
    title: 'Eleventh of the Fatui Harbingers',
    rarity: 5,
    element: 'hydro',
    weapon: 'bow',
    region: 'Snezhnaya',
    role: 'Main DPS',
    icon: '🗡️',
    avatarUrl: '/assets/characters/tartaglia/icon.png',
    cardUrl: '/assets/characters/tartaglia/card.png',
    splashUrl: '/assets/characters/tartaglia/splash.png',
    description: 'Master warrior of Snezhnaya who switches between bow and dual Hydro daggers, triggering quadratic Riptide AoE explosions.',
    signatureWeapon: 'Polar Star',
    bestWeapons: [
      {
        name: 'Polar Star',
        rarity: 5,
        description: 'BiS: Provides high Crit Rate and stacking ATK% buffs on NA, CA, Skill, and Burst.',
        iconUrl: '/assets/weapons/aqua-simulacra.png'
      },
      {
        name: 'The Stringless',
        rarity: 4,
        description: 'Best F2P burst option: Massively boosts Riptide and Vaporize Burst damage.',
        isF2P: true,
        iconUrl: '/assets/weapons/the-stringless.png'
      }
    ],
    bestArtifacts: [
      {
        name: "Nymph's Dream",
        count: 4,
        description: 'BiS: Provides +30% Hydro DMG and +25% ATK stacks in melee stance.',
        iconUrl: '/assets/artifacts/heart-of-depth.png'
      }
    ],
    statPriorities: {
      sands: 'ATK%',
      goblet: 'Hydro DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Crit Rate', 'Crit DMG', 'ATK%', 'Elemental Mastery (~100 for Vape)'],
      benchmarkEr: '120% (Melee Burst) / 100% (Ranged Burst)',
      benchmarkCrCd: '70% / 150%+'
    },
    talentPriority: ['Elemental Skill (E)', 'Elemental Burst (Q)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'International (Top Meta Core)',
        members: ['Tartaglia', 'Xiangling', 'Kazuha', 'Bennett'],
        notes: 'The golden standard of Genshin teams: Double Swirl with Kazuha enables massive Vaporize hits from both Childe and Xiangling.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Cleansing Heart',
      localSpecialty: 'Frostfrost Lily / Starconch',
      mobDrop: 'Fatui Skirmisher Insignias',
      gem: 'Varunada Lazurite'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Freedom / Permafrost',
      weeklyBossDrop: 'Shard of a Foul Legacy'
    },
    proTips: [
      'Cast Ranged Burst (Q) at the start of rotation to refund 20 Energy and immediately apply Riptide to all targets.',
      'Keep melee stance duration under 9-10 seconds to avoid long Skill cooldown penalties.'
    ]
  },
  {
    id: 'capitano',
    name: 'Capitano',
    title: 'The Captain, First of the Fatui Harbingers',
    rarity: 5,
    element: 'cryo',
    weapon: 'sword',
    region: 'Snezhnaya',
    role: 'Main DPS',
    icon: '⚔️',
    avatarUrl: '/assets/characters/capitano/icon.png',
    cardUrl: '/assets/characters/capitano/card.png',
    splashUrl: '/assets/characters/capitano/splash.png',
    description: 'The pinnacle of martial prowess in Teyvat. Slashes through armor and elements alike with absolute Cryo precision and overwhelming poise damage.',
    signatureWeapon: 'Glacial Severance',
    bestWeapons: [
      {
        name: 'Glacial Severance',
        rarity: 5,
        description: 'BiS: Colossal Base ATK, Crit DMG, and converts defense-shredding slashes into Cryo shockwaves.',
        iconUrl: '/assets/weapons/mistsplitter-reforged.png'
      },
      {
        name: 'Finale of the Deep',
        rarity: 4,
        description: 'Best F2P craftable: Bond of Life sword providing high ATK% scaling.',
        isF2P: true,
        iconUrl: '/assets/weapons/fleuve-cendre-ferryman.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Blizzard Strayer',
        count: 4,
        description: 'BiS: Grants up to +40% free Crit Rate against Frozen/Cryo-afflicted targets.',
        iconUrl: '/assets/artifacts/blizzard-strayer.png'
      }
    ],
    statPriorities: {
      sands: 'ATK%',
      goblet: 'Cryo DMG Bonus',
      circlet: 'Crit DMG',
      substats: ['Crit DMG', 'Crit Rate', 'ATK%', 'Energy Recharge (120%)'],
      benchmarkEr: '120% - 130%',
      benchmarkCrCd: '45% / 240%+ (with Blizzard Strayer)'
    },
    talentPriority: ['Normal Attack (NA)', 'Elemental Skill (E)', 'Elemental Burst (Q)'],
    recommendedTeams: [
      {
        name: 'Harbinger Cryo Hypercarry',
        members: ['Capitano', 'Shenhe', 'Kazuha', 'Furina'],
        notes: 'Shenhe Icy Quills and Kazuha Cryo Swirl amplify Capitano strikes to boss-melting thresholds.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Imperial Court Core',
      localSpecialty: 'Frostfrost Lily (Snezhnaya)',
      mobDrop: 'Operative Pocket Watch',
      gem: 'Shivada Jade'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Tsardom (Tue/Fri/Sun)',
      weeklyBossDrop: 'Imperial Court Trophy'
    },
    proTips: [
      'Capitano boasts the highest innate poise and stagger resistance in the game, allowing him to attack uninterrupted.'
    ]
  },
  {
    id: 'tsaritsa',
    name: 'Tsaritsa',
    title: 'Cryo Archon, Queen of Zapolyarny Citadel',
    rarity: 5,
    element: 'cryo',
    weapon: 'catalyst',
    region: 'Snezhnaya',
    role: 'Buffer',
    icon: '👑',
    avatarUrl: '/assets/characters/tsaritsa/icon.png',
    cardUrl: '/assets/characters/tsaritsa/card.png',
    splashUrl: '/assets/characters/tsaritsa/splash.png',
    description: 'The Archon without love to spare for her people, who blankets the entire battlefield in an absolute zero domain that freezes time and massively amplifies reaction damage.',
    signatureWeapon: 'Glacial Dominion',
    bestWeapons: [
      {
        name: 'Glacial Dominion',
        rarity: 5,
        description: 'BiS: Immense Crit DMG and party-wide Melt and Freeze reaction amplification.',
        iconUrl: '/assets/weapons/splendor-of-tranquil-waters.png'
      },
      {
        name: 'Favonius Codex',
        rarity: 4,
        description: 'Best F2P battery: Guarantees 100% team burst uptime.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Blizzard Strayer',
        count: 4,
        description: 'BiS for personal damage and 40% free Crit Rate.',
        iconUrl: '/assets/artifacts/blizzard-strayer.png'
      }
    ],
    statPriorities: {
      sands: 'Energy Recharge or ATK%',
      goblet: 'Cryo DMG Bonus',
      circlet: 'Crit DMG / Crit Rate',
      substats: ['Crit DMG', 'Crit Rate', 'Energy Recharge (160%)', 'ATK%'],
      benchmarkEr: '160%+',
      benchmarkCrCd: '50% / 220%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Absolute Zero Domain',
        members: ['Tsaritsa', 'Capitano', 'Furina', 'Xilonen'],
        notes: 'Combines the Archon freeze domain with Xilonen shred and Furina buffer for unstoppable Cryo dominance.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Zapolyarny Court Core',
      localSpecialty: 'Frostfrost Lily (Snezhnaya)',
      mobDrop: 'Operative Pocket Watch',
      gem: 'Shivada Jade'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Permafrost (Mon/Thu/Sun)',
      weeklyBossDrop: 'Zapolyarny Court Crown'
    },
    proTips: [
      'Her Elemental Burst expands an infinite permafrost field that keeps applying Cryo every 1 second.'
    ]
  },

  // ==========================================
  // STAPLE ARCHONS & FAN FAVORITES
  // ==========================================
  {
    id: 'venti',
    name: 'Venti',
    title: 'Windborne Bard & Anemo Archon Barbatos',
    rarity: 5,
    element: 'anemo',
    weapon: 'bow',
    region: 'Mondstadt',
    role: 'Support',
    icon: '🍃',
    avatarUrl: '/assets/characters/venti/icon.png',
    cardUrl: '/assets/characters/venti/card.png',
    splashUrl: '/assets/characters/venti/splash.png',
    description: 'The supreme crowd-control Archon who creates an overwhelming black hole vortex, grouping all light and medium enemies while refunding 15 energy to the party.',
    signatureWeapon: 'Elegy for the End',
    bestWeapons: [
      {
        name: 'Elegy for the End',
        rarity: 5,
        description: 'BiS Support: Grants team +100 EM and +20% ATK on burst trigger.',
        iconUrl: '/assets/weapons/aqua-simulacra.png'
      },
      {
        name: 'The Stringless',
        rarity: 4,
        description: 'Best F2P damage: Grants high EM and up to +48% Skill & Burst DMG.',
        isF2P: true,
        iconUrl: '/assets/weapons/the-stringless.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Viridescent Venerer',
        count: 4,
        description: 'BiS: 40% elemental RES shred to the swirled element.',
        iconUrl: '/assets/artifacts/viridescent-venerer.png'
      }
    ],
    statPriorities: {
      sands: 'Elemental Mastery or Energy Recharge',
      goblet: 'Elemental Mastery or Anemo DMG Bonus',
      circlet: 'Elemental Mastery or Crit Rate',
      substats: ['Elemental Mastery', 'Energy Recharge (160-180%)', 'Crit Rate', 'Crit DMG'],
      benchmarkEr: '170%+',
      benchmarkCrCd: 'Triple EM (EM Sands / EM Goblet / EM Circlet)'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Morgana (Classic Freeze)',
        members: ['Venti', 'Ganyu', 'Mona', 'Diona'],
        notes: 'Venti vortex groups enemies into Ganyu icicles and Mona Omen bubble for 100% frozen lockdown.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Hurricane Seed (Anemo Hypostasis)',
      localSpecialty: 'Cecilia (Mondstadt)',
      mobDrop: 'Slime Concentrate',
      gem: 'Vayuda Turquoise'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Ballad (Wed/Sat/Sun)',
      weeklyBossDrop: 'Tail of Boreas (Andrius)'
    },
    proTips: [
      'Venti refunds 15 energy to all party members of whichever element was absorbed into the vortex.'
    ]
  },
  {
    id: 'hutao',
    name: 'Hu Tao',
    title: '77th Director of the Wangsheng Funeral Parlor',
    rarity: 5,
    element: 'pyro',
    weapon: 'polearm',
    region: 'Liyue',
    role: 'Main DPS',
    icon: '👻',
    avatarUrl: '/assets/characters/hutao/icon.png',
    cardUrl: '/assets/characters/hutao/card.png',
    splashUrl: '/assets/characters/hutao/splash.png',
    description: 'Premier single-target Pyro hypercarry who trades HP for colossal ATK, delivering devastating jump/dash-canceled Charged Attack Vaporizes.',
    signatureWeapon: 'Staff of Homa',
    bestWeapons: [
      {
        name: 'Staff of Homa',
        rarity: 5,
        description: 'BiS: Enormous Crit DMG, Max HP%, and scaling ATK bonus when below 50% HP.',
        iconUrl: '/assets/weapons/staff-of-homa.png'
      },
      {
        name: "Dragon's Bane",
        rarity: 4,
        description: 'Best F2P option: High EM and +36% DMG against enemies affected by Hydro or Pyro.',
        isF2P: true,
        iconUrl: '/assets/weapons/the-catch.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Crimson Witch of Flames',
        count: 4,
        description: 'BiS: +15% Vaporize reaction DMG bonus and Pyro DMG stacks.',
        iconUrl: '/assets/artifacts/crimson-witch-of-flames.png'
      }
    ],
    statPriorities: {
      sands: 'HP% or Elemental Mastery (if EM < 100)',
      goblet: 'Pyro DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Crit Rate', 'Crit DMG', 'Elemental Mastery (100-200)', 'HP%'],
      benchmarkEr: '110%',
      benchmarkCrCd: '70% / 200%+ (HP 30k+)'
    },
    talentPriority: ['Normal Attack (NA)', 'Elemental Skill (E)', 'Elemental Burst (Q)'],
    recommendedTeams: [
      {
        name: 'Double Hydro Hu Tao',
        members: ['Hu Tao', 'Yelan', 'Xingqiu', 'Zhongli'],
        notes: 'Xingqiu + Yelan ensure 100% Hydro uptime for Hu Tao Charged Attacks while Zhongli protects with unbreakable shield.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Juvenile Jade (Primo Geovishap)',
      localSpecialty: 'Silk Flower (Liyue)',
      mobDrop: 'Energy Nectar (Whopperflower)',
      gem: 'Agnidus Agate'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Diligence (Tue/Fri/Sun)',
      weeklyBossDrop: 'Shard of a Foul Legacy (Childe)'
    },
    proTips: [
      'Normal Attack talent MUST be leveled equally with Elemental Skill—her Charged Attack multipliers come from NA!',
      'Learn jump-canceling at C0 (jump immediately after starting Charged Attack) to conserve stamina.'
    ]
  },
  {
    id: 'yelan',
    name: 'Yelan',
    title: 'Valley Orchid & Secret Intelligence Agent',
    rarity: 5,
    element: 'hydro',
    weapon: 'bow',
    region: 'Liyue',
    role: 'Sub DPS',
    icon: '🎲',
    avatarUrl: '/assets/characters/yelan/icon.png',
    cardUrl: '/assets/characters/yelan/card.png',
    splashUrl: '/assets/characters/yelan/splash.png',
    description: 'Premier off-field Hydro sub-DPS who fires coordinated Exquisite Throw water arrows while granting up to +50% ramping damage to the on-field character.',
    signatureWeapon: 'Aqua Simulacra',
    bestWeapons: [
      {
        name: 'Aqua Simulacra',
        rarity: 5,
        description: 'BiS DPS: +88.2% Crit DMG and +20% unconditional DMG bonus near enemies.',
        iconUrl: '/assets/weapons/aqua-simulacra.png'
      },
      {
        name: 'Favonius Warbow',
        rarity: 4,
        description: 'BiS Energy F2P: Completely solves Yelan high ER requirements and batteries the party.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Emblem of Severed Fate',
        count: 4,
        description: 'Supreme BiS: Grants ER% and converts up to 75% ER directly into Burst DMG.',
        iconUrl: '/assets/artifacts/emblem-of-severed-fate.png'
      }
    ],
    statPriorities: {
      sands: 'HP% or Energy Recharge (if ER < 180%)',
      goblet: 'Hydro DMG Bonus or HP%',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Energy Recharge (180-210% solo Hydro)', 'Crit Rate', 'Crit DMG', 'HP%'],
      benchmarkEr: '180-200% (Solo Hydro), 150-160% (Double Hydro with Xingqiu/Furina)',
      benchmarkCrCd: '70% / 150%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Elemental Skill (E)', 'Normal Attack (NA)'],
    recommendedTeams: [
      {
        name: 'Double Hydro Driver',
        members: ['Yelan', 'Xingqiu', 'Hu Tao', 'Zhongli'],
        notes: 'Hydro resonance gives +25% Max HP, boosting both Yelan damage and Hu Tao ATK conversion.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Runic Fang (Ruin Serpent)',
      localSpecialty: 'Starconch (Liyue)',
      mobDrop: 'Fatui Skirmisher Insignias',
      gem: 'Varunada Lazurite'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Prosperity (Mon/Thu/Sun)',
      weeklyBossDrop: 'Gilded Scale (Azhdaha)'
    },
    proTips: [
      'Her Elemental Skill sprint is the fastest overworld travel ability in the game and regenerates stamina while running.',
      'Her passive talent increases active character damage by 1% plus 3.5% every second, reaching 50% max buff.'
    ]
  },
  {
    id: 'ayaka',
    name: 'Kamisato Ayaka',
    title: 'Frostflake Heron & Shirasagi Himegimi',
    rarity: 5,
    element: 'cryo',
    weapon: 'sword',
    region: 'Inazuma',
    role: 'Main DPS',
    icon: '❄️',
    avatarUrl: '/assets/characters/ayaka/icon.png',
    cardUrl: '/assets/characters/ayaka/card.png',
    splashUrl: '/assets/characters/ayaka/splash.png',
    description: 'Premier Cryo burst hypercarry who unleashes Soumetsu, a 20-hit slicing frost storm that obliterates frozen targets in seconds.',
    signatureWeapon: 'Mistsplitter Reforged',
    bestWeapons: [
      {
        name: 'Mistsplitter Reforged',
        rarity: 5,
        description: 'BiS: High Base ATK, Crit DMG, and up to +28% elemental DMG bonus stacks.',
        iconUrl: '/assets/weapons/mistsplitter-reforged.png'
      },
      {
        name: 'Amenoma Kageuchi',
        rarity: 4,
        description: 'Best F2P craftable: Inazuma forge sword that refunds up to 36 energy after bursting.',
        isF2P: true,
        iconUrl: '/assets/weapons/fleuve-cendre-ferryman.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Blizzard Strayer',
        count: 4,
        description: 'Supreme BiS: Grants +40% free Crit Rate against frozen enemies (+55% with Cryo resonance).',
        iconUrl: '/assets/artifacts/blizzard-strayer.png'
      }
    ],
    statPriorities: {
      sands: 'ATK%',
      goblet: 'Cryo DMG Bonus',
      circlet: 'Crit DMG',
      substats: ['Crit DMG', 'ATK%', 'Energy Recharge (130-140%)', 'Crit Rate (35-45% max)'],
      benchmarkEr: '130% (with Amenoma), 140%+ (without)',
      benchmarkCrCd: '40% / 220%+'
    },
    talentPriority: ['Elemental Burst (Q)', 'Normal Attack (NA)', 'Elemental Skill (E)'],
    recommendedTeams: [
      {
        name: 'Ayaka Premium Freeze',
        members: ['Kamisato Ayaka', 'Shenhe', 'Kazuha', 'Kokomi'],
        notes: 'Kokomi applies Hydro jellyfish for permanent Freeze while Shenhe and Kazuha buffer Ayaka 20-hit Soumetsu.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Perpetual Heart (Perpetual Mechanical Array)',
      localSpecialty: 'Sakura Bloom (Inazuma)',
      mobDrop: 'Famed Handguard (Nobushi)',
      gem: 'Shivada Jade'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Elegance (Tue/Fri/Sun)',
      weeklyBossDrop: 'Bloodjade Branch (Azhdaha)'
    },
    proTips: [
      'Do NOT over-invest in Crit Rate! 4pc Blizzard Strayer (+40%) + Cryo Resonance (+15%) provides 55% free Crit Rate against frozen targets.',
      'Sprint briefly into an enemy before bursting to gain +18% Cryo DMG bonus from her A4 passive.'
    ]
  },
  {
    id: 'alhaitham',
    name: 'Alhaitham',
    title: 'Admonishing Instruction & Scribe of the Akademiya',
    rarity: 5,
    element: 'dendro',
    weapon: 'sword',
    region: 'Sumeru',
    role: 'Main DPS',
    icon: '🌱',
    avatarUrl: '/assets/characters/alhaitham/icon.png',
    cardUrl: '/assets/characters/alhaitham/card.png',
    splashUrl: '/assets/characters/alhaitham/splash.png',
    description: 'Premier Dendro Spread and Hyperbloom on-field carry who generates Chisel-Light Mirrors to unleash high-frequency Dendro rain attacks.',
    signatureWeapon: 'Light of Foliar Incision',
    bestWeapons: [
      {
        name: 'Light of Foliar Incision',
        rarity: 5,
        description: 'BiS: +88.2% Crit DMG and converts EM into bonus Normal Attack & Skill DMG.',
        iconUrl: '/assets/weapons/mistsplitter-reforged.png'
      },
      {
        name: 'Iron Sting / Toukabou Shigure',
        rarity: 4,
        description: 'Best F2P craftable: Provides valuable EM and unconditional DMG bonus.',
        isF2P: true,
        iconUrl: '/assets/weapons/fleuve-cendre-ferryman.png'
      },
      {
        name: 'Harbinger of Dawn',
        rarity: 3,
        description: 'Top F2P 3-star: Massive Crit Rate & Crit DMG when kept above 90% HP with a shielder.',
        isF2P: true,
        iconUrl: '/assets/weapons/favonius-sword.png'
      }
    ],
    bestArtifacts: [
      {
        name: 'Gilded Dreams',
        count: 4,
        description: 'BiS: Grants up to +230 Elemental Mastery and bonus ATK.',
        iconUrl: '/assets/artifacts/gilded-dreams.png'
      },
      {
        name: 'Deepwood Memories',
        count: 4,
        description: 'Alternative if no teammate is holding Deepwood: -30% Dendro RES shred.',
        iconUrl: '/assets/artifacts/deepwood-memories.png'
      }
    ],
    statPriorities: {
      sands: 'Elemental Mastery',
      goblet: 'Dendro DMG Bonus',
      circlet: 'Crit Rate / Crit DMG',
      substats: ['Crit Rate', 'Crit DMG', 'Elemental Mastery (300-400)', 'Energy Recharge (130%)'],
      benchmarkEr: '125% - 135%',
      benchmarkCrCd: '70% / 150%+'
    },
    talentPriority: ['Elemental Skill (E)', 'Normal Attack (NA)', 'Elemental Burst (Q)'],
    recommendedTeams: [
      {
        name: 'Alhaitham Quickbloom (Top Meta)',
        members: ['Alhaitham', 'Nahida', 'Yelan', 'Kuki Shinobu'],
        notes: 'Combines Aggravate/Spread crits with Kuki full-EM Hyperblooms for the highest floor DPS in the game.'
      }
    ],
    ascensionMaterials: {
      bossDrop: 'Pseudo-Stamens (Setekh Wenut)',
      localSpecialty: 'Sand Grease Pupa (Sumeru)',
      mobDrop: 'Faded Red Satin (Eremites)',
      gem: 'Nagadus Emerald'
    },
    talentMaterials: {
      bookName: 'Teachings/Guide/Philosophies of Ingenuity (Tue/Fri/Sun)',
      weeklyBossDrop: 'Mirror of Mushin (Scaramouche)'
    },
    proTips: [
      'Master the 3-Mirror rotation: Start with Burst (Q) at 0 mirrors, wait 2s to gain 3 mirrors, attack for 4s, use Skill (E) to refresh 3 mirrors, attack for 4s, then Charged Attack to refresh again for 12s total 3-mirror uptime!'
    ]
  }
];
