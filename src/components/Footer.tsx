import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/80 py-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="text-amber-400 font-bold">✨ Teyvat Guide</span>
            <span>— Production-grade companion for Travelers</span>
          </div>

          <div className="flex items-center space-x-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 leading-relaxed text-center md:text-left">
          Teyvat Guide is not affiliated with or endorsed by HoYoverse / Cognosphere PTE. LTD. Genshin Impact, game content, and materials are trademarks and copyrights of HoYoverse. Build math and theorycrafting guidelines inspired by KeqingMains (KQM) standards.
        </p>
      </div>
    </footer>
  );
};
