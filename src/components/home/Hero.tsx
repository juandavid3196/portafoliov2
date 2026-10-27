import { ButtonLink } from '@/components/Button';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { HeroBackdrop } from './HeroBackdrop';

// Dark hero. It starts under the transparent header (-76px) and fills the first screen.
export async function Hero() {
  const { locale, t } = await getDictionary();
  const hero = t.home.hero;

  return (
    <section
      aria-labelledby="home-h"
      data-wide-page
      className="relative isolate -mt-[77px] flex min-h-[max(640px,100svh)] flex-col overflow-hidden bg-[#0a2c25] text-ivory"
    >
      <HeroBackdrop />

      <div className="wide-container flex w-full flex-1 flex-col justify-center pb-10 pt-[calc(77px+clamp(24px,5vw,56px))]">
        <div className="flex max-w-[760px] flex-col gap-6">
          <p className="m-0 font-sans text-[12px] font-medium uppercase tracking-[.22em] text-ivory">{hero.eyebrow}</p>
          <h1
            id="home-h"
            className="m-0 font-serif text-[clamp(44px,6.1vw,88px)] font-normal leading-[1.02] tracking-[-.02em] text-ivory [text-shadow:0_2px_24px_rgba(0,0,0,.25)]"
          >
            {hero.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block italic text-[#f2976b]">{hero.em}</span>
          </h1>
          <p className="m-0 max-w-[520px] text-pretty font-sans text-[clamp(18px,1.7vw,22px)] leading-[1.45] text-ivory/95">
            {hero.lead}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href={href(locale, 'work')} variant="onDark" size="hero" arrow>
              {t.home.cta1}
            </ButtonLink>
            <a
              href={href(locale, 'contact')}
              className="border-b border-[#f2976b] pb-1 font-serif text-[19px] text-ivory transition-colors duration-200 hover:text-white"
            >
              {t.home.cta2}
            </a>
          </div>
          <p className="m-0 mt-1 font-sans text-[13px] tracking-[.14em] text-ivory/85">
            {t.home.tech.split(' · ').map((item, i) => (
              <span key={item}>
                {i > 0 ? <span className="mx-3">·</span> : null}
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="w-full border-t border-ivory/35">
        <div className="wide-container flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6">
          <p className="m-0 font-serif text-[clamp(20px,2.1vw,28px)] leading-[1.2] text-ivory">
            {t.home.band.pre}
            <em className="italic">{t.home.band.em}</em>
            {t.home.band.post}
          </p>
          <p className="m-0 border-l border-ivory/60 py-2 pl-8 font-sans text-[11px] font-medium uppercase tracking-[.16em] text-ivory">
            {t.common.location}
          </p>
        </div>
      </div>
    </section>
  );
}
