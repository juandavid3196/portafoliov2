import type { Metadata } from 'next';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { ProcessRing } from '@/components/ProcessRing';
import { TextLink } from '@/components/TextLink';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/approach'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'approach', dictionaries[locale].approach.sub);
}

export default async function ApproachPage() {
  const { locale, t } = await getDictionary();
  const a = t.approach;

  return (
    <section aria-labelledby="ap-h" className="page-container pt-[clamp(40px,6vw,72px)]">
      <Eyebrow className="mb-[18px]">{a.eyebrow}</Eyebrow>
      <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
        <DisplayHeading
          as="h1"
          id="ap-h"
          h={a.h}
          className="text-[clamp(36px,4.25vw,66px)] leading-[.98] tracking-[-.045em]"
        />
        <p className="m-0 border-l border-line-strong pl-5 font-sans text-[12px] uppercase leading-[1.9] tracking-[.18em] text-eyebrow">
          {a.side1}
          <br />
          {a.side2}
        </p>
      </div>
      <p className="m-0 mt-5 text-pretty font-serif text-[clamp(19px,1.7vw,23px)] text-muted">{a.sub}</p>

      <ProcessRing
        steps={a.ring}
        center={a.center}
        centerLines={a.centerLines}
        aiChip={a.aiChip}
        aiSteps={a.aiSteps}
      />

      <p className="mx-auto mt-10 max-w-[720px] text-balance text-center font-serif text-[18px] leading-[1.5] text-ink-4">
        {a.aiNote}
      </p>

      <ul className="m-0 mt-12 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6 p-0">
        {a.principles.map((p) => (
          <li key={p.t} className="flex items-start gap-5 border-r border-line py-2 pr-6">
            <span className="grid size-16 flex-none place-items-center rounded-full bg-sage text-brand">
              <Icon name={p.ic} size={26} strokeWidth={1.3} />
            </span>
            <div>
              <h3 className="m-0 mb-1.5 mt-1 font-serif text-[22px] font-normal">{p.t}</h3>
              <p className="m-0 font-serif text-[17px] leading-[1.4] text-muted">{p.d}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-t border-line-mid pt-7">
        <DisplayHeading
          as="p"
          h={{ pre: a.closing.pre, em: a.closing.em, post: a.closing.post }}
          className="text-[clamp(28px,3.2vw,42px)] tracking-[-.04em]"
        />
        <TextLink href={href(locale, 'work')} size="xs" arrow>
          {a.closingLink}
        </TextLink>
      </div>
    </section>
  );
}
