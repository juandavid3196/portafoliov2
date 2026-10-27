import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { LogitLogo } from '@/components/Logos';
import { ProductShot } from '@/components/mockups/ProductShot';
import { NextProject } from '@/components/project/NextProject';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/work/logit'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'logit', dictionaries[locale].logit.lead);
}

// Case-study headings are serif with one italic phrase, as in the design.
const eyebrow = 'm-0 font-sans text-[11px] font-medium uppercase tracking-[.22em] text-eyebrow';
const h2 =
  'm-0 font-serif text-[clamp(32px,3.7vw,50px)] font-normal leading-[1.08] tracking-[-.015em] text-[#10352f]';
const section = 'wide-container scroll-mt-24 pt-[clamp(56px,6.5vw,92px)]';
const tabIds = ['context', 'contribution', 'decisions', 'learnings'];

type Parts = { l1: string; pre: string; em: string; post: string };

function SerifHeading({
  id,
  h,
  as: Tag = 'h2',
  className = h2,
}: {
  id?: string;
  h: Parts;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <Tag id={id} className={className}>
      <span className="block">{h.l1}</span>
      <span className="block">
        {h.pre}
        <em className="italic">{h.em}</em>
        {h.post}
      </span>
    </Tag>
  );
}

function IconCircle({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span
      className={`grid size-[56px] flex-none place-items-center rounded-full border border-line bg-white/60 text-[#10352f] ${className}`}
    >
      <Icon name={name} size={24} strokeWidth={1.3} />
    </span>
  );
}

