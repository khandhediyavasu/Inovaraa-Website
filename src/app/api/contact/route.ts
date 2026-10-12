import { clean, clientIp, isEmail, processLead, rateLimited } from '@/lib/server/handleLead';

// POST /api/contact: contact form submission -> Excel row + email to info@inovaraa.com
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the "website" field
  if (clean(body.website)) return Response.json({ ok: true });

  if (rateLimited(clientIp(request))) {
    return Response.json({ ok: false, error: 'Too many messages. Please try again in a few minutes.' }, { status: 429 });
  }

  const lead = {
    type: 'Contact' as const,
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    email: clean(body.email, 160),
    company: clean(body.company, 120),
    phone: clean(body.phone, 40),
    service: clean(body.service, 80),
    message: clean(body.message, 5000),
    page: '/contact',
  };

  if (!lead.firstName || !lead.lastName || !lead.company || !lead.service || !isEmail(lead.email) || lead.message.length < 20) {
    return Response.json({ ok: false, error: 'Please fill in all required fields.' }, { status: 400 });
  }

  return processLead(lead);
}
