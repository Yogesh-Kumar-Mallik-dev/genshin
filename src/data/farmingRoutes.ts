import { RegionType } from '@/types/genshin';

export interface FarmingWaypointStep {
  stepNumber: number;
  instruction: string;
  count: number;
  elevation: 'Surface' | 'Underground Cave' | 'Underwater' | 'Cliff Peak';
  teleportReference: string;
}

export interface FarmingRoute {
  id: string;
  routeName: string;
  yieldCount: number;
  estimatedMinutes: number;
  difficulty: 'Very Fast' | 'Moderate' | 'Climbing Heavy' | 'Underwater';
  startTeleport: string;
  steps: FarmingWaypointStep[];
}

export interface SpecialtyFarmingProfile {
  id: string;
  name: string;
  region: RegionType;
  iconUrl: string;
  totalWorldSpawns: number;
  ascensionTarget: number; // 168 needed for Lv. 90
  respawnHours: number;
  usedFor: string[];
  radarPassiveCharacter: string;
  shopNpc?: {
    name: string;
    location: string;
    count: number;
    costMora: number;
    refreshDays: number;
  };
  sereniteaPotGarden?: {
    field: string;
    seedName: string;
  };
  proTips: string;
  routes: FarmingRoute[];
}

export const SPECIALTY_FARMING_PROFILES: SpecialtyFarmingProfile[] = [
  // ==========================================
  // MONDSTADT
  // ==========================================
  {
    id: 'cecilia',
    name: 'Cecilia',
    region: 'Mondstadt',
    iconUrl: '/assets/materials/specialties/cecilia.png',
    totalWorldSpawns: 37,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Venti', 'Albedo'],
    radarPassiveCharacter: 'Klee / Mika (Mondstadt radar)',
    shopNpc: {
      name: 'Flora (Florist)',
      location: 'Mondstadt City Entrance Plaza',
      count: 5,
      costMora: 1000,
      refreshDays: 3
    },
    sereniteaPotGarden: {
      field: 'A Path of Value: Luxuriant Glebe',
      seedName: 'Cecilia Seed'
    },
    proTips: 'Starsnatch Cliff has the ONLY wild Cecilias in all of Teyvat. Always pick them in one clean 3-minute sweep from west to east along the summit edge.',
    routes: [
      {
        id: 'cecilia-route-1',
        routeName: 'Starsnatch Cliff Summit Ridge',
        yieldCount: 37,
        estimatedMinutes: 3,
        difficulty: 'Very Fast',
        startTeleport: 'Midsummer Courtyard Domain (or Starsnatch Cliff Teleport Waypoint)',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Midsummer Courtyard Domain, ride the wind current or climb east up to the highest cliff summit.',
            count: 8,
            elevation: 'Cliff Peak',
            teleportReference: 'Midsummer Courtyard Domain'
          },
          {
            stepNumber: 2,
            instruction: 'Follow the eastern cliff ridge line toward the ruined sundial viewpoint. Pick 13 Cecilias grouped near the edge.',
            count: 13,
            elevation: 'Cliff Peak',
            teleportReference: 'Eastern Summit Lookout'
          },
          {
            stepNumber: 3,
            instruction: 'Sweep the south-facing slope of the summit where the remaining 16 Cecilias grow in clusters of 2–3.',
            count: 16,
            elevation: 'Surface',
            teleportReference: 'Southern Slope Ridge'
          }
        ]
      }
    ]
  },
  {
    id: 'philanemo-mushroom',
    name: 'Philanemo Mushroom',
    region: 'Mondstadt',
    iconUrl: '/assets/materials/specialties/philanemo-mushroom.png',
    totalWorldSpawns: 50,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Mona', 'Klee', 'Barbara'],
    radarPassiveCharacter: 'Klee / Mika (Mondstadt radar)',
    shopNpc: {
      name: 'Chloris (Botanist)',
      location: 'Wandering the Windrise main road',
      count: 5,
      costMora: 1000,
      refreshDays: 3
    },
    proTips: 'Growing exclusively on house walls and under roof eaves. Bring Kirara or Wanderer to scale vertical building facades effortlessly.',
    routes: [
      {
        id: 'philanemo-route-1',
        routeName: 'Springvale Village Rooftop Sweep',
        yieldCount: 18,
        estimatedMinutes: 2.5,
        difficulty: 'Moderate',
        startTeleport: 'Springvale Northern Teleport Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Springvale northern waypoint, glide to the windmill building. Grab 4 mushrooms from the wooden tower.',
            count: 4,
            elevation: 'Surface',
            teleportReference: 'Springvale North Waypoint'
          },
          {
            stepNumber: 2,
            instruction: 'Leap between adjacent house rooftops heading south through the village, inspecting under the eaves.',
            count: 9,
            elevation: 'Surface',
            teleportReference: 'Village Central Houses'
          },
          {
            stepNumber: 3,
            instruction: 'Climb the highest wooden lodge on the southern hillside for the final 5 mushrooms.',
            count: 5,
            elevation: 'Surface',
            teleportReference: 'Draff’s Lodge'
          }
        ]
      },
      {
        id: 'philanemo-route-2',
        routeName: 'Mondstadt City Perimeter & Windmills',
        yieldCount: 25,
        estimatedMinutes: 3,
        difficulty: 'Moderate',
        startTeleport: 'Knight of Favonius Headquarters Rooftop Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Favonius HQ roof, glide northeast to the residential windmill. Pick 6 mushrooms around the shaft.',
            count: 6,
            elevation: 'Surface',
            teleportReference: 'Favonius HQ Roof'
          },
          {
            stepNumber: 2,
            instruction: 'Run along the inner high city walls above the blacksmith, gathering from residential buildings below.',
            count: 11,
            elevation: 'Surface',
            teleportReference: 'Inner City Wall'
          },
          {
            stepNumber: 3,
            instruction: 'Finish around the windmill near Mondstadt front gate and the tavern back wall for 8 mushrooms.',
            count: 8,
            elevation: 'Surface',
            teleportReference: 'Angel’s Share Alley'
          }
        ]
      }
    ]
  },
  {
    id: 'valberry',
    name: 'Valberry',
    region: 'Mondstadt',
    iconUrl: '/assets/materials/specialties/valberry.png',
    totalWorldSpawns: 76,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Rosaria', 'Noelle', 'Lisa'],
    radarPassiveCharacter: 'Klee / Mika (Mondstadt radar)',
    shopNpc: {
      name: 'Chloris (Botanist)',
      location: 'Windrise pathway',
      count: 5,
      costMora: 1000,
      refreshDays: 3
    },
    sereniteaPotGarden: {
      field: 'A Path of Value: Jade Field',
      seedName: 'Valberry Seed'
    },
    proTips: 'Each Valberry bush yields 4 berries! Picking just 19 bushes yields a staggering 76 berries in under 4 minutes.',
    routes: [
      {
        id: 'valberry-route-1',
        routeName: 'Stormbearer Mountains to Point Express',
        yieldCount: 76,
        estimatedMinutes: 3.5,
        difficulty: 'Very Fast',
        startTeleport: 'Stormbearer Mountains Waypoint (near Anemo Hypostasis)',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport south of Anemo Hypostasis, pick 4 bushes (16 berries) immediately around the path clearing.',
            count: 16,
            elevation: 'Surface',
            teleportReference: 'Stormbearer Mountains Waypoint'
          },
          {
            stepNumber: 2,
            instruction: 'Head northeast past the river crossing toward the watchtower. Grab 6 bushes (24 berries) in the grassy flats.',
            count: 24,
            elevation: 'Surface',
            teleportReference: 'Watchtower Clearing'
          },
          {
            stepNumber: 3,
            instruction: 'Teleport to Stormbearer Point clifftop waypoint and sprint east to harvest 9 bushes (36 berries) along the coastline.',
            count: 36,
            elevation: 'Surface',
            teleportReference: 'Stormbearer Point Waypoint'
          }
        ]
      }
    ]
  },

  // ==========================================
  // LIYUE
  // ==========================================
  {
    id: 'cor-lapis',
    name: 'Cor Lapis',
    region: 'Liyue',
    iconUrl: '/assets/materials/specialties/cor-lapis.png',
    totalWorldSpawns: 152,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Zhongli', 'Keqing', 'Chongyun'],
    radarPassiveCharacter: 'Qiqi / Yanfei (Liyue radar)',
    shopNpc: {
      name: 'Changshun (Merchant)',
      location: 'Liyue Harbor Feiyun Slope',
      count: 5,
      costMora: 1500,
      refreshDays: 3
    },
    proTips: 'Cor Lapis is a Geo crystal with high poise. Bring Zhongli (Hold E destroys all nearby nodes instantly) or a Claymore character like Razor.',
    routes: [
      {
        id: 'cor-lapis-route-1',
        routeName: 'Mt. Hulao Amber Cavern Trail (Fastest in Game)',
        yieldCount: 18,
        estimatedMinutes: 2,
        difficulty: 'Very Fast',
        startTeleport: 'Mt. Hulao Summit Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Mt. Hulao summit. Drop down the wooden staircase path heading down the mountain.',
            count: 6,
            elevation: 'Surface',
            teleportReference: 'Mt. Hulao Summit'
          },
          {
            stepNumber: 2,
            instruction: 'Continue spiraling down the dirt path past the amber prisons. Mine 8 orange crystal clusters nestled in cliff alcoves.',
            count: 8,
            elevation: 'Surface',
            teleportReference: 'Mid-Mountain Amber Road'
          },
          {
            stepNumber: 3,
            instruction: 'Drop into the shallow pool cavern at the base of the mountain for the remaining 4 nodes.',
            count: 4,
            elevation: 'Underground Cave',
            teleportReference: 'Base Pool Cavern'
          }
        ]
      },
      {
        id: 'cor-lapis-route-2',
        routeName: 'Cuijue Slope & Luhua Pool Basin',
        yieldCount: 15,
        estimatedMinutes: 3,
        difficulty: 'Moderate',
        startTeleport: 'Cuijue Slope Northern Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport north of Cuijue Slope, run south into the valley between the 9 stone pillars.',
            count: 8,
            elevation: 'Surface',
            teleportReference: 'Cuijue Slope North'
          },
          {
            stepNumber: 2,
            instruction: 'Glide southeast toward the Luhua Pool cliff ledge. Mine 7 Cor Lapis clusters tucked behind ruin pillars.',
            count: 7,
            elevation: 'Surface',
            teleportReference: 'Luhua Pool Ridge'
          }
        ]
      }
    ]
  },
  {
    id: 'silk-flower',
    name: 'Silk Flower',
    region: 'Liyue',
    iconUrl: '/assets/materials/specialties/silk-flower.png',
    totalWorldSpawns: 28,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Hu Tao', 'Xingqiu'],
    radarPassiveCharacter: 'Qiqi / Yanfei (Liyue radar)',
    shopNpc: {
      name: 'Verr Goldet & Ms. Bai',
      location: 'Wangshu Inn & Qingce Village',
      count: 10,
      costMora: 1000,
      refreshDays: 3
    },
    sereniteaPotGarden: {
      field: 'A Path of Value: Orderly Meadow',
      seedName: 'Silk Flower Seed'
    },
    proTips: 'The easiest farm in Genshin Impact. 14 flowers are placed on the front lawn of Wangshu Inn, and 14 in upper Liyue Harbor terrace.',
    routes: [
      {
        id: 'silk-flower-route-1',
        routeName: 'Wangshu Inn + Yujing Terrace Sprint',
        yieldCount: 28,
        estimatedMinutes: 1.5,
        difficulty: 'Very Fast',
        startTeleport: 'Wangshu Inn Teleport Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Wangshu Inn ground entrance. Walk straight down the garden path picking 7 bushes (14 flowers).',
            count: 14,
            elevation: 'Surface',
            teleportReference: 'Wangshu Inn Ground'
          },
          {
            stepNumber: 2,
            instruction: 'Teleport to Mt. Tianheng waypoint overlooking Liyue Harbor, glide down into Yujing Terrace gardens.',
            count: 14,
            elevation: 'Surface',
            teleportReference: 'Yujing Terrace'
          }
        ]
      }
    ]
  },
  {
    id: 'jueyun-chili',
    name: 'Jueyun Chili',
    region: 'Liyue',
    iconUrl: '/assets/materials/specialties/jueyun-chili.png',
    totalWorldSpawns: 138,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Xiangling', 'Yaoyao'],
    radarPassiveCharacter: 'Qiqi / Yanfei (Liyue radar)',
    shopNpc: {
      name: 'Chef Mao (Wanmin Restaurant)',
      location: 'Liyue Harbor Main Street',
      count: 5,
      costMora: 1000,
      refreshDays: 3
    },
    sereniteaPotGarden: {
      field: 'A Path of Value: Jade Field',
      seedName: 'Jueyun Chili Seed'
    },
    proTips: 'Each plant yields 3 chilis! The terraced water fields of Qingce Village allow gathering over 40 chilis in under 3 minutes.',
    routes: [
      {
        id: 'jueyun-chili-route-1',
        routeName: 'Qingce Village Terraced Fields',
        yieldCount: 42,
        estimatedMinutes: 2.5,
        difficulty: 'Very Fast',
        startTeleport: 'Qingce Village Western Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to western Qingce waypoint, drop down onto the terrace tiers. Pick 6 plants (18 chilis) along the stone walls.',
            count: 18,
            elevation: 'Surface',
            teleportReference: 'Qingce West Waypoint'
          },
          {
            stepNumber: 2,
            instruction: 'Follow the river canal eastward past the windmill, harvesting 8 plants (24 chilis) along the farmer plots.',
            count: 24,
            elevation: 'Surface',
            teleportReference: 'Qingce Central Terraces'
          }
        ]
      }
    ]
  },

  // ==========================================
  // INAZUMA
  // ==========================================
  {
    id: 'amakumo-fruit',
    name: 'Amakumo Fruit',
    region: 'Inazuma',
    iconUrl: '/assets/materials/specialties/amakumo-fruit.png',
    totalWorldSpawns: 190,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Raiden Shogun', 'Kirara'],
    radarPassiveCharacter: 'Gorou (Inazuma radar)',
    proTips: 'Complete the "Seirai Stormchasers" quest series first to eliminate the Balethunder thunderstorm hazard. 1 single circuit around the crater gives 96+ fruits!',
    routes: [
      {
        id: 'amakumo-route-1',
        routeName: 'Amakumo Peak Crater Loop (Best Farm in Teyvat)',
        yieldCount: 96,
        estimatedMinutes: 4,
        difficulty: 'Very Fast',
        startTeleport: 'Amakumo Peak Summit Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to the high Amakumo Peak summit waypoint, glide down to the outer crater lake rim.',
            count: 32,
            elevation: 'Surface',
            teleportReference: 'Amakumo Summit'
          },
          {
            stepNumber: 2,
            instruction: 'Circle clockwise around the perimeter of the crater lake. Pick the dense clusters of blue-violet fruit bushes.',
            count: 40,
            elevation: 'Surface',
            teleportReference: 'Crater Lake Rim'
          },
          {
            stepNumber: 3,
            instruction: 'Drop into the drained subterranean crater cavern for the final 24 fruits surrounding the puzzle floor.',
            count: 24,
            elevation: 'Underground Cave',
            teleportReference: 'Inner Crater Basin'
          }
        ]
      }
    ]
  },
  {
    id: 'naku-weed',
    name: 'Naku Weed',
    region: 'Inazuma',
    iconUrl: '/assets/materials/specialties/naku-weed.png',
    totalWorldSpawns: 133,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Yoimiya', 'Kuki Shinobu'],
    radarPassiveCharacter: 'Gorou (Inazuma radar)',
    shopNpc: {
      name: 'Aoi (Tsukumomono Groceries)',
      location: 'Inazuma City',
      count: 5,
      costMora: 1000,
      refreshDays: 3
    },
    sereniteaPotGarden: {
      field: 'A Path of Value: Luxuriant Glebe',
      seedName: 'Naku Weed Seed'
    },
    proTips: 'Thrives in high-Electro environments. Gather around the Mikage Furnace crater and the western coasts of Seirai Island.',
    routes: [
      {
        id: 'naku-weed-route-1',
        routeName: 'Tatarasuna Mikage Furnace Rim & Seirai',
        yieldCount: 38,
        estimatedMinutes: 4,
        difficulty: 'Moderate',
        startTeleport: 'Tatarasuna Cliffside Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Tatarasuna high cliff waypoint. Glide inward along the wooden platforms of Mikage Furnace.',
            count: 14,
            elevation: 'Surface',
            teleportReference: 'Tatarasuna High Cliff'
          },
          {
            stepNumber: 2,
            instruction: 'Teleport to Seirai Island northern waypoint, run along the Electro-charged river valley picking 24 stalks.',
            count: 24,
            elevation: 'Surface',
            teleportReference: 'Seirai North Waypoint'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SUMERU
  // ==========================================
  {
    id: 'kalpalata-lotus',
    name: 'Kalpalata Lotus',
    region: 'Sumeru',
    iconUrl: '/assets/materials/specialties/kalpalata-lotus.png',
    totalWorldSpawns: 66,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Nahida', 'Dori'],
    radarPassiveCharacter: 'Tighnari (Sumeru radar)',
    shopNpc: {
      name: 'Aranani & Babak',
      location: 'Vanarana & Port Ormos',
      count: 10,
      costMora: 1000,
      refreshDays: 3
    },
    proTips: 'Grows on sheer vertical cliff faces! Nahida’s Hold E camera skill can instantly snap lotuses from safe ground without any climbing.',
    routes: [
      {
        id: 'kalpalata-route-1',
        routeName: 'Mawtiyima Forest & Apam Falls (Nahida Snipe)',
        yieldCount: 39,
        estimatedMinutes: 3.5,
        difficulty: 'Moderate',
        startTeleport: 'Mawtiyima Forest High Cliff Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Mawtiyima Forest southern cliff waypoint. Look down at the cliff edge and pick/snipe 7 hanging lotuses.',
            count: 7,
            elevation: 'Cliff Peak',
            teleportReference: 'Mawtiyima South Waypoint'
          },
          {
            stepNumber: 2,
            instruction: 'Teleport to Gandharva Ville statue, glide northwest along the canyon waterfall ledge for 8 lotuses.',
            count: 8,
            elevation: 'Surface',
            teleportReference: 'Gandharva Ville Statue'
          },
          {
            stepNumber: 3,
            instruction: 'Teleport to Apam Woods northwest waypoint. Glide along the giant waterfalls picking 24 lotuses clustered on stone walls.',
            count: 24,
            elevation: 'Cliff Peak',
            teleportReference: 'Apam Woods Waterfall'
          }
        ]
      }
    ]
  },
  {
    id: 'rukkhashava-mushrooms',
    name: 'Rukkhashava Mushrooms',
    region: 'Sumeru',
    iconUrl: '/assets/materials/specialties/rukkhashava-mushrooms.png',
    totalWorldSpawns: 73,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Wanderer (Scaramouche)', 'Collei'],
    radarPassiveCharacter: 'Tighnari (Sumeru radar)',
    shopNpc: {
      name: 'Ashpazi & Aramani',
      location: 'Gandharva Ville & Vanarana',
      count: 10,
      costMora: 1000,
      refreshDays: 3
    },
    proTips: 'Found inside hollow wooden trunks in Apam Woods and high mushroom stem platforms in Mawtiyima Forest.',
    routes: [
      {
        id: 'rukkhashava-route-1',
        routeName: 'Apam Woods Hollow Trunk Circuit',
        yieldCount: 26,
        estimatedMinutes: 3,
        difficulty: 'Moderate',
        startTeleport: 'Apam Woods Southern Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Apam Woods southern high waypoint, use Four-Leaf Sigils to zip into the interior of hollow branches.',
            count: 12,
            elevation: 'Surface',
            teleportReference: 'Apam Woods South'
          },
          {
            stepNumber: 2,
            instruction: 'Glide northwest between the canopy platforms to grab 14 blue mushrooms growing on root bridges.',
            count: 14,
            elevation: 'Surface',
            teleportReference: 'Canopy Root Platforms'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FONTAINE
  // ==========================================
  {
    id: 'lakelight-lily',
    name: 'Lakelight Lily',
    region: 'Fontaine',
    iconUrl: '/assets/materials/specialties/lakelight-lily.png',
    totalWorldSpawns: 78,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Furina'],
    radarPassiveCharacter: 'Lyney (Fontaine radar)',
    shopNpc: {
      name: 'Pahsiv',
      location: 'Loch Urania Cave (after quest)',
      count: 15,
      costMora: 0,
      refreshDays: 0
    },
    proTips: 'Complete "The Wild Fairy of Erinnyes" questline first to cleanse the polluted water and unlock the highest concentration of lilies around the Weeping Willow.',
    routes: [
      {
        id: 'lakelight-route-1',
        routeName: 'Weeping Willow Lake Perimeter (Furina Fast Run)',
        yieldCount: 34,
        estimatedMinutes: 2.5,
        difficulty: 'Very Fast',
        startTeleport: 'Weeping Willow Southern Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport south of the Weeping Willow. Walk north into the shallow lake shoreline, picking 12 lilies in the water.',
            count: 12,
            elevation: 'Surface',
            teleportReference: 'Weeping Willow South'
          },
          {
            stepNumber: 2,
            instruction: 'Circle clockwise directly underneath the glowing tree roots and small islets for 14 lilies.',
            count: 14,
            elevation: 'Surface',
            teleportReference: 'Willow Root Islets'
          },
          {
            stepNumber: 3,
            instruction: 'Head northeast toward the ruined pavilion for the remaining 8 lilies.',
            count: 8,
            elevation: 'Surface',
            teleportReference: 'Northeast Pavilion Shore'
          }
        ]
      },
      {
        id: 'lakelight-route-2',
        routeName: 'Loch Urania & Foggy Forest Path',
        yieldCount: 18,
        estimatedMinutes: 2,
        difficulty: 'Very Fast',
        startTeleport: 'Loch Urania Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Loch Urania, circle the windy lake shallows picking 12 lilies on rocks.',
            count: 12,
            elevation: 'Surface',
            teleportReference: 'Loch Urania Waypoint'
          },
          {
            stepNumber: 2,
            instruction: 'Follow the stream south into Foggy Forest Path to grab 6 lilies by the waterfall pool.',
            count: 6,
            elevation: 'Surface',
            teleportReference: 'Foggy Forest Waterfall'
          }
        ]
      }
    ]
  },
  {
    id: 'rainbow-rose',
    name: 'Rainbow Rose',
    region: 'Fontaine',
    iconUrl: '/assets/materials/specialties/rainbow-rose.png',
    totalWorldSpawns: 81,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Arlecchino', 'Lyney'],
    radarPassiveCharacter: 'Lyney (Fontaine radar)',
    sereniteaPotGarden: {
      field: 'A Path of Value: Luxuriant Glebe',
      seedName: 'Rainbow Rose Seed'
    },
    proTips: 'One of the cleanest and easiest farms in the game. All spawns are in flat, paved gardens around Court of Fontaine and Marcotte Station.',
    routes: [
      {
        id: 'rainbow-rose-route-1',
        routeName: 'Marcotte Station & Lucine Fountain Walkway',
        yieldCount: 25,
        estimatedMinutes: 2,
        difficulty: 'Very Fast',
        startTeleport: 'Marcotte Station Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Marcotte Station, run down the central avenue picking 10 roses on the grassy side borders.',
            count: 10,
            elevation: 'Surface',
            teleportReference: 'Marcotte Station Waypoint'
          },
          {
            stepNumber: 2,
            instruction: 'Follow the paved walkway toward Fountain of Lucine. Pick 15 roses clustered in the flowerbeds.',
            count: 15,
            elevation: 'Surface',
            teleportReference: 'Fountain of Lucine'
          }
        ]
      },
      {
        id: 'rainbow-rose-route-2',
        routeName: 'Beryl Region Southern Plains',
        yieldCount: 18,
        estimatedMinutes: 2,
        difficulty: 'Very Fast',
        startTeleport: 'Beryl Region Southern Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to southern Beryl Region waypoint, sprint northwest across the open meadow collecting 18 roses.',
            count: 18,
            elevation: 'Surface',
            teleportReference: 'Beryl South Waypoint'
          }
        ]
      }
    ]
  },

  // ==========================================
  // NATLAN
  // ==========================================
  {
    id: 'saurian-claw-succulent',
    name: 'Saurian Claw Succulent',
    region: 'Natlan',
    iconUrl: '/assets/materials/specialties/saurian-claw-succulent.png',
    totalWorldSpawns: 75,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Mualani', 'Kachina'],
    radarPassiveCharacter: 'Mualani (Natlan radar)',
    proTips: 'Found on steep canyon wall ledges throughout Tequenemecan Valley. Indwell a Tepetlisaurus or use Kachina to ride the drill up cliff walls.',
    routes: [
      {
        id: 'succulent-route-1',
        routeName: 'Tequenemecan Valley Canyon Run',
        yieldCount: 30,
        estimatedMinutes: 3,
        difficulty: 'Moderate',
        startTeleport: 'Sulfurous Veins Waypoint',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to Sulfurous Veins, indwell a nearby Saurian or deploy Kachina. Scale the orange cliff ledges for 12 succulents.',
            count: 12,
            elevation: 'Cliff Peak',
            teleportReference: 'Sulfurous Veins'
          },
          {
            stepNumber: 2,
            instruction: 'Follow the canyon crack southward, collecting 18 succulents growing on rock outcroppings.',
            count: 18,
            elevation: 'Surface',
            teleportReference: 'Canyon South Rim'
          }
        ]
      }
    ]
  },
  {
    id: 'quenepa-berry',
    name: 'Quenepa Berry',
    region: 'Natlan',
    iconUrl: '/assets/materials/specialties/quenepa-berry.png',
    totalWorldSpawns: 66,
    ascensionTarget: 168,
    respawnHours: 48,
    usedFor: ['Kinich'],
    radarPassiveCharacter: 'Mualani (Natlan radar)',
    proTips: 'Grows on trees and elevated wooden platforms around the Scions of the Canopy village. Indwell a Yumkasaurus to grapple from tree to tree.',
    routes: [
      {
        id: 'quenepa-route-1',
        routeName: 'Scions of the Canopy Village Canopy Run',
        yieldCount: 24,
        estimatedMinutes: 2.5,
        difficulty: 'Very Fast',
        startTeleport: 'Scions of the Canopy Statue of the Seven',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Teleport to the Scions of the Canopy statue. Grapple across the wooden bridges picking 12 berries from platforms.',
            count: 12,
            elevation: 'Surface',
            teleportReference: 'Canopy Statue'
          },
          {
            stepNumber: 2,
            instruction: 'Drop down to the lower mountain grove and grapple between tree branches for the remaining 12 berries.',
            count: 12,
            elevation: 'Surface',
            teleportReference: 'Lower Grove Bridge'
          }
        ]
      }
    ]
  }
];
