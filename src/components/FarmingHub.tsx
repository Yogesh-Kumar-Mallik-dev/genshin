'use client';

import React, { useState } from 'react';
import { FARMING_STRATEGIES, DAILY_ARTIFACT_ROUTE_SPOTS } from '@/data/farming';
import { BookOpen, Calculator, Coins, Zap, ShieldAlert, CheckCircle2, TrendingUp, Sparkles, MapPin } from 'lucide-react';

export const FarmingHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'mora' | 'books' | 'resin' | 'route'>('calculator');

  // Calculator State
  const [currentAr, setCurrentAr] = useState<number>(35);
  const [targetAr, setTargetAr] = useState<number>(45);

  // Approximate EXP lookup table between AR tiers
  // Rough cumulative EXP needed
  const arExpTable: Record<number, number> = {
    1: 0, 5: 1500, 10: 4500, 15: 9000, 20: 16000,
    25: 27000, 30: 42000, 35: 65000, 40: 100000,
    45: 155000, 50: 240000, 55: 450000, 60: 1800000
  };

  const getCumulativeExp = (rank: number) => {
    // Interpolate or snap
    const keys = Object.keys(arExpTable).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < keys.length - 1; i++) {
      if (rank >= keys[i] && rank <= keys[i + 1]) {
        const fraction = (rank - keys[i]) / (keys[i + 1] - keys[i]);
        return Math.round(arExpTable[keys[i]] + fraction * (arExpTable[keys[i + 1]] - arExpTable[keys[i]]));
      }
    }
    return 240000;
  };

  const expNeeded = Math.max(0, getCumulativeExp(targetAr) - getCumulativeExp(currentAr));
  // Daily yield: 1500 from commissions + 900 from 180 resin = 2400 EXP / day
  const daysNeeded = Math.ceil(expNeeded / 2400);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/20 p-6 md:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>High-Efficiency Teyvat Strategy</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Farming Masterclass: AR, Mora & EXP Books
          </h2>
          <p className="text-sm text-slate-300">
            Learn mathematical shortcuts to hoard millions of Mora, avoid wasting 172 Hero’s Wit on false level 90s, and reach AR 45+ with zero wasted resin.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-slate-800 gap-2 sm:gap-4">
        {[
          { id: 'calculator', label: 'AR Calculator & Speedrun', icon: <Calculator className="w-4 h-4" /> },
          { id: 'mora', label: 'Mora Farming (Infinite Mora)', icon: <Coins className="w-4 h-4" /> },
          { id: 'books', label: 'EXP Books & Level 80/90 Rule', icon: <BookOpen className="w-4 h-4" /> },
          { id: 'route', label: 'Daily 15-Min Artifact Route', icon: <MapPin className="w-4 h-4" /> },
          { id: 'resin', label: 'Resin Golden Rules', icon: <Zap className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-3 text-xs sm:text-sm font-semibold flex items-center space-x-2 transition border-b-2 ${
              activeTab === tab.id
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: AR CALCULATOR & SPEEDRUN */}
      {activeTab === 'calculator' && (
        <div className="space-y-6">
          {/* Interactive Calculator Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>AR Progression Calculator</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calculates the exact time required based on daily guaranteed commissions (1,500 EXP) and natural daily resin spending (900 EXP).
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Current AR:</label>
                  <input
                    type="number"
                    min={1}
                    max={59}
                    value={currentAr}
                    onChange={(e) => setCurrentAr(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Target AR:</label>
                  <select
                    value={targetAr}
                    onChange={(e) => setTargetAr(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value={45}>AR 45 (Guaranteed 5★ Artifacts)</option>
                    <option value={50}>AR 50 (Final Level 90 Ascension)</option>
                    <option value={55}>AR 55 (Guaranteed World Boss 5★)</option>
                    <option value={60}>AR 60 (Resin converts to Mora)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/30 space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                Estimated Time to Target
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-black text-slate-100">~{daysNeeded} Days</span>
                <span className="text-xs text-slate-400">({daysNeeded <= 0 ? 'Already reached!' : `approx. ${(daysNeeded / 7).toFixed(1)} weeks`})</span>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">EXP Difference:</span>
                  <span className="font-semibold text-amber-300">~{expNeeded.toLocaleString()} AR EXP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Daily Commissions Yield:</span>
                  <span>1,500 EXP / day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">180 Resin Spending Yield:</span>
                  <span>900 EXP / day</span>
                </div>
              </div>

              <div className="mt-2 text-[11px] text-amber-300/90 bg-amber-950/20 p-2 rounded border border-amber-500/20">
                💡 <em>Quests and chest exploration will speed this up significantly!</em>
              </div>
            </div>
          </div>

          {/* AR Strategy Guide Breakdown */}
          {FARMING_STRATEGIES.filter((s) => s.category === 'ar').map((strat) => (
            <div key={strat.id} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-100">{strat.title}</h4>
                  <p className="text-xs text-slate-400">{strat.summary}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                  Efficiency: {strat.efficiencyRating}
                </span>
              </div>

              {/* Key Takeaways */}
              <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Core Golden Rules:
                </span>
                {strat.keyTakeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              {/* Step By Step Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {strat.steps.map((st, sIdx) => (
                  <div key={sIdx} className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/80 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-100">{st.title}</span>
                      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">{st.yieldInfo}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{st.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: MORA FARMING */}
      {activeTab === 'mora' && (
        <div className="space-y-4">
          {FARMING_STRATEGIES.filter((s) => s.category === 'mora').map((strat) => (
            <div key={strat.id} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-100">{strat.title}</h4>
                  <p className="text-xs text-slate-400">{strat.summary}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                  Efficiency: {strat.efficiencyRating}
                </span>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  How Veterans Maintain Millions of Mora:
                </span>
                {strat.keyTakeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {strat.steps.map((st, sIdx) => (
                  <div key={sIdx} className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/80 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-100">{st.title}</span>
                      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-medium">{st.yieldInfo}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{st.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: EXP BOOKS & LEVEL 80/90 RULE */}
      {activeTab === 'books' && (
        <div className="space-y-4">
          {FARMING_STRATEGIES.filter((s) => s.category === 'books').map((strat) => (
            <div key={strat.id} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-100">{strat.title}</h4>
                  <p className="text-xs text-slate-400">{strat.summary}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                  Efficiency: {strat.efficiencyRating}
                </span>
              </div>

              {/* The Level 80/90 Table Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block">
                    ❌ STOP At Level 80/90 (Save 172 Books!)
                  </span>
                  <p className="text-xs text-slate-300">
                    Characters who scale primarily on <strong>Base ATK%</strong> (e.g. Diluc, Ayaka, Ganyu, Yoimiya, Xiao). Taking them from 80 to 90 yields only ~2-3% more damage for an exorbitant 172 Hero’s Wit cost.
                  </p>
                </div>

                <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    ✅ MUST Take to Level 90 (Huge DPS Gains!)
                  </span>
                  <p className="text-xs text-slate-300">
                    1. <strong>HP & DEF Scalers:</strong> Neuvillette, Furina, Yelan, Zhongli, Noelle, Chiori (+15-20% boost).<br />
                    2. <strong>Transformative Reactions:</strong> Kazuha, Kuki, Sucrose (Swirl/Hyperbloom scales strictly with character level; Lv 90 adds +34% damage over Lv 80!).
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Book Management Takeaways:
                </span>
                {strat.keyTakeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: DAILY 15-MINUTE ARTIFACT ROUTE */}
      {activeTab === 'route' && (
        <div className="space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3">
            <h4 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Zero-Resin 100-Spot Daily Artifact Run</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Teyvat has an in-game daily limit of 100 sparkling artifact investigation spots. You can complete this fast 12-15 minute route every 24 hours to collect over 100+ gray and green artifacts. Destroy them for <strong>60,000+ Mora/day (1.8 Million Mora/month)</strong> or feed them to level up your 5-star artifacts without spending a single resin!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DAILY_ARTIFACT_ROUTE_SPOTS.map((spot, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-sm text-slate-100">{spot.location}</h5>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    {spot.yieldMora}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <span>Spots: <strong className="text-slate-200">{spot.spotsCount}</strong></span>
                  <span>Est. Time: <strong className="text-slate-200">{spot.timeMinutes} mins</strong></span>
                </div>
                <p className="text-xs text-slate-300 bg-slate-950/60 p-2 rounded border border-slate-800/80">
                  {spot.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: RESIN GOLDEN RULES */}
      {activeTab === 'resin' && (
        <div className="space-y-4">
          {FARMING_STRATEGIES.filter((s) => s.category === 'resin').map((strat) => (
            <div key={strat.id} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-100">{strat.title}</h4>
                  <p className="text-xs text-slate-400">{strat.summary}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                  Efficiency: {strat.efficiencyRating}
                </span>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Original & Condensed Resin Laws:
                </span>
                {strat.keyTakeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {strat.steps.map((st, sIdx) => (
                  <div key={sIdx} className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/80 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-100">{st.title}</span>
                    </div>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-medium block w-fit">
                      {st.yieldInfo}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">{st.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
