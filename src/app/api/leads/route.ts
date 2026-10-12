import { promises as fs } from 'node:fs';
import { timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';
import { LEADS_FILE } from '@/lib/server/leads';
import { clientIp } from '@/lib/server/handleLead';

// Wrong keys per IP: after 5 misses in 10 minutes the link stops answering, so the key can't be guessed by brute force
const misses = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_MISSES = 5;

// GET /api/leads?key=YOUR_ADMIN_KEY: downloads the leads workbook (Excel).
// Protected by LEADS_ADMIN_KEY in .env.local; returns 404 when no key is configured.
export async function GET(request: NextRequest) {
  const expected = process.env.LEADS_ADMIN_KEY;
  const given = request.nextUrl.searchParams.get('key') ?? '';
  if (!expected) return new Response('Not found', { status: 404 });

  const ip = clientIp(request);
  const now = Date.now();
  const recent = (misses.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_MISSES) return new Response('Too many attempts. Try again later.', { status: 429 });

  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    misses.set(ip, [...recent, now]);
    return new Response('Unauthorized', { status: 401 });
  }

  let file: Buffer;
  try {
    file = await fs.readFile(LEADS_FILE);
  } catch {
    return new Response('No leads yet.', { status: 404 });
  }

  const date = new Date().toISOString().slice(0, 10);
  return new Response(new Uint8Array(file), {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="inovaraa-leads-${date}.xlsx"`,
      'Cache-Control': 'no-store',
    },
  });
}
