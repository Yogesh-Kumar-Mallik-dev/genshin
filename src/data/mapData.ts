import { MapPin, RegionType } from '@/types/genshin';

export interface RegionMapConfig {
  id: RegionType;
  name: string;
  themeColor: string;
  element: string;
  bgGradient: string;
  subregions: string[];
  focusX: number; // percentage of full Teyvat map
  focusY: number; // percentage of full Teyvat map
}

export const TEYVAT_FULL_MAP_URL = '/assets/map/teyvat_full_6k.webp';

export const REGIONS_CONFIG: RegionMapConfig[] = [
  {
    id: 'Mondstadt',
    name: 'Mondstadt',
    themeColor: '#48d1cc',
    element: 'Anemo',
    bgGradient: 'from-emerald-950/40 via-cyan-950/30 to-slate-900',
    subregions: ['Starfell Valley', 'Galesong Hill', 'Windwail Highland', 'Brightcrown Mountains', 'Dragonspine'],
    focusX: 77,
    focusY: 33
  },
  {
    id: 'Liyue',
    name: 'Liyue',
    themeColor: '#eab308',
    element: 'Geo',
    bgGradient: 'from-amber-950/40 via-yellow-950/30 to-slate-900',
    subregions: ['Bishui Plain', 'Qiongji Estuary', 'Minlin', 'Sea of Clouds', 'The Chasm', 'Chenyu Vale'],
    focusX: 70,
    focusY: 53
  },
  {
    id: 'Inazuma',
    name: 'Inazuma',
    themeColor: '#a855f7',
    element: 'Electro',
    bgGradient: 'from-purple-950/40 via-violet-950/30 to-slate-900',
    subregions: ['Narukami Island', 'Kannazuka', 'Yashiori Island', 'Watatsumi Island', 'Seirai Island', 'Tsurumi Island'],
    focusX: 86,
    focusY: 84
  },
  {
    id: 'Sumeru',
    name: 'Sumeru',
    themeColor: '#22c55e',
    element: 'Dendro',
    bgGradient: 'from-green-950/40 via-emerald-950/30 to-slate-900',
    subregions: ['Avidya Forest', 'Lokapala Jungle', 'Ashavan Realm', 'Hypostyle Desert', 'Desert of Hadramaveth'],
    focusX: 58,
    focusY: 58
  },
  {
    id: 'Fontaine',
    name: 'Fontaine',
    themeColor: '#0ea5e9',
    element: 'Hydro',
    bgGradient: 'from-blue-950/40 via-cyan-950/30 to-slate-900',
    subregions: ['Court of Fontaine', 'Beryl Region', 'Belleau Region', 'Liffey Region', 'Erinnyes Forest', 'Sea of Bygone Eras'],
    focusX: 57,
    focusY: 32
  },
  {
    id: 'Natlan',
    name: 'Natlan',
    themeColor: '#f97316',
    element: 'Pyro',
    bgGradient: 'from-orange-950/40 via-red-950/30 to-slate-900',
    subregions: ['Basin of Unnumbered Flames', 'Coatepec Mountain', 'Tequenemecan Valley', 'Ochkanatlan'],
    focusX: 33,
    focusY: 54
  }
];

