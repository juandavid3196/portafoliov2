import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/services'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'services', dictionaries[locale].services.sub);
}

// Card tints follow the order of t.services.cards: sky, sage, peach, lavender.
const tints = [
  { bg: 'bg-sky', chip: 'bg-[#d7e7f5]' },
  { bg: 'bg-sage', chip: 'bg-[#d5e3d7]' },
  { bg: 'bg-peach', chip: 'bg-[#f3dfcb]' },
  { bg: 'bg-lavender', chip: 'bg-[#dfdcf3]' },
];

export default async function ServicesPage() {
  const { locale, t } = await getDictionary();
  const s = t.services;

  return (
    <>
      <section aria-labelledby="sv-h" className="page-container pt-[clamp(40px,6vw,72px)]">
        <Eyebrow className="mb-[18px]">{s.eyebrow}</Eyebrow>
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
          <DisplayHeading
            as="h1"
            id="sv-h"
            h={s.h}
            className="text-[clamp(42px,6vw,84px)] leading-[.98] tracking-[-.045em]"
          />
          <p className="m-0 border-l border-line-strong pl-5 font-sans text-[12px] uppercase leading-[1.9] tracking-[.18em] text-eyebrow">
            {s.side1}
            <br />
            {s.side2}
          </p>
        </div>
        <p className="m-0 mt-5 font-serif text-[clamp(19px,1.7vw,23px)] text-muted">{s.sub}</p>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[18px]">
          {s.cards.map((c, i) => (
            <article
              key={c.t}
              className={`flex flex-col gap-3.5 rounded-2xl border border-ink/[.06] p-[clamp(24px,2.6vw,32px)] transition duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-24px_rgba(20,40,35,.4)] ${tints[i].bg}`}
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-14 place-items-center rounded-full text-ink ${tints[i].chip}`}>
                  <Icon name={c.ic} size={24} />
                </span>
                <span className="font-serif text-[18px] text-brand">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="m-0 mt-1.5 font-sans text-[12px] uppercase tracking-[.18em] text-eyebrow">{c.k}</p>
              <h2 className="m-0 font-sans text-[clamp(26px,2.4vw,32px)] font-bold leading-[1.05] tracking-[-.035em]">
                {c.t}
              </h2>
              <p className="m-0 font-serif text-[19px] leading-[1.42] text-ink-4">{c.d}</p>
              <p className="m-0 mt-3 border-t border-ink/[.18] pt-4 font-sans text-[11px] uppercase tracking-[.18em] text-eyebrow">
                {s.get}
              </p>
              <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2 p-0">
                {c.g.map((g) => (
                  <li
                    key={g.t}
                    className="flex items-center gap-2.5 rounded-[10px] bg-white/55 p-3 font-serif text-[15px] leading-[1.25] text-ink-2"
                  >
                    <Icon name={g.ic} size={20} className="flex-none" />
                    {g.t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="sv-p" className="page-container pt-[clamp(64px,8vw,104px)]">
        <Eyebrow className="mb-4">{s.pEyebrow}</Eyebrow>
        <DisplayHeading
          id="sv-p"
          h={s.pH}
          className="mb-8 text-[clamp(32px,3.8vw,52px)] leading-none tracking-[-.04em]"
        />
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-7 p-0">
          {s.process.map((step, i) => (
            <li key={step.t} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[22px] text-brand">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-px flex-1 bg-line-mid" />
              </div>
              <h3 className="m-0 mt-2 font-serif text-[24px] font-normal">{step.t}</h3>
              <p className="m-0 font-serif text-[17px] text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14">
          <CtaBand
            variant="services"
            eyebrow={t.home.ctaEyebrow}
            title={s.ctaTitle}
            sub={t.home.ctaSub}
            primaryLabel={t.home.cta2}
            primaryHref={href(locale, 'contact')}
            secondaryLabel={t.home.ctaSecondary}
            secondaryHref={href(locale, 'work')}
          />
        </div>
      </section>
    </>
  );
}
