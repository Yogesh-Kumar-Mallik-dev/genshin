'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePersistentState } from '@/hooks/usePersistentState';
import { CHARACTERS_DATA } from '@/data/characters';
import { WEAPONS_DATA } from '@/data/weapons';
import { CharacterBuild, ElementType, WeaponItem } from '@/types/genshin';
import { Search, Star, Sword, Sparkles, Award, Users, Shield, BookOpen } from 'lucide-react';

const ELEMENT_DATA: Record<ElementType, { name: string; color: string; border: string; glow: string; iconUrl: string }> = {
  pyro: { name: 'Pyro', color: 'text-red-400', border: 'border-red-500/40', glow: 'glow-pyro', iconUrl: '/assets/elements/pyro.png' },
  hydro: { name: 'Hydro', color: 'text-sky-400', border: 'border-sky-500/40', glow: 'glow-hydro', iconUrl: '/assets/elements/hydro.png' },
  dendro: { name: 'Dendro', color: 'text-emerald-400', border: 'border-emerald-500/40', glow: 'glow-dendro', iconUrl: '/assets/elements/dendro.png' },
  electro: { name: 'Electro', color: 'text-purple-400', border: 'border-purple-500/40', glow: 'glow-electro', iconUrl: '/assets/elements/electro.png' },
  anemo: { name: 'Anemo', color: 'text-teal-400', border: 'border-teal-500/40', glow: 'glow-anemo', iconUrl: '/assets/elements/anemo.png' },
  cryo: { name: 'Cryo', color: 'text-blue-300', border: 'border-blue-400/40', glow: 'glow-cryo', iconUrl: '/assets/elements/cryo.png' },
  geo: { name: 'Geo', color: 'text-amber-400', border: 'border-amber-500/40', glow: 'glow-geo', iconUrl: '/assets/elements/geo.png' }
};

const WEAPON_TYPE_INFO: Record<string, { label: string; iconUrl: string }> = {
  sword: { label: 'Sword', iconUrl: '/assets/weapons/classes/sword.png' },
  claymore: { label: 'Claymore', iconUrl: '/assets/weapons/classes/claymore.png' },
  polearm: { label: 'Polearm', iconUrl: '/assets/weapons/classes/polearm.png' },
  bow: { label: 'Bow', iconUrl: '/assets/weapons/classes/bow.png' },
  catalyst: { label: 'Catalyst', iconUrl: '/assets/weapons/classes/catalyst.png' }
};

const CharacterCardVisual: React.FC<{ char: CharacterBuild }> = ({ char }) => {
  const [hasError, setHasError] = useState(false);
  const src = char.splashUrl || char.cardUrl || char.avatarUrl;

  if (hasError || !src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent select-none">
        <span className="text-4xl filter drop-shadow mb-1.5">{char.icon || '⚔️'}</span>
        <span className="text-xs font-black text-slate-100 tracking-wide line-clamp-1">{char.name}</span>
        <span className="text-[10px] font-bold text-amber-400/90">{char.region}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={char.name}
      fill
      className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
      unoptimized
      onError={() => setHasError(true)}
    />
  );
};

