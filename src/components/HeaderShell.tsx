'use client';

import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}
const getScrolled = () => window.scrollY > 8;
const getServerScrolled = () => false;

// Sticky header frame. On the home page (≥900px) it is transparent over the hero photo
// until the page scrolls; everywhere else it keeps the translucent ivory bar.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(subscribe, getScrolled, getServerScrolled);
  const overHero = pathname.split('/').filter(Boolean).length <= 1 && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        overHero
          ? 'border-[rgba(213,218,211,.6)] bg-[rgba(248,246,241,.92)] backdrop-blur-[10px] min-[900px]:border-transparent min-[900px]:bg-transparent min-[900px]:backdrop-blur-0'
          : 'border-[rgba(213,218,211,.6)] bg-[rgba(248,246,241,.92)] backdrop-blur-[10px]'
      }`}
    >
      {children}
    </header>
  );
}
