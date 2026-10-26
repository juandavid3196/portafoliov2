import type { Metadata } from 'next';
import { ButtonLink } from '@/components/Button';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { MockFieldOps } from '@/components/mockups/MockFieldOps';
import { BackLink } from '@/components/project/BackLink';
import { NextProject } from '@/components/project/NextProject';
import { site } from '@/config/site';
import { dictionaries, hasLocale, href } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/work/fieldops'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'fieldops', dictionaries[locale].fieldops.lead);
}

const h2 = 'text-[clamp(32px,3.4vw,39px)] leading-[1.04] tracking-[-.04em]';
const section = 'page-container pt-[clamp(64px,8vw,93px)]';

export default async function FieldOpsPage() {
  const { locale, t } = await getDictionary();
  const f = t.fieldops;
  const { demoUrl, manualUrl, repoUrl } = site.fieldops;
  const missingLinks = !demoUrl || !manualUrl;

  return (
    <article aria-labelledby="fo-h">
      <div className="page-container pt-[clamp(32px,5vw,58px)]">
        <BackLink href={href(locale, 'work')}>{t.common.back}</BackLink>
        <div className="mt-4 flex flex-wrap items-end gap-x-[clamp(40px,6vw,70px)] gap-y-8">
          <div className="flex flex-[1_1_520px] flex-col gap-[22px]">
            <Eyebrow>{f.eyebrow}</Eyebrow>
            <DisplayHeading
              as="h1"
              id="fo-h"
              h={f.h}
              className="text-[clamp(36px,4.25vw,49px)] leading-[.98] tracking-[-.045em]"
            />
            <p className="m-0 max-w-[640px] text-pretty font-serif text-[clamp(19px,1.7vw,20px)] leading-[1.42] text-ink-4">
              {f.lead}
            </p>
          </div>
          <dl className="m-0 flex flex-[1_1_300px] flex-col">
            {f.facts.map((fact) => (
              <div key={fact.k} className="grid grid-cols-[90px_1fr] gap-4 border-t border-line py-3.5">
                <dt className="pt-1 font-sans text-[12px] uppercase tracking-[.16em] text-muted">{fact.k}</dt>
                <dd className="m-0 font-serif text-[18px] leading-[1.4]">{fact.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3.5">
          <ButtonLink href={repoUrl} size="action" icon="git">
            {t.common.repo} ↗
          </ButtonLink>
          {demoUrl ? (
            <ButtonLink href={demoUrl} variant="secondary" size="action">
              {f.demo} ↗
            </ButtonLink>
          ) : null}
          {manualUrl ? (
            <ButtonLink href={manualUrl} variant="secondary" size="action">
              {f.manual} ↗
            </ButtonLink>
          ) : null}
          {missingLinks ? (
            <p className="m-0 max-w-[520px] flex-[1_1_320px] font-serif text-[16px] leading-[1.45] text-muted">
              {f.unavailable}
            </p>
          ) : null}
        </div>
      </div>

      <div className="page-container mt-[clamp(40px,5vw,58px)]">
        <div className="rounded-3xl bg-sky p-[clamp(20px,4vw,46px)]">
          <div className="mx-auto max-w-[980px]">
            <MockFieldOps badge={t.mock.illustrative} />
          </div>
        </div>
      </div>

      {/* 01 · Problem */}
      <section
        aria-labelledby="fo-p"
        className={`${section} grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-[clamp(40px,6vw,70px)] gap-y-10`}
      >
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>01 · {f.problemEyebrow}</Eyebrow>
          <DisplayHeading id="fo-p" h={f.problemH} className={`text-balance ${h2}`} />
          <p className="m-0 text-pretty font-serif text-[20px] leading-[1.5] text-ink-4">{f.problem}</p>
        </div>
        <ul className="m-0 flex list-none flex-col p-0">
          {f.users.map((u) => (
            <li key={u.t} className="flex items-start gap-5 border-b border-line-soft py-[22px]">
              <span className="grid size-12 flex-none place-items-center rounded-full bg-sage text-brand">
                <Icon name={u.ic} size={22} />
              </span>
              <div>
                <h3 className="m-0 font-sans text-[20px] font-semibold tracking-[-.02em]">{u.t}</h3>
                <p className="m-0 mt-1 font-serif text-[18px] text-muted">{u.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 02 · Workflow */}
      <section aria-labelledby="fo-f" className={section}>
        <Eyebrow className="mb-4">02 · {f.flowEyebrow}</Eyebrow>
        <DisplayHeading id="fo-f" h={f.flowH} className={`mb-10 ${h2}`} />
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-4 p-0">
          {f.flow.map((step, i) => (
            <li key={step.t} className="flex flex-col gap-3.5 rounded-2xl border border-[#e1e5de] bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-full bg-sky text-brand">
                  <Icon name={step.ic} size={20} />
                </span>
                <span className="font-serif text-[16px] text-brand">{String(i + 1).padStart(2, '0')} →</span>
              </div>
              <h3 className="m-0 font-sans text-[20px] font-semibold tracking-[-.02em]">{step.t}</h3>
              <p className="m-0 font-serif text-[17px] leading-[1.45] text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 · Modules */}
      <section aria-labelledby="fo-m" className={section}>
        <Eyebrow className="mb-4">03 · {f.modulesEyebrow}</Eyebrow>
        <DisplayHeading id="fo-m" h={f.modulesH} className={`mb-8 ${h2}`} />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-12 p-0">
          {f.modules.map((m) => (
            <li key={m.t} className="flex items-center gap-[18px] border-t border-line-soft py-5">
              <Icon name={m.ic} size={24} className="flex-none text-brand" />
              <div>
                <h3 className="m-0 font-sans text-[19px] font-semibold">{m.t}</h3>
                <p className="m-0 mt-0.5 font-serif text-[17px] text-muted">{m.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 04 · Access & structure */}
      <section aria-labelledby="fo-a" className="page-container mt-[clamp(64px,8vw,93px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-x-16 gap-y-8 rounded-3xl bg-sage p-[clamp(28px,4vw,46px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>04 · {f.accessEyebrow}</Eyebrow>
            <DisplayHeading
              id="fo-a"
              h={f.accessH}
              className="text-[clamp(30px,3vw,35px)] leading-[1.04] tracking-[-.04em]"
            />
            <p className="m-0 font-serif text-[19px] leading-[1.5] text-ink-3">{f.access}</p>
          </div>
          <ol className="m-0 flex list-none flex-col gap-3 self-center p-0">
            {f.accessList.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3.5 rounded-xl bg-ivory px-[22px] py-[18px] font-serif text-[19px]"
              >
                <span className="font-sans text-[13px] text-brand">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 · Technical details (native accordion) */}
      <section
        aria-labelledby="fo-t"
        className={`${section} grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-x-[clamp(40px,6vw,70px)] gap-y-8`}
      >
        <div className="flex flex-col gap-4">
          <Eyebrow>05 · {f.techEyebrow}</Eyebrow>
          <DisplayHeading id="fo-t" h={f.techH} className={h2} />
          <p className="m-0 font-serif text-[18px] text-muted">{f.techNote}</p>
        </div>
        <div className="flex flex-col border-t border-line">
          {f.tech.map((d) => (
            <details key={d.t} className="border-b border-line">
              <summary className="flex min-h-[64px] cursor-pointer items-center justify-between gap-4 font-sans text-[20px] font-semibold tracking-[-.02em]">
                {d.t}
                <span
                  aria-hidden="true"
                  className="plus inline-block font-serif text-[24px] font-normal text-brand transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <p className="m-0 mb-[22px] max-w-[620px] font-serif text-[18px] leading-[1.5] text-ink-4">{d.d}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 06 · Contribution */}
      <section className={section}>
        <div className="flex flex-wrap gap-x-16 gap-y-6 border-t border-ink pt-8">
          <Eyebrow className="flex-[0_0_220px]">06 · {f.contribEyebrow}</Eyebrow>
          <p className="m-0 flex-[1_1_420px] text-pretty font-serif text-[clamp(24px,2.6vw,30px)] leading-[1.3] text-ink">
            {f.contrib}
          </p>
        </div>
        <NextProject href={href(locale, 'logit')} label={t.common.next} name="Logit" className="mt-14" />
      </section>
    </article>
  );
}
