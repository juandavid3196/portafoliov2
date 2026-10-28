'use client';

import { useState } from 'react';
import type { Dictionary } from '@/content/en';
import { Icon } from './Icon';

type ContactFormProps = {
  form: Dictionary['contact']['form'];
  // Empty when no address is published: the form is then shown disabled with an honest notice.
  email: string;
  noEmail: string;
};

const topicIcons: Record<string, string> = { project: 'laptop', role: 'user', connect: 'message' };

const label = 'font-sans text-[11px] uppercase tracking-[.16em] text-eyebrow';
const field =
  'w-full rounded-lg border border-[#d9ddd6] bg-white px-4 font-serif text-[17px] text-ink placeholder:text-[#9aa19b] focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25';

// No backend of our own: the message is posted to FormSubmit, which forwards it to `email`.
// (First delivery requires confirming the activation email FormSubmit sends to that address.)
export function ContactForm({ form, email, noEmail }: ContactFormProps) {
  const [topic, setTopic] = useState(form.topics[0].k);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const enabled = Boolean(email);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enabled || status === 'sending') return;
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: form.subjects[topic as keyof typeof form.subjects],
          _replyto: String(data.get('email') ?? '').trim(),
          _captcha: 'false',
          name: String(data.get('name') ?? '').trim(),
          email: String(data.get('email') ?? '').trim(),
          company: String(data.get('company') ?? '').trim(),
          message: String(data.get('message') ?? '').trim(),
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || result?.success === 'false' || result?.success === false) throw new Error('send failed');
      formEl.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <fieldset disabled={!enabled} className="m-0 flex min-w-0 flex-col gap-5 border-0 p-0 disabled:opacity-60">
        <div>
          <p id="topic-label" className={`m-0 mb-3 ${label}`}>
            {form.topicLabel}
          </p>
          <div role="radiogroup" aria-labelledby="topic-label" className="grid grid-cols-3 gap-3">
            {form.topics.map((tp) => (
              <label key={tp.k} className="cursor-pointer">
                <input
                  type="radio"
                  name="topic"
                  value={tp.k}
                  checked={topic === tp.k}
                  onChange={() => setTopic(tp.k)}
                  className="peer sr-only"
                />
                <span className="flex h-[70px] flex-col items-center justify-center gap-2 rounded-lg border border-[#d9ddd6] bg-white px-2 text-center font-serif text-[clamp(15px,1.35vw,16px)] text-ink transition-colors duration-200 hover:border-line-strong peer-checked:border-brand peer-checked:bg-sage peer-focus-visible:ring-2 peer-focus-visible:ring-brand/30">
                  <Icon name={topicIcons[tp.k]} size={24} strokeWidth={1.4} />
                  {tp.t}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-4 min-[560px]:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className={label}>{form.name}</span>
            <input name="name" required autoComplete="name" placeholder={form.namePh} className={`h-[46px] ${field}`} />
          </label>
          <label className="flex flex-col gap-2">
            <span className={label}>{form.email}</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={form.emailPh}
              className={`h-[46px] ${field}`}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className={label}>{form.company}</span>
          <input name="company" autoComplete="organization" placeholder={form.companyPh} className={`h-[46px] ${field}`} />
        </label>

        <label className="flex flex-col gap-2">
          <span className={label}>{form.message}</span>
          <textarea
            name="message"
            required
            rows={3}
            placeholder={form.messagePh}
            className={`min-h-[88px] resize-y py-3 leading-[1.4] ${field}`}
          />
          <span className="font-serif text-[14px] text-muted">{form.hint}</span>
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-brand px-6 font-serif text-[18px] text-ivory transition-colors duration-200 hover:bg-brand-hover disabled:cursor-not-allowed"
        >
          {status === 'sending' ? form.sending : form.send}
          <Icon name="arrow-up-right" size={17} strokeWidth={1.6} />
        </button>
      </fieldset>

      {enabled ? (
        <p className="m-0 text-center font-serif text-[14px] text-muted" aria-live="polite">
          {status === 'sent' ? (
            form.sent
          ) : status === 'error' ? (
            <>
              {form.error}{' '}
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
              .
            </>
          ) : (
            form.note
          )}
        </p>
      ) : (
        <p className="m-0 text-center font-serif text-[15px] leading-[1.4] text-ink-4">{noEmail}</p>
      )}
    </form>
  );
}
