import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, hasLocale } from '@/i18n/config';

// Next.js 16 renamed middleware to proxy. Redirects "/" and any path without
// a locale prefix to the default locale ("/work" → "/en/work").
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split('/')[1] ?? '';
  if (hasLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, metadata routes and anything with a file extension.
  matcher: ['/((?!_next|api|opengraph-image|.*\\..*).*)'],
};
