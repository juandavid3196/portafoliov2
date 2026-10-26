import { AppLink } from './AppLink';

const tones = {
  brand: 'border-brand pb-[3px] text-brand hover:text-brand-link',
  ink: 'border-ink pb-[2px] text-ink hover:text-brand',
  onGreen: 'border-on-green-line pb-[2px] text-ivory hover:text-white',
} as const;

const sizes = { md: 'text-[18px]', sm: 'text-[16px]', xs: 'text-[17px]' } as const;

type TextLinkProps = {
  href: string;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
  // Appends the " ↗" marker used across the prototype.
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function TextLink({ href, tone = 'brand', size = 'md', arrow = false, children, className = '' }: TextLinkProps) {
  return (
    <AppLink
      href={href}
      className={`inline-block border-b font-serif transition-colors duration-200 ${tones[tone]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow ? ' ↗' : null}
    </AppLink>
  );
}
