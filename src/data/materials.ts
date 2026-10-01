import { MaterialItem, RegionType } from '@/types/genshin';

export const LOCAL_SPECIALTIES: MaterialItem[] = [
  // Mondstadt
  {
    id: 'cecilia',
    name: 'Cecilia',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🌸',
    iconUrl: '/assets/materials/specialties/cecilia.png',
    locationDetails: 'Starsnatch Cliff high peaks (concentrated on the eastern cliff edge)',
    respawnTime: '48 Hours',
    usedFor: ['Venti', 'Albedo'],
    farmingTips: 'Collect 37 Cecilias directly on Starsnatch Cliff. Flora in Mondstadt City also sells 5 every 3 days. Can also be grown in the Serenitea Pot!'
  },
  {
    id: 'philanemo-mushroom',
    name: 'Philanemo Mushroom',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🍄',
    iconUrl: '/assets/materials/specialties/philanemo-mushroom.png',
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
    iconUrl: '/assets/materials/specialties/valberry.png',
    locationDetails: 'Stormbearer Mountains and Stormbearer Point in northern Mondstadt',
    respawnTime: '48 Hours',
    usedFor: ['Rosaria', 'Noelle', 'Lisa'],
    farmingTips: 'Each Valberry plant yields 4 berries! Picking 19 plants yields 76 berries in one quick 5-minute run.'
  },
  {
    id: 'small-lamp-grass',
    name: 'Small Lamp Grass',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '💡',
    iconUrl: '/assets/materials/specialties/small-lamp-grass.png',
    locationDetails: 'Whispering Woods, Wolvendom, and Windwail Highland',
    respawnTime: '48 Hours',
    usedFor: ['Diluc', 'Fischl', 'Amber'],
    farmingTips: 'Glows brightly in the dark. Farm at night (19:00 - 06:00 in-game time) to easily spot them.'
  },
  {
    id: 'dandelion-seed',
    name: 'Dandelion Seed',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🌾',
    iconUrl: '/assets/materials/specialties/dandelion-seed.png',
    locationDetails: 'Mondstadt City gates, Starfell Lake, and Cape Oath ridge',
    respawnTime: '48 Hours',
    usedFor: ['Jean', 'Eula'],
    farmingTips: 'Hit Dandelion plants with Anemo skills to dislodge the seeds. 9 right outside Mondstadt City gate.'
  },
  {
    id: 'calla-lily',
    name: 'Calla Lily',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🪷',
    iconUrl: '/assets/materials/specialties/calla-lily.png',
    locationDetails: 'Springvale lake perimeter and Dawn Winery riverbank',
    respawnTime: '48 Hours',
    usedFor: ['Kaeya', 'Diona'],
    farmingTips: 'Grows right around the shoreline of Springvale pond. Flora also sells 5 every 3 days.'
  },
  {
    id: 'windwheel-aster',
    name: 'Windwheel Aster',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🌻',
    iconUrl: '/assets/materials/specialties/windwheel-aster.png',
    locationDetails: 'Around the Statue of the Seven at Windrise, Stormterror’s Lair',
    respawnTime: '48 Hours',
    usedFor: ['Traveler', 'Bennett', 'Sucrose'],
    farmingTips: 'Over 20 clustered directly around the giant Windrise oak tree and Dawn Winery statue.'
  },
  {
    id: 'wolfhook',
    name: 'Wolfhook',
    category: 'specialty',
    region: 'Mondstadt',
    icon: '🫐',
    iconUrl: '/assets/materials/specialties/wolfhook.png',
    locationDetails: 'Wolvendom bramble bushes and Andrius arena approach',
    respawnTime: '48 Hours',
    usedFor: ['Razor', 'Mika'],
    farmingTips: 'Grows low in the thorny bushes of Wolvendom. Chloris along Windrise path sells 5 every 3 days.'
  },

  // Liyue
  {
    id: 'cor-lapis',
    name: 'Cor Lapis',
    category: 'specialty',
    region: 'Liyue',
    icon: '🪨',
    iconUrl: '/assets/materials/specialties/cor-lapis.png',
    locationDetails: 'Mt. Hulao cliffs, Cuijue Slope, and Mt. Tianheng caves',
    respawnTime: '48 Hours',
    usedFor: ['Zhongli', 'Keqing', 'Chongyun'],
    farmingTips: 'Bring a Claymore character (or Zhongli Hold E / Razor Hold E) to break the amber crystals with a single hit.'
  },
  {
    id: 'silk-flower',
    name: 'Silk Flower',
    category: 'specialty',
    region: 'Liyue',
    icon: '🌺',
    iconUrl: '/assets/materials/specialties/silk-flower.png',
    locationDetails: 'Wangshu Inn courtyards and Yujing Terrace in Liyue Harbor',
    respawnTime: '48 Hours',
    usedFor: ['Hu Tao', 'Xingqiu'],
    farmingTips: 'Extremely dense! 14 flowers at Wangshu Inn gardens and 14 in upper Liyue Harbor. Can also plant in Serenitea Pot Orderly Meadow.'
  },
  {
    id: 'jueyun-chili',
    name: 'Jueyun Chili',
    category: 'specialty',
    region: 'Liyue',
    icon: '🌶️',
    iconUrl: '/assets/materials/specialties/jueyun-chili.png',
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
    iconUrl: '/assets/materials/specialties/qingxin.png',
    locationDetails: 'Highest mountain peaks of Jueyun Karst, Huaguang Stone Forest, and Guyun Stone Forest',
    respawnTime: '48 Hours',
    usedFor: ['Xiao', 'Ganyu', 'Shenhe'],
    farmingTips: 'Teleport to high-elevation waypoints and glide from summit to summit. Bubu Pharmacy sells 10 every 3 days.'
  },
  {
    id: 'glaze-lily',
    name: 'Glaze Lily',
    category: 'specialty',
    region: 'Liyue',
    icon: '🌸',
    iconUrl: '/assets/materials/specialties/glaze-lily.png',
    locationDetails: 'Yujing Terrace in Liyue Harbor and Qingce Village fields',
    respawnTime: '48 Hours',
    usedFor: ['Ningguang', 'Yun Jin'],
    farmingTips: 'Blooms at night and folds during daytime. Qingce terraces contain 30+ wild plants.'
  },
  {
    id: 'noctilucous-jade',
    name: 'Noctilucous Jade',
    category: 'specialty',
    region: 'Liyue',
    icon: '💎',
    iconUrl: '/assets/materials/specialties/noctilucous-jade.png',
    locationDetails: 'Mingyun Village mines and caverns, Sal Terrae',
    respawnTime: '48 Hours',
    usedFor: ['Beidou', 'Yanfei'],
    farmingTips: 'Shines luminous blue in caverns. Mingyun Village abandoned mine tunnels contain over 20 nodes.'
  },
  {
    id: 'starconch',
    name: 'Starconch',
    category: 'specialty',
    region: 'Liyue',
    icon: '🐚',
    iconUrl: '/assets/materials/specialties/starconch.png',
    locationDetails: 'Yaoguang Shoal and Guyun Stone Forest beaches',
    respawnTime: '48 Hours',
    usedFor: ['Yelan', 'Tartaglia (Childe)'],
    farmingTips: 'Lies along the surf line of Yaoguang Shoal and Guili Plains beach. Bolai at Liyue Harbor sells 5.'
  },
  {
    id: 'violetgrass',
    name: 'Violetgrass',
    category: 'specialty',
    region: 'Liyue',
    icon: '🌿',
    iconUrl: '/assets/materials/specialties/violetgrass.png',
    locationDetails: 'Vertical cliffs of Cuijue Slope, Wuwang Hill, and The Chasm',
    respawnTime: '48 Hours',
    usedFor: ['Qiqi', 'Xinyan', 'Baizhu'],
    farmingTips: 'Grows on sheer rock walls. Nahida Hold E can snap them quickly from safe ground.'
  },
  {
    id: 'clearwater-jade',
    name: 'Clearwater Jade',
    category: 'specialty',
    region: 'Liyue',
    icon: '✨',
    iconUrl: '/assets/materials/specialties/clearwater-jade.png',
    locationDetails: 'Chenyu Vale riverbanks, Mt. Lingmeng, and Jademouth',
    respawnTime: '48 Hours',
    usedFor: ['Xianyun', 'Gaming'],
    farmingTips: 'Resting on river boulders and turtle backs throughout Chenyu Vale water channels.'
  },

  // Inazuma
  {
    id: 'naku-weed',
    name: 'Naku Weed',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🌾',
    iconUrl: '/assets/materials/specialties/naku-weed.png',
    locationDetails: 'Grand Narukami Shrine, Tatarasuna mikage furnace perimeter, and Seirai Island',
    respawnTime: '48 Hours',
    usedFor: ['Yoimiya', 'Kuki Shinobu'],
    farmingTips: 'Massive concentration around the base of Seirai Island and Grand Narukami mountain trail.'
  },
  {
    id: 'amakumo-fruit',
    name: 'Amakumo Fruit',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🟣',
    iconUrl: '/assets/materials/specialties/amakumo-fruit.png',
    locationDetails: 'Amakumo Peak on Seirai Island',
    respawnTime: '48 Hours',
    usedFor: ['Raiden Shogun', 'Kirara'],
    farmingTips: 'Over 190 fruits in a single circle around Amakumo Peak! Complete the Seirai Stormchasers quest first to clear the thunder hazard.'
  },
  {
    id: 'sea-ganoderma',
    name: 'Sea Ganoderma',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🍄',
    iconUrl: '/assets/materials/specialties/sea-ganoderma.png',
    locationDetails: 'Beaches and shorelines across Narukami Island, Kannazuka, and Yashiori Island',
    respawnTime: '48 Hours',
    usedFor: ['Kaedehara Kazuha', 'Yae Miko'],
    farmingTips: 'Grows right at the waterline. Bring Ayaka or Mona to sprint across the water surface effortlessly.'
  },
  {
    id: 'sango-pearl',
    name: 'Sango Pearl',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🦪',
    iconUrl: '/assets/materials/specialties/sango-pearl.png',
    locationDetails: 'Watatsumi Island coral reefs and Sangonomiya Shrine base',
    respawnTime: '48 Hours',
    usedFor: ['Sangonomiya Kokomi', 'Gorou'],
    farmingTips: 'Look inside pink oyster shells scattered across the water basins of Watatsumi Island.'
  },
  {
    id: 'onikabuto',
    name: 'Onikabuto',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🪲',
    iconUrl: '/assets/materials/specialties/onikabuto.png',
    locationDetails: 'Tree trunks and cavern walls in Mt. Yougou and Tatarasuna',
    respawnTime: '48 Hours',
    usedFor: ['Arataki Itto', 'Shikanoin Heizou'],
    farmingTips: 'Purple beetles clinging to Electro-rich trees in Tatarasuna and beneath Narukami Shrine.'
  },
  {
    id: 'dendrobium',
    name: 'Dendrobium',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🌺',
    iconUrl: '/assets/materials/specialties/dendrobium.png',
    locationDetails: 'Nazuchi Beach battlegrounds and Maguu Kenki perimeter',
    respawnTime: '48 Hours',
    usedFor: ['Kujou Sara', 'Chiori'],
    farmingTips: 'Blood-red flowers blooming profusely across the battlefield shallows of Nazuchi Beach.'
  },
  {
    id: 'fluorescent-fungus',
    name: 'Fluorescent Fungus',
    category: 'specialty',
    region: 'Inazuma',
    icon: '🍄',
    iconUrl: '/assets/materials/specialties/fluorescent-fungus.png',
    locationDetails: 'Shirikoro Peak and Autake Plains on Tsurumi Island',
    respawnTime: '48 Hours',
    usedFor: ['Thoma'],
    farmingTips: 'Luminescent blue mushrooms found under roots across fog-shrouded Tsurumi Island.'
  },

  // Sumeru
  {
    id: 'kalpalata-lotus',
    name: 'Kalpalata Lotus',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🌿',
    iconUrl: '/assets/materials/specialties/kalpalata-lotus.png',
    locationDetails: 'Cliffs of Mawtiyima Forest, Apam Woods waterfalls, and Gandharva Ville',
    respawnTime: '48 Hours',
    usedFor: ['Nahida', 'Dori'],
    farmingTips: 'Grows on vertical cliff faces. Nahida’s Hold E camera can pick them instantly without climbing!'
  },
  {
    id: 'rukkhashava-mushrooms',
    name: 'Rukkhashava Mushrooms',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🔵',
    iconUrl: '/assets/materials/specialties/rukkhashava-mushrooms.png',
    locationDetails: 'Giant tree barks of Mawtiyima Forest and Apam Woods hollow trunks',
    respawnTime: '48 Hours',
    usedFor: ['Wanderer (Scaramouche)', 'Collei'],
    farmingTips: 'Explore the interior of hollow branches in Apam Woods and high platforms of Mawtiyima Forest.'
  },
  {
    id: 'padisarah',
    name: 'Padisarah',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🌸',
    iconUrl: '/assets/materials/specialties/padisarah.png',
    locationDetails: 'Sumeru City gardens, Palace of Alcazarzaray, and Vanarana',
    respawnTime: '48 Hours',
    usedFor: ['Nilou'],
    farmingTips: 'Lush purple blooms grown throughout the paved garden terraces of Sumeru City.'
  },
  {
    id: 'scarab',
    name: 'Scarab',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🪲',
    iconUrl: '/assets/materials/specialties/scarab.png',
    locationDetails: 'Dune dunes of Hypostyle Desert and Mausoleum of King Deshret',
    respawnTime: '48 Hours',
    usedFor: ['Cyno'],
    farmingTips: 'Rolls dung balls across desert sand dunes. Tighnari in party marks their radar location.'
  },
  {
    id: 'henna-berry',
    name: 'Henna Berry',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🍓',
    iconUrl: '/assets/materials/specialties/henna-berry.png',
    locationDetails: 'Cactus plants across Aaru Village, Land of Upper Setekh',
    respawnTime: '48 Hours',
    usedFor: ['Candace', 'Faruzan'],
    farmingTips: 'Clustered in groups of 2-3 on desert cactus plants near oasis watering holes.'
  },
  {
    id: 'mourning-flower',
    name: 'Mourning Flower',
    category: 'specialty',
    region: 'Sumeru',
    icon: '🥀',
    iconUrl: '/assets/materials/specialties/mourning-flower.png',
    locationDetails: 'Asipattravana Swamp and Tunigi Hollow in Girdle of the Sands',
    respawnTime: '48 Hours',
    usedFor: ['Kaveh'],
    farmingTips: 'Red sorrowful blooms resting in the shallow swamp waters of Asipattravana.'
  },

  // Fontaine
  {
    id: 'lakelight-lily',
    name: 'Lakelight Lily',
    category: 'specialty',
    region: 'Fontaine',
    icon: '🪷',
    iconUrl: '/assets/materials/specialties/lakelight-lily.png',
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
    iconUrl: '/assets/materials/specialties/lumitoile.png',
    locationDetails: 'Beaches and underwater metal pipes around the Fortress of Meropide and Liffey Region',
    respawnTime: '48 Hours',
    usedFor: ['Neuvillette'],
    farmingTips: 'Found attached to underwater walls and shoreline rocks. Bring Lyney in party to show Fontaine specialties on mini-map.'
  },
  {
    id: 'rainbow-rose',
    name: 'Rainbow Rose',
    category: 'specialty',
    region: 'Fontaine',
    icon: '🌹',
    iconUrl: '/assets/materials/specialties/rainbow-rose.png',
    locationDetails: 'Beryl Region plains, Court of Fontaine gardens, and Marcotte Station',
    respawnTime: '48 Hours',
    usedFor: ['Arlecchino', 'Lyney'],
    farmingTips: 'Very easy ground gather. 25 roses located around Marcotte Station fountain and fountain pathways.'
  },
  {
    id: 'beryl-conch',
    name: 'Beryl Conch',
    category: 'specialty',
    region: 'Fontaine',
    icon: '🐚',
    iconUrl: '/assets/materials/specialties/beryl-conch.png',
    locationDetails: 'Underwater ravines and thermal trenches south of Court of Fontaine',
    respawnTime: '48 Hours',
    usedFor: ['Wriothesley'],
    farmingTips: 'Submerged shells resting on coral walls and deep seafloor trenches.'
  },
  {
    id: 'romaritime-flower',
    name: 'Romaritime Flower',
    category: 'specialty',
    region: 'Fontaine',
    icon: '🌸',
    iconUrl: '/assets/materials/specialties/romaritime-flower.png',
    locationDetails: 'Elton Trench underwater shallows and Belleau Region shores',
    respawnTime: '48 Hours',
    usedFor: ['Freminet'],
    farmingTips: 'Must be hit with Hydro attacks while on land to unlock. Submerged ones can be collected immediately.'
  },
  {
    id: 'subdetection-unit',
    name: 'Subdetection Unit',
    category: 'specialty',
    region: 'Fontaine',
    icon: '⚙️',
    iconUrl: '/assets/materials/specialties/subdetection-unit.png',
    locationDetails: 'Kinetic Energy Institute ruins and Central Laboratory',
    respawnTime: '48 Hours',
    usedFor: ['Wriothesley', 'Chevreuse'],
    farmingTips: 'Mini mechanical beetle drones hovering near Institute rubble and metallic piping.'
  },
  {
    id: 'spring-of-the-first-dewdrop',
    name: 'Spring of the First Dewdrop',
    category: 'specialty',
    region: 'Fontaine',
    icon: '💧',
    iconUrl: '/assets/materials/specialties/spring-of-the-first-dewdrop.png',
    locationDetails: 'Underwater sunken clams in Morte Region and Tower of Gestalt',
    respawnTime: '48 Hours',
    usedFor: ['Navia'],
    farmingTips: 'Clear underwater orbs floating inside giant illuminated sea clams around Tower of Gestalt.'
  },

  // Natlan
  {
    id: 'saurian-claw-succulent',
    name: 'Saurian Claw Succulent',
    category: 'specialty',
    region: 'Natlan',
    icon: '🌵',
    iconUrl: '/assets/materials/specialties/saurian-claw-succulent.png',
    locationDetails: 'Basin of Unnumbered Flames, Children of Echoes canyon cliffs',
    respawnTime: '48 Hours',
    usedFor: ['Mavuika', 'Kinich', 'Kachina'],
    farmingTips: 'Use Yumkasaurus grappling mechanics or Kinich skill to fly between canyon ledges effortlessly.'
  },
  {
    id: 'quenepa-berry',
    name: 'Quenepa Berry',
    category: 'specialty',
    region: 'Natlan',
    icon: '🫐',
    iconUrl: '/assets/materials/specialties/quenepa-berry.png',
    locationDetails: 'Scions of the Canopy cliffs and Coatepec Mountain slopes',
    respawnTime: '48 Hours',
    usedFor: ['Kinich'],
    farmingTips: 'Grows on branches and cliff vines in the canopy regions of Natlan.'
  },
  {
    id: 'sprayfeather-gill',
    name: 'Sprayfeather Gill',
    category: 'specialty',
    region: 'Natlan',
    icon: '🪶',
    iconUrl: '/assets/materials/specialties/sprayfeather-gill.png',
    locationDetails: 'People of the Springs hot spring pools and coastal islets',
    respawnTime: '48 Hours',
    usedFor: ['Mualani'],
    farmingTips: 'Float along the warm thermal hot springs around People of the Springs.'
  },
  {
    id: 'withering-purpurbloom',
    name: 'Withering Purpurbloom',
    category: 'specialty',
    region: 'Natlan',
    icon: '🥀',
    iconUrl: '/assets/materials/specialties/withering-purpurbloom.png',
    locationDetails: 'Tequenemecan Valley volcanic ash basins and Huitztli Hill',
    respawnTime: '48 Hours',
    usedFor: ['Xilonen', 'Chasca'],
    farmingTips: 'Dark violet flowers flourishing in volcanic soil along tectonic crevices.'
  }
];

