import type { Metadata } from 'next';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { MountainArt } from '@/components/MountainArt';
import { SkillsDiagram } from '@/components/SkillsDiagram';
import { SkillsTree } from '@/components/SkillsTree';
import { TextLink } from '@/components/TextLink';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/skills'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'skills', dictionaries[locale].skills.sub);
}

// Row marker colours for the stacked (mobile) list. No percentage bars or scores, by design.
const dots = ['#9cc3e6', '#9dbfa5', '#f0be96', '#b9c9bd', '#b7aee0', '#9cc3e6'];

export default async function SkillsPage() {
  const { locale, t } = await getDictionary();
  const s = t.skills;

  return (
    <>
      <section aria-labelledby="sk-h" className="page-container pt-[clamp(20px,2.4vw,32px)]">
        <Eyebrow className="text-[11px]">{s.eyebrow}</Eyebrow>
        <DisplayHeading
          as="h1"
          id="sk-h"
          h={s.h}
          className="mt-3 text-[clamp(40px,5.5vw,84px)] leading-[.98] tracking-[-.045em]"
        />
        <p className="m-0 mt-3 font-serif text-[clamp(19px,1.9vw,26px)] text-muted">{s.sub}</p>

        <div className="mt-3">
          {/* ≥1024px: circles + connector tree + aligned rows */}
          <SkillsTree rows={s.rows} main={s.main} mainDesc={s.mainDesc} add={s.add} addDesc={s.addDesc} />

          {/* <1024px: stacked diagram, then the list on a rail */}
          <div className="flex flex-col gap-12 min-[1024px]:hidden">
            <SkillsDiagram main={s.main} mainDesc={s.mainDesc} add={s.add} addDesc={s.addDesc} />
            <ol className="m-0 list-none border-l border-[#c9d3e6] p-0 pl-7">
              {s.rows.map((row, i) => (
                <li
                  key={row.t}
                  className="relative flex flex-wrap items-center gap-x-8 gap-y-2 border-b border-line-soft py-[22px]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[33px] top-1/2 -mt-1 size-[9px] rounded-full"
                    style={{ background: dots[i] }}
                  />
                  <div className="flex flex-[0_0_200px] items-baseline gap-3.5">
                    <span className="font-serif text-[14px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="m-0 font-sans text-[24px] font-bold tracking-[-.03em]">{row.t}</h3>
                  </div>
                  <div className="flex-[1_1_240px] border-l border-line-soft pl-5">
                    <p className="m-0 font-serif text-[19px] text-ink">{row.tools}</p>
                    <p className="m-0 mt-1 font-serif text-[16px] text-muted">{row.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* AI in the workflow */}
        <div className="mt-8 grid items-center rounded-lg bg-peach min-[900px]:grid-cols-[auto_auto_1fr_auto]">
          <div className="px-6 pt-5 min-[900px]:py-4">
            <Icon name="sparkle" size={34} strokeWidth={1.3} className="text-sparkle" />
          </div>
          <span className="px-6 pb-1 font-sans text-[12px] uppercase tracking-[.2em] text-eyebrow min-[900px]:border-l min-[900px]:border-ink/10 min-[900px]:py-4 min-[900px]:pb-4">
            {s.ai}
          </span>
          <span className="px-6 py-2 font-serif text-[clamp(26px,2.7vw,38px)] text-ink [word-spacing:.2em] min-[900px]:text-center">
            Claude / Skills / MCP
          </span>
          <span className="px-6 pb-5 font-serif text-[17px] text-ink-4 min-[900px]:border-l min-[900px]:border-ink/10 min-[900px]:py-4 min-[900px]:pl-8 min-[900px]:pr-8">
            {s.aiLine}
          </span>
        </div>

        {/* Applied in projects */}
        <div className="mb-4 mt-8 flex items-center gap-[18px]">
          <Eyebrow className="whitespace-nowrap text-[11px]">{s.applied}</Eyebrow>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="grid items-end gap-x-8 gap-y-5 min-[900px]:grid-cols-[1fr_1fr_1fr_auto]">
          {s.appliedList.map((a, i) => (
            <div
              key={a.n}
              className={`pr-6 ${i < s.appliedList.length - 1 ? 'min-[900px]:border-r min-[900px]:border-line-soft' : ''}`}
            >
              <p className="m-0 font-serif text-[clamp(21px,2vw,27px)]">{a.n}</p>
              <p className="m-0 mt-1 font-serif text-[16px] text-muted">{a.d}</p>
            </div>
          ))}
          <TextLink href={href(locale, 'work')} arrow className="justify-self-start min-[900px]:justify-self-end">
            {s.exploreProjects}
          </TextLink>
        </div>
      </section>

      <MountainArt
        tone="teal"
        className="pointer-events-none mt-4 block h-[clamp(60px,8vw,110px)] w-full"
      />
    </>
  );
}
