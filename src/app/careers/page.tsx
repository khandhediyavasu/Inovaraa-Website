import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Careers: Software Development, AI & QA Jobs',
  description: 'Explore careers at Inovaraa Solutions. Join the team building AI agents, MCP servers, web platforms and mobile apps for clients worldwide.',
  alternates: { canonical: '/careers' },
};

const openings = [
  { title: 'Principal Cloud & Kubernetes Architect', dept: 'Cloud Infrastructure', location: 'New York / Remote', type: 'Full-time' },
  { title: 'Senior AI/ML & LLM Engineer', dept: 'AI & Analytics', location: 'Bangalore / Hybrid', type: 'Full-time' },
  { title: 'Staff Cybersecurity Analyst (SOC / Threat Hunting)', dept: 'Cybersecurity', location: 'London / Remote', type: 'Full-time' },
  { title: 'Enterprise Digital Transformation Lead', dept: 'Consulting', location: 'Singapore / Hybrid', type: 'Full-time' },
  { title: 'Site Reliability & FinOps Engineer', dept: 'Cloud Infrastructure', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Principal Data Platform Architect (Snowflake / dbt)', dept: 'AI & Analytics', location: 'New York / Hybrid', type: 'Full-time' },
  { title: 'Senior Full Stack Engineer (Next.js / Go)', dept: 'Software Development', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Technical Program Director (Cloud Migration)', dept: 'PMO', location: 'Dubai / Remote', type: 'Full-time' },
];

const deptColors: Record<string, string> = {
  'Cloud Infrastructure': '#38BDF8',
  'AI & Analytics': '#A78BFA',
  Cybersecurity: '#34D399',
  Consulting: '#FBBF24',
  'Software Development': '#22D3EE',
  PMO: '#F472B6',
};

const perks: { title: string; desc: string; color: string; span: string; icon: ReactNode }[] = [
  {
    title: 'Remote-First Global Culture',
    desc: 'Work from anywhere with asynchronous autonomy and distributed engineering pods.',
    color: '#22D3EE',
    span: 'lg:col-span-2',
    icon: <><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  },
  {
    title: 'Continuous Mastery Budget',
    desc: '$3,500 annual personal learning stipend plus fully covered cloud certifications.',
    color: '#34D399',
    span: '',
    icon: <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6 6h10" /><path d="M6 10h10" /></>,
  },
  {
    title: 'Top-Tier Compensation & Equity',
    desc: 'Top 10% market-calibrated salary benchmarks with performance bonuses and equity.',
    color: '#818CF8',
    span: '',
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  },
  {
    title: 'Comprehensive Health & Wellness',
    desc: 'Zero-deductible healthcare, dental, vision, and mental wellness coverage.',
    color: '#F472B6',
    span: '',
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  },
  {
    title: 'Flexible Autonomous Time Off',
    desc: 'Flexible paid time off with mandatory 4-week annual recharge policies.',
    color: '#FBBF24',
    span: '',
    icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  },
  {
    title: 'State-of-the-Art Gear',
    desc: 'Latest M3/M4 Max MacBook Pro, 4K display, and ergonomic home setup allowance.',
    color: '#38BDF8',
    span: 'lg:col-span-2',
    icon: <><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></>,
  },
];

const accent = (hex: string) => ({ color: `color-mix(in srgb, ${hex} 70%, var(--ink))` });

const Arrow = () => (
  <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function CareersPage() {
  // Derived from the openings list (no extra data)
  const depts = Object.entries(
    openings.reduce<Record<string, number>>((acc, r) => {
      acc[r.dept] = (acc[r.dept] ?? 0) + 1;
      return acc;
    }, {})
  );

  return (
    <>
      <PageHero
        crumb="Careers"
        kicker="Join Our Squads"
        title={<>Build the autonomous future of <span className="text-gradient">enterprise tech</span></>}
        description="Join 4,200+ elite engineers, solutions architects, and AI researchers solving mission-critical computing challenges worldwide."
      >
        <a href="#openings" className="btn btn--primary btn--lg">
          View open roles
          <Arrow />
        </a>
        <Link href="/contact" className="btn btn--secondary btn--lg">
          Send open application
        </Link>
      </PageHero>

      {/* ---------- Perks ---------- */}
      <section className="py-24 sm:py-28 relative" aria-labelledby="perks-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionHeading
              align="left"
              kicker="Engineering Culture"
              id="perks-heading"
              title={<>Why elite builders <span className="text-gradient">thrive at Inovaraa</span></>}
            />
            <p suppressHydrationWarning data-reveal style={{ '--d': '200ms' } as CSSProperties} className="lg:max-w-sm lg:pb-6 text-slate-400 leading-relaxed">
              Autonomy, growth and the right tools, so you can focus on doing the best work of your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <div
                key={p.title}
                suppressHydrationWarning data-reveal
                style={{ '--d': `${(i % 3) * 90}ms`, '--tile': p.color } as CSSProperties}
                className={`surface spotlight lift group relative rounded-[1.75rem] p-7 flex flex-col overflow-hidden min-h-[240px] ${p.span}`}
              >
                <span
                  className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full opacity-20 blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-45"
                  style={{ background: p.color }}
                  aria-hidden="true"
                />
                {p.span && <PerkArt index={i} color={p.color} />}
                <span className="icon-tile relative mb-auto">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {p.icon}
                  </svg>
                </span>
                <div className={`relative mt-10 ${p.span ? 'lg:max-w-[58%]' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-md">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Open roles ---------- */}
      <section className="py-24 sm:py-28 relative overflow-hidden scroll-mt-24" id="openings" aria-labelledby="openings-heading">
        <div className="absolute inset-0 bg-dots-fade opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            kicker="Open Positions"
            id="openings-heading"
            title={<>Current engineering <span className="text-gradient">openings</span></>}
            className="mb-10"
          />

          <ul suppressHydrationWarning data-reveal style={{ '--d': '220ms' } as CSSProperties} className="flex flex-wrap justify-center gap-2 mb-12 list-none p-0">
            {depts.map(([dept, count]) => (
              <li
                key={dept}
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ ...accent(deptColors[dept]), background: `${deptColors[dept]}14`, border: `1px solid ${deptColors[dept]}40` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: deptColors[dept] }} />
                {dept}
                <span className="font-mono opacity-70">{count}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 max-w-5xl mx-auto">
            {openings.map((role, i) => {
              const c = deptColors[role.dept];
              return (
                <Link
                  key={role.title}
                  href="/contact"
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 4) * 70}ms`, '--tile': c } as CSSProperties}
                  className="surface spotlight lift group relative rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 overflow-hidden"
                >
                  <span className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full" style={{ background: c }} aria-hidden="true" />
                  <span className="hidden sm:inline-flex font-mono text-xs font-bold text-slate-500 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={accent(c)}>{role.dept}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <span className="btn btn--secondary btn--sm shrink-0 self-start sm:self-center">
                    Apply Now
                    <Arrow />
                  </span>
                </Link>
              );
            })}

            {/* Open application (replaces the old bottom CTA) */}
            <div
              suppressHydrationWarning data-reveal="scale"
              className="surface border-glow rounded-3xl p-7 sm:p-9 mt-4 flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none" aria-hidden="true" />
              <span className="icon-tile relative shrink-0" style={{ '--tile': '#22D3EE' } as CSSProperties}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
              </span>
              <div className="relative flex-1">
                <h3 className="text-2xl font-bold text-white mb-1.5">Don&apos;t see the exact role for you?</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                  We are always scouting for world-class systems engineers, AI specialists, and architects.
                </p>
              </div>
              <Link href="/contact" className="btn btn--primary relative shrink-0 self-start md:self-center">
                Send Open Application
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Decorative art for the wide perk tiles */
function PerkArt({ index, color }: { index: number; color: string }) {
  if (index === 0) {
    // Globe with orbiting pods
    return (
      <svg className="hidden lg:block absolute right-4 top-4 w-48 h-48 opacity-80 pointer-events-none" viewBox="0 0 200 200" aria-hidden="true">
        <g className="spin-slow" style={{ transformOrigin: '100px 100px' }}>
          <circle cx="100" cy="100" r="70" fill="none" stroke={color} strokeOpacity="0.3" />
          <ellipse cx="100" cy="100" rx="70" ry="26" fill="none" stroke={color} strokeOpacity="0.25" />
          <ellipse cx="100" cy="100" rx="26" ry="70" fill="none" stroke={color} strokeOpacity="0.25" />
          <circle cx="170" cy="100" r="5" fill={color} />
          <circle cx="45" cy="58" r="4" fill="#818CF8" />
          <circle cx="78" cy="166" r="4" fill="#34D399" />
        </g>
        <circle cx="100" cy="100" r="88" fill="none" stroke={color} strokeOpacity="0.2" strokeDasharray="2 8" />
      </svg>
    );
  }
  // Laptop screen with typing lines
  return (
    <div className="absolute right-6 top-6 w-52 pointer-events-none hidden lg:block" aria-hidden="true">
      <div className="rounded-xl border border-white/10 overflow-hidden" style={{ background: 'color-mix(in srgb, var(--surface-2) 80%, transparent)' }}>
        <div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          {[70, 52, 84, 40].map((w, i) => (
            <span key={i} className="h-1.5 rounded-full" style={{ width: `${w}%`, background: i % 2 ? '#818CF8' : color, opacity: 0.8, animation: `reveal-left 900ms cubic-bezier(0.16,1,0.3,1) ${i * 140}ms backwards` }} />
          ))}
          <span className="w-1 h-2.5 pulse-soft" style={{ background: color }} />
        </div>
      </div>
      <div className="mx-auto h-1.5 w-[110%] -ml-[5%] rounded-b-lg bg-white/10" />
    </div>
  );
}
