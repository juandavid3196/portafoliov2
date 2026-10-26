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
    <section aria-labelledby="home-h" className="relative overflow-hidden">
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
      <PhotoNote className="right-4 top-3.5 min-[900px]:right-[clamp(20px,4vw,48px)] min-[900px]:top-5">
        {t.common.photoNote}
      </PhotoNote>

      <div className="page-container relative pb-[clamp(40px,6vw,96px)] pt-[clamp(24px,7vw,110px)]">
        <div className="flex max-w-[600px] flex-col gap-7">
          <Eyebrow>{t.home.eyebrow}</Eyebrow>
          <h1
            id="home-h"
            className="m-0 font-sans text-[clamp(46px,6.4vw,88px)] font-bold leading-[.98] tracking-[-.045em] text-ink"
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
          <p className="m-0 font-sans text-[14px] tracking-[.08em] text-muted">{t.home.tech}</p>
        </div>
      </div>

      <div className="page-container relative">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 rounded-[10px] border border-line-soft bg-white/70 px-8 py-[22px] backdrop-blur-[6px]">
          <p className="m-0 border-l border-line-strong pl-7 font-serif text-[clamp(20px,2vw,26px)] text-ink-2">
            {t.home.band.pre}
            <em className="font-accent italic text-ink">{t.home.band.em}</em>
            {t.home.band.post}
          </p>
          <p className="m-0 font-sans text-[12px] uppercase tracking-[.16em] text-eyebrow">{t.common.location}</p>
        </div>
      </div>
    </section>
  );
}
