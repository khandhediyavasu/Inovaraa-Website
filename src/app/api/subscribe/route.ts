import { clean, clientIp, isEmail, processLead, rateLimited } from '@/lib/server/handleLead';

// POST /api/subscribe: newsletter signup -> Excel row + email to info@inovaraa.com
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (clean(body.website)) return Response.json({ ok: true });
  if (rateLimited(clientIp(request))) {
    return Response.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const email = clean(body.email, 160);
  if (!isEmail(email)) return Response.json({ ok: false, error: 'Please enter a valid email.' }, { status: 400 });

  return processLead({ type: 'Newsletter', email, page: clean(body.page, 120) || undefined });
}
