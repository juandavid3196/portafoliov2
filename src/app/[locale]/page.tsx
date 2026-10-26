import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { Hero } from '@/components/home/Hero';
import { ProcessShort } from '@/components/home/ProcessShort';
import { SelectedWork } from '@/components/home/SelectedWork';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'home', dictionaries[locale].common.metaDescription);
}

export default async function HomePage() {
  const { locale, t } = await getDictionary();

  return (
    <>
      <Hero />
      <SelectedWork />
      <ProcessShort />
      <section aria-labelledby="hc-h" className="page-container pt-[clamp(72px,9vw,104px)]">
        <CtaBand
          headingId="hc-h"
          eyebrow={t.home.ctaEyebrow}
          title={t.home.ctaTitle}
          sub={t.home.ctaSub}
          primaryLabel={t.home.cta2}
          primaryHref={href(locale, 'contact')}
          secondaryLabel={t.home.ctaSecondary}
          secondaryHref={href(locale, 'work')}
        />
      </section>
    </>
  );
}
