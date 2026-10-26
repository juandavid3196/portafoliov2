type CircleProps = { label: string; desc: string };

const bracket = 'M34 4 C22 4 28 20 8 20 C28 20 22 36 34 36';

export function MainCircle({ label, desc }: CircleProps) {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center rounded-full bg-sage-circle p-8 text-center">
      <span className="font-sans text-[12px] uppercase tracking-[.22em] text-eyebrow">{label}</span>
      <span className="mt-3 font-sans text-[clamp(44px,4.6vw,64px)] font-bold leading-[.95] tracking-[-.05em]">
        Angular
      </span>
      <span className="font-sans text-[34px] font-bold leading-[.9] text-brand">+</span>
      <span className="font-sans text-[clamp(44px,4.6vw,64px)] font-bold leading-[.95] tracking-[-.05em]">.NET</span>
      <span className="mt-3.5 max-w-[220px] font-serif text-[17px] leading-[1.25] text-ink-4">{desc}</span>
    </div>
  );
}

export function AddCircle({ label, desc }: CircleProps) {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center rounded-full bg-sky-circle p-7 text-center">
      <span className="font-sans text-[11px] uppercase tracking-[.2em] text-eyebrow">{label}</span>
      <span className="mt-2.5 font-sans text-[clamp(38px,4.2vw,58px)] font-bold leading-[.95] tracking-[-.05em]">
        React
      </span>
      <span className="font-sans text-[28px] font-bold leading-[.9] text-brand">+</span>
      <span className="font-sans text-[clamp(38px,4.2vw,58px)] font-bold leading-[.95] tracking-[-.05em]">
        Node.js
      </span>
      <span className="mt-3 max-w-[200px] font-serif text-[16px] leading-[1.25] text-ink-4">{desc}</span>
    </div>
  );
}

// "‹ TypeScript ›" joining the two stacks.
export function TypeScriptJoin({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={style} role="img" aria-label="TypeScript">
      <svg viewBox="0 0 40 40" width="34" height="34" fill="none" stroke="#9cc3e6" strokeWidth="1.4" aria-hidden="true">
        <path d={bracket} />
        <circle cx="34" cy="4" r="3" fill="#9cc3e6" />
        <circle cx="34" cy="36" r="3" fill="#9cc3e6" />
      </svg>
      <span className="rounded-lg px-2.5 py-1 font-sans text-[26px] font-bold tracking-[-.03em] text-brand">
        TypeScript
      </span>
      <svg
        viewBox="0 0 40 40"
        width="34"
        height="34"
        fill="none"
        stroke="#9cc3e6"
        strokeWidth="1.4"
        aria-hidden="true"
        className="-scale-x-100"
      >
        <path d={bracket} />
        <circle cx="34" cy="4" r="3" fill="#9cc3e6" />
        <circle cx="34" cy="36" r="3" fill="#9cc3e6" />
      </svg>
    </div>
  );
}

type SkillsDiagramProps = { main: string; mainDesc: string; add: string; addDesc: string };

// Stacked version (below 1024px): the two circles joined by TypeScript.
export function SkillsDiagram({ main, mainDesc, add, addDesc }: SkillsDiagramProps) {
  return (
    <div className="mx-auto flex w-full max-w-[380px] flex-col items-center">
      <div className="w-[min(100%,360px)]">
        <MainCircle label={main} desc={mainDesc} />
      </div>
      <TypeScriptJoin className="relative z-[1] -my-1.5 rounded-lg bg-ivory" />
      <div className="w-[min(86%,300px)]">
        <AddCircle label={add} desc={addDesc} />
      </div>
    </div>
  );
}
