import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { TextLink } from '@/components/TextLink';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function ProcessShort() {
  const { locale, t } = await getDictionary();

  return (
    <section aria-labelledby="hp-h" className="page-container pt-[clamp(72px,9vw,104px)]">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div className="flex flex-col gap-4">
          <Eyebrow>{t.home.processEyebrow}</Eyebrow>
          <DisplayHeading
            id="hp-h"
            h={t.home.processH}
            className="text-[clamp(34px,3.8vw,44px)] leading-none tracking-[-.04em]"
          />
        </div>
        <TextLink href={href(locale, 'approach')} arrow>
          {t.home.processLink}
        </TextLink>
      </div>
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-6 gap-y-7 p-0">
        {t.home.steps.map((step, i) => (
          <li key={step} className="flex flex-col gap-2.5 border-t border-line-mid pt-4">
            <span className="font-serif text-[17px] text-brand">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-sans text-[22px] font-semibold tracking-[-.02em]">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
