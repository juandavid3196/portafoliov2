import { Bell, ChartColumn, ClipboardList, LayoutGrid, Package, ScanLine, Search, Truck, Users } from 'lucide-react';
import { MockFrame } from './MockFrame';

const nav = [
  { icon: LayoutGrid, label: 'Operations' },
  { icon: ClipboardList, label: 'Purchase orders', active: true },
  { icon: Truck, label: 'Shipments' },
  { icon: ScanLine, label: 'Customs' },
  { icon: Users, label: 'Suppliers' },
  { icon: ChartColumn, label: 'Reports' },
];

const status = {
  'In transit': 'bg-[#dcebfb] text-[#2b6cb0]',
  Customs: 'bg-[#fbe9d8] text-[#b7701f]',
  Arrived: 'bg-[#d5f0e1] text-[#1f7a4d]',
  'In process': 'bg-[#e3eefb] text-[#3b6fb0]',
} as const;

const orders: { po: string; supplier: string; country: string; status: keyof typeof status }[] = [
  { po: 'PO-2025-001', supplier: 'Global Textiles', country: 'China', status: 'In transit' },
  { po: 'PO-2025-002', supplier: 'Andina Parts', country: 'United States', status: 'Customs' },
  { po: 'PO-2025-003', supplier: 'EuroChem', country: 'Germany', status: 'Arrived' },
  { po: 'PO-2025-004', supplier: 'Pacific Steel', country: 'Brazil', status: 'In process' },
  { po: 'PO-2025-005', supplier: 'IndusMetals', country: 'China', status: 'In transit' },
];

const tabs = ['All', 'In process', 'Arrived', 'Closed'];

// Illustrative UI only: Logit is a company product and no real data is shown.
export function MockLogit({ badge, tilt }: { badge: string; tilt?: 'soft' | 'strong' }) {
  return (
    <MockFrame label={`Logit — ${badge}`} badge={badge} natural={540} tilt={tilt}>
      <div className="grid grid-cols-[13.6em_minmax(0,1fr)]">
        <div className="flex flex-col gap-[.5em] border-r border-[#edf0ec] px-[1.1em] pb-[4em] pt-[1.5em] text-[1.1em] text-ink-4">
          <div className="mb-[1.4em] flex items-center gap-[.7em] px-[.4em] text-[1.35em] font-bold text-ink">
            <Package size="1.5em" strokeWidth={2.2} className="text-[#2f6fda]" />
            Logit
          </div>
          {nav.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-[.8em] rounded-[.8em] px-[.8em] py-[.7em] ${
                active ? 'bg-[#d9efe3] font-semibold text-brand' : ''
              }`}
            >
              <Icon size="1.4em" strokeWidth={1.5} />
              {label}
            </div>
          ))}
        </div>

        <div className="min-w-0 pb-[3.4em]">
          <div className="flex items-center justify-between gap-[1.2em] px-[1.8em] py-[1.2em]">
            <div className="flex h-[3.2em] w-[52%] items-center gap-[.7em] rounded-[1em] bg-[#f3f5f2] px-[1.1em] text-[1em] text-[#8f978f]">
              <Search size="1.2em" strokeWidth={1.6} />
              Search purchase orders…
            </div>
            <div className="flex items-center gap-[1.2em]">
              <Bell size="1.6em" strokeWidth={1.5} />
              <span className="grid size-[3em] place-items-center rounded-full bg-brand text-[1em] text-white">JD</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-[1em] px-[1.8em]">
            <div className="text-[1.9em] font-bold leading-none">Purchase orders</div>
            <span className="rounded-[.8em] bg-brand px-[1.4em] py-[.7em] text-[1.1em] font-medium text-white">
              + New order
            </span>
          </div>

          <div className="mt-[1.4em] flex gap-[1.8em] border-b border-[#edf0ec] px-[1.8em] text-[1.05em] text-muted">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`pb-[.7em] ${i === 0 ? '-mb-px border-b-2 border-brand font-semibold text-ink' : ''}`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="px-[1.8em] text-[1.05em]">
            <div className="grid grid-cols-[1.35fr_1.35fr_1.1fr_1fr] border-b border-[#edf0ec] py-[.9em] font-semibold text-ink-4">
              <span>PO number</span>
              <span>Supplier</span>
              <span>Country</span>
              <span>Status</span>
            </div>
            {orders.map((o, i) => (
              <div
                key={o.po}
                className={`grid grid-cols-[1.35fr_1.35fr_1.1fr_1fr] items-center py-[.95em] ${
                  i < orders.length - 1 ? 'border-b border-[#f1f3ef]' : ''
                }`}
              >
                <span>{o.po}</span>
                <span className="text-ink-4">{o.supplier}</span>
                <span className="text-ink-4">{o.country}</span>
                <span>
                  <span className={`rounded-full px-[.9em] py-[.3em] text-[.95em] ${status[o.status]}`}>{o.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
