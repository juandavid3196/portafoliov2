type MockFrameProps = {
  label: string;
  badge: string;
  // Width (px) the mockup is designed at. Everything inside uses em, so it scales as a unit.
  natural: number;
  warm?: boolean;
  // Subtle 3D lean used on the work page cards.
  tilt?: 'soft' | 'strong';
  children: React.ReactNode;
};

const tilts = {
  soft: '[transform:perspective(1800px)_rotateY(-4deg)] origin-left',
  strong: '[transform:perspective(1800px)_rotateY(-9deg)] origin-left',
} as const;

// Product-UI frame shared by the three illustrative mockups. Sizes inside are in em; the
// container query unit keeps 1em = natural/100 of the card width, like a scaled screenshot.
export function MockFrame({ label, badge, natural, warm = false, tilt, children }: MockFrameProps) {
  return (
    <div role="img" aria-label={label} className="[container-type:inline-size]">
      <div
        style={{ fontSize: `${(1000 / natural).toFixed(4)}cqw` }}
        className={`relative overflow-hidden rounded-[1.6em] border font-sans text-ink ${
          warm
            ? 'border-warm-line bg-warm-card shadow-[0_3em_5em_-3em_rgba(70,45,20,.4),0_.2em_.6em_rgba(70,45,20,.08)]'
            : 'border-[#dde2dc] bg-white shadow-[0_3em_5em_-3em_rgba(20,40,35,.4),0_.2em_.6em_rgba(20,40,35,.08)]'
        } ${tilt ? tilts[tilt] : ''}`}
      >
        {children}
        <span
          className={`absolute bottom-[1em] right-[1em] rounded-full border px-[.9em] py-[.3em] text-[.95em] uppercase tracking-[.08em] ${
            warm
              ? 'border-warm-line bg-[rgba(255,253,249,.94)] text-warm-ink-3'
              : 'border-line bg-[rgba(248,246,241,.92)] text-muted'
          }`}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}
