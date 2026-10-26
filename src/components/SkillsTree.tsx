import { MountainArt } from './MountainArt';
import { AddCircle, MainCircle, TypeScriptJoin } from './SkillsDiagram';

type Row = { t: string; tools: string; d: string };

type SkillsTreeProps = {
  rows: Row[];
  main: string;
  mainDesc: string;
  add: string;
  addDesc: string;
};

// Row marker colours, one per row.
const dots = ['#9cc3e6', '#9dbfa5', '#f0be96', '#b9c9bd', '#b7aee0', '#9cc3e6'];

const ROW_H = 112;
const H = ROW_H * 6;
const center = (i: number) => ROW_H / 2 + ROW_H * i;
const SPINE = 56;
const W = 110;

// Desktop (≥1024px): circles on the left, a connector tree, and six aligned rows.
// Geometry is fixed (row height 112px) so the SVG connectors line up with each row.
export function SkillsTree({ rows, main, mainDesc, add, addDesc }: SkillsTreeProps) {
  return (
    <div className="relative hidden min-[1024px]:grid min-[1024px]:grid-cols-[minmax(250px,.36fr)_110px_1fr]">
      {/* Circles */}
      <div className="relative" style={{ height: H }}>
        <MountainArt
          tone="teal"
          className="pointer-events-none absolute -left-[8%] bottom-[-34px] z-[2] h-[120px] w-[118%]"
        />
        <div
          className="absolute left-1/2 w-[min(100%,310px)] -translate-x-1/2 -translate-y-1/2"
          style={{ top: center(1) }}
        >
          <MainCircle label={main} desc={mainDesc} />
        </div>
        <TypeScriptJoin
          className="absolute left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
          style={{ top: (center(1) + center(4)) / 2 }}
        />
        <div
          className="absolute left-1/2 w-[min(94%,300px)] -translate-x-1/2 -translate-y-1/2"
          style={{ top: center(4) }}
        >
          <AddCircle label={add} desc={addDesc} />
        </div>
      </div>

      {/* Connectors */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height={H}
        fill="none"
        stroke="#c3cfe6"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d={`M${SPINE} ${center(0)} V${center(5)}`} />
        {rows.map((_, i) => (
          <path key={i} d={`M${SPINE} ${center(i)} H${W - 8}`} />
        ))}
        <path d={`M0 ${center(1)} H${SPINE}`} />
        <path d={`M0 ${center(4)} H${SPINE}`} />
        <circle cx="0" cy={center(1)} r="4.5" fill="#9dbfa5" stroke="none" />
        <circle cx="0" cy={center(4)} r="4.5" fill="#9cc3e6" stroke="none" />
        {rows.map((_, i) => (
          <circle key={i} cx={W - 8} cy={center(i)} r="6" fill={dots[i]} stroke="none" />
        ))}
      </svg>

      {/* Rows */}
      <ol className="m-0 list-none p-0">
        {rows.map((row, i) => (
          <li
            key={row.t}
            className="flex items-center border-b border-line-soft"
            style={{ height: ROW_H }}
          >
            <div className="relative w-[min(36%,300px)] flex-none">
              <span className="absolute -top-[18px] left-0 font-serif text-[13px] text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="m-0 ml-[10px] font-sans text-[clamp(22px,2.1vw,24px)] font-bold tracking-[-.03em]">
                {row.t}
              </h3>
            </div>
            <div className="border-l border-line-strong/60 pl-8">
              <p className="m-0 font-serif text-[clamp(18px,1.75vw,20px)] leading-[1.2] text-ink">{row.tools}</p>
              <p className="m-0 mt-1 font-serif text-[clamp(15px,1.3vw,15px)] leading-[1.25] text-muted">{row.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
