import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About Us: Leadership, Team & Partners',
  description: 'Meet Inovaraa Solutions: CEO Tejas Thakkar, Director Nikhil Mahindrakar, CTO Vasu Thakkar and the engineering team building AI agents, MCP servers and custom software.',
  alternates: { canonical: '/about' },
};

const values: { title: string; desc: string; color: string; icon: ReactNode }[] = [
  {
    title: 'Built to Last',
    desc: 'Clean, tested code and sensible architecture from day one, so your product is easy to grow and maintain.',
    color: '#22D3EE',
    icon: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  },
  {
    title: 'Focused on Business Value',
    desc: 'We build what moves your business forward first, and show working software every two weeks.',
    color: '#34D399',
    icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  },
  {
    title: 'You Own Everything',
    desc: 'All code, repositories and deployment scripts belong to you, pushed to your own accounts.',
    color: '#818CF8',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Practical AI',
    desc: 'We add AI agents and automation where they save real time, not for the sake of it.',
    color: '#F472B6',
    icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
  },
];

const leadership = [
  { name: 'Tejas Thakkar', slug: 'tejas-thakkar', title: 'Chief Executive Officer', initials: 'TT', color: '#22D3EE' },
  { name: 'Vasu Thakkar', slug: 'vasu-thakkar', title: 'Chief Technology Officer', initials: 'VT', color: '#34D399' },
  { name: 'Nikhil Mahindrakar', slug: 'nikhil-mahindrakar', title: 'Director', initials: 'NM', color: '#818CF8' },
];

const team: { name: string; role?: string; initials: string }[] = [
  { name: 'Jaimin Mangroliya', role: 'Web Developer', initials: 'JM' },
  { name: 'Parth Suhagiya', role: 'Web Developer', initials: 'PS' },
  { name: 'Vijeet Shah', role: 'QA', initials: 'VS' },
  { name: 'Meet Patel', role: 'QA', initials: 'MP' },
  { name: 'Vimal Vankani', role: 'QA', initials: 'VV' },
  { name: 'Prince Mendapara', role: 'Mobile Developer', initials: 'PM' },
  { name: 'Harshil Patel', role: 'Web Developer', initials: 'HP' },
  { name: 'Jay Patel', role: 'Web Developer', initials: 'JP' },
  { name: 'Barkha Thakkar', role: 'HR Manager', initials: 'BT' },
];

const roleColors: Record<string, string> = {
  'Web Developer': '#22D3EE',
  QA: '#34D399',
  'Mobile Developer': '#F472B6',
  'HR Manager': '#FBBF24',
};

const partners = [
  {
    id: 'rytumx',
    name: 'RytumX',
    initials: 'RX',
    role: 'DevOps Partner',
    color: '#34D399',
    domain: 'rytumx.com',
    url: 'https://www.rytumx.com/',
    desc: 'Inovaraa Solutions and RytumX are associated companies. All DevOps work for our clients is delivered by RytumX, a specialist in cloud automation and DevSecOps that builds security into every stage of software delivery.',
    services: ['Azure & AWS Setup', 'CI/CD Pipelines', 'DevSecOps', 'Monitoring'],
  },
  {
    id: 'alpha',
    name: 'Alpha Computers',
    initials: 'AC',
    role: 'Education Partner',
    color: '#F59E0B',
    domain: 'alphaindia.in',
    url: 'https://alphaindia.in/',
    desc: 'Inovaraa Solutions has a tie-up with Alpha Computers for school and education projects. Alpha builds the Edusoft range of management software for schools, colleges and coaching classes, and together we deliver software for the education sector.',
    services: ['School ERP', 'College & Classes ERP', 'Attendance & Timetable', 'Library & Bulk SMS'],
  },
];

const accent = (hex: string) => ({ color: `color-mix(in srgb, ${hex} 70%, var(--ink))` });

