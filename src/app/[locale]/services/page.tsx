import type { Metadata } from 'next';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { MountainArt } from '@/components/MountainArt';
import { dictionaries, hasLocale } from '@/i18n/config';
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
  const { t } = await getDictionary();
  const s = t.services;

  return (
    <>
      <section aria-labelledby="sv-h" className="page-container pt-[clamp(32px,4.2vw,49px)]">
        <Eyebrow className="mb-5">{s.eyebrow}</Eyebrow>
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
          <DisplayHeading
            as="h1"
            id="sv-h"
            h={s.h}
            className="text-[clamp(36px,5vw,60px)] leading-[1.04] tracking-[-.045em]"
          />
          <p className="m-0 border-l border-line-strong pl-5 font-sans text-[12px] uppercase leading-[1.9] tracking-[.18em] text-eyebrow">
            {s.side1}
            <br />
            {s.side2}
          </p>
        </div>
        <p className="m-0 mt-7 font-serif text-[clamp(19px,2.15vw,25px)] text-ink-4">{s.sub}</p>

        <div className="mt-[clamp(40px,4.8vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-5">
          {s.cards.map((c, i) => (
            <article
              key={c.t}
              className={`flex flex-col gap-3.5 rounded-xl border border-ink/[.06] px-[clamp(22px,2.8vw,32px)] pb-[clamp(22px,2.6vw,30px)] pt-[clamp(20px,2.4vw,28px)] transition duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-24px_rgba(20,40,35,.4)] ${tints[i].bg}`}
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-14 place-items-center rounded-full text-ink ${tints[i].chip}`}>
                  <Icon name={c.ic} size={24} />
                </span>
                <span className="font-serif text-[18px] text-brand">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="m-0 mt-3 font-sans text-[12px] uppercase tracking-[.18em] text-eyebrow">{c.k}</p>
              <h2 className="m-0 font-sans text-[clamp(24px,2.55vw,30px)] font-bold leading-[1.05] tracking-[-.045em]">
                {c.t}
              </h2>
              <p className="m-0 font-serif text-[clamp(17px,1.95vw,23px)] leading-[1.28] text-ink-4">{c.d}</p>
              <p className="m-0 mt-3 border-t border-ink/[.18] pt-4 font-sans text-[11px] uppercase tracking-[.18em] text-eyebrow">
                {s.get}
              </p>
              <ul className="m-0 flex list-none flex-nowrap gap-2.5 p-0 max-[520px]:flex-wrap">
                {c.g.map((g) => (
                  <li
                    key={g.t}
                    className="flex min-w-0 flex-[1_1_auto] items-center gap-2 rounded-[14px] bg-white/55 px-3 py-3 font-serif text-[13.5px] leading-[1.15] text-ink-2"
                  >
                    <Icon name={g.ic} size={18} className="flex-none" />
                    {g.t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="sv-p" className="page-container pt-[clamp(56px,6.5vw,75px)]">
        <Eyebrow className="mb-5">{s.pEyebrow}</Eyebrow>
        <DisplayHeading
          id="sv-p"
          h={s.pH}
          className="mb-10 text-[clamp(32px,5vw,58px)] leading-[1.04] tracking-[-.04em]"
        />
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-8 p-0">
          {s.process.map((step, i) => (
            <li key={step.t} className="flex flex-col">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[22px] text-brand">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-px flex-1 bg-line-mid" />
              </div>
              <h3 className="m-0 mt-3 font-serif text-[22px] font-normal">{step.t}</h3>
              <p className="m-0 mt-1.5 font-serif text-[16px] text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
        <MountainArt className="pointer-events-none ml-auto mt-[clamp(44px,5.4vw,63px)] h-[clamp(56px,7vw,81px)] w-[min(62%,800px)] [-webkit-mask-image:linear-gradient(to_left,#000_45%,transparent)] [mask-image:linear-gradient(to_left,#000_45%,transparent)]" />
      </section>
    </>
  );
}
