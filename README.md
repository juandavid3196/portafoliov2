# Juan David Ríos Rodríguez — Portfolio

Bilingual (EN default / ES) portfolio built with Next.js 16 (App Router), React 19, TypeScript (strict) and Tailwind CSS v4. Nine pages per language, statically generated. No database, no auth.

The design reference lives in `design_handoff_portfolio/` (prototype + spec). It is not application code.

## Run

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
npm run build    # production build
npm run start    # serve the production build
npm run lint
npx tsc --noEmit
```

## Where to edit

| What | Where |
|---|---|
| Copy (all text, both languages) | `src/content/en.ts` and `src/content/es.ts` (same shape; `es.ts` is typed against `en.ts`) |
| Email, LinkedIn, GitHub, CV, FieldOps demo/manual/repo | `src/config/site.ts` |
| Photos | `public/images/` (`hero-sierra-nevada.jpg`, `about-hiker-ridge.png`, `about-hiker-sunset.png`) |
| Colors, fonts, spacing tokens | `src/app/globals.css` (`@theme`) and the fonts in `src/app/[locale]/layout.tsx` |
| Favicon | `src/app/icon.svg` |
| Share image (Open Graph) | `src/app/opengraph-image.tsx` |

### Contact data rule

Never invent contact data. Every empty value in `src/config/site.ts` hides its action:

- `email` empty → no `mailto:`, the contact page shows an honest notice and the GitHub button.
- `linkedin` empty → LinkedIn links are hidden.
- `cvUrl` empty → "CV available on request".
- `fieldops.demoUrl` / `manualUrl` empty → buttons hidden and the "not published yet" note is shown.

There is no form backend, so there is no contact form.

### Photos

All photos are the owner's own (hero background, About page). Swap the files in `public/images/` keeping the same names, or update the `src` in `components/home/HeroBackdrop.tsx` and `app/[locale]/about/page.tsx`. Use WebP/AVIF around 2400px wide for the hero: the current hero photo is 1280px and looks soft on large screens.

### Real screenshots instead of mockups

`src/components/mockups/*` are illustrative HTML mockups with a visible badge. When real screenshots exist, replace them with `next/image` (radius 14, same shadow) and label them as real.

## Structure

```
src/
  app/
    [locale]/            layout (html lang, header, footer, fonts) + the 9 pages
    icon.svg, opengraph-image.tsx, robots.ts, sitemap.ts
  proxy.ts               "/" and unprefixed paths → /en (Next 16 name for middleware)
  components/            Header, MainNav + MobileMenu + LangSwitch (client), Footer,
                         Eyebrow, DisplayHeading, Button, TextLink, CtaBand,
                         SkillsDiagram, ProcessRing, mockups/*, home/*, project/*
  content/               en.ts, es.ts
  config/site.ts
  i18n/                  locales, routes, server helpers (uses next/root-params)
  lib/                   metadata builder (title, hreflang, Open Graph), nav helpers
```

Only the mobile menu, the main nav (active page) and the language switch are Client Components. Everything else renders on the server.

## Deploy (Vercel)

Set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.com`) so canonical URLs, hreflang, the sitemap and Open Graph use the public origin. Without it the site falls back to Vercel's production URL, then to `http://localhost:3000`.

## Notes

- Package manager: npm (a `package-lock.json` is committed). Use one package manager consistently.
- `cacheComponents` is enabled in `next.config.ts`; locales are prerendered through `generateStaticParams` in the locale layout.
