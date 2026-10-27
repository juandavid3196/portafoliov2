import type { Metadata } from 'next';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { ProductShot } from '@/components/mockups/ProductShot';
import { BackLink } from '@/components/project/BackLink';
import { NextProject } from '@/components/project/NextProject';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/work/logit'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'logit', dictionaries[locale].logit.lead);
}

export default async function LogitPage() {
  const { locale, t } = await getDictionary();
  const l = t.logit;

  return (
    <article data-wide-page aria-labelledby="lg-h">
      <div className="wide-container pt-[clamp(32px,5vw,58px)]">
        <BackLink href={href(locale, 'work')}>{t.common.back}</BackLink>
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-x-[clamp(40px,6vw,70px)] gap-y-10">
          <div className="flex flex-col gap-[22px]">
            <Eyebrow>{l.eyebrow}</Eyebrow>
            <DisplayHeading
              as="h1"
              id="lg-h"
              h={l.h}
              className="text-[clamp(36px,4.1vw,48px)] leading-[.98] tracking-[-.045em]"
            />
            <p className="m-0 text-pretty font-serif text-[clamp(19px,1.7vw,20px)] leading-[1.42] text-ink-4">
              {l.lead}
            </p>
            <p className="m-0 font-sans text-[14px] tracking-[.06em] text-eyebrow">{t.projects.logit.stack}</p>
          </div>
          <div className="rounded-3xl bg-sky p-[clamp(18px,3vw,35px)]">
            <ProductShot src="/images/logit-dashboard.png" width={1586} height={992} alt={t.alt.logit} priority />
          </div>
        </div>
        {/* Logit is a company product: the page states ownership and that no real data is shown. */}
        <p className="m-0 mt-8 flex items-start gap-3.5 rounded-xl border border-line bg-white px-[22px] py-[18px] font-serif text-[17px] leading-[1.45] text-ink-4">
          <Icon name="shield" size={20} strokeWidth={1.5} className="mt-0.5 flex-none text-brand" />
          {l.disclaimer}
        </p>
      </div>

      <section aria-labelledby="lg-c" className="wide-container pt-[clamp(64px,8vw,93px)]">
        <Eyebrow className="mb-4">{l.contribEyebrow}</Eyebrow>
        <DisplayHeading
          id="lg-c"
          h={l.contribH}
          className="mb-9 text-[clamp(32px,3.4vw,39px)] leading-[1.04] tracking-[-.04em]"
        />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-12 p-0">
          {l.contrib.map((c, i) => (
            <li key={c.t} className="flex items-start gap-5 border-t border-line-soft py-6">
              <span className="pt-1 font-serif text-[15px] text-brand">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="m-0 font-sans text-[20px] font-semibold tracking-[-.02em]">{c.t}</h3>
                <p className="m-0 mt-1.5 font-serif text-[18px] leading-[1.45] text-muted">{c.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="wide-container pt-[clamp(56px,7vw,81px)]">
        <NextProject href={href(locale, 'bosvia')} label={t.common.next} name="Bosvia" serif />
      </section>
    </article>
  );
}
