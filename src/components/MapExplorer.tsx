'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { REGIONS_CONFIG, MAP_PINS } from '@/data/mapData';
import { LOCAL_SPECIALTIES } from '@/data/materials';
import { MapPin as MapPinType, RegionType } from '@/types/genshin';
import { MapPin, Navigation, Sparkles, Check, CheckCircle2, Circle, Search, Eye, Filter, Info, Compass, Layers, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react';

const REGION_ELEMENT_ICONS: Record<string, string> = {
  Anemo: '/assets/elements/anemo.png',
  Geo: '/assets/elements/geo.png',
  Electro: '/assets/elements/electro.png',
  Dendro: '/assets/elements/dendro.png',
  Hydro: '/assets/elements/hydro.png',
  Pyro: '/assets/elements/pyro.png'
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; label: string; iconUrl: string }> = {
  specialty: { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-500/40', label: 'Local Specialty', iconUrl: '/assets/materials/specialties/cecilia.png' },
  teleport: { bg: 'bg-sky-500/20', text: 'text-sky-300', border: 'border-sky-500/40', label: 'Teleport / Statue', iconUrl: '/assets/map/pins/teleport.png' },
  oculus: { bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'border-amber-500/40', label: 'Oculus', iconUrl: '/assets/map/pins/anemoculus.png' },
  boss: { bg: 'bg-rose-500/20', text: 'text-rose-300', border: 'border-rose-500/40', label: 'Trounce Boss', iconUrl: '/assets/map/pins/boss.png' },
  ore: { bg: 'bg-blue-400/20', text: 'text-blue-200', border: 'border-blue-400/40', label: 'Mining Hotspot', iconUrl: '/assets/map/pins/ore.svg' },
  shrine: { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/40', label: 'Shrine of Depths', iconUrl: '/assets/map/pins/shrine.png' }
};

const getPinIcon = (pin: MapPinType, region: RegionType): { iconUrl: string; label: string } => {
  if (pin.category === 'teleport') {
    if (pin.name.toLowerCase().includes('statue')) {
      return { iconUrl: '/assets/map/pins/statue.png', label: 'Statue of the Seven' };
    }
    return { iconUrl: '/assets/map/pins/teleport.png', label: 'Teleport Waypoint' };
  }
  if (pin.category === 'oculus') {
    const oculusMap: Record<string, string> = {
      Mondstadt: '/assets/map/pins/anemoculus.png',
      Liyue: '/assets/map/pins/geoculus.png',
      Inazuma: '/assets/map/pins/electroculus.png',
      Sumeru: '/assets/map/pins/dendroculus.png',
      Fontaine: '/assets/map/pins/hydroculus.png',
      Natlan: '/assets/map/pins/pyroculus.png'
    };
    return { iconUrl: oculusMap[region] || '/assets/map/pins/anemoculus.png', label: 'Oculus' };
  }
  if (pin.category === 'boss') {
    return { iconUrl: '/assets/map/pins/boss.png', label: 'Trounce Domain / Boss' };
  }
  if (pin.category === 'shrine') {
    return { iconUrl: '/assets/map/pins/shrine.png', label: 'Shrine of Depths' };
  }
  if (pin.category === 'ore') {
    return { iconUrl: '/assets/map/pins/ore.svg', label: 'Mining Outcrop' };
  }
  if (pin.category === 'specialty') {
    const match = LOCAL_SPECIALTIES.find(
      (s) => s.name.toLowerCase() === pin.name.toLowerCase() ||
             pin.name.toLowerCase().includes(s.name.toLowerCase())
    );
    if (match?.iconUrl) {
      return { iconUrl: match.iconUrl, label: match.name };
    }
    return { iconUrl: '/assets/materials/specialties/cecilia.png', label: 'Specialty' };
  }
  return { iconUrl: '/assets/map/pins/teleport.png', label: pin.name };
};

export const MapExplorer: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionType>('Mondstadt');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPin, setSelectedPin] = useState<MapPinType | null>(null);
  const [collectedPinIds, setCollectedPinIds] = useState<string[]>([]);
  const transformRef = useRef<ReactZoomPanPinchRef | null>(null);

  useEffect(() => {
    transformRef.current?.resetTransform();
  }, [selectedRegion]);

  // Load collected pins from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('teyvat_collected_pins');
      if (saved) {
        setCollectedPinIds(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const togglePinCollected = (id: string) => {
    const next = collectedPinIds.includes(id)
      ? collectedPinIds.filter((pId) => pId !== id)
      : [...collectedPinIds, id];
    setCollectedPinIds(next);
    try {
      localStorage.setItem('teyvat_collected_pins', JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const currentRegionConfig = REGIONS_CONFIG.find((r) => r.id === selectedRegion) || REGIONS_CONFIG[0];

  const regionPins = MAP_PINS.filter((p) => p.region === selectedRegion);

  const filteredPins = regionPins.filter((pin) => {
    const matchesCategory = selectedCategory === 'all' || pin.category === selectedCategory;
    const matchesSearch =
      pin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const collectedCountInRegion = regionPins.filter((p) => collectedPinIds.includes(p.id)).length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/20 p-6 md:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Interactive Resource Locator</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Teyvat Interactive Resource Map
          </h2>
          <p className="text-sm text-slate-300">
            Pinpoint all regional specialties, oculi, ore veins, and weekly trounce bosses. Track your collection progress locally with zero account login required.
          </p>
        </div>
      </div>

      {/* Region Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
        <span className="text-xs text-slate-400 font-semibold px-2 flex items-center space-x-1">
          <Layers className="w-3.5 h-3.5" />
          <span>Select Nation:</span>
        </span>
        {REGIONS_CONFIG.map((reg) => {
          const isSelected = selectedRegion === reg.id;
          const iconUrl = REGION_ELEMENT_ICONS[reg.element];

          return (
            <button
              key={reg.id}
              onClick={() => {
                setSelectedRegion(reg.id);
                setSelectedPin(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {iconUrl && (
                <div className="relative w-3.5 h-3.5">
                  <Image
                    src={iconUrl}
                    alt={reg.element}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              )}
              <span>{reg.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Map Controls & Filters */}
      <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Pins ({regionPins.length})
          </button>
          {Object.entries(CATEGORY_COLORS).map(([key, config]) => {
            const count = regionPins.filter((p) => p.category === key).length;
            if (count === 0) return null;
            const isSelected = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
                  isSelected
                    ? `${config.bg} ${config.text} ${config.border} border font-bold shadow-sm`
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <div className="relative w-3.5 h-3.5 flex-shrink-0">
                  <Image
                    src={config.iconUrl}
                    alt={config.label}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span>{config.label}</span>
                <span className="text-[10px] text-slate-400">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search pin name or spot..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Main Map Viewer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Map Visual Area (2 Cols on lg) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl select-none group">
            <TransformWrapper
              ref={transformRef}
              initialScale={1}
              minScale={0.7}
              maxScale={4}
              centerOnInit={true}
              wheel={{ step: 0.12 }}
              panning={{ velocityDisabled: false, excluded: ['button'] }}
              doubleClick={{ mode: 'zoomIn', step: 0.5 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {/* Floating Zoom / Pan HUD Controls */}
                  <div className="absolute top-4 right-4 z-30 flex flex-col space-y-1.5 bg-slate-950/85 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/80 shadow-2xl">
                    <button
                      onClick={() => zoomIn()}
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition shadow"
                      title="Zoom In (+)"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition shadow"
                      title="Zoom Out (-)"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => resetTransform()}
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition shadow"
                      title="Reset View"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Regional Details HUD in Top-Left */}
                  <div className="absolute top-4 left-4 z-30 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl text-xs text-slate-200 shadow-xl pointer-events-none">
                    <span className="text-sm sm:text-base font-black text-slate-100 block tracking-wide">
                      {currentRegionConfig.name}
                    </span>
                    <div className="flex items-center space-x-2 text-[11px] text-amber-300 font-mono mt-0.5">
                      <span>Pins: <strong className="text-emerald-400">{collectedCountInRegion}</strong> / {regionPins.length}</span>
                      <span>•</span>
                      <span className="text-slate-400">{currentRegionConfig.subregions.slice(0, 2).join(', ')}</span>
                    </div>
                  </div>

                  {/* Interactive Pan/Zoom Map Surface */}
                  <TransformComponent
                    wrapperClass="!w-full !h-full cursor-grab active:cursor-grabbing overflow-hidden"
                    contentClass="!w-full !h-full"
                  >
                    <div className="relative w-full h-full min-w-[650px] min-h-[420px] aspect-[16/10] sm:aspect-[16/9]">
                      {/* Background Map Canvas with Authentic Genshin In-Game Topography */}
                      <Image
                        src={currentRegionConfig.mapUrl}
                        alt={currentRegionConfig.name}
                        fill
                        className="object-cover object-center opacity-85 select-none pointer-events-none"
                        priority
                        unoptimized
                      />
                      {/* Subtle atmospheric vignette and coordinate grid overlay */}
                      <div
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(circle, #f5c253 1px, transparent 1px)',
                          backgroundSize: '28px 28px'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

                      {/* Render Pins on Percentage Coordinates */}
                      {filteredPins.map((pin) => {
                        const isCollected = collectedPinIds.includes(pin.id);
                        const isSelected = selectedPin?.id === pin.id;
                        const catConfig = CATEGORY_COLORS[pin.category] || CATEGORY_COLORS.specialty;
                        const pinIconInfo = getPinIcon(pin, selectedRegion);

                        return (
                          <button
                            key={pin.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPin(pin);
                            }}
                            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-150 group/pin ${
                              isSelected ? 'scale-125 z-40' : 'hover:scale-115'
                            }`}
                            title={`${pin.name} (${catConfig.label})`}
                          >
                            <div
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-xl border transition-all p-1 ${
                                isCollected
                                  ? 'bg-slate-950/85 border-slate-700 opacity-40 grayscale'
                                  : `${catConfig.bg} ${catConfig.border} border-2 backdrop-blur-md bg-slate-950/75 shadow-black/80 hover:border-amber-400 hover:shadow-amber-500/20`
                              } ${isSelected ? 'ring-4 ring-amber-400 bg-slate-900 border-amber-400 shadow-amber-500/50' : ''}`}
                            >
                              <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                  src={pinIconInfo.iconUrl}
                                  alt={pin.name}
                                  fill
                                  className="object-contain drop-shadow"
                                  unoptimized
                                />
                              </div>
                            </div>

                            {/* Hover tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 hidden group-hover/pin:block whitespace-nowrap bg-slate-950/95 text-slate-100 text-[10px] px-2 py-0.5 rounded border border-amber-500/40 shadow-xl pointer-events-none z-40 font-semibold">
                              {pin.name} {pin.count ? `(${pin.count}x)` : ''}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </TransformComponent>

                  {/* Map Navigation Helper Bar at bottom */}
                  <div className="absolute bottom-3 left-4 right-4 z-30 flex items-center justify-between text-[11px] text-slate-400 pointer-events-none bg-slate-950/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 shadow-lg">
                    <span className="flex items-center space-x-1.5">
                      <Move className="w-3.5 h-3.5 text-amber-400" />
                      <span>Drag to pan • Mouse wheel to zoom in/out • Double-click to zoom</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 hidden sm:inline">{filteredPins.length} markers</span>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>

        {/* Right Sidebar: Selected Pin Details & Pin Checklist */}
        <div className="space-y-4">
          {/* Selected Pin Details Box */}
          {selectedPin ? (
            <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-start justify-between">
                {(() => {
                  const pinIconInfo = getPinIcon(selectedPin, selectedRegion);
                  return (
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-xl bg-slate-950 border border-slate-700/80 p-1 flex-shrink-0 flex items-center justify-center shadow-inner">
                        <Image
                          src={pinIconInfo.iconUrl}
                          alt={selectedPin.name}
                          fill
                          className="object-contain p-1"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-slate-100">{selectedPin.name}</h4>
                        <span className="text-xs text-amber-400 font-medium">
                          {CATEGORY_COLORS[selectedPin.category]?.label}
                        </span>
                      </div>
                    </div>
                  );
                })()}
                {selectedPin.count && (
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                    {selectedPin.count}x Total
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">
                  Location & Gathering Tips:
                </span>
                <p className="leading-relaxed text-slate-200">{selectedPin.description}</p>
              </div>

              <button
                onClick={() => togglePinCollected(selectedPin.id)}
                className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 ${
                  collectedPinIds.includes(selectedPin.id)
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                }`}
              >
                {collectedPinIds.includes(selectedPin.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Collected (Click to Unmark)</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Mark as Collected / Done</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center space-y-2">
              <MapPin className="w-8 h-8 text-amber-400/60 mx-auto" />
              <h4 className="text-sm font-bold text-slate-300">Select a Map Pin</h4>
              <p className="text-xs text-slate-400">
                Click any marker on the map to inspect spawn notes, counts, and track your gathering progress.
              </p>
            </div>
          )}

          {/* Quick Region Pin Checklist */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-200 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{selectedRegion} Pin Checklist</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {collectedCountInRegion} / {regionPins.length}
              </span>
            </div>

            <div className="max-h-[300px] overflow-y-auto space-y-1.5 pr-1">
              {filteredPins.map((pin) => {
                const isCollected = collectedPinIds.includes(pin.id);
                return (
                  <div
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    className={`flex items-center justify-between p-2 rounded-lg text-xs cursor-pointer transition ${
                      selectedPin?.id === pin.id
                        ? 'bg-amber-500/20 border border-amber-500/30'
                        : 'bg-slate-950/50 hover:bg-slate-800/80 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      {(() => {
                        const pinIconInfo = getPinIcon(pin, selectedRegion);
                        return (
                          <div className="relative w-4 h-4 flex-shrink-0">
                            <Image
                              src={pinIconInfo.iconUrl}
                              alt={pin.name}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                        );
                      })()}
                      <span className={`truncate ${isCollected ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                        {pin.name}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePinCollected(pin.id);
                      }}
                      className="text-slate-500 hover:text-emerald-400 p-1"
                    >
                      {isCollected ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-600" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
