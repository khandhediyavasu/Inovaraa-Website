import { saveLead, type Lead } from './leads';
import { sendLeadEmail } from './mailer';

// Shared by the form API routes: basic abuse protection, then save to Excel and email.

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function clientIp(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'local';
}

export function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export const isEmail = (v: unknown): v is string => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

// Trim and cap every text field so the sheet and email stay clean
export const clean = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function processLead(lead: Lead) {
  const [saved, emailed] = await Promise.allSettled([saveLead(lead), sendLeadEmail(lead)]);
  if (saved.status === 'rejected') console.error('[leads] Could not write to Excel:', saved.reason);
  if (emailed.status === 'rejected') console.error('[leads] Could not send email:', emailed.reason);

  const ok = saved.status === 'fulfilled' || (emailed.status === 'fulfilled' && emailed.value === 'sent');
  return Response.json(ok ? { ok: true } : { ok: false, error: 'We could not save your message. Please email info@inovaraa.com.' }, { status: ok ? 200 : 500 });
}
