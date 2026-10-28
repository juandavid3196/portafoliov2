import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { DisplayHeading, Em } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { MountainArt } from '@/components/MountainArt';
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

// Timeline circle tints, in the order of t.about.exp.
const expTints = ['bg-[#cfe3d8]', 'bg-[#d6e1ee]', 'bg-[#ecd9c6]'];

export default async function AboutPage() {
  const { locale, t } = await getDictionary();
  const a = t.about;
  const q = a.quality;

  return (
    <>
      {/* 1 · Intro */}
      <section
        aria-labelledby="ab-h"
        className="page-container grid items-start gap-x-[clamp(28px,2.8vw,32px)] gap-y-8 pt-3 min-[900px]:grid-cols-[1fr_1.16fr]"
      >
        <div className="flex flex-col gap-3.5 min-[900px]:pt-[18px]">
          <Eyebrow className="text-[11px]">{a.eyebrow}</Eyebrow>
          <DisplayHeading
            as="h1"
            id="ab-h"
            h={a.h}
            className="mb-3.5 text-[clamp(36px,4.3vw,50px)] leading-[1.02] tracking-[-.045em]"
          />
          {a.paras.map((p) => (
            <p key={p} className="m-0 text-pretty font-serif text-[clamp(17px,1.62vw,19px)] leading-[1.3] text-ink-3">
              {p}
            </p>
          ))}
          <ul className="m-0 mt-1 flex list-none flex-wrap items-center gap-x-[18px] gap-y-1 p-0 font-serif text-[15.5px] text-ink">
            {a.pillars.map((p, i) => (
              <li key={p} className="flex items-center gap-[18px]">
                {i > 0 ? <span aria-hidden="true">·</span> : null}
                {p}
              </li>
            ))}
          </ul>
          <span className="mt-3 block h-px w-9 bg-line-strong" />
          <p className="m-0 font-serif text-[17px] text-muted">{a.outsideLine}</p>
        </div>
        <figure className="m-0 flex flex-col gap-2.5">
          <div className="relative aspect-[7/5]">
            <Image
              src="/images/about-hiker-ridge.png"
              alt={t.alt.aboutCamp}
              fill
              priority
              sizes="(min-width: 1440px) 720px, (min-width: 900px) 52vw, 100vw"
              className="rounded-[14px] object-cover object-[50%_58%]"
            />
          </div>
          <figcaption className="font-serif text-[15px] text-muted">{a.caption}</figcaption>
        </figure>
      </section>

      {/* 2 · Experience: full-bleed band with a connected timeline */}
      <section
        aria-labelledby="ab-e"
        className="mt-6 bg-[linear-gradient(110deg,#e3ece5,#e9f0ea)]"
      >
        <div className="page-container py-[clamp(24px,3vw,35px)]">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div className="flex flex-col gap-2.5">
              <Eyebrow className="text-[11px]">{a.expEyebrow}</Eyebrow>
              <DisplayHeading
                id="ab-e"
                h={a.expH}
                className="text-[clamp(32px,3.9vw,45px)] leading-none tracking-[-.04em]"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="m-0 flex items-center gap-3 font-sans text-[12px] uppercase tracking-[.22em] text-eyebrow">
                <Icon name="file" size={26} className="text-brand" />
                {a.cv}
              </p>
              <div className="flex items-center gap-5">
                {(['en', 'es'] as const).map((l, i) => (
                  <div key={l} className="flex items-center gap-5">
                    {i > 0 ? <span aria-hidden="true" className="h-7 w-px bg-ink" /> : null}
                    <a
                      href={site.cv[l]}
                      download
                      className="flex flex-col gap-1.5 font-serif text-[20px] text-brand transition-colors duration-200 hover:text-brand-link"
                    >
                      <span className="flex items-center gap-2.5 border-b border-brand pb-[3px]">
                        {a.cvLangs[l]}
                        <Icon name="download" size={20} strokeWidth={1.8} />
                      </span>
                      <span className="font-sans text-[11px] uppercase tracking-[.22em] text-muted">PDF</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* No dates: none are confirmed. */}
          <ol className="relative m-0 ml-[clamp(0px,8.6vw,100px)] flex list-none flex-col gap-6 p-0">
            <span aria-hidden="true" className="absolute bottom-[26px] left-[25px] top-[26px] w-px bg-[#c3d3c8]" />
            {a.exp.map((e, i) => (
              <li key={e.t} className="relative flex flex-wrap items-center gap-x-[clamp(20px,3.3vw,38px)] gap-y-3">
                <span
                  className={`relative grid size-[52px] flex-none place-items-center rounded-full text-brand ${expTints[i]}`}
                >
                  <Icon name={e.ic} size={22} />
                </span>
                <div className="w-[min(100%,260px)] flex-none">
                  <h3 className="m-0 font-sans text-[20px] font-semibold leading-[1.15] tracking-[-.02em]">{e.t}</h3>
                  <p className="m-0 font-serif text-[18px] text-ink-4">{e.r}</p>
                </div>
                <p className="m-0 max-w-[430px] flex-[1_1_260px] border-l border-line-strong py-1.5 pl-[clamp(16px,3vw,35px)] font-serif text-[18px] leading-[1.3] text-ink-3">
                  {e.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 · What quality means to me */}
      <section aria-labelledby="ab-q" className="relative overflow-hidden">
        <div className="page-container grid gap-x-[clamp(24px,2.2vw,26px)] gap-y-10 pb-[clamp(104px,10.5vw,122px)] pt-[clamp(48px,5vw,58px)] min-[1000px]:grid-cols-[1fr_2.14fr]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow className="text-[11px]">{q.eyebrow}</Eyebrow>
            <h2
              id="ab-q"
              className="m-0 font-sans text-[clamp(30px,3.2vw,37px)] font-bold leading-[1.1] tracking-[-.04em]"
            >
              <span className="block">{q.l1}</span>
              <span className="block">
                <Em>{q.q1}</Em>
                {q.mid}
                <Em>{q.q2}</Em>
                {q.end}
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] gap-x-6 gap-y-7 p-0">
              {q.items.map((item, i) => (
                <li key={item.t} className="flex flex-col gap-2">
                  <span className="mb-3 block h-px w-[82%] bg-line-strong" />
                  <span className="font-serif text-[15px] text-brand">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="m-0 font-sans text-[clamp(18px,1.6vw,19px)] font-semibold tracking-[-.02em]">
                    {item.t}
                  </h3>
                  <p className="m-0 font-serif text-[16px] leading-[1.3] text-muted">{item.d}</p>
                </li>
              ))}
            </ol>
            <ButtonLink href={href(locale, 'contact')} size="cta" arrow className="self-end">
              {t.home.cta2}
            </ButtonLink>
          </div>
        </div>
        <MountainArt className="pointer-events-none absolute bottom-0 left-0 h-[clamp(90px,10vw,116px)] w-[min(70%,1000px)] [-webkit-mask-image:linear-gradient(to_right,#000_50%,transparent)] [mask-image:linear-gradient(to_right,#000_50%,transparent)]" />
      </section>

      {/* 4 · Builder */}
      <section
        aria-labelledby="ab-b"
        className="page-container grid items-start gap-x-[clamp(28px,3.8vw,44px)] gap-y-8 pt-[clamp(32px,4vw,46px)] min-[900px]:grid-cols-[1.22fr_1fr]"
      >
        <figure className="m-0 flex flex-col gap-2.5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[600px]">
            <Image
              src="/images/about-hiker-sunset.png"
              alt={t.alt.builder}
              fill
              sizes="(min-width: 1000px) 600px, 100vw"
              className="rounded-[14px] object-cover"
            />
          </div>
          <figcaption className="font-serif text-[15px] text-muted">{a.bCaption}</figcaption>
        </figure>
        <div className="flex flex-col gap-[18px]">
          <Eyebrow className="text-[11px]">{a.bEyebrow}</Eyebrow>
          <DisplayHeading
            id="ab-b"
            h={a.bH}
            className="text-balance text-[clamp(44px,7.4vw,86px)] leading-[.92] tracking-[-.05em]"
          />
          <p className="m-0 -mt-1.5 font-serif text-[clamp(18px,1.65vw,19px)] text-ink-2">{a.bSub}</p>
          <div className="mt-2 flex flex-col gap-[18px]">
            {a.bParas.map((p) => (
              <p
                key={p}
                className="m-0 text-pretty font-serif text-[clamp(17px,1.55vw,18px)] leading-[1.33] text-ink-4"
              >
                {p}
              </p>
            ))}
          </div>
          <p className="m-0 mt-2 font-serif text-[16px] text-muted">{a.bLast}</p>
        </div>
      </section>

      {/* 5 · Quote (full-bleed) */}
      <section className="mt-10 bg-[linear-gradient(110deg,#e3ece5,#e9f0ea)]">
        <blockquote className="page-container m-0 flex items-stretch gap-[clamp(20px,3vw,35px)] py-[clamp(24px,2.8vw,32px)]">
          <span
            aria-hidden="true"
            className="w-[clamp(56px,7.4vw,86px)] flex-none border-r border-[#9dbfa5] pl-[clamp(16px,2.4vw,28px)] font-serif text-[clamp(44px,4.4vw,51px)] font-bold leading-[.9] text-[#7fa88f]"
          >
            “
          </span>
          <p className="m-0 text-balance font-serif text-[clamp(28px,4.2vw,49px)] leading-[1.2] tracking-[-.02em] text-ink">
            {a.quote.pre}
            <em className="italic">{a.quote.em}</em>
            {a.quote.post}
          </p>
        </blockquote>
      </section>

      {/* 6 · Outside the screen */}
      <section aria-labelledby="ab-o" className="page-container pt-[clamp(24px,3vw,35px)]">
        <div className="grid items-center gap-x-[clamp(24px,3vw,35px)] gap-y-8 min-[900px]:grid-cols-[1.08fr_1fr]">
          <div className="relative min-h-[clamp(130px,13vw,151px)]">
            <DisplayHeading
              id="ab-o"
              h={a.oH}
              className="relative z-[1] text-[clamp(38px,4.2vw,49px)] leading-[.98] tracking-[-.045em]"
            />
            <MountainArt trees className="absolute bottom-0 left-0 h-[clamp(80px,8.5vw,99px)] w-full" />
          </div>
          <p className="m-0 max-w-[500px] border-l border-line-strong py-2 pl-[clamp(20px,3.6vw,42px)] font-serif text-[clamp(18px,1.65vw,19px)] leading-[1.33] text-ink-4">
            {a.outside}
          </p>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line-strong pt-5">
          <p className="m-0 font-serif text-[clamp(18px,1.7vw,20px)] text-brand">{a.closing}</p>
          <TextLink href={href(locale, 'work')} arrow>
            {a.closingLink}
          </TextLink>
        </div>
      </section>
    </>
  );
}
