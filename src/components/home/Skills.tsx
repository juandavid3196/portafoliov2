import { Em } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { SkillsDiagram } from '@/components/SkillsDiagram';
import { getDictionary } from '@/i18n/server';

// One marker colour per row on the rail. No percentage bars or scores, by design.
const dots = ['#9cc3e6', '#9dbfa5', '#f0be96', '#b9c9bd', '#b7aee0', '#9cc3e6'];

export async function Skills() {
  const { t } = await getDictionary();
  const s = t.skills;

  return (
    <section aria-labelledby="hs-h" className="page-container pt-[clamp(72px,9vw,128px)]">
      <Eyebrow className="mb-4">{s.eyebrow}</Eyebrow>
      <h2
        id="hs-h"
        className="m-0 font-sans text-[clamp(32px,3.7vw,52px)] font-bold leading-none tracking-[-.04em]"
      >
        <span className="block">{s.h.l1}</span>
        <span className="block">
          {s.h.pre}
          <Em>{s.h.em}</Em>
          {s.h.post}
        </span>
      </h2>
      <p className="m-0 mt-[18px] font-serif text-[clamp(19px,1.7vw,23px)] text-muted">{s.sub}</p>

      <div className="mt-12 flex flex-wrap items-center gap-x-[clamp(40px,5vw,72px)] gap-y-12">
        <SkillsDiagram main={s.main} mainDesc={s.mainDesc} add={s.add} addDesc={s.addDesc} />

        <ol className="m-0 flex-[1_1_480px] list-none border-l border-[#c9d3e6] p-0 pl-7">
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
              <div className="flex flex-[0_0_220px] items-baseline gap-3.5">
                <span className="font-serif text-[14px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="m-0 font-sans text-[clamp(22px,2vw,28px)] font-bold tracking-[-.03em]">{row.t}</h3>
              </div>
              <div className="flex-[1_1_260px] border-l border-line-soft pl-6">
                <p className="m-0 font-serif text-[20px] text-ink">{row.tools}</p>
                <p className="m-0 mt-1 font-serif text-[17px] text-muted">{row.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-[18px] rounded-xl bg-peach px-7 py-6">
        <Icon name="sparkle" size={30} strokeWidth={1.3} className="text-sparkle" />
        <span className="font-sans text-[12px] uppercase tracking-[.2em] text-eyebrow">{s.ai}</span>
        <span className="flex-auto font-serif text-[clamp(26px,2.6vw,34px)] text-ink">Claude / Skills / MCP</span>
        <span className="font-serif text-[18px] text-ink-4">{s.aiLine}</span>
      </div>

      <div className="mb-5 mt-10 flex items-center gap-[18px]">
        <Eyebrow className="whitespace-nowrap">{s.applied}</Eyebrow>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-8 gap-y-5">
        {s.appliedList.map((a) => (
          <div key={a.n} className="border-r border-line-soft pr-6">
            <p className="m-0 font-serif text-[24px]">{a.n}</p>
            <p className="m-0 mt-1 font-serif text-[17px] text-muted">{a.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
