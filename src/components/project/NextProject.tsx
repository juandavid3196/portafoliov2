import Link from 'next/link';

type NextProjectProps = {
  href: string;
  label: string;
  name: string;
  // Logit's wordmark in the prototype is serif green; the others are display sans.
  serif?: boolean;
  className?: string;
};

export function NextProject({ href, label, name, serif = false, className = '' }: NextProjectProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between gap-5 border-y border-line py-7 text-ink hover:text-brand ${className}`}
    >
      <span className="font-sans text-[12px] uppercase tracking-[.22em] text-muted">{label}</span>
      <span
        className={
          serif
            ? 'font-serif text-[clamp(30px,3.2vw,37px)] text-brand'
            : 'font-sans text-[clamp(28px,3vw,35px)] font-bold tracking-[-.04em]'
        }
      >
        {name} →
      </span>
    </Link>
  );
}
