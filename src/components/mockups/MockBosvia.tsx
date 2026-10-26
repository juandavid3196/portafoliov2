import {
  Bell,
  BedDouble,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  House,
  Key,
  Settings,
  Users,
} from 'lucide-react';
import { BosviaMark } from '../Logos';
import { MockFrame } from './MockFrame';

const nav = [
  { icon: House, label: 'Dashboard' },
  { icon: CalendarDays, label: 'Reservations', active: true },
  { icon: BedDouble, label: 'Accommodations' },
  { icon: Users, label: 'Guests' },
  { icon: Key, label: 'Calendar' },
  { icon: Compass, label: 'Experiences' },
  { icon: Settings, label: 'Settings' },
];

const days = [
  ['Mon', '21'],
  ['Tue', '22'],
  ['Wed', '23'],
  ['Thu', '24'],
  ['Fri', '25'],
];

const tones = {
  green: 'bg-[#d5f0e1] border-[#bfe3cf]',
  blue: 'bg-[#dcebfb] border-[#a9cdf0]',
  peach: 'bg-[#fbe9d8] border-[#f0cfa8]',
} as const;

const units: {
  name: string;
  guests: string;
  thumb: string;
  guest: string;
  party: string;
  tone: keyof typeof tones;
  left: number;
  width: number;
}[] = [
  { name: 'Nido', guests: '2 guests', thumb: 'from-[#2c4a3a] to-[#c98a52]', guest: 'Sofía Ramírez', party: '2 guests', tone: 'green', left: 40, width: 38 },
  { name: 'Colibrí', guests: '2 guests', thumb: 'from-[#3b5a46] to-[#d9a05e]', guest: 'Mateo Torres', party: '2 guests', tone: 'blue', left: 54, width: 44 },
  { name: 'Guadua', guests: '4 guests', thumb: 'from-[#33513d] to-[#b9824d]', guest: 'Ana y David', party: '4 guests', tone: 'peach', left: 52, width: 46 },
  { name: 'Montaña', guests: '4 guests', thumb: 'from-[#2a4636] to-[#b78a5a]', guest: 'Camila Ortega', party: '2 guests', tone: 'blue', left: 54, width: 44 },
];

// Concept UI only: Bosvia is at concept stage.
export function MockBosvia({ badge, tilt }: { badge: string; tilt?: 'soft' | 'strong' }) {
  return (
    <MockFrame label={`Bosvia — ${badge}`} badge={badge} natural={540} warm tilt={tilt}>
      <div className="grid grid-cols-[12.5em_minmax(0,1fr)]">
        <div className="flex flex-col gap-[.4em] border-r border-[#f1e7da] px-[1.1em] pb-[4em] pt-[1.5em] text-[1.05em] text-warm-ink-2">
          <div className="mb-[1.2em] flex flex-col gap-[.3em] px-[.4em]">
            <BosviaMark className="h-[3em] w-[3.4em]" />
            <span className="font-serif text-[1.7em] leading-none text-[#14213d]">Bosvia</span>
          </div>
          {nav.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-[.8em] rounded-[.8em] px-[.8em] py-[.65em] ${
                active ? 'bg-[#d9efe3] font-semibold text-brand' : ''
              }`}
            >
              <Icon size="1.35em" strokeWidth={1.5} />
              {label}
            </div>
          ))}
        </div>

        <div className="min-w-0 pb-[3.4em]">
          <div className="flex items-center justify-end gap-[1.2em] px-[1.6em] py-[1.1em]">
            <Bell size="1.6em" strokeWidth={1.5} />
            <span className="grid size-[3em] place-items-center rounded-full bg-brand text-[1em] text-white">JD</span>
          </div>

          <div className="px-[1.6em]">
            <div className="text-[1.7em] font-bold leading-none">Reservation calendar</div>
            <div className="mt-[1em] flex items-center justify-between gap-[1em] text-[1.05em]">
              <div className="flex items-center gap-[.6em]">
                <span className="grid size-[2.1em] place-items-center rounded-[.6em] border border-warm-line">
                  <ChevronLeft size="1.1em" />
                </span>
                <span className="flex items-center gap-[.4em] font-semibold">
                  April 2025 <ChevronDown size="1em" />
                </span>
                <span className="grid size-[2.1em] place-items-center rounded-[.6em] border border-warm-line">
                  <ChevronRight size="1.1em" />
                </span>
              </div>
              <span className="flex items-center gap-[.5em] rounded-[.7em] border border-warm-line px-[1em] py-[.5em]">
                Week <ChevronDown size="1em" />
              </span>
            </div>

            <div className="mt-[1.2em] overflow-hidden rounded-[1em] border border-[#f1e7da] text-[1em]">
              <div className="grid grid-cols-[10em_repeat(5,minmax(0,1fr))] border-b border-[#f1e7da] bg-[#fbf6ef] text-[#7a6e63]">
                <div />
                {days.map(([d, n]) => (
                  <div key={d} className="py-[.6em] text-center leading-[1.3]">
                    <div className="font-semibold">{d}</div>
                    <div>{n}</div>
                  </div>
                ))}
              </div>
              {units.map((u, i) => (
                <div key={u.name} className={`flex h-[6.2em] ${i < units.length - 1 ? 'border-b border-[#f4ece1]' : ''}`}>
                  <div className="flex w-[10em] flex-none items-center gap-[.7em] px-[.7em]">
                    <span className={`size-[3.6em] flex-none rounded-[.5em] bg-gradient-to-br ${u.thumb}`} />
                    <span className="leading-[1.25]">
                      <span className="block font-semibold">{u.name}</span>
                      <span className="text-[.9em] text-warm-ink-3">{u.guests}</span>
                    </span>
                  </div>
                  <div className="relative flex-1">
                    {[20, 40, 60, 80].map((p) => (
                      <span key={p} className="absolute inset-y-0 w-px bg-[#f4ece1]" style={{ left: `${p}%` }} />
                    ))}
                    <div
                      className={`absolute inset-y-[.9em] rounded-[.7em] border px-[.8em] py-[.5em] text-[.92em] leading-[1.3] ${tones[u.tone]}`}
                      style={{ left: `${u.left}%`, width: `${u.width}%` }}
                    >
                      <div className="truncate font-semibold">{u.guest}</div>
                      <div className="truncate text-ink-4">{u.party}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