const CharacterModalVisual: React.FC<{ char: CharacterBuild }> = ({ char }) => {
  const [hasError, setHasError] = useState(false);
  const src = char.avatarUrl || char.cardUrl;

  if (hasError || !src) {
    return (
      <div className="w-full h-full flex items-center justify-center text-3xl">
        {char.icon || '⚔️'}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={char.name}
      fill
      className="object-cover"
      unoptimized
      onError={() => setHasError(true)}
    />
  );
};

const WeaponCardVisual: React.FC<{ weapon: WeaponItem }> = ({ weapon }) => {
  const [hasError, setHasError] = useState(false);
  const src = weapon.iconUrl;

  if (hasError || !src) {
    const classIcon = WEAPON_TYPE_INFO[weapon.type]?.iconUrl;
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent select-none">
        {classIcon ? (
          <div className="relative w-10 h-10 mb-1">
            <Image src={classIcon} alt={weapon.type} fill className="object-contain" unoptimized />
          </div>
        ) : (
          <Sword className="w-8 h-8 text-amber-400/80 mb-1" />
        )}
        <span className="text-[11px] font-bold text-slate-100 tracking-wide line-clamp-1">{weapon.name}</span>
        <span className="text-[9px] font-semibold text-amber-400/90 capitalize">{weapon.type}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={weapon.name}
      fill
      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
      unoptimized
      onError={() => setHasError(true)}
    />
  );
};

const WeaponModalVisual: React.FC<{ weapon: WeaponItem }> = ({ weapon }) => {
  const [hasError, setHasError] = useState(false);
  const src = weapon.iconUrl;

  if (hasError || !src) {
    const classIcon = WEAPON_TYPE_INFO[weapon.type]?.iconUrl;
    return (
      <div className="w-full h-full flex items-center justify-center p-2">
        {classIcon ? (
          <div className="relative w-12 h-12">
            <Image src={classIcon} alt={weapon.type} fill className="object-contain" unoptimized />
          </div>
        ) : (
          <Sword className="w-10 h-10 text-amber-400/80" />
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={weapon.name}
      fill
      className="object-contain p-2"
      unoptimized
      onError={() => setHasError(true)}
    />
  );
};

export const CharacterHub: React.FC = () => {
  const [viewMode, setViewMode] = usePersistentState<'characters' | 'weapons'>('teyvat_char_view_mode', 'characters');

  // Character filters & display settings
  const [characterModalTab, setCharacterModalTab] = usePersistentState<'build' | 'splash'>('teyvat_char_modal_tab', 'build');
  const [selectedElement, setSelectedElement] = usePersistentState<string>('teyvat_char_filter_element', 'all');
  const [selectedWeapon, setSelectedWeapon] = usePersistentState<string>('teyvat_char_filter_weapon', 'all');
  const [selectedRole, setSelectedRole] = usePersistentState<string>('teyvat_char_filter_role', 'all');
  const [selectedRegion, setSelectedRegion] = usePersistentState<string>('teyvat_char_filter_region', 'all');
  const [searchQuery, setSearchQuery] = usePersistentState<string>('teyvat_char_search_query', '');
  const [activeCharacter, setActiveCharacter] = useState<CharacterBuild | null>(null);

  // Weapon filters
  const [selectedWeaponClass, setSelectedWeaponClass] = usePersistentState<string>('teyvat_weapon_filter_class', 'all');
  const [selectedWeaponRarity, setSelectedWeaponRarity] = usePersistentState<string>('teyvat_weapon_filter_rarity', 'all');
  const [weaponSearchQuery, setWeaponSearchQuery] = usePersistentState<string>('teyvat_weapon_search_query', '');
  const [activeWeapon, setActiveWeapon] = useState<WeaponItem | null>(null);

  // Favorites / User Roster & Saved Weapons
  const [favoriteCharIds, setFavoriteCharIds] = usePersistentState<string[]>('teyvat_favorite_chars', []);
  const [favoriteWeaponIds, setFavoriteWeaponIds] = usePersistentState<string[]>('teyvat_favorite_weapons', []);
  const [onlyFavorites, setOnlyFavorites] = usePersistentState<boolean>('teyvat_filter_favs_only', false);

  const toggleFavoriteChar = (id: string) => {
    setFavoriteCharIds((prev) =>
      prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
    );
  };

  const toggleFavoriteWeapon = (id: string) => {
    setFavoriteWeaponIds((prev) =>
      prev.includes(id) ? prev.filter((wId) => wId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (activeCharacter || activeWeapon) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [activeCharacter, activeWeapon]);

  const elements: { id: string; label: string; element?: ElementType }[] = [
    { id: 'all', label: 'All Elements' },
    { id: 'pyro', label: 'Pyro', element: 'pyro' },
    { id: 'hydro', label: 'Hydro', element: 'hydro' },
    { id: 'dendro', label: 'Dendro', element: 'dendro' },
    { id: 'electro', label: 'Electro', element: 'electro' },
    { id: 'anemo', label: 'Anemo', element: 'anemo' },
    { id: 'cryo', label: 'Cryo', element: 'cryo' },
    { id: 'geo', label: 'Geo', element: 'geo' }
  ];

  const weapons = [
    { id: 'all', label: 'All Weapons' },
    { id: 'sword', label: 'Sword' },
    { id: 'claymore', label: 'Claymore' },
    { id: 'polearm', label: 'Polearm' },
    { id: 'bow', label: 'Bow' },
    { id: 'catalyst', label: 'Catalyst' }
  ];

  const roles = ['all', 'Main DPS', 'Sub DPS', 'Buffer', 'Support', 'Healer'];

  const regions: { id: string; label: string }[] = [
    { id: 'all', label: 'All Regions' },
    { id: 'Mondstadt', label: 'Mondstadt' },
    { id: 'Liyue', label: 'Liyue' },
    { id: 'Inazuma', label: 'Inazuma' },
    { id: 'Sumeru', label: 'Sumeru' },
    { id: 'Fontaine', label: 'Fontaine' },
    { id: 'Natlan', label: 'Natlan' },
    { id: 'Nod-Krai', label: 'Nod-Krai' },
    { id: 'Snezhnaya', label: 'Snezhnaya' }
  ];

  const filteredCharacters = CHARACTERS_DATA.filter((char) => {
    const matchesFav = !onlyFavorites || favoriteCharIds.includes(char.id);
    const matchesElement = selectedElement === 'all' || char.element === selectedElement;
    const matchesWeapon = selectedWeapon === 'all' || char.weapon === selectedWeapon;
    const matchesRole = selectedRole === 'all' || char.role === selectedRole;
    const matchesRegion = selectedRegion === 'all' || char.region === selectedRegion;
    const matchesSearch =
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFav && matchesElement && matchesWeapon && matchesRole && matchesRegion && matchesSearch;
  });

  const filteredWeapons = WEAPONS_DATA.filter((w) => {
    const matchesFav = !onlyFavorites || favoriteWeaponIds.includes(w.id);
    const matchesType = selectedWeaponClass === 'all' || w.type.toLowerCase() === selectedWeaponClass.toLowerCase();
    const matchesRarity =
      selectedWeaponRarity === 'all' ||
      (selectedWeaponRarity === '5' && w.rarity === 5) ||
      (selectedWeaponRarity === '4' && w.rarity === 4) ||
      (selectedWeaponRarity === '3' && w.rarity === 3) ||
      (selectedWeaponRarity === '1-2' && w.rarity <= 2);
    const matchesSearch =
      w.name.toLowerCase().includes(weaponSearchQuery.toLowerCase()) ||
      (w.substatType && w.substatType.toLowerCase().includes(weaponSearchQuery.toLowerCase())) ||
      (w.passiveDesc && w.passiveDesc.toLowerCase().includes(weaponSearchQuery.toLowerCase()));
    return matchesFav && matchesType && matchesRarity && matchesSearch;
  });

  const weaponBeneficiaries = activeWeapon
    ? CHARACTERS_DATA.filter((c) =>
        c.bestWeapons.some((bw) =>
          bw.name.toLowerCase() === activeWeapon.name.toLowerCase() ||
          bw.name.toLowerCase().includes(activeWeapon.name.toLowerCase()) ||
          activeWeapon.name.toLowerCase().includes(bw.name.toLowerCase())
        )
      )
    : [];

  return (
    <div className="space-y-6">
      {/* Visual Header Banner with Teyvat Starry Aesthetic */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 border border-amber-500/30 p-6 md:p-8 shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Official Teyvat Database • KeqingMains Standard</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
              {viewMode === 'characters' ? 'Character Builds & Official Splash Art' : 'Teyvat Weapons Armory'}
            </h2>
            <p className="text-sm text-slate-300">
              {viewMode === 'characters'
                ? `Theorycrafted weapon rankings, optimal artifact sets, substat benchmarks, and full official Wish Splash Arts covering all 122 playable characters across all 8 official regions.`
                : `Comprehensive database of all 252 official weapons across all 5 classes (Swords, Claymores, Polearms, Bows, and Catalysts) with Lv. 90 Base ATK, substats, passives, and character synergies.`}
            </p>
          </div>

          {/* Tab Switcher Pills */}
          <div className="flex items-center bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 shadow-xl self-start md:self-center flex-shrink-0">
            <button
              onClick={() => setViewMode('characters')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition duration-200 ${
                viewMode === 'characters'
                  ? 'bg-amber-500 text-slate-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Characters ({CHARACTERS_DATA.length})</span>
            </button>
            <button
              onClick={() => setViewMode('weapons')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition duration-200 ${
                viewMode === 'weapons'
                  ? 'bg-amber-500 text-slate-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Sword className="w-4 h-4" />
              <span>Weapons Armory ({WEAPONS_DATA.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CHARACTERS VIEW */}
      {/* ========================================================================= */}
      {viewMode === 'characters' && (
        <div className="space-y-6">
          {/* Filter and Search Bar */}
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search characters by name, title, or region (e.g. Furina, Neuvillette, Inazuma)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Element Buttons with official elemental icons */}
              <div className="flex flex-wrap gap-1.5 mr-2">
                {elements.map((el) => {
                  const isActive = selectedElement === el.id;
                  const elInfo = el.element ? ELEMENT_DATA[el.element] : null;

                  return (
                    <button
                      key={el.id}
                      onClick={() => setSelectedElement(el.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {elInfo && (
                        <div className="relative w-3.5 h-3.5">
                          <Image
                            src={elInfo.iconUrl}
                            alt={el.label}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <span>{el.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Weapon Dropdown */}
              <select
                value={selectedWeapon}
                onChange={(e) => setSelectedWeapon(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-400"
              >
                {weapons.map((w) => (
                  <option key={w.id} value={w.id}>{w.label}</option>
                ))}
              </select>

              {/* Role Dropdown */}
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-400"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r === 'all' ? 'All Roles' : r}
                  </option>
                ))}
              </select>

              {/* Region Dropdown */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-400"
              >
                {regions.map((reg) => (
                  <option key={reg.id} value={reg.id}>
                    {reg.label}
                  </option>
                ))}
              </select>

              {/* Favorites / My Roster Filter Pill */}
              <button
                onClick={() => setOnlyFavorites(!onlyFavorites)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                  onlyFavorites
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-slate-950 text-slate-950' : 'text-amber-400'}`} />
                <span>My Roster {favoriteCharIds.length > 0 ? `(${favoriteCharIds.length})` : ''}</span>
              </button>

              {(selectedElement !== 'all' || selectedWeapon !== 'all' || selectedRole !== 'all' || selectedRegion !== 'all' || searchQuery || onlyFavorites) && (
                <button
                  onClick={() => {
                    setSelectedElement('all');
                    setSelectedWeapon('all');
                    setSelectedRole('all');
                    setSelectedRegion('all');
                    setSearchQuery('');
                    setOnlyFavorites(false);
                  }}
                  className="text-xs text-amber-400 hover:underline ml-auto"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* In-Game Style Character Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredCharacters.map((char) => {
              const elInfo = ELEMENT_DATA[char.element];
              const isFiveStar = char.rarity === 5;

              return (
                <div
                  key={char.id}
                  onClick={() => {
                    setActiveCharacter(char);
                    setCharacterModalTab('build');
                  }}
                  className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between border border-slate-800 hover:border-amber-500/50 relative bg-slate-900"
                >
                  {/* Card Thumbnail Area with Authentic Rarity Gradient */}
                  <div
                    className={`relative aspect-[3/4] w-full overflow-hidden flex items-end justify-center ${
                      isFiveStar
                        ? 'bg-gradient-to-b from-[#bd772b] via-[#cf8e33] to-[#804a14]'
                        : 'bg-gradient-to-b from-[#644686] via-[#7e55a3] to-[#452b61]'
                    }`}
                  >
                    {/* Element Badge in Top-Left */}
                    <div className="absolute top-2 left-2 z-20 w-7 h-7 rounded-full bg-slate-950/70 backdrop-blur-sm border border-white/20 p-1 flex items-center justify-center shadow">
                      <div className="relative w-full h-full">
                        <Image
                          src={elInfo.iconUrl}
                          alt={char.element}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* Favorite Roster Star in Top-Right */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavoriteChar(char.id);
                      }}
                      title={favoriteCharIds.includes(char.id) ? "Remove from My Roster" : "Add to My Roster"}
                      className={`absolute top-2 right-2 z-20 w-7 h-7 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all ${
                        favoriteCharIds.includes(char.id)
                          ? 'bg-amber-500/90 text-slate-950 border-amber-300 shadow-md scale-105'
                          : 'bg-slate-950/60 text-slate-400 border-white/20 hover:text-amber-300 hover:scale-110'
                      }`}
                    >
                      <Star className={`w-3.5 h-3.5 ${favoriteCharIds.includes(char.id) ? 'fill-slate-950' : ''}`} />
                    </button>

                    {/* Character Visual (Official Splash Art) */}
                    <div className="relative w-full h-full">
                      <CharacterCardVisual char={char} />
                    </div>

                    {/* Stars overlay at bottom of artwork */}
                    <div className="absolute bottom-1.5 flex items-center space-x-0.5 z-20 drop-shadow-md">
                      {Array.from({ length: char.rarity }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-300 fill-amber-400" />
                      ))}
                    </div>

                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" />
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="p-3 bg-slate-950 text-center space-y-1">
                    <h3 className="font-bold text-sm text-slate-100 group-hover:text-amber-300 transition truncate">
                      {char.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-400">
                      <span className="capitalize">{char.role}</span>
                      <span>•</span>
                      <span className="inline-flex items-center space-x-1">
                        {WEAPON_TYPE_INFO[char.weapon]?.iconUrl && (
                          <span className="relative inline-block w-3 h-3 mr-0.5">
                            <Image
                              src={WEAPON_TYPE_INFO[char.weapon].iconUrl}
                              alt={char.weapon}
                              fill
                              className="object-contain opacity-80"
                              unoptimized
                            />
                          </span>
                        )}
                        <span>{char.region}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* WEAPONS ARMORY VIEW */}
      {/* ========================================================================= */}
      {viewMode === 'weapons' && (
        <div className="space-y-6">
          {/* Weapon Filter and Search Bar */}
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search weapons by name, secondary stat (CRIT, ATK, EM), or passive description..."
                value={weaponSearchQuery}
                onChange={(e) => setWeaponSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Weapon Class Pills with official Genshin weapon art */}
              <div className="flex flex-wrap gap-1.5 mr-2">
                {[
                  { id: 'all', label: 'All Classes' },
                  { id: 'sword', label: 'Swords', iconUrl: '/assets/weapons/classes/sword.png' },
                  { id: 'claymore', label: 'Claymores', iconUrl: '/assets/weapons/classes/claymore.png' },
                  { id: 'polearm', label: 'Polearms', iconUrl: '/assets/weapons/classes/polearm.png' },
                  { id: 'bow', label: 'Bows', iconUrl: '/assets/weapons/classes/bow.png' },
                  { id: 'catalyst', label: 'Catalysts', iconUrl: '/assets/weapons/classes/catalyst.png' }
                ].map((w) => {
                  const isActive = selectedWeaponClass === w.id;
                  return (
                    <button
                      key={w.id}
                      onClick={() => setSelectedWeaponClass(w.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {w.iconUrl && (
                        <div className="relative w-4 h-4 flex-shrink-0">
                          <Image
                            src={w.iconUrl}
                            alt={w.label}
                            fill
                            className={`object-contain ${isActive ? 'brightness-0' : 'brightness-100'}`}
                            unoptimized
                          />
                        </div>
                      )}
                      <span>{w.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Rarity Pills */}
              <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
                {[
                  { id: 'all', label: 'All Rarities' },
                  { id: '5', label: '5★ Gold' },
                  { id: '4', label: '4★ Purple' },
                  { id: '3', label: '3★ Blue' },
                  { id: '1-2', label: '1-2★' }
                ].map((r) => {
                  const isActive = selectedWeaponRarity === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedWeaponRarity(r.id)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>

              {/* Saved Weapons Filter Pill */}
              <button
                onClick={() => setOnlyFavorites(!onlyFavorites)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                  onlyFavorites
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-slate-950 text-slate-950' : 'text-amber-400'}`} />
                <span>Saved Weapons {favoriteWeaponIds.length > 0 ? `(${favoriteWeaponIds.length})` : ''}</span>
              </button>

              {(selectedWeaponClass !== 'all' || selectedWeaponRarity !== 'all' || weaponSearchQuery || onlyFavorites) && (
                <button
                  onClick={() => {
                    setSelectedWeaponClass('all');
                    setSelectedWeaponRarity('all');
                    setWeaponSearchQuery('');
                    setOnlyFavorites(false);
                  }}
                  className="text-xs text-amber-400 hover:underline ml-auto"
                >
                  Reset Armory Filters
                </button>
              )}
            </div>

            {/* Counter info */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/60">
              <span>Showing {filteredWeapons.length} of {WEAPONS_DATA.length} weapons</span>
              <span className="text-[11px] italic text-slate-500">Click any weapon to inspect Lv. 90 base stats, passives, and synergy builds</span>
            </div>
          </div>

          {/* Weapon Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredWeapons.map((weapon) => {
              const is5 = weapon.rarity === 5;
              const is4 = weapon.rarity === 4;
              const is3 = weapon.rarity === 3;

              return (
                <div
                  key={weapon.id}
                  onClick={() => setActiveWeapon(weapon)}
                  className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between border border-slate-800 hover:border-amber-500/50 relative bg-slate-900"
                >
                  {/* Weapon Thumbnail Box with authentic In-Game Rarity Background */}
                  <div
                    className={`relative aspect-square w-full overflow-hidden flex items-center justify-center ${
                      is5
                        ? 'bg-gradient-to-b from-[#bd772b] via-[#cf8e33] to-[#804a14]'
                        : is4
                        ? 'bg-gradient-to-b from-[#644686] via-[#7e55a3] to-[#452b61]'
                        : is3
                        ? 'bg-gradient-to-b from-[#3d607a] via-[#517696] to-[#253949]'
                        : 'bg-gradient-to-b from-[#4a5568] via-[#718096] to-[#2d3748]'
                    }`}
                  >
                    {/* Weapon Type Pill in Top-Left with official weapon icon */}
                    <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm border border-white/20 text-[10px] font-bold text-slate-200 flex items-center space-x-1.5 shadow">
                      {WEAPON_TYPE_INFO[weapon.type]?.iconUrl && (
                        <div className="relative w-3.5 h-3.5 flex-shrink-0">
                          <Image
                            src={WEAPON_TYPE_INFO[weapon.type].iconUrl}
                            alt={weapon.type}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <span className="capitalize">{weapon.type}</span>
                    </div>

                    {/* Favorite Weapon Star in Top-Right */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavoriteWeapon(weapon.id);
                      }}
                      title={favoriteWeaponIds.includes(weapon.id) ? "Remove from Saved Weapons" : "Save Weapon"}
                      className={`absolute top-2 right-2 z-20 w-6 h-6 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all ${
                        favoriteWeaponIds.includes(weapon.id)
                          ? 'bg-amber-500/90 text-slate-950 border-amber-300 shadow-md scale-105'
                          : 'bg-slate-950/60 text-slate-400 border-white/20 hover:text-amber-300 hover:scale-110'
                      }`}
                    >
                      <Star className={`w-3 h-3 ${favoriteWeaponIds.includes(weapon.id) ? 'fill-slate-950' : ''}`} />
                    </button>

                    {/* Weapon Image */}
                    <div className="relative w-full h-full">
                      <WeaponCardVisual weapon={weapon} />
                    </div>

                    {/* Stars overlay at bottom of artwork */}
                    <div className="absolute bottom-1.5 flex items-center space-x-0.5 z-20 drop-shadow-md">
                      {Array.from({ length: weapon.rarity }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-300 fill-amber-400" />
                      ))}
                    </div>

                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Weapon Info Footer */}
                  <div className="p-2.5 bg-slate-950 text-left space-y-1">
                    <h3 className="font-bold text-xs text-slate-100 group-hover:text-amber-300 transition truncate">
                      {weapon.name}
                    </h3>
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-300">ATK {weapon.baseAtk}</span>
                      {weapon.substatType && (
                        <span className="text-amber-400/90 font-medium truncate max-w-[55%]">
                          {weapon.substatType}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHARACTER BUILD & SPLASH ART INSPECTOR MODAL */}
      {/* ========================================================================= */}
      {activeCharacter && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveCharacter(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-hidden animate-fadeIn"
        >
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
            {/* Header Hero with Ambient Splash Art Backdrop */}
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 p-5 sm:p-6 border-b border-slate-800 flex-shrink-0">
              {activeCharacter.splashUrl && (
                <div className="absolute right-0 -top-12 -bottom-12 w-3/4 opacity-35 pointer-events-none overflow-hidden mask-gradient-to-l">
                  <Image
                    src={activeCharacter.splashUrl}
                    alt={activeCharacter.name}
                    fill
                    className="object-contain object-right"
                    unoptimized
                  />
                </div>
              )}

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {/* Avatar Icon */}
                  <div className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shadow-xl flex-shrink-0 ${
                    activeCharacter.rarity === 5
                      ? 'border-amber-400 bg-gradient-to-b from-[#bd772b] to-[#804a14]'
                      : 'border-purple-400 bg-gradient-to-b from-[#644686] to-[#452b61]'
                  }`}>
                    <CharacterModalVisual char={activeCharacter} />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2.5">
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
                        {activeCharacter.name}
                      </h2>
                      <div className="relative w-6 h-6">
                        <Image
                          src={ELEMENT_DATA[activeCharacter.element].iconUrl}
                          alt={activeCharacter.element}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <button
                        onClick={() => toggleFavoriteChar(activeCharacter.id)}
                        className={`p-1.5 rounded-lg border transition ${
                          favoriteCharIds.includes(activeCharacter.id)
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                            : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-amber-300'
                        }`}
                        title={favoriteCharIds.includes(activeCharacter.id) ? "In My Roster" : "Add to My Roster"}
                      >
                        <Star className={`w-4 h-4 ${favoriteCharIds.includes(activeCharacter.id) ? 'fill-amber-400' : ''}`} />
                      </button>
                    </div>
                    <p className="text-xs text-amber-300 italic">{activeCharacter.title}</p>
                    <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1">
                      <span>{activeCharacter.region}</span>
                      <span>•</span>
                      <span className="capitalize flex items-center space-x-1.5">
                        {WEAPON_TYPE_INFO[activeCharacter.weapon]?.iconUrl && (
                          <span className="relative inline-block w-4 h-4">
                            <Image
                              src={WEAPON_TYPE_INFO[activeCharacter.weapon].iconUrl}
                              alt={activeCharacter.weapon}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </span>
                        )}
                        <span>{activeCharacter.weapon}</span>
                      </span>
                      <span>•</span>
                      <span className="text-amber-400 font-bold">{activeCharacter.role}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0">
                  {/* Modal Tab Switcher */}
                  <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 shadow">
                    <button
                      onClick={() => setCharacterModalTab('build')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
                        characterModalTab === 'build'
                          ? 'bg-amber-500 text-slate-950 shadow-md'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Build</span>
                    </button>
                    <button
                      onClick={() => setCharacterModalTab('splash')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
                        characterModalTab === 'splash'
                          ? 'bg-amber-500 text-slate-950 shadow-md'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Splash Art</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body: Theorycraft Build View */}
            {characterModalTab === 'build' && (
              <div className="p-5 sm:p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain">
                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {activeCharacter.description}
                </p>

                {/* Weapons & Artifacts Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Weapons */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                      <Sword className="w-4 h-4" />
                      <span>Best Weapons (Ranked)</span>
                    </h4>

                    <div className="space-y-2">
                      {activeCharacter.bestWeapons.map((w, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                          {/* Weapon Thumbnail */}
                          <div className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border ${
                            w.rarity === 5
                              ? 'border-amber-500/50 bg-gradient-to-b from-[#bd772b] to-[#804a14]'
                              : w.rarity === 4
                              ? 'border-purple-500/50 bg-gradient-to-b from-[#644686] to-[#452b61]'
                              : 'border-blue-500/50 bg-gradient-to-b from-[#3d607a] to-[#253949]'
                          }`}>
                            {w.iconUrl ? (
                              <Image
                                src={w.iconUrl}
                                alt={w.name}
                                fill
                                className="object-contain p-0.5"
                                unoptimized
                              />
                            ) : WEAPON_TYPE_INFO[activeCharacter.weapon]?.iconUrl ? (
                              <div className="relative w-6 h-6 m-auto">
                                <Image
                                  src={WEAPON_TYPE_INFO[activeCharacter.weapon].iconUrl}
                                  alt={activeCharacter.weapon}
                                  fill
                                  className="object-contain"
                                  unoptimized
                                />
                              </div>
                            ) : (
                              <Sword className="w-5 h-5 text-amber-400 m-auto" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-slate-100 truncate flex items-center space-x-1.5">
                                <span>{idx === 0 ? '👑' : ''} {w.name}</span>
                                {w.isF2P && (
                                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-semibold">
                                    F2P
                                  </span>
                                )}
                              </span>
                              <span className="text-[10px] text-amber-400 font-bold">{w.rarity}★</span>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-tight mt-0.5 line-clamp-2">
                              {w.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Artifacts */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>Best Artifact Sets & Stats</span>
                    </h4>

                    <div className="space-y-2">
                      {activeCharacter.bestArtifacts.map((art, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                          {/* Artifact Piece Thumbnail */}
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-amber-500/40 bg-gradient-to-b from-[#bd772b] to-[#804a14]">
                            {art.iconUrl ? (
                              <Image
                                src={art.iconUrl}
                                alt={art.name}
                                fill
                                className="object-contain p-0.5"
                                unoptimized
                              />
                            ) : (
                              <span className="text-lg flex items-center justify-center h-full">🌸</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-slate-100 truncate">{art.name}</span>
                              <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded font-bold">
                                {art.count}pc
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                              {art.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main Stats Grid */}
                    <div className="pt-2 border-t border-slate-800 text-xs space-y-1.5">
                      <span className="font-bold text-slate-300 text-[11px] uppercase tracking-wider block">
                        Recommended Main Stats:
                      </span>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                          <span className="text-slate-500 block text-[9px] uppercase font-bold">Sands (Hourglass)</span>
                          <span className="text-[11px] text-slate-200 font-semibold">{activeCharacter.statPriorities.sands}</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                          <span className="text-slate-500 block text-[9px] uppercase font-bold">Goblet (Chalice)</span>
                          <span className="text-[11px] text-slate-200 font-semibold">{activeCharacter.statPriorities.goblet}</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                          <span className="text-slate-500 block text-[9px] uppercase font-bold">Circlet (Crown)</span>
                          <span className="text-[11px] text-slate-200 font-semibold">{activeCharacter.statPriorities.circlet}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Substat Benchmarks & Talent Order */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Substats */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Substat Priorities & Targets
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCharacter.statPriorities.substats.map((sub, i) => (
                        <span key={i} className="bg-slate-800/90 text-slate-200 px-2 py-0.5 rounded text-xs border border-slate-700">
                          {i + 1}. {sub}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 text-xs space-y-1 text-slate-300">
                      {activeCharacter.statPriorities.benchmarkEr && (
                        <div><strong className="text-sky-300">Target ER:</strong> {activeCharacter.statPriorities.benchmarkEr}</div>
                      )}
                      {activeCharacter.statPriorities.benchmarkCrCd && (
                        <div><strong className="text-amber-300">Target CR/CD:</strong> {activeCharacter.statPriorities.benchmarkCrCd}</div>
                      )}
                    </div>
                  </div>

                  {/* Talent Leveling Priority */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Talent Leveling Priority
                    </h4>
                    <div className="flex items-center space-x-2 text-xs pt-1">
                      {activeCharacter.talentPriority.map((talent, idx) => (
                        <React.Fragment key={idx}>
                          <span className="bg-slate-900 border border-amber-500/30 px-3 py-1.5 rounded-lg text-slate-100 font-bold shadow">
                            {talent}
                          </span>
                          {idx < activeCharacter.talentPriority.length - 1 && (
                            <span className="text-amber-400 font-bold">&gt;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Synergistic Teams */}
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Recommended Synergistic Teams
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCharacter.recommendedTeams.map((team, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-slate-100 block">{team.name}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {team.members.map((member, mIdx) => (
                            <span key={mIdx} className="bg-slate-800 text-amber-300 px-2 py-0.5 rounded text-xs border border-slate-700 font-medium">
                              {member}
                            </span>
                          ))}
                        </div>
                        <p className="text-[11px] text-slate-400 italic">{team.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Theorycrafter Pro Tips */}
                <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Theorycrafter Pro-Tips</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeCharacter.proTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Modal Body: High-Resolution Splash Art Showcase View */}
            {characterModalTab === 'splash' && (
              <div className="p-5 sm:p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain flex flex-col items-center">
                {activeCharacter.splashUrl ? (
                  <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center shadow-2xl">
                    <Image
                      src={activeCharacter.splashUrl}
                      alt={`${activeCharacter.name} Full Wish Splash Art`}
                      fill
                      className="object-contain p-2"
                      unoptimized
                    />
                    <div className="absolute bottom-3 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center space-x-2">
                      <span className="text-xs font-black text-amber-400">{activeCharacter.name}</span>
                      <span className="text-[10px] text-slate-400">Official Wish Art (2048x1024)</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center text-slate-400">
                    Splash art not found for {activeCharacter.name}.
                  </div>
                )}

                {/* Character Lore and Signature Details */}
                <div className="w-full bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Signature Weapon: {activeCharacter.signatureWeapon}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{activeCharacter.region} • {activeCharacter.role}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCharacter.description}
                  </p>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between flex-shrink-0">
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                {activeCharacter.name} • {activeCharacter.title}
              </span>
              <button
                onClick={() => setActiveCharacter(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition ml-auto"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* WEAPON INSPECTOR MODAL */}
      {/* ========================================================================= */}
      {activeWeapon && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveWeapon(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-hidden animate-fadeIn"
        >
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
            {/* Header Hero */}
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 p-5 sm:p-6 border-b border-slate-800 flex-shrink-0">
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  {/* Weapon Icon */}
                  <div className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shadow-xl flex items-center justify-center ${
                    activeWeapon.rarity === 5
                      ? 'border-amber-400 bg-gradient-to-b from-[#bd772b] to-[#804a14]'
                      : activeWeapon.rarity === 4
                      ? 'border-purple-400 bg-gradient-to-b from-[#644686] to-[#452b61]'
                      : activeWeapon.rarity === 3
                      ? 'border-sky-500 bg-gradient-to-b from-[#3d607a] to-[#253949]'
                      : 'border-slate-500 bg-gradient-to-b from-[#4a5568] to-[#2d3748]'
                  }`}>
                    <WeaponModalVisual weapon={activeWeapon} />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2.5">
                      <h2 className="text-xl sm:text-2xl font-black text-slate-100">
                        {activeWeapon.name}
                      </h2>
                      <button
                        onClick={() => toggleFavoriteWeapon(activeWeapon.id)}
                        className={`p-1.5 rounded-lg border transition ${
                          favoriteWeaponIds.includes(activeWeapon.id)
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                            : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-amber-300'
                        }`}
                        title={favoriteWeaponIds.includes(activeWeapon.id) ? "Saved Weapon" : "Save Weapon"}
                      >
                        <Star className={`w-4 h-4 ${favoriteWeaponIds.includes(activeWeapon.id) ? 'fill-amber-400' : ''}`} />
                      </button>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      {Array.from({ length: activeWeapon.rarity }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1.5">
                      {WEAPON_TYPE_INFO[activeWeapon.type]?.iconUrl && (
                        <div className="relative w-4 h-4 flex-shrink-0">
                          <Image
                            src={WEAPON_TYPE_INFO[activeWeapon.type].iconUrl}
                            alt={activeWeapon.type}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <span className="capitalize">{activeWeapon.type}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-bold">{activeWeapon.rarity}★ Weapon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain">
              {/* Lv. 90 Base Stats Card */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Level 90 Stats</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Base ATK</span>
                    <span className="text-lg font-black text-slate-100">{activeWeapon.baseAtk}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Secondary Stat</span>
                    <span className="text-sm font-bold text-amber-400">{activeWeapon.substatType || 'None'}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center col-span-2 sm:col-span-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Max Substat Value</span>
                    <span className="text-sm font-bold text-sky-400">{activeWeapon.substatValue || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Passive Skill */}
              {activeWeapon.passiveDesc && (
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Weapon Passive Effect (Refinement 1 ~ 5)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-lg border border-slate-800/80">
                    {activeWeapon.passiveDesc}
                  </p>
                </div>
              )}

              {/* Recommended Characters from Roster */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Recommended For (In Current 122 Roster)</span>
                </h4>

                {weaponBeneficiaries.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {weaponBeneficiaries.map((char) => (
                      <div
                        key={char.id}
                        onClick={() => {
                          setActiveWeapon(null);
                          setActiveCharacter(char);
                          setCharacterModalTab('build');
                        }}
                        className="group/char cursor-pointer p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 transition flex items-center space-x-2.5"
                      >
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-950 flex-shrink-0">
                          {char.avatarUrl ? (
                            <Image
                              src={char.avatarUrl}
                              alt={char.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          ) : (
                            <span className="text-xs flex items-center justify-center h-full">
                              {char.icon || '⚔️'}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-200 group-hover/char:text-amber-300 truncate">
                            {char.name}
                          </p>
                          <p className="text-[10px] text-slate-500 capitalize">{char.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">
                    Universal {activeWeapon.type} stat stick. Viable on multiple {activeWeapon.type} users scaling with {activeWeapon.substatType || 'Base ATK'}.
                  </p>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end flex-shrink-0">
              <button
                onClick={() => setActiveWeapon(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition"
              >
                Close Armory Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
