import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { Em } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { PhotoNote } from '@/components/PhotoNote';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function Hero() {
  const { locale, t } = await getDictionary();
  const h = t.home.h;

  return (
    <section aria-labelledby="home-h" className="relative overflow-hidden min-[900px]:-mt-[76px]">
      {/* Photo: stacked above the text below 900px, faded behind it from 900px. */}
      <div className="hero-photo relative h-[min(62vw,420px)] min-[900px]:absolute min-[900px]:inset-y-0 min-[900px]:right-0 min-[900px]:h-auto min-[900px]:w-[min(66%,1000px)]">
        <Image
          src="/images/hero-mountains.png"
          alt={t.alt.hero}
          fill
          priority
          sizes="(min-width: 900px) 66vw, 100vw"
          className="object-cover object-[65%_40%] min-[900px]:object-[62%_40%]"
        />
      </div>
      <PhotoNote className="right-4 top-3.5 min-[900px]:right-[clamp(20px,2.6vw,40px)] min-[900px]:top-[96px]">
        {t.common.photoNote}
      </PhotoNote>

      <div className="page-container relative pb-[clamp(40px,5.5vw,84px)] pt-[clamp(24px,5vw,72px)] min-[900px]:pt-[calc(76px+clamp(24px,5vw,72px))]">
        <div className="flex max-w-[720px] flex-col gap-7">
          <Eyebrow>{t.home.eyebrow}</Eyebrow>
          <h1
            id="home-h"
            className="m-0 font-sans text-[clamp(38px,4.45vw,74px)] font-bold leading-[.98] tracking-[-.045em] text-ink"
          >
            <span className="block">{h.l1}</span>
            <span className="block">
              {h.pre}
              <Em>{h.em}</Em>
              {h.post}
            </span>
          </h1>
          <p className="m-0 max-w-[470px] text-pretty font-serif text-[clamp(21px,2vw,26px)] leading-[1.32] text-ink-4">
            {t.home.lead}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href={href(locale, 'work')} size="hero" arrow>
              {t.home.cta1}
            </ButtonLink>
            <ButtonLink href={href(locale, 'contact')} variant="heroSecondary" size="hero">
              {t.home.cta2}
            </ButtonLink>
          </div>
          <p className="m-0 font-sans text-[14px] tracking-[.1em] text-muted">
            {t.home.tech.split(' · ').map((item, i) => (
              <span key={item}>
                {i > 0 ? <span className="mx-3.5">·</span> : null}
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="page-container relative">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 rounded-[10px] border border-line-soft bg-white/70 px-8 py-4 backdrop-blur-[6px]">
          <p className="m-0 border-l border-line-strong pl-7 font-serif text-[clamp(19px,1.8vw,25px)] text-ink-2">
            {t.home.band.pre}
            <em className="font-accent italic text-ink">{t.home.band.em}</em>
            {t.home.band.post}
          </p>
          <p className="m-0 border-l border-line-strong pl-8 font-sans text-[11px] uppercase tracking-[.18em] text-eyebrow">
            {t.common.location}
          </p>
        </div>
      </div>
    </section>
  );
}
