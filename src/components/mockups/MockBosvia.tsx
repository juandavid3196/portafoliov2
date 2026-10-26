const nav = ['Dashboard', 'Reservations', 'Lodging', 'Guests', 'Experiences'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// start/span are 0-based day columns.
const stays = [
  { unit: 'Cabin 1', start: 0, span: 2, tone: 'bg-sage', label: 'Guest · 2' },
  { unit: 'Cabin 2', start: 1, span: 3, tone: 'bg-sky', label: 'Guest · 2' },
  { unit: 'Dome', start: 2, span: 3, tone: 'bg-peach', label: 'Guest · 4' },
];

// Concept UI only: Bosvia is at concept stage.
export function MockBosvia({ badge }: { badge: string }) {
  return (
    <div
      role="img"
      aria-label={`Bosvia — ${badge}`}
      className="relative grid w-full grid-cols-1 overflow-hidden min-[480px]:grid-cols-[112px_minmax(0,1fr)] rounded-[14px] border border-warm-line bg-warm-card font-sans text-ink shadow-[0_24px_48px_-28px_rgba(70,45,20,.35),0_2px_6px_rgba(70,45,20,.06)]"
    >
      <div className="hidden flex-col gap-1 border-r border-[#f1e7da] px-2.5 py-3.5 text-[10.5px] text-warm-ink-2 min-[480px]:flex">
        <div className="px-1.5 pb-2.5 font-serif text-[16px] text-brand">Bosvia</div>
        {nav.map((item) => (
          <div
            key={item}
            className={`px-2 py-1.5 ${item === 'Reservations' ? 'rounded-md bg-sage font-semibold text-brand' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="min-w-0 px-4 py-3.5">
        <div className="mb-2.5 text-[14px] font-bold">Reservation calendar</div>
        <div className="overflow-x-auto">
          <div className="grid max-[479px]:min-w-[360px] grid-cols-[64px_repeat(5,minmax(0,1fr))] overflow-hidden rounded-lg border border-[#f1e7da] text-[9.5px]">
            <div className="bg-[#fbf6ef]" />
            {days.map((d) => (
              <div key={d} className="bg-[#fbf6ef] p-[5px] text-center text-[#7a6e63]">
                {d}
              </div>
            ))}
            {stays.map((s) => (
              <Stay key={s.unit} {...s} />
            ))}
          </div>
        </div>
      </div>

      <span className="absolute bottom-2.5 right-2.5 rounded-full border border-warm-line bg-[rgba(255,253,249,.94)] px-[9px] py-[3px] text-[9.5px] uppercase tracking-[.08em] text-warm-ink-3">
        {badge}
      </span>
    </div>
  );
}

function Stay({ unit, start, span, tone, label }: (typeof stays)[number]) {
  const after = 5 - start - span;
  return (
    <>
      <div className="border-t border-[#f4ece1] px-1.5 py-2">{unit}</div>
      {Array.from({ length: start }, (_, i) => (
        <div key={`b${i}`} className="border-t border-[#f4ece1]" />
      ))}
      <div className="border-t border-[#f4ece1] p-1" style={{ gridColumn: `span ${span}` }}>
        <div className={`rounded-[5px] px-1.5 py-1 ${tone}`}>{label}</div>
      </div>
      {Array.from({ length: after }, (_, i) => (
        <div key={`a${i}`} className="border-t border-[#f4ece1]" />
      ))}
    </>
  );
}
