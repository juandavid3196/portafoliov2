# Handoff: Juan David Ríos Rodríguez — Portfolio (EN / ES)

## Overview
Professional portfolio for Juan David Ríos Rodríguez, Systems Engineer and Full-Stack Developer (Angular + .NET, React + Node.js). Audience: international recruiters, product teams and freelance clients. Nine pages, fully bilingual (English default, Spanish), with localized routes.

Target stack (requested by the owner):
- **Next.js (App Router) + React + TypeScript (strict)**
- **Tailwind CSS** + CSS variables for tokens
- Server Components by default; Client Components only for: mobile menu, language switcher (needs current pathname), `<details>` accordions can stay native
- `next/image`, `next/font` (Google: Instrument Sans, Instrument Serif, Newsreader)
- **lucide-react** for icons (the prototype hand-inlines Lucide-style paths)
- CSS-only transitions; respect `prefers-reduced-motion`
- No database, no auth. Deploy on Vercel. Use one package manager consistently (pnpm recommended).

## About the Design Files
The files in `design/` are **design references built in HTML** — a working prototype showing intended look, copy and behavior. They are **not production code to copy**. Recreate them in Next.js following the structure below. Open `design/Portfolio.dc.html` in a browser (served from a local static server, e.g. `npx serve design`) to explore every page; navigate with hash routes like `#/en/work/fieldops` or `#/es/about`.

All copy for both languages lives in the `content()` method of `Portfolio.dc.html`'s logic class (`en` and `es` objects with identical shape). **Lift that object directly into the dictionaries** — it is the source of truth for text.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy and responsive behavior. Recreate pixel-close.

## Suggested project structure
```
app/
  [locale]/
    layout.tsx            # <html lang>, header, footer, fonts
    page.tsx              # Home
    work/page.tsx
    work/fieldops/page.tsx
    work/bosvia/page.tsx
    work/logit/page.tsx
    about/page.tsx
    services/page.tsx
    approach/page.tsx
    contact/page.tsx
  sitemap.ts, robots.ts, icon.svg (JD favicon)
middleware.ts             # redirect "/" → "/en"
components/               # Header, MobileMenu (client), LangSwitch (client), Footer,
                          # Eyebrow, DisplayHeading, Button, TextLink, ProjectCard,
                          # StatusPill, SkillsDiagram, ProcessRing, CtaBand, mockups/*
content/
  en.ts, es.ts            # dictionaries (copy from prototype content())
  projects.ts             # project metadata (status, stack, links, images)
config/site.ts            # email, linkedin, github, cvUrl, fieldops.demoUrl/manualUrl/repoUrl
public/images/            # photos (see Assets)
```
`generateStaticParams` for `locale ∈ {en, es}`; `generateMetadata` per page and locale (title "Page — Juan David Ríos Rodríguez", description, `alternates.languages`, Open Graph).

### Config (`config/site.ts`)
```ts
export const site = {
  name: 'Juan David Ríos Rodríguez',
  email: '',              // empty → hide mailto, show honest notice
  linkedin: '',           // empty → hide
  github: 'https://github.com/juandavid3196',
  cvUrl: '',              // empty → "CV available on request"
  fieldops: { repoUrl: 'https://github.com/juandavid3196/fieldops', demoUrl: '', manualUrl: '' },
};
```
Rule: **never invent contact data**. Any empty value hides its action. FieldOps: if demo or manual is empty, show the note "The demo and user manual are not published yet. The repository is the current reference for the project's state." No contact form backend → only `mailto:` when email exists; never show fake "message sent" confirmations.

## Routes & navigation
`/en`, `/es`, `/[locale]/work`, `/[locale]/work/{fieldops|bosvia|logit}`, `/[locale]/about`, `/[locale]/services`, `/[locale]/approach`, `/[locale]/contact`.

