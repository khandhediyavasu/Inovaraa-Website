import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Software Development, AI & MCP Server Services',
  description: 'Inovaraa Solutions services: custom software development, AI agents and MCP servers, AI and data analytics, cloud and DevOps with RytumX, cybersecurity, digital transformation, and managed services and QA.',
  alternates: { canonical: '/services' },
};

type Service = {
  title: string;
  short: string;
  slug: string;
  description: string;
  href: string;
  features: string[];
  industries: string[];
  color: string;
  icon: ReactNode;
  art: ReactNode;
};

const services: Service[] = [
  {
    title: 'Custom Software Development',
    short: 'Custom Software',
    slug: 'software-development',
    description: 'Web, mobile and back-office software built around how your business works. We use .NET Core, Angular, React, Next.js, Node.js and React Native, and you own all the code we write.',
    href: '/services/software-development',
    features: ['Web applications & portals', 'React Native mobile apps', '.NET Core & Node.js APIs', 'CRMs, booking & billing systems', 'Multi-tenant SaaS platforms', 'QA testing on every release'],
    industries: ['Healthcare', 'Logistics & Shipping', 'Real Estate', 'Food Supply & Retail'],
    color: '#22D3EE',
    icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
    art: <CodeArt />,
  },
  {
    title: 'AI Agents & MCP Servers',
    short: 'AI Agents & MCP',
    slug: 'ai-agents-mcp-servers',
    description: 'Connect Claude, ChatGPT and other AI assistants to your software. We build custom MCP (Model Context Protocol) servers, AI agents and secure LLM integrations, and deploy them with our DevOps partner RytumX.',
    href: '/services/ai-agents-mcp-servers',
    features: ['Custom MCP server development', 'AI agents & workflow automation', 'Claude & OpenAI API integration', 'Document search (RAG)', 'OAuth-secured remote MCP servers', 'Linux server setup & deployment'],
    industries: ['Healthcare', 'Logistics & Shipping', 'Finance & Compliance'],
    color: '#818CF8',
    icon: <><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" /></>,
    art: <AiArt />,
  },
  {
    title: 'AI & Data Analytics',
    short: 'AI & Data Analytics',
    slug: 'ai-data-analytics',
    description: 'Reporting dashboards, reliable data flows between the systems you already use, and practical AI features such as search, summaries and assistants added to your existing apps.',
    href: '/services/ai-data-analytics',
    features: ['Real-time reporting dashboards', 'Scheduled reports & exports', 'Data sync between existing systems', 'AI search & summaries', 'In-app AI assistants', 'Role-based data access'],
    industries: ['Food Supply & Retail', 'Sales & Self-Service', 'Logistics & Shipping'],
    color: '#A78BFA',
    icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
    art: <AiArt />,
  },
  {
    title: 'Cloud & DevOps',
    short: 'Cloud & DevOps',
    slug: 'cloud-infrastructure',
    description: 'Azure and AWS setup, deployments, CI/CD pipelines and monitoring for your applications, delivered together with our DevOps partner RytumX.',
    href: '/services/cloud-infrastructure',
    features: ['Azure & AWS environment setup', 'Moving apps to the cloud', 'Docker containers', 'CI/CD pipelines', 'Monitoring, logging & alerts', 'Cloud cost reviews'],
    industries: ['Logistics & Shipping', 'Food Supply & Retail', 'Healthcare'],
    color: '#38BDF8',
    icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
    art: <CloudArt />,
  },
  {
    title: 'Cybersecurity',
    short: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Security built into the software we deliver: secure-by-design development, access control, code and security reviews, vulnerability scanning and hardening, plus help meeting data protection requirements.',
    href: '/services/cybersecurity',
    features: ['Secure-by-design development', 'Role-based access & sign-in', 'Code & security reviews', 'Dependency & vulnerability scanning', 'Application hardening', 'Data protection requirements'],
    industries: ['Finance & Compliance', 'Healthcare'],
    color: '#34D399',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    art: <ShieldArt />,
  },
  {
    title: 'Digital Transformation',
    short: 'Digital Transformation',
    slug: 'digital-transformation',
    description: 'Move work out of spreadsheets, desktop tools and paper into web and mobile apps, and connect the systems that used to need manual re-entry.',
    href: '/services/digital-transformation',
    features: ['Spreadsheets & paper to web apps', 'Desktop software replacement', 'ERP & online store integrations', 'Payment integrations, including UPI', 'Self-service kiosks', 'Mobile apps for field staff'],
    industries: ['Logistics & Shipping', 'Food Supply & Retail', 'Real Estate', 'Education'],
    color: '#FBBF24',
    icon: <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16" />,
    art: <FlowArt />,
  },
  {
    title: 'Managed Services & QA',
    short: 'Managed Services & QA',
    slug: 'managed-services',
    description: 'Dedicated QA engineers, manual and automated testing, and ongoing maintenance, bug fixes and support after launch, with monitoring set up together with RytumX.',
    href: '/services/managed-services',
    features: ['Dedicated QA engineers', 'Manual & automated testing', 'Maintenance & bug fixes', 'Dependency & framework updates', 'Support after launch', 'Monitoring with RytumX'],
    industries: ['Healthcare', 'Logistics & Shipping', 'Sales & Self-Service'],
    color: '#F472B6',
    icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
    art: <OpsArt />,
  },
];

