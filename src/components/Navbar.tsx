'use client';

import React from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export type ActiveTab = 'characters' | 'materials' | 'map' | 'quests' | 'farming';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenResinTracker: () => void;
  currentResin: number;
  condensedCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenResinTracker,
  currentResin,
  condensedCount = 3
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: ActiveTab; label: string; iconSrc: string; badge?: string }[] = [
    { id: 'characters', label: 'Build Guides', iconSrc: '/assets/ui/intertwined-fate.png' },
    { id: 'materials', label: 'Materials & Domains', iconSrc: '/assets/ui/primogem.png' },
    { id: 'map', label: 'Resource Map', iconSrc: '/assets/ui/map.png', badge: 'Interactive' },
    { id: 'quests', label: 'Quest Roadmap', iconSrc: '/assets/ui/quest.png', badge: 'New Players' },
    { id: 'farming', label: 'Farming Hub', iconSrc: '/assets/ui/heros-wit.png', badge: 'Mora & EXP' }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/85 border-b border-amber-500/25 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Official Genshin Impact Logo & Brand */}
          <div
            className="flex items-center space-x-3 cursor-pointer group select-none"
            onClick={() => setActiveTab('characters')}
          >
            <div className="relative h-10 w-28 sm:h-12 sm:w-36 transition-transform group-hover:scale-105">
              <Image
                src="/assets/ui/genshin-logo.svg"
                alt="Genshin Impact"
                fill
                priority
                className="object-contain filter drop-shadow-[0_2px_8px_rgba(245,194,83,0.35)]"
              />
            </div>
            <div className="hidden sm:block pl-2 border-l border-amber-500/30">
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-sm tracking-wider text-slate-100 uppercase font-sans">
                  Companion
                </span>
                <span className="text-[9px] uppercase font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40">
                  PRO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-tight">Teyvat Guide & Armory</p>
            </div>
          </div>

          {/* Desktop Navigation with Official Game Item Icons */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-md shadow-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent'
                  }`}
                >
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <Image
                      src={item.iconSrc}
                      alt={item.label}
                      fill
                      className="object-contain drop-shadow"
                    />
                  </div>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                        isActive
                          ? 'bg-amber-400/25 text-amber-200'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Player In-Game Style Currency Bar (Mora & Resin) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mora Pill (Click to jump to Mora farming) */}
            <button
              onClick={() => setActiveTab('farming')}
              className="hidden md:flex items-center space-x-1.5 bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 px-2.5 py-1.5 rounded-full text-xs font-bold text-amber-300 transition shadow"
              title="Mora Farming Guide"
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image
                  src="/assets/ui/mora.png"
                  alt="Mora"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-[11px] text-amber-200">Infinite Mora</span>
            </button>

            {/* Original Resin & Condensed Live Pill */}
            <button
              onClick={onOpenResinTracker}
              className="flex items-center space-x-2 bg-gradient-to-r from-slate-900 via-sky-950/70 to-slate-900 hover:border-sky-400/60 text-sky-200 border border-sky-500/40 px-3 py-1.5 rounded-full text-xs font-bold transition shadow-lg group"
              title="Open Live Resin Countdown & Weekly Reset Planner"
            >
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                  src="/assets/ui/resin.png"
                  alt="Original Resin"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform"
                />
                {currentResin >= 190 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                )}
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-mono font-black text-sky-100">{currentResin}</span>
                <span className="text-[10px] text-slate-400">/ 200</span>
              </div>

              {/* Condensed Icon mini pill */}
              <div className="hidden sm:flex items-center space-x-1 pl-1.5 border-l border-slate-700/80">
                <div className="relative w-4 h-4 flex-shrink-0">
                  <Image
                    src="/assets/ui/condensed-resin.png"
                    alt="Condensed Resin"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-amber-300 font-mono">{condensedCount}/5</span>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold ${
                activeTab === item.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image
                    src={item.iconSrc}
                    alt={item.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
