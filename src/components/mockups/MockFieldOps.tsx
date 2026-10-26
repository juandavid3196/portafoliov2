import {
  Bell,
  CalendarDays,
  ChartColumn,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  Clock,
  FileCheck,
  Filter,
  House,
  MapPin,
  Package,
  Search,
  Settings,
  User,
  UserCog,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { FieldOpsMark } from '../Logos';
import { MockFrame } from './MockFrame';

type Tone = 'blue' | 'green' | 'peach';

const tones: Record<Tone, string> = {
  blue: 'border-[#a9cdf0] bg-[#dcebfb]',
  green: 'border-[#bfe3cf] bg-[#d5f0e1]',
  peach: 'border-[#f0cfa8] bg-[#fbe9d8]',
};

const nav = [
  { icon: House, label: 'Dashboard' },
  { icon: ClipboardList, label: 'Requests' },
  { icon: FileCheck, label: 'Work orders' },
  { icon: CalendarDays, label: 'Dispatch', active: true },
  { icon: Users, label: 'Customers' },
  { icon: UserCog, label: 'Team' },
  { icon: Package, label: 'Assets' },
  { icon: ChartColumn, label: 'Reports' },
];

const days = [
  ['Mon', 'Apr 21'],
  ['Tue', 'Apr 22'],
  ['Wed', 'Apr 23'],
  ['Thu', 'Apr 24'],
  ['Fri', 'Apr 25'],
];

// left/width are % of the five-day area.
type Job = {
  tone: Tone;
  title: string;
  place: string;
  time: string;
  left: number;
  width: number;
  icon: typeof Wrench;
  selected?: boolean;
};

const rows: { initials: string; name: string; jobs: Job[] }[] = [
  {
    initials: 'CM',
    name: 'Carlos Mendoza',
    jobs: [
      { tone: 'blue', title: 'AC Maintenance', place: 'Hotel Santa Clara', time: '8:00 - 11:00', left: 1, width: 30, icon: Wrench, selected: true },
      { tone: 'green', title: 'Preventive', place: 'Universidad Nacional', time: '8:00 - 11:00', left: 41, width: 31, icon: User },
    ],
  },
  {
    initials: 'AP',
    name: 'Ana Pardo',
    jobs: [
      { tone: 'green', title: 'Installation', place: 'Edificio Colpatria', time: '9:00 - 12:00', left: 22, width: 29, icon: Wrench },
      { tone: 'blue', title: 'Inspection', place: 'Portal 80', time: '9:00 - 11:00', left: 70, width: 29, icon: User },
    ],
  },
  {
    initials: 'JM',
    name: 'Jorge Martinez',
    jobs: [
      { tone: 'blue', title: 'Site Inspection', place: 'Centro Empresarial', time: '11:00 - 14:00', left: 1, width: 32, icon: Wrench },
      { tone: 'peach', title: 'Follow-up', place: 'Clínica del Valle', time: '11:00 - 13:00', left: 53, width: 29, icon: User },
    ],
  },
  {
    initials: 'LR',
    name: 'Laura Rojas',
    jobs: [
      { tone: 'blue', title: 'Repair', place: 'Torre Andes', time: '14:00 - 17:00', left: 21, width: 32, icon: Wrench },
      { tone: 'green', title: 'Technical Review', place: 'Zona Franca', time: '13:00 - 16:00', left: 64, width: 35, icon: User },
    ],
  },
];

const ico = '1.45em';

// Illustrative product UI (sample data). Replace with real screenshots when available.
export function MockFieldOps({ badge, tilt }: { badge: string; tilt?: 'soft' | 'strong' }) {
  return (
    <MockFrame label={`FieldOps — ${badge}`} badge={badge} natural={800} tilt={tilt}>
      <div className="grid grid-cols-[15.5em_minmax(0,1fr)]">
        {/* Sidebar */}
        <div className="flex flex-col gap-[.5em] border-r border-[#edf0ec] px-[1.2em] pb-[3.4em] pt-[1.6em] text-[1.15em] text-ink-4">
          <div className="mb-[1.6em] flex items-center gap-[.7em] px-[.4em] text-[1.3em] font-bold text-ink">
            <FieldOpsMark className="size-[1.7em]" />
            FieldOps
          </div>
          {nav.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-[.9em] rounded-[.8em] px-[.9em] py-[.75em] ${
                active ? 'bg-[#d9efe3] font-semibold text-brand' : ''
              }`}
            >
              <Icon size={ico} strokeWidth={1.5} />
              {label}
            </div>
          ))}
          <div className="mt-auto flex items-center gap-[.9em] px-[.9em] pt-[3em]">
            <Settings size={ico} strokeWidth={1.5} />
            Settings
          </div>
        </div>

        {/* Main */}
        <div className="min-w-0 pb-[2.4em]">
          <div className="flex items-center justify-between gap-[1.4em] border-b border-[#edf0ec] px-[2em] py-[1.2em]">
            <div className="flex h-[3.4em] w-[44%] items-center gap-[.8em] rounded-[1em] bg-[#f3f5f2] px-[1.2em] text-[1em] text-[#8f978f]">
              <Search size="1.3em" strokeWidth={1.6} />
              Search work orders, customers or locations…
            </div>
            <div className="flex items-center gap-[1.4em]">
              <Bell size="1.7em" strokeWidth={1.5} />
              <span className="grid size-[3.2em] place-items-center rounded-full bg-brand text-[1em] text-white">JD</span>
              <ChevronDown size="1.4em" strokeWidth={1.6} />
            </div>
          </div>

          <div className="px-[2em] pt-[1.2em]">
            <div className="text-[2.1em] font-bold leading-none">Dispatch</div>
            <div className="mt-[1em] flex flex-wrap items-center justify-between gap-[1em]">
              <div className="flex items-center gap-[.8em] text-[1.2em]">
                <span className="mr-[.4em] font-semibold">Apr 21 – Apr 25, 2025</span>
                <span className="grid size-[2.2em] place-items-center rounded-[.6em] border border-[#dde2dc]">
                  <ChevronLeft size="1.2em" />
                </span>
                <span className="grid size-[2.2em] place-items-center rounded-[.6em] border border-[#dde2dc]">
                  <ChevronRight size="1.2em" />
                </span>
                <span className="rounded-[.6em] border border-[#dde2dc] px-[1em] py-[.45em]">Today</span>
              </div>
              <div className="flex items-center gap-[.7em] text-[1.05em]">
                <span className="flex items-center gap-[.6em] rounded-[.7em] border border-[#dde2dc] px-[1em] py-[.55em]">
                  Week <ChevronDown size="1em" />
                </span>
                <span className="flex items-center gap-[.6em] rounded-[.7em] border border-[#dde2dc] px-[1em] py-[.55em]">
                  <Filter size="1em" /> Filters
                </span>
                <span className="rounded-[.7em] bg-brand px-[1.1em] py-[.6em] font-medium text-white">+ New work order</span>
              </div>
            </div>
          </div>

          <div className="mt-[1.1em] flex gap-[1.4em] px-[2em]">
            {/* Schedule */}
            <div className="min-w-0 flex-1 overflow-hidden rounded-[1em] border border-[#e7ece6]">
              <div className="grid grid-cols-[8.4em_repeat(5,minmax(0,1fr))] border-b border-[#e7ece6] bg-[#fbfcfa] text-[1.05em]">
                <div />
                {days.map(([d, date]) => (
                  <div key={d} className="py-[.7em] text-center leading-[1.35]">
                    <div className="font-semibold">{d}</div>
                    <div className="text-muted">{date}</div>
                  </div>
                ))}
              </div>
              {rows.map((row, r) => (
                <div
                  key={row.name}
                  className={`flex h-[5.4em] ${r < rows.length - 1 ? 'border-b border-[#eef1ed]' : ''}`}
                >
                  <div className="flex w-[8.4em] flex-none flex-col items-center justify-center gap-[.4em] px-[.4em] text-center text-[.95em] leading-[1.15]">
                    <span className="grid size-[2.9em] place-items-center rounded-full bg-[#dcefe6] text-[1.05em] font-semibold text-brand">
                      {row.initials}
                    </span>
                    {row.name}
                  </div>
                  <div className="relative flex-1">
                    {[20, 40, 60, 80].map((p) => (
                      <span key={p} className="absolute inset-y-0 w-px bg-[#eef1ed]" style={{ left: `${p}%` }} />
                    ))}
                    {row.jobs.map((job) => (
                      <div
                        key={job.title}
                        className={`absolute inset-y-[.6em] rounded-[.7em] px-[.8em] py-[.55em] text-[.95em] leading-[1.3] ${tones[job.tone]} ${
                          job.selected ? 'border-2' : 'border'
                        }`}
                        style={{ left: `${job.left}%`, width: `${job.width}%` }}
                      >
                        <div className="flex items-center gap-[.5em] font-semibold">
                          <job.icon size="1.1em" strokeWidth={1.6} />
                          <span className="truncate">{job.title}</span>
                        </div>
                        <div className="truncate text-ink-4">{job.place}</div>
                        <div className="text-ink-4">{job.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="w-[18.6em] flex-none text-[.98em] leading-[1.35]">
              <div className="flex items-start justify-between gap-[.6em]">
                <div className="flex flex-wrap items-center gap-[.6em]">
                  <span className="text-[1.2em] font-bold">AC Maintenance</span>
                  <span className="flex items-center gap-[.3em] rounded-full bg-[#dcebfb] px-[.7em] py-[.2em] text-[.9em] text-[#2b6cb0]">
                    <CircleCheck size="1em" /> Scheduled
                  </span>
                </div>
                <X size="1.3em" strokeWidth={1.5} />
              </div>
              <div className="mt-[1.3em] flex flex-col gap-[1em] text-ink-4">
                <div className="flex gap-[.8em]">
                  <CalendarDays size="1.4em" strokeWidth={1.5} /> Mon, Apr 21, 2025
                </div>
                <div className="flex gap-[.8em]">
                  <Clock size="1.4em" strokeWidth={1.5} /> 8:00 - 11:00
                </div>
                <div className="flex gap-[.8em]">
                  <MapPin size="1.4em" strokeWidth={1.5} />
                  <span>
                    Hotel Santa Clara
                    <br />
                    Bogotá, Colombia
                  </span>
                </div>
                <div className="flex gap-[.8em]">
                  <User size="1.4em" strokeWidth={1.5} />
                  <span>
                    Carlos Mendoza
                    <br />
                    <span className="text-muted">Field technician</span>
                  </span>
                </div>
              </div>
              <div className="mt-[1.3em] font-semibold">Description</div>
              <div className="mt-[.3em] text-ink-4">Preventive maintenance for HVAC system in main building.</div>
              <div className="mt-[1.4em] flex gap-[.6em]">
                <span className="flex-1 rounded-[.7em] bg-brand py-[.8em] text-center font-medium text-white">
                  View work order →
                </span>
                <span className="rounded-[.7em] border border-[#dde2dc] px-[1em] py-[.8em]">···</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
