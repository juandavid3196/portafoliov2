'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { switchLocalePath } from '@/lib/nav';

type LangSwitchProps = {
  locale: Locale;
  label: string;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

// Keeps the equivalent page when changing language.
export function LangSwitch({ locale, label, variant = 'desktop', onNavigate }: LangSwitchProps) {
  const pathname = usePathname();

  return (
    <div role="group" aria-label={label} className={variant === 'desktop' ? 'flex gap-[18px]' : 'mt-5 flex gap-2.5'}>
      {locales.map((l) => {
        const current = l === locale;
        const base = 'font-sans font-semibold';
        const cls =
          variant === 'desktop'
            ? `${base} border-b-[1.5px] py-1 text-[13px] tracking-[.06em] ${
                current
                ? 'border-brand text-brand group-data-[hero=true]/h:border-ivory group-data-[hero=true]/h:text-ivory'
                : 'border-transparent text-subtle hover:text-brand group-data-[hero=true]/h:text-ivory/70 group-data-[hero=true]/h:hover:text-white'
              }`
            : `${base} grid min-h-[44px] min-w-[56px] place-items-center rounded-full border text-[14px] ${
                current ? 'border-brand text-brand' : 'border-transparent text-subtle'
              }`;
        return (
          <Link
            key={l}
            href={switchLocalePath(pathname, l)}
            hrefLang={l}
            lang={l}
            aria-current={current ? 'true' : undefined}
            onClick={onNavigate}
            className={cls}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
