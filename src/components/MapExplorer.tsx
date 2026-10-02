'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { REGIONS_CONFIG, MAP_PINS, TEYVAT_FULL_MAP_URL } from '@/data/mapData';
import { LOCAL_SPECIALTIES } from '@/data/materials';
import { MapPin as MapPinType, RegionType } from '@/types/genshin';
import {
  MapPin,
  Plus,
  Trash2,
  X,
  Check,
  CheckCircle2,
  Circle,
  Search,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Move,
  Maximize2,
  Minimize2,
  Crosshair,
  Compass,
  CheckSquare,
  ExternalLink
} from 'lucide-react';

export interface CustomPin extends MapPinType {
  isCustom?: boolean;
}

export type MapRegionFilter = RegionType | 'All';

const REGION_ELEMENT_ICONS: Record<string, string> = {
  Anemo: '/assets/elements/anemo.png',
  Geo: '/assets/elements/geo.png',
  Electro: '/assets/elements/electro.png',
  Dendro: '/assets/elements/dendro.png',
  Hydro: '/assets/elements/hydro.png',
  Pyro: '/assets/elements/pyro.png'
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; label: string }> = {
  specialty: { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-500/40', label: 'Local Specialty' },
  teleport: { bg: 'bg-sky-500/20', text: 'text-sky-300', border: 'border-sky-500/40', label: 'Teleport / Statue' },
  oculus: { bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'border-amber-500/40', label: 'Oculus' },
  boss: { bg: 'bg-rose-500/20', text: 'text-rose-300', border: 'border-rose-500/40', label: 'Trounce Boss' },
  ore: { bg: 'bg-blue-400/20', text: 'text-blue-200', border: 'border-blue-400/40', label: 'Mining Hotspot' },
  shrine: { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/40', label: 'Shrine of Depths' }
};

const getPinIcon = (pin: MapPinType): { iconUrl: string; label: string } => {
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
    return { iconUrl: oculusMap[pin.region] || '/assets/map/pins/anemoculus.png', label: 'Oculus' };
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
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<MapRegionFilter>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPin, setSelectedPin] = useState<CustomPin | null>(null);
  const [collectedPinIds, setCollectedPinIds] = useState<string[]>([]);
  const [customPins, setCustomPins] = useState<CustomPin[]>([]);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const transformRef = useRef<ReactZoomPanPinchRef | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapSurfaceRef = useRef<HTMLDivElement | null>(null);

  // Pin placement states
  const [isDroppingPin, setIsDroppingPin] = useState<boolean>(false);
  const [pendingCoords, setPendingCoords] = useState<{ x: number; y: number } | null>(null);
  const [showAddPinModal, setShowAddPinModal] = useState<boolean>(false);

  // Form states for new pin
  const [newPinName, setNewPinName] = useState<string>('');
  const [newPinCategory, setNewPinCategory] = useState<'specialty' | 'oculus' | 'boss' | 'ore' | 'teleport' | 'shrine'>('specialty');
  const [newPinCount, setNewPinCount] = useState<number>(1);
  const [newPinNotes, setNewPinNotes] = useState<string>('');
  const [newPinRegion, setNewPinRegion] = useState<RegionType>('Mondstadt');

  // Lock background scroll when modal or fullscreen is active
  useEffect(() => {
    if (isFullscreen || showAddPinModal) {
      const prevBody = document.body.style.overflow;
      const prevHtml = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevBody;
        document.documentElement.style.overflow = prevHtml;
      };
    }
  }, [isFullscreen, showAddPinModal]);

  // ESC key exits modal, pin placement, or fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showAddPinModal) {
          setShowAddPinModal(false);
          setPendingCoords(null);
        } else if (isDroppingPin) {
          setIsDroppingPin(false);
        } else if (isFullscreen) {
          setIsFullscreen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, showAddPinModal, isDroppingPin]);

  // Load collected and custom pins from localStorage
  useEffect(() => {
    try {
      const savedCollected = localStorage.getItem('teyvat_collected_pins');
      if (savedCollected) {
        setCollectedPinIds(JSON.parse(savedCollected));
      }
      const savedCustom = localStorage.getItem('teyvat_custom_pins');
      if (savedCustom) {
        setCustomPins(JSON.parse(savedCustom));
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

  const saveCustomPinsToStorage = (updated: CustomPin[]) => {
    setCustomPins(updated);
    try {
      localStorage.setItem('teyvat_custom_pins', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleCreateCustomPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPinName.trim() || !pendingCoords) return;

    const newPin: CustomPin = {
      id: `custom_${Date.now()}`,
      name: newPinName.trim(),
      category: newPinCategory,
      region: newPinRegion,
      x: pendingCoords.x,
      y: pendingCoords.y,
      description: newPinNotes.trim() || 'Custom user marker on Teyvat map.',
      count: newPinCount > 0 ? newPinCount : undefined,
      isCustom: true
    };

    const updated = [...customPins, newPin];
    saveCustomPinsToStorage(updated);
    setSelectedPin(newPin);
    setShowAddPinModal(false);
    setPendingCoords(null);
    setNewPinName('');
    setNewPinNotes('');
    setNewPinCount(1);
  };

  const handleDeleteCustomPin = (pinId: string) => {
    const updated = customPins.filter((p) => p.id !== pinId);
    saveCustomPinsToStorage(updated);
    if (selectedPin?.id === pinId) {
      setSelectedPin(null);
    }
  };

  // Mathematically calibrated camera fly to nation
  const handleFlyToRegion = (regionId: MapRegionFilter) => {
    setSelectedRegionFilter(regionId);
    setSelectedPin(null);

    if (regionId === 'All') {
      transformRef.current?.resetTransform(400);
      return;
    }

    const regConfig = REGIONS_CONFIG.find((r) => r.id === regionId);
    if (regConfig && transformRef.current && mapContainerRef.current) {
      const container = mapContainerRef.current;
      const cW = container.clientWidth;
      const cH = container.clientHeight;

      const mapW = mapSurfaceRef.current?.clientWidth || cW;
      const mapH = mapSurfaceRef.current?.clientHeight || cH;

      const targetScale = 2.6;
      const focusPxX = (regConfig.focusX / 100) * mapW;
      const focusPxY = (regConfig.focusY / 100) * mapH;

      const targetX = (cW / 2) - (focusPxX * targetScale);
      const targetY = (cH / 2) - (focusPxY * targetScale);

      transformRef.current.setTransform(targetX, targetY, targetScale, 450, 'easeOut');
    }
  };

  // Combine standard pins with user custom pins
  const allPins: CustomPin[] = [...MAP_PINS, ...customPins];

  // Filter pins
  const filteredPins = allPins.filter((pin) => {
    const matchesRegion = selectedRegionFilter === 'All' || pin.region === selectedRegionFilter;
    const matchesCategory = selectedCategory === 'all' || pin.category === selectedCategory;
    const matchesSearch =
      pin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesCategory && matchesSearch;
  });

  const collectedCount = filteredPins.filter((p) => collectedPinIds.includes(p.id)).length;

  // Handle clicking on map surface to drop pin
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDroppingPin) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const rawX = ((e.clientX - rect.left) / rect.width) * 100;
    const rawY = ((e.clientY - rect.top) / rect.height) * 100;
    const x = Math.max(1, Math.min(99, Math.round(rawX * 100) / 100));
    const y = Math.max(1, Math.min(99, Math.round(rawY * 100) / 100));

    // Guess region based on coordinate
    let guessedRegion: RegionType = 'Mondstadt';
    if (x > 80 && y > 70) guessedRegion = 'Inazuma';
    else if (x < 42) guessedRegion = 'Natlan';
    else if (y < 42 && x < 65) guessedRegion = 'Fontaine';
    else if (y > 45 && x < 65) guessedRegion = 'Sumeru';
    else if (y > 40 && x >= 65) guessedRegion = 'Liyue';

    setNewPinRegion(guessedRegion);
    setPendingCoords({ x, y });
    setIsDroppingPin(false);
    setShowAddPinModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/20 p-6 md:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Interactive Map of Teyvat</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            High-Resolution Map of Teyvat
          </h2>
          <p className="text-sm text-slate-300">
            Drag to pan smoothly across the entire continent, zoom in deep with your mouse wheel, and track all character ascension materials and resource spawns.
          </p>
        </div>
      </div>

      {/* Nation Navigation & Quick-Jump Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
        <span className="text-xs text-slate-400 font-semibold px-2 flex items-center space-x-1">
          <Layers className="w-3.5 h-3.5" />
          <span>Jump to Nation:</span>
        </span>

        {/* All Teyvat Button */}
        <button
          onClick={() => handleFlyToRegion('All')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 ${
            selectedRegionFilter === 'All'
              ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <span>All Teyvat</span>
        </button>

        {REGIONS_CONFIG.map((reg) => {
          const isSelected = selectedRegionFilter === reg.id;
          const iconUrl = REGION_ELEMENT_ICONS[reg.element];

          return (
            <button
              key={reg.id}
              onClick={() => handleFlyToRegion(reg.id)}
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
              <span>{reg.name}</span>
            </button>
          );
        })}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Pins ({allPins.length})
          </button>
          {Object.entries(CATEGORY_COLORS).map(([catKey, catVal]) => {
            const count = allPins.filter((p) => p.category === catKey).length;
            const isSelected = selectedCategory === catKey;

            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>{catVal.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-slate-950/40 text-slate-900' : 'bg-slate-950/60 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Pin Actions & Search */}
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          {/* Add Custom Pin Toggle Button */}
          <button
            onClick={() => setIsDroppingPin(!isDroppingPin)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
              isDroppingPin
                ? 'bg-rose-500 text-white animate-pulse shadow-lg shadow-rose-500/30'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
            }`}
          >
            {isDroppingPin ? (
              <>
                <X className="w-3.5 h-3.5" />
                <span>Cancel Placement</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add Custom Pin</span>
              </>
            )}
          </button>

          <a
            href="https://act.hoyolab.com/ys/app/interactive-map/index.html?lang=en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center space-x-1.5"
            title="Open HoYoLAB Official Map in a separate window or monitor"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Official Live Map</span>
          </a>

          <div className="relative min-w-[200px] flex-1 sm:flex-initial">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search pin name or notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Main Map Viewer Layout */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${isFullscreen ? 'fixed inset-0 z-50 p-4 bg-slate-950/95 backdrop-blur-md overflow-hidden' : ''}`}>
        {/* Interactive Map Visual Area (2 Cols on lg) */}
        <div className={`lg:col-span-2 space-y-4 ${isFullscreen ? 'h-full flex flex-col' : ''}`}>
          {/* Active Pin Placement Banner */}
          {isDroppingPin && (
            <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-4 py-2 rounded-xl text-xs flex items-center justify-between">
              <span className="flex items-center space-x-2 font-medium">
                <Crosshair className="w-4 h-4 animate-spin text-emerald-400" />
                <span><strong>Pin Placement Mode Active:</strong> Click anywhere on the map surface below to drop a custom resource pin.</span>
              </span>
              <button
                onClick={() => setIsDroppingPin(false)}
                className="text-slate-400 hover:text-slate-100 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Map Viewport Container with Authentic Genshin Deep Ocean Water Styling */}
          <div
            ref={mapContainerRef}
            className={`relative w-full rounded-2xl border border-sky-900/50 overflow-hidden shadow-2xl select-none group ${
              isFullscreen ? 'flex-1 h-full' : 'h-[560px] sm:h-[640px]'
            }`}
            style={{
              backgroundColor: '#0a1d33',
              backgroundImage: `
                radial-gradient(ellipse at 50% 50%, rgba(13, 37, 62, 0.7) 0%, rgba(6, 17, 29, 0.95) 100%),
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 40px 40px, 40px 40px'
            }}
          >
            <TransformWrapper
              ref={transformRef}
              initialScale={1.0}
              minScale={1.0}
              maxScale={7.0}
              limitToBounds={true}
              centerOnInit={true}
              smooth={true}
              wheel={{ step: 0.15 }}
              panning={{ velocityDisabled: false, excluded: ['button', 'input'] }}
              doubleClick={{ mode: 'zoomIn', step: 0.6 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {/* Floating Zoom / Pan HUD Controls */}
                  <div className="absolute top-4 right-4 z-30 flex flex-col space-y-1.5 bg-slate-950/85 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/80 shadow-2xl">
                    <button
                      onClick={() => zoomIn()}
                      className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-lg transition"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-lg transition"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedRegionFilter('All');
                        resetTransform();
                      }}
                      className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-lg transition"
                      title="Reset Full Continent View"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="p-2 bg-slate-800/80 hover:bg-slate-700 text-amber-400 rounded-lg transition"
                      title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Map'}
                    >
                      {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Continent HUD in Top-Left */}
                  <div className="absolute top-4 left-4 z-30 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl text-xs text-slate-200 shadow-xl pointer-events-none">
                    <span className="text-sm sm:text-base font-black text-slate-100 block tracking-wide">
                      {selectedRegionFilter === 'All' ? 'Continent of Teyvat' : `${selectedRegionFilter} Region`}
                    </span>
                    <div className="flex items-center space-x-2 text-[11px] text-amber-300 font-mono mt-0.5">
                      <span>Pins: <strong className="text-emerald-400">{collectedCount}</strong> / {filteredPins.length}</span>
                      <span>•</span>
                      <span className="text-slate-400">Ver 5.2 Topography</span>
                    </div>
                  </div>

                  {/* Interactive Pan/Zoom Map Surface */}
                  <TransformComponent
                    wrapperClass={`!w-full !h-full ${isDroppingPin ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'} overflow-hidden`}
                    contentClass="!w-full !h-full flex items-center justify-center"
                  >
                    <div
                      ref={mapSurfaceRef}
                      onClick={handleMapClick}
                      className="relative w-full h-full min-w-[750px] min-h-[500px] aspect-[1.355]"
                    >
                      {/* High-Resolution In-Game Stitched Map of Teyvat */}
                      <Image
                        src={TEYVAT_FULL_MAP_URL}
                        alt="High-Resolution Map of Teyvat"
                        fill
                        className="object-cover object-center select-none pointer-events-none"
                        priority
                        unoptimized
                      />

                      {/* Render Pins on Exact Percentage Coordinates */}
                      {filteredPins.map((pin) => {
                        const isCollected = collectedPinIds.includes(pin.id);
                        const isSelected = selectedPin?.id === pin.id;
                        const catConfig = CATEGORY_COLORS[pin.category] || CATEGORY_COLORS.specialty;
                        const pinIconInfo = getPinIcon(pin);

                        return (
                          <button
                            key={pin.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isDroppingPin) {
                                setSelectedPin(pin);
                              }
                            }}
                            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-150 group/pin ${
                              isSelected ? 'scale-135 z-40' : 'hover:scale-115'
                            }`}
                            title={`${pin.name} (${catConfig.label})`}
                          >
                            <div
                              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shadow-xl border transition-all p-1 ${
                                isCollected
                                  ? 'bg-slate-950/85 border-slate-700 opacity-40 grayscale'
                                  : `${catConfig.bg} ${catConfig.border} border-2 backdrop-blur-md bg-slate-950/85 shadow-black/80 hover:border-amber-400 hover:shadow-amber-500/20`
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
                      <span>Drag to pan • Mouse wheel to zoom • Click pin to inspect</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 hidden sm:inline">
                      {filteredPins.length} markers visible
                    </span>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>

        {/* Right Sidebar: Selected Pin Details & Pin Checklist */}
        <div className={`space-y-4 ${isFullscreen ? 'max-h-full overflow-y-auto' : ''}`}>
          {/* Selected Pin Details Box */}
          {selectedPin ? (
            <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-start justify-between">
                {(() => {
                  const pinIconInfo = getPinIcon(selectedPin);
                  const catConfig = CATEGORY_COLORS[selectedPin.category] || CATEGORY_COLORS.specialty;
                  return (
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2 shadow-inner">
                        <Image
                          src={pinIconInfo.iconUrl}
                          alt={selectedPin.name}
                          fill
                          className="object-contain p-1"
                          unoptimized
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${catConfig.bg} ${catConfig.text} ${catConfig.border}`}>
                            {catConfig.label}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                            {selectedPin.region}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-100 leading-tight mt-1">
                          {selectedPin.name}
                        </h3>
                      </div>
                    </div>
                  );
                })()}

                {selectedPin.isCustom && (
                  <button
                    onClick={() => handleDeleteCustomPin(selectedPin.id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition"
                    title="Delete Custom Pin"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {(() => {
                  const matchSpecialty = LOCAL_SPECIALTIES.find(
                    (s) => s.name.toLowerCase() === selectedPin.name.toLowerCase() ||
                           selectedPin.name.toLowerCase().includes(s.name.toLowerCase())
                  );
                  if (matchSpecialty && matchSpecialty.usedFor.length > 0) {
                    return (
                      <span className="text-xs bg-slate-800/80 text-amber-300 border border-slate-700 px-2 py-0.5 rounded-full">
                        Used for: {matchSpecialty.usedFor.join(', ')}
                      </span>
                    );
                  }
                  return null;
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

          {/* Quick Pin Checklist */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-200 flex items-center space-x-1.5">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
                <span>{selectedRegionFilter === 'All' ? 'Teyvat' : selectedRegionFilter} Pin Checklist</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {collectedCount} / {filteredPins.length}
              </span>
            </div>

            <div className="max-h-[340px] overflow-y-auto space-y-1.5 pr-1">
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
                        const pinIconInfo = getPinIcon(pin);
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

      {/* Add Custom Pin Modal */}
      {showAddPinModal && pendingCoords && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100">Add Resource Pin</h3>
                  <span className="text-[11px] text-slate-400">
                    Location: X: {pendingCoords.x}%, Y: {pendingCoords.y}%
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowAddPinModal(false);
                  setPendingCoords(null);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleCreateCustomPin} className="p-5 overflow-y-auto space-y-4 flex-1">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Resource or Pin Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cecilia, Crystal Chunk, Anemoculus..."
                  value={newPinName}
                  onChange={(e) => setNewPinName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newPinCategory}
                    onChange={(e) => setNewPinCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="specialty">Local Specialty</option>
                    <option value="oculus">Oculus</option>
                    <option value="ore">Mining Hotspot</option>
                    <option value="boss">Trounce Boss</option>
                    <option value="teleport">Teleport / Waypoint</option>
                    <option value="shrine">Shrine of Depths</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Region
                  </label>
                  <select
                    value={newPinRegion}
                    onChange={(e) => setNewPinRegion(e.target.value as RegionType)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mondstadt">Mondstadt</option>
                    <option value="Liyue">Liyue</option>
                    <option value="Inazuma">Inazuma</option>
                    <option value="Sumeru">Sumeru</option>
                    <option value="Fontaine">Fontaine</option>
                    <option value="Natlan">Natlan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Spawn Count
                </label>
                <input
                  type="number"
                  min="1"
                  max="999"
                  value={newPinCount}
                  onChange={(e) => setNewPinCount(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Location Tips & Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Found on the upper cliff ledge next to two torches..."
                  value={newPinNotes}
                  onChange={(e) => setNewPinNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddPinModal(false);
                    setPendingCoords(null);
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg shadow-amber-500/20 transition"
                >
                  Save Pin to Map
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