const Arrow = ({ className = 'btn-arrow w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const accentText = (hex: string) => ({ color: `color-mix(in srgb, ${hex} 70%, var(--ink))` });

export default function ServicesPage() {
  const allFeatures = services.flatMap((s) => s.features.map((f) => ({ f, color: s.color })));
  const half = Math.ceil(allFeatures.length / 2);
  const rows = [allFeatures.slice(0, half), allFeatures.slice(half)];

  return (
    <>
      <PageHero
        crumb="Services"
        kicker="What we do"
        title={<>Software, AI and cloud services from <span className="text-gradient">one hands-on team</span></>}
        description="Inovaraa Solutions is a team of 12 in-house engineers, designers and testers in Ahmedabad, India. We build custom software, connect AI assistants to your systems and look after what we ship, with cloud and DevOps work delivered alongside our partner RytumX."
      >
        <Link href="#catalog" className="btn btn--primary btn--lg">
          Explore services
          <Arrow />
        </Link>
        <Link href="/contact" className="btn btn--secondary btn--lg">
          Talk to our team
        </Link>
      </PageHero>

      {/* Quick index */}
      <section className="relative pb-20" aria-label="Service index">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 list-none p-0 m-0">
            {services.map((s, i) => (
              <li key={s.slug} suppressHydrationWarning data-reveal style={{ '--d': `${i * 70}ms`, '--tile': s.color } as CSSProperties}>
                <Link
                  href={`#${s.slug}`}
                  className="surface-glass spotlight lift group rounded-2xl p-4 flex items-center gap-3 h-full"
                >
                  <span className="icon-tile w-10! h-10! rounded-xl! shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                    <span className="block text-sm font-semibold text-white leading-tight">{s.short}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="relative py-24 sm:py-28 scroll-mt-28" aria-labelledby="catalog-heading">
        <div className="absolute inset-0 bg-dots-fade opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            kicker="Service catalog"
            id="catalog-heading"
            title={<>Seven services, <span className="text-gradient">one team</span></>}
            description="The people who plan your project are the people who build it. Pick a service to see its scope, our process and FAQs."
            className="mb-16"
          />

          <div className="flex flex-col gap-8">
            {services.map((svc, i) => {
              const flip = i % 2 === 1;
              return (
                <article
                  key={svc.slug}
                  id={svc.slug}
                  suppressHydrationWarning data-reveal
                  style={{ '--tile': svc.color } as CSSProperties}
                  className="surface spotlight group relative rounded-[1.75rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 scroll-mt-28"
                >
                  <span
                    className="absolute -top-24 w-72 h-72 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: svc.color, [flip ? 'right' : 'left']: '-6rem' } as CSSProperties}
                    aria-hidden="true"
                  />

                  <div className={`relative p-7 sm:p-10 lg:p-12 flex flex-col ${flip ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-7">
                      <span className="icon-tile">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{svc.icon}</svg>
                      </span>
                      <span className="font-display text-5xl font-extrabold text-outline leading-none">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.08] mb-4">{svc.title}</h2>
                    <p className="text-slate-400 leading-relaxed mb-7 max-w-xl">{svc.description}</p>

                    <div className="mb-8">
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">Sectors we serve</div>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.industries.map((ind) => (
                          <span
                            key={ind}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                            style={{ ...accentText(svc.color), background: `${svc.color}1A`, border: `1px solid ${svc.color}40` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: svc.color }} />
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link href={svc.href} className="btn btn--primary">
                        Explore {svc.title}
                        <Arrow />
                      </Link>
                    </div>
                  </div>

                  <div className={`relative p-7 sm:p-10 lg:p-12 bg-white/[0.02] border-t lg:border-t-0 border-white/10 ${flip ? 'lg:order-1 lg:border-r' : 'lg:border-l'}`}>
                    <div className="relative h-44 sm:h-52 mb-8 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                      <div className="absolute inset-0 bg-grid-fade opacity-60" aria-hidden="true" />
                      {svc.art}
                    </div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">Core deliverables</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 list-none p-0 m-0">
                      {svc.features.map((f, j) => (
                        <li
                          key={f}
                          suppressHydrationWarning data-reveal="fade"
                          style={{ '--d': `${150 + j * 60}ms` } as CSSProperties}
                          className="flex items-start gap-2.5 text-sm text-slate-300 leading-snug"
                        >
                          <span
                            className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: `${svc.color}22`, border: `1px solid ${svc.color}55`, ...accentText(svc.color) }}
                            aria-hidden="true"
                          >
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables marquee */}
      <section className="relative pb-28 pt-4" aria-label="All deliverables">
        <div className="flex flex-col gap-4">
          {rows.map((row, r) => (
            <div key={r} className={`marquee ${r === 1 ? 'marquee--reverse' : ''}`} style={{ '--speed': '70s', '--gap': '0.75rem' } as CSSProperties} aria-hidden="true">
              <div className="marquee__track">
                {[...row, ...row].map((item, k) => (
                  <span key={`${item.f}-${k}`} className="surface-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                    {item.f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ---------- Service illustrations (pure SVG, no state) ---------- */

function CloudArt() {
  const pts: [number, number][] = [[50, 50], [150, 34], [250, 54], [80, 136], [220, 140], [150, 90]];
  const links: [number, number][] = [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 1], [1, 2], [3, 4]];
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {links.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="#38BDF8" strokeOpacity="0.45" strokeDasharray="4 4" style={{ animation: `dash-flow ${1.2 + (i % 3) * 0.4}s linear infinite` }} />
      ))}
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 5 ? 18 : 8} fill={i === 5 ? '#0EA5E9' : '#0C4A6E'} stroke="#38BDF8" strokeWidth="1.5" />
          {i !== 5 && (
            <circle cx={x} cy={y} r="8" fill="none" stroke="#38BDF8">
              <animate attributeName="r" values="8;16" dur="2.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0" dur="2.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}
      <path d="M142 95 h16 a5 5 0 0 0 0-10 a8 8 0 0 0-15-1 a5 5 0 0 0-1 11z" fill="#FFFFFF" />
    </svg>
  );
}

function AiArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 180" aria-hidden="true">
      {[22, 40, 58, 76].map((r, i) => (
        <circle key={r} cx="150" cy="90" r={r} fill="none" stroke="#A78BFA" strokeOpacity={0.5 - i * 0.1}>
          <animate attributeName="r" values={`${r};${r + 9};${r}`} dur="4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {[[80, 44], [222, 40], [236, 132], [70, 138], [150, 18], [150, 164]].map(([x, y], i) => (
        <g key={i}>
          <line x1="150" y1="90" x2={x} y2={y} stroke="#A78BFA" strokeOpacity="0.35" strokeDasharray="3 4" style={{ animation: 'dash-flow 1.5s linear infinite' }} />
          <circle cx={x} cy={y} r="5" fill="#C4B5FD">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      <circle cx="150" cy="90" r="15" fill="#A78BFA" />
      <path d="M150 81 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFFFFF" />
    </svg>
  );
}

function FlowArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 180" aria-hidden="true">
      <rect x="30" y="46" width="78" height="88" rx="10" fill="#78350F" fillOpacity="0.35" stroke="#FBBF24" strokeOpacity="0.5" strokeDasharray="4 3" />
      {[62, 78, 94, 110].map((y) => (
        <rect key={y} x="44" y={y} width="50" height="6" rx="3" fill="#FBBF24" fillOpacity="0.35" />
      ))}
      <path d="M118 90 H170" stroke="#FBBF24" strokeWidth="2" strokeDasharray="5 5" style={{ animation: 'dash-flow 0.8s linear infinite' }} />
      <polygon points="170,83 181,90 170,97" fill="#FBBF24" />
      {[[196, 36], [234, 36], [196, 96], [234, 96]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="32" height="46" rx="9" fill="#FBBF24" fillOpacity={0.25 + i * 0.15} stroke="#FCD34D">
          <animate attributeName="y" values={`${y};${y - 5};${y}`} dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function ShieldArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 180" aria-hidden="true">
      <defs>
        <clipPath id="svc-shield-clip">
          <path d="M150 18 L200 36 V82 C200 114 176 134 150 146 C124 134 100 114 100 82 V36 Z" />
        </clipPath>
        <linearGradient id="svc-scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34D399" stopOpacity="0" />
          <stop offset="1" stopColor="#34D399" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path d="M150 18 L200 36 V82 C200 114 176 134 150 146 C124 134 100 114 100 82 V36 Z" fill="#064E3B" fillOpacity="0.5" stroke="#34D399" strokeWidth="1.5" />
      <g clipPath="url(#svc-shield-clip)">
        <rect x="96" width="110" height="34" fill="url(#svc-scan)">
          <animate attributeName="y" values="-34;146" dur="2.6s" repeatCount="indefinite" />
        </rect>
      </g>
      <polyline points="132,82 146,96 172,68" fill="none" stroke="#6EE7B7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {[[50, 40], [250, 46], [44, 130], [256, 132]].map(([x, y], i) => (
        <rect key={i} x={x - 11} y={y - 8} width="22" height="16" rx="3" fill="none" stroke="#34D399" strokeOpacity="0.5">
          <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function OpsArt() {
  return (
    <div className="absolute inset-0 p-5 flex flex-col justify-between" aria-hidden="true">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-white">Test runs &amp; monitoring</span>
        <span className="inline-flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" /> Monitoring
        </span>
      </div>
      <div className="flex items-end gap-[3px] h-20">
        {Array.from({ length: 40 }, (_, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${40 + ((i * 37) % 60)}%`,
              background: i % 9 === 4 ? '#F472B6' : '#34D399',
              opacity: 0.45 + ((i * 13) % 50) / 100,
              animation: `reveal-fade 600ms ease ${i * 20}ms backwards`,
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>Maintenance &amp; QA</span>
        <span>After launch</span>
      </div>
    </div>
  );
}

function CodeArt() {
  const lines = [
    { w: 46, c: '#818CF8', indent: 0 },
    { w: 70, c: '#22D3EE', indent: 1 },
    { w: 54, c: '#34D399', indent: 2 },
    { w: 62, c: '#F472B6', indent: 2 },
    { w: 40, c: '#22D3EE', indent: 1 },
    { w: 28, c: '#818CF8', indent: 0 },
  ];
  return (
    <div className="absolute inset-3 rounded-xl border border-white/10 bg-[#070C1C] overflow-hidden font-mono shadow-2xl" aria-hidden="true">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-[10px]" style={{ color: '#64748B' }}>api/BookingsController.cs</span>
      </div>
      <div className="p-4 flex flex-col gap-2.5">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[9px] w-3 text-right" style={{ color: '#475569' }}>{i + 1}</span>
            <span
              className="h-2 rounded-full"
              style={{
                width: `${l.w}%`,
                marginLeft: `${l.indent * 14}px`,
                background: l.c,
                opacity: 0.85,
                animation: `reveal-left 900ms cubic-bezier(0.16,1,0.3,1) ${i * 120}ms backwards`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
