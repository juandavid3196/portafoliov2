import Image from 'next/image';
import { Em } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { PhotoNote } from '@/components/PhotoNote';
import { TextLink } from '@/components/TextLink';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function AboutIntro() {
  const { locale, t } = await getDictionary();
  const h = t.home.aboutH;

  return (
    <section
      aria-labelledby="ha-h"
      className="page-container grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-[clamp(40px,6vw,88px)] gap-y-10 pt-[clamp(72px,9vw,128px)]"
    >
      <figure className="relative m-0">
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/about-camp.png"
            alt={t.alt.camp}
            fill
            sizes="(min-width: 1280px) 560px, (min-width: 900px) 45vw, 100vw"
            className="rounded-2xl object-cover"
          />
        </div>
        <PhotoNote className="left-3.5 top-3.5">{t.common.photoNote}</PhotoNote>
      </figure>
      <div className="flex flex-col gap-[22px]">
        <Eyebrow>{t.home.aboutEyebrow}</Eyebrow>
        <h2
          id="ha-h"
          className="m-0 text-balance font-sans text-[clamp(34px,3.8vw,52px)] font-bold leading-[1.02] tracking-[-.04em]"
        >
          {h.pre}
          <Em>{h.em}</Em>
          {h.post}
        </h2>
        <p className="m-0 text-pretty font-serif text-[20px] leading-[1.5] text-ink-4">{t.home.aboutText}</p>
        <p className="m-0 text-pretty font-serif text-[20px] leading-[1.5] text-ink-4">{t.home.aboutText2}</p>
        <TextLink href={href(locale, 'about')} arrow className="self-start">
          {t.home.aboutLink}
        </TextLink>
      </div>
    </section>
  );
}
