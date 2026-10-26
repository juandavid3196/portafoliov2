import type { Metadata } from 'next';
import { ButtonLink } from '@/components/Button';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { site } from '@/config/site';
import { dictionaries, hasLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/contact'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'contact', dictionaries[locale].contact.lead);
}

const row =
  'flex min-h-[60px] items-center justify-between border-b border-[#c6d6ca] font-serif text-[21px] text-ink';

export default async function ContactPage() {
  const { t } = await getDictionary();
  const c = t.contact;

  return (
    <section aria-labelledby="ct-h" className="page-container pt-[clamp(40px,6vw,80px)]">
      <Eyebrow className="mb-[18px]">{c.eyebrow}</Eyebrow>
      <DisplayHeading
        as="h1"
        id="ct-h"
        h={c.h}
        className="text-balance text-[clamp(42px,6vw,84px)] leading-[.98] tracking-[-.045em]"
      />
      <p className="m-0 mt-[22px] max-w-[640px] text-pretty font-serif text-[clamp(19px,1.7vw,23px)] leading-[1.42] text-ink-4">
        {c.lead}
      </p>

      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-5">
        {/* Only a real mailto: there is no form backend, so no fake "sent" states. */}
        <div className="flex flex-col justify-between gap-7 rounded-[18px] bg-brand p-[clamp(28px,3.4vw,44px)] text-ivory">
          <Eyebrow tone="onGreen">{c.write}</Eyebrow>
          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3.5 break-all border-b border-on-green-line pb-1.5 font-serif text-[clamp(24px,3vw,38px)] text-ivory hover:text-white"
            >
              <Icon name="mail" size={28} strokeWidth={1.3} className="flex-none" />
              {site.email}
            </a>
          ) : (
            <>
              <p className="m-0 font-serif text-[21px] leading-[1.45] text-[#e6efeb]">{c.noEmail}</p>
              <ButtonLink href={site.github} variant="ivory" size="action" icon="git" className="self-start">
                github.com/{site.githubHandle} ↗
              </ButtonLink>
            </>
          )}
        </div>

        <div className="flex flex-col rounded-[18px] bg-sage p-[clamp(28px,3.4vw,44px)]">
          <Eyebrow className="mb-3">{c.channels}</Eyebrow>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${row} hover:text-brand`}
          >
            GitHub
            <span className="text-[16px] text-ink-4">{site.githubHandle} ↗</span>
          </a>
          {site.linkedin ? (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${row} hover:text-brand`}
            >
              LinkedIn
              <span className="text-[16px] text-ink-4">↗</span>
            </a>
          ) : null}
          {site.cvUrl ? (
            <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className={`${row} hover:text-brand`}>
              {c.cv}
              <span className="text-[16px] text-ink-4">PDF ↗</span>
            </a>
          ) : (
            <div className={row}>
              {c.cv}
              <span className="text-[16px] text-ink-4">{c.cvMissing}</span>
            </div>
          )}
          <dl className="m-0 mt-6 flex flex-col gap-2.5">
            {c.avail.map((item) => (
              <div key={item.k} className="grid grid-cols-[130px_1fr] gap-3">
                <dt className="pt-1 font-sans text-[12px] uppercase tracking-[.14em] text-eyebrow">{item.k}</dt>
                <dd className="m-0 font-serif text-[18px]">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
