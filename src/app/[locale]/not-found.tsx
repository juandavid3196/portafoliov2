import { ButtonLink } from '@/components/Button';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export default async function NotFound() {
  const { locale, t } = await getDictionary();

  return (
    <section className="page-container flex flex-col items-start gap-5 pt-[clamp(64px,10vw,140px)]">
      <p className="m-0 font-serif text-[22px] text-brand">404</p>
      <h1 className="m-0 font-sans text-[clamp(42px,6vw,84px)] font-bold leading-[.98] tracking-[-.045em]">
        {t.notFound.title}
      </h1>
      <p className="m-0 max-w-[560px] font-serif text-[clamp(19px,1.7vw,23px)] leading-[1.42] text-ink-4">
        {t.notFound.text}
      </p>
      <ButtonLink href={href(locale, 'home')} size="hero">
        {t.notFound.back}
      </ButtonLink>
    </section>
  );
}
