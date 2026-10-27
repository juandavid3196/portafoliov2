import { AppLink } from '@/components/AppLink';
import { Icon } from '@/components/Icon';
import { BosviaMark, FieldOpsMark, LogitLogo } from '@/components/Logos';
import { ProductShot } from '@/components/mockups/ProductShot';
import { site } from '@/config/site';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

const kicker = 'm-0 font-sans text-[11px] font-medium uppercase tracking-[.2em]';

function Chips({ items, tone }: { items: string[]; tone: 'dark' | 'light' }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
      {items.map((c) => (
        <li
          key={c}
          className={`rounded-full border px-4 py-1.5 font-sans text-[14px] ${
            tone === 'dark' ? 'border-ivory/40 text-ivory' : 'border-line-strong/70 text-ink-2'
          }`}
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

// Home "Selected work": three editorial cards (FieldOps, Logit, Bosvia) with the product pictures.
export async function SelectedWork() {
  const { locale, t } = await getDictionary();
  const w = t.home.work;

  return (
    <section aria-labelledby="hw-h" className="wide-container pt-[clamp(56px,7vw,96px)]">
      <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
        <div>
          <p className={`${kicker} text-eyebrow`}>{w.eyebrow}</p>
          <h2
            id="hw-h"
            className="m-0 mt-4 font-serif text-[clamp(40px,5vw,68px)] font-normal leading-[1.02] tracking-[-.02em] text-ink"
          >
            {w.h.pre}
            <em className="italic">{w.h.em}</em>
            {w.h.post}
          </h2>
        </div>
        <p className="m-0 max-w-[400px] font-serif text-[clamp(17px,1.5vw,20px)] leading-[1.4] text-ink-4">{w.side}</p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {/* 01 · FieldOps (dark) */}
        <article className="grid items-center gap-x-[clamp(28px,4vw,64px)] gap-y-9 rounded-[24px] bg-[#0d3a32] p-[clamp(28px,4vw,56px)] text-ivory min-[1000px]:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)]">
          <div className="flex flex-col gap-5">
            <p className={`${kicker} text-ivory/85`}>{w.fieldops.kicker}</p>
            <h3 className="m-0 flex items-center gap-4 font-sans text-[clamp(38px,4vw,54px)] font-bold leading-none tracking-[-.04em]">
              <FieldOpsMark className="size-[1em] flex-none" />
              FieldOps
            </h3>
            <p className="m-0 -mt-2 font-serif text-[clamp(18px,1.6vw,22px)] text-ivory/80">{w.fieldops.cat}</p>
            <p className="m-0 mt-2 max-w-[420px] font-serif text-[clamp(19px,1.7vw,24px)] leading-[1.35] text-ivory">
              {w.fieldops.lead}
            </p>
            <p className="m-0 font-sans text-[14px] text-ivory/80">{w.fieldops.role}</p>
            <Chips items={w.fieldops.chips} tone="dark" />
            <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-3">
              <AppLink
                href={href(locale, 'fieldops')}
                className="inline-flex min-h-[50px] items-center gap-3 rounded-[6px] bg-[#fdf8f1] px-6 font-serif text-[18px] text-ink transition-colors duration-200 hover:bg-white hover:text-ink"
              >
                {w.fieldops.cta}
                <Icon name="arrow-up-right" size={16} strokeWidth={1.6} />
              </AppLink>
              <AppLink
                href={site.fieldops.repoUrl}
                className="border-b border-ivory/50 pb-1 font-serif text-[17px] text-ivory transition-colors duration-200 hover:text-white"
              >
                {t.common.repo} ↗
              </AppLink>
            </div>
            <ul className="m-0 mt-4 grid list-none grid-cols-3 gap-4 border-t border-ivory/20 p-0 pt-6">
              {w.fieldops.features.map((f, i) => (
                <li
                  key={f.t}
                  className={`flex flex-col gap-3 ${i > 0 ? 'border-l border-ivory/20 pl-4' : ''} font-sans text-[13px] leading-[1.25] text-ivory`}
                >
                  <Icon name={f.ic} size={26} strokeWidth={1.3} />
                  {f.t}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 min-[1000px]:[transform:perspective(2200px)_rotateY(-5deg)] min-[1000px]:origin-left">
            <ProductShot src="/images/fieldops-dashboard.png" alt={t.alt.fieldops} sizes="(min-width: 1000px) 62vw, 100vw" />
          </div>
        </article>

        {/* 02 · Logit (light blue, picture on the left) */}
        <article className="grid items-center gap-x-[clamp(28px,4vw,64px)] gap-y-9 rounded-[24px] bg-[#e6f0fb] p-[clamp(28px,4vw,56px)] min-[1000px]:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)]">
          <div className="order-2 min-w-0 min-[1000px]:order-1">
            <ProductShot
              src="/images/logit-dashboard.png"
              width={1586}
              height={992}
              alt={t.alt.logit}
              sizes="(min-width: 1000px) 62vw, 100vw"
            />
            <p className="m-0 mt-3 font-sans text-[12px] text-eyebrow">{w.logit.caption}</p>
          </div>
          <div className="order-1 flex flex-col gap-5 min-[1000px]:order-2">
            <p className={`${kicker} text-eyebrow`}>{w.logit.kicker}</p>
            <LogitLogo />
            <p className="m-0 font-serif text-[clamp(18px,1.6vw,22px)] text-ink-2">{w.logit.cat}</p>
            <p className="m-0 mt-2 max-w-[400px] font-serif text-[clamp(18px,1.55vw,21px)] leading-[1.4] text-ink-3">
              {w.logit.lead}
            </p>
            <p className="m-0 font-sans text-[14px] text-ink-3">{w.logit.role}</p>
            <Chips items={w.logit.chips} tone="light" />
            <AppLink
              href={href(locale, 'logit')}
              className="mt-2 inline-flex min-h-[50px] items-center gap-3 self-start rounded-[6px] border border-brand px-6 font-serif text-[18px] text-brand transition-colors duration-200 hover:bg-brand hover:text-ivory"
            >
              {w.logit.cta}
              <Icon name="arrow-up-right" size={16} strokeWidth={1.6} />
            </AppLink>
            <p className="m-0 mt-3 font-sans text-[13px] text-eyebrow">{w.logit.tags.join(' · ')}</p>
          </div>
        </article>

        {/* 03 · Bosvia (warm) */}
        <article className="grid items-center gap-x-[clamp(28px,4vw,64px)] gap-y-9 rounded-[24px] bg-[#f3ead9] p-[clamp(28px,4vw,56px)] min-[1000px]:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)]">
          <div className="flex flex-col gap-5">
            <p className={`${kicker} flex flex-wrap items-center gap-x-3 text-warm-ink-3`}>
              {w.bosvia.kicker}
              <span className="inline-flex items-center gap-2 normal-case tracking-normal">
                <span className="size-[7px] rounded-full bg-warm-dot" />
                {w.bosvia.status}
              </span>
            </p>
            <h3 className="m-0 flex items-end gap-3 font-serif text-[clamp(40px,4.2vw,58px)] font-normal leading-none tracking-[-.02em] text-[#14213d]">
              <BosviaMark className="h-[1.05em] w-[1.2em] flex-none" />
              Bosvia
            </h3>
            <p className="m-0 font-serif text-[clamp(18px,1.6vw,22px)] text-ink-2">{w.bosvia.cat}</p>
            <p className="m-0 mt-2 max-w-[400px] font-serif text-[clamp(17px,1.4vw,19px)] leading-[1.45] text-warm-ink">
              {w.bosvia.lead}
            </p>
            <Chips items={w.bosvia.chips} tone="light" />
            <AppLink
              href={href(locale, 'bosvia')}
              className="mt-2 inline-flex min-h-[50px] items-center gap-3 self-start rounded-[6px] bg-brand px-6 font-serif text-[18px] text-ivory transition-colors duration-200 hover:bg-brand-hover hover:text-ivory"
            >
              {w.bosvia.cta}
              <Icon name="arrow-up-right" size={16} strokeWidth={1.6} />
            </AppLink>
          </div>
          <div className="min-w-0">
            <ProductShot src="/images/bosvia-panel.png" alt={t.alt.bosvia} warm sizes="(min-width: 1000px) 62vw, 100vw" />
          </div>
        </article>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line pt-5">
        <p className="m-0 font-serif text-[clamp(15px,1.25vw,17px)] text-ink-4">{w.footerLine}</p>
        <AppLink
          href={href(locale, 'approach')}
          className="inline-flex items-center gap-2 font-serif text-[17px] text-ink transition-colors duration-200 hover:text-brand"
        >
          {w.footerLink}
          <Icon name="arrow-right" size={17} strokeWidth={1.6} />
        </AppLink>
      </div>
    </section>
  );
}