- Header (sticky, 76px tall, bg `rgba(248,246,241,.92)` + `backdrop-filter: blur(10px)`, bottom border `rgba(213,218,211,.6)`):
  - Left: monogram "JD" (Newsreader 300, 34px, letter-spacing −0.12em, color `#084D46`) + name (Newsreader 19px).
  - Right (≥920px): Work · About · Services · Approach · Contact (Newsreader 17px, gap 30px). Active: color `#084D46` + 1.5px bottom border `#084D46`; `aria-current="page"`. Work is active on project pages too. Then 1px×26px divider `#D5DAD3`, then EN / ES (Instrument Sans 600, 13px, tracking .06em; active `#084D46` underlined, inactive `#8A918B`).
  - <920px: pill button "Menu" (44px min height, border `#D5DAD3`, white bg, menu/x icon) toggling a full-width panel: links as 56px rows (Newsreader 24px, bottom border `#E3E6E0`, right-aligned index 01–05), then EN/ES 56×44 pill buttons. `aria-expanded`, `aria-controls`. Close on navigation.
- Language switch keeps the equivalent page: swap the first path segment.
- Skip link "Skip to content" / "Ir al contenido" → `#main`, visible on focus.
- Footer: top border `#D5DAD3`, margin-top clamp(56px,7vw,96px). Monogram + tagline; nav links + GitHub ↗ (+ LinkedIn if configured); bottom row (Instrument Sans 12px, uppercase, tracking .12em, `#606760`): "© 2026 Juan David Ríos Rodríguez" and location line.

## Design Tokens
### Colors
| Token | Hex | Use |
|---|---|---|
| ivory | `#F8F6F1` | page background, text on green |
| green | `#084D46` | brand, primary buttons, accents, active nav |
| green-hover | `#0B5F56` | primary button hover |
| ink | `#141715` | primary text |
| ink-2 | `#2E3430` / `#3E4540` / `#4A514B` | body text variants |
| muted | `#606760` | secondary text |
| eyebrow | `#4F5650` | small uppercase labels |
| sage | `#E7EFE7` (circle `#E1ECE2`, chip `#D2E2D5`) | sections, cards |
| sky | `#E8F2FA` (circle `#E3EFF9`, chip `#D3E5F4`) | cards |
| peach | `#FAEEE2` (chip `#F4DCC6` / `#F3DFCB`) | cards, AI band |
| lavender | `#EEECF9` (chip `#DCD8F2`) | cards |
| border | `#D5DAD3`; soft `#DDE1DA`; strong `#9AA39B` / `#B9C2BA` | dividers, outlines |
| dots | `#9CC3E6` `#9DBFA5` `#F0BE96` `#B9C9BD` `#B7AEE0` | skill row markers |
| Bosvia warm | bg `#F6EBDD`, border `#E9DCCB`/`#E0D3C2`, text `#4A4038`/`#5E5248`/`#6B5E52`, accent `#7A4A22`, dot `#D7A06E` | Bosvia page variant |
| on-green muted | `#CFE0D9` (eyebrow), `#DCE8E3` (sub), `#9FC4B9` (underline) | green CTA bands |
| sparkle | `#C7773E` | AI band icon |

### Typography
- **Display sans**: Instrument Sans 700, letter-spacing −0.045em (H1) / −0.04em (H2), line-height .98–1.04.
- **Accent italic**: Instrument Serif italic 400, letter-spacing −0.01em — used for one highlighted word/phrase inside headings (e.g. "Built to *work*.").
- **Body serif**: Newsreader 400 (opsz), 17–21px, line-height 1.42–1.55.
- **Eyebrow**: Instrument Sans 500, 12px, uppercase, letter-spacing .22em, `#4F5650`.
- Scale (fluid): H1 `clamp(42px,6vw,84px)` (home hero `clamp(46px,6.4vw,88px)`); H2 large `clamp(36px,4.6vw,62px)`; H2 `clamp(32px,3.4vw,46px)`; lead `clamp(19px,1.7vw,23px)`; card titles 20–32px.
- Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.

### Layout & spacing
- Container: `max-width:1280px; padding-inline: clamp(20px,4vw,48px)`.
- Section rhythm: `padding-top: clamp(64px,8vw,112px)`.
- Two-column splits: `grid-template-columns: repeat(auto-fit, minmax(min(100%,420–460px), 1fr))`, gap `40px clamp(40px,6vw,88px)`.
- Feature card with mockup: flex-wrap; text `flex:1 1 300px; max-width:400–420px`, mockup `flex:2 1 460px`.

