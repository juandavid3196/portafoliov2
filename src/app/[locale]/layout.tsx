import type { Metadata } from 'next';
import { Instrument_Sans, Instrument_Serif, Newsreader } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/config/site';
import { locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import '../globals.css';

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name }],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }: LayoutProps<'/[locale]'>) {
  const { locale, t } = await getDictionary();

  return (
    <html
      lang={locale}
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${newsreader.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-ivory">
        <a
          href="#main"
          className="absolute -left-[9999px] top-3 z-[100] rounded-md bg-brand px-4 py-2.5 font-sans text-ivory focus:left-4 focus:text-ivory"
        >
          {t.common.skip}
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
