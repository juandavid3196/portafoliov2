import { locales, type Locale } from '@/i18n/config';

export type NavItem = { key: string; label: string; href: string };

// Work stays active on project pages (/work/fieldops …).
export function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Same page in another language: swap the first path segment.
export function switchLocalePath(pathname: string, target: Locale): string {
  const [, first, ...rest] = pathname.split('/');
  const tail = (locales as readonly string[]).includes(first) ? rest : [first, ...rest].filter(Boolean);
  return `/${[target, ...tail].filter(Boolean).join('/')}`;
}