const Arrow = () => (
  <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function AboutPage() {
  // Derived from the team list above (no extra data)
  const roleGroups = Object.entries(
    team.reduce<Record<string, number>>((acc, m) => {
      if (m.role) acc[m.role] = (acc[m.role] ?? 0) + 1;
      return acc;
    }, {})
  );

  return (
    <>
      <PageHero
        crumb="About"
        kicker="About Us"
        title={<>A small team that <span className="text-gradient">ships real software</span></>}
        description="Inovaraa Solutions is an Ahmedabad-based team building web platforms, mobile apps, AI agents and MCP servers for healthcare, logistics, finance, insurance, real estate, retail and education."
      >
        <a href="#leadership" className="btn btn--primary btn--lg">
          Meet the leadership
          <Arrow />
        </a>
        <a href="#partners" className="btn btn--secondary btn--lg">
          Our partners
        </a>
      </PageHero>

      {/* ---------- Values ---------- */}
      <section className="py-24 sm:py-28 relative" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionHeading
              align="left"
              kicker="How We Work"
              id="values-heading"
              title={<>What drives <span className="text-gradient">our team</span></>}
            />
            <p suppressHydrationWarning data-reveal style={{ '--d': '200ms' } as CSSProperties} className="lg:max-w-sm lg:pb-6 text-slate-400 leading-relaxed">
              Four principles guide every decision, every sprint and every release we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                suppressHydrationWarning data-reveal
                style={{ '--d': `${(i % 2) * 110}ms`, '--tile': v.color } as CSSProperties}
                className="surface spotlight lift group relative rounded-[1.75rem] p-7 sm:p-9 overflow-hidden"
              >
                <span
                  className="absolute -right-10 -top-10 w-44 h-44 rounded-full opacity-25 blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                  style={{ background: v.color }}
                  aria-hidden="true"
                />
                <span className="absolute right-6 top-5 font-display text-7xl font-extrabold text-outline select-none pointer-events-none" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="icon-tile relative mb-8">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="relative text-2xl font-bold text-white mb-3 max-w-[80%]">{v.title}</h3>
                <p className="relative text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">{v.desc}</p>
                <span className="relative mt-7 block h-px w-full bg-white/10 overflow-hidden" aria-hidden="true">
                  <span suppressHydrationWarning data-reveal="grow" className="block h-full origin-left" style={{ background: `linear-gradient(90deg, ${v.color}, transparent)` }} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Leadership ---------- */}
      <section className="py-24 sm:py-28 relative overflow-hidden scroll-mt-24" id="leadership" aria-labelledby="leadership-heading">
        <div className="absolute inset-0 bg-dots-fade opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            kicker="Leadership"
            id="leadership-heading"
            title={<>The people <span className="text-gradient">leading Inovaraa</span></>}
            description="The people setting direction, standards and culture across every Inovaraa project."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {leadership.map((l, i) => (
              <article
                key={l.name}
                suppressHydrationWarning data-reveal="scale"
                style={{ '--d': `${i * 130}ms`, '--tile': l.color } as CSSProperties}
                className="surface spotlight lift rounded-[1.75rem] p-8 text-center flex flex-col items-center"
              >
                <div className="relative w-36 h-36 mb-7" aria-hidden="true">
                  <svg viewBox="0 0 144 144" className={`absolute inset-0 w-full h-full ${i % 2 ? 'spin-slow-rev' : 'spin-slow'}`}>
                    <circle cx="72" cy="72" r="68" fill="none" stroke={l.color} strokeOpacity="0.35" strokeDasharray="2 7" />
                    <circle cx="72" cy="4" r="4" fill={l.color} />
                    <circle cx="13" cy="106" r="3" fill={l.color} fillOpacity="0.6" />
                  </svg>
                  <span className="absolute inset-5 rounded-full blur-xl opacity-50" style={{ background: l.color }} />
                  <div
                    className="absolute inset-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-3xl font-extrabold font-display ring-4 ring-white/10"
                    style={{ backgroundImage: `linear-gradient(135deg, #6366F1, ${l.color})` }}
                  >
                    {l.initials}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white"><Link href={`/team/${l.slug}`} className="hover:text-cyan-400 transition-colors">{l.name}</Link></h3>
                <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full" style={{ ...accent(l.color), background: `${l.color}1A`, border: `1px solid ${l.color}40` }}>
                  <span className="w-1.5 h-1.5 rounded-full pulse-soft" style={{ background: l.color }} />
                  {l.title}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="py-24 sm:py-28 relative scroll-mt-24" id="team" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionHeading
              align="left"
              kicker="Our Team"
              id="team-heading"
              title={<>The people behind <span className="text-gradient">the work</span></>}
            />
            <ul suppressHydrationWarning data-reveal style={{ '--d': '200ms' } as CSSProperties} className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end lg:pb-6 list-none p-0 m-0">
              {roleGroups.map(([role, count]) => (
                <li
                  key={role}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ ...accent(roleColors[role] ?? '#818CF8'), background: `${roleColors[role] ?? '#818CF8'}14`, border: `1px solid ${roleColors[role] ?? '#818CF8'}40` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: roleColors[role] ?? '#818CF8' }} />
                  {role}
                  <span className="font-mono opacity-70">{count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m, i) => {
              const c = (m.role && roleColors[m.role]) || '#818CF8';
              return (
                <div
                  key={m.name}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 3) * 90}ms` } as CSSProperties}
                  className="surface spotlight lift group rounded-3xl p-5 flex items-center gap-4"
                >
                  <div className="relative shrink-0">
                    <span className="absolute inset-0 rounded-2xl blur-md opacity-40 transition-opacity duration-500 group-hover:opacity-80" style={{ background: c }} aria-hidden="true" />
                    <div
                      className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-base font-bold font-display"
                      style={{ backgroundImage: `linear-gradient(135deg, #6366F1, ${c})` }}
                    >
                      {m.initials}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white truncate">{m.name}</h3>
                    {m.role && <div className="text-xs font-semibold mt-1" style={accent(c)}>{m.role}</div>}
                  </div>
                  <svg className="ml-auto w-4 h-4 shrink-0 text-slate-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Partners ---------- */}
      <section className="py-24 sm:py-28 relative scroll-mt-24" id="partners" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Partners"
            id="partners-heading"
            title={<>Companies we <span className="text-gradient">work with</span></>}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {partners.map((p, i) => (
              <article
                key={p.name}
                suppressHydrationWarning data-reveal="scale"
                style={{ '--d': `${i * 140}ms` } as CSSProperties}
                className="surface border-glow spotlight lift group relative overflow-hidden rounded-[2rem] p-7 sm:p-9 flex flex-col"
              >
                <span
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-35 pointer-events-none"
                  style={{ background: p.color }}
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between gap-4 mb-8">
                  <PartnerLink id={p.id} initials={p.initials} color={p.color} />
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ ...accent(p.color), background: `${p.color}1A`, border: `1px solid ${p.color}4D` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full pulse-soft" style={{ background: p.color }} />
                    {p.role}
                  </span>
                </div>

                <h3 className="relative text-2xl sm:text-3xl font-extrabold text-white">{p.name}</h3>
                <div className="relative text-xs font-mono text-slate-500 mt-1 mb-4">{p.domain}</div>
                <p className="relative text-sm sm:text-base text-slate-400 leading-relaxed mb-6">{p.desc}</p>

                <ul className="relative flex flex-wrap gap-2 mb-8 list-none p-0 m-0">
                  {p.services.map((s) => (
                    <li key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">{s}</li>
                  ))}
                </ul>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-auto pt-5 border-t border-white/10 flex items-center justify-between text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  Visit {p.domain}
                  <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* Decorative Inovaraa <-> partner link graphic */
function PartnerLink({ id, initials, color }: { id: string; initials: string; color: string }) {
  return (
    <div className="flex items-center" aria-hidden="true">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-base font-black font-display shadow-lg shadow-indigo-500/30">
        I
      </div>
      <svg viewBox="0 0 64 20" className="w-14 sm:w-16 h-5 -mx-px">
        <defs>
          <linearGradient id={`about-link-${id}`} gradientUnits="userSpaceOnUse" x1="0" y1="10" x2="64" y2="10">
            <stop offset="0" stopColor="#818CF8" />
            <stop offset="1" stopColor={color} />
          </linearGradient>
        </defs>
        <path d="M0 10 H64" stroke={`url(#about-link-${id})`} strokeWidth="2" strokeDasharray="4 5" style={{ animation: 'dash-flow 1.4s linear infinite' }} />
        <circle r="3" cy="10" fill={color}>
          <animate attributeName="cx" values="0;64;0" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div
        className="w-12 h-12 rounded-2xl text-white flex items-center justify-center text-base font-black font-display shadow-lg"
        style={{ backgroundImage: `linear-gradient(135deg, ${color}, #22D3EE)` }}
      >
        {initials}
      </div>
    </div>
  );
}
