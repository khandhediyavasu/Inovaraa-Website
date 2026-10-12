import nodemailer from 'nodemailer';
import { SITE } from '@/data/site';
import type { Lead } from './leads';

// Server-only: emails each submission to info@inovaraa.com (MAIL_TO) through the
// SMTP account in .env.local. Reply-To is the visitor, so "Reply" answers them directly.

function transport() {
  const host = process.env.SMTP_HOST;
  if (!host || !process.env.SMTP_USER || !process.env.SMTP_PASS) return null;
  const port = Number(process.env.SMTP_PORT || 465);
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function sendLeadEmail(lead: Lead): Promise<'sent' | 'skipped'> {
  const t = transport();
  if (!t) {
    console.warn('[leads] SMTP is not configured (.env.local), so no email was sent. The lead was still saved to Excel.');
    return 'skipped';
  }

  const name = [lead.firstName, lead.lastName].filter(Boolean).join(' ');
  const rows: [string, string | undefined][] = [
    ['Type', lead.type],
    ['Name', name || undefined],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Company', lead.company],
    ['Service', lead.service],
    ['Page', lead.page],
  ];
  const filled = rows.filter(([, v]) => v);

  const subject =
    lead.type === 'Newsletter'
      ? `New newsletter subscriber: ${lead.email}`
      : `New inquiry: ${lead.service || 'General'} from ${name || lead.email}${lead.company ? ` (${lead.company})` : ''}`;

  const text = [...filled.map(([k, v]) => `${k}: ${v}`), '', lead.message ?? ''].join('\n');
  const html = `
    <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#0F172A">
      <h2 style="margin:0 0 12px">${escape(subject)}</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${filled.map(([k, v]) => `<tr><td style="color:#64748B;padding-right:16px">${k}</td><td><strong>${escape(v!)}</strong></td></tr>`).join('')}
      </table>
      ${lead.message ? `<p style="margin-top:16px;white-space:pre-wrap;border-left:3px solid #6366F1;padding-left:12px">${escape(lead.message)}</p>` : ''}
      <p style="color:#94A3B8;font-size:12px;margin-top:24px">Sent from the ${escape(SITE.name)} website. Reply to this email to answer the sender.</p>
    </div>`;

  await t.sendMail({
    from: process.env.MAIL_FROM || `"${SITE.name} Website" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || SITE.email,
    replyTo: lead.email,
    subject,
    text,
    html,
  });
  return 'sent';
}
