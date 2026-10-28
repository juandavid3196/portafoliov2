import type { Metadata } from 'next';
import { ButtonLink } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { Eyebrow } from '@/components/Eyebrow';
import { Icon } from '@/components/Icon';
import { GitHubMark, LinkedInMark, WhatsAppMark } from '@/components/Logos';
import { site } from '@/config/site';
import { dictionaries, hasLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps<'/[locale]/contact'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return buildMetadata(locale, 'contact', dictionaries[locale].contact.lead);
}

type RowProps = { href: string; icon: React.ReactNode; title: string; desc: string };

function ChannelRow({ href, icon, title, desc }: RowProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="group flex items-center gap-5 border-b border-line py-[18px] text-ink hover:text-brand"
    >
      <span className="grid size-9 flex-none place-items-center text-ink group-hover:text-brand">{icon}</span>
      <span className="flex-1">
        <span className="block font-serif text-[clamp(21px,1.9vw,22px)] leading-[1.15]">{title}</span>
        <span className="mt-1 block font-serif text-[clamp(16px,1.4vw,16px)] text-muted">{desc}</span>
      </span>
      <Icon name="arrow-up-right" size={20} strokeWidth={1.5} className="flex-none text-ink" />
    </a>
  );
}

export default async function ContactPage() {
  const { t } = await getDictionary();
  const c = t.contact;
  const iconCls = 'size-[30px]';

  return (
    <section aria-labelledby="ct-h" className="page-container pb-4 pt-[clamp(32px,4.2vw,49px)]">
      <Eyebrow className="mb-5 text-[11px]">{c.eyebrow}</Eyebrow>

      <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-6">
        <h1
          id="ct-h"
          className="m-0 font-sans text-[clamp(36px,4.8vw,58px)] font-bold leading-[1.02] tracking-[-.045em]"
        >
          <span className="block">{c.h.l1}</span>
          <span className="block">
            <em className="font-accent text-[1.12em] font-normal italic leading-[.9] tracking-[-.02em] text-brand">
              {c.h.em}
            </em>
            {c.h.post}
          </span>
        </h1>
        <p className="m-0 mt-3 flex flex-col gap-1 font-serif text-[clamp(16px,1.35vw,16px)]">
          <span className="flex items-center gap-3 text-ink">
            <span aria-hidden="true" className="size-2.5 flex-none rounded-full bg-[#1f9d55]" />
            {c.status}
          </span>
          <span className="pl-[22px] text-muted">{c.tz}</span>
        </p>
      </div>

      <p className="m-0 mt-7 max-w-[620px] text-pretty font-serif text-[clamp(19px,2vw,23px)] leading-[1.4] text-ink-4">
        {c.lead}
      </p>

      <div className="mt-[clamp(36px,4.5vw,52px)] grid items-start gap-x-[clamp(24px,2.4vw,28px)] gap-y-10 min-[1000px]:grid-cols-[1fr_1.12fr]">
        {/* Channels */}
        <div className="flex flex-col">
          <h2 className="m-0 font-serif text-[clamp(28px,3vw,35px)] font-normal leading-[1.1] tracking-[-.01em]">
            {c.channelsH}
          </h2>
          <p className="m-0 mt-3 font-serif text-[clamp(17px,1.5vw,17px)] text-muted">{c.channelsSub}</p>

          {/* Only configured channels are shown: nothing is invented. */}
          {site.whatsapp ? (
            <div className="mt-7 flex items-center gap-6 rounded-xl bg-sage p-[clamp(20px,2.2vw,26px)]">
              <WhatsAppMark className="size-[clamp(48px,4.6vw,53px)] flex-none text-brand" />
              <div className="flex flex-col items-start gap-1">
                <p className="m-0 font-serif text-[clamp(22px,2.1vw,24px)] leading-[1.15]">{c.whatsapp.t}</p>
                <p className="m-0 font-serif text-[clamp(16px,1.4vw,16px)] text-muted">{c.whatsapp.d}</p>
                <ButtonLink href={`https://wa.me/${site.whatsapp}`} size="card" arrow className="mt-3">
                  {c.whatsapp.cta}
                </ButtonLink>
              </div>
            </div>
          ) : null}

          <div className="mt-5 flex flex-col border-t border-line">
            {site.email ? (
              <ChannelRow
                href={`mailto:${site.email}`}
                icon={<Icon name="mail" size={30} strokeWidth={1.4} />}
                title={c.email.t}
                desc={c.email.d}
              />
            ) : null}
            {site.linkedin ? (
              <ChannelRow
                href={site.linkedin}
                icon={<LinkedInMark className={iconCls} />}
                title={c.linkedin.t}
                desc={c.linkedin.d}
              />
            ) : null}
            <ChannelRow
              href={site.github}
              icon={<GitHubMark className={iconCls} />}
              title={c.github.t}
              desc={site.githubHandle}
            />
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-6">
            <div className="pr-6">
              <p className="m-0 font-sans text-[11px] uppercase tracking-[.16em] text-eyebrow">{c.basedLabel}</p>
              <p className="m-0 mt-2 font-serif text-[clamp(18px,1.7vw,20px)]">{c.basedValue}</p>
            </div>
            <div className="border-l border-line pl-6">
              <p className="m-0 font-sans text-[11px] uppercase tracking-[.16em] text-eyebrow">{c.langLabel}</p>
              <p className="m-0 mt-2 font-serif text-[clamp(18px,1.7vw,20px)]">{c.langValue}</p>
            </div>
          </div>
          <p className="m-0 mt-6 font-serif text-[clamp(16px,1.4vw,16px)] text-muted">{c.open}</p>
        </div>

        {/* Message form (FormSubmit) */}
        <div className="rounded-2xl border border-[#dfe3dd] bg-[#fdfdfb] p-[clamp(22px,2.9vw,34px)]">
          <h2 className="m-0 font-serif text-[clamp(28px,3vw,35px)] font-normal leading-[1.1] tracking-[-.01em]">
            {c.form.h}
          </h2>
          <p className="m-0 mb-6 mt-3 font-serif text-[clamp(17px,1.5vw,17px)] text-muted">{c.form.sub}</p>
          <ContactForm form={c.form} email={site.email} noEmail={c.noEmail} />
        </div>
      </div>
    </section>
  );
}