### Radius / shadow
- Buttons 6–8px; pills 999px; small cards 10–12px; cards 16–20px; big feature cards 24px; photos 14–16px.
- Mockup shadow: `0 24px 48px -28px rgba(20,40,35,.35), 0 2px 6px rgba(20,40,35,.06)`; border `#DDE2DC`.
- Service card hover: `translateY(-2px)` + `0 16px 32px -24px rgba(20,40,35,.4)`, .25s.

### Components
- **Primary button**: bg `#084D46`, text `#F8F6F1`, min-height 50–54px, padding 0 22–28px, radius 6–8px, Newsreader 18–19px, trailing arrow-up-right 17px. Hover bg `#0B5F56`.
- **Secondary button**: 1px `#9AA39B` border, ink text; hover border/text `#084D46`.
- **Text link**: Newsreader 18px, `#084D46`, 1px bottom border, padding-bottom 3px, trailing "↗".
- **Status pill**: 13px Instrument Sans 500, padding 6–7px 14px, bg ivory or tinted chip, optional 15px icon; adjacent status text with 7px dot.
- **Focus**: `:focus-visible { outline: 2px solid #084D46; outline-offset: 3px }`.

## Screens

### 1. Home (`/[locale]`)
1. **Hero** — Photo absolutely positioned right (`width:min(66%,1000px)`, full hero height, `object-position: 62% 40%`) faded with two masks: horizontal `transparent 0% → rgba(0,0,0,.55) 22% → #000 44%` and vertical `transparent at bottom → #000 22%`. Text column max-width 600px, padding-top `clamp(24px,7vw,110px)`: eyebrow "JUAN DAVID / FULL-STACK ENGINEER"; H1 "Thoughtful software. / Built to *work*."; lead (max 470px, `clamp(21px,2vw,26px)`); buttons "Explore my work" (primary) and "Let's talk" (secondary); tech line (Instrument Sans 14px, tracking .08em). <900px: photo stacks above text (`height:min(62vw,420px)`, bottom fade mask).
   - **Editorial band** below: white 72% glass card, border `#DDE1DA`, radius 10px, padding 22×32; left text with 1px left rule ("Engineering, design and the care to make them *work together*.", Newsreader `clamp(20px,2vw,26px)`); right location line (eyebrow style).
2. **Selected work** — Eyebrow + hairline rule; H2 "Products with a purpose." + side paragraph. FieldOps feature card (sage bg, radius 20px, text + FieldOps mockup). Below, a 2-up grid: Logit (sky) and Bosvia (peach) cards — pill(s), title (Bosvia uses Newsreader in green as wordmark), category, description · stack, 48px circular arrow link, mockup. "View all work ↗" link right-aligned.
3. **About intro** — Photo (4:3, radius 16) + eyebrow/H2 "Design sense, *engineering* depth." + 2 paragraphs + "More about me ↗".
4. **Skills** — Eyebrow "SKILL SET", H2 "A toolkit. / Built to *connect*.", sub. Left column: sage circle (≤360px) "MAIN FOCUS / Angular + .NET / Enterprise interfaces & business systems."; "TypeScript" connector (green 26px with two small curved bracket SVGs in `#9CC3E6`); sky circle (≤300px) "ADDITIONAL EXPERIENCE / React + Node.js". The secondary circle is intentionally smaller to show different depth. Right: ordered list with 1px left rail `#C9D3E6`, a colored 9px dot per row on the rail; each row = index + title (Instrument Sans 700, 22–28px, 220px column) | tools (Newsreader 20px) + description (17px muted). Rows: Front-end, Backend, Architecture, Data, UI foundations, Delivery. **No percentage bars or scores.**
   - AI band: peach, radius 12, sparkle icon, eyebrow "AI IN THE WORKFLOW", "Claude / Skills / MCP" (Newsreader 26–34px), "Context-aware assistance. Human-owned decisions."
   - "Applied in projects": FieldOps · Logit · Teatro Pablo Tobón Uribe in 3 columns with right rules.
5. **Process (short)** — H2 "A connected *process*." + link to Approach; 6 steps in an auto-fit grid (min 150px), each with top rule, green index, title.
6. **CTA band** — green `#084D46`, radius 16, eyebrow "HAVE A PROJECT IN MIND?", H2 "Let's build something useful.", sub; ivory button "Let's talk" + text link "View selected work".

