import type { Metadata } from 'next';
import { site } from '@/config/site';
import { dictionaries, href, locales, type Locale, type RouteKey } from '@/i18n/config';

// Served by src/app/opengraph-image.tsx. A page-level openGraph object replaces the parent's,
// so the image is referenced explicitly instead of relying on the file convention merge.
const ogImage = { url: '/opengraph-image', width: 1200, height: 630, alt: site.name };

const ogLocale: Record<Locale, string> = { en: 'en_US', es: 'es_CO' };

// Builds title, description, hreflang alternates and Open Graph for a page.
export function buildMetadata(locale: Locale, key: RouteKey, description: string): Metadata {
  const t = dictionaries[locale];
  const pageTitle = t.titles[key];
  const title = pageTitle ? `${pageTitle} — ${site.name}` : site.name;
  const path = href(locale, key);

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = href(l, key);
  languages['x-default'] = href('en', key);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: path,
      images: [ogImage],
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage.url] },
  };
}
