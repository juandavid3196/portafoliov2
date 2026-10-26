import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { href, locales, routes, type RouteKey } from '@/i18n/config';

// One entry per locale and page, each pointing at its translation via hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(routes) as RouteKey[];
  return keys.flatMap((key) =>
    locales.map((locale) => ({
      url: `${site.url}${href(locale, key)}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${href(l, key)}`])),
      },
    })),
  );
}
