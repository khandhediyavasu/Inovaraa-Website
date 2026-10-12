import path from 'node:path';
import { promises as fs } from 'node:fs';
import ExcelJS from 'exceljs';

// Server-only: every form submission is appended as one row to an Excel workbook.
// Location: LEADS_FILE env var, or <project>/data/leads.xlsx by default.
// The folder holds client contact details, so it is git-ignored.

export type Lead = {
  type: 'Contact' | 'Newsletter';
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  page?: string;
};

export const LEADS_FILE = process.env.LEADS_FILE || path.join(process.cwd(), 'data', 'leads.xlsx');
const TIME_ZONE = process.env.LEADS_TIMEZONE || 'Asia/Kolkata';

const COLUMNS: Partial<ExcelJS.Column>[] = [
  { header: 'Received', key: 'received', width: 18 },
  { header: 'Type', key: 'type', width: 12 },
  { header: 'First name', key: 'firstName', width: 16 },
  { header: 'Last name', key: 'lastName', width: 16 },
  { header: 'Email', key: 'email', width: 30 },
  { header: 'Phone', key: 'phone', width: 18 },
  { header: 'Company', key: 'company', width: 24 },
  { header: 'Service', key: 'service', width: 26 },
  { header: 'Message', key: 'message', width: 60 },
  { header: 'Page', key: 'page', width: 18 },
];

// "2026-10-09 14:05" in the business time zone: readable and sorts correctly as text
function timestamp() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: TIME_ZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value])
  );
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

async function appendRow(lead: Lead) {
  await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
  const workbook = new ExcelJS.Workbook();
  let sheet: ExcelJS.Worksheet | undefined;
  try {
    await workbook.xlsx.readFile(LEADS_FILE);
    sheet = workbook.getWorksheet('Leads');
  } catch {
    // First submission: the file does not exist yet
  }
  if (!sheet) sheet = workbook.addWorksheet('Leads', { views: [{ state: 'frozen', ySplit: 1 }] });

  sheet.columns = COLUMNS;
  const header = sheet.getRow(1);
  header.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  header.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F46E5' } };

  const row = sheet.addRow({ received: timestamp(), ...lead });
  row.getCell('message').alignment = { wrapText: true, vertical: 'top' };
  sheet.autoFilter = { from: 'A1', to: `J${sheet.rowCount}` };

  await workbook.xlsx.writeFile(LEADS_FILE);
}

// Writes are queued so two submissions at the same moment can't corrupt the file
let queue: Promise<unknown> = Promise.resolve();
export function saveLead(lead: Lead): Promise<void> {
  const run = queue.then(() => appendRow(lead));
  queue = run.catch(() => undefined);
  return run;
}
