import { MapPin, RegionType } from '@/types/genshin';

export interface RegionMapConfig {
  id: RegionType;
  name: string;
  themeColor: string;
  element: string;
  bgGradient: string;
  subregions: string[];
}

export const REGIONS_CONFIG: RegionMapConfig[] = [
  {
    id: 'Mondstadt',
    name: 'Mondstadt (City of Freedom)',
    themeColor: '#48d1cc',
    element: 'Anemo',
    bgGradient: 'from-emerald-950/40 via-cyan-950/30 to-slate-900',
    subregions: ['Starfell Valley', 'Galesong Hill', 'Windwail Highland', 'Brightcrown Mountains', 'Dragonspine']
  },
  {
    id: 'Liyue',
    name: 'Liyue (City of Contracts)',
    themeColor: '#eab308',
    element: 'Geo',
    bgGradient: 'from-amber-950/40 via-yellow-950/30 to-slate-900',
    subregions: ['Bishui Plain', 'Qiongji Estuary', 'Minlin', 'Sea of Clouds', 'The Chasm', 'Chenyu Vale']
  },
  {
    id: 'Inazuma',
    name: 'Inazuma (Realm of Eternity)',
    themeColor: '#a855f7',
    element: 'Electro',
    bgGradient: 'from-purple-950/40 via-violet-950/30 to-slate-900',
    subregions: ['Narukami Island', 'Kannazuka', 'Yashiori Island', 'Watatsumi Island', 'Seirai Island', 'Tsurumi Island']
  },
  {
    id: 'Sumeru',
    name: 'Sumeru (Nation of Wisdom)',
    themeColor: '#22c55e',
    element: 'Dendro',
    bgGradient: 'from-green-950/40 via-emerald-950/30 to-slate-900',
    subregions: ['Avidya Forest', 'Lokapala Jungle', 'Ashavan Realm', 'Hypostyle Desert', 'Desert of Hadramaveth']
  },
  {
    id: 'Fontaine',
    name: 'Fontaine (Nation of Justice)',
    themeColor: '#0ea5e9',
    element: 'Hydro',
    bgGradient: 'from-blue-950/40 via-cyan-950/30 to-slate-900',
    subregions: ['Court of Fontaine', 'Beryl Region', 'Belleau Region', 'Liffey Region', 'Erinnyes Forest', 'Sea of Bygone Eras']
  },
  {
    id: 'Natlan',
    name: 'Natlan (Nation of War)',
    themeColor: '#f97316',
    element: 'Pyro',
    bgGradient: 'from-orange-950/40 via-red-950/30 to-slate-900',
    subregions: ['Basin of Unnumbered Flames', 'Coatepec Mountain', 'Tequenemecan Valley', 'Ochkanatlan']
  }
];

