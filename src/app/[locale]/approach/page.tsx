import type { Metadata } from 'next';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { MountainArt } from '@/components/MountainArt';
import { ProcessRing } from '@/components/ProcessRing';
import { TextLink } from '@/components/TextLink';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

// Icon-circle tints for the three principles.
const principleTints = ['bg-[#e4ede6]', 'bg-[#e4ecf8]', 'bg-[#f8eadd]'];

export async function generateMetadata({ params }: PageProps<'/[locale]/approach'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'approach', dictionaries[locale].approach.sub);
}

export default async function ApproachPage() {
  const { locale, t } = await getDictionary();
  const a = t.approach;

  return (
    <section aria-labelledby="ap-h" className="page-container relative pb-[clamp(90px,10vw,116px)] pt-[clamp(32px,4.2vw,49px)]">
      <Eyebrow className="mb-5 text-[11px]">{a.eyebrow}</Eyebrow>
      <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
        <DisplayHeading
          as="h1"
          id="ap-h"
          h={a.h}
          className="text-[clamp(38px,4.5vw,52px)] leading-[1.04] tracking-[-.045em]"
        />
        <p className="m-0 border-l border-line-strong pl-5 font-sans text-[12px] uppercase leading-[1.9] tracking-[.18em] text-eyebrow">
          {a.side1}
          <br />
          {a.side2}
        </p>
      </div>
      <p className="m-0 mt-7 text-pretty font-serif text-[clamp(19px,1.8vw,21px)] text-muted">{a.sub}</p>

      <ProcessRing
        steps={a.ring}
        center={a.center}
        centerLines={a.centerLines}
        aiChip={a.aiChip}
        aiSteps={a.aiSteps}
      />


      <ul className="m-0 mt-[clamp(44px,5.4vw,63px)] grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-y-6 p-0">
        {a.principles.map((p, i) => (
          <li
            key={p.t}
            className={`flex items-center gap-5 py-1 min-[960px]:px-[clamp(16px,2vw,23px)] min-[960px]:first:pl-[clamp(8px,1.2vw,14px)] ${
              i < a.principles.length - 1 ? 'min-[960px]:border-r min-[960px]:border-line-strong/50' : ''
            }`}
          >
            <span
              className={`grid size-[clamp(60px,5.7vw,66px)] flex-none place-items-center rounded-full text-brand ${principleTints[i]}`}
            >
              <Icon name={p.ic} size={28} strokeWidth={1.3} />
            </span>
            <div>
              <h3 className="m-0 mb-2.5 font-serif text-[clamp(19px,1.7vw,20px)] font-normal">{p.t}</h3>
              <p className="m-0 font-serif text-[clamp(16px,1.45vw,17px)] leading-[1.3] text-muted">{p.d}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="relative z-[1] mt-[clamp(44px,5.4vw,63px)] flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-[#c7cce0] pt-9">
        <DisplayHeading
          as="p"
          h={{ pre: a.closing.pre, em: a.closing.em, post: a.closing.post }}
          className="text-[clamp(26px,2.7vw,31px)] tracking-[-.04em]"
        />
        <TextLink href={href(locale, 'work')} size="sm" arrow>
          {a.closingLink}
        </TextLink>
      </div>
      <MountainArt
        tone="teal"
        className="pointer-events-none absolute bottom-0 right-0 h-[clamp(70px,8vw,93px)] w-[min(58%,860px)] [-webkit-mask-image:linear-gradient(to_left,#000_45%,transparent)] [mask-image:linear-gradient(to_left,#000_45%,transparent)]"
      />
    </section>
  );
}
