import Link from 'next/link';
import { site } from '@/config/site';
import { href, navKeys } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

const linkCls = 'font-serif text-[17px] text-ink hover:text-brand';

export async function Footer() {
  const { locale, t } = await getDictionary();

  return (
    <footer className="mt-[clamp(56px,7vw,96px)] border-t border-line">
      <div className="page-container flex flex-wrap items-start justify-between gap-x-12 gap-y-7 pb-9 pt-10">
        <div className="flex max-w-[360px] flex-col gap-2.5">
          <span className="font-serif text-[34px] font-light leading-none tracking-[-.12em] text-brand">JD</span>
          <p className="m-0 font-serif text-[17px] leading-[1.45] text-muted">{t.common.footerLine}</p>
        </div>
        <nav aria-label={t.common.footerNav} className="flex flex-wrap gap-x-[26px] gap-y-2.5">
          {navKeys.map((key, i) => (
            <Link key={key} href={href(locale, key)} className={linkCls}>
              {t.nav[i]}
            </Link>
          ))}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
            GitHub ↗
          </a>
          {site.linkedin ? (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
              LinkedIn ↗
            </a>
          ) : null}
        </nav>
      </div>
      <div className="page-container flex flex-wrap justify-between gap-x-6 gap-y-2 pb-8 pt-0 font-sans text-[12px] uppercase tracking-[.12em] text-muted">
        <span>© 2026 {site.name}</span>
        <span>{t.common.location}</span>
      </div>
    </footer>
  );
}
