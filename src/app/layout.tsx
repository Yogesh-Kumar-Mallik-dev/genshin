import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teyvat Guide — Genshin Impact Resource Locator, Builds & Progression Hub',
  description: 'The ultimate Genshin Impact companion: Interactive Teyvat Resource Locator, KQM-standard character builds, optimal new player quest roadmap, and high-efficiency AR, Mora & EXP book farming strategies.',
  keywords: ['Genshin Impact', 'Builds', 'Resource Locator', 'Tactical Routes', 'Quest Order', 'Mora Farming', 'AR Leveling', 'Talent Books', 'Artifacts'],
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