### 2. Work (`/work`)
Eyebrow + rule; H1 "Useful software. / Considered from *end to end*."; sub. FieldOps large card (sky, radius 24): "Independent project" pill (sage chip + box icon) + "In development"; title 40–60px; description; stack; divider + user icon "Independent full-stack project"; "Explore the project" + "View repository ↗". Then 2-up: Logit (sky; "Professional experience"; "Read case study") and Bosvia (peach; "SaaS venture" · "In development"; "Discover the concept"). "Earlier work" row: label + two entries (icon, title, "org · Professional experience") separated by left rules — no links (no pages exist).

### 3. FieldOps (`/work/fieldops`)
Back link "← All work". Header: eyebrow "Independent project · In development"; H1 "FieldOps. / Field service, *connected*."; lead. Facts `<dl>` (Role / Stack / Status) with top borders, 90px label column. Actions: "View repository ↗" (primary, git icon) + demo/manual only if configured + availability note. Mockup on sky panel (radius 24, max 980px). Then numbered sections (eyebrow "0N · Title"):
01 Problem + 3 user types (48px sage icon circles); 02 Workflow — 5 white cards (border `#E1E5DE`, radius 16): Request → Assessment/quote → Work order → Visit → Follow-up & billing; 03 Modules — 2-col list (Customers, Properties, Technicians, Schedule, Visits, Work orders); 04 Access & structure — sage panel with 3 ivory rows (organizations, branches, roles/permissions); 05 Technical details — native `<details>` accordion (Architecture, Translations, Reusable components, Audit, Testing & CI/CD), summary rows 64px, "+" marker; 06 My contribution — large Newsreader statement under a 1px ink rule. "Next project → Logit" row.
**Do not claim finished/deployed features**; status wording comes from the dictionaries.

### 4. Bosvia (`/work/bosvia`) — warm variant
Background `linear-gradient(#F6EBDD, #F8F6F1 640px)`. H1 line 1 "Bosvia." in Newsreader green, line 2 "Hospitality, *closer to nature*."; lead; status note card (`#FFFDF9`, border `#E9DCCB`, peach dot). Right: lodging photo placeholder (5:4, radius 20) — replace with a real photo. 01 Vision: 3 sage cards (Presence, Reservations, Operation). 02 Proposed scope: mockup left; right a list of 7 items each with a "Proposed" peach pill (Website & booking engine, Availability & calendar, Rates & seasons, Experiences & packages, Guest communication, Check-in & check-out, Operations dashboard). When real progress exists, extend the status to Built / Designed / Planned with distinct pill colors (e.g. sage / sky / peach).

### 5. Logit (`/work/logit`)
Header split: text (eyebrow "Professional experience", H1 "Logit. / Foreign trade, *made clear*.", lead, stack) + mockup on sky panel. Disclaimer card (white, shield icon): Logit is a company product, not owned by Juan David; interface is illustrative, no real data. Contributions: 2-col numbered list (Full-stack development, Front-end leadership, Design system, Internationalization, Business interfaces, Quality & traceability). **No metrics, no testimonials, no private data.** Next → Bosvia.

### 6. About (`/about`)
1. Split: eyebrow "ABOUT ME", H1 "Good design. / *Thoughtful* engineering.", 3 paragraphs, pillar list with green 5px dots; photo (7:5, radius 14) + caption.
2. Experience (full-bleed sage band): H2 "Experience behind the *work*." + CV link (or "CV available on request"); rows: 50px ivory icon circle + company + role | description with left rule. Logit — Full-Stack Engineer; Universidad de Antioquia — Front-End Developer; Adage LATAM — Web Developer. **No dates** (none confirmed).
3. Builder: square photo + caption | eyebrow "BEYOND THE CODE", H2 "A *builder* at heart." (`clamp(42px,5.4vw,80px)`), sub, 3 paragraphs, "FieldOps and Bosvia are part of that journey."
4. Quote band (full-bleed sage): large “ mark `#7FA88F` with right rule `#9DBFA5`; Newsreader `clamp(28px,3.8vw,52px)` "…*belong together*."
5. Outside the screen: H2 "Outside / the *screen*." over a thin mountain line-drawing SVG (`#AFC3B4`, 1px); text + interest chips (sage, green text). Closing row with top rule: "Building is how I give those intentions a concrete form." + "See what I'm building ↗".

