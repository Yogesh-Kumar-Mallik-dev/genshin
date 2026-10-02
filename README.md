# 🌌 Teyvat Guide — Ultimate Genshin Impact Companion

A fast, responsive, and comprehensive web companion for Travelers exploring Teyvat. Built with **Next.js 16 (App Router + Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Featuring complete, theorycrafted builds adhering to KeqingMains (KQM) standards, official high-resolution splash artwork, weapons armory, domain schedules, live resin calculator, and regional farming guides.

---

## ✨ Features

### ⚔️ Characters Hub & Theorycrafted Builds
- **128 Playable Characters**: Complete roster across all 7 nations (Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, Snezhnaya, plus Nod-Krai and Khaenri'ah).
- **Dedicated Traveler Variants**: Dedicated builds and official artwork for all 7 elemental forms:
  - 🍃 **Traveler (Anemo)** — 4pc Viridescent Venerer resistance shredder & Swirl support
  - 🪨 **Traveler (Geo)** — Starfell meteorite burst DPS & +10% Crit Rate buffer
  - ⚡ **Traveler (Electro)** — Universal party battery with Abundance Amulets
  - 🌿 **Traveler (Dendro)** — Lea Lotus Lamp off-field Dendro applicator for Hyperbloom & Bloom
  - 💧 **Traveler (Hydro)** — Torrential Ousia dewdrop burst DPS
  - 🔥 **Traveler (Pyro)** — Nightsoul's Blessing buffer with 4pc Scroll of the Hero of Cinder City
  - ❄️ **Traveler (Cryo)** — Permafrost blizzard DPS with 4pc Blizzard Strayer
- **Official Twin Wish Splash Art**: Official HoYoverse Full Wish splash artwork featuring **both twins (Aether and Lumine)** across character cards and full-screen inspector view.
- **KQM-Grade Build Breakdowns**:
  - Best-in-Slot (BiS) and F2P-friendly weapon recommendations.
  - Optimal 4pc and 2pc artifact sets with stat and substat priority guides.
  - Realistic target Energy Recharge (ER) benchmarks and Crit ratios.
  - Optimal Talent leveling priorities (Burst vs. Skill vs. Normal Attack).
  - Recommended synergy teams with specific rotation notes.
- **Filter & Search**: Instant filtering by Element, Weapon Type, Rarity (4★ / 5★), and Region.

---

### 🗡️ Weapons Armory
- **252 Official Weapons**: Spanning all five weapon classes:
  - 🗡️ Swords
  - 🪓 Claymores
  - 🔱 Polearms
  - 🏹 Bows
  - 📖 Catalysts
- **Official Class Artwork**: Authentic Genshin Impact weapon type icons.
- **Weapon Details**: Rarity, secondary stats, passive effect descriptions, and character synergy recommendations.

---

### 🏛️ Daily Farming & Domain Rotation Hub
- **Day-of-the-Week Schedule**: Live rotation tracking for Talent Books and Weapon Ascension materials (Monday – Sunday).
- **Domain Farming Planner**: Quickly see which domains are active today and plan your resin expenditures.

---

### 📦 Materials & Regional Catalogs
- **Complete Regional Drops**: Talent teachings, weekly trounce boss drops, normal world boss materials, and regional specialties.
- **Interactive Checklists**: Keep track of required materials for character ascensions.

---

### 🧭 Map Explorer & Route Guides
- **Regional Specialty Routes**: Optimal farming paths for Mondstadt through Natlan and beyond.
- **Elevation Badging**: Clear tags for Surface, Cliff Peak, Underground Cave, and Underwater locations.

---

### 📜 Quest & Archon Roadmap
- **Chronological Story Progression**: From Prologue: The Outlander Who Caught the Wind to Chapter VI (Snezhnaya) and Chapter ??? (Khaenri'ah).
- **Prerequisites & Milestones**: Track Archon quests, prerequisites, and milestone rewards.

---

### ⏱️ Live Resin & Daily Reset Tracker
- **Real-Time Natural Regeneration**: Calculates resin replenishing at 1 resin per 8 minutes up to the official 200 cap.
- **Condensed Resin & Weekly Bosses**: Tracks condensed resin count and 30-resin weekly boss discounts.
- **Persistent State**: Decision caching via `localStorage` so your timer, active tabs, and inputs remain intact on page refresh.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.18.0 or higher recommended)
- **pnpm** (recommended), npm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:Yogesh-Kumar-Mallik-dev/genshin.git
   cd genshin
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   # or: npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build & Production

To generate an optimized production build:

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```text
teyvat-guide/
├── public/
│   ├── assets/
│   │   ├── artifacts/       # Official artifact set flower icons
│   │   ├── characters/      # Character splash arts, cards, and avatar icons
│   │   ├── elements/        # Official elemental symbols
│   │   ├── materials/       # Boss drops, talent books, regional specialties
│   │   ├── ui/              # UI badges and status icons
│   │   └── weapons/         # 252 weapon sprites & class icons
│   ├── favicon.ico
│   └── favicon.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, metadata & font setup
│   │   ├── page.tsx         # Tabbed main viewport & resin tracker modal
│   │   └── globals.css      # Tailwind base and custom utilities
│   ├── components/
│   │   ├── CharacterHub.tsx # Character roster, search, and build modal
│   │   ├── FarmingHub.tsx   # Daily domain rotation & talent schedule
│   │   ├── Footer.tsx       # Footer layout
│   │   ├── MapExplorer.tsx  # Farming route navigation & elevation badges
│   │   ├── MaterialsHub.tsx # Regional item catalog & specialty tracker
│   │   ├── Navbar.tsx       # Navigation bar with live resin indicator
│   │   ├── QuestRoadmap.tsx # Archon quest timeline
│   │   └── ResinTrackerModal.tsx # Interactive resin & weekly boss tracker
│   ├── data/
│   │   ├── characters.ts    # Complete character builds database
│   │   ├── farmingRoutes.ts # Regional specialty routes database
│   │   ├── materials.ts     # Regional ascension and talent materials
│   │   └── weapons.ts       # 252 weapons database
│   ├── hooks/
│   │   └── usePersistentState.ts # LocalStorage state persistence hook
│   └── types/
│       └── genshin.ts       # TypeScript interfaces for builds, weapons & materials
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Asset Integrity & Authenticity
All character splash arts, avatar icons, weapon models, and elemental badges are sourced directly from official in-game art assets without AI generation.

---

## 📄 License
This project is an unofficial fan-made tool created for the Genshin Impact community. Genshin Impact, game content, and materials are trademarks and copyrights of **COGNOSPHERE / HoYoverse**.
