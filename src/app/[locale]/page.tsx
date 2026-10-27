import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { dictionaries, hasLocale } from '@/i18n/config';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'home', dictionaries[locale].common.metaDescription);
}

// The home page is a single hero; everything else lives in the other pages.
export default function HomePage() {
  return <Hero />;
}
