import type { Metadata } from 'next';
import Image from 'next/image';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { PhotoNote } from '@/components/PhotoNote';
import { TextLink } from '@/components/TextLink';
import { site } from '@/config/site';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/about'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'about', dictionaries[locale].about.paras[0]);
}

export default async function AboutPage() {
  const { locale, t } = await getDictionary();
  const a = t.about;

  return (
    <>
      {/* 1 · Intro */}
      <section
        aria-labelledby="ab-h"
        className="page-container grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-x-[clamp(40px,5vw,72px)] gap-y-10 pt-[clamp(40px,6vw,72px)]"
      >
        <div className="flex flex-col gap-[22px]">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <DisplayHeading
            as="h1"
            id="ab-h"
            h={a.h}
            className="text-[clamp(42px,5.4vw,76px)] leading-[.98] tracking-[-.045em]"
          />
          {a.paras.map((p) => (
            <p key={p} className="m-0 text-pretty font-serif text-[20px] leading-[1.5] text-ink-3">
              {p}
            </p>
          ))}
          <ul className="m-0 flex list-none flex-wrap gap-x-[22px] gap-y-2 p-0">
            {a.pillars.map((p) => (
              <li key={p} className="flex items-center gap-2.5 font-serif text-[17px] text-ink">
                <span className="size-[5px] rounded-full bg-brand" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <figure className="m-0 flex flex-col gap-3">
          <div className="relative">
            <div className="relative aspect-[7/5]">
              <Image
                src="/images/about-camp.png"
                alt={t.alt.aboutCamp}
                fill
                priority
                sizes="(min-width: 1280px) 560px, (min-width: 900px) 45vw, 100vw"
                className="rounded-[14px] object-cover"
              />
            </div>
            <PhotoNote className="left-3.5 top-3.5">{t.common.photoNote}</PhotoNote>
          </div>
          <figcaption className="font-serif text-[16px] text-muted">{a.caption}</figcaption>
        </figure>
      </section>

      {/* 2 · Experience (full-bleed) */}
      <section aria-labelledby="ab-e" className="mt-[clamp(56px,7vw,96px)] bg-sage">
        <div className="page-container py-[clamp(40px,5vw,64px)]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div className="flex flex-col gap-3.5">
              <Eyebrow>{a.expEyebrow}</Eyebrow>
              <DisplayHeading
                id="ab-e"
                h={a.expH}
                className="text-[clamp(32px,3.8vw,52px)] leading-none tracking-[-.04em]"
              />
            </div>
            {site.cvUrl ? (
              <TextLink href={site.cvUrl} arrow>
                {a.cv}
              </TextLink>
            ) : (
              <span className="font-serif text-[17px] text-ink-4">{a.cvMissing}</span>
            )}
          </div>
          {/* No dates: none are confirmed. */}
          <ol className="m-0 flex list-none flex-col p-0">
            {a.exp.map((e) => (
              <li
                key={e.t}
                className="flex flex-wrap items-center gap-x-8 gap-y-3.5 border-t border-[#ccdacf] py-[18px]"
              >
                <div className="flex flex-[0_1_360px] items-center gap-[18px]">
                  <span className="grid size-[50px] flex-none place-items-center rounded-full bg-ivory text-brand">
                    <Icon name={e.ic} size={22} />
                  </span>
                  <div>
                    <h3 className="m-0 font-sans text-[20px] font-semibold tracking-[-.02em]">{e.t}</h3>
                    <p className="m-0 mt-0.5 font-serif text-[17px] text-ink-4">{e.r}</p>
                  </div>
                </div>
                <p className="m-0 flex-[1_1_360px] border-l border-[#b9c9bd] pl-7 font-serif text-[18px] leading-[1.45] text-ink-3">
                  {e.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 · Builder */}
      <section
        aria-labelledby="ab-b"
        className="page-container grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-x-[clamp(40px,5vw,72px)] gap-y-10 pt-[clamp(64px,8vw,112px)]"
      >
        <figure className="m-0 flex flex-col gap-3">
          <div className="relative">
            <div className="relative aspect-square">
              <Image
                src="/images/builder.png"
                alt={t.alt.builder}
                fill
                sizes="(min-width: 1280px) 560px, (min-width: 900px) 45vw, 100vw"
                className="rounded-[14px] object-cover"
              />
            </div>
            <PhotoNote className="left-3.5 top-3.5">{t.common.photoNote}</PhotoNote>
          </div>
          <figcaption className="font-serif text-[16px] text-muted">{a.bCaption}</figcaption>
        </figure>
        <div className="flex flex-col gap-5">
          <Eyebrow>{a.bEyebrow}</Eyebrow>
          <DisplayHeading
            id="ab-b"
            h={a.bH}
            className="text-balance text-[clamp(42px,5.4vw,80px)] leading-[.96] tracking-[-.045em]"
          />
          <p className="m-0 font-serif text-[21px] text-ink-2">{a.bSub}</p>
          {a.bParas.map((p) => (
            <p key={p} className="m-0 text-pretty font-serif text-[19px] leading-[1.52] text-ink-4">
              {p}
            </p>
          ))}
          <p className="m-0 font-serif text-[17px] text-ink">{a.bLast}</p>
        </div>
      </section>

      {/* 4 · Quote (full-bleed) */}
      <section className="mt-[clamp(48px,6vw,80px)] bg-sage">
        <blockquote className="page-container m-0 flex gap-[clamp(20px,3vw,40px)] py-[clamp(36px,5vw,64px)]">
          <span
            aria-hidden="true"
            className="border-r border-[#9dbfa5] pr-[clamp(16px,2.4vw,32px)] font-serif text-[72px] leading-[.8] text-[#7fa88f]"
          >
            “
          </span>
          <p className="m-0 text-balance font-serif text-[clamp(28px,3.8vw,52px)] leading-[1.15] tracking-[-.02em] text-ink">
            {a.quote.pre}
            <em className="italic">{a.quote.em}</em>
            {a.quote.post}
          </p>
        </blockquote>
      </section>

      {/* 5 · Outside the screen */}
      <section aria-labelledby="ab-o" className="page-container pt-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-x-[clamp(40px,6vw,88px)] gap-y-8">
          <div className="relative pb-10">
            <DisplayHeading
              id="ab-o"
              h={a.oH}
              className="relative z-[1] text-[clamp(40px,4.6vw,62px)] leading-[.98] tracking-[-.045em]"
            />
            <svg
              viewBox="0 0 600 120"
              preserveAspectRatio="none"
              fill="none"
              stroke="#afc3b4"
              strokeWidth="1"
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[90px] w-full"
            >
              <path d="M0 112 L70 96 L110 104 L170 66 L205 84 L262 34 L300 66 L332 54 L384 88 L436 44 L478 74 L520 62 L560 92 L600 86" />
              <path d="M262 34 L276 72 L292 98 M436 44 L446 82 L462 104 M170 66 L182 94" />
            </svg>
          </div>
          <div className="flex flex-col gap-5 border-l border-line-mid pl-[clamp(0px,3vw,40px)]">
            <p className="m-0 pl-6 font-serif text-[20px] leading-[1.5] text-ink-4">{a.outside}</p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0 pl-6">
              {a.interests.map((x) => (
                <li key={x} className="rounded-full bg-sage px-3.5 py-[7px] font-sans text-[14px] text-brand">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-line-strong pt-7">
          <p className="m-0 font-serif text-[clamp(20px,2vw,24px)] text-brand">{a.closing}</p>
          <TextLink href={href(locale, 'work')} arrow>
            {a.closingLink}
          </TextLink>
        </div>
      </section>
    </>
  );
}