export const MAP_PINS: MapPin[] = [
  // Mondstadt Pins
  { id: 'm_statue_windrise', name: 'Statue of the Seven (Windrise)', category: 'teleport', region: 'Mondstadt', x: 55, y: 58, description: 'Under the ancient oak tree planted by Vennessa.' },
  { id: 'm_cecilia_starsnatch', name: 'Cecilia Field Cluster (37x)', category: 'specialty', region: 'Mondstadt', x: 74, y: 32, description: 'Highest elevation peak on Starsnatch Cliff.', count: 37 },
  { id: 'm_philanemo_springvale', name: 'Philanemo Mushroom Cluster', category: 'specialty', region: 'Mondstadt', x: 44, y: 64, description: 'Growing on the roofs and chimneys of Springvale houses.', count: 18 },
  { id: 'm_valberry_point', name: 'Valberry Grove', category: 'specialty', region: 'Mondstadt', x: 70, y: 18, description: 'Stormbearer Point clifftops (4 berries per bush).', count: 48 },
  { id: 'm_boss_dvalin', name: 'Trounce Domain: Stormterror', category: 'boss', region: 'Mondstadt', x: 22, y: 28, description: 'Weekly boss: Stormterror’s Lair.' },
  { id: 'm_boss_andrius', name: 'Dominator of Wolves (Andrius)', category: 'boss', region: 'Mondstadt', x: 34, y: 60, description: 'Weekly boss arena in Wolvendom.' },
  { id: 'm_anemo_oculus_1', name: 'Anemoculus (Starsnatch)', category: 'oculus', region: 'Mondstadt', x: 76, y: 30, description: 'Floating at the very edge of the eastern cliff.' },
  { id: 'm_crystal_chunk_1', name: 'Crystal Ore Mining Hotspot', category: 'ore', region: 'Mondstadt', x: 18, y: 32, description: 'Around Stormterror central tower canyon.', count: 12 },
  { id: 'm_shrine_brightcrown', name: 'Shrine of Depths (Brightcrown)', category: 'shrine', region: 'Mondstadt', x: 26, y: 22, description: 'Contains luxurious chest + 40 Primogems.' },

  // Liyue Pins
  { id: 'l_statue_harbor', name: 'Statue of the Seven (Liyue Harbor)', category: 'teleport', region: 'Liyue', x: 62, y: 78, description: 'Overlooking the Sea of Clouds and Liyue Harbor.' },
  { id: 'l_silk_wangshu', name: 'Silk Flower Grove (Wangshu Inn)', category: 'specialty', region: 'Liyue', x: 52, y: 46, description: 'Red bushes directly surrounding Wangshu Inn.', count: 14 },
  { id: 'l_jueyun_chili_qingce', name: 'Jueyun Chili Terraces (Qingce)', category: 'specialty', region: 'Liyue', x: 38, y: 22, description: 'Terraced farms of Qingce Village (3 chilis per stalk).', count: 32 },
  { id: 'l_cor_lapis_hulao', name: 'Cor Lapis Caverns (Mt. Hulao)', category: 'specialty', region: 'Liyue', x: 24, y: 48, description: 'Dense orange crystal clusters along the path up Mt. Hulao.', count: 18 },
  { id: 'l_qingxin_karst', name: 'Qingxin Mountain Peaks (Jueyun)', category: 'specialty', region: 'Liyue', x: 32, y: 44, description: 'Atop stone forest pillars. High gliding vantage.', count: 20 },
  { id: 'l_boss_childe', name: 'Trounce Domain: Enter the Golden House', category: 'boss', region: 'Liyue', x: 64, y: 88, description: 'Weekly boss: Tartaglia (Childe).' },
  { id: 'l_boss_azhdaha', name: 'Trounce Domain: Beneath the Dragon-Queller', category: 'boss', region: 'Liyue', x: 20, y: 42, description: 'Weekly boss: Azhdaha.' },
  { id: 'l_geoculus_guyun', name: 'Geoculus (Guyun Clifftop)', category: 'oculus', region: 'Liyue', x: 82, y: 82, description: 'High summit above the 4 Ruin Guards in Guyun Stone Forest.' },
  { id: 'l_shrine_guyun', name: 'Shrine of Depths (Guyun)', category: 'shrine', region: 'Liyue', x: 85, y: 86, description: 'Southernmost islet in Guyun Stone Forest.' },

  // Inazuma Pins
  { id: 'i_statue_narukami', name: 'Grand Narukami Shrine (Sacred Sakura)', category: 'teleport', region: 'Inazuma', x: 70, y: 32, description: 'Summit of Mt. Yougou housing the Sacred Sakura Tree.' },
  { id: 'i_amakumo_fruit_cluster', name: 'Amakumo Fruit Mega Cluster', category: 'specialty', region: 'Inazuma', x: 68, y: 84, description: 'Seirai Island around the crater of Amakumo Peak.', count: 96 },
  { id: 'i_naku_weed_tatarasuna', name: 'Naku Weed (Mikage Furnace)', category: 'specialty', region: 'Inazuma', x: 42, y: 55, description: 'Growing in Electro-charged fissures around the furnace.', count: 24 },
  { id: 'i_sango_pearl_reef', name: 'Sango Pearl Reef (Sangonomiya)', category: 'specialty', region: 'Inazuma', x: 18, y: 62, description: 'Inside giant clamshells in the coral lagoons.', count: 44 },
  { id: 'i_sea_ganoderma_beach', name: 'Sea Ganoderma (Nazuchi Beach)', category: 'specialty', region: 'Inazuma', x: 38, y: 65, description: 'All along the shorelines of shipwreck beach.', count: 22 },
  { id: 'i_boss_raiden', name: 'Trounce Domain: End of the Oneiric Euthymia', category: 'boss', region: 'Inazuma', x: 72, y: 34, description: 'Weekly boss: Raiden Shogun puppet.' },
  { id: 'i_electro_oculus_1', name: 'Electroculus (Tenshukaku Roof)', category: 'oculus', region: 'Inazuma', x: 76, y: 48, description: 'At the very tip of the Raiden Shogun palace spire.' },

  // Sumeru Pins
  { id: 's_statue_sumeru_city', name: 'Statue of the Seven (Sumeru City)', category: 'teleport', region: 'Sumeru', x: 58, y: 42, description: 'At the entrance bridge to the tree canopy city.' },
  { id: 's_kalpalata_mawtiyima', name: 'Kalpalata Lotus (Mawtiyima)', category: 'specialty', region: 'Sumeru', x: 65, y: 22, description: 'Suspended from high cliffs. Use Nahida Hold E!', count: 21 },
  { id: 's_rukkhashava_apam', name: 'Rukkhashava Mushroom (Apam Woods)', category: 'specialty', region: 'Sumeru', x: 46, y: 72, description: 'Growing on elevated wooden branches in rain forest.', count: 26 },
  { id: 's_boss_scara', name: 'Trounce Domain: Joururi Workshop', category: 'boss', region: 'Sumeru', x: 62, y: 44, description: 'Weekly boss: Shouki no Kami (Scaramouche).' },
  { id: 's_boss_apep', name: 'Trounce Domain: The Realm of Beginnings', category: 'boss', region: 'Sumeru', x: 26, y: 25, description: 'Weekly boss: Guardian of Apep’s Oasis.' },

  // Fontaine Pins
  { id: 'f_statue_court', name: 'Statue of the Seven (Court of Fontaine)', category: 'teleport', region: 'Fontaine', x: 48, y: 35, description: 'Outside the Palais Mermonia overlooking the fountain.' },
  { id: 'f_lakelight_lily_weeping', name: 'Lakelight Lily (Weeping Willow)', category: 'specialty', region: 'Fontaine', x: 72, y: 28, description: 'Surrounding the mystical glowing willow tree.', count: 34 },
  { id: 'f_lumitoile_seahorse', name: 'Lumitoile Clustered Beach', category: 'specialty', region: 'Fontaine', x: 64, y: 20, description: 'Submerged iron pipes and shoreline rocks.', count: 28 },
  { id: 'f_rainbow_rose_fountain', name: 'Rainbow Rose Garden', category: 'specialty', region: 'Fontaine', x: 50, y: 38, description: 'Paved walkways and lawns around Court of Fontaine.', count: 25 },
  { id: 'f_boss_whale', name: 'Trounce Domain: Shadow of Another World', category: 'boss', region: 'Fontaine', x: 54, y: 52, description: 'Weekly boss: All-Devouring Narwhal.' },
  { id: 'f_boss_knave', name: 'Trounce Domain: Scattered Ruins', category: 'boss', region: 'Fontaine', x: 42, y: 46, description: 'Weekly boss: The Knave (Arlecchino).' },

  // Natlan Pins
  { id: 'n_statue_echoes', name: 'Statue of the Seven (Children of Echoes)', category: 'teleport', region: 'Natlan', x: 52, y: 48, description: 'Carved directly out of ancient red sandstone cliffs.' },
  { id: 'n_saurian_succulent_canyon', name: 'Saurian Claw Succulent Cluster', category: 'specialty', region: 'Natlan', x: 48, y: 55, description: 'Ledges along the canyon walls. Use Saurians to gather.', count: 30 },
  { id: 'n_boss_lord_fire', name: 'Trounce Domain: Fireheart Sanctum', category: 'boss', region: 'Natlan', x: 56, y: 42, description: 'Weekly boss: Lord of Primal Fire.' }
];
