import { SITE } from '@/data/site';

// The site has no email backend yet, so forms hand the message to the visitor's email
// app, pre-addressed to info@inovaraa.com. Nothing is lost and it works instantly.
// To send directly from the site instead, connect an email API (e.g. Resend) in a
// server action and replace these calls.
export function openEmail({ subject, body }: { subject: string; body: string }) {
  const url = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
