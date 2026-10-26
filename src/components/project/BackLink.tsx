import Link from 'next/link';

type BackLinkProps = { href: string; tone?: 'default' | 'warm'; children: React.ReactNode };

export function BackLink({ href, tone = 'default', children }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[44px] items-center gap-2 font-sans text-[14px] hover:text-brand ${
        tone === 'warm' ? 'text-warm-ink-2' : 'text-eyebrow'
      }`}
    >
      ← {children}
    </Link>
  );
}
