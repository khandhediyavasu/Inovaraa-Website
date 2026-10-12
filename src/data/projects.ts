// Projects — single source of truth for the home page section and /projects.
//
// HOW TO EDIT:
//  - `tint` is the pastel panel behind the laptop; `accent` colors the mock screen.
//  - `screen` picks the mock screen layout: 'dashboard' | 'website' | 'tiles'.
//  - Add `image: '/work/<file>.png'` (put the file in /public/work) to show a real
//    screenshot instead of the illustrated laptop.
//  - `liveUrl` is optional; when set, the card links to the live site.

export type ScreenVariant = 'dashboard' | 'website' | 'tiles';

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  tint: string;
  accent: string;
  screen: ScreenVariant;
  image?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'careconnect',
    name: 'CareConnect',
    category: 'Healthcare · Aged Care',
    description:
      'A care management platform for an in-home aged and disability care provider. It runs personalized care plans, dementia care, nursing, transport and self-managed packages.',
    tint: '#FDE7CF',
    accent: '#EA580C',
    screen: 'dashboard',
  },
  {
    slug: 'physioflow',
    name: 'PhysioFlow',
    category: 'Healthcare · Physiotherapy',
    description:
      'Clinic management software for physiotherapy practices. Patients register themselves, staff book and manage appointments, and invoicing and payments are built in.',
    tint: '#B9F6EE',
    accent: '#0D9488',
    screen: 'website',
  },
  {
    slug: 'shipping-management',
    name: 'Shipping Management System',
    category: 'Logistics',
    description:
      'End-to-end logistics for truck and coastal transshipments, door to door and port to port, with live vehicle tracking, dispatching, ledgers, invoicing and billing.',
    tint: '#C7DDFE',
    accent: '#2563EB',
    screen: 'dashboard',
  },
  {
    slug: 'crm',
    name: 'Sales CRM',
    category: 'Sales & CRM',
    description:
      'A CRM that tracks every customer from first contact to revenue. It turns leads into opportunities and manages the invoices that follow.',
    tint: '#DDD8FE',
    accent: '#6366F1',
    screen: 'dashboard',
  },
  {
    slug: 'food-stock',
    name: 'Food Stock',
    category: 'Food Supply · ERP',
    description:
      'A stock and invoicing platform that connects to large ERP systems. It manages suppliers, products and pricing, and offers APIs for e-commerce stores.',
    tint: '#FEF0C3',
    accent: '#CA8A04',
    screen: 'tiles',
  },
  {
    slug: 'tavili-native',
    name: 'Tavili Native',
    category: 'Multi-tenant SaaS',
    description:
      'Builds on Food Stock with multi-company tenancy and real-time dashboards. Live socket updates let one team manage many businesses from one place.',
    tint: '#B4F2D4',
    accent: '#059669',
    screen: 'dashboard',
  },
  {
    slug: 'buildcon',
    name: 'BuildCon',
    category: 'Real Estate',
    description:
      'A booking system for apartments and shops. It covers inquiries, projects, bookings, receipts and unit buy-sell, with daily inquiry reports.',
    tint: '#FBD3EA',
    accent: '#DB2777',
    screen: 'website',
  },
  {
    slug: 'seva-kiosk',
    name: 'Seva Kiosk',
    category: 'Self-service Kiosk',
    description:
      'A self-service kiosk for a temple. Visitors choose prasad items, pay by UPI and collect a printed receipt.',
    tint: '#FED9B5',
    accent: '#F97316',
    screen: 'tiles',
  },
  {
    slug: 'euc-finance-compliance',
    name: 'EUC Finance Compliance',
    category: 'Finance · Compliance',
    description:
      'End-user computing controls for finance teams, covering inventory, discovery, data classification, risk assessment, monitoring and information security.',
    tint: '#DFE5EE',
    accent: '#334155',
    screen: 'dashboard',
  },
];

// "Impact by the numbers" card above the project grid. Keep these verifiable:
// a client may ask about any figure during a pitch.
export const impactStats = [
  { value: `${projects.length}+`, label: 'projects delivered' },
  // Healthcare, logistics, finance, real estate, food & retail, sales & self-service, education
  // (education through our partner Alpha Computers); matches the Industries page
  { value: '7', label: 'industries served' },
  { value: '7+ years', label: 'of engineering experience' },
];
