type MountainArtProps = {
  // 'sage' (default) or the cooler 'teal' used on the skills page.
  tone?: 'sage' | 'teal';
  // Adds the small pine row along the base (Outside the screen).
  trees?: boolean;
  className?: string;
};

// Two ridgelines with fine hatching, drawn as thin line art.
const back =
  'M0 112 L36 98 L74 104 L128 66 L162 84 L228 24 L268 58 L302 46 L352 88 L412 38 L452 70 L502 54 L548 92 L592 80 L640 94';
const front = 'M0 120 L58 108 L112 114 L190 92 L242 104 L332 80 L382 100 L470 86 L542 106 L640 100';
const hatches =
  'M228 24 L240 62 L256 94 M228 24 L218 58 L204 90 M412 38 L424 72 L440 100 M412 38 L402 66 L388 96 M128 66 L140 92 M302 46 L314 76 M502 54 L512 82 M332 80 L342 104';

const pines = [6, 20, 34, 50, 64, 80, 96, 112, 356, 372, 388, 536, 552, 568, 586, 602, 620];

const tones = {
  sage: { back: '#a6bbab', front: '#c3d2c7' },
  teal: { back: '#8fbcc8', front: '#b4d3db' },
} as const;

export function MountainArt({ trees = false, tone = 'sage', className = '' }: MountainArtProps) {
  const c = tones[tone];
  return (
    <svg
      viewBox="0 0 640 130"
      preserveAspectRatio="none"
      fill="none"
      stroke={c.back}
      strokeWidth="1"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={back} />
      <path d={front} stroke={c.front} />
      <path d={hatches} stroke={c.front} />
      {trees
        ? pines.map((x, i) => {
            const h = 22 + ((i * 7) % 12);
            const base = 126 - ((i * 5) % 5);
            const mid = base - h * 0.5;
            const top = base - h;
            return (
              <path
                key={x}
                d={`M${x + 5} ${base} L${x + 5} ${top} M${x + 1} ${base - 4} L${x + 5} ${mid} L${x + 9} ${base - 4} M${x + 2} ${mid + 2} L${x + 5} ${top + 5} L${x + 8} ${mid + 2}`}
              />
            );
          })
        : null}
    </svg>
  );
}
