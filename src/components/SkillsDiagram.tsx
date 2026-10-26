type SkillsDiagramProps = {
  main: string;
  mainDesc: string;
  add: string;
  addDesc: string;
};

const bracket = 'M34 4 C22 4 28 20 8 20 C28 20 22 36 34 36';

// Two overlapping-depth circles (main focus + additional experience) joined by TypeScript.
export function SkillsDiagram({ main, mainDesc, add, addDesc }: SkillsDiagramProps) {
  return (
    <div className="mx-auto flex w-full flex-[0_1_380px] flex-col items-center">
      <div className="flex aspect-square w-[min(100%,360px)] flex-col items-center justify-center rounded-full bg-sage-circle p-8 text-center">
        <span className="font-sans text-[12px] uppercase tracking-[.22em] text-eyebrow">{main}</span>
        <span className="mt-3 font-sans text-[clamp(44px,5vw,64px)] font-bold leading-[.95] tracking-[-.05em]">
          Angular
        </span>
        <span className="font-sans text-[34px] font-bold leading-[.9] text-brand">+</span>
        <span className="font-sans text-[clamp(44px,5vw,64px)] font-bold leading-[.95] tracking-[-.05em]">.NET</span>
        <span className="mt-3.5 max-w-[220px] font-serif text-[17px] text-ink-4">{mainDesc}</span>
      </div>

      <div className="relative z-[1] -my-1.5 flex items-center gap-3" role="img" aria-label="TypeScript">
        <svg viewBox="0 0 40 40" width="34" height="34" fill="none" stroke="#9cc3e6" strokeWidth="1.4" aria-hidden="true">
          <path d={bracket} />
          <circle cx="34" cy="4" r="3" fill="#9cc3e6" />
          <circle cx="34" cy="36" r="3" fill="#9cc3e6" />
        </svg>
        <span className="rounded-lg bg-ivory px-2.5 py-1 font-sans text-[26px] font-bold tracking-[-.03em] text-brand">
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

      <div className="flex aspect-square w-[min(86%,300px)] flex-col items-center justify-center rounded-full bg-sky-circle p-7 text-center">
        <span className="font-sans text-[11px] uppercase tracking-[.2em] text-eyebrow">{add}</span>
        <span className="mt-2.5 font-sans text-[clamp(34px,3.8vw,46px)] font-bold leading-[.95] tracking-[-.05em]">
          React
        </span>
        <span className="font-sans text-[26px] font-bold leading-[.9] text-brand">+</span>
        <span className="font-sans text-[clamp(34px,3.8vw,46px)] font-bold leading-[.95] tracking-[-.05em]">
          Node.js
        </span>
        <span className="mt-3 max-w-[200px] font-serif text-[16px] text-ink-4">{addDesc}</span>
      </div>
    </div>
  );
}
