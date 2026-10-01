'use client';

import React from 'react';
import { Sparkles, Compass, Shield, BookOpen, MapPin, BatteryCharging, Menu, X } from 'lucide-react';

export type ActiveTab = 'characters' | 'materials' | 'map' | 'quests' | 'farming';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenResinTracker: () => void;
  currentResin: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenResinTracker,
  currentResin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'characters', label: 'Build Guides', icon: <Shield className="w-4 h-4" /> },
    { id: 'materials', label: 'Materials & Domains', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'map', label: 'Resource Map', icon: <MapPin className="w-4 h-4" />, badge: 'Interactive' },
    { id: 'quests', label: 'Quest Roadmap', icon: <Compass className="w-4 h-4" />, badge: 'New Players' },
    { id: 'farming', label: 'Farming Hub', icon: <BookOpen className="w-4 h-4" />, badge: 'AR / Mora / EXP' }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('characters')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 flex items-center justify-center shadow-lg shadow-amber-500/20 ring-1 ring-amber-300/30">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-wider text-slate-100 uppercase">Teyvat Guide</span>
                <span className="text-[10px] uppercase font-semibold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                  v5.x Pro
                </span>
              </div>
              <p className="text-xs text-slate-400">Genshin Companion & Efficiency Suite</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                      isActive ? 'bg-amber-400/20 text-amber-200' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Resin Widget Quick Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenResinTracker}
              className="flex items-center space-x-2 bg-gradient-to-r from-sky-950/80 to-blue-900/60 hover:from-sky-900 hover:to-blue-800 text-sky-200 border border-sky-500/30 px-3 py-1.5 rounded-lg text-xs font-medium transition shadow-md group"
              title="Resin & Daily Reset Tracker"
            >
              <div className="relative">
                <BatteryCharging className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                {currentResin >= 190 && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                )}
              </div>
              <span className="font-semibold">{currentResin}/200</span>
              <span className="hidden sm:inline text-sky-400/80">Resin</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                activeTab === item.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
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
