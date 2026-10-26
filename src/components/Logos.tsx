// Brand marks for the owner's own products (FieldOps, Bosvia).

export function FieldOpsMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="11" fill="#0e7a63" />
      <path d="M17 36V15a3 3 0 0 1 3-3h13" fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" />
      <path d="M17 24h11" fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" />
      <circle cx="33" cy="12" r="3.2" fill="#9ee3c8" />
    </svg>
  );
}

// Stylised hummingbird in teal.
export function BosviaMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 64" className={className} aria-hidden="true">
      <path d="M4 8c14 0 26 7 31 20-9-4-20-2-27-4 5-3 6-9-4-16z" fill="#1fa79d" />
      <path d="M40 22c9-2 17 1 20 8l-9 3c-4-4-8-7-11-11z" fill="#14877f" />
      <path d="M33 28c10-2 18 3 17 12-2 10-10 18-20 21 3-8 3-14-3-21 3-4 5-8 6-12z" fill="#1fa79d" />
      <path d="M52 27l17-4-16 8z" fill="#14877f" />
      <circle cx="49" cy="27" r="1.4" fill="#fff" />
    </svg>
  );
}
