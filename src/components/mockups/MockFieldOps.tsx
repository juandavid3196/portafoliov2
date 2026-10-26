type Tone = 'sky' | 'sage' | 'peach';
type Job = { tone: Tone; title: string; time: string };

const tones: Record<Tone, string> = {
  sky: 'border-[#bfd8ee] bg-sky',
  sage: 'border-[#c6dacb] bg-sage',
  peach: 'border-[#eed3b8] bg-peach',
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const schedule: { tech: string; jobs: (Job | null)[] }[] = [
  {
    tech: 'Tech A',
    jobs: [
      { tone: 'sky', title: 'Maintenance', time: '8:00–11:00' },
      null,
      { tone: 'sage', title: 'Preventive', time: '8:00–11:00' },
      null,
      null,
    ],
  },
  {
    tech: 'Tech B',
    jobs: [
      null,
      { tone: 'sage', title: 'Installation', time: '9:00–12:00' },
      null,
      { tone: 'sky', title: 'Inspection', time: '9:00–11:00' },
      null,
    ],
  },
  {
    tech: 'Tech C',
    jobs: [
      { tone: 'sky', title: 'Site visit', time: '11:00–14:00' },
      null,
      null,
      { tone: 'peach', title: 'Follow-up', time: '11:00–13:00' },
      null,
    ],
  },
  {
    tech: 'Tech D',
    jobs: [
      null,
      null,
      { tone: 'sky', title: 'Repair', time: '14:00–17:00' },
      null,
      { tone: 'sage', title: 'Review', time: '13:00–16:00' },
    ],
  },
];

const nav = ['Dashboard', 'Requests', 'Work orders', 'Dispatch', 'Customers', 'Properties', 'Team', 'Reports'];

// Illustrative product UI (sample data). Replace with real screenshots when available.
export function MockFieldOps({ badge }: { badge: string }) {
  return (
    <div
      role="img"
      aria-label={`FieldOps — ${badge}`}
      className="relative grid w-full grid-cols-1 overflow-hidden min-[480px]:grid-cols-[132px_minmax(0,1fr)] rounded-[14px] border border-[#dde2dc] bg-white font-sans text-ink shadow-[0_24px_48px_-28px_rgba(20,40,35,.35),0_2px_6px_rgba(20,40,35,.06)]"
    >
      <div className="hidden flex-col gap-1 border-r border-[#ecefea] px-2.5 py-3.5 text-[11px] text-ink-4 min-[480px]:flex">
        <div className="flex items-center gap-[7px] px-1.5 pb-3 text-[13px] font-bold text-ink">
          <span className="grid size-[18px] place-items-center rounded-[5px] bg-[#0e6b5c] text-[11px] text-white">
            F
          </span>
          FieldOps
        </div>
        {nav.map((item) => (
          <div
            key={item}
            className={`px-2 py-1.5 ${item === 'Dispatch' ? 'rounded-md bg-sage font-semibold text-brand' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="min-w-0 px-4 py-3.5">
        <div className="mb-3 flex items-center justify-between gap-2.5">
          <div className="flex h-6 max-w-[280px] flex-1 items-center rounded-md border border-[#ecefea] px-2 text-[10px] text-[#9aa19b]">
            Search work orders, customers…
          </div>
          <div className="grid size-[22px] place-items-center rounded-full bg-brand text-[9px] text-white">JD</div>
        </div>

        <div className="mb-2.5 flex flex-wrap items-end justify-between gap-2.5">
          <div>
            <div className="text-[16px] font-bold">Dispatch</div>
            <div className="mt-0.5 text-[10px] text-muted">Week view · sample data</div>
          </div>
          <div className="flex gap-1.5 text-[10px]">
            <span className="rounded-md border border-[#dde2dc] px-2 py-1">Week</span>
            <span className="rounded-md bg-brand px-2 py-1 text-white">+ New work order</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="grid max-[479px]:min-w-[420px] grid-cols-[70px_repeat(5,minmax(0,1fr))] overflow-hidden rounded-lg border border-[#ecefea] text-[9.5px]">
            <div className="border-b border-[#ecefea] bg-[#fafbf9]" />
            {days.map((d) => (
              <div key={d} className="border-b border-[#ecefea] bg-[#fafbf9] p-1.5 text-center text-muted">
                {d}
              </div>
            ))}
            {schedule.map((row, r) => {
              const last = r === schedule.length - 1;
              const rule = last ? '' : 'border-b border-[#f1f3ef]';
              return <Row key={row.tech} tech={row.tech} jobs={row.jobs} rule={rule} />;
            })}
          </div>
        </div>
      </div>

      <span className="absolute bottom-2.5 right-2.5 rounded-full border border-line bg-[rgba(248,246,241,.92)] px-[9px] py-[3px] text-[9.5px] uppercase tracking-[.08em] text-muted">
        {badge}
      </span>
    </div>
  );
}

function Row({ tech, jobs, rule }: { tech: string; jobs: (Job | null)[]; rule: string }) {
  return (
    <>
      <div className={`px-1.5 py-2 text-ink-4 ${rule}`}>{tech}</div>
      {jobs.map((job, i) => (
        <div key={i} className={`${job ? 'p-1' : ''} ${rule}`}>
          {job ? (
            <div className={`rounded-[5px] border px-[5px] py-1 ${tones[job.tone]}`}>
              <b className="font-semibold">{job.title}</b>
              <br />
              {job.time}
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
