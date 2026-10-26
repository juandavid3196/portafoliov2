import { Em } from './DisplayHeading';
import { Icon } from './Icon';

type Step = { ic: string; t: string; d: string };

type ProcessRingProps = {
  steps: Step[];
  center: { pre: string; em: string; post: string };
  centerLines: string[];
  aiChip: string;
  aiSteps: string;
};

// Clockwise positions (% of the 1160×660 box) and tints for the six steps.
const layout = [
  { x: '12.9%', y: '0%', bg: 'bg-peach', chip: 'bg-peach-chip' },
  { x: '56%', y: '0%', bg: 'bg-sage', chip: 'bg-sage-chip' },
  { x: '69%', y: '39.8%', bg: 'bg-sky', chip: 'bg-sky-chip' },
  { x: '56%', y: '79.7%', bg: 'bg-lavender', chip: 'bg-lavender-chip' },
  { x: '12.9%', y: '79.7%', bg: 'bg-peach', chip: 'bg-peach-chip' },
  { x: '0%', y: '39.8%', bg: 'bg-sage', chip: 'bg-sage-chip' },
];

const num = (i: number) => String(i + 1).padStart(2, '0');

export function ProcessRing({ steps, center, centerLines, aiChip, aiSteps }: ProcessRingProps) {
  return (
    <>
      {/* ≥1120px: circular composition */}
      <div className="relative mx-auto mt-14 hidden aspect-[1160/660] w-full max-w-[1160px] min-[1120px]:block">
        <svg
          viewBox="0 0 1160 660"
          preserveAspectRatio="none"
          fill="none"
          stroke="#084d46"
          strokeWidth="1.4"
          aria-hidden="true"
          className="absolute inset-0 size-full"
        >
          <ellipse cx="580" cy="330" rx="400" ry="262" />
          <g strokeLinecap="round" strokeLinejoin="round">
            <path d="M572 62 L584 68 L572 74" />
            <path d="M588 586 L576 592 L588 598" />
            <path d="M974 230 L980 242 L988 230" />
            <path d="M172 430 L180 418 L186 430" />
          </g>
        </svg>

        <div className="absolute left-[33.6%] top-[19%] flex aspect-square w-[32.8%] flex-col items-center justify-center gap-3 rounded-full border border-dashed border-line-mid bg-ivory p-[6%] text-center">
          <Icon name="sprout" size={40} strokeWidth={1.2} className="text-brand" />
          <h2 className="m-0 font-sans text-[clamp(28px,2.8vw,40px)] font-bold leading-none tracking-[-.04em]">
            {center.pre}
            <Em>{center.em}</Em>
            {center.post}
          </h2>
          <div className="flex flex-col font-serif text-[18px] leading-[1.45] text-ink-4">
            {centerLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <span className="h-px w-9 bg-line-mid" />
          <span className="inline-flex items-center gap-2.5 rounded-full bg-sage px-4 py-[7px] font-sans text-[13px] text-brand">
            <span className="flex gap-1">
              <span className="size-[7px] rounded-full bg-brand" />
              <span className="size-[7px] rounded-full bg-brand" />
            </span>
            {aiChip}
          </span>
          <span className="font-serif text-[15px] tracking-[.04em] text-muted">{aiSteps}</span>
        </div>

        <ol className="m-0 list-none p-0">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className={`absolute flex min-h-[20%] w-[31%] items-center gap-[18px] rounded-full px-[26px] py-[18px] shadow-[0_1px_0_rgba(20,23,21,.04)] ${layout[i].bg}`}
              style={{ left: layout[i].x, top: layout[i].y }}
            >
              <span className={`grid size-16 flex-none place-items-center rounded-full text-ink ${layout[i].chip}`}>
                <Icon name={s.ic} size={26} />
              </span>
              <div>
                <span className="font-serif text-[15px] text-ink-4">{num(i)}</span>
                <h3 className="m-0 mb-1 mt-0.5 font-sans text-[22px] font-bold tracking-[-.025em]">{s.t}</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.35] text-ink-4">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* <1120px: centre block, then a vertical sequence on a green rail */}
      <div className="mt-10 flex flex-col gap-7 min-[1120px]:hidden">
        <div className="flex flex-col items-center gap-2.5 rounded-[20px] border border-dashed border-line-mid p-7 text-center">
          <Icon name="sprout" size={34} strokeWidth={1.2} className="text-brand" />
          <h2 className="m-0 font-sans text-[32px] font-bold tracking-[-.04em]">
            {center.pre}
            <Em>{center.em}</Em>
            {center.post}
          </h2>
          <p className="m-0 font-serif text-[17px] text-ink-4">{centerLines.join(' · ')}</p>
          <span className="rounded-full bg-sage px-4 py-[7px] font-sans text-[13px] text-brand">
            {aiChip} · {aiSteps}
          </span>
        </div>
        <ol className="m-0 flex list-none flex-col gap-3 border-l-[1.4px] border-brand p-0 pl-5">
          {steps.map((s, i) => (
            <li key={s.t} className={`relative flex items-center gap-4 rounded-[20px] px-5 py-4 ${layout[i].bg}`}>
              <span
                aria-hidden="true"
                className="absolute -left-[27px] top-1/2 -mt-1.5 size-3 rounded-full border-[1.4px] border-brand bg-ivory"
              />
              <span className={`grid size-12 flex-none place-items-center rounded-full ${layout[i].chip}`}>
                <Icon name={s.ic} size={22} />
              </span>
              <div>
                <span className="font-serif text-[14px] text-ink-4">{num(i)}</span>
                <h3 className="m-0 mb-0.5 font-sans text-[20px] font-bold">{s.t}</h3>
                <p className="m-0 font-serif text-[16px] text-ink-4">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
