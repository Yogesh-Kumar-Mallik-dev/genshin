import { MaterialItem, RegionType } from '@/types/genshin';

export const LOCAL_SPECIALTIES: MaterialItem[] = [
  // Mondstadt
  {
    id: 'cecilia',
    name: 'Cecilia',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🌸',
    locationDetails: 'Starsnatch Cliff high peaks (concentrated on the eastern cliff edge)',
    respawnTime: '48 Hours',
    usedFor: ['Venti', 'Albedo'],
    farmingTips: 'Collect 37 Cecilias directly on Starsnatch Cliff. Flora in Mondstadt City also sells 5 every 3 days. Can also be grown in the Serenitea Pot!'
  },
  {
    id: 'philanemo_mushroom',
    name: 'Philanemo Mushroom',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🍄',
    locationDetails: 'Under the eaves and on building walls in Mondstadt City and Springvale',
    respawnTime: '48 Hours',
    usedFor: ['Mona', 'Klee', 'Barbara'],
    farmingTips: 'Climb houses in Mondstadt and Springvale. Chloris (wandering botanist along the Windrise road) sells 5 every 3 days.'
  },
  {
    id: 'valberry',
    name: 'Valberry',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🍓',
    locationDetails: 'Stormbearer Mountains and Stormbearer Point in northern Mondstadt',
    respawnTime: '48 Hours',
    usedFor: ['Rosaria', 'Noelle', 'Lisa'],
    farmingTips: 'Each Valberry plant yields 4 berries! Picking 19 plants yields 76 berries in one quick 5-minute run.'
  },
  {
    id: 'small_lamp_grass',
    name: 'Small Lamp Grass',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '💡',
    locationDetails: 'Whispering Woods, Wolvendom, and Windwail Highland',
    respawnTime: '48 Hours',
    usedFor: ['Diluc', 'Fischl', 'Amber'],
    farmingTips: 'Glows brightly in the dark. Farm at night (19:00 - 06:00 in-game time) to easily spot them.'
  },
  // Liyue
  {
    id: 'cor_lapis',
    name: 'Cor Lapis',
    category: 'specialty',
    region: 'Liyue',
    icon: '🪨',
    locationDetails: 'Mt. Hulao cliffs, Cuijue Slope, and Mt. Tianheng caves',
    respawnTime: '48 Hours',
    usedFor: ['Zhongli', 'Keqing', 'Chongyun'],
    farmingTips: 'Bring a Claymore character (or Zhongli Hold E / Razor Hold E) to break the amber crystals with a single hit.'
  },
  {
    id: 'silk_flower',
    name: 'Silk Flower',
    category: 'specialty',
    region: 'Liyue',
    icon: '🌺',
    locationDetails: 'Wangshu Inn courtyards and Yujing Terrace in Liyue Harbor',
    respawnTime: '48 Hours',
    usedFor: ['Hu Tao', 'Xingqiu'],
    farmingTips: 'Extremely dense! 14 flowers at Wangshu Inn gardens and 14 in upper Liyue Harbor. Can also plant in Serenitea Pot Orderly Meadow.'
  },
  {
    id: 'jueyun_chili',
    name: 'Jueyun Chili',
    category: 'specialty',
    region: 'Liyue',
    icon: '🌶️',
    locationDetails: 'Qingce Village terraced fields and Jueyun Karst valleys',
    respawnTime: '48 Hours',
    usedFor: ['Xiangling', 'Yaoyao'],
    farmingTips: 'Each plant yields 3 chilis! A quick run around the terraces of Qingce Village yields over 40 chilis in under 4 minutes.'
  },
  {
    id: 'qingxin',
    name: 'Qingxin',
    category: 'specialty',
    region: 'Liyue',
    icon: '🏔️',
    locationDetails: 'Highest mountain peaks of Jueyun Karst, Huaguang Stone Forest, and Guyun Stone Forest',
    respawnTime: '48 Hours',
    usedFor: ['Xiao', 'Ganyu', 'Shenhe'],
    farmingTips: 'Teleport to high-elevation waypoints and glide from summit to summit. Bubu Pharmacy sells 10 every 3 days.'
  },
  // Inazuma
  {
    id: 'naku_weed',
    name: 'Naku Weed',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🌾',
    locationDetails: 'Grand Narukami Shrine, Tatarasuna mikage furnace perimeter, and Seirai Island',
    respawnTime: '48 Hours',
    usedFor: ['Yoimiya', 'Kuki Shinobu'],
    farmingTips: 'Massive concentration around the base of Seirai Island and Grand Narukami mountain trail.'
  },
  {
    id: 'amakumo_fruit',
    name: 'Amakumo Fruit',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🟣',
    locationDetails: 'Amakumo Peak on Seirai Island',
    respawnTime: '48 Hours',
    usedFor: ['Raiden Shogun', 'Kirara'],
    farmingTips: 'Over 190 fruits in a single circle around Amakumo Peak! Complete the Seirai Stormchasers quest first to clear the thunder hazard.'
  },
  {
    id: 'sea_ganoderma',
    name: 'Sea Ganoderma',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🍄',
    locationDetails: 'Beaches and shorelines across Narukami Island, Kannazuka, and Yashiori Island',
    respawnTime: '48 Hours',
    usedFor: ['Kaedehara Kazuha', 'Yae Miko'],
    farmingTips: 'Grows right at the waterline. Bring Ayaka or Mona to sprint across the water surface effortlessly.'
  },
  {
    id: 'sango_pearl',
    name: 'Sango Pearl',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🦪',
    locationDetails: 'Watatsumi Island coral reefs and Sangonomiya Shrine base',
    respawnTime: '48 Hours',
    usedFor: ['Sangonomiya Kokomi', 'Gorou'],
    farmingTips: 'Look inside pink oyster shells scattered across the water basins of Watatsumi Island.'
  },
  // Sumeru
  {
    id: 'kalpalata_lotus',
    name: 'Kalpalata Lotus',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🌿',
    locationDetails: 'Cliffs of Mawtiyima Forest, Apam Woods waterfalls, and Gandharva Ville',
    respawnTime: '48 Hours',
    usedFor: ['Nahida', 'Dori'],
    farmingTips: 'Grows on vertical cliff faces. Nahida’s Hold E camera can pick them instantly without climbing!'
  },
  {
    id: 'rukkhashava_mushrooms',
    name: 'Rukkhashava Mushrooms',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🔵',
    locationDetails: 'Giant tree barks of Mawtiyima Forest and Apam Woods hollow trunks',
    respawnTime: '48 Hours',
    usedFor: ['Wanderer (Scaramouche)', 'Collei'],
    farmingTips: 'Explore the interior of hollow branches in Apam Woods and high platforms of Mawtiyima Forest.'
  },
  // Fontaine
  {
    id: 'lakelight_lily',
    name: 'Lakelight Lily',
    category: 'specialty',
    region: 'Fontaine',
    icon: '🪷',
    locationDetails: 'Loch Urania and Weeping Willow of the Lake in Erinnyes Forest',
    respawnTime: '48 Hours',
    usedFor: ['Furina'],
    farmingTips: 'Complete The Wild Fairy of Erinnyes world quest to purify the lake and unlock all clustered lily spawns.'
  },
  {
    id: 'lumitoile',
    name: 'Lumitoile',
    category: 'specialty',
    region: 'Fontaine',
    icon: '⭐',
    locationDetails: 'Beaches and underwater metal pipes around the Fortress of Meropide and Liffey Region',
    respawnTime: '48 Hours',
    usedFor: ['Neuvillette'],
    farmingTips: 'Found attached to underwater walls and shoreline rocks. Bring Lyney in party to show Fontaine specialties on mini-map.'
  },
  {
    id: 'rainbow_rose',
    name: 'Rainbow Rose',
    category: 'specialty',
    region: 'Fontaine',
    icon: '🌹',
    locationDetails: 'Beryl Region plains, Court of Fontaine gardens, and Marcotte Station',
    respawnTime: '48 Hours',
    usedFor: ['Arlecchino', 'Lyney'],
    farmingTips: 'Very easy ground gather. 25 roses located around Marcotte Station fountain and fountain pathways.'
  },
  // Natlan
  {
    id: 'saurian_claw_succulent',
    name: 'Saurian Claw Succulent',
    category: 'specialty',
    region: 'Natlan',
    icon: '🌵',
    locationDetails: 'Basin of Unnumbered Flames, Children of Echoes canyon cliffs',
    respawnTime: '48 Hours',
    usedFor: ['Mavuika', 'Kinich', 'Kachina'],
    farmingTips: 'Use Yumkasaurus grappling mechanics or Kinich skill to fly between canyon ledges effortlessly.'
  }
];

