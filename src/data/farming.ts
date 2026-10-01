import { FarmingGuide } from '@/types/genshin';

export const FARMING_STRATEGIES: FarmingGuide[] = [
  {
    id: 'ar_leveling_strategy',
    title: 'Fastest Adventure Rank (AR) Leveling Blueprint',
    category: 'ar',
    badge: 'AR 1 to 60',
    summary: 'The mathematical breakdown of where AR EXP comes from and the exact order of actions to reach AR 45-50 in record time.',
    efficiencyRating: 'S+',
    keyTakeaways: [
      'Daily Commissions give 1,500 AR EXP every single day (takes 5-8 minutes). Never skip a day!',
      '1 Original Resin spent = exactly 5 AR EXP (180 daily resin = 900 AR EXP/day).',
      'NEVER spend Fragile Resin before AR 45! At AR 45, highest difficulty artifact domains guarantee at least one 5-star artifact per 20 resin.',
      'Archon Quests and Story Quests offer massive bursts of 1,000 to 2,000 AR EXP each.'
    ],
    steps: [
      {
        title: 'Phase 1: AR 1 to 12 (Initial Rush)',
        detail: 'Breeze through the early Mondstadt Archon Quests. Do not stop to explore every single rock yet. Rush directly to unlock Daily Commissions at AR 12 with Katheryne.',
        yieldInfo: 'Fastest milestone; takes ~1.5 hours'
      },
      {
        title: 'Phase 2: AR 12 to 25 (Daily Loop + Waypoints)',
        detail: 'Clear all 4 Daily Commissions daily. Spend all 180 resin on Bosses (character ascension mats) or Weapon Ascension domains. Unlock every Teleport Waypoint and Statue of the Seven for +50 AR EXP each.',
        yieldInfo: '1,500 Daily EXP + 900 Resin EXP + ~2,000 Map EXP'
      },
      {
        title: 'Phase 3: AR 25 to 45 (World Quests & Leylines)',
        detail: 'Complete Liyue and Inazuma Archon quests. If your characters need levels or weapons, farm Blue (EXP) and Yellow (Mora) Leylines. Hoard all fragile resin in your inventory.',
        yieldInfo: 'Steady progression to the golden threshold'
      },
      {
        title: 'Phase 4: AR 45+ (The Artifact Goldmine)',
        detail: 'Unlock Level 90 Artifact Domains. Now spend your hoarded Fragile Resin (usually 40-50 moons = 2,400+ resin) to quickly kit out your primary DPS and supports with 5-star sets.',
        yieldInfo: 'Guaranteed 5-star artifact per 20 resin'
      }
    ]
  },
  {
    id: 'mora_farming_strategy',
    title: 'Infinite Mora Strategy: Stop Going Broke',
    category: 'mora',
    badge: 'Mora Economy',
    summary: 'Leveling a character to 90 with 9/9/9 talents and a Level 90 weapon costs over 7,000,000 Mora! Here is how veterans maintain a 20M+ Mora balance.',
    efficiencyRating: 'S',
    keyTakeaways: [
      'Weekly City Reputation Bounties & Requests yield 150,000 Mora for 10 minutes of effort.',
      'Serenitea Pot Realm Depot provides 200,000 Mora per week using free Realm Currency.',
      'Daily 15-minute 100-spot Artifact Run: Destroying 1-star and 2-star artifacts nets ~60,000 Mora/day with ZERO resin cost (over 1.8 Million Mora/month!).',
      'Event shops have the highest Mora-to-currency exchange rate. Always buy out event shop Mora!'
    ],
    steps: [
      {
        title: 'Weekly Routine #1: City Reputation',
        detail: 'Do 3 Bounties (choose the 100-reputation hardest ones) and 3 Requests every Monday in Fontaine/Sumeru/Natlan. It takes 10 minutes and nets 150k Mora straight into your bag.',
        yieldInfo: '150,000 Mora / week (Zero Resin)'
      },
      {
        title: 'Weekly Routine #2: Serenitea Pot Realm Depot',
        detail: 'Once your Serenitea Pot reaches Trust Rank 8, spend excess Realm Currency on the 10,000 Mora packs (up to 20 times = 200,000 Mora).',
        yieldInfo: '200,000 Mora / week (Zero Resin)'
      },
      {
        title: 'Resin-Free Daily Run: 100 Investigation Spots',
        detail: 'Teyvat has over 100 sparkling investigation spots (in Tatarasuna, Seirai Island, Sumeru, and Fontaine) that drop gray and green artifacts every 24 hours. Go to inventory, click the trash can (Destroy), and convert them directly into Mora.',
        yieldInfo: '60,000 - 75,000 Mora / day (Zero Resin)'
      },
      {
        title: 'Emergency Gold Leylines (World Level 8)',
        detail: 'At WL8, each Blossom of Wealth gives 60,000 Mora for 20 resin (120,000 with Condensed Resin). If you have urgent character leveling needs, spending a full day’s 180 resin yields 540,000 Mora.',
        yieldInfo: '60,000 Mora per 20 Resin'
      }
    ]
  },
  {
    id: 'exp_books_strategy',
    title: 'Character EXP Books (Hero’s Wit) Masterclass',
    category: 'books',
    badge: 'EXP Optimization',
    summary: 'Stop wasting 172 Hero’s Wit taking ATK-scaling characters from 80 to 90. Learn the Level 80/90 rule and how to farm books with peak efficiency.',
    efficiencyRating: 'S+',
    keyTakeaways: [
      'The "Level 80/90 Rule": Ascending a character from 80 to 90 costs 172 Hero’s Wit and 680,000 Mora for only ~2-3% ATK increase. Keep ATK-scaling characters (e.g. Diluc, Ayaka, Yoimiya) at 80/90!',
      'Who MUST be Level 90: Characters who scale on HP (Neuvillette, Furina, Yelan, Zhongli), DEF (Noelle, Itto, Chiori), or trigger Transformative Reactions like Swirl/Hyperbloom/Burgeon (Kazuha, Kuki, Sucrose) gain a massive 20-34% damage boost from 80 to 90.',
      'Always clear event shops completely; flagship events give 60+ Hero’s Wit for minimal stamina.',
      'Purchase 20 Hero’s Wit from the Serenitea Pot Realm Depot every week.'
    ],
    steps: [
      {
        title: 'Prioritize Level 90 Candidates Correctly',
        detail: 'Only spend 418 Hero’s Wit (Level 1 to 90) on HP scalers (Neuvillette, Furina), DEF scalers (Xilonen, Chiori), and Reaction triggers (Kuki Shinobu, Kazuha). Leave normal ATK hypercarries at 80/90 to save 40% of your book reserves.',
        yieldInfo: 'Saves 172 Hero’s Wit per character'
      },
      {
        title: 'Serenitea Pot Weekly Books',
        detail: 'Purchase 20 Hero’s Wit from Tubby every Monday reset. Over a patch (6 weeks), this is 120 Hero’s Wit for free.',
        yieldInfo: '20 Hero’s Wit / week'
      },
      {
        title: 'Blue Blossom of Revelation (Leylines)',
        detail: 'At WL8, each 20-resin blue leyline yields 4-5 Hero’s Wit and 6-7 Adventurer’s Experience (approx. 125,000 character EXP). Farm during "Leyline Overflow" x2 bonus events to double your gains.',
        yieldInfo: '125,000 EXP per 20 Resin'
      }
    ]
  },
  {
    id: 'resin_management_golden_rules',
    title: 'Resin Management & Weekly Boss Priority',
    category: 'resin',
    badge: 'Resin Efficiency',
    summary: 'Original Resin is the most valuable time-gated currency in the game. Maximize every single point without waste.',
    efficiencyRating: 'S+',
    keyTakeaways: [
      'Resin regenerates at 1 point every 8 minutes (180 resin in 24 hours). The max cap is 200, giving you a 26.6-hour buffer before overflow.',
      'Craft Condensed Resin (40 resin + 1 Crystal Core) to cut domain run times in half and store up to 5 condensed resin for days when preferred talent domains are open.',
      'Use the 3 Half-Cost Weekly Boss discounts (30 resin instead of 60 resin) EVERY week for dream solvent, billets, and 5-star artifact fodder.',
      'Do not farm artifact domains until AR 45. Prioritize guaranteed character level, weapon level, and talent upgrades first.'
    ],
    steps: [
      {
        title: 'Step 1: The 3 Discounted Weekly Bosses',
        detail: 'Fight the 3 newest weekly bosses or those whose talent mats your main characters require. They cost 30 resin each instead of 60, granting top tier drop rates for Billets and Dream Solvent.',
        yieldInfo: '90 Resin spent for 3 major boss loot pools'
      },
      {
        title: 'Step 2: Focus Guaranteed Upgrades First',
        detail: 'Weapons and Talents have 0% RNG. Guaranteed upgrades always come before artifact farming: Character Ascensions > Weapon Level 90 > Talent Levels 6/8/9 > Artifact Domain RNG.',
        yieldInfo: 'Permanent combat power increase'
      },
      {
        title: 'Step 3: Condensed Resin Storage Strategy',
        detail: 'If Tuesday has the talent books you need, craft 5 Condensed Resin on Monday. On Tuesday, you will have 5 Condensed (200 resin) + 180 natural resin = 380 resin to mass farm talent books in 10 minutes.',
        yieldInfo: 'Doubles domain speed and eliminates wasted days'
      }
    ]
  }
];

export const DAILY_ARTIFACT_ROUTE_SPOTS = [
  {
    location: 'Tatarasuna & Cannon Outpost (Inazuma)',
    spotsCount: 22,
    timeMinutes: 3,
    yieldMora: '~15,000 Mora',
    notes: 'Teleport to southern high point and glide down around the forge and cannon platforms.'
  },
  {
    location: 'Seirai Island - Asase Shrine & Shipwreck',
    spotsCount: 18,
    timeMinutes: 2.5,
    yieldMora: '~12,000 Mora',
    notes: 'Examine crates around Seiraimaru shipwreck decks and broken barrels near cat shrine.'
  },
  {
    location: 'Sumeru Desert - Dar al-Shifa & Ruins',
    spotsCount: 25,
    timeMinutes: 4,
    yieldMora: '~18,000 Mora',
    notes: 'Pots and debris around the abandoned hospital and temple outer walls.'
  },
  {
    location: 'Fontaine - Erinnyes Forest & Loch Urania',
    spotsCount: 20,
    timeMinutes: 3,
    yieldMora: '~14,000 Mora',
    notes: 'Investigate abandoned tents and sunken boat parts along the water edge.'
  }
];
