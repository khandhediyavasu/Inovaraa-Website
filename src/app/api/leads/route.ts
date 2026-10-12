import { promises as fs } from 'node:fs';
import { timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';
import { LEADS_FILE } from '@/lib/server/leads';

// GET /api/leads?key=YOUR_ADMIN_KEY: downloads the leads workbook (Excel).
// Protected by LEADS_ADMIN_KEY in .env.local; returns 404 when no key is configured.
export async function GET(request: NextRequest) {
  const expected = process.env.LEADS_ADMIN_KEY;
  const given = request.nextUrl.searchParams.get('key') ?? '';
  if (!expected) return new Response('Not found', { status: 404 });

  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return new Response('Unauthorized', { status: 401 });

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
