'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { QUEST_ROADMAP } from '@/data/quests';
import { QuestStep } from '@/types/genshin';
import { CheckCircle2, Circle, Search, Trophy, Key, ArrowRight } from 'lucide-react';

export const QuestRoadmap: React.FC = () => {
  const [completedQuestIds, setCompletedQuestIds] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('teyvat_completed_quests');
      if (saved) {
        setCompletedQuestIds(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleQuest = (id: string) => {
    const next = completedQuestIds.includes(id)
      ? completedQuestIds.filter((qId) => qId !== id)
      : [...completedQuestIds, id];
    setCompletedQuestIds(next);
    try {
      localStorage.setItem('teyvat_completed_quests', JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const filteredQuests = QUEST_ROADMAP.filter((q) => {
    const matchesCategory = categoryFilter === 'all' || q.category === categoryFilter;
    const matchesSearch =
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.chapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.unlocks.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const completionPercent = Math.round(
    (completedQuestIds.length / QUEST_ROADMAP.length) * 100
  );

  const totalPrimosAvailable = QUEST_ROADMAP.reduce((acc, q) => acc + q.primogems, 0);
  const earnedPrimos = QUEST_ROADMAP.filter((q) => completedQuestIds.includes(q.id)).reduce(
    (acc, q) => acc + q.primogems,
    0
  );

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 p-6 md:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <div className="relative w-4 h-4">
              <Image src="/assets/ui/quest.png" alt="Quest" fill className="object-contain" />
            </div>
            <span>New Player Progression Roadmap</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Best Order of Quests & Feature Unlocks
          </h2>
          <p className="text-sm text-slate-300">
            A battle-tested chronological guide spanning from Mondstadt (v1.0) all the way to Nod-Krai and Snezhnaya (v7.0). Avoid getting locked behind world exploration traps and unlock crucial quality-of-life systems early.
          </p>
        </div>
      </div>

      {/* Progress & Milestone Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Story Journey Progress */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Roadmap Completed</span>
            </span>
            <span className="font-bold text-amber-400">{completionPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-300"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 block">
            {completedQuestIds.length} of {QUEST_ROADMAP.length} key milestones completed
          </span>
        </div>

        {/* Free Primogems Tracker */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
              <div className="relative w-4 h-4">
                <Image src="/assets/ui/primogem.png" alt="Primogem" fill className="object-contain" />
              </div>
              <span>Roadmap Primogems</span>
            </span>
            <span className="font-bold text-sky-300">{earnedPrimos} / {totalPrimosAvailable}</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-cyan-300 transition-all duration-300"
              style={{ width: `${(earnedPrimos / totalPrimosAvailable) * 100}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 block">
            Estimated ~{Math.floor(earnedPrimos / 160)} Intertwined Fates earned
          </span>
        </div>

        {/* Golden Rule Tip */}
        <div className="bg-slate-900/90 border border-amber-500/20 rounded-xl p-4 flex items-center space-x-3 text-xs text-amber-200/90">
          <Key className="w-6 h-6 text-amber-400 flex-shrink-0" />
          <span>
            <strong>Golden Priority:</strong> Complete Mondstadt Act 2 for Daily Commissions, then rush Liyue Rep 3 for <strong>Condensed Resin</strong>!
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          {['all', 'Archon', 'System Unlock', 'World'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                categoryFilter === cat
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Quests & Unlocks' : cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search quest or unlock..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Interactive Quest List */}
      <div className="space-y-3">
        {filteredQuests.map((quest, index) => {
          const isDone = completedQuestIds.includes(quest.id);
          const urgencyColor =
            quest.urgency === 'Crucial First'
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              : quest.urgency === 'High'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-slate-800 text-slate-300 border-slate-700';

          return (
            <div
              key={quest.id}
              className={`rounded-xl border p-4 transition-all duration-200 ${
                isDone
                  ? 'bg-slate-950/60 border-slate-800/80 opacity-75'
                  : 'bg-slate-900/90 border-slate-800 hover:border-amber-500/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start space-x-3.5">
                  <button
                    onClick={() => toggleQuest(quest.id)}
                    className="mt-0.5 text-slate-400 hover:text-amber-400 transition"
                    title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600 hover:text-amber-400" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        #{index + 1}
                      </span>
                      <h4 className={`text-base font-bold ${isDone ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                        {quest.title}
                      </h4>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${urgencyColor}`}>
                        {quest.urgency}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-slate-400 mt-0.5">
                      <span className="text-slate-300 font-medium">{quest.chapter}</span>
                      <span>•</span>
                      <span>{quest.act}</span>
                      <span>•</span>
                      <span className="text-amber-300">Min. AR {quest.requiredAr}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-sky-950/80 text-sky-300 border border-sky-500/40 px-2.5 py-1 rounded-lg font-bold flex items-center space-x-1.5 shadow">
                    <div className="relative w-4 h-4 flex-shrink-0">
                      <Image src="/assets/ui/primogem.png" alt="Primogem" fill className="object-contain" />
                    </div>
                    <span>+{quest.primogems}</span>
                  </span>
                </div>
              </div>

              {/* Unlocks & Pro Tips */}
              <div className="mt-3.5 pt-3 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {/* Unlocks */}
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 space-y-1">
                  <span className="font-semibold text-amber-400 block text-[11px] uppercase tracking-wider">
                    Crucial Feature Unlocks:
                  </span>
                  <div className="space-y-1">
                    {quest.unlocks.map((unlock, uIdx) => (
                      <div key={uIdx} className="flex items-start space-x-1.5 text-slate-300 text-[11px]">
                        <ArrowRight className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{unlock}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 space-y-1">
                  <span className="font-semibold text-sky-400 block text-[11px] uppercase tracking-wider">
                    New Player Strategy Tip:
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {quest.tips}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
