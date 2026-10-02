'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  Maximize2,
  Minimize2,
  ExternalLink,
  RefreshCw,
  Sparkles,
  MapPin,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Globe
} from 'lucide-react';

type MapEngine = 'kongying' | 'hoyolab';

interface EngineConfig {
  id: MapEngine;
  name: string;
  badge: string;
  badgeColor: string;
  description: string;
  url: string;
}

const MAP_ENGINES: Record<MapEngine, EngineConfig> = {
  kongying: {
    id: 'kongying',
    name: 'Kongying Tavern (Yuanshen.site)',
    badge: 'Open-Source Community Map',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: 'The world-standard open-source Genshin interactive map. Featuring multi-layer underground caves, verified player pins, and ad-free exploration.',
    url: '/map-client/index.html'
  },
  hoyolab: {
    id: 'hoyolab',
    name: 'HoYoLAB Official Interactive Map',
    badge: 'Official HoYoverse Engine',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description: 'The official Teyvat interactive map directly from HoYoverse. Syncs in-game pins with real-time updates for every new version.',
    url: 'https://act.hoyolab.com/ys/app/interactive-map/index.html?lang=en-us'
  }
};

export const MapExplorer: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState<MapEngine>('kongying');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);

  // Lock background scroll when in fullscreen
  useEffect(() => {
    if (isFullscreen) {
      const prevBody = document.body.style.overflow;
      const prevHtml = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevBody;
        document.documentElement.style.overflow = prevHtml;
      };
    }
  }, [isFullscreen]);

  // ESC key exits fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const currentEngine = MAP_ENGINES[activeEngine];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/20 p-6 md:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Production-Grade Interactive Map</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Teyvat Interactive Resource Map
          </h2>
          <p className="text-sm text-slate-300">
            Powered by Kongying Tavern and official map engines. Explore all 15,000+ pins, multi-layer underground caverns, Oculi, and local specialty farming routes across all nations.
          </p>
        </div>
      </div>

      {/* Main Map Card */}
      <div
        className={`bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all ${
          isFullscreen
            ? 'fixed inset-0 z-50 rounded-none border-none p-3 sm:p-4 bg-slate-950/98 backdrop-blur-md flex flex-col'
            : ''
        }`}
      >
        {/* Top Control Bar */}
        <div className="bg-slate-950/80 p-3 sm:p-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          {/* Engine Selector Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setActiveEngine('kongying');
                setIframeKey((prev) => prev + 1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                activeEngine === 'kongying'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Kongying Tavern (Yuanshen.site)</span>
            </button>

            <button
              onClick={() => {
                setActiveEngine('hoyolab');
                setIframeKey((prev) => prev + 1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                activeEngine === 'hoyolab'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>HoYoLAB Official (English)</span>
            </button>

            <span className={`hidden md:inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full border ${currentEngine.badgeColor}`}>
              <ShieldCheck className="w-3 h-3 mr-1" />
              {currentEngine.badge}
            </span>
          </div>

          {/* Action Tools */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIframeKey((prev) => prev + 1)}
              className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition"
              title="Reload Map Frame"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reload</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition shadow-lg shadow-cyan-500/20"
              title={isFullscreen ? 'Exit Fullscreen (ESC)' : 'Fullscreen View'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            </button>

            <a
              href={currentEngine.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition"
              title="Open full map in separate tab or second monitor"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>
          </div>
        </div>

        {/* Interactive Map Frame */}
        <div
          className={`w-full relative bg-slate-950 ${
            isFullscreen ? 'flex-1 h-full' : 'h-[78vh] min-h-[620px]'
          }`}
        >
          <iframe
            key={`${activeEngine}_${iframeKey}`}
            src={currentEngine.url}
            title={currentEngine.name}
            className="w-full h-full border-0"
            allow="fullscreen; geolocation; clipboard-write; clipboard-read"
            loading="lazy"
          />
        </div>
      </div>

      {/* Pro Farming Features & Companion Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl space-y-1.5">
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Underground & Cave Maps</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Toggle underground layers in the map sidebar to view multi-level subterranean caverns in Sumeru, Fontaine depths, and The Chasm.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl space-y-1.5">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold">
            <MapPin className="w-4 h-4" />
            <span>Interactive Pin Checklists</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Click any pin to mark it as collected. Your checklist progress persists automatically in your browser storage.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl space-y-1.5">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Dual Screen / Second Monitor</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Click <strong>New Tab</strong> in the top toolbar to pop the map onto a second screen while playing Genshin on your primary display.
          </p>
        </div>
      </div>
    </div>
  );
};
