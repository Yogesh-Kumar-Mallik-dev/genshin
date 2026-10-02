export type ElementType = 'pyro' | 'hydro' | 'dendro' | 'electro' | 'anemo' | 'cryo' | 'geo';

export type WeaponType = 'sword' | 'claymore' | 'polearm' | 'bow' | 'catalyst';

export type RegionType = 'Mondstadt' | 'Liyue' | 'Inazuma' | 'Sumeru' | 'Fontaine' | 'Natlan' | 'Nod-Krai' | 'Snezhnaya' | 'Khaenriah';

export interface CharacterBuild {
  id: string;
  name: string;
  title: string;
  rarity: 4 | 5;
  element: ElementType;
  weapon: WeaponType;
  region: RegionType;
  role: 'Main DPS' | 'Sub DPS' | 'Support' | 'Healer' | 'Buffer';
  icon: string;
  avatarUrl?: string;
  cardUrl?: string;
  splashUrl?: string;
  description: string;
  signatureWeapon?: string;
  bestWeapons: {
    name: string;
    rarity: 3 | 4 | 5;
    description: string;
    iconUrl?: string;
    isF2P?: boolean;
  }[];
  bestArtifacts: {
    name: string;
    count: number;
    description: string;
    iconUrl?: string;
  }[];
  statPriorities: {
    sands: string;
    goblet: string;
    circlet: string;
    substats: string[];
    benchmarkEr?: string;
    benchmarkCrCd?: string;
  };
  talentPriority: string[];
  recommendedTeams: {
    name: string;
    members: string[];
    notes: string;
  }[];
  ascensionMaterials: {
    bossDrop: string;
    localSpecialty: string;
    mobDrop: string;
    gem: string;
  };
  talentMaterials: {
    bookName: string;
    weeklyBossDrop: string;
  };
  proTips: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'specialty' | 'talent' | 'weapon' | 'boss' | 'weekly_boss' | 'mob';
  region: RegionType;
  icon: string;
  iconUrl?: string;
  locationDetails: string;
  respawnTime: string;
  usedFor: string[];
  daysAvailable?: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[];
  farmingTips: string;
}

export interface QuestStep {
  id: string;
  chapter: string;
  title: string;
  act: string;
  requiredAr: number;
  prerequisites: string[];
  unlocks: string[];
  primogems: number;
  tips: string;
  urgency: 'Crucial First' | 'High' | 'Recommended' | 'Explore Later';
  category: 'Archon' | 'World' | 'System Unlock';
}

export interface FarmingGuide {
  id: string;
  title: string;
  category: 'ar' | 'mora' | 'books' | 'resin' | 'artifacts';
  badge: string;
  summary: string;
  efficiencyRating: 'S+' | 'S' | 'A' | 'B';
  keyTakeaways: string[];
  steps: {
    title: string;
    detail: string;
    yieldInfo: string;
  }[];
}

export interface MapPin {
  id: string;
  name: string;
  category: 'specialty' | 'teleport' | 'oculus' | 'boss' | 'ore' | 'shrine';
  region: RegionType;
  x: number; // percentage coordinates (0-100)
  y: number; // percentage coordinates (0-100)
  description: string;
  count?: number;
}

export interface WeaponItem {
  id: string;
  name: string;
  rarity: 1 | 2 | 3 | 4 | 5;
  type: WeaponType;
  baseAtk: string | number;
  substatType: string;
  substatValue: string;
  passiveName?: string;
  passiveDesc: string;
  iconUrl: string;
  obtainMethod?: string;
  bestCharacters?: string[];
}
