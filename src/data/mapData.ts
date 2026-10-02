import { MapPin, RegionType } from '@/types/genshin';

export interface RegionMapConfig {
  id: RegionType;
  name: string;
  themeColor: string;
  element: string;
  releaseInfo: string;
  version: string;
  releaseDate?: string;
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
    releaseInfo: 'Available since launch (Version 1.0)',
    version: 'Version 1.0',
    bgGradient: 'from-emerald-950/40 via-cyan-950/30 to-slate-900',
    subregions: ['Starfell Valley', 'Galesong Hill', 'Windwail Highland', 'Brightcrown Mountains', 'Dragonspine'],
    focusX: 77.5,
    focusY: 33.0
  },
  {
    id: 'Liyue',
    name: 'Liyue',
    themeColor: '#eab308',
    element: 'Geo',
    releaseInfo: 'Available since launch (Version 1.0)',
    version: 'Version 1.0',
    bgGradient: 'from-amber-950/40 via-yellow-950/30 to-slate-900',
    subregions: ['Bishui Plain', 'Qiongji Estuary', 'Minlin', 'Sea of Clouds', 'The Chasm', 'Chenyu Vale'],
    focusX: 70.0,
    focusY: 53.5
  },
  {
    id: 'Inazuma',
    name: 'Inazuma',
    themeColor: '#a855f7',
    element: 'Electro',
    releaseInfo: 'Released in 2021 (Version 2.0)',
    version: 'Version 2.0',
    releaseDate: '2021',
    bgGradient: 'from-purple-950/40 via-violet-950/30 to-slate-900',
    subregions: ['Narukami Island', 'Kannazuka', 'Yashiori Island', 'Watatsumi Island', 'Seirai Island', 'Tsurumi Island'],
    focusX: 86.5,
    focusY: 85.0
  },
  {
    id: 'Sumeru',
    name: 'Sumeru',
    themeColor: '#22c55e',
    element: 'Dendro',
    releaseInfo: 'Released in 2022 (Version 3.0)',
    version: 'Version 3.0',
    releaseDate: '2022',
    bgGradient: 'from-green-950/40 via-emerald-950/30 to-slate-900',
    subregions: ['Avidya Forest', 'Lokapala Jungle', 'Ashavan Realm', 'Hypostyle Desert', 'Desert of Hadramaveth'],
    focusX: 58.0,
    focusY: 58.0
  },
  {
    id: 'Fontaine',
    name: 'Fontaine',
    themeColor: '#0ea5e9',
    element: 'Hydro',
    releaseInfo: 'Released in 2023 (Version 4.0)',
    version: 'Version 4.0',
    releaseDate: '2023',
    bgGradient: 'from-blue-950/40 via-cyan-950/30 to-slate-900',
    subregions: ['Court of Fontaine', 'Beryl Region', 'Belleau Region', 'Liffey Region', 'Erinnyes Forest', 'Sea of Bygone Eras'],
    focusX: 57.0,
    focusY: 32.5
  },
  {
    id: 'Natlan',
    name: 'Natlan',
    themeColor: '#f97316',
    element: 'Pyro',
    releaseInfo: 'Released in 2024 (Version 5.0)',
    version: 'Version 5.0',
    releaseDate: '2024',
    bgGradient: 'from-orange-950/40 via-red-950/30 to-slate-900',
    subregions: ['Basin of Unnumbered Flames', 'Coatepec Mountain', 'Tequenemecan Valley', 'Ochkanatlan'],
    focusX: 33.5,
    focusY: 54.0
  },
  {
    id: 'Nod-Krai',
    name: 'Nod-Krai',
    themeColor: '#10b981',
    element: 'Autonomous Region',
    releaseInfo: 'Released in 2025 (Version 6.0)',
    version: 'Version 6.0',
    releaseDate: '2025',
    bgGradient: 'from-teal-950/40 via-emerald-950/30 to-slate-900',
    subregions: ['Frontier Marches', 'Aurora High Steppes', 'Sovereign Enclave', 'Permafrost Outpost'],
    focusX: 42.0,
    focusY: 22.0
  },
  {
    id: 'Snezhnaya',
    name: 'Snezhnaya',
    themeColor: '#38bdf8',
    element: 'Cryo',
    releaseInfo: 'Released on August 12, 2026 (Version 7.0)',
    version: 'Version 7.0',
    releaseDate: 'August 12, 2026',
    bgGradient: 'from-sky-950/40 via-indigo-950/30 to-slate-900',
    subregions: ['Zapolyarny Palace Citadel', 'Frostpeak Tundra', 'Glacial Bastion', 'Ironforge Port', 'Snowblind Ravine'],
    focusX: 50.0,
    focusY: 15.0
  }
];

