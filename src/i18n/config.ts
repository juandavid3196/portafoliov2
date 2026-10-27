import { en } from '@/content/en';
import { es } from '@/content/es';
import type { Dictionary } from '@/content/en';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'es' : 'en');

// Route keys → path segment (relative to /[locale]).
export const routes = {
  home: '',
  work: 'work',
  fieldops: 'work/fieldops',
  logit: 'work/logit',
  about: 'about',
  skills: 'skills',
  services: 'services',
  approach: 'approach',
  contact: 'contact',
} as const;

export type RouteKey = keyof typeof routes;

export const navKeys = ['work', 'about', 'skills', 'services', 'approach', 'contact'] as const;

export function href(locale: Locale, key: RouteKey): string {
  const segment = routes[key];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}
