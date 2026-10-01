'use client';

import React from 'react';
import { X, BatteryCharging, Clock, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

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
  if (!isOpen) return null;

  const minutesUntilCap = Math.max(0, (200 - resin) * 8);
  const hoursUntilCap = Math.floor(minutesUntilCap / 60);
  const remainingMins = minutesUntilCap % 60;

  const fullTime = new Date(Date.now() + minutesUntilCap * 60 * 1000);
  const formattedFullTime = fullTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-amber-500/30 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-2.5">
            <BatteryCharging className="w-5 h-5 text-sky-400" />
            <h3 className="text-base font-bold text-slate-100">Live Resin & Daily Tracker</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Resin Slider & Display */}
          <div className="bg-slate-950/70 p-4 rounded-xl border border-sky-500/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-sky-400">Current Original Resin</span>
              <span className="text-2xl font-black text-sky-300">
                {resin} <span className="text-xs font-normal text-slate-400">/ 200</span>
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={200}
              value={resin}
              onChange={(e) => setResin(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />

            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0 (Empty)</span>
              <span>100</span>
              <span>160 (Classic)</span>
              <span>200 (Cap)</span>
            </div>

            {/* Time until cap */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Cap Status:</span>
              </div>
              <div className="font-semibold text-slate-200">
                {resin >= 200 ? (
                  <span className="text-rose-400 flex items-center space-x-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Capped! Spending needed</span>
                  </span>
                ) : (
                  <span>
                    Full in <strong className="text-sky-300">{hoursUntilCap}h {remainingMins}m</strong> (at ~{formattedFullTime})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Increments */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400">Quick adjust:</span>
            {[
              { label: '-40 (Domain)', delta: -40 },
              { label: '-30 (Boss)', delta: -30 },
              { label: '-20', delta: -20 },
              { label: '+60 (Moon)', delta: 60 },
              { label: 'Set 200', target: 200 }
            ].map((btn, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (btn.target !== undefined) setResin(btn.target);
                  else if (btn.delta) setResin(Math.min(200, Math.max(0, resin + btn.delta)));
                }}
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-[11px] rounded text-slate-300 transition"
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Condensed Resin & Weekly Boss Trackers */}
          <div className="grid grid-cols-2 gap-4">
            {/* Condensed Resin */}
            <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-amber-400">Condensed Resin</span>
                <span className="text-sm font-bold text-amber-300">{condensedCount} / 5</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">Stores 40 resin for double domain rewards.</p>
              <div className="flex space-x-1">
                {[0, 1, 2, 3, 4, 5].map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => setCondensedCount(cnt)}
                    className={`flex-1 py-1 rounded text-xs font-bold transition ${
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

            {/* Weekly Boss 30-Resin Discounts */}
            <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-emerald-400">Half-Price Bosses</span>
                <span className="text-sm font-bold text-emerald-300">{weeklyBossesDone} / 3</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">30 resin discount (Resets Monday 04:00 AM).</p>
              <div className="flex space-x-1">
                {[0, 1, 2, 3].map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => setWeeklyBossesDone(cnt)}
                    className={`flex-1 py-1 rounded text-xs font-bold transition ${
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

          {/* Weekly Checklist Reminder */}
          <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-800/80 text-xs space-y-1.5 text-slate-300">
            <div className="font-semibold text-amber-300 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Weekly Reset Checklist</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Claim Serenitea Pot 60-Resin Transient Resin & 200k Mora</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Complete 3 City Bounties & Requests for 150,000 Mora</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Run Parametric Transformer with 150 spare materials</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
