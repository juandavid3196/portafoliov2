import type { Metadata } from 'next';
import { DisplayHeading, Em } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { MockBosvia } from '@/components/mockups/MockBosvia';
import { BackLink } from '@/components/project/BackLink';
import { NextProject } from '@/components/project/NextProject';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/work/bosvia'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'bosvia', dictionaries[locale].bosvia.lead);
}

const h2 = 'text-[clamp(32px,3.4vw,46px)] leading-[1.04] tracking-[-.04em]';

export default async function BosviaPage() {
  const { locale, t } = await getDictionary();
  const b = t.bosvia;

  return (
    <article aria-labelledby="bv-h" className="bg-[linear-gradient(#f6ebdd,#f8f6f1_640px)]">
      <div className="page-container pt-[clamp(32px,5vw,64px)]">
        <BackLink href={href(locale, 'work')} tone="warm">
          {t.common.back}
        </BackLink>
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-x-[clamp(40px,6vw,88px)] gap-y-10">
          <div className="flex flex-col gap-[22px]">
            <Eyebrow tone="warm">{b.eyebrow}</Eyebrow>
            <h1
              id="bv-h"
              className="m-0 font-sans text-[clamp(44px,5.6vw,80px)] font-bold leading-[.98] tracking-[-.045em]"
            >
              <span className="block font-serif font-normal tracking-[-.03em] text-brand">{b.h.l1}</span>
              <span className="block">
                {b.h.pre}
                <Em>{b.h.em}</Em>
                {b.h.post}
              </span>
            </h1>
            <p className="m-0 text-pretty font-serif text-[clamp(19px,1.7vw,23px)] leading-[1.42] text-warm-ink">
              {b.lead}
            </p>
            <p className="m-0 flex items-start gap-3 rounded-xl border border-warm-line bg-warm-card px-[18px] py-4 font-serif text-[17px] leading-[1.45] text-warm-ink">
              <span className="mt-2 size-2 flex-none rounded-full bg-warm-dot" />
              {b.status}
            </p>
          </div>
          {/* Placeholder until a real lodging photo exists. */}
          <div className="relative flex aspect-[5/4] items-end overflow-hidden rounded-[20px] bg-[repeating-linear-gradient(135deg,#ead9c3_0_14px,#e3d0b7_14px_28px)] p-5">
            <span className="rounded-full bg-[rgba(255,253,249,.9)] px-3 py-1.5 font-sans text-[12px] uppercase tracking-[.14em] text-warm-ink-2">
              {b.photo} · {t.mock.placeholder}
            </span>
          </div>
        </div>
      </div>

      {/* 01 · Vision */}
      <section aria-labelledby="bv-v" className="page-container pt-[clamp(64px,8vw,112px)]">
        <Eyebrow tone="warm" className="mb-4">
          01 · {b.visionEyebrow}
        </Eyebrow>
        <DisplayHeading id="bv-v" h={b.visionH} className={`mb-9 ${h2}`} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          {b.vision.map((v) => (
            <div key={v.t} className="flex flex-col gap-3.5 rounded-[18px] bg-sage p-7">
              <span className="grid size-12 place-items-center rounded-full bg-ivory text-brand">
                <Icon name={v.ic} size={22} />
              </span>
              <h3 className="m-0 font-sans text-[22px] font-semibold tracking-[-.02em]">{v.t}</h3>
              <p className="m-0 font-serif text-[18px] leading-[1.45] text-ink-4">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 · Proposed scope: every item is flagged "Proposed" until it is built. */}
      <section
        aria-labelledby="bv-s"
        className="page-container grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-[clamp(40px,6vw,88px)] gap-y-10 pt-[clamp(64px,8vw,112px)]"
      >
        <div className="flex flex-col gap-5">
          <Eyebrow tone="warm">02 · {b.scopeEyebrow}</Eyebrow>
          <DisplayHeading id="bv-s" h={b.scopeH} className={h2} />
          <MockBosvia badge={t.mock.concept} />
        </div>
        <ul className="m-0 list-none border-t border-warm-line-2 p-0">
          {b.scope.map((s) => (
            <li key={s.t} className="flex items-center gap-[18px] border-b border-warm-line-2 py-[18px]">
              <Icon name={s.ic} size={24} className="flex-none text-brand" />
              <div className="flex-1">
                <h3 className="m-0 font-sans text-[19px] font-semibold">{s.t}</h3>
                <p className="m-0 mt-0.5 font-serif text-[17px] text-warm-ink-3">{s.d}</p>
              </div>
              <span className="rounded-full bg-peach px-3 py-[5px] font-sans text-[12px] text-warm-accent">
                {b.proposed}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-container pt-[clamp(56px,7vw,96px)]">
        <NextProject href={href(locale, 'fieldops')} label={t.common.next} name="FieldOps" />
      </section>
    </article>
  );
}
