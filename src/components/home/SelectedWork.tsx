import { AppLink } from '@/components/AppLink';
import { ButtonLink } from '@/components/Button';
import { EyebrowRule } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { ProductShot } from '@/components/mockups/ProductShot';
import { TextLink } from '@/components/TextLink';
import { site } from '@/config/site';
import { href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function SelectedWork() {
  const { locale, t } = await getDictionary();
  const { fieldops, logit, bosvia } = t.projects;

  return (
    <section
      aria-labelledby="hw-h"
      className="wide-container pt-[clamp(64px,8vw,93px)]"
    >
      <EyebrowRule>{t.home.workEyebrow}</EyebrowRule>
      <div className="mb-9 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <h2
          id="hw-h"
          className="m-0 font-sans text-[clamp(32px,3.7vw,43px)] font-bold leading-none tracking-[-.04em]"
        >
          {t.home.workTitle}
        </h2>
        <p className="m-0 max-w-[380px] font-serif text-[19px] leading-[1.35] text-muted">{t.home.workSide}</p>
      </div>

      {/* FieldOps — feature card */}
      <article className="flex flex-wrap items-center gap-x-[clamp(36px,5vw,88px)] gap-y-9 rounded-[20px] bg-sage p-[clamp(32px,5.4vw,80px)]">
        <div className="flex max-w-[420px] flex-[1_1_300px] flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2.5 font-sans text-[13px]">
            <span className="rounded-full bg-ivory px-3.5 py-1.5 font-medium text-brand">{t.common.independent}</span>
          </div>
          <div>
            <h3 className="m-0 font-sans text-[clamp(36px,3.8vw,44px)] font-bold leading-none tracking-[-.04em]">
              FieldOps
            </h3>
            <p className="m-0 mt-2 font-serif text-[20px] text-ink-2">{fieldops.cat}</p>
          </div>
          <p className="m-0 font-serif text-[19px] leading-[1.45] text-ink-4">{fieldops.desc}</p>
          <p className="m-0 font-sans text-[14px] tracking-[.06em] text-eyebrow">{fieldops.stack}</p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <ButtonLink href={href(locale, 'fieldops')} arrow>
              {t.common.explore}
            </ButtonLink>
            <TextLink href={site.fieldops.repoUrl} tone="ink" arrow>
              {t.common.repo}
            </TextLink>
          </div>
        </div>
        <div className="mx-auto min-w-0 flex-[1.4_1_420px] max-w-[640px]">
          <ProductShot src="/images/fieldops-dashboard.png" alt={t.alt.fieldops} />
        </div>
      </article>

      <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-5">
        {/* Logit */}
        <article className="flex flex-col gap-8 rounded-[20px] bg-sky p-[clamp(28px,3.4vw,52px)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-ivory px-3.5 py-1.5 font-sans text-[13px] font-medium text-brand">
                {t.common.professional}
              </span>
              <h3 className="m-0 mt-4 font-sans text-[clamp(32px,3vw,35px)] font-bold leading-none tracking-[-.04em]">
                Logit
              </h3>
              <p className="m-0 mt-1.5 font-serif text-[19px] text-ink-2">{logit.cat}</p>
            </div>
            <AppLink
              href={href(locale, 'logit')}
              aria-label="Logit"
              className="grid size-12 flex-none place-items-center rounded-full border border-line-strong text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              <Icon name="arrow-right" size={20} strokeWidth={1.6} />
            </AppLink>
          </div>
          <p className="m-0 font-serif text-[18px] leading-[1.45] text-ink-4">
            {logit.desc} <span className="text-muted">· {logit.stack}</span>
          </p>
          <div className="mx-auto w-full max-w-[540px]">
            <ProductShot src="/images/logit-dashboard.png" width={1586} height={992} alt={t.alt.logit} />
          </div>
        </article>

        {/* Bosvia */}
        <article className="flex flex-col gap-8 rounded-[20px] bg-peach p-[clamp(28px,3.4vw,52px)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-ivory px-3.5 py-1.5 font-sans text-[13px] font-medium text-warm-accent">
                  {t.common.venture}
                </span>
                <span className="inline-flex items-center gap-[7px] font-sans text-[13px] text-warm-ink-2">
                  <span className="size-[7px] rounded-full bg-warm-dot" />
                  {t.common.concept}
                </span>
              </div>
              <h3 className="m-0 mt-4 font-serif text-[clamp(36px,3.4vw,39px)] font-normal leading-none tracking-[-.02em] text-brand">
                Bosvia
              </h3>
              <p className="m-0 mt-1.5 font-serif text-[19px] text-ink-2">{bosvia.cat}</p>
            </div>
            <AppLink
              href={href(locale, 'bosvia')}
              aria-label="Bosvia"
              className="grid size-12 flex-none place-items-center rounded-full border border-[#b9a48f] text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              <Icon name="arrow-right" size={20} strokeWidth={1.6} />
            </AppLink>
          </div>
          <p className="m-0 font-serif text-[18px] leading-[1.45] text-ink-4">
            {bosvia.desc} <span className="text-warm-ink-3">· {bosvia.stack}</span>
          </p>
          <div className="mx-auto w-full max-w-[540px]">
            <ProductShot src="/images/bosvia-panel.png" alt={t.alt.bosvia} warm />
          </div>
        </article>
      </div>

      <div className="mt-6 flex justify-end">
        <TextLink href={href(locale, 'work')} arrow>
          {t.home.allWork}
        </TextLink>
      </div>
    </section>
  );
}