export interface TalentSchedule {
  domain: string;
  region: RegionType;
  items: {
    name: string;
    days: string[];
    characters: string[];
  }[];
}

export const TALENT_SCHEDULES: TalentSchedule[] = [
  {
    domain: 'Forsaken Rift',
    region: 'Mondstadt',
    items: [
      { name: 'Freedom', days: ['Mon', 'Thu', 'Sun'], characters: ['Klee', 'Sucrose', 'Diona', 'Tartaglia', 'Aloy', 'Amber', 'Barbara'] },
      { name: 'Resistance', days: ['Tue', 'Fri', 'Sun'], characters: ['Bennett', 'Diluc', 'Jean', 'Mona', 'Noelle', 'Razor', 'Eula'] },
      { name: 'Ballad', days: ['Wed', 'Sat', 'Sun'], characters: ['Venti', 'Fischl', 'Kaeya', 'Lisa', 'Rosaria', 'Albedo', 'Mika'] }
    ]
  },
  {
    domain: 'Taishan Mansion',
    region: 'Liyue',
    items: [
      { name: 'Prosperity', days: ['Mon', 'Thu', 'Sun'], characters: ['Keqing', 'Ningguang', 'Qiqi', 'Shenhe', 'Yelan', 'Gaming'] },
      { name: 'Diligence', days: ['Tue', 'Fri', 'Sun'], characters: ['Kaedehara Kazuha', 'Xiangling', 'Ganyu', 'Hu Tao', 'Yun Jin', 'Yaoyao'] },
      { name: 'Gold', days: ['Wed', 'Sat', 'Sun'], characters: ['Zhongli', 'Xingqiu', 'Beidou', 'Yanfei', 'Xinyan', 'Baizhu'] }
    ]
  },
  {
    domain: 'Violet Court',
    region: 'Inazuma',
    items: [
      { name: 'Transience', days: ['Mon', 'Thu', 'Sun'], characters: ['Yoimiya', 'Sangonomiya Kokomi', 'Thoma', 'Shikanoin Heizou', 'Kirara'] },
      { name: 'Elegance', days: ['Tue', 'Fri', 'Sun'], characters: ['Kamisato Ayaka', 'Kamisato Ayato', 'Kujou Sara', 'Kuki Shinobu'] },
      { name: 'Light', days: ['Wed', 'Sat', 'Sun'], characters: ['Raiden Shogun', 'Yae Miko', 'Sayu', 'Gorou'] }
    ]
  },
  {
    domain: 'Steeple of Ignorance',
    region: 'Sumeru',
    items: [
      { name: 'Admonition', days: ['Mon', 'Thu', 'Sun'], characters: ['Tighnari', 'Cyno', 'Candace', 'Faruzan'] },
      { name: 'Ingenuity', days: ['Tue', 'Fri', 'Sun'], characters: ['Nahida', 'Alhaitham', 'Dori', 'Layla', 'Kaveh'] },
      { name: 'Praxis', days: ['Wed', 'Sat', 'Sun'], characters: ['Wanderer (Scaramouche)', 'Dehya', 'Nilou', 'Collei', 'Sethos'] }
    ]
  },
  {
    domain: 'Pale Forgotten Glory',
    region: 'Fontaine',
    items: [
      { name: 'Equity', days: ['Mon', 'Thu', 'Sun'], characters: ['Neuvillette', 'Lyney', 'Navia'] },
      { name: 'Justice', days: ['Tue', 'Fri', 'Sun'], characters: ['Furina', 'Charlotte', 'Clorinde'] },
      { name: 'Order', days: ['Wed', 'Sat', 'Sun'], characters: ['Arlecchino', 'Wriothesley', 'Chevreuse', 'Emilie'] }
    ]
  },
  {
    domain: 'Blazing Ruins',
    region: 'Natlan',
    items: [
      { name: 'Contention', days: ['Mon', 'Thu', 'Sun'], characters: ['Mavuika', 'Mualani'] },
      { name: 'Kindling', days: ['Tue', 'Fri', 'Sun'], characters: ['Kinich', 'Kachina'] },
      { name: 'Conflict', days: ['Wed', 'Sat', 'Sun'], characters: ['Xilonen', 'Chasca'] }
    ]
  }
];

