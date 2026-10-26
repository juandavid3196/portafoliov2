const tones = {
  default: 'font-medium text-eyebrow',
  warm: 'font-medium text-warm-ink-3',
  onGreen: 'text-on-green-eyebrow',
  muted: 'text-muted',
} as const;

type EyebrowProps = {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
};

export function Eyebrow({ children, tone = 'default', className = '' }: EyebrowProps) {
  return (
    <p className={`m-0 font-sans text-[12px] uppercase tracking-[.22em] ${tones[tone]} ${className}`}>
      {children}
    </p>
  );
}

// Eyebrow followed by a hairline rule (Work, Selected work).
export function EyebrowRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[18px] flex items-center gap-[18px]">
      <Eyebrow className="whitespace-nowrap">{children}</Eyebrow>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
