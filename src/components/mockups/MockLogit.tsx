const nav = ['Operations', 'Orders', 'Shipments', 'Customs', 'Suppliers'];

const orders = [
  { ref: 'PO-0001', origin: 'Sample A', status: 'In transit', tone: 'bg-sky' },
  { ref: 'PO-0002', origin: 'Sample B', status: 'Customs', tone: 'bg-peach' },
  { ref: 'PO-0003', origin: 'Sample C', status: 'Arrived', tone: 'bg-sage' },
  { ref: 'PO-0004', origin: 'Sample D', status: 'In process', tone: 'bg-lavender' },
];

// Illustrative UI only: Logit is a company product and no real data is shown.
export function MockLogit({ badge }: { badge: string }) {
  return (
    <div
      role="img"
      aria-label={`Logit — ${badge}`}
      className="relative grid w-full grid-cols-1 overflow-hidden min-[480px]:grid-cols-[118px_minmax(0,1fr)] rounded-[14px] border border-[#dde2dc] bg-white font-sans text-ink shadow-[0_24px_48px_-28px_rgba(20,40,35,.35),0_2px_6px_rgba(20,40,35,.06)]"
    >
      <div className="hidden flex-col gap-1 border-r border-[#ecefea] px-2.5 py-3.5 text-[10.5px] text-ink-4 min-[480px]:flex">
        <div className="px-1.5 pb-3 text-[13px] font-bold text-ink">Platform</div>
        {nav.map((item) => (
          <div
            key={item}
            className={`px-2 py-1.5 ${item === 'Orders' ? 'rounded-md bg-sage font-semibold text-brand' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="min-w-0 px-4 py-3.5">
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <div className="text-[15px] font-bold">Purchase orders</div>
          <span className="rounded-md bg-brand px-2 py-1 text-[10px] text-white">+ New order</span>
        </div>
        <div className="mb-1 flex gap-3.5 border-b border-[#ecefea] pb-1.5 text-[10px] text-muted">
          <span className="font-semibold text-brand">All</span>
          <span>In process</span>
          <span>Arrived</span>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr_.9fr] text-[10px]">
          {['Reference', 'Origin', 'Status'].map((h) => (
            <div key={h} className="border-b border-[#f1f3ef] py-[7px] text-muted">
              {h}
            </div>
          ))}
          {orders.map((o, i) => {
            const rule = i === orders.length - 1 ? '' : 'border-b border-[#f1f3ef]';
            return <Cells key={o.ref} rule={rule} order={o} />;
          })}
        </div>
      </div>

      <span className="absolute bottom-2.5 right-2.5 rounded-full border border-line bg-[rgba(248,246,241,.92)] px-[9px] py-[3px] text-[9.5px] uppercase tracking-[.08em] text-muted">
        {badge}
      </span>
    </div>
  );
}

function Cells({ rule, order }: { rule: string; order: (typeof orders)[number] }) {
  return (
    <>
      <div className={`py-[7px] ${rule}`}>{order.ref}</div>
      <div className={`py-[7px] ${rule}`}>{order.origin}</div>
      <div className={`py-[5px] ${rule}`}>
        <span className={`rounded px-1.5 py-0.5 ${order.tone}`}>{order.status}</span>
      </div>
    </>
  );
}