export const ESSENTIAL_MOB_DROPS = [
  {
    name: 'Specter Nucleus / Drops',
    enemy: 'Specters (Hydro, Geo, Anemo, Pyro, Electro, Cryo)',
    locations: 'Watatsumi & Seirai Islands (Inazuma), Vissudha Field (Sumeru)',
    farmingTips: 'Specters float away and have rage mechanics. Use range/hitscan DPS like Yoimiya, Tighnari, Nahida, or Yelan to eliminate quickly.',
    usedFor: ['Raiden Shogun', 'Kokomi', 'Gorou', 'Kuki Shinobu', 'The Catch polearm']
  },
  {
    name: 'Famed Handguard',
    enemy: 'Nobushi & Kairagi swordsmen',
    locations: 'All Inazuma islands (especially Yashiori, Jinren Island, and Nazuchi Beach)',
    farmingTips: 'Jinren Island has 15+ Nobushi in tight clusters. Freeze teams (Ayaka, Xingqiu) stop Kairagi from dashing away.',
    usedFor: ['Raiden Shogun', 'Ayaka', 'Ayato', 'Wanderer', 'Yae Miko', 'Mistsplitter Reforged']
  },
  {
    name: 'Fatui Insignias',
    enemy: 'Fatui Skirmishers, Agents, and Cicin Mages',
    locations: 'Dunyu Ruins (Liyue), Dragonspine, Fontaine mountain outposts',
    farmingTips: 'Bring elements matching Skirmisher shields: Cryo vs Electro hammer, Hydro vs Pyro gunner, Pyro vs Cryo gunner, Electro vs Hydro healer.',
    usedFor: ['Arlecchino', 'Tartaglia', 'Yelan', 'Diluc', 'Ningguang', 'Favonius weapons']
  },
  {
    name: 'Fontemer Aberrant Drops',
    enemy: 'Fontemer Aberrants (Blubberbeasts, Armored Crabs, Ray, Seahorses)',
    locations: 'Fontaine underwater regions and lakeshores',
    farmingTips: 'Borrow Xenochromatic Creature skills underwater (Crab shield, Ray blade) to defeat underwater mobs in 2 hits.',
    usedFor: ['Neuvillette', 'Furina', 'Wriothesley', 'Fontaine craftable weapons']
  },
  {
    name: 'Whopperflower Nectar',
    enemy: 'Pyro, Cryo, and Electro Whopperflowers',
    locations: 'Cuijue Slope, Tianqiu Valley (Liyue), Cape Oath (Mondstadt)',
    farmingTips: 'Interact with "suspicious" sweet flowers or mint with a dialogue icon—they are disguised Whopperflowers that pop out immediately.',
    usedFor: ['Furina', 'Hu Tao', 'Ganyu', 'Shenhe', 'Keqing', 'Sucrose']
  }
];
