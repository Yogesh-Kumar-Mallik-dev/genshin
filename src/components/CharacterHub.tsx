'use client';

import React, { useState } from 'react';
import { CHARACTERS_DATA } from '@/data/characters';
import { CharacterBuild, ElementType, WeaponType } from '@/types/genshin';
import { Search, Star, Sword, Sparkles, Users, Award, Shield, X, Check, Flame, Droplet, Trees, Zap, Wind, Snowflake, Mountain } from 'lucide-react';

const ELEMENT_COLORS: Record<ElementType, { bg: string; text: string; border: string; glow: string; icon: React.ReactNode }> = {
  pyro: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30', glow: 'glow-pyro', icon: <Flame className="w-3.5 h-3.5" /> },
  hydro: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30', glow: 'glow-hydro', icon: <Droplet className="w-3.5 h-3.5" /> },
  dendro: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'glow-dendro', icon: <Trees className="w-3.5 h-3.5" /> },
  electro: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', glow: 'glow-electro', icon: <Zap className="w-3.5 h-3.5" /> },
  anemo: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/30', glow: 'glow-anemo', icon: <Wind className="w-3.5 h-3.5" /> },
  cryo: { bg: 'bg-blue-300/10', text: 'text-blue-300', border: 'border-blue-400/30', glow: 'glow-cryo', icon: <Snowflake className="w-3.5 h-3.5" /> },
  geo: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', glow: 'glow-geo', icon: <Mountain className="w-3.5 h-3.5" /> }
};

