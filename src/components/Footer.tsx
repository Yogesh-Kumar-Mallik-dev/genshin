import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/80 py-6 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] text-slate-500 leading-relaxed text-center">
          Teyvat Guide is not affiliated with or endorsed by HoYoverse / Cognosphere PTE. LTD. Genshin Impact, game content, and materials are trademarks and copyrights of HoYoverse. Build math and theorycrafting guidelines inspired by KeqingMains (KQM) standards.
        </p>
      </div>
    </footer>
  );
};
