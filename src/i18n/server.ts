import { notFound } from 'next/navigation';
import { locale as rootLocale } from 'next/root-params';
import { dictionaries, hasLocale, type Locale } from './config';

// Resolves the active locale in any Server Component without prop drilling.
export async function getLocale(): Promise<Locale> {
  const value = await rootLocale();
  if (!hasLocale(value)) notFound();
  return value;
}

export async function getDictionary() {
  const locale = await getLocale();
  return { locale, t: dictionaries[locale] };
}
