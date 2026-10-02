'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from '@/components/Navbar';
import { CharacterHub } from '@/components/CharacterHub';
import { MaterialsHub } from '@/components/MaterialsHub';
import { MapExplorer } from '@/components/MapExplorer';
import { QuestRoadmap } from '@/components/QuestRoadmap';
import { FarmingHub } from '@/components/FarmingHub';
import { ResinTrackerModal } from '@/components/ResinTrackerModal';
import { Footer } from '@/components/Footer';

import { usePersistentState } from '@/hooks/usePersistentState';

export default function Home() {
  const [activeTab, setActiveTab] = usePersistentState<ActiveTab>('teyvat_active_tab', 'characters');
  const [isResinModalOpen, setIsResinModalOpen] = useState<boolean>(false);

  // Resin Tracker persistent state
  const [resin, setResin] = useState<number>(160);
  const [condensedCount, setCondensedCount] = useState<number>(3);
  const [weeklyBossesDone, setWeeklyBossesDone] = useState<number>(1);

  // Load resin state from localStorage and compute natural regeneration (1 resin per 8 minutes, capped at 200)
  useEffect(() => {
    try {
      const savedResin = localStorage.getItem('teyvat_resin_count');
      const savedTimestamp = localStorage.getItem('teyvat_resin_timestamp');
      const savedCondensed = localStorage.getItem('teyvat_condensed_count');
      const savedBosses = localStorage.getItem('teyvat_weekly_bosses');

      if (savedResin !== null) {
        let currentResinCount = Number(savedResin);
        if (savedTimestamp !== null) {
          const elapsedMs = Math.max(0, Date.now() - Number(savedTimestamp));
          const regenAmount = Math.floor(elapsedMs / (8 * 60 * 1000));
          if (regenAmount > 0) {
            currentResinCount = Math.min(200, currentResinCount + regenAmount);
            // Update timestamp to the surplus point
            const remainingElapsed = elapsedMs % (8 * 60 * 1000);
            localStorage.setItem('teyvat_resin_count', String(currentResinCount));
            localStorage.setItem('teyvat_resin_timestamp', String(Date.now() - remainingElapsed));
          }
        }
        setResin(currentResinCount);
      }
      if (savedCondensed !== null) setCondensedCount(Number(savedCondensed));
      if (savedBosses !== null) setWeeklyBossesDone(Number(savedBosses));
    } catch {
      // ignore
    }
  }, []);

  const handleSetResin = (val: number) => {
    setResin(val);
    try {
      localStorage.setItem('teyvat_resin_count', String(val));
      localStorage.setItem('teyvat_resin_timestamp', String(Date.now()));
    } catch {
      // ignore
    }
  };

  const handleSetCondensed = (val: number) => {
    setCondensedCount(val);
    try {
      localStorage.setItem('teyvat_condensed_count', String(val));
    } catch {
      // ignore
    }
  };

  const handleSetWeeklyBosses = (val: number) => {
    setWeeklyBossesDone(val);
    try {
      localStorage.setItem('teyvat_weekly_bosses', String(val));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100">
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenResinTracker={() => setIsResinModalOpen(true)}
          currentResin={resin}
          condensedCount={condensedCount}
        />

        <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          {activeTab === 'characters' && <CharacterHub />}
          {activeTab === 'materials' && <MaterialsHub />}
          {activeTab === 'map' && <MapExplorer />}
          {activeTab === 'quests' && <QuestRoadmap />}
          {activeTab === 'farming' && <FarmingHub />}
        </main>
      </div>

      <Footer />

      {/* Global Resin & Daily Reset Tracker Modal */}
      <ResinTrackerModal
        isOpen={isResinModalOpen}
        onClose={() => setIsResinModalOpen(false)}
        resin={resin}
        setResin={handleSetResin}
        condensedCount={condensedCount}
        setCondensedCount={handleSetCondensed}
        weeklyBossesDone={weeklyBossesDone}
        setWeeklyBossesDone={handleSetWeeklyBosses}
      />
    </div>
  );
}
