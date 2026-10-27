'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n/config';
import { isActive, type NavItem } from '@/lib/nav';
import { LangSwitch } from './LangSwitch';

type MainNavProps = { locale: Locale; items: NavItem[]; label: string; languageLabel: string };

// Desktop navigation (≥920px) with the active page and the language switch.
export function MainNav({ locale, items, label, languageLabel }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="hidden items-center gap-[22px] whitespace-nowrap min-[1080px]:flex min-[1240px]:gap-[30px]">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={`border-b-[1.5px] py-1.5 font-serif text-[17px] transition-colors duration-200 hover:text-brand ${
              active
                ? 'border-brand text-brand group-data-[hero=true]/h:border-ivory group-data-[hero=true]/h:text-ivory'
                : 'border-transparent text-ink group-data-[hero=true]/h:text-ivory/90 group-data-[hero=true]/h:hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
      <span className="h-[26px] w-px bg-line group-data-[hero=true]/h:bg-ivory/60" aria-hidden="true" />
      <LangSwitch locale={locale} label={languageLabel} />
    </nav>
  );
}