### 7. Services (`/services`)
H1 "Let's build something / that works *for you*." + side label with left rule ("FROM A CLEAR IDEA / TO A WORKING PRODUCT"). 2×2 cards (sky, sage, peach, lavender; radius 16; 56px icon chip; number top-right in green Newsreader; kicker eyebrow; title 26–32px; description; "WHAT YOU GET" divider; 3 benefit tiles at 55% white, radius 10). Process "A clear process, *from the start*.": Discover → Define → Build → Deliver (number + rule, title Newsreader 24px). Green CTA "Tell me what you're building."

### 8. Approach (`/approach`)
H1 "A connected process. / A *thoughtful* outcome." + side label. **≥1120px**: circular composition in a 1160×660 aspect box: SVG ellipse (cx580 cy330 rx400 ry262, 1.4px `#084D46`) with 4 small chevrons indicating clockwise flow; center dashed circle (32.8% width) with sprout icon, "Clarity *at the core*.", three lines, AI chip "AI woven into the workflow" and "Explore · Implement · Review". Six pill-shaped steps (31% width, radius 999, 64px icon chip) at: Understand (12.9%,0), Design (56%,0), Build (69%,39.8%), Validate (56%,79.7%), Deliver (12.9%,79.7%), Learn (0,39.8%). Colors alternate peach / sage / sky / lavender / peach / sage. **<1120px**: center block first, then a vertical sequence with a 1.4px green left rail and ring markers. All text is real, selectable HTML. AI note paragraph (human review & accountability). Three principles (64px sage icon circles): Reusable foundations, Small reviewable changes, Ownership throughout. Closing "Built with care. *Improved with purpose*." + link.

### 9. Contact (`/contact`)
H1 "Have a project in mind? / Let's build something *useful*."; lead. 2-up: green card ("WRITE TO ME" + mailto link with mail icon if email set, otherwise honest notice + GitHub button) and sage card (GitHub row, LinkedIn row if set, CV row or "Available on request", availability `<dl>`: Location / Availability / Languages).

## Interactions & Behavior
- Hover: links → `#084D46`; primary bg → `#0B5F56`; service cards lift 2px. Transitions .2–.25s ease.
- Route change scrolls to top (Next does this by default).
- `prefers-reduced-motion: reduce` disables transitions/animations.
- All touch targets ≥44px. No horizontal overflow at any width (test 360, 768, 1024, 1440).
- Mockups are HTML components with a visible "Illustrative mockup" / "Concept mockup" badge — keep the badge; replace with real screenshots (`next/image`, radius 14, same shadow) when available and label them as real.

## State
Only client state: mobile menu open/closed. Everything else is static/SSG from dictionaries + config.

## Assets
- `design/assets/hero-mountains.png`, `about-camp.png`, `builder.png` — **placeholder photos cropped from the owner's reference images** (AI-generated people). They must not be presented as the owner's real portrait; the prototype marks them "Placeholder photo". Replace with the owner's own photos (export WebP/AVIF, ~2400px wide for hero).
- Bosvia lodging photo: missing — placeholder block.
- Icons: Lucide (search, pen-line, code, circle-check, send, bar-chart, layers, users, user, shield, app-window, lightbulb, sparkles, box, landmark, file-text, calendar, mail, sprout, globe, house, tag, message-square, key, layout-grid, wrench, map-pin, git-branch, list, route, menu, x, arrow-up-right, arrow-right). Stroke 1.3–1.6.
- Favicon: rounded green square `#084D46` with ivory serif "JD".

## Files
- `design/Portfolio.dc.html` — all pages, header/footer, full EN/ES copy (`content()`), routing logic.
- `design/MockFieldOps.dc.html`, `MockLogit.dc.html`, `MockBosvia.dc.html` — illustrative product UIs.
- `design/support.js` — runtime needed only to open the prototype in a browser.

## Acceptance checklist
- `pnpm tsc --noEmit`, `pnpm lint`, `pnpm build` pass.
- Both locales render every page; EN/ES switch keeps the page.
- Lighthouse a11y ≥ 95; semantic headings (one H1 per page); alt text on all images.
- Per-page metadata + hreflang alternates; OG image; favicon.
- README for the repo: install/run/build, and where to edit content (`content/*.ts`), links (`config/site.ts`), images (`public/images`).
