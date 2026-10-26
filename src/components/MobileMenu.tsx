'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/config';
import { isActive, type NavItem } from '@/lib/nav';
import { Icon } from './Icon';
import { LangSwitch } from './LangSwitch';

type MobileMenuProps = {
  locale: Locale;
  items: NavItem[];
  menuLabel: string;
  navLabel: string;
  languageLabel: string;
};

// Menu button + full-width panel (<920px). The panel is positioned against the sticky header.
export function MobileMenu({ locale, items, menuLabel, navLabel, languageLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-3.5 font-sans text-[14px] text-ink min-[1080px]:hidden"
      >
        <Icon name={open ? 'x' : 'menu'} size={18} strokeWidth={1.6} />
        {menuLabel}
      </button>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label={navLabel}
          className="gutter-x absolute inset-x-0 top-full flex flex-col border-t border-line bg-ivory pb-6 pt-3 shadow-[0_24px_32px_-28px_rgba(20,40,35,.35)] min-[1080px]:hidden"
        >
          {items.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={close}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-[56px] items-center justify-between border-b border-[#e3e6e0] font-serif text-[24px] ${
                  active ? 'text-brand' : 'text-ink'
                }`}
              >
                {item.label}
                <span className="font-sans text-[12px] text-muted">{String(i + 1).padStart(2, '0')}</span>
              </Link>
            );
          })}
          <LangSwitch locale={locale} label={languageLabel} variant="mobile" onNavigate={close} />
        </nav>
      ) : null}
    </>
  );
}