export const MAP_PINS: MapPin[] = [
  // Mondstadt Pins (Mapped to Full Teyvat Map)
  { id: 'm_statue_windrise', name: 'Statue of the Seven (Windrise)', category: 'teleport', region: 'Mondstadt', x: 79.5, y: 34.5, description: 'Under the ancient oak tree planted by Vennessa.' },
  { id: 'm_cecilia_starsnatch', name: 'Cecilia Field Cluster (37x)', category: 'specialty', region: 'Mondstadt', x: 82.0, y: 29.58, description: 'Highest elevation peak on Starsnatch Cliff concentrated at cliff edge.', count: 37 },
  { id: 'm_philanemo_springvale', name: 'Philanemo Mushroom Cluster (18x)', category: 'specialty', region: 'Mondstadt', x: 77.0, y: 35.22, description: 'Growing on the roofs and chimneys of Springvale and Mondstadt houses.', count: 18 },
  { id: 'm_valberry_point', name: 'Valberry Grove (48x)', category: 'specialty', region: 'Mondstadt', x: 81.0, y: 24.38, description: 'Stormbearer Point clifftops (4 berries per bush).', count: 48 },
  { id: 'm_boss_dvalin', name: 'Trounce Domain: Stormterror', category: 'boss', region: 'Mondstadt', x: 72.0, y: 29.35, description: 'Weekly boss: Stormterror’s Lair.' },
  { id: 'm_boss_andrius', name: 'Dominator of Wolves (Andrius)', category: 'boss', region: 'Mondstadt', x: 74.17, y: 34.32, description: 'Weekly boss arena in Wolvendom.' },
  { id: 'm_anemo_oculus_1', name: 'Anemoculus (Starsnatch Cliff)', category: 'oculus', region: 'Mondstadt', x: 82.8, y: 28.5, description: 'Floating at the very edge of the eastern cliff.' },
  { id: 'm_crystal_chunk_1', name: 'Crystal Ore Mining Hotspot', category: 'ore', region: 'Mondstadt', x: 71.5, y: 30.5, description: 'Around Stormterror central tower canyon.', count: 12 },
  { id: 'm_shrine_brightcrown', name: 'Shrine of Depths (Brightcrown)', category: 'shrine', region: 'Mondstadt', x: 73.2, y: 27.8, description: 'Contains luxurious chest + 40 Primogems.' },

  // Liyue Pins (Mapped to Full Teyvat Map)
  { id: 'l_statue_harbor', name: 'Statue of the Seven (Liyue Harbor)', category: 'teleport', region: 'Liyue', x: 73.67, y: 60.51, description: 'Overlooking the Sea of Clouds and Liyue Harbor.' },
  { id: 'l_silk_wangshu', name: 'Silk Flower Grove (Wangshu Inn)', category: 'specialty', region: 'Liyue', x: 72.33, y: 49.22, description: 'Red bushes directly surrounding Wangshu Inn.', count: 14 },
  { id: 'l_jueyun_chili_qingce', name: 'Jueyun Chili Terraces (Qingce)', category: 'specialty', region: 'Liyue', x: 68.67, y: 41.09, description: 'Terraced farms of Qingce Village (3 chilis per stalk).', count: 32 },
  { id: 'l_cor_lapis_hulao', name: 'Cor Lapis Caverns (Mt. Hulao)', category: 'specialty', region: 'Liyue', x: 63.67, y: 50.12, description: 'Dense orange crystal clusters along the path up Mt. Hulao.', count: 18 },
  { id: 'l_qingxin_karst', name: 'Qingxin Mountain Peaks (Jueyun)', category: 'specialty', region: 'Liyue', x: 66.0, y: 48.77, description: 'Atop stone forest pillars. High gliding vantage.', count: 20 },
  { id: 'l_boss_childe', name: 'Trounce Domain: Golden House', category: 'boss', region: 'Liyue', x: 73.0, y: 63.22, description: 'Weekly boss: Tartaglia (Childe).' },
  { id: 'l_boss_azhdaha', name: 'Trounce Domain: Dragon-Queller', category: 'boss', region: 'Liyue', x: 63.0, y: 49.22, description: 'Weekly boss: Azhdaha.' },
  { id: 'l_geoculus_guyun', name: 'Geoculus (Guyun Clifftop)', category: 'oculus', region: 'Liyue', x: 78.67, y: 63.67, description: 'High summit above the 4 Ruin Guards in Guyun Stone Forest.' },
  { id: 'l_shrine_guyun', name: 'Shrine of Depths (Guyun)', category: 'shrine', region: 'Liyue', x: 79.2, y: 65.1, description: 'Southernmost islet in Guyun Stone Forest.' },

  // Inazuma Pins (Mapped to Full Teyvat Map)
  { id: 'i_statue_narukami', name: 'Grand Narukami Shrine (Sacred Sakura)', category: 'teleport', region: 'Inazuma', x: 90.67, y: 77.67, description: 'Summit of Mt. Yougou housing the Sacred Sakura Tree.' },
  { id: 'i_amakumo_fruit_cluster', name: 'Amakumo Fruit Mega Cluster (96x)', category: 'specialty', region: 'Inazuma', x: 89.33, y: 93.02, description: 'Seirai Island around the crater of Amakumo Peak.', count: 96 },
  { id: 'i_naku_weed_tatarasuna', name: 'Naku Weed (Mikage Furnace)', category: 'specialty', region: 'Inazuma', x: 84.67, y: 83.99, description: 'Growing in Electro-charged fissures around the furnace.', count: 24 },
  { id: 'i_sango_pearl_reef', name: 'Sango Pearl Reef (Sangonomiya)', category: 'specialty', region: 'Inazuma', x: 77.0, y: 83.09, description: 'Inside giant clamshells in the coral lagoons.', count: 44 },
  { id: 'i_sea_ganoderma_beach', name: 'Sea Ganoderma (Nazuchi Beach)', category: 'specialty', region: 'Inazuma', x: 82.5, y: 84.5, description: 'All along the shorelines of shipwreck beach.', count: 22 },
  { id: 'i_boss_raiden', name: 'Trounce Domain: End of Oneiric Euthymia', category: 'boss', region: 'Inazuma', x: 91.5, y: 78.2, description: 'Weekly boss: Raiden Shogun puppet.' },
  { id: 'i_electro_oculus_1', name: 'Electroculus (Tenshukaku Roof)', category: 'oculus', region: 'Inazuma', x: 92.0, y: 83.99, description: 'At the very tip of the Raiden Shogun palace spire.' },

  // Sumeru Pins (Mapped to Full Teyvat Map)
  { id: 's_statue_sumeru_city', name: 'Statue of the Seven (Sumeru City)', category: 'teleport', region: 'Sumeru', x: 62.0, y: 57.58, description: 'At the entrance bridge to the tree canopy city.' },
  { id: 's_kalpalata_mawtiyima', name: 'Kalpalata Lotus (Mawtiyima)', category: 'specialty', region: 'Sumeru', x: 65.33, y: 51.48, description: 'Suspended from high cliffs. Use Nahida Hold E!', count: 21 },
  { id: 's_rukkhashava_apam', name: 'Rukkhashava Mushroom (Apam Woods)', category: 'specialty', region: 'Sumeru', x: 57.5, y: 65.93, description: 'Growing on elevated wooden branches in rain forest.', count: 26 },
  { id: 's_boss_scara', name: 'Trounce Domain: Joururi Workshop', category: 'boss', region: 'Sumeru', x: 64.17, y: 56.9, description: 'Weekly boss: Shouki no Kami (Scaramouche).' },
  { id: 's_boss_apep', name: 'Trounce Domain: Realm of Beginnings', category: 'boss', region: 'Sumeru', x: 48.67, y: 46.96, description: 'Weekly boss: Guardian of Apep’s Oasis.' },

  // Fontaine Pins (Mapped to Full Teyvat Map)
  { id: 'f_statue_court', name: 'Statue of the Seven (Court of Fontaine)', category: 'teleport', region: 'Fontaine', x: 55.33, y: 32.96, description: 'Outside the Palais Mermonia overlooking the fountain.' },
  { id: 'f_lakelight_lily_weeping', name: 'Lakelight Lily (Weeping Willow)', category: 'specialty', region: 'Fontaine', x: 61.33, y: 29.8, description: 'Surrounding the mystical glowing willow tree.', count: 34 },
  { id: 'f_lumitoile_seahorse', name: 'Lumitoile Clustered Beach', category: 'specialty', region: 'Fontaine', x: 59.8, y: 27.5, description: 'Submerged iron pipes and shoreline rocks.', count: 28 },
  { id: 'f_rainbow_rose_fountain', name: 'Rainbow Rose Garden', category: 'specialty', region: 'Fontaine', x: 56.1, y: 33.5, description: 'Paved walkways and lawns around Court of Fontaine.', count: 25 },
  { id: 'f_boss_whale', name: 'Trounce Domain: Shadow of Another World', category: 'boss', region: 'Fontaine', x: 57.0, y: 38.83, description: 'Weekly boss: All-Devouring Narwhal.' },
  { id: 'f_boss_knave', name: 'Trounce Domain: Scattered Ruins', category: 'boss', region: 'Fontaine', x: 53.0, y: 36.58, description: 'Weekly boss: The Knave (Arlecchino).' },

  // Natlan Pins (Mapped to Full Teyvat Map)
  { id: 'n_statue_echoes', name: 'Statue of the Seven (Children of Echoes)', category: 'teleport', region: 'Natlan', x: 35.33, y: 53.06, description: 'Carved directly out of ancient red sandstone cliffs.' },
  { id: 'n_saurian_succulent_canyon', name: 'Saurian Succulents (Canyon Ledges)', category: 'specialty', region: 'Natlan', x: 33.67, y: 55.99, description: 'Ledges along the canyon walls. Use Saurians to gather.', count: 30 },
  { id: 'n_boss_lord_fire', name: 'Trounce Domain: Fireheart Sanctum', category: 'boss', region: 'Natlan', x: 36.33, y: 51.48, description: 'Weekly boss: Lord of Primal Fire.' }
];
