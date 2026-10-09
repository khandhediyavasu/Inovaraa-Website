import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Inovaraa Solutions delivers industry-specific IT solutions for financial services, healthcare, manufacturing, retail, energy, aerospace, education, and telecom.',
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
    title: 'Financial Services & FinTech',
    short: 'Finance',
    slug: 'financial-services',
    desc: 'Regulatory compliance, digital banking, fraud detection, and real-time analytics for banks, insurers, and fintechs.',
    challenges: ['Regulatory compliance (GDPR, SOX, PCI-DSS)', 'Legacy core banking modernization', 'Real-time fraud detection with sub-10ms inference', 'Digital customer experience & open banking APIs'],
    services: ['Cybersecurity', 'AI & Analytics', 'Cloud Infrastructure', 'Digital Transformation'],
    color: '#A78BFA',
    icon: <><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></>,
  },
  {
    title: 'Healthcare & Life Sciences',
    short: 'Healthcare',
    slug: 'healthcare',
    desc: 'HIPAA-compliant platforms, clinical AI, patient engagement, and interoperability solutions for health systems and pharma.',
    challenges: ['HIPAA & clinical data sovereignty compliance', 'Interoperability & HL7 FHIR pipelines', 'Clinical decision support AI with zero hallucination', 'Patient experience digitization & EHR integration'],
    services: ['AI & Analytics', 'Cybersecurity', 'Software Development', 'Managed Services'],
    color: '#F472B6',
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  },
  {
    title: 'Smart Manufacturing & Industry 4.0',
    short: 'Manufacturing',
    slug: 'manufacturing',
    desc: 'Industry 4.0 transformation including IoT, predictive maintenance, smart supply chain, and quality intelligence.',
    challenges: ['Legacy OT/IT integration & air-gapping', 'Predictive equipment maintenance with edge sensors', 'End-to-end supply chain telemetry visibility', 'Automated computer vision quality control'],
    services: ['AI & Analytics', 'Digital Transformation', 'Cloud Infrastructure', 'IoT'],
    color: '#FBBF24',
    icon: <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />,
  },
  {
    title: 'Retail & Omnichannel E-commerce',
    short: 'Retail',
    slug: 'retail',
    desc: 'Omnichannel platforms, demand forecasting, personalization engines, and supply chain optimization for retailers.',
    challenges: ['Omnichannel inventory unification across 1,000+ stores', 'Real-time inventory intelligence & stockout prevention', 'Sub-second customer personalization at scale', 'High-concurrency flash sale traffic resilience'],
    services: ['Digital Transformation', 'AI & Analytics', 'Software Development'],
    color: '#34D399',
    icon: <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></>,
  },
  {
    title: 'Energy, CleanTech & Utilities',
    short: 'Energy',
    slug: 'energy',
    desc: 'Smart grid technology, sustainability analytics, NERC CIP compliance, and operational intelligence for energy providers.',
    challenges: ['NERC CIP regulatory compliance audits', 'Smart grid modernization & load balancing', 'Carbon accounting & ESG emission tracking', 'SCADA infrastructure zero-trust perimeter defense'],
    services: ['Cybersecurity', 'AI & Analytics', 'Managed Services'],
    color: '#22D3EE',
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: 'Aerospace & Mission-Critical Defense',
    short: 'Aerospace',
    slug: 'aerospace',
    desc: 'Mission-critical systems, secure defense infrastructure, simulation platforms, and compliance for aerospace organizations.',
    challenges: ['ITAR, CMMC & FedRAMP High compliance', 'Ultra-resilient failover with sub-second RTO', 'Air-gapped classified cloud environments', 'Software-defined supply chain traceability'],
    services: ['Cybersecurity', 'Software Development', 'Cloud Infrastructure'],
    color: '#38BDF8',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

// Sectors where the team has shipped real products (mirrors the home page)
const shipped: { sector: string; projects: string[]; color: string }[] = [
  { sector: 'Healthcare', projects: ['Ram Care', 'Plus Physio'], color: '#F472B6' },
  { sector: 'Logistics & Shipping', projects: ['Shipping Management'], color: '#38BDF8' },
  { sector: 'Finance & Compliance', projects: ['EUC Compliance'], color: '#A78BFA' },
  { sector: 'Real Estate', projects: ['Shaligram BuildCon'], color: '#FBBF24' },
  { sector: 'Food Supply & Retail', projects: ['Food Stock', 'Tavili Native'], color: '#34D399' },
  { sector: 'Sales & Self-Service', projects: ['Sales CRM', 'Vadtal Kiosk'], color: '#22D3EE' },
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
        kicker="Sector Depth"
        title={<>Industry Expertise That Goes <span className="text-gradient">Deeper Than Technology</span></>}
        description="Our domain specialists understand your sector's unique compliance regulations, data sovereignty rules, and operational priorities."
      >
        <Link href="#sectors" className="btn btn--primary btn--lg">
          Explore sectors
          <Arrow />
        </Link>
        <Link href="/contact" className="btn btn--secondary btn--lg">
          Consult a Domain Specialist
        </Link>
      </PageHero>

      {/* Sector index */}
      <section className="relative pb-20" aria-label="Sector index">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 list-none p-0 m-0">
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
            title={<>Built around your <span className="text-gradient">rules and realities</span></>}
            description="Each sector brings its own regulations, legacy systems and pressure points. Here is how we approach them."
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

                    <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">Target Industry Solutions</h3>
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
                        Discuss {ind.short} Architecture
                        <Arrow />
                      </Link>
                    </div>
                  </div>

                  <div className={`relative p-7 sm:p-10 lg:p-12 bg-white/[0.02] border-t lg:border-t-0 border-white/10 ${flip ? 'lg:order-1 lg:border-r' : 'lg:border-l'}`}>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-5">Sector Challenges We Solve</h3>
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
            title={<>Practices mapped <span className="text-gradient">to every sector</span></>}
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
            <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
              {shipped.map((s, i) => (
                <li
                  key={s.sector}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 3) * 80}ms` } as CSSProperties}
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
