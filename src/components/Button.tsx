import { AppLink } from './AppLink';
import { Icon } from './Icon';

const variants = {
  primary: 'bg-brand text-ivory hover:bg-brand-hover hover:text-ivory',
  secondary: 'border border-line-strong text-ink hover:border-brand hover:text-brand',
  heroSecondary: 'border border-line-strong bg-ivory/60 text-ink hover:border-brand hover:text-brand',
  ivory: 'bg-ivory text-ink hover:bg-white hover:text-brand',
  onDark: 'bg-[#fdf8f1] text-ink hover:bg-white hover:text-ink',
} as const;

const sizes = {
  hero: 'min-h-[54px] gap-3 rounded-[6px] px-7 text-[19px]',
  card: 'min-h-[50px] gap-2.5 rounded-[6px] px-[22px] text-[18px]',
  cardLg: 'min-h-[50px] gap-2.5 rounded-[8px] px-[22px] text-[18px]',
  action: 'min-h-[52px] gap-2.5 rounded-[8px] px-6 text-[18px]',
  cta: 'min-h-[54px] gap-2.5 rounded-[8px] px-[30px] text-[19px]',
  compact: 'min-h-[48px] gap-2.5 rounded-[8px] px-5 text-[17px]',
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  // Trailing arrow-up-right icon (prototype primary buttons).
  arrow?: boolean;
  // Leading icon key (e.g. 'git').
  icon?: string;
  children: React.ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'card',
  arrow = false,
  icon,
  children,
  className = '',
}: ButtonLinkProps) {
  return (
    <AppLink
      href={href}
      className={`inline-flex items-center font-serif transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon ? <Icon name={icon} size={18} strokeWidth={1.5} /> : null}
      {children}
      {arrow ? <Icon name="arrow-up-right" size={17} strokeWidth={1.6} /> : null}
    </AppLink>
  );
}