export interface TalentSchedule {
  domain: string;
  region: RegionType;
  items: {
    name: string;
    iconUrl: string;
    days: string[];
    characters: string[];
  }[];
}

export const TALENT_SCHEDULES: TalentSchedule[] = [
  {
    domain: 'Forsaken Rift',
    region: 'Mondstadt',
    items: [
      { name: 'Freedom', iconUrl: '/assets/materials/talents/freedom.png', days: ['Mon', 'Thu', 'Sun'], characters: ['Klee', 'Sucrose', 'Diona', 'Tartaglia', 'Aloy', 'Amber', 'Barbara'] },
      { name: 'Resistance', iconUrl: '/assets/materials/talents/resistance.png', days: ['Tue', 'Fri', 'Sun'], characters: ['Bennett', 'Diluc', 'Jean', 'Mona', 'Noelle', 'Razor', 'Eula'] },
      { name: 'Ballad', iconUrl: '/assets/materials/talents/ballad.png', days: ['Wed', 'Sat', 'Sun'], characters: ['Venti', 'Fischl', 'Kaeya', 'Lisa', 'Rosaria', 'Albedo', 'Mika'] }
    ]
  },
  {
    domain: 'Taishan Mansion',
    region: 'Liyue',
    items: [
      { name: 'Prosperity', iconUrl: '/assets/materials/talents/prosperity.png', days: ['Mon', 'Thu', 'Sun'], characters: ['Keqing', 'Ningguang', 'Qiqi', 'Shenhe', 'Yelan', 'Gaming'] },
      { name: 'Diligence', iconUrl: '/assets/materials/talents/diligence.png', days: ['Tue', 'Fri', 'Sun'], characters: ['Kaedehara Kazuha', 'Xiangling', 'Ganyu', 'Hu Tao', 'Yun Jin', 'Yaoyao'] },
      { name: 'Gold', iconUrl: '/assets/materials/talents/gold.png', days: ['Wed', 'Sat', 'Sun'], characters: ['Zhongli', 'Xingqiu', 'Beidou', 'Yanfei', 'Xinyan', 'Baizhu'] }
    ]
  },
  {
    domain: 'Violet Court',
    region: 'Inazuma',
    items: [
      { name: 'Transience', iconUrl: '/assets/materials/talents/transience.png', days: ['Mon', 'Thu', 'Sun'], characters: ['Yoimiya', 'Sangonomiya Kokomi', 'Thoma', 'Shikanoin Heizou', 'Kirara'] },
      { name: 'Elegance', iconUrl: '/assets/materials/talents/elegance.png', days: ['Tue', 'Fri', 'Sun'], characters: ['Kamisato Ayaka', 'Kamisato Ayato', 'Kujou Sara', 'Kuki Shinobu'] },
      { name: 'Light', iconUrl: '/assets/materials/talents/light.png', days: ['Wed', 'Sat', 'Sun'], characters: ['Raiden Shogun', 'Yae Miko', 'Sayu', 'Gorou'] }
    ]
  },
  {
    domain: 'Steeple of Ignorance',
    region: 'Sumeru',
    items: [
      { name: 'Admonition', iconUrl: '/assets/materials/talents/admonition.png', days: ['Mon', 'Thu', 'Sun'], characters: ['Tighnari', 'Cyno', 'Candace', 'Faruzan'] },
      { name: 'Ingenuity', iconUrl: '/assets/materials/talents/ingenuity.png', days: ['Tue', 'Fri', 'Sun'], characters: ['Nahida', 'Alhaitham', 'Dori', 'Layla', 'Kaveh'] },
      { name: 'Praxis', iconUrl: '/assets/materials/talents/praxis.png', days: ['Wed', 'Sat', 'Sun'], characters: ['Wanderer (Scaramouche)', 'Dehya', 'Nilou', 'Collei', 'Sethos'] }
    ]
  },
  {
    domain: 'Pale Forgotten Glory',
    region: 'Fontaine',
    items: [
      { name: 'Equity', iconUrl: '/assets/materials/talents/equity.png', days: ['Mon', 'Thu', 'Sun'], characters: ['Neuvillette', 'Lyney', 'Navia'] },
      { name: 'Justice', iconUrl: '/assets/materials/talents/justice.png', days: ['Tue', 'Fri', 'Sun'], characters: ['Furina', 'Charlotte', 'Clorinde'] },
      { name: 'Order', iconUrl: '/assets/materials/talents/order.png', days: ['Wed', 'Sat', 'Sun'], characters: ['Arlecchino', 'Wriothesley', 'Chevreuse', 'Emilie'] }
    ]
  },
  {
    domain: 'Blazing Ruins',
    region: 'Natlan',
    items: [
      { name: 'Contention', iconUrl: '/assets/materials/talents/contention.png', days: ['Mon', 'Thu', 'Sun'], characters: ['Mavuika', 'Mualani'] },
      { name: 'Kindling', iconUrl: '/assets/materials/talents/kindling.png', days: ['Tue', 'Fri', 'Sun'], characters: ['Kinich', 'Kachina'] },
      { name: 'Conflict', iconUrl: '/assets/materials/talents/conflict.png', days: ['Wed', 'Sat', 'Sun'], characters: ['Xilonen', 'Chasca'] }
    ]
  }
];

