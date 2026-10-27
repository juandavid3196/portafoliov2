import Link from 'next/link';
import { site } from '@/config/site';
import { href, navKeys } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { HeaderShell } from './HeaderShell';
import { MainNav } from './MainNav';
import { MobileMenu } from './MobileMenu';

export async function Header() {
  const { locale, t } = await getDictionary();
  const items = navKeys.map((key, i) => ({ key, label: t.nav[i], href: href(locale, key) }));

  return (
    <HeaderShell>
      <div className="page-container flex h-[76px] items-center justify-between gap-6">
        <Link
          href={href(locale, 'home')}
          className="flex min-w-0 items-center gap-2.5 text-ink hover:text-ink group-data-[hero=true]/h:text-ivory group-data-[hero=true]/h:hover:text-ivory min-[420px]:gap-3.5"
        >
          <span
            aria-hidden="true"
            className="pr-1 font-serif text-[34px] font-light leading-none tracking-[-.12em] text-brand group-data-[hero=true]/h:text-ivory"
          >
            JD
          </span>
          <span className="font-serif text-[16px] leading-[1.15] tracking-[-.01em] min-[420px]:whitespace-nowrap min-[420px]:text-[19px]">
            {site.name}
          </span>
        </Link>
        <MainNav locale={locale} items={items} label={t.common.mainNav} languageLabel={t.common.language} />
        <MobileMenu
          locale={locale}
          items={items}
          menuLabel={t.common.menu}
          navLabel={t.common.mainNav}
          languageLabel={t.common.language}
        />
      </div>
    </HeaderShell>
  );
}
