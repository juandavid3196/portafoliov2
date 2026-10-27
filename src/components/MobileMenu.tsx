'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
  name: string;
  labels: { explore: string; close: string; cta: string; location: string };
  links: { label: string; href: string }[];
  homeHref: string;
};

const DESKTOP_MIN = 1080;

// Full-screen menu (<1080px). It is rendered in a portal so the header's blur does not trap it.
export function MobileMenu({
  locale,
  items,
  menuLabel,
  navLabel,
  languageLabel,
  name,
  labels,
  links,
  homeHref,
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const open = mounted && !closing;
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const openMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    setClosing(false);
    setMounted(true);
  };
  const close = () => {
    if (!mounted || closing) return;
    setClosing(true);
    timer.current = setTimeout(() => {
      setMounted(false);
      setClosing(false);
    }, 280);
  };

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_MIN) {
        setClosing(false);
        setMounted(false);
      }
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const overlay = (
    <div
      id="mobile-menu"
      ref={panelRef}
      data-state={closing ? 'closed' : 'open'}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={navLabel}
      className="menu-panel fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#07271f] text-ivory outline-none min-[1080px]:hidden"
    >
      {/* Faint forest at the bottom */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] opacity-30">
        <Image
          src="/images/hero-forest.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_80%] [mask-image:linear-gradient(to_bottom,transparent,#000_45%)]"
        />
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 120"
        className="pointer-events-none absolute bottom-[16%] right-0 h-auto w-[62%] max-w-[300px]"
        fill="none"
      >
        <path d="M0 110 C60 100 110 80 135 50 C150 30 175 12 200 8" stroke="#6f9a86" strokeOpacity=".45" strokeWidth=".8" />
        <circle cx="134" cy="52" r="3.4" fill="#d9825a" />
      </svg>

      <div className="relative flex min-h-full flex-col px-[clamp(24px,8vw,48px)] pb-[calc(env(safe-area-inset-bottom)_+_56px)] pt-5">
        <div className="flex items-start justify-between">
          <Link
            href={homeHref}
            onClick={close}
            className="flex items-center gap-3.5 pt-2 text-ivory hover:text-ivory"
          >
            <span aria-hidden="true" className="font-serif text-[40px] font-light leading-none tracking-[-.12em]">
              JD
            </span>
            <span className="font-serif text-[22px] tracking-[-.01em]">{name}</span>
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label={labels.close}
            className="flex cursor-pointer flex-col items-center gap-2 text-ivory"
          >
            <span className="grid size-[56px] place-items-center rounded-full border border-ivory/80">
              <Icon name="x" size={26} strokeWidth={1.3} />
            </span>
            <span className="font-sans text-[12px] tracking-[.12em]">{labels.close}</span>
          </button>
        </div>

        <nav aria-label={navLabel} className="mt-[clamp(28px,7vh,64px)]">
          <p style={{ '--i': 0 } as React.CSSProperties} className="menu-rise m-0 font-sans text-[13px] uppercase tracking-[.3em] text-ivory/55">{labels.explore}</p>
          <ul className="m-0 mt-6 list-none p-0">
            {items.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li
                  key={item.key}
                  style={{ '--i': i + 1 } as React.CSSProperties}
                  className={`menu-rise ${i > 0 ? 'border-t border-ivory/20' : ''}`}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className={`flex min-h-[clamp(56px,8.5vh,84px)] items-center justify-between font-serif text-[clamp(38px,11vw,52px)] leading-none tracking-[-.01em] transition-colors duration-200 ${
                      active ? 'text-[#e07b4f] hover:text-[#e07b4f]' : 'text-ivory hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className="flex items-center gap-4 font-sans text-[18px] tracking-normal">
                      {String(i + 1).padStart(2, '0')}
                      {active ? <Icon name="arrow-up-right" size={24} strokeWidth={1.4} /> : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          style={{ '--i': items.length + 1 } as React.CSSProperties}
          className="menu-rise mt-auto flex flex-col gap-6 pt-[clamp(32px,6vh,56px)]"
        >
          <LangSwitch locale={locale} label={languageLabel} variant="mobile" onNavigate={close} />
          <span aria-hidden="true" className="block h-px w-14 bg-ivory/50" />
          <div>
            <p className="m-0 font-sans text-[13px] uppercase tracking-[.3em] text-ivory/65">{labels.cta}</p>
            <ul className="m-0 mt-3 flex list-none flex-wrap gap-x-8 gap-y-2 p-0">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-serif text-[22px] text-ivory hover:text-white"
                  >
                    {l.label}
                    <Icon name="arrow-up-right" size={18} strokeWidth={1.4} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <span aria-hidden="true" className="block h-px w-full bg-ivory/20" />
          <p className="m-0 flex items-center gap-3.5 font-sans text-[13px] uppercase tracking-[.3em] text-ivory/70">
            <span aria-hidden="true" className="size-2.5 flex-none rounded-full bg-[#e07b4f]" />
            {labels.location}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-3.5 font-sans text-[14px] text-ink group-data-[hero=true]/h:border-ivory/40 group-data-[hero=true]/h:bg-transparent group-data-[hero=true]/h:text-ivory min-[1080px]:hidden"
      >
        <Icon name="menu" size={18} strokeWidth={1.6} />
        {menuLabel}
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
