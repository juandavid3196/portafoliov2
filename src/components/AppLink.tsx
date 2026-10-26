import Link from 'next/link';

type AppLinkProps = Omit<React.ComponentProps<'a'>, 'href'> & { href: string };

// Internal paths use next/link; anything else opens in a new tab.
export function AppLink({ href, children, ...rest }: AppLinkProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
