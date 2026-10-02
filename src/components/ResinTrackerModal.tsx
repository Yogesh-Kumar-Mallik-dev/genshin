'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Clock, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface ResinTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  resin: number;
  setResin: (val: number) => void;
  condensedCount: number;
  setCondensedCount: (val: number) => void;
  weeklyBossesDone: number;
  setWeeklyBossesDone: (val: number) => void;
}

export const ResinTrackerModal: React.FC<ResinTrackerModalProps> = ({
  isOpen,
  onClose,
  resin,
  setResin,
  condensedCount,
  setCondensedCount,
  weeklyBossesDone,
  setWeeklyBossesDone
}) => {
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const minutesUntilCap = Math.max(0, (200 - resin) * 8);
  const hoursUntilCap = Math.floor(minutesUntilCap / 60);
  const remainingMins = minutesUntilCap % 60;

  const fullTime = new Date(Date.now() + minutesUntilCap * 60 * 1000);
  const formattedFullTime = fullTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-hidden animate-fadeIn"
    >
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl sm:rounded-3xl w-full max-w-lg max-h-[94vh] sm:max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80 flex-shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image
                src="/assets/ui/resin.png"
                alt="Original Resin"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-100">Original Resin & Reset Planner</h3>
          </div>
        </div>

        {/* Content with smooth scroll */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto overscroll-contain flex-1">
          {/* Main Resin Slider & Display */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-sky-500/25 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/assets/ui/resin.png"
                    alt="Resin"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-sky-400">Current Original Resin</span>
              </div>
              <span className="text-2xl font-black text-sky-200 font-mono">
                {resin} <span className="text-xs font-normal text-slate-400">/ 200</span>
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={200}
              value={resin}
              onChange={(e) => setResin(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />

            <div className="flex justify-between text-[11px] text-slate-500">
              <span>0 (Empty)</span>
              <span>100</span>
              <span>160</span>
              <span>200 (Cap)</span>
            </div>

            {/* Time until cap */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Cap Countdown:</span>
              </div>
              <div className="font-semibold text-slate-200">
                {resin >= 200 ? (
                  <span className="text-rose-400 flex items-center space-x-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Capped! Resin is being wasted</span>
                  </span>
                ) : (
                  <span>
                    Full in <strong className="text-sky-300 font-mono">{hoursUntilCap}h {remainingMins}m</strong> (at ~{formattedFullTime})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Adjustments */}
          <div className="flex items-center space-x-1.5 flex-wrap gap-y-1.5">
            <span className="text-xs text-slate-400 mr-1">Actions:</span>
            {[
              { label: '-40 Domain', delta: -40 },
              { label: '-30 Boss', delta: -30 },
              { label: '-20', delta: -20 },
              { label: '+60 Fragile', delta: 60, icon: '/assets/ui/fragile-resin.png' },
              { label: 'Cap (200)', target: 200 }
            ].map((btn, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (btn.target !== undefined) setResin(btn.target);
                  else if (btn.delta) setResin(Math.min(200, Math.max(0, resin + btn.delta)));
                }}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold rounded-lg text-slate-200 transition flex items-center space-x-1 border border-slate-700/60"
              >
                {btn.icon && (
                  <div className="relative w-3.5 h-3.5 flex-shrink-0">
                    <Image src={btn.icon} alt="" fill className="object-contain" />
                  </div>
                )}
                <span>{btn.label}</span>
              </button>
            ))}
          </div>

          {/* Condensed Resin & Weekly Boss Trackers */}
          <div className="grid grid-cols-2 gap-4">
            {/* Condensed Resin */}
            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="relative w-4 h-4">
                    <Image
                      src="/assets/ui/condensed-resin.png"
                      alt="Condensed"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-amber-400">Condensed Resin</span>
                </div>
                <span className="text-sm font-black text-amber-300 font-mono">{condensedCount} / 5</span>
              </div>
              <p className="text-[10px] text-slate-400">Stores 40 resin for double domain loot.</p>
              <div className="flex space-x-1 pt-1">
                {[0, 1, 2, 3, 4, 5].map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => setCondensedCount(cnt)}
                    className={`flex-1 py-1 rounded-lg text-xs font-bold transition ${
                      condensedCount === cnt
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Boss Discounts */}
            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400">Half-Price Bosses</span>
                <span className="text-sm font-black text-emerald-300 font-mono">{weeklyBossesDone} / 3</span>
              </div>
              <p className="text-[10px] text-slate-400">30 resin discount (Monday reset).</p>
              <div className="flex space-x-1 pt-1">
                {[0, 1, 2, 3].map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => setWeeklyBossesDone(cnt)}
                    className={`flex-1 py-1 rounded-lg text-xs font-bold transition ${
                      weeklyBossesDone === cnt
                        ? 'bg-emerald-500 text-slate-950 font-black'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Reset Checklist */}
          <div className="bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800 text-xs space-y-2">
            <div className="font-bold text-amber-300 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Weekly Reset Checklist</span>
            </div>
            <div className="space-y-1.5 text-slate-300 text-[11px]">
              <div className="flex items-center space-x-2">
                <div className="relative w-3.5 h-3.5 flex-shrink-0">
                  <Image src="/assets/ui/fragile-resin.png" alt="" fill className="object-contain" />
                </div>
                <span>Claim Serenitea Pot 60-Resin Transient Resin</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative w-3.5 h-3.5 flex-shrink-0">
                  <Image src="/assets/ui/mora.png" alt="" fill className="object-contain" />
                </div>
                <span>Complete 3 City Bounties & Requests for 150,000 Mora</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative w-3.5 h-3.5 flex-shrink-0">
                  <Image src="/assets/ui/heros-wit.png" alt="" fill className="object-contain" />
                </div>
                <span>Purchase 20 Hero’s Wit books from Tubby Realm Depot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition shadow-lg shadow-amber-500/20"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