export default async function LogitPage() {
  const { locale, t } = await getDictionary();
  const l = t.logit;

  return (
    <article data-wide-page aria-labelledby="lg-h">
      {/* Header */}
      <div className="wide-container pt-[clamp(20px,2.6vw,36px)]">
        <nav aria-label="Breadcrumb" className="font-sans text-[13px] text-eyebrow">
          <Link href={href(locale, 'work')} className="hover:text-brand">
            {l.breadcrumb}
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-ink">Logit</span>
        </nav>
        <Link
          href={href(locale, 'work')}
          className="mt-1 inline-flex min-h-[40px] items-center gap-2 font-sans text-[13px] text-eyebrow hover:text-brand"
        >
          ← {l.backAll}
        </Link>

        <div className="mt-6 grid items-start gap-x-[clamp(32px,4vw,64px)] gap-y-10 min-[1000px]:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)]">
          <div className="flex flex-col gap-6 pt-[clamp(0px,3vw,40px)]">
            <p className={eyebrow}>{l.eyebrow}</p>
            <LogitLogo tagline={l.tagline} />
            <SerifHeading
              as="h1"
              id="lg-h"
              h={l.h}
              className="m-0 font-serif text-[clamp(38px,4.6vw,62px)] font-normal leading-[1.04] tracking-[-.02em] text-[#10352f]"
            />
            <p className="m-0 max-w-[460px] text-pretty font-serif text-[clamp(17px,1.5vw,20px)] leading-[1.45] text-ink-4">
              {l.lead}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#contribution"
                className="inline-flex min-h-[50px] items-center gap-3 rounded-[6px] bg-[#10352f] px-6 font-serif text-[18px] text-ivory transition-colors duration-200 hover:bg-brand-hover hover:text-ivory"
              >
                {l.cta1}
                <Icon name="arrow-down" size={17} strokeWidth={1.6} />
              </a>
              <ButtonLink href={href(locale, 'contact')} variant="secondary" size="card" arrow>
                {l.cta2}
              </ButtonLink>
            </div>
          </div>

          <div>
            <div className="rounded-3xl bg-[#e6f0fb] p-[clamp(16px,2.4vw,34px)]">
              <ProductShot
                src="/images/logit-dashboard.png"
                width={1586}
                height={992}
                alt={t.alt.logit}
                priority
                sizes="(min-width: 1000px) 56vw, 100vw"
              />
            </div>
            <p className="m-0 mt-2 text-right font-sans text-[12px] text-eyebrow">{l.caption}</p>
          </div>
        </div>

        {/* Shipment tracker card */}
        <div className="mx-auto mt-[clamp(16px,2vw,28px)] max-w-[760px] min-[1000px]:ml-auto min-[1000px]:mr-[clamp(0px,2vw,24px)]">
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-[0_18px_40px_-26px_rgba(20,40,35,.35)]">
            <div className="flex items-center gap-3 font-sans text-[13px]">
              <Icon name="calendar" size={22} strokeWidth={1.4} className="text-[#1f5bd8]" />
              <span className="font-semibold text-ink">IMP-0268</span>
              <span className="text-eyebrow">· {l.tracker.client}</span>
            </div>
            <ol className="m-0 mt-4 grid list-none grid-cols-5 p-0">
              {l.tracker.steps.map((s, i) => {
                const last = i === l.tracker.steps.length - 1;
                const done = s.state === 'done';
                const active = s.state === 'active';
                return (
                  <li key={s.t} className="relative flex flex-col items-center text-center">
                    {!last ? (
                      <span
                        aria-hidden="true"
                        className={`absolute left-1/2 top-[7px] h-[2px] w-full ${done ? 'bg-[#1f5bd8]' : 'bg-line'}`}
                      />
                    ) : null}
                    <span
                      className={`relative z-[1] grid size-4 place-items-center rounded-full border-2 ${
                        done
                          ? 'border-[#1f5bd8] bg-[#1f5bd8]'
                          : active
                            ? 'border-[#f08a24] bg-white'
                            : 'border-[#b9c2ba] bg-white'
                      }`}
                    >
                      {done ? <span className="size-[5px] rounded-full bg-white" /> : null}
                      {active ? <span className="size-[6px] rounded-full bg-[#f08a24]" /> : null}
                    </span>
                    <span className="mt-2 font-sans text-[12px] font-medium leading-[1.2] text-ink">{s.t}</span>
                    <span className={`font-sans text-[11px] ${active ? 'text-[#f08a24]' : 'text-eyebrow'}`}>{s.d}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Facts */}
        <div className="mt-[clamp(32px,3.6vw,52px)] border-y border-line py-5">
          <dl className="m-0 grid gap-x-8 gap-y-5 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-4">
            {l.facts.map((f, i) => (
              <div
                key={f.k}
                className={`flex items-center gap-4 ${i > 0 ? 'min-[1000px]:border-l min-[1000px]:border-line min-[1000px]:pl-8' : ''}`}
              >
                <Icon name={f.ic} size={30} strokeWidth={1.3} className="flex-none text-ink" />
                <div>
                  <dt className="font-sans text-[11px] uppercase tracking-[.16em] text-eyebrow">{f.k}</dt>
                  <dd className="m-0 mt-1 font-serif text-[clamp(15px,1.15vw,17px)] text-ink">{f.v}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <p className="m-0 mt-3 text-center font-sans text-[12px] text-eyebrow">{l.factsNote}</p>

        {/* Section tabs */}
        <nav aria-label="Case study" className="mt-8 border-b border-line">
          <ol className="m-0 flex list-none flex-wrap gap-x-9 gap-y-1 p-0">
            {l.tabs.map((label, i) => (
              <li key={label}>
                <a
                  href={`#${tabIds[i]}`}
                  className={`-mb-px inline-flex min-h-[46px] items-center gap-3 border-b-2 font-serif text-[17px] hover:text-brand ${
                    i === 0 ? 'border-[#d4784a] text-ink' : 'border-transparent text-ink-4'
                  }`}
                >
                  <span className={`font-sans text-[13px] ${i === 0 ? 'text-[#d4784a]' : 'text-eyebrow'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* 01 · Context */}
      <section id="context" aria-labelledby="lg-ctx" className={section}>
        <p className={`${eyebrow} mb-5`}>{l.context.eyebrow}</p>
        <div className="grid items-end gap-x-16 gap-y-6 min-[1000px]:grid-cols-[1.1fr_1fr]">
          <SerifHeading id="lg-ctx" h={l.context.h} className={`${h2} text-[clamp(34px,4.2vw,58px)]`} />
          <p className="m-0 max-w-[560px] text-pretty font-serif text-[clamp(17px,1.5vw,20px)] leading-[1.5] text-ink-4">
            {l.context.text}
          </p>
        </div>
        <ul className="m-0 mt-10 grid list-none gap-0 border-t border-line p-0 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
          {l.context.items.map((it, i) => (
            <li
              key={it.t}
              className={`flex items-start gap-5 border-b border-line py-7 min-[1000px]:px-7 ${
                i % 3 === 0 ? 'min-[1000px]:pl-0' : 'min-[1000px]:border-l'
              } ${i % 2 === 1 ? 'min-[640px]:max-[999px]:border-l min-[640px]:max-[999px]:pl-7' : ''}`}
            >
              <IconCircle name={it.ic} />
              <div>
                <h3 className="m-0 font-serif text-[clamp(19px,1.6vw,22px)] font-normal">{it.t}</h3>
                <p className="m-0 mt-1.5 font-serif text-[clamp(15px,1.25vw,17px)] leading-[1.4] text-muted">{it.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 02 · My participation (full-bleed band) */}
      <section
        id="contribution"
        aria-labelledby="lg-con"
        className="mt-[clamp(56px,6.5vw,92px)] scroll-mt-24 bg-[#e5ece5]"
      >
        <div className="wide-container grid gap-x-12 gap-y-10 py-[clamp(36px,4.5vw,64px)] min-[1000px]:grid-cols-[.9fr_1fr_1.05fr]">
          <div>
            <p className={`${eyebrow} mb-5`}>{l.contribution.eyebrow}</p>
            <SerifHeading id="lg-con" h={l.contribution.h} className={`${h2} text-[clamp(34px,4vw,54px)]`} />
          </div>
          <div className="flex flex-col gap-5 min-[1000px]:border-l min-[1000px]:border-line-strong/40 min-[1000px]:pl-10">
            <span className="grid size-[64px] place-items-center rounded-full bg-[#efd9cc] text-[#c4623a]">
              <Icon name={l.contribution.featured.ic} size={28} strokeWidth={1.3} />
            </span>
            <p className="m-0 font-serif text-[22px] text-[#d4784a]">{l.contribution.featured.n}</p>
            <h3 className="m-0 -mt-3 font-serif text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.1] text-[#10352f]">
              {l.contribution.featured.t}
            </h3>
            <p className="m-0 max-w-[360px] font-serif text-[clamp(17px,1.4vw,20px)] leading-[1.45] text-ink-4">
              {l.contribution.featured.d}
            </p>
          </div>
          <ul className="m-0 flex list-none flex-col p-0 min-[1000px]:border-l min-[1000px]:border-line-strong/40 min-[1000px]:pl-10">
            {l.contribution.list.map((it, i) => (
              <li
                key={it.t}
                className={`flex items-center gap-5 py-5 ${i > 0 ? 'border-t border-line-strong/40' : ''}`}
              >
                <IconCircle name={it.ic} className="bg-white/70" />
                <div>
                  <p className="m-0 flex items-baseline gap-3 font-serif text-[clamp(18px,1.5vw,21px)]">
                    <span className="text-[15px] text-[#d4784a]">{it.n}</span>
                    {it.t}
                  </p>
                  <p className="m-0 mt-1 font-serif text-[clamp(15px,1.2vw,17px)] leading-[1.4] text-muted">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 · Technical decisions */}
      <section id="decisions" aria-labelledby="lg-dec" className={section}>
        <p className={`${eyebrow} mb-5 text-[#d4784a]`}>{l.decisions.eyebrow}</p>
        <SerifHeading id="lg-dec" h={l.decisions.h} className={`${h2} text-[clamp(34px,4.2vw,58px)]`} />
        <p className="m-0 mt-4 font-serif text-[clamp(17px,1.5vw,20px)] text-ink-4">{l.decisions.sub}</p>

        <div className="mt-10 grid items-start gap-x-14 gap-y-10 min-[1000px]:grid-cols-[1.05fr_1fr]">
          <figure className="m-0">
            {/* The picture carries its own pale-blue frame */}
            <div className="overflow-hidden rounded-3xl bg-[#e6f0fb]">
              <Image
                src="/images/logit-new-import-hd.png"
                alt={l.decisions.figAlt}
                width={1402}
                height={1122}
                quality={90}
                sizes="(min-width: 1000px) 55vw, 100vw"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 font-sans text-[12px] text-eyebrow">{l.decisions.figCaption}</figcaption>
          </figure>
          <ol className="m-0 flex list-none flex-col gap-9 p-0">
            {l.decisions.items.map((it, i) => (
              <li key={it.t} className={`grid grid-cols-[auto_1fr] gap-x-5 ${i > 0 ? 'border-t border-line pt-9' : ''}`}>
                <span className="font-serif text-[clamp(40px,3.6vw,52px)] leading-none text-[#d4784a]">{it.n}</span>
                <div>
                  <h3 className="m-0 font-serif text-[clamp(24px,2.2vw,30px)] font-normal leading-[1.1] text-[#10352f]">
                    {it.t}
                  </h3>
                  <p className="m-0 mt-3 font-serif text-[clamp(16px,1.35vw,19px)] leading-[1.4] text-ink-3">{it.sub}</p>
                  <p className="m-0 mt-5 font-serif text-[clamp(15px,1.2vw,17px)] leading-[1.5] text-muted">{it.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ul className="m-0 mt-10 grid list-none gap-3 rounded-2xl bg-[#e5ece5] p-3 sm:grid-cols-2">
          {l.decisions.cards.map((c) => (
            <li key={c.t} className="flex items-start gap-5 rounded-xl bg-[#f0f4ef] p-6">
              <IconCircle name={c.ic} className="size-[60px] border-0 bg-[#dbe6dc]" />
              <div>
                <h3 className="m-0 font-serif text-[clamp(20px,1.7vw,24px)] font-normal text-[#10352f]">{c.t}</h3>
                <p className="m-0 mt-2 font-serif text-[clamp(15px,1.2vw,17px)] leading-[1.45] text-muted">{c.d}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-3 grid items-center gap-x-8 gap-y-5 rounded-2xl bg-[#e5ece5] px-7 py-6 min-[1000px]:grid-cols-[auto_auto_1fr]">
          <h3 className="m-0 font-serif text-[clamp(24px,2.2vw,30px)] font-normal text-[#10352f]">
            {l.decisions.system.t}
          </h3>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0 min-[1000px]:border-l min-[1000px]:border-line-strong/40 min-[1000px]:pl-7">
            {l.decisions.system.chips.map((chip) => (
              <li key={chip} className="rounded-full bg-[#d9e4da] px-4 py-1.5 font-sans text-[14px] text-ink-2">
                {chip}
              </li>
            ))}
          </ul>
          <p className="m-0 font-serif text-[clamp(15px,1.2vw,17px)] leading-[1.45] text-muted min-[1000px]:border-l min-[1000px]:border-line-strong/40 min-[1000px]:pl-7">
            {l.decisions.system.d}
          </p>
        </div>
      </section>

      {/* How I worked (dark band) */}
      <section className="mt-[clamp(56px,6.5vw,92px)] bg-[#0d3a32] text-ivory">
        <div className="wide-container py-[clamp(36px,4.5vw,64px)]">
          <div className="grid items-start gap-x-12 gap-y-8 min-[1000px]:grid-cols-[1.1fr_2fr]">
            <div>
              <p className="m-0 mb-5 font-sans text-[11px] font-medium uppercase tracking-[.22em] text-ivory/90">
                {l.how.eyebrow}
              </p>
              <h2 className="m-0 font-serif text-[clamp(32px,3.7vw,50px)] font-normal leading-[1.1] tracking-[-.015em]">
                {l.how.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-3">
              {l.how.steps.map((s) => (
                <li key={s.n} className="border-l border-ivory/30 pl-6">
                  <span className="font-serif text-[22px] text-[#e58a5c]">{s.n}</span>
                  <h3 className="m-0 mt-2 font-serif text-[clamp(20px,1.7vw,24px)] font-normal">{s.t}</h3>
                  <p className="m-0 mt-2 font-serif text-[clamp(15px,1.2vw,17px)] leading-[1.45] text-ivory/80">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className="m-0 mt-8 flex items-center gap-3 border-t border-ivory/20 pt-5 font-sans text-[14px] text-ivory/90">
            <Icon name="sparkle" size={18} strokeWidth={1.4} />
            {l.how.ai}
          </p>
        </div>
      </section>

      {/* 04 · Learnings */}
      <section id="learnings" aria-labelledby="lg-learn" className={section}>
        <div className="grid items-start gap-x-14 gap-y-8 min-[1000px]:grid-cols-[1fr_1.7fr]">
          <div>
            <p className={`${eyebrow} mb-5 text-[#d4784a]`}>{l.learnings.eyebrow}</p>
            <h2 id="lg-learn" className={`${h2} text-[clamp(30px,3.4vw,46px)]`}>
              {l.learnings.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <ul className="m-0 grid list-none gap-7 p-0 sm:grid-cols-3">
            {l.learnings.items.map((it) => (
              <li key={it.t} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-3 flex-none rounded-full bg-[#b6cdb9]" />
                <div>
                  <h3 className="m-0 font-serif text-[clamp(18px,1.5vw,21px)] font-normal leading-[1.25]">{it.t}</h3>
                  <p className="m-0 mt-2 font-serif text-[clamp(15px,1.15vw,16px)] leading-[1.45] text-muted">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="m-0 mt-8 border-t border-line pt-5 font-serif text-[clamp(15px,1.2vw,17px)] text-ink-4">
          {l.learnings.closing}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl bg-[#e5ece5] px-6 py-5">
          <p className="m-0 font-serif text-[clamp(20px,2vw,28px)] text-[#10352f]">{l.learnings.cta.t}</p>
          <a
            href={href(locale, 'contact')}
            className="inline-flex min-h-[46px] items-center gap-2.5 rounded-[6px] bg-[#10352f] px-6 font-serif text-[17px] text-ivory transition-colors duration-200 hover:bg-brand-hover hover:text-ivory"
          >
            {l.learnings.cta.primary}
            <Icon name="arrow-up-right" size={16} strokeWidth={1.6} />
          </a>
          <Link
            href={href(locale, 'work')}
            className="border-l border-line-strong/50 pl-8 font-sans text-[14px] text-ink hover:text-brand"
          >
            {l.learnings.cta.secondary}
          </Link>
        </div>

        <NextProject href="https://bosvia-portal.vercel.app/" label={t.common.next} name="Bosvia" serif className="mt-10" />
      </section>
    </article>
  );
}
