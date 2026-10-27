import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

// The whole home page. Dark hero that starts under the transparent header (-77px) and fills the
// first screen: misty forest photo, glowing ionic column on the right, copy on the left and a
// full-width rule with the tagline and availability at the bottom.
export async function Hero() {
  const { locale, t } = await getDictionary();
  const hero = t.home.hero;

  return (
    <section
      aria-labelledby="home-h"
      data-home-page
      className="relative isolate -mt-[77px] flex min-h-[max(640px,100svh)] flex-col overflow-hidden bg-[#0a2c25] text-ivory"
    >
      {/* Background: forest photo + curves, both decorative */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/hero-forest.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,26,21,.55)_0%,rgba(5,26,21,.25)_55%,rgba(5,26,21,.1)_100%)]" />
        {/* Ionic column: its black background drops out with the screen blend, leaving the glow */}
        {/* The wrapper spans the free space between header and bottom bar; the column is 90% of
            that height and always sits in the vertical middle. */}
        <div className="absolute bottom-[84px] right-[max(clamp(0px,5vw,120px),calc((100%_-_1700px)/2_+_clamp(20px,3vw,56px)))] top-[84px] flex items-center opacity-35 mix-blend-screen max-[899px]:bottom-[190px] max-[899px]:-right-[8%] min-[900px]:opacity-100">
          <div className="relative aspect-[2/3] h-[90%]">
            <Image
              src="/images/hero-column.png"
              alt=""
              fill
              priority
              quality={90}
              sizes="(min-width: 900px) 36vw, 72vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,26,21,.5)_0%,rgba(5,26,21,0)_20%,rgba(5,26,21,0)_70%,rgba(4,22,18,.75)_100%)]" />
      </div>

      <div className="home-container flex w-full flex-1 flex-col justify-center pb-10 pt-[calc(77px+clamp(24px,5vw,56px))]">
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

      <div className="w-full border-t border-ivory/25 bg-[rgba(4,22,18,.55)] backdrop-blur-[2px]">
        <div className="home-container flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5">
          <p className="m-0 font-serif text-[clamp(20px,2.1vw,28px)] leading-[1.2] text-ivory">
            {t.home.band.pre}
            <em className="italic">{t.home.band.em}</em>
            {t.home.band.post}
          </p>
          <p className="m-0 flex items-center gap-3 border-l border-ivory/50 py-2 pl-8 font-sans text-[11px] font-medium uppercase tracking-[.16em] text-ivory">
            <span aria-hidden="true" className="size-2 flex-none rounded-full bg-[#6fbf73]" />
            {t.common.location}
          </p>
        </div>
      </div>
    </section>
  );
}