export const CharacterHub: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [selectedWeapon, setSelectedWeapon] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCharacter, setActiveCharacter] = useState<CharacterBuild | null>(null);

  const elements: { id: string; label: string }[] = [
    { id: 'all', label: 'All Elements' },
    { id: 'pyro', label: 'Pyro' },
    { id: 'hydro', label: 'Hydro' },
    { id: 'dendro', label: 'Dendro' },
    { id: 'electro', label: 'Electro' },
    { id: 'anemo', label: 'Anemo' },
    { id: 'cryo', label: 'Cryo' },
    { id: 'geo', label: 'Geo' }
  ];

  const weapons: { id: string; label: string }[] = [
    { id: 'all', label: 'All Weapons' },
    { id: 'sword', label: 'Sword' },
    { id: 'claymore', label: 'Claymore' },
    { id: 'polearm', label: 'Polearm' },
    { id: 'bow', label: 'Bow' },
    { id: 'catalyst', label: 'Catalyst' }
  ];

  const roles = ['all', 'Main DPS', 'Sub DPS', 'Buffer', 'Support', 'Healer'];

  const filteredCharacters = CHARACTERS_DATA.filter((char) => {
    const matchesElement = selectedElement === 'all' || char.element === selectedElement;
    const matchesWeapon = selectedWeapon === 'all' || char.weapon === selectedWeapon;
    const matchesRole = selectedRole === 'all' || char.role === selectedRole;
    const matchesSearch =
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesElement && matchesWeapon && matchesRole && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-amber-500/20 p-6 md:p-8">
        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>KeqingMains Standard Builds</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Comprehensive Character Build Guides
          </h2>
          <p className="text-sm text-slate-300">
            Optimal weapons, best artifact sets, substat breakpoints, talent leveling priority, and synergistic meta teams for every character.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search character by name, title, or region (e.g. Furina, Fontaine, Sword)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-700/60 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Elements */}
          <div className="flex flex-wrap gap-1.5 mr-3">
            {elements.map((el) => {
              const isActive = selectedElement === el.id;
              return (
                <button
                  key={el.id}
                  onClick={() => setSelectedElement(el.id)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {el.label}
                </button>
              );
            })}
          </div>

          {/* Weapon Filter Dropdown */}
          <select
            value={selectedWeapon}
            onChange={(e) => setSelectedWeapon(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:border-amber-400"
          >
            {weapons.map((w) => (
              <option key={w.id} value={w.id}>{w.label}</option>
            ))}
          </select>

          {/* Role Filter Dropdown */}
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:border-amber-400"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r === 'all' ? 'All Roles' : r}
              </option>
            ))}
          </select>

          {(selectedElement !== 'all' || selectedWeapon !== 'all' || selectedRole !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedElement('all');
                setSelectedWeapon('all');
                setSelectedRole('all');
                setSearchQuery('');
              }}
              className="text-xs text-amber-400 hover:underline ml-auto"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Characters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCharacters.map((char) => {
          const color = ELEMENT_COLORS[char.element];
          return (
            <div
              key={char.id}
              onClick={() => setActiveCharacter(char)}
              className="group cursor-pointer rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="text-3xl p-1 rounded-lg bg-slate-950/60 border border-slate-800">
                      {char.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-100 group-hover:text-amber-300 transition">
                        {char.name}
                      </h3>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                        <span>{char.region}</span>
                        <span>•</span>
                        <span className="capitalize">{char.weapon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Element Badge */}
                  <span className={`inline-flex items-center space-x-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${color.bg} ${color.text} ${color.border}`}>
                    {color.icon}
                    <span className="capitalize">{char.element}</span>
                  </span>
                </div>

                {/* Stars and Role */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex text-amber-400">
                    {Array.from({ length: char.rarity }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium bg-slate-800/80 px-2 py-0.5 rounded text-slate-300 border border-slate-700/50">
                    {char.role}
                  </span>
                </div>

                {/* Excerpt */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {char.description}
                </p>

                {/* Best Weapons preview */}
                <div className="pt-2 border-t border-slate-800/60 space-y-1">
                  <div className="text-[11px] text-slate-400">
                    <span className="font-medium text-slate-300">BiS Artifact:</span> {char.bestArtifacts[0]?.name}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    <span className="font-medium text-slate-300">Top Weapon:</span> {char.bestWeapons[0]?.name}
                  </div>
                </div>
              </div>

              {/* View Build Button */}
              <div className="mt-4 pt-2">
                <button className="w-full py-1.5 rounded-lg bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-300 text-xs font-semibold transition flex items-center justify-center space-x-1.5">
                  <span>View Full Build Guide</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-dashed border-slate-800">
          <p className="text-slate-400 text-sm">No characters found matching your filters.</p>
        </div>
      )}

      {/* Character Detail Modal */}
      {activeCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl w-full max-w-3xl my-8 shadow-2xl overflow-hidden text-slate-200">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-4xl p-2 bg-slate-950/80 rounded-xl border border-slate-800 shadow">
                  {activeCharacter.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-100">{activeCharacter.name}</h2>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${ELEMENT_COLORS[activeCharacter.element].bg} ${ELEMENT_COLORS[activeCharacter.element].text} ${ELEMENT_COLORS[activeCharacter.element].border}`}>
                      {activeCharacter.element.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-amber-300/80 italic">{activeCharacter.title}</p>
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1">
                    <span>{activeCharacter.region}</span>
                    <span>•</span>
                    <span className="capitalize">{activeCharacter.weapon}</span>
                    <span>•</span>
                    <span className="text-amber-400 font-semibold">{activeCharacter.role}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveCharacter(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Overview */}
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800">
                {activeCharacter.description}
              </p>

              {/* Weapons & Artifacts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Weapons */}
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                    <Sword className="w-4 h-4" />
                    <span>Recommended Weapons</span>
                  </h4>
                  <div className="space-y-2">
                    {activeCharacter.bestWeapons.map((w, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-100 flex items-center space-x-1.5">
                            <span>{idx === 0 ? '👑' : '•'} {w.name}</span>
                            {w.isF2P && (
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">F2P</span>
                            )}
                          </span>
                          <span className="text-[10px] text-amber-400">{w.rarity}★</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">{w.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Artifacts */}
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                    <Award className="w-4 h-4" />
                    <span>Best Artifact Sets</span>
                  </h4>
                  <div className="space-y-2">
                    {activeCharacter.bestArtifacts.map((art, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-100">{art.name}</span>
                          <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded font-medium">
                            {art.count}pc
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">{art.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Main Stats */}
                  <div className="pt-2 border-t border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-slate-200">Main Stats:</span>
                    <div className="grid grid-cols-3 gap-1.5 text-[11px] text-slate-300 text-center">
                      <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                        <span className="text-slate-500 block text-[9px]">SANDS</span>
                        {activeCharacter.statPriorities.sands}
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                        <span className="text-slate-500 block text-[9px]">GOBLET</span>
                        {activeCharacter.statPriorities.goblet}
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                        <span className="text-slate-500 block text-[9px]">CIRCLET</span>
                        {activeCharacter.statPriorities.circlet}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Substats & Target Benchmarks */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Substat Priorities & Benchmarks</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCharacter.statPriorities.substats.map((sub, i) => (
                    <span key={i} className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">
                      {i + 1}. {sub}
                    </span>
                  ))}
                </div>
                {(activeCharacter.statPriorities.benchmarkEr || activeCharacter.statPriorities.benchmarkCrCd) && (
                  <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                    {activeCharacter.statPriorities.benchmarkEr && (
                      <div><strong className="text-sky-300">Target ER:</strong> {activeCharacter.statPriorities.benchmarkEr}</div>
                    )}
                    {activeCharacter.statPriorities.benchmarkCrCd && (
                      <div><strong className="text-amber-300">Target CR/CD:</strong> {activeCharacter.statPriorities.benchmarkCrCd}</div>
                    )}
                  </div>
                )}
              </div>

              {/* Talent Priority */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Talent Upgrade Priority</h4>
                <div className="flex items-center space-x-2 text-xs">
                  {activeCharacter.talentPriority.map((talent, idx) => (
                    <React.Fragment key={idx}>
                      <span className="bg-slate-900 border border-amber-500/30 px-3 py-1.5 rounded-lg text-slate-200 font-semibold shadow">
                        {talent}
                      </span>
                      {idx < activeCharacter.talentPriority.length - 1 && (
                        <span className="text-amber-400 font-bold">&gt;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Recommended Team Comps */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                  <Users className="w-4 h-4" />
                  <span>Synergistic Team Compositions</span>
                </h4>
                <div className="space-y-2.5">
                  {activeCharacter.recommendedTeams.map((team, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-100">{team.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {team.members.map((member, mIdx) => (
                          <span key={mIdx} className="bg-slate-800/90 text-amber-200 px-2 py-0.5 rounded text-xs border border-slate-700 font-medium">
                            {member}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] text-slate-400 italic">{team.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ascension & Talent Materials */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Ascension & Talent Materials</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">World Boss:</span>
                    {activeCharacter.ascensionMaterials.bossDrop}
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">Local Specialty:</span>
                    {activeCharacter.ascensionMaterials.localSpecialty}
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">Talent Books:</span>
                    {activeCharacter.talentMaterials.bookName}
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">Weekly Boss Drop:</span>
                    {activeCharacter.talentMaterials.weeklyBossDrop}
                  </div>
                </div>
              </div>

              {/* Pro Tips */}
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

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveCharacter(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
