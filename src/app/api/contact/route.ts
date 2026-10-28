import { site } from '@/config/site';

// Receives the contact form and emails it to site.email through Resend.
// Needs RESEND_API_KEY (and optionally CONTACT_FROM once a domain is verified in Resend).
// Without a verified domain Resend only delivers to the address that owns the account.
const FROM = process.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !site.email) return Response.json({ ok: false }, { status: 500 });

  const body = await request.json().catch(() => null);
  const name = clean(body?.name, 120);
  const email = clean(body?.email, 200);
  const company = clean(body?.company, 200);
  const topic = clean(body?.topic, 60);
  const message = clean(body?.message, 5000);
  const subject = clean(body?.subject, 120) || 'Portfolio contact';

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [site.email],
      reply_to: email,
      subject: `${subject} · ${name}`,
      text: [...(topic ? [`Topic: ${topic}`] : []), `Name: ${name}`, `Email: ${email}`, ...(company ? [`Company: ${company}`] : []), '', message].join('\n'),
      html: `${topic ? `<p><b>Topic:</b> ${escapeHtml(topic)}</p>` : ''}<p><b>${escapeHtml(name)}</b> &lt;${escapeHtml(email)}&gt;${company ? `<br>${escapeHtml(company)}` : ''}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  return Response.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
