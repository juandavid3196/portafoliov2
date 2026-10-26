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

// Clockwise positions (% of the 1250×570 box) and tints for the six steps.
const layout = [
  { x: '12.1%', y: '0%', bg: 'bg-peach', chip: 'bg-peach-chip' },
  { x: '58%', y: '0%', bg: 'bg-sage', chip: 'bg-sage-chip' },
  { x: '70.2%', y: '36.5%', bg: 'bg-[#e8eefb]', chip: 'bg-[#d6dff5]' },
  { x: '59.9%', y: '75.4%', bg: 'bg-lavender', chip: 'bg-lavender-chip' },
  { x: '11.2%', y: '75.4%', bg: 'bg-peach', chip: 'bg-peach-chip' },
  { x: '0%', y: '36.5%', bg: 'bg-sage', chip: 'bg-sage-chip' },
];

const num = (i: number) => String(i + 1).padStart(2, '0');

// Ellipse of the flow line and the six arrowheads, one in each gap between steps.
const BOX = { w: 1250, h: 570 };
const E = { cx: 625, cy: 285, rx: 508, ry: 262 };
const arrowAngles = [0, 70, 120, 180, 240, 290];

const arrows = arrowAngles.map((deg) => {
  const t = (deg * Math.PI) / 180;
  const x = E.cx + E.rx * Math.sin(t);
  const y = E.cy - E.ry * Math.cos(t);
  const rot = (Math.atan2(E.ry * Math.sin(t), E.rx * Math.cos(t)) * 180) / Math.PI;
  return { x, y, rot };
});

export function ProcessRing({ steps, center, centerLines, aiChip, aiSteps }: ProcessRingProps) {
  return (
    <>
      {/* ≥1120px: circular composition */}
      <div className="relative mx-auto mt-[clamp(44px,5.4vw,80px)] hidden aspect-[1250/570] w-full max-w-[1270px] min-[1120px]:block">
        <svg
          viewBox={`0 0 ${BOX.w} ${BOX.h}`}
          preserveAspectRatio="none"
          fill="none"
          stroke="#0d4d47"
          strokeWidth="1.4"
          aria-hidden="true"
          className="absolute inset-0 size-full"
        >
          <ellipse cx={E.cx} cy={E.cy} rx={E.rx} ry={E.ry} />
          {arrows.map((a, i) => (
            <path
              key={i}
              d="M-6 -5 L3 0 L-6 5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(${a.x.toFixed(1)} ${a.y.toFixed(1)}) rotate(${a.rot.toFixed(1)})`}
            />
          ))}
        </svg>

        <div className="absolute left-[33.4%] top-[14.9%] flex aspect-square w-[33%] flex-col items-center justify-center gap-3.5 rounded-full border border-dashed border-line-mid bg-ivory p-[5%] text-center">
          <Icon name="sprout" size={44} strokeWidth={1.2} className="text-brand" />
          <h2 className="m-0 font-sans text-[clamp(28px,3.1vw,44px)] font-bold leading-none tracking-[-.04em]">
            {center.pre}
            <Em>{center.em}</Em>
            {center.post}
          </h2>
          <div className="flex flex-col font-serif text-[clamp(16px,1.5vw,20px)] leading-[1.35] text-ink-4">
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
          <span className="font-serif text-[clamp(13px,1.15vw,15px)] tracking-[.04em] text-muted">{aiSteps}</span>
        </div>

        <ol className="m-0 list-none p-0">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className={`absolute flex h-[24%] w-[30%] items-center gap-[clamp(14px,1.6vw,22px)] rounded-full pl-[clamp(20px,2.3vw,32px)] pr-[clamp(16px,2vw,28px)] shadow-[0_1px_0_rgba(20,23,21,.04)] ${layout[i].bg}`}
              style={{ left: layout[i].x, top: layout[i].y }}
            >
              <span
                className={`grid size-[clamp(56px,5.8vw,78px)] flex-none place-items-center rounded-full text-ink ${layout[i].chip}`}
              >
                <Icon name={s.ic} size={30} strokeWidth={1.4} />
              </span>
              <div className="min-w-0">
                <span className="font-serif text-[clamp(13px,1.1vw,15px)] text-ink-4">{num(i)}</span>
                <h3 className="m-0 mb-1.5 mt-1 font-sans text-[clamp(20px,1.95vw,26px)] font-bold tracking-[-.025em]">
                  {s.t}
                </h3>
                <p className="m-0 font-serif text-[clamp(15px,1.4vw,18.5px)] leading-[1.25] text-ink-4">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* <1120px: centre block, then a vertical sequence on a green rail */}
      <div className="mt-12 flex flex-col gap-8 min-[1120px]:hidden">
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
