import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

type Tile = {
  title: string;
  desc: string;
  href: string;
  color: string;
  span: string;
  art: ReactNode;
  tags: string[];
};

const tiles: Tile[] = [
  {
    title: 'Custom Software Development',
    desc: 'Web platforms, portals and internal tools built on .NET, Node.js, Angular and React, designed to grow with your business.',
    href: '/services/software-development',
    color: '#22D3EE',
    span: 'lg:col-span-4',
    art: <CodeArt />,
    tags: ['Web apps', 'APIs', 'SaaS'],
  },
  {
    title: 'AI Agents & MCP Servers',
    desc: 'Custom MCP servers and AI agents that connect Claude, ChatGPT and other assistants to your software.',
    href: '/services/ai-agents-mcp-servers',
    color: '#A78BFA',
    span: 'lg:col-span-2',
    art: <PulseArt />,
    tags: ['MCP servers', 'AI agents', 'LLM apps'],
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Azure and AWS setups, CI/CD pipelines and monitoring, delivered with our DevOps partner RytumX.',
    href: '/services/cloud-infrastructure',
    color: '#38BDF8',
    span: 'lg:col-span-2',
    art: <NetworkArt />,
    tags: ['Azure', 'AWS', 'CI/CD'],
  },
  {
    title: 'Cybersecurity',
    desc: 'Secure-by-design code, access control, audits and compliance built into every release.',
    href: '/services/cybersecurity',
    color: '#34D399',
    span: 'lg:col-span-2',
    art: <ShieldArt />,
    tags: ['Audits', 'Compliance'],
  },
  {
    title: 'Digital Transformation',
    desc: 'Move legacy desktop and spreadsheet workflows to modern, connected web and mobile apps.',
    href: '/services/digital-transformation',
    color: '#FBBF24',
    span: 'lg:col-span-2',
    art: <FlowArt />,
    tags: ['Modernization', 'Integrations'],
  },
  {
    title: 'Managed Services & QA',
    desc: 'Dedicated QA engineers, ongoing maintenance and support so your product keeps running smoothly after launch.',
    href: '/services/managed-services',
    color: '#F472B6',
    span: 'lg:col-span-6',
    art: <UptimeArt />,
    tags: ['QA & testing', 'Maintenance', 'Support'],
  },
];

const tileIcons: ReactNode[] = [
  <><polyline key="a" points="16 18 22 12 16 6" /><polyline key="b" points="8 6 2 12 8 18" /></>,
  <path key="a" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
  <path key="a" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  <path key="a" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <path key="a" d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16" />,
  <><path key="a" d="M22 12h-4l-3 9L9 3l-3 9H2" /></>,
];

