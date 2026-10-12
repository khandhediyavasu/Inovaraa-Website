import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Industries where Inovaraa Solutions has delivered software: healthcare, logistics and shipping, finance and compliance, real estate, food supply and retail, sales and self-service, and education.',
  alternates: { canonical: '/industries' },
};

type Industry = {
  title: string;
  short: string;
  slug: string;
  desc: string;
  challenges: string[];
  services: string[];
  color: string;
  icon: ReactNode;
};

const industries: Industry[] = [
  {
    title: 'Healthcare',
    short: 'Healthcare',
    slug: 'healthcare',
    desc: 'Care management and clinic software for in-home care providers and physiotherapy practices, from care plans to appointments and invoicing.',
    challenges: [
      'Personalized care plans for aged, dementia and disability care',
      'Nursing, transport and self-managed package tracking in one system',
      'Patient self-registration and online appointment booking',
      'Built-in invoicing and payments for clinics',
    ],
    services: ['Custom Software Development', 'AI & Data Analytics', 'Cybersecurity', 'Managed Services & QA'],
    color: '#F472B6',
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  },
  {
    title: 'Logistics & Shipping',
    short: 'Logistics',
    slug: 'logistics',
    desc: 'Transport management for truck and coastal transshipments, covering door-to-door and port-to-port moves with tracking and billing.',
    challenges: [
      'Truck and coastal transshipment orders in one place',
      'Live vehicle tracking and dispatching',
      'Ledgers, invoicing and billing without spreadsheets',
      'Door-to-door and port-to-port workflows',
    ],
    services: ['Custom Software Development', 'Cloud & DevOps (with RytumX)', 'Digital Transformation', 'AI & Data Analytics'],
    color: '#38BDF8',
    icon: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
  },
  {
    title: 'Finance & Compliance',
    short: 'Finance',
    slug: 'finance',
    desc: 'End-user computing (EUC) controls that help finance teams keep track of the spreadsheets and tools their reporting depends on.',
    challenges: [
      'Inventory and discovery of end-user computing tools',
      'Data classification and risk assessment',
      'Ongoing monitoring of critical files and models',
      'Information security controls for finance teams',
    ],
    services: ['Cybersecurity', 'Custom Software Development', 'AI & Data Analytics', 'Managed Services & QA'],
    color: '#A78BFA',
    icon: <><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></>,
  },
  {
    title: 'Real Estate',
    short: 'Real Estate',
    slug: 'real-estate',
    desc: 'Booking software for apartment and shop developers, from the first inquiry to the final receipt.',
    challenges: [
      'Inquiry tracking with daily inquiry reports',
      'Project and unit inventory for apartments and shops',
      'Bookings and receipts in one system',
      'Unit buy-sell records',
    ],
    services: ['Custom Software Development', 'Digital Transformation', 'Managed Services & QA'],
    color: '#FBBF24',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  },
  {
    title: 'Food Supply & Retail',
    short: 'Retail',
    slug: 'retail',
    desc: 'Stock and invoicing platforms for food suppliers that connect to ERP systems and online stores, including a multi-company version.',
    challenges: [
      'Supplier, product and pricing management',
      'Integration with large ERP systems',
      'APIs for e-commerce stores',
      'Multi-company tenancy with real-time dashboards',
    ],
    services: ['Custom Software Development', 'Cloud & DevOps (with RytumX)', 'AI & Data Analytics', 'Digital Transformation'],
    color: '#34D399',
    icon: <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></>,
  },
  {
    title: 'Sales & Self-Service',
    short: 'Sales',
    slug: 'sales-self-service',
    desc: 'CRMs that follow every customer from first contact to revenue, and self-service kiosks that take orders and payments on their own.',
    challenges: [
      'Lead-to-opportunity tracking',
      'Invoices linked to every deal',
      'Self-service ordering at a kiosk',
      'UPI payments with printed receipts',
    ],
    services: ['Custom Software Development', 'AI Agents & MCP Servers', 'Digital Transformation', 'Managed Services & QA'],
    color: '#22D3EE',
    icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>,
  },
  {
    title: 'Education',
    short: 'Education',
    slug: 'education',
    desc: 'School, college and coaching-class management software, delivered in partnership with Alpha Computers.',
    challenges: [
      'Admissions, fees and student records in one place',
      'Attendance and timetables',
      'Parent communication by SMS and mobile app',
      'Exams and report cards without paperwork',
    ],
    services: ['Custom Software Development', 'Digital Transformation', 'Cloud & DevOps (with RytumX)', 'Managed Services & QA'],
    color: '#FB923C',
    icon: <><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /><line x1="22" y1="10" x2="22" y2="16" /></>,
  },
];