export const MAP_PINS: MapPin[] = [
  // ==========================================
  // MONDSTADT PINS
  // ==========================================
  { id: 'm_cecilia_starsnatch', name: 'Cecilia Field (37x)', category: 'specialty', region: 'Mondstadt', x: 82.0, y: 29.58, description: 'Highest elevation peak on Starsnatch Cliff concentrated on the eastern cliff edge.', count: 37 },
  { id: 'm_philanemo_springvale', name: 'Philanemo Mushroom (Springvale)', category: 'specialty', region: 'Mondstadt', x: 77.0, y: 35.22, description: 'Growing on the roofs and chimneys of Springvale village houses.', count: 18 },
  { id: 'm_philanemo_mondstadt', name: 'Philanemo Mushroom (Mondstadt City)', category: 'specialty', region: 'Mondstadt', x: 77.4, y: 32.0, description: 'Under the eaves and rooftops throughout Mondstadt City.', count: 25 },
  { id: 'm_valberry_point', name: 'Valberry Grove (Stormbearer)', category: 'specialty', region: 'Mondstadt', x: 81.0, y: 24.38, description: 'Stormbearer Point clifftops (4 berries per plant).', count: 48 },
  { id: 'm_small_lamp_whispering', name: 'Small Lamp Grass (Whispering Woods)', category: 'specialty', region: 'Mondstadt', x: 79.2, y: 30.8, description: 'Forest floor of Whispering Woods. Glows brightly at night.', count: 24 },
  { id: 'm_small_lamp_wolvendom', name: 'Small Lamp Grass (Wolvendom)', category: 'specialty', region: 'Mondstadt', x: 74.8, y: 34.6, description: 'Near the entrance trails and streams of Wolvendom.', count: 22 },
  { id: 'm_dandelion_gates', name: 'Dandelion Seed (Mondstadt Gates)', category: 'specialty', region: 'Mondstadt', x: 77.8, y: 33.2, description: 'Directly outside the front drawbridge of Mondstadt City. Hit with Anemo.', count: 15 },
  { id: 'm_dandelion_cape_oath', name: 'Dandelion Seed (Cape Oath)', category: 'specialty', region: 'Mondstadt', x: 83.2, y: 38.4, description: 'Scattered along the windy grassy bluff of Cape Oath.', count: 12 },
  { id: 'm_calla_lily_springvale', name: 'Calla Lily (Springvale Pond)', category: 'specialty', region: 'Mondstadt', x: 76.8, y: 35.5, description: 'Directly along the shoreline of Springvale village pond.', count: 16 },
  { id: 'm_calla_lily_winery', name: 'Calla Lily (Dawn Winery)', category: 'specialty', region: 'Mondstadt', x: 74.9, y: 37.8, description: 'Riverbank shallows bordering Dawn Winery vineyards.', count: 14 },
  { id: 'm_windwheel_windrise', name: 'Windwheel Aster (Windrise Tree)', category: 'specialty', region: 'Mondstadt', x: 79.4, y: 34.6, description: 'Clustered around the giant oak tree at Windrise Statue.', count: 20 },
  { id: 'm_windwheel_stormterror', name: 'Windwheel Aster (Stormterror Lair)', category: 'specialty', region: 'Mondstadt', x: 71.6, y: 29.8, description: 'Around the outer walkways of the Stormterror tower.', count: 18 },
  { id: 'm_wolfhook_wolvendom', name: 'Wolfhook Brambles (33x)', category: 'specialty', region: 'Mondstadt', x: 74.2, y: 34.8, description: 'Growing low in thorny brambles throughout Wolvendom.', count: 33 },
  { id: 'm_anemo_starsnatch', name: 'Anemoculus (Starsnatch Cliff)', category: 'oculus', region: 'Mondstadt', x: 82.8, y: 28.5, description: 'Floating at the very edge of the eastern cliff.' },
  { id: 'm_anemo_stormterror', name: 'Anemoculus (Stormterror Spire)', category: 'oculus', region: 'Mondstadt', x: 72.0, y: 29.35, description: 'At the highest central pinnacle above the barrier shield.' },
  { id: 'm_anemo_cape_oath', name: 'Anemoculus (Cape Oath Gateway)', category: 'oculus', region: 'Mondstadt', x: 83.5, y: 38.6, description: 'Above the Seelie puzzle portal to Spiral Abyss.' },
  { id: 'm_anemo_windrise', name: 'Anemoculus (Windrise Oak Bough)', category: 'oculus', region: 'Mondstadt', x: 79.5, y: 34.5, description: 'High in the main branches of Vennessa’s oak tree.' },
  { id: 'm_statue_windrise', name: 'Statue of the Seven (Windrise)', category: 'teleport', region: 'Mondstadt', x: 79.5, y: 34.7, description: 'Beneath the ancient oak tree planted by Vennessa.' },
  { id: 'm_statue_winery', name: 'Statue of the Seven (Dawn Winery)', category: 'teleport', region: 'Mondstadt', x: 75.0, y: 37.2, description: 'Hillside path connecting Mondstadt and Liyue.' },
  { id: 'm_statue_stormterror', name: 'Statue of the Seven (Stormterror)', category: 'teleport', region: 'Mondstadt', x: 71.8, y: 28.9, description: 'Overlooking the ruined city of Decarabian.' },
  { id: 'm_statue_dragonspine', name: 'Statue of the Seven (Dragonspine)', category: 'teleport', region: 'Mondstadt', x: 78.2, y: 40.5, description: 'Snow-covered mountain pass leading toward the peak.' },
  { id: 'm_boss_dvalin', name: 'Trounce: Stormterror (Dvalin)', category: 'boss', region: 'Mondstadt', x: 72.0, y: 29.35, description: 'Weekly boss: Confront Stormterror.' },
  { id: 'm_boss_andrius', name: 'Dominator of Wolves (Andrius)', category: 'boss', region: 'Mondstadt', x: 74.17, y: 34.32, description: 'Weekly boss arena in central Wolvendom.' },
  { id: 'm_ore_stormterror', name: 'Crystal Chunk Vein (Stormterror)', category: 'ore', region: 'Mondstadt', x: 71.5, y: 30.5, description: 'Deep in the canyon floor surrounding the tower.', count: 12 },
  { id: 'm_ore_dragonspine', name: 'Starsilver Ore Clusters', category: 'ore', region: 'Mondstadt', x: 78.8, y: 42.0, description: 'Along the frozen riverbanks and cavern walls of Dragonspine.', count: 16 },
  { id: 'm_shrine_brightcrown', name: 'Shrine of Depths (Brightcrown)', category: 'shrine', region: 'Mondstadt', x: 73.2, y: 27.8, description: 'Contains luxurious chest + 40 Primogems.' },
  { id: 'm_shrine_galesong', name: 'Shrine of Depths (Galesong Hill)', category: 'shrine', region: 'Mondstadt', x: 81.6, y: 38.2, description: 'Cliff plateau south of Dadaupa Gorge.' },

  // ==========================================
  // LIYUE PINS
  // ==========================================
  { id: 'l_cor_lapis_hulao', name: 'Cor Lapis Caverns (Mt. Hulao)', category: 'specialty', region: 'Liyue', x: 63.67, y: 50.12, description: 'Dense orange amber crystal clusters along the path up Mt. Hulao.', count: 18 },
  { id: 'l_cor_lapis_cuijue', name: 'Cor Lapis (Cuijue Slope)', category: 'specialty', region: 'Liyue', x: 67.2, y: 53.0, description: 'Pillars of Peace valley and cavern bottoms.', count: 15 },
  { id: 'l_silk_wangshu', name: 'Silk Flower Grove (Wangshu Inn)', category: 'specialty', region: 'Liyue', x: 72.33, y: 49.22, description: 'Red bushes directly surrounding Wangshu Inn courtyards.', count: 14 },
  { id: 'l_silk_yujing', name: 'Silk Flower (Yujing Terrace)', category: 'specialty', region: 'Liyue', x: 73.4, y: 60.1, description: 'Ornamental gardens in upper Liyue Harbor.', count: 14 },
  { id: 'l_jueyun_chili_qingce', name: 'Jueyun Chili Terraces (Qingce)', category: 'specialty', region: 'Liyue', x: 68.67, y: 41.09, description: 'Terraced farms of Qingce Village (3 chilis per stalk).', count: 32 },
  { id: 'l_jueyun_chili_minlin', name: 'Jueyun Chili (Huaguang Forest)', category: 'specialty', region: 'Liyue', x: 65.0, y: 47.8, description: 'Mountain valleys and cliffside pathways.', count: 20 },
  { id: 'l_qingxin_karst', name: 'Qingxin Peaks (Jueyun Karst)', category: 'specialty', region: 'Liyue', x: 66.0, y: 48.77, description: 'Highest summits of stone forest pillars.', count: 20 },
  { id: 'l_qingxin_huaguang', name: 'Qingxin (Huaguang Stone Forest)', category: 'specialty', region: 'Liyue', x: 64.2, y: 46.5, description: 'Glide from high summits around Qingyun Peak.', count: 18 },
  { id: 'l_glaze_lily_yujing', name: 'Glaze Lily (Yujing Terrace)', category: 'specialty', region: 'Liyue', x: 73.6, y: 60.3, description: 'Blooms at night in Liyue Harbor administrative district.', count: 16 },
  { id: 'l_glaze_lily_qingce', name: 'Glaze Lily (Qingce Terraces)', category: 'specialty', region: 'Liyue', x: 68.9, y: 41.5, description: 'Scattered among the water fields of Qingce.', count: 14 },
  { id: 'l_noctilucous_mingyun', name: 'Noctilucous Jade (Mingyun Village)', category: 'specialty', region: 'Liyue', x: 75.8, y: 49.5, description: 'Luminous blue minerals inside abandoned mine tunnels.', count: 22 },
  { id: 'l_starconch_yaoguang', name: 'Starconch Beach (Yaoguang Shoal)', category: 'specialty', region: 'Liyue', x: 77.2, y: 53.8, description: 'Lying in the surf line along the sandy shoreline.', count: 28 },
  { id: 'l_starconch_guyun', name: 'Starconch (Guyun Stone Forest)', category: 'specialty', region: 'Liyue', x: 78.4, y: 64.2, description: 'Shores of the Guyun archipelago.', count: 24 },
  { id: 'l_violetgrass_cuijue', name: 'Violetgrass (Cuijue Slope Cliffs)', category: 'specialty', region: 'Liyue', x: 67.5, y: 52.2, description: 'Sheer vertical rock faces. Use Nahida Hold E!', count: 16 },
  { id: 'l_violetgrass_wuwang', name: 'Violetgrass (Wuwang Hill)', category: 'specialty', region: 'Liyue', x: 70.8, y: 41.8, description: 'Cliff faces surrounding the mist-shrouded ruins.', count: 18 },
  { id: 'l_clearwater_chenyu', name: 'Clearwater Jade (Chenyu Vale)', category: 'specialty', region: 'Liyue', x: 65.5, y: 39.5, description: 'Resting on river boulders and turtle backs in Chenyu Vale.', count: 26 },
  { id: 'l_geoculus_guyun', name: 'Geoculus (Guyun Clifftop)', category: 'oculus', region: 'Liyue', x: 78.67, y: 63.67, description: 'Above the 4 Ruin Guards in Guyun Stone Forest.' },
  { id: 'l_geoculus_qingce', name: 'Geoculus (Qingce Waterfalls)', category: 'oculus', region: 'Liyue', x: 68.2, y: 40.5, description: 'Hidden inside the cave behind the waterfall puzzle.' },
  { id: 'l_geoculus_tianheng', name: 'Geoculus (Mt. Tianheng Peak)', category: 'oculus', region: 'Liyue', x: 72.8, y: 59.2, description: 'High crane mechanism overlooking Liyue Harbor.' },
  { id: 'l_statue_harbor', name: 'Statue of the Seven (Liyue Harbor)', category: 'teleport', region: 'Liyue', x: 73.67, y: 60.51, description: 'Overlooking the Sea of Clouds and Liyue Harbor.' },
  { id: 'l_statue_dihua', name: 'Statue of the Seven (Dihua Marsh)', category: 'teleport', region: 'Liyue', x: 71.9, y: 47.2, description: 'Central marsh entrance to Liyue.' },
  { id: 'l_statue_qingyun', name: 'Statue of the Seven (Qingyun Peak)', category: 'teleport', region: 'Liyue', x: 64.9, y: 48.0, description: 'Vantage point above the clouds of Jueyun Karst.' },
  { id: 'l_statue_chasm', name: 'Statue of the Seven (The Chasm)', category: 'teleport', region: 'Liyue', x: 64.8, y: 57.2, description: 'Overlooking the crater rim of The Chasm.' },
  { id: 'l_boss_childe', name: 'Trounce: Golden House (Childe)', category: 'boss', region: 'Liyue', x: 73.0, y: 63.22, description: 'Weekly boss: Tartaglia (Childe).' },
  { id: 'l_boss_azhdaha', name: 'Trounce: Dragon-Queller (Azhdaha)', category: 'boss', region: 'Liyue', x: 63.0, y: 49.22, description: 'Weekly boss: Azhdaha under the Dragon-Queller tree.' },
  { id: 'l_ore_chasm', name: 'White Iron & Crystal Veins (Chasm)', category: 'ore', region: 'Liyue', x: 65.2, y: 56.8, description: 'Quarry terraces on the surface of The Chasm.', count: 20 },
  { id: 'l_shrine_guyun', name: 'Shrine of Depths (Guyun)', category: 'shrine', region: 'Liyue', x: 79.2, y: 65.1, description: 'Southernmost islet in Guyun Stone Forest.' },
  { id: 'l_shrine_minlin', name: 'Shrine of Depths (Nantianmen)', category: 'shrine', region: 'Liyue', x: 62.5, y: 51.5, description: 'Plateau near Nantianmen river bend.' },

  // ==========================================
  // INAZUMA PINS
  // ==========================================
  { id: 'i_naku_weed_tatarasuna', name: 'Naku Weed (Mikage Furnace)', category: 'specialty', region: 'Inazuma', x: 84.67, y: 83.99, description: 'Electro-charged fissures around the central furnace.', count: 24 },
  { id: 'i_naku_weed_seirai', name: 'Naku Weed (Seirai Island)', category: 'specialty', region: 'Inazuma', x: 88.5, y: 91.5, description: 'All across the outskirts of Seirai Island.', count: 35 },
  { id: 'i_amakumo_fruit_cluster', name: 'Amakumo Fruit Mega Field (96x)', category: 'specialty', region: 'Inazuma', x: 89.33, y: 93.02, description: 'Seirai Island around the crater of Amakumo Peak.', count: 96 },
  { id: 'i_sango_pearl_reef', name: 'Sango Pearl Reef (Watatsumi)', category: 'specialty', region: 'Inazuma', x: 77.0, y: 83.09, description: 'Inside giant pink clamshells in coral lagoons.', count: 44 },
  { id: 'i_sea_ganoderma_beach', name: 'Sea Ganoderma (Nazuchi Beach)', category: 'specialty', region: 'Inazuma', x: 82.5, y: 84.5, description: 'Shoreline rocks of the shipwreck battlefield.', count: 22 },
  { id: 'i_sea_ganoderma_ritou', name: 'Sea Ganoderma (Ritou Waters)', category: 'specialty', region: 'Inazuma', x: 88.8, y: 77.5, description: 'Tide pools surrounding Ritou harbor.', count: 18 },
  { id: 'i_onikabuto_yougou', name: 'Onikabuto (Mt. Yougou Cavern)', category: 'specialty', region: 'Inazuma', x: 90.2, y: 76.5, description: 'Beetles clinging to trees in the underground cavern of Mt. Yougou.', count: 20 },
  { id: 'i_dendrobium_nazuchi', name: 'Dendrobium (Nazuchi Shallows)', category: 'specialty', region: 'Inazuma', x: 82.9, y: 84.8, description: 'Blood-red flowers blooming across the battlefield.', count: 29 },
  { id: 'i_fluorescent_tsurumi', name: 'Fluorescent Fungus (Tsurumi)', category: 'specialty', region: 'Inazuma', x: 84.5, y: 94.5, description: 'Luminescent blue mushrooms under trees on Tsurumi Island.', count: 32 },
  { id: 'i_electro_oculus_tenshukaku', name: 'Electroculus (Tenshukaku Spire)', category: 'oculus', region: 'Inazuma', x: 92.0, y: 83.99, description: 'At the very tip of the Raiden Shogun palace spire.' },
  { id: 'i_electro_oculus_yougou', name: 'Electroculus (Mt. Yougou Peak)', category: 'oculus', region: 'Inazuma', x: 90.8, y: 77.2, description: 'Floating high above the Sacred Sakura Tree.' },
  { id: 'i_electro_oculus_seirai', name: 'Electroculus (Amakumo Cloud)', category: 'oculus', region: 'Inazuma', x: 89.2, y: 92.8, description: 'Suspended in the sky above the crater lake.' },
  { id: 'i_statue_narukami', name: 'Statue of the Seven (Ritou)', category: 'teleport', region: 'Inazuma', x: 89.5, y: 78.5, description: 'First port of entry into Inazuma on Narukami Island.' },
  { id: 'i_statue_kannazuka', name: 'Statue of the Seven (Kannazuka)', category: 'teleport', region: 'Inazuma', x: 85.2, y: 83.2, description: 'Overlooking Tatarasuna and Kujou Encampment.' },
  { id: 'i_statue_watatsumi', name: 'Statue of the Seven (Watatsumi)', category: 'teleport', region: 'Inazuma', x: 77.5, y: 82.2, description: 'Cliff gate overlooking the waterfalls of Sangonomiya.' },
  { id: 'i_statue_seirai', name: 'Statue of the Seven (Seirai Island)', category: 'teleport', region: 'Inazuma', x: 88.2, y: 90.8, description: 'Northern shore of the thunder-blasted island.' },
  { id: 'i_boss_raiden', name: 'Trounce: End of Oneiric Euthymia', category: 'boss', region: 'Inazuma', x: 91.5, y: 78.2, description: 'Weekly boss: Raiden Shogun puppet / Magatsu Mitake Narukami no Mikoto.' },
  { id: 'i_boss_signora', name: 'Trounce: Narukami Island Tenshukaku', category: 'boss', region: 'Inazuma', x: 92.1, y: 83.5, description: 'Weekly boss: La Signora duel.' },
  { id: 'i_ore_amethyst', name: 'Amethyst Lump Hotspot (Tatarasuna)', category: 'ore', region: 'Inazuma', x: 84.8, y: 84.2, description: 'Electro crystal mining veins around the forge.', count: 18 },
  { id: 'i_shrine_narukami', name: 'Shrine of Depths (Ritou Sea)', category: 'shrine', region: 'Inazuma', x: 88.2, y: 76.8, description: 'Small rocky islet southwest of Ritou.' },
  { id: 'i_shrine_watatsumi', name: 'Shrine of Depths (Watatsumi)', category: 'shrine', region: 'Inazuma', x: 76.2, y: 84.5, description: 'Underwater cavern approach in Watatsumi reef.' },

  // ==========================================
  // SUMERU PINS
  // ==========================================
  { id: 's_kalpalata_mawtiyima', name: 'Kalpalata Lotus (Mawtiyima)', category: 'specialty', region: 'Sumeru', x: 65.33, y: 51.48, description: 'Suspended from high cliffs. Use Nahida Hold E!', count: 21 },
  { id: 's_kalpalata_apam', name: 'Kalpalata Lotus (Apam Waterfalls)', category: 'specialty', region: 'Sumeru', x: 57.2, y: 66.5, description: 'Hanging over the grand waterfalls of Apam Woods.', count: 18 },
  { id: 's_rukkhashava_apam', name: 'Rukkhashava Mushroom (Apam Woods)', category: 'specialty', region: 'Sumeru', x: 57.5, y: 65.93, description: 'Growing on elevated wooden branches in rain forest.', count: 26 },
  { id: 's_rukkhashava_mawtiyima', name: 'Rukkhashava (Mawtiyima Stems)', category: 'specialty', region: 'Sumeru', x: 65.8, y: 51.0, description: 'Inside giant glowing mushroom caps.', count: 24 },
  { id: 's_padisarah_sumeru_city', name: 'Padisarah (Sumeru City Gardens)', category: 'specialty', region: 'Sumeru', x: 62.4, y: 57.8, description: 'Lush purple blooms throughout city garden walks.', count: 16 },
  { id: 's_padisarah_alcazarzaray', name: 'Padisarah (Palace of Alcazarzaray)', category: 'specialty', region: 'Sumeru', x: 64.0, y: 53.8, description: 'Ornamental grounds around Dori’s palace.', count: 12 },
  { id: 's_scarab_deshret', name: 'Scarab Dunes (Mausoleum)', category: 'specialty', region: 'Sumeru', x: 52.8, y: 61.2, description: 'Rolling dung balls across the golden dunes of Hypostyle Desert.', count: 22 },
  { id: 's_henna_berry_aaru', name: 'Henna Berry (Aaru Village)', category: 'specialty', region: 'Sumeru', x: 56.4, y: 59.8, description: 'Cactus plants growing along desert ravines.', count: 18 },
  { id: 's_mourning_flower_swamp', name: 'Mourning Flower (Asipattravana)', category: 'specialty', region: 'Sumeru', x: 53.5, y: 47.8, description: 'Red sorrowful blooms resting in swamp waters.', count: 26 },
  { id: 's_dendroculus_sumeru_tree', name: 'Dendroculus (Divine Tree Crown)', category: 'oculus', region: 'Sumeru', x: 62.2, y: 57.2, description: 'Top of the giant tree above the Akademiya.' },
  { id: 's_dendroculus_deshret', name: 'Dendroculus (Deshret Pyramid Tip)', category: 'oculus', region: 'Sumeru', x: 52.5, y: 61.5, description: 'At the exact apex of the Great Mausoleum.' },
  { id: 's_statue_sumeru_city', name: 'Statue of the Seven (Sumeru City)', category: 'teleport', region: 'Sumeru', x: 62.0, y: 57.58, description: 'At the entrance bridge to the tree canopy city.' },
  { id: 's_statue_aaru', name: 'Statue of the Seven (Aaru Village)', category: 'teleport', region: 'Sumeru', x: 56.8, y: 59.2, description: 'Cliff gate guarding the passage into the desert.' },
  { id: 's_boss_scara', name: 'Trounce: Joururi Workshop (Scara)', category: 'boss', region: 'Sumeru', x: 64.17, y: 56.9, description: 'Weekly boss: Shouki no Kami, the Prodigal.' },
  { id: 's_boss_apep', name: 'Trounce: Realm of Beginnings (Apep)', category: 'boss', region: 'Sumeru', x: 48.67, y: 46.96, description: 'Weekly boss: Guardian of Apep’s Oasis in desert depths.' },
  { id: 's_shrine_avidya', name: 'Shrine of Depths (Avidya Forest)', category: 'shrine', region: 'Sumeru', x: 63.8, y: 59.5, description: 'Cliff edge east of Chinvat Ravine.' },

  // ==========================================
  // FONTAINE PINS
  // ==========================================
  { id: 'f_lakelight_lily_weeping', name: 'Lakelight Lily (Weeping Willow)', category: 'specialty', region: 'Fontaine', x: 61.33, y: 29.8, description: 'Surrounding the mystical glowing willow tree.', count: 34 },
  { id: 'f_lumitoile_seahorse', name: 'Lumitoile (Liffey Region)', category: 'specialty', region: 'Fontaine', x: 59.8, y: 27.5, description: 'Submerged iron pipes and shoreline rocks.', count: 28 },
  { id: 'f_rainbow_rose_fountain', name: 'Rainbow Rose (Court of Fontaine)', category: 'specialty', region: 'Fontaine', x: 56.1, y: 33.5, description: 'Paved walkways and lawns around Court of Fontaine.', count: 25 },
  { id: 'f_rainbow_rose_marcotte', name: 'Rainbow Rose (Marcotte Station)', category: 'specialty', region: 'Fontaine', x: 58.2, y: 31.8, description: 'Garden paths outside the aquabus terminal.', count: 18 },
  { id: 'f_romaritime_flower_elton', name: 'Romaritime Flower (Belleau Shores)', category: 'specialty', region: 'Fontaine', x: 56.8, y: 38.2, description: 'Coastal shallows and underwater trenches.', count: 24 },
  { id: 'f_beryl_conch_ravine', name: 'Beryl Conch (Thermal Trenches)', category: 'specialty', region: 'Fontaine', x: 55.4, y: 36.8, description: 'Deep underwater vents and Elton Trench walls.', count: 20 },
  { id: 'f_hydroculus_mermonia', name: 'Hydroculus (Palais Mermonia Spire)', category: 'oculus', region: 'Fontaine', x: 55.2, y: 32.8, description: 'Very peak of the Palais Mermonia dome.' },
  { id: 'f_hydroculus_urania', name: 'Hydroculus (Loch Urania Gale)', category: 'oculus', region: 'Fontaine', x: 61.8, y: 27.2, description: 'Suspended in the eye of the stormy lake vortex.' },
  { id: 'f_statue_court', name: 'Statue of the Seven (Court of Fontaine)', category: 'teleport', region: 'Fontaine', x: 55.33, y: 32.96, description: 'Outside the Palais Mermonia overlooking the fountain.' },
  { id: 'f_statue_erinnyes', name: 'Statue of the Seven (Erinnyes Forest)', category: 'teleport', region: 'Fontaine', x: 60.5, y: 31.2, description: 'Path overlooking the weeping willow lake.' },
  { id: 'f_statue_belleau', name: 'Statue of the Seven (Belleau Region)', category: 'teleport', region: 'Fontaine', x: 57.2, y: 39.5, description: 'Entrance port of Romaritime Harbor.' },
  { id: 'f_boss_whale', name: 'Trounce: All-Devouring Narwhal', category: 'boss', region: 'Fontaine', x: 57.0, y: 38.83, description: 'Weekly boss: Shadow of Another World.' },
  { id: 'f_boss_knave', name: 'Trounce: The Knave (Arlecchino)', category: 'boss', region: 'Fontaine', x: 53.0, y: 36.58, description: 'Weekly boss: Scattered Ruins / The Knave.' },
  { id: 'f_ore_condessence', name: 'Condessence Crystal Hotspot', category: 'ore', region: 'Fontaine', x: 57.8, y: 34.2, description: 'Underwater hydrothermal vents in Fontaine basin.', count: 18 },
  { id: 'f_shrine_beryl', name: 'Shrine of Depths (Beryl Region)', category: 'shrine', region: 'Fontaine', x: 54.2, y: 37.8, description: 'Hill summit overlooking the skull remains of Elynas.' },

  // ==========================================
  // NATLAN PINS
  // ==========================================
  { id: 'n_saurian_succulent_canyon', name: 'Saurian Claw Succulents (30x)', category: 'specialty', region: 'Natlan', x: 33.67, y: 55.99, description: 'Ledges along canyon walls. Use Saurians to scale cliff faces.', count: 30 },
  { id: 'n_quenepa_berry_coatepec', name: 'Quenepa Berry (Coatepec Trees)', category: 'specialty', region: 'Natlan', x: 35.8, y: 52.2, description: 'Growing on mountain trees and Scions of Canopy territory.', count: 24 },
  { id: 'n_sprayfeather_gill_basin', name: 'Sprayfeather Gill (Hot Springs)', category: 'specialty', region: 'Natlan', x: 31.5, y: 56.5, description: 'Shallow volcanic hot springs and riverbeds.', count: 22 },
  { id: 'n_pyroculus_stadium', name: 'Pyroculus (Stadium of Sacred Flame)', category: 'oculus', region: 'Natlan', x: 34.8, y: 54.2, description: 'High above the eternal flame basin of the arena.' },
  { id: 'n_pyroculus_echoes', name: 'Pyroculus (Echoes Canyon Arch)', category: 'oculus', region: 'Natlan', x: 35.4, y: 52.8, description: 'Natural stone arch over the canyon entrance.' },
  { id: 'n_statue_echoes', name: 'Statue of the Seven (Children of Echoes)', category: 'teleport', region: 'Natlan', x: 35.33, y: 53.06, description: 'Carved directly out of ancient red sandstone cliffs.' },
  { id: 'n_statue_canopy', name: 'Statue of the Seven (Scions of Canopy)', category: 'teleport', region: 'Natlan', x: 36.2, y: 51.8, description: 'High among the towering wooden tree village platforms.' },
  { id: 'n_statue_stadium', name: 'Statue of the Seven (Stadium Approach)', category: 'teleport', region: 'Natlan', x: 33.9, y: 54.5, description: 'Paved avenue leading to the Stadium of the Sacred Flame.' },
  { id: 'n_boss_lord_fire', name: 'Trounce: Lord of Primal Fire', category: 'boss', region: 'Natlan', x: 36.33, y: 51.48, description: 'Weekly boss: Fireheart Sanctum arena.' },
  { id: 'n_ore_natlan', name: 'Natlan Volcanic Phlogiston Ore', category: 'ore', region: 'Natlan', x: 32.8, y: 57.2, description: 'Volcanic magma fractures in southern Natlan.', count: 16 },
  { id: 'n_shrine_flames', name: 'Shrine of Depths (Basin of Flames)', category: 'shrine', region: 'Natlan', x: 34.2, y: 57.5, description: 'Red stone sanctuary nestled in volcanic valley.' },

  // ==========================================
  // NOD-KRAI PINS (AUTONOMOUS REGION)
  // ==========================================
  { id: 'nk_aurora_bloom_valley', name: 'Aurora Blossom Fields (28x)', category: 'specialty', region: 'Nod-Krai', x: 42.5, y: 21.8, description: 'Shimmering glacial flora blooming in the Aurora High Steppes under the night sky.', count: 28 },
  { id: 'nk_krai_amber_ridge', name: 'Krai Amber Core Geodes (24x)', category: 'specialty', region: 'Nod-Krai', x: 41.2, y: 23.4, description: 'Fossilized subterranean resin deposits along the Frontier Marches.', count: 24 },
  { id: 'nk_statue_outpost', name: 'Statue of the Seven (Permafrost Outpost)', category: 'teleport', region: 'Nod-Krai', x: 42.0, y: 22.0, description: 'Overlooking the vast neutral plains of the autonomous territory.' },
  { id: 'nk_boss_aurora_warden', name: 'Trounce: Sovereign Aurora Warden', category: 'boss', region: 'Nod-Krai', x: 43.1, y: 20.9, description: 'Weekly boss: Enclave High Citadel challenge.' },

  // ==========================================
  // SNEZHNAYA PINS (CRYO NATION - VERSION 7.0)
  // ==========================================
  { id: 'sn_frostfrost_lily_tundra', name: 'Frostfrost Lily Fields (36x)', category: 'specialty', region: 'Snezhnaya', x: 50.8, y: 14.5, description: 'Permafrost flowers blooming directly atop frozen ice shelves near Zapolyarny Citadel.', count: 36 },
  { id: 'sn_rimeberry_thicket', name: 'Snezhnayan Rimeberry Thicket (32x)', category: 'specialty', region: 'Snezhnaya', x: 49.2, y: 16.2, description: 'Hardy frozen shrubs clustered in the Snowblind Ravine.', count: 32 },
  { id: 'sn_cryoculus_citadel', name: 'Cryoculus (Zapolyarny Palace Spire)', category: 'oculus', region: 'Snezhnaya', x: 50.0, y: 14.2, description: 'Suspended in the biting blizzard vortex above the Tsaritsa’s Throne Room.', count: 1 },
  { id: 'sn_statue_zapolyarny', name: 'Statue of the Seven (Zapolyarny Citadel)', category: 'teleport', region: 'Snezhnaya', x: 50.0, y: 15.0, description: 'The grand imperial statue marking the dominion of the Cryo Archon.' },
  { id: 'sn_boss_tsaritsa_palace', name: 'Trounce: Zapolyarny Imperial Court', category: 'boss', region: 'Snezhnaya', x: 50.2, y: 13.8, description: 'Weekly boss: The Fatui Harbinger High Command.' }
];
