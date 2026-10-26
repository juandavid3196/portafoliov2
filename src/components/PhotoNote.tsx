import { site } from '@/config/site';

// "Placeholder photo" badge. The stock photos are not the owner's real portrait,
// so they stay flagged until site.showPhotoNotes is turned off.
export function PhotoNote({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  if (!site.showPhotoNotes) return null;
  return (
    <span
      className={`absolute z-[2] rounded-full bg-[rgba(248,246,241,.9)] px-2.5 py-1 font-sans text-[11px] text-ink ${className}`}
    >
      {children}
    </span>
  );
}
