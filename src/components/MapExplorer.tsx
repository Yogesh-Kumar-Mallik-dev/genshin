'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePersistentState } from '@/hooks/usePersistentState';
import { SPECIALTY_FARMING_PROFILES, SpecialtyFarmingProfile, FarmingRoute } from '@/data/farmingRoutes';
import { RegionType } from '@/types/genshin';
import {
  Compass,
  Search,
  Timer,
  CheckCircle2,
  Circle,
  ExternalLink,
  Sparkles,
  Layers,
  MapPin,
  ChevronRight,
  TrendingUp,
  Store,
  Flower2,
  Eye,
  Navigation,
  CheckSquare,
  RefreshCw,
  Flame,
  ArrowRight
} from 'lucide-react';

const REGION_THEMES: Record<RegionType | 'All', { bg: string; text: string; border: string }> = {
  All: { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/30' },
  Mondstadt: { bg: 'bg-cyan-500/10', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  Liyue: { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/30' },
  Inazuma: { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/30' },
  Sumeru: { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/30' },
  Fontaine: { bg: 'bg-blue-500/10', text: 'text-blue-300', border: 'border-blue-500/30' },
  Natlan: { bg: 'bg-orange-500/10', text: 'text-orange-300', border: 'border-orange-500/30' },
  'Nod-Krai': { bg: 'bg-teal-500/10', text: 'text-teal-300', border: 'border-teal-500/30' },
  Snezhnaya: { bg: 'bg-sky-500/10', text: 'text-sky-300', border: 'border-sky-500/30' },
  Khaenriah: { bg: 'bg-slate-500/10', text: 'text-slate-300', border: 'border-slate-500/30' }
};

export const REGION_OFFICIAL_METADATA: Record<RegionType, { element: string; releaseNote: string; version: string; year: string }> = {
  Mondstadt: { element: 'Anemo', releaseNote: 'Available since launch (Version 1.0)', version: 'Version 1.0', year: '2020' },
  Liyue: { element: 'Geo', releaseNote: 'Available since launch (Version 1.0)', version: 'Version 1.0', year: '2020' },
  Inazuma: { element: 'Electro', releaseNote: 'Released in 2021 (Version 2.0)', version: 'Version 2.0', year: '2021' },
  Sumeru: { element: 'Dendro', releaseNote: 'Released in 2022 (Version 3.0)', version: 'Version 3.0', year: '2022' },
  Fontaine: { element: 'Hydro', releaseNote: 'Released in 2023 (Version 4.0)', version: 'Version 4.0', year: '2023' },
  Natlan: { element: 'Pyro', releaseNote: 'Released in 2024 (Version 5.0)', version: 'Version 5.0', year: '2024' },
  'Nod-Krai': { element: 'Autonomous Region', releaseNote: 'Released in 2025 (Version 6.0)', version: 'Version 6.0', year: '2025' },
  Snezhnaya: { element: 'Cryo', releaseNote: 'Released on August 12, 2026 (Version 7.0)', version: 'Version 7.0', year: '2026' },
  Khaenriah: { element: 'Abyssal / Eclipse', releaseNote: 'Future Expansion (Version 8.0+)', version: 'Version 8.0+', year: 'TBA' }
};

const ELEVATION_BADGES: Record<string, { bg: string; text: string }> = {
  Surface: { bg: 'bg-slate-800 text-slate-300', text: 'text-slate-300' },
  'Cliff Peak': { bg: 'bg-amber-500/20 text-amber-300 border border-amber-500/30', text: 'text-amber-300' },
  'Underground Cave': { bg: 'bg-purple-500/20 text-purple-300 border border-purple-500/30', text: 'text-purple-300' },
  Underwater: { bg: 'bg-blue-500/20 text-blue-300 border border-blue-500/30', text: 'text-blue-300' }
};

export const MapExplorer: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = usePersistentState<RegionType | 'All'>('teyvat_map_selected_region', 'All');
  const [searchQuery, setSearchQuery] = usePersistentState<string>('teyvat_map_search_query', '');
  const [activeSpecialtyId, setActiveSpecialtyId] = usePersistentState<string>('teyvat_map_active_specialty_id', 'lakelight-lily');
  const [activeRouteId, setActiveRouteId] = usePersistentState<string>('teyvat_map_active_route_id', 'lakelight-route-1');

  // Tracking states saved to localStorage
  const [userCollectedCounts, setUserCollectedCounts] = useState<Record<string, number>>({});
  const [farmedTimestamps, setFarmedTimestamps] = useState<Record<string, number>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [nowTime, setNowTime] = useState<number>(Date.now());

  // Interval timer tick
  useEffect(() => {
    const timer = setInterval(() => setNowTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Load persistence
  useEffect(() => {
    try {
      const savedCounts = localStorage.getItem('teyvat_farming_counts');
      if (savedCounts) setUserCollectedCounts(JSON.parse(savedCounts));

      const savedTimestamps = localStorage.getItem('teyvat_farmed_timestamps');
      if (savedTimestamps) setFarmedTimestamps(JSON.parse(savedTimestamps));

      const savedSteps = localStorage.getItem('teyvat_completed_steps');
      if (savedSteps) setCompletedSteps(JSON.parse(savedSteps));
    } catch {
      // ignore
    }
  }, []);

  // Filter profiles
  const filteredProfiles = SPECIALTY_FARMING_PROFILES.filter((profile) => {
    const matchesRegion = selectedRegion === 'All' || profile.region === selectedRegion;
    const matchesSearch =
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.usedFor.some((char) => char.toLowerCase().includes(searchQuery.toLowerCase())) ||
      profile.routes.some((r) => r.routeName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  const activeSpecialty =
    SPECIALTY_FARMING_PROFILES.find((p) => p.id === activeSpecialtyId) ||
    filteredProfiles[0] ||
    SPECIALTY_FARMING_PROFILES[0];

  const activeRoute =
    activeSpecialty.routes.find((r) => r.id === activeRouteId) ||
    activeSpecialty.routes[0];

  // Actions
  const handleUpdateCount = (id: string, delta: number) => {
    const current = userCollectedCounts[id] || 0;
    const next = Math.max(0, Math.min(168, current + delta));
    const updated = { ...userCollectedCounts, [id]: next };
    setUserCollectedCounts(updated);
    try {
      localStorage.setItem('teyvat_farming_counts', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleStartRespawnTimer = (id: string) => {
    const updated = { ...farmedTimestamps, [id]: Date.now() };
    setFarmedTimestamps(updated);
    try {
      localStorage.setItem('teyvat_farmed_timestamps', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleToggleStep = (stepKey: string) => {
    const updated = { ...completedSteps, [stepKey]: !completedSteps[stepKey] };
    setCompletedSteps(updated);
    try {
      localStorage.setItem('teyvat_completed_steps', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Compute timer display
  const getRespawnTimerDisplay = (id: string) => {
    const timestamp = farmedTimestamps[id];
    if (!timestamp) return null;
    const durationMs = 48 * 60 * 60 * 1000; // 48 Hours
    const remainingMs = timestamp + durationMs - nowTime;

    if (remainingMs <= 0) {
      return { ready: true, text: 'Ready to Farm!' };
    }

    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

    return {
      ready: false,
      text: `${hours}h ${minutes}m ${seconds}s`
    };
  };

  const currentCount = userCollectedCounts[activeSpecialty.id] || 0;
  const progressPercent = Math.min(100, Math.round((currentCount / 168) * 100));
  const timerInfo = getRespawnTimerDisplay(activeSpecialty.id);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/20 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Teyvat Resource Locator & Route Navigator</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
              Teyvat Resource Locator
            </h2>
            <p className="text-sm text-slate-300">
              High-yield 5-minute farming routes with numbered waypoint paths, elevation badges, 48-hour respawn timers, and character ascension targets across all 8 officially supported regions.
            </p>
          </div>

          <a
            href="https://act.hoyolab.com/ys/app/interactive-map/index.html?lang=en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-4 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-xl flex items-center space-x-2 transition shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Official Live Map ↗</span>
          </a>
        </div>
      </div>

      {/* Nation Filter & Search Bar */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Nation Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(['All', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan', 'Nod-Krai', 'Snezhnaya'] as const).map((region) => {
              const isSelected = selectedRegion === region;
              const meta = region !== 'All' ? REGION_OFFICIAL_METADATA[region] : null;

              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{region}</span>
                  {meta && (
                    <span className={`text-[10px] font-mono px-1 rounded ${isSelected ? 'bg-slate-900/20 text-slate-950 font-extrabold' : 'bg-slate-950/60 text-slate-400'}`}>
                      {meta.version.replace('Version ', 'v')}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative min-w-[240px] w-full sm:w-auto">
            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search specialty, character (e.g. Furina)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Official Region Support Detail Banner */}
        <div className="pt-1 border-t border-slate-800/60 text-xs flex flex-wrap items-center gap-2 text-slate-400">
          <span className="font-semibold text-amber-400/90 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Support:</span>
          </span>
          {selectedRegion === 'All' ? (
            <span className="text-[11px] text-slate-400">
              • Mondstadt (Anemo, v1.0) • Liyue (Geo, v1.0) • Inazuma (Electro, 2021) • Sumeru (Dendro, 2022) • Fontaine (Hydro, 2023) • Natlan (Pyro, 2024) • Nod-Krai (Autonomous, 2025) • Snezhnaya (Cryo, Aug 12, 2026)
            </span>
          ) : (
            <span className="text-[11px] text-slate-300 font-medium">
              <strong className="text-slate-100">{selectedRegion}</strong> ({REGION_OFFICIAL_METADATA[selectedRegion].element}) – {REGION_OFFICIAL_METADATA[selectedRegion].releaseNote}
            </span>
          )}
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Specialty Cards List (4 cols) */}
        <div className="lg:col-span-4 space-y-3 max-h-[750px] overflow-y-auto pr-1">
          {filteredProfiles.map((profile) => {
            const isSelected = profile.id === activeSpecialty.id;
            const userCount = userCollectedCounts[profile.id] || 0;
            const profileTimer = getRespawnTimerDisplay(profile.id);

            return (
              <div
                key={profile.id}
                onClick={() => {
                  setActiveSpecialtyId(profile.id);
                  setActiveRouteId(profile.routes[0].id);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400/80 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/30'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-1.5 flex-shrink-0">
                      <Image
                        src={profile.iconUrl}
                        alt={profile.name}
                        fill
                        className="object-contain p-1"
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                          {profile.region}
                        </span>
                        {profileTimer && (
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1 ${
                              profileTimer.ready
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            }`}
                          >
                            <Timer className="w-2.5 h-2.5" />
                            <span>{profileTimer.ready ? 'Respawned' : profileTimer.text}</span>
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-100 leading-tight mt-1">
                        {profile.name}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>

                {/* Used for characters */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 truncate max-w-[200px]">
                    Ascends: <strong className="text-slate-200">{profile.usedFor.join(', ')}</strong>
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {userCount}/168
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Route Navigator & Waypoint Steps (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Specialty Cockpit Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-2xl bg-slate-950 border border-amber-500/30 flex items-center justify-center p-2 flex-shrink-0 shadow-lg shadow-amber-500/10">
                  <Image
                    src={activeSpecialty.iconUrl}
                    alt={activeSpecialty.name}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {activeSpecialty.region} Specialty
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono">
                      {activeSpecialty.totalWorldSpawns}x World Total
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-100 tracking-tight mt-0.5">
                    {activeSpecialty.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Required for Level 90: <strong className="text-slate-200">{activeSpecialty.usedFor.join(', ')}</strong>
                  </p>
                </div>
              </div>

              {/* Respawn Timer Button */}
              <div className="flex flex-col items-start sm:items-end space-y-1.5">
                <button
                  onClick={() => handleStartRespawnTimer(activeSpecialty.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition ${
                    timerInfo?.ready === false
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                  }`}
                >
                  <Timer className="w-4 h-4" />
                  <span>
                    {timerInfo?.ready === false
                      ? `Farmed (Respawn in ${timerInfo.text})`
                      : 'Mark Farmed (Start 48h Timer)'}
                  </span>
                </button>
                <span className="text-[10px] text-slate-500">
                  Respawn period: 48 hours after collection
                </span>
              </div>
            </div>

            {/* Ascension Progress Bar */}
            <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ascension Goal (168 Total Needed):</span>
                </span>
                <span className="font-mono font-bold text-amber-300">
                  {currentCount} / 168 ({progressPercent}%)
                </span>
              </div>

              <div className="w-full bg-slate-800/80 h-3 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full transition-all duration-300 shadow-sm"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">
                  Remaining to Farm: <strong>{Math.max(0, 168 - currentCount)}x</strong>
                </span>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => handleUpdateCount(activeSpecialty.id, -5)}
                    className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] rounded-lg transition"
                  >
                    -5
                  </button>
                  <button
                    onClick={() => handleUpdateCount(activeSpecialty.id, 5)}
                    className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] rounded-lg transition"
                  >
                    +5
                  </button>
                  <button
                    onClick={() => handleUpdateCount(activeSpecialty.id, activeRoute.yieldCount)}
                    className="px-2.5 py-0.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold rounded-lg transition"
                  >
                    + Add Route Yield (+{activeRoute.yieldCount})
                  </button>
                </div>
              </div>
            </div>

            {/* Pro Gathering Intelligence Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-slate-400 flex items-center space-x-1.5 font-semibold text-[11px]">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Minimap Radar:</span>
                </span>
                <p className="text-slate-200 font-medium">{activeSpecialty.radarPassiveCharacter}</p>
              </div>

              {activeSpecialty.shopNpc && (
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                  <span className="text-slate-400 flex items-center space-x-1.5 font-semibold text-[11px]">
                    <Store className="w-3.5 h-3.5 text-amber-400" />
                    <span>NPC Shop Merchant:</span>
                  </span>
                  <p className="text-slate-200 font-medium">
                    {activeSpecialty.shopNpc.name} ({activeSpecialty.shopNpc.count}x / {activeSpecialty.shopNpc.refreshDays}d)
                  </p>
                </div>
              )}

              {activeSpecialty.sereniteaPotGarden && (
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                  <span className="text-slate-400 flex items-center space-x-1.5 font-semibold text-[11px]">
                    <Flower2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Teapot Gardening:</span>
                  </span>
                  <p className="text-slate-200 font-medium">{activeSpecialty.sereniteaPotGarden.seedName}</p>
                </div>
              )}
            </div>

            {/* Pro Tip Callout */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-2xl text-xs text-amber-200 flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">{activeSpecialty.proTips}</p>
            </div>
          </div>

          {/* Route Selector Tabs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-slate-100 flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Available Farming Runs ({activeSpecialty.routes.length})</span>
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeSpecialty.routes.map((route, idx) => {
                const isCurrent = route.id === activeRoute.id;
                return (
                  <button
                    key={route.id}
                    onClick={() => setActiveRouteId(route.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition flex items-center space-x-2.5 border ${
                      isCurrent
                        ? 'bg-slate-900 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-mono text-[11px]">
                      {idx + 1}
                    </span>
                    <span>{route.routeName}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      +{route.yieldCount}x
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Waypoint Steps Walkthrough Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 gap-2">
                <div>
                  <span className="text-xs text-amber-400 font-semibold block uppercase tracking-wider">
                    Fast Run Walkthrough
                  </span>
                  <h4 className="text-lg font-bold text-slate-100">{activeRoute.routeName}</h4>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-slate-800 px-3 py-1 rounded-xl text-slate-300 font-semibold">
                    ⏱️ ~{activeRoute.estimatedMinutes} mins
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-xl font-bold font-mono">
                    Yield: {activeRoute.yieldCount}x
                  </span>
                </div>
              </div>

              {/* Start Teleport Notice */}
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-sky-500/30 flex items-center space-x-3 text-xs">
                <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">
                    Starting Waypoint Reference:
                  </span>
                  <span className="text-slate-100 font-bold">{activeRoute.startTeleport}</span>
                </div>
              </div>

              {/* Numbered Steps List */}
              <div className="space-y-3 pt-1">
                {activeRoute.steps.map((step) => {
                  const stepKey = `${activeRoute.id}_step_${step.stepNumber}`;
                  const isDone = !!completedSteps[stepKey];
                  const elevStyle = ELEVATION_BADGES[step.elevation] || ELEVATION_BADGES.Surface;

                  return (
                    <div
                      key={step.stepNumber}
                      onClick={() => handleToggleStep(stepKey)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                        isDone
                          ? 'bg-slate-950/40 border-slate-800/60 opacity-60'
                          : 'bg-slate-950/80 hover:bg-slate-950 border-slate-800'
                      }`}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStep(stepKey);
                        }}
                        className="mt-0.5 flex-shrink-0 text-slate-400 hover:text-emerald-400 transition"
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-600" />
                        )}
                      </button>

                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-200 flex items-center space-x-2">
                            <span>Step {step.stepNumber}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${elevStyle.bg}`}>
                              {step.elevation}
                            </span>
                          </span>

                          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                            +{step.count}
                          </span>
                        </div>

                        <p className={`text-xs leading-relaxed ${isDone ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                          {step.instruction}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