export interface MobDropItem {
  id: string;
  name: string;
  enemy: string;
  locations: string;
  farmingTips: string;
  usedFor: string[];
  iconUrl: string;
}

export const ESSENTIAL_MOB_DROPS: MobDropItem[] = [
  {
    id: 'spectral-nucleus',
    name: 'Specter Nucleus / Drops',
    enemy: 'Specters (Hydro, Geo, Anemo, Pyro, Electro, Cryo)',
    locations: 'Watatsumi & Seirai Islands (Inazuma), Vissudha Field (Sumeru)',
    farmingTips: 'Specters float away and have rage mechanics. Use range/hitscan DPS like Yoimiya, Tighnari, Nahida, or Yelan to eliminate quickly.',
    usedFor: ['Raiden Shogun', 'Kokomi', 'Gorou', 'Kuki Shinobu', 'The Catch polearm'],
    iconUrl: '/assets/materials/mobs/spectral-nucleus.png'
  },
  {
    id: 'famed-handguard',
    name: 'Famed Handguard',
    enemy: 'Nobushi & Kairagi swordsmen',
    locations: 'All Inazuma islands (especially Yashiori, Jinren Island, and Nazuchi Beach)',
    farmingTips: 'Jinren Island has 15+ Nobushi in tight clusters. Freeze teams (Ayaka, Xingqiu) stop Kairagi from dashing away.',
    usedFor: ['Raiden Shogun', 'Ayaka', 'Ayato', 'Wanderer', 'Yae Miko', 'Mistsplitter Reforged'],
    iconUrl: '/assets/materials/mobs/famed-handguard.png'
  },
  {
    id: 'lieutenants-insignia',
    name: 'Fatui Insignias',
    enemy: 'Fatui Skirmishers, Agents, and Cicin Mages',
    locations: 'Dunyu Ruins (Liyue), Dragonspine, Fontaine mountain outposts',
    farmingTips: 'Bring elements matching Skirmisher shields: Cryo vs Electro hammer, Hydro vs Pyro gunner, Pyro vs Cryo gunner, Electro vs Hydro healer.',
    usedFor: ['Arlecchino', 'Tartaglia', 'Yelan', 'Diluc', 'Ningguang', 'Favonius weapons'],
    iconUrl: '/assets/materials/mobs/lieutenants-insignia.png'
  },
  {
    id: 'transoceanic-chunk',
    name: 'Fontemer Aberrant Drops',
    enemy: 'Fontemer Aberrants (Blubberbeasts, Armored Crabs, Ray, Seahorses)',
    locations: 'Fontaine underwater regions and lakeshores',
    farmingTips: 'Borrow Xenochromatic Creature skills underwater (Crab shield, Ray blade) to defeat underwater mobs in 2 hits.',
    usedFor: ['Neuvillette', 'Furina', 'Wriothesley', 'Fontaine craftable weapons'],
    iconUrl: '/assets/materials/mobs/transoceanic-chunk.png'
  },
  {
    id: 'energy-nectar',
    name: 'Whopperflower Nectar',
    enemy: 'Pyro, Cryo, and Electro Whopperflowers',
    locations: 'Cuijue Slope, Tianqiu Valley (Liyue), Cape Oath (Mondstadt)',
    farmingTips: 'Interact with "suspicious" sweet flowers or mint with a dialogue icon—they are disguised Whopperflowers that pop out immediately.',
    usedFor: ['Furina', 'Hu Tao', 'Ganyu', 'Shenhe', 'Keqing', 'Sucrose'],
    iconUrl: '/assets/materials/mobs/energy-nectar.png'
  },
  {
    id: 'chaos-core',
    name: 'Chaos Core / Ruin Mechanisms',
    enemy: 'Ruin Guards, Ruin Hunters, and Ruin Graders',
    locations: 'Guyun Stone Forest, Dunyu Ruins, Yaoguang Shoal',
    farmingTips: 'Aim bow charged shots at glowing eye weakpoints to paralyze Ruin Guards instantly.',
    usedFor: ['Favonius Codex', 'Sacrificial Bow', 'Staff of Homa', 'Prototype Archaic'],
    iconUrl: '/assets/materials/mobs/chaos-core.png'
  },
  {
    id: 'slime-concentrate',
    name: 'Slime Concentrate',
    enemy: 'Slimes (All elements)',
    locations: 'Cape Oath cliff edges, Guyun Stone Forest, Yaoguang Shoal beaches',
    farmingTips: 'Large clusters along shores and Ley Line outcrops. Anemo gather (Kazuha, Venti) sucks entire swarms at once.',
    usedFor: ['Zhongli', 'Xiao', 'Venti', 'Xiangling', 'Lisa'],
    iconUrl: '/assets/materials/mobs/slime-concentrate.png'
  }
];