// Sectors where the team has shipped real products (mirrors the home page)
const shipped: { sector: string; projects: string[]; color: string }[] = [
  { sector: 'Healthcare', projects: ['CareConnect', 'PhysioFlow'], color: '#F472B6' },
  { sector: 'Logistics & Shipping', projects: ['Shipping Management System'], color: '#38BDF8' },
  { sector: 'Finance & Compliance', projects: ['EUC Finance Compliance'], color: '#A78BFA' },
  { sector: 'Real Estate', projects: ['BuildCon'], color: '#FBBF24' },
  { sector: 'Food Supply & Retail', projects: ['Food Stock', 'Tavili Native'], color: '#34D399' },
  { sector: 'Sales & Self-Service', projects: ['Sales CRM', 'Seva Kiosk'], color: '#22D3EE' },
  { sector: 'Education', projects: ['Alpha Computers'], color: '#FB923C' },
];

const serviceColumns = Array.from(new Set(industries.flatMap((i) => i.services)));

const accentText = (hex: string): CSSProperties => ({ color: `color-mix(in srgb, ${hex} 70%, var(--ink))` });

const Arrow = ({ className = 'btn-arrow w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IndustryIcon = ({ children, className = 'w-5 h-5' }: { children: ReactNode; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumb="Industries"
        kicker="Industries"
        title={<>Software for sectors <span className="text-gradient">we have already worked in</span></>}
        description="We have built and shipped software in each of these sectors, so we already know the workflows, data and day-to-day priorities involved."
      >
        <Link href="#sectors" className="btn btn--primary btn--lg">
          Explore sectors
          <Arrow />
        </Link>
        <Link href="/contact" className="btn btn--secondary btn--lg">
          Talk to our team
        </Link>
      </PageHero>

      {/* Sector index */}
      <section className="relative pb-20" aria-label="Sector index">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 list-none p-0 m-0 [&>li:last-child]:col-span-2 md:[&>li:last-child]:col-span-1">
            {industries.map((ind, i) => (
              <li key={ind.slug} suppressHydrationWarning data-reveal style={{ '--d': `${i * 70}ms`, '--tile': ind.color } as CSSProperties}>
                <Link href={`#${ind.slug}`} className="surface-glass spotlight lift group rounded-2xl p-4 flex flex-col items-start gap-4 h-full">
                  <span className="icon-tile w-10! h-10! rounded-xl!">
                    <IndustryIcon className="w-4 h-4">{ind.icon}</IndustryIcon>
                  </span>
                  <span className="flex items-center justify-between w-full gap-2">
                    <span className="text-sm font-semibold text-white">{ind.short}</span>
                    <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-y-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sector deep dives */}
      <section id="sectors" className="relative py-24 sm:py-28 scroll-mt-28" aria-labelledby="sectors-heading">
        <div className="absolute inset-0 bg-dots-fade opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            kicker="Sector playbooks"
            id="sectors-heading"
            title={<>Built around how <span className="text-gradient">your business works</span></>}
            description="What we have built in each sector, and the everyday problems those projects solve."
            className="mb-16"
          />

          <div className="flex flex-col gap-8">
            {industries.map((ind, i) => {
              const flip = i % 2 === 1;
              return (
                <article
                  key={ind.slug}
                  id={ind.slug}
                  suppressHydrationWarning data-reveal
                  style={{ '--tile': ind.color } as CSSProperties}
                  className="surface spotlight group relative rounded-[1.75rem] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] scroll-mt-28"
                >
                  {/* Decorative watermark icon + glow */}
                  <span
                    className="absolute -top-24 w-72 h-72 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: ind.color, [flip ? 'right' : 'left']: '-6rem' } as CSSProperties}
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute bottom-[-3rem] w-56 h-56 opacity-[0.06] group-hover:opacity-[0.1] group-hover:rotate-6 transition-all duration-700 pointer-events-none ${flip ? 'right-[-2rem]' : 'left-[-2rem]'} hidden lg:block`}
                    style={accentText(ind.color)}
                    aria-hidden="true"
                  >
                    <IndustryIcon className="w-full h-full">{ind.icon}</IndustryIcon>
                  </span>

                  <div className={`relative p-7 sm:p-10 lg:p-12 flex flex-col ${flip ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-7">
                      <span className="icon-tile">
                        <IndustryIcon>{ind.icon}</IndustryIcon>
                      </span>
                      <span className="font-display text-5xl font-extrabold text-outline leading-none">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.08] mb-4">{ind.title}</h2>
                    <p className="text-slate-400 leading-relaxed mb-8 max-w-xl">{ind.desc}</p>

                    <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">Services we bring</h3>
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {ind.services.map((svc) => (
                        <span
                          key={svc}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                          style={{ ...accentText(ind.color), background: `${ind.color}1A`, border: `1px solid ${ind.color}40` }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: ind.color }} />
                          {svc}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Link href="/contact" className="btn btn--secondary">
                        Discuss your {ind.short.toLowerCase()} project
                        <Arrow />
                      </Link>
                    </div>
                  </div>

                  <div className={`relative p-7 sm:p-10 lg:p-12 bg-white/[0.02] border-t lg:border-t-0 border-white/10 ${flip ? 'lg:order-1 lg:border-r' : 'lg:border-l'}`}>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-5">Challenges we solve</h3>
                    <ol className="list-none p-0 m-0 flex flex-col gap-3">
                      {ind.challenges.map((c, j) => (
                        <li
                          key={c}
                          suppressHydrationWarning data-reveal={flip ? 'left' : 'right'}
                          style={{ '--d': `${120 + j * 90}ms` } as CSSProperties}
                          className="group/row flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-4 sm:px-5 py-4 hover:border-white/20 hover:bg-white/[0.04] transition-colors"
                        >
                          <span
                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold"
                            style={{ ...accentText(ind.color), background: `${ind.color}1A`, border: `1px solid ${ind.color}40` }}
                          >
                            {String(j + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm text-slate-300 leading-snug">{c}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage matrix: which practices apply to which sector */}
      <section className="relative py-24 sm:py-28" aria-labelledby="matrix-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Coverage map"
            id="matrix-heading"
            title={<>Services mapped <span className="text-gradient">to each sector</span></>}
            description="The service lines we bring to each industry, at a glance."
            className="mb-14"
          />
          <div suppressHydrationWarning data-reveal="scale" className="surface rounded-[1.75rem] overflow-hidden">
            <div className="relative overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="text-left font-semibold text-slate-500 text-[11px] uppercase tracking-[0.14em] px-6 py-5">Sector</th>
                    {serviceColumns.map((s) => (
                      <th key={s} scope="col" className="font-semibold text-slate-400 text-xs px-3 py-5 text-center">{s}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {industries.map((ind) => (
                    <tr key={ind.slug} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.03] transition-colors">
                      <th scope="row" className="text-left px-6 py-4 font-semibold text-white whitespace-nowrap">
                        <span className="inline-flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: ind.color, boxShadow: `0 0 12px ${ind.color}` }} aria-hidden="true" />
                          {ind.short}
                        </span>
                      </th>
                      {serviceColumns.map((s) => {
                        const has = ind.services.includes(s);
                        return (
                          <td key={s} className="px-3 py-4 text-center">
                            {has ? (
                              <span
                                className="inline-flex w-7 h-7 rounded-full items-center justify-center"
                                style={{ ...accentText(ind.color), background: `${ind.color}22`, border: `1px solid ${ind.color}55` }}
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="sr-only">Yes</span>
                              </span>
                            ) : (
                              <>
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/15" aria-hidden="true" />
                                <span className="sr-only">No</span>
                              </>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors with shipped products */}
      <section className="relative pb-28" aria-labelledby="shipped-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="surface-glass relative rounded-[1.75rem] p-7 sm:p-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none" aria-hidden="true" />
            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div>
                <div suppressHydrationWarning data-reveal className="kicker mb-4">Proven in production</div>
                <h2 id="shipped-heading" suppressHydrationWarning data-reveal style={{ '--d': '80ms' } as CSSProperties} className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.08]">
                  Sectors where we have <span className="text-gradient">shipped real products</span>
                </h2>
              </div>
              <div suppressHydrationWarning data-reveal style={{ '--d': '160ms' } as CSSProperties}>
                <Link href="/projects" className="btn btn--secondary">
                  See the projects
                  <Arrow />
                </Link>
              </div>
            </div>
            <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 list-none p-0 m-0 sm:[&>li:last-child]:col-span-2 lg:[&>li:last-child]:col-span-1">
              {shipped.map((s, i) => (
                <li
                  key={s.sector}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 4) * 80}ms` } as CSSProperties}
                  className="surface spotlight lift rounded-2xl p-5 flex flex-col gap-3"
                >
                  <span className="inline-flex items-center gap-2.5 text-base font-semibold text-white">
                    <span className="w-2.5 h-2.5 rounded-full pulse-soft" style={{ background: s.color }} aria-hidden="true" />
                    {s.sector}
                  </span>
                  <span className="flex flex-wrap gap-1.5">
                    {s.projects.map((p) => (
                      <span key={p} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{p}</span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