export default function ServicesOverview() {
  return (
    <section className="py-28 relative" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            align="left"
            kicker="What we do"
            id="services-heading"
            title={<>Everything you need to <span className="text-gradient">ship great software</span></>}
          />
          <div suppressHydrationWarning data-reveal style={{ '--d': '200ms' } as CSSProperties} className="lg:max-w-sm lg:pb-6">
            <p className="text-slate-400 leading-relaxed mb-5">
              One team for design, development, QA and cloud, so nothing gets lost between vendors.
            </p>
            <Link href="/services" className="btn btn--secondary">
              All services
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {tiles.map((t, i) => (
            <Link
              key={t.title}
              href={t.href}
              suppressHydrationWarning data-reveal
              style={{ '--d': `${(i % 3) * 90}ms`, '--tile': t.color } as CSSProperties}
              className={`surface spotlight lift group rounded-[1.75rem] p-7 flex flex-col min-h-[300px] ${t.span} ${i === 0 || i === 5 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative flex-1 ${i === 0 || i === 5 ? 'lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:items-center' : ''}`}>
                <div className="relative z-[1]">
                  <span className="icon-tile mb-6">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {tileIcons[i]}
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{t.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-md">{t.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`relative mt-6 ${i === 0 || i === 5 ? 'lg:mt-0' : ''} h-36 ${i === 0 || i === 5 ? 'lg:h-full lg:min-h-[180px]' : ''}`}>
                  {t.art}
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tile illustrations (pure SVG/CSS) ---------- */

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
    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-[#070C1C] overflow-hidden font-mono shadow-2xl" aria-hidden="true">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-[10px] text-slate-500" style={{ color: '#64748B' }}>app/booking.service.ts</span>
      </div>
      <div className="p-4 flex flex-col gap-2.5">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[9px] w-3 text-right" style={{ color: '#475569' }}>{i + 1}</span>
            <span
              className="h-2 rounded-full origin-left"
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
        <span className="w-1.5 h-3 ml-6 pulse-soft" style={{ background: '#22D3EE' }} />
      </div>
    </div>
  );
}

function PulseArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" aria-hidden="true">
      {[18, 34, 50, 66].map((r, i) => (
        <circle key={r} cx="100" cy="70" r={r} fill="none" stroke="#A78BFA" strokeOpacity={0.5 - i * 0.1}>
          <animate attributeName="r" values={`${r};${r + 8};${r}`} dur="4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {[[60, 40], [140, 38], [150, 100], [52, 104], [100, 20]].map(([x, y], i) => (
        <g key={i}>
          <line x1="100" y1="70" x2={x} y2={y} stroke="#A78BFA" strokeOpacity="0.35" strokeDasharray="3 4" style={{ animation: 'dash-flow 1.5s linear infinite' }} />
          <circle cx={x} cy={y} r="4" fill="#C4B5FD">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      <circle cx="100" cy="70" r="12" fill="#A78BFA" />
      <path d="M100 63 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#FFFFFF" />
    </svg>
  );
}

function NetworkArt() {
  const pts: [number, number][] = [[30, 40], [100, 22], [170, 44], [56, 108], [144, 112], [100, 70]];
  const links: [number, number][] = [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 1], [1, 2], [3, 4]];
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" aria-hidden="true">
      {links.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="#38BDF8" strokeOpacity="0.45" strokeDasharray="4 4" style={{ animation: `dash-flow ${1.2 + (i % 3) * 0.4}s linear infinite` }} />
      ))}
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 5 ? 14 : 7} fill={i === 5 ? '#0EA5E9' : '#0C4A6E'} stroke="#38BDF8" strokeWidth="1.5" />
          {i !== 5 && (
            <circle cx={x} cy={y} r="7" fill="none" stroke="#38BDF8">
              <animate attributeName="r" values="7;14" dur="2.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0" dur="2.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}
      <path d="M94 74 h12 a4 4 0 0 0 0-8 a6 6 0 0 0-11-1 a4 4 0 0 0-1 9z" fill="#FFFFFF" />
    </svg>
  );
}

function ShieldArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" aria-hidden="true">
      <defs>
        <clipPath id="shield-clip">
          <path d="M100 14 L146 30 V70 C146 98 124 116 100 126 C76 116 54 98 54 70 V30 Z" />
        </clipPath>
        <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34D399" stopOpacity="0" />
          <stop offset="1" stopColor="#34D399" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path d="M100 14 L146 30 V70 C146 98 124 116 100 126 C76 116 54 98 54 70 V30 Z" fill="#064E3B" fillOpacity="0.5" stroke="#34D399" strokeWidth="1.5" />
      <g clipPath="url(#shield-clip)">
        <rect x="50" width="100" height="30" fill="url(#scan)">
          <animate attributeName="y" values="-30;126" dur="2.6s" repeatCount="indefinite" />
        </rect>
      </g>
      <polyline points="84,70 96,82 118,58" fill="none" stroke="#6EE7B7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {[[30, 30], [170, 40], [24, 104], [176, 108]].map(([x, y], i) => (
        <rect key={i} x={x - 9} y={y - 7} width="18" height="14" rx="3" fill="none" stroke="#34D399" strokeOpacity="0.5">
          <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function FlowArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" aria-hidden="true">
      <rect x="14" y="38" width="54" height="64" rx="8" fill="#78350F" fillOpacity="0.35" stroke="#FBBF24" strokeOpacity="0.5" strokeDasharray="4 3" />
      {[50, 62, 74, 86].map((y) => (
        <rect key={y} x="24" y={y} width="34" height="5" rx="2" fill="#FBBF24" fillOpacity="0.35" />
      ))}
      <path d="M76 70 H118" stroke="#FBBF24" strokeWidth="2" strokeDasharray="5 5" style={{ animation: 'dash-flow 0.8s linear infinite' }} />
      <polygon points="118,64 128,70 118,76" fill="#FBBF24" />
      {[[136, 30], [164, 30], [136, 76], [164, 76]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="24" height="34" rx="7" fill="#FBBF24" fillOpacity={0.25 + i * 0.15} stroke="#FCD34D">
          <animate attributeName="y" values={`${y};${y - 4};${y}`} dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function UptimeArt() {
  return (
    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col justify-between" aria-hidden="true">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-white">All checks passing</span>
        <span className="inline-flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" /> Healthy
        </span>
      </div>
      <div className="flex items-end gap-[3px] h-16">
        {Array.from({ length: 48 }, (_, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${45 + ((i * 37) % 55)}%`,
              background: '#34D399',
              opacity: 0.45 + ((i * 13) % 50) / 100,
              animation: `reveal-fade 600ms ease ${i * 18}ms backwards`,
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>Regression tests · last 48 runs</span>
        <span>Automated + manual QA</span>
      </div>
    </div>
  );
}
