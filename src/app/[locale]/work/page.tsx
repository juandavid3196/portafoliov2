import type { Metadata } from 'next';
import { ButtonLink } from '@/components/Button';
import { DisplayHeading } from '@/components/DisplayHeading';
import { EyebrowRule } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { BosviaMark } from '@/components/Logos';
import { MockBosvia } from '@/components/mockups/MockBosvia';
import { MockFieldOps } from '@/components/mockups/MockFieldOps';
import { MockLogit } from '@/components/mockups/MockLogit';
import { TextLink } from '@/components/TextLink';
import { site } from '@/config/site';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/work'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'work', dictionaries[locale].work.sub);
}

export default async function WorkPage() {
  const { locale, t } = await getDictionary();
  const { fieldops, logit, bosvia } = t.projects;

  return (
    <section aria-labelledby="w-h" className="page-container pt-[clamp(20px,2.2vw,28px)]">
      <EyebrowRule>{t.work.eyebrow}</EyebrowRule>
      <DisplayHeading
        as="h1"
        id="w-h"
        h={t.work.h}
        className="text-[clamp(36px,4.25vw,66px)] leading-[.98] tracking-[-.045em]"
      />
      <p className="m-0 mt-3 font-serif text-[clamp(19px,1.85vw,24px)] text-ink-4">{t.work.sub}</p>

      {/* FieldOps */}
      <article className="mt-7 flex flex-wrap items-center gap-x-9 gap-y-9 rounded-[28px] bg-sky p-[clamp(20px,2.3vw,30px)]">
        <div className="flex max-w-[385px] flex-[0_1_385px] flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3 font-sans text-[13px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#dcebdf] px-3.5 py-[7px] font-medium text-brand">
              <Icon name="box" size={15} strokeWidth={1.6} />
              {t.common.independent}
            </span>
            <span className="inline-flex items-center gap-[7px] text-eyebrow">
              <span className="size-[7px] rounded-full bg-subtle" />
              {t.common.inDev}
            </span>
          </div>
          <h2 className="m-0 font-sans text-[clamp(40px,4.4vw,60px)] font-bold leading-none tracking-[-.045em]">
            FieldOps
          </h2>
          <p className="m-0 font-serif text-[21px] leading-[1.38] text-ink-2">{fieldops.desc}</p>
          <p className="m-0 font-sans text-[14px] tracking-[.06em] text-eyebrow">{fieldops.stack}</p>
          <p className="m-0 flex items-center gap-3 border-t border-[#c9d6e2] pt-[18px] font-serif text-[18px] text-ink-2">
            <Icon name="user" size={20} />
            {fieldops.role}
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <ButtonLink href={href(locale, 'fieldops')} size="cardLg" arrow>
              {t.common.explore}
            </ButtonLink>
            <TextLink href={site.fieldops.repoUrl} tone="ink" arrow>
              {t.common.repo}
            </TextLink>
          </div>
        </div>
        <div className="min-w-0 flex-[1_1_480px]">
          <MockFieldOps badge={t.mock.illustrative} />
        </div>
      </article>

      <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-5">
        {/* Logit */}
        <article className="flex flex-wrap items-center gap-x-3 gap-y-7 rounded-[28px] bg-sky p-[clamp(20px,2.3vw,30px)] min-[900px]:pr-[18px]">
          <div className="flex flex-[0_0_205px] flex-col gap-4">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#d7e7f5] px-3.5 py-[7px] font-sans text-[13px] font-medium text-brand">
              <Icon name="file" size={15} strokeWidth={1.6} />
              {t.common.professional}
            </span>
            <h2 className="m-0 font-sans text-[clamp(36px,3.4vw,48px)] font-bold leading-none tracking-[-.045em]">
              Logit
            </h2>
            <p className="m-0 font-serif text-[21px] text-ink-2">{t.work.logitLead}</p>
            <p className="m-0 font-serif text-[17px] leading-[1.45] text-ink-4">{logit.desc}</p>
            <p className="m-0 font-sans text-[13px] tracking-[.05em] text-eyebrow">{logit.stack}</p>
            <ButtonLink href={href(locale, 'logit')} size="compact" className="self-start">
              {t.common.caseStudy} ↗
            </ButtonLink>
          </div>
          <div className="min-w-0 flex-[1_1_300px] min-[900px]:-mr-1">
            <MockLogit badge={t.mock.notReal} tilt="soft" />
          </div>
        </article>

        {/* Bosvia */}
        <article className="flex flex-wrap items-center gap-x-3 gap-y-7 rounded-[28px] bg-peach p-[clamp(20px,2.3vw,30px)] min-[900px]:pr-[18px]">
          <div className="flex flex-[0_0_205px] flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f3dfcb] px-3.5 py-[7px] font-sans text-[13px] font-medium text-warm-accent">
                <Icon name="chart" size={15} strokeWidth={1.6} />
                {t.common.venture}
              </span>
              <span className="inline-flex items-center gap-[7px] font-sans text-[13px] text-warm-ink-2">
                <span className="size-[7px] rounded-full bg-[#b9a48f]" />
                {t.common.inDev}
              </span>
            </div>
            <h2 className="m-0 flex items-end gap-3 font-serif text-[clamp(40px,3.8vw,54px)] font-normal leading-none tracking-[-.02em] text-[#14213d]">
              <BosviaMark className="h-[1.15em] w-[1.3em] flex-none" />
              Bosvia
            </h2>
            <p className="m-0 font-serif text-[19px] leading-[1.4] text-ink-2">{bosvia.cat}</p>
            <p className="m-0 font-sans text-[13px] tracking-[.05em] text-warm-ink-2">{bosvia.stack}</p>
            <TextLink href={href(locale, 'bosvia')} tone="ink" className="self-start" arrow>
              {t.common.discover}
            </TextLink>
          </div>
          <div className="min-w-0 flex-[1_1_300px] min-[900px]:-mr-1">
            <MockBosvia badge={t.mock.concept} tilt="strong" />
          </div>
        </article>
      </div>

      {/* Earlier work: no links, no pages exist for these. */}
      <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-line py-[22px]">
        <h2 className="m-0 flex-[0_0_200px] font-serif text-[24px] font-normal">{t.work.earlier}</h2>
        {t.work.earlierList.map((e) => (
          <div key={e.t} className="flex flex-[1_1_280px] items-center gap-4 border-l border-line pl-6">
            <Icon name={e.ic} size={26} strokeWidth={1.3} className="text-ink-2" />
            <div>
              <p className="m-0 font-serif text-[19px]">{e.t}</p>
              <p className="m-0 mt-0.5 font-serif text-[16px] text-muted">
                {e.org} · {t.common.professional}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
