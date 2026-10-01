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

  const navItems: { id: ActiveTab; label: string; iconSrc: string }[] = [
    { id: 'characters', label: 'Builds', iconSrc: '/assets/ui/intertwined-fate.png' },
    { id: 'materials', label: 'Materials', iconSrc: '/assets/ui/primogem.png' },
    { id: 'map', label: 'Resource Map', iconSrc: '/assets/ui/map.png' },
    { id: 'quests', label: 'Quest Roadmap', iconSrc: '/assets/ui/quest.png' },
    { id: 'farming', label: 'Farming Hub', iconSrc: '/assets/ui/heros-wit.png' }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Official Genshin Impact Luminous Logo */}
          <div
            className="flex items-center space-x-2.5 cursor-pointer select-none group"
            onClick={() => setActiveTab('characters')}
          >
            <div className="relative h-8 w-28 sm:h-9 sm:w-32 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/assets/ui/genshin-logo.svg"
                alt="Genshin Impact"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="text-[10px] tracking-widest uppercase font-black text-amber-400/90 font-mono px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
              TEYVAT
            </span>
          </div>

          {/* Desktop Navigation - Clean, un-cluttered */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-amber-400/15 text-amber-300 border border-amber-400/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <div className="relative w-4 h-4 flex-shrink-0">
                    <Image
                      src={item.iconSrc}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Compact In-Game Currency HUD Bar */}
          <div className="flex items-center space-x-2">
            {/* Unified In-Game HUD Capsule */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-full p-1 pl-2.5 shadow-sm">
              {/* Mora Shortcut */}
              <button
                onClick={() => setActiveTab('farming')}
                className="flex items-center space-x-1.5 pr-2.5 hover:opacity-80 transition"
                title="Mora Farming Guides"
              >
                <div className="relative w-4 h-4 flex-shrink-0">
                  <Image src="/assets/ui/mora.png" alt="Mora" fill className="object-contain" />
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-300">Mora</span>
              </button>

              {/* Divider */}
              <div className="h-3.5 w-px bg-slate-700/80" />

              {/* Live Resin Capsule Button */}
              <button
                onClick={onOpenResinTracker}
                className="flex items-center space-x-2 px-2.5 py-0.5 rounded-full hover:bg-slate-800/80 transition group"
                title="Open Resin & Daily Reset Planner"
              >
                <div className="relative w-4 h-4 flex-shrink-0">
                  <Image
                    src="/assets/ui/resin.png"
                    alt="Original Resin"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                  {currentResin >= 190 && (
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  )}
                </div>
                <div className="flex items-baseline space-x-0.5 font-mono text-xs">
                  <span className="font-bold text-sky-200">{currentResin}</span>
                  <span className="text-[10px] text-slate-500">/200</span>
                </div>

                {/* Condensed count badge */}
                <div className="hidden sm:flex items-center space-x-1 pl-1 border-l border-slate-700/60">
                  <div className="relative w-3.5 h-3.5 flex-shrink-0">
                    <Image
                      src="/assets/ui/condensed-resin.png"
                      alt="Condensed"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 font-bold">{condensedCount}</span>
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-bold ${
                activeTab === item.id
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image src={item.iconSrc} alt="" fill className="object-contain" />
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
