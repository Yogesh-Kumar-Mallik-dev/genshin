'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CHARACTERS_DATA } from '@/data/characters';
import { CharacterBuild, ElementType } from '@/types/genshin';
import { Search, Star, Sword, Sparkles, Award, X, Flame, Droplet, Trees, Zap, Wind, Snowflake, Mountain } from 'lucide-react';

const ELEMENT_DATA: Record<ElementType, { name: string; color: string; border: string; glow: string; iconUrl: string }> = {
  pyro: { name: 'Pyro', color: 'text-red-400', border: 'border-red-500/40', glow: 'glow-pyro', iconUrl: '/assets/elements/pyro.png' },
  hydro: { name: 'Hydro', color: 'text-sky-400', border: 'border-sky-500/40', glow: 'glow-hydro', iconUrl: '/assets/elements/hydro.png' },
  dendro: { name: 'Dendro', color: 'text-emerald-400', border: 'border-emerald-500/40', glow: 'glow-dendro', iconUrl: '/assets/elements/dendro.png' },
  electro: { name: 'Electro', color: 'text-purple-400', border: 'border-purple-500/40', glow: 'glow-electro', iconUrl: '/assets/elements/electro.png' },
  anemo: { name: 'Anemo', color: 'text-teal-400', border: 'border-teal-500/40', glow: 'glow-anemo', iconUrl: '/assets/elements/anemo.png' },
  cryo: { name: 'Cryo', color: 'text-blue-300', border: 'border-blue-400/40', glow: 'glow-cryo', iconUrl: '/assets/elements/cryo.png' },
  geo: { name: 'Geo', color: 'text-amber-400', border: 'border-amber-500/40', glow: 'glow-geo', iconUrl: '/assets/elements/geo.png' }
};

const CharacterCardVisual: React.FC<{ char: CharacterBuild }> = ({ char }) => {
  const [hasError, setHasError] = useState(false);
  const src = char.cardUrl || char.avatarUrl;

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
      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
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

export const CharacterHub: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [selectedWeapon, setSelectedWeapon] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCharacter, setActiveCharacter] = useState<CharacterBuild | null>(null);

  useEffect(() => {
    if (activeCharacter) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [activeCharacter]);

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
    const matchesElement = selectedElement === 'all' || char.element === selectedElement;
    const matchesWeapon = selectedWeapon === 'all' || char.weapon === selectedWeapon;
    const matchesRole = selectedRole === 'all' || char.role === selectedRole;
    const matchesRegion = selectedRegion === 'all' || char.region === selectedRegion;
    const matchesSearch =
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesElement && matchesWeapon && matchesRole && matchesRegion && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Visual Header Banner with Teyvat Starry Aesthetic */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 border border-amber-500/30 p-6 md:p-8 shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>KeqingMains Standard Verified Builds</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Character Builds & Armory
          </h2>
          <p className="text-sm text-slate-300">
            Theorycrafted weapon rankings, optimal artifact sets, substat benchmarks, and synergistic teams covering all 122 playable characters across all 8 official regions (Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, Nod-Krai, and Snezhnaya).
          </p>
        </div>
      </div>

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

          {(selectedElement !== 'all' || selectedWeapon !== 'all' || selectedRole !== 'all' || selectedRegion !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedElement('all');
                setSelectedWeapon('all');
                setSelectedRole('all');
                setSelectedRegion('all');
                setSearchQuery('');
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
              onClick={() => setActiveCharacter(char)}
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

                {/* Character Avatar/Card Image */}
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
                  <span>{char.region}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Character Build Inspector Modal (Enka / KQM style) */}
      {activeCharacter && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveCharacter(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-hidden animate-fadeIn"
        >
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
            {/* Header Hero with Splash Art backdrop */}
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 p-5 sm:p-6 border-b border-slate-800 flex-shrink-0">
              {/* Ambient Splash Image */}
              {activeCharacter.splashUrl && (
                <div className="absolute right-0 -top-10 -bottom-10 w-2/3 opacity-30 pointer-events-none overflow-hidden mask-gradient-to-l">
                  <Image
                    src={activeCharacter.splashUrl}
                    alt={activeCharacter.name}
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                </div>
              )}

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  {/* Avatar Icon */}
                  <div className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shadow-xl ${
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
                    </div>
                    <p className="text-xs text-amber-300 italic">{activeCharacter.title}</p>
                    <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1">
                      <span>{activeCharacter.region}</span>
                      <span>•</span>
                      <span className="capitalize">{activeCharacter.weapon}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-bold">{activeCharacter.role}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCharacter(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body with smooth internal scroll */}
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
                          ) : (
                            <span className="text-lg flex items-center justify-center h-full">🗡️</span>
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

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end flex-shrink-0">
              <button
                onClick={() => setActiveCharacter(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
