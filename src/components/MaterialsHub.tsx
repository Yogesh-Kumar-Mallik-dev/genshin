'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LOCAL_SPECIALTIES, TALENT_SCHEDULES, ESSENTIAL_MOB_DROPS } from '@/data/materials';
import { RegionType } from '@/types/genshin';
import { Calendar, MapPin, Sparkles, Clock, ShieldCheck, Skull, ChevronRight } from 'lucide-react';

export const MaterialsHub: React.FC = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayIndex = new Date().getDay();
  const todayName = daysOfWeek[todayIndex];

  // Convert full day name to short form (e.g., 'Mon', 'Tue', etc.)
  const shortDays: Record<string, string> = {
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Wed',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat',
    Sunday: 'Sun'
  };

  const [selectedDay, setSelectedDay] = useState<string>(todayName);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'schedule' | 'specialties' | 'mobs'>('schedule');

  const filteredTalents = TALENT_SCHEDULES.map((sched) => {
    const dayShort = shortDays[selectedDay];
    const availableItems = sched.items.filter((item) =>
      selectedDay === 'Sunday' ? true : item.days.includes(dayShort)
    );
    return {
      ...sched,
      availableItems
    };
  }).filter((sched) => sched.availableItems.length > 0);

  const filteredSpecialties = LOCAL_SPECIALTIES.filter((item) => {
    return selectedRegion === 'all' || item.region === selectedRegion;
  });

  const regions: RegionType[] = ['Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan', 'Nod-Krai', 'Snezhnaya'];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/20 p-6 md:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Teyvat Resource & Domain Index</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Essential Materials & Domain Rotations
          </h2>
          <p className="text-sm text-slate-300">
            Never miss a talent book day. Track 48-hour local specialty respawns, elite mob drop clusters, and weekly boss materials.
          </p>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="flex border-b border-slate-800 space-x-4">
        <button
          onClick={() => setActiveTab('schedule')}
          className={`pb-3 text-sm font-semibold flex items-center space-x-2 transition border-b-2 ${
            activeTab === 'schedule'
              ? 'border-amber-400 text-amber-300'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Daily Talent Domain Schedule</span>
        </button>
        <button
          onClick={() => setActiveTab('specialties')}
          className={`pb-3 text-sm font-semibold flex items-center space-x-2 transition border-b-2 ${
            activeTab === 'specialties'
              ? 'border-amber-400 text-amber-300'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Regional Local Specialties (48h)</span>
        </button>
        <button
          onClick={() => setActiveTab('mobs')}
          className={`pb-3 text-sm font-semibold flex items-center space-x-2 transition border-b-2 ${
            activeTab === 'mobs'
              ? 'border-amber-400 text-amber-300'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Skull className="w-4 h-4" />
          <span>Essential Mob Drop Clusters</span>
        </button>
      </div>

      {/* TAB 1: DAILY DOMAIN SCHEDULE */}
      {activeTab === 'schedule' && (
        <div className="space-y-4">
          {/* Day Selector */}
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 mr-2 font-medium">Select Day:</span>
            {daysOfWeek.map((day) => {
              const isToday = day === todayName;
              const isSelected = day === selectedDay;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>{day}</span>
                  {isToday && (
                    <span className={`text-[9px] px-1 rounded uppercase ${isSelected ? 'bg-slate-900 text-amber-400' : 'bg-amber-400/20 text-amber-300'}`}>
                      Today
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {selectedDay === 'Sunday' && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-200 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>
                <strong>Sunday Rotation:</strong> All talent book domains and weapon materials are freely selectable today! Choose whichever your characters need most.
              </span>
            </div>
          )}

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTalents.map((domain, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div>
                    <h3 className="font-bold text-sm text-slate-100">{domain.domain}</h3>
                    <span className="text-[11px] text-amber-400 font-medium">{domain.region}</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    20 Resin
                  </span>
                </div>

                <div className="space-y-3">
                  {domain.availableItems.map((item, iIdx) => (
                    <div key={iIdx} className="bg-slate-950/70 p-3 rounded-lg border border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className="relative w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/60 p-0.5 flex-shrink-0">
                            <Image
                              src={item.iconUrl}
                              alt={item.name}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-emerald-400 block leading-tight">
                              Philosophies of {item.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {item.days.join(', ')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-300">
                        <span className="text-slate-500 font-medium">Used for:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.characters.map((char, cIdx) => (
                            <span key={cIdx} className="bg-slate-800 text-slate-200 px-1.5 py-0.5 rounded text-[10px]">
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: LOCAL SPECIALTIES */}
      {activeTab === 'specialties' && (
        <div className="space-y-4">
          {/* Region Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 mr-2">Filter Region:</span>
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                selectedRegion === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Regions
            </button>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                  selectedRegion === reg
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSpecialties.map((spec) => (
              <div key={spec.id} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="relative w-12 h-12 rounded-xl bg-slate-950/90 border border-amber-500/30 p-1 flex-shrink-0 shadow-md flex items-center justify-center">
                        {spec.iconUrl ? (
                          <Image
                            src={spec.iconUrl}
                            alt={spec.name}
                            fill
                            className="object-contain p-1"
                            unoptimized
                          />
                        ) : (
                          <span className="text-2xl">{spec.icon}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-100">{spec.name}</h4>
                        <span className="text-[11px] text-amber-400 font-medium">{spec.region} Specialty</span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-sky-400" />
                      <span>{spec.respawnTime}</span>
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    <strong className="text-slate-400 font-semibold block text-[11px]">Primary Locations:</strong>
                    <p className="bg-slate-950/60 p-2 rounded border border-slate-800 text-[11px] text-slate-300">
                      {spec.locationDetails}
                    </p>
                  </div>

                  <div className="text-xs space-y-1">
                    <strong className="text-slate-400 font-semibold block text-[11px]">Needed for Ascension:</strong>
                    <div className="flex flex-wrap gap-1">
                      {spec.usedFor.map((c, idx) => (
                        <span key={idx} className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-1.5 py-0.5 rounded text-[10px]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 italic">
                  💡 {spec.farmingTips}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ESSENTIAL MOB DROPS */}
      {activeTab === 'mobs' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ESSENTIAL_MOB_DROPS.map((mob, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-12 rounded-xl bg-slate-950/90 border border-rose-500/30 p-1 flex-shrink-0 shadow-md">
                      <Image
                        src={mob.iconUrl}
                        alt={mob.name}
                        fill
                        className="object-contain p-1"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-slate-100">{mob.name}</h4>
                      <span className="text-xs text-rose-400 font-medium">Dropped by: {mob.enemy}</span>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Daily Respawn
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold block">Best Farming Hotspots:</span>
                    <p className="text-slate-300 bg-slate-950/50 p-2 rounded border border-slate-800/80 mt-1">
                      {mob.locations}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold block">Combat / Speed-clearing Strategy:</span>
                    <p className="text-amber-200/90 bg-amber-950/20 p-2 rounded border border-amber-500/20 mt-1">
                      {mob.farmingTips}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold block">Characters & Weapons Demanding This:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mob.usedFor.map((item, iIdx) => (
                        <span key={iIdx} className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
