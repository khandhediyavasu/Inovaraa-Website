import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About Us: Leadership, Team & Partners',
  description: 'Meet Inovaraa Solutions: CEO Tejas Daraniya, Director Nikhil Mahindrakar, CTO Vasu Khandhediya and the engineering team building AI agents, MCP servers and custom software.',
  alternates: { canonical: '/about' },
};

const values: { title: string; desc: string; color: string; icon: ReactNode }[] = [
  {
    title: 'Zero Compromise Engineering',
    desc: 'We architect for extreme scale, security, and low-latency from day one.',
    color: '#22D3EE',
    icon: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  },
  {
    title: 'Compound Enterprise ROI',
    desc: 'Every architecture initiative is mapped to verifiable balance sheet performance.',
    color: '#34D399',
    icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  },
  {
    title: '100% Client IP Ownership',
    desc: 'You own all repositories, models, pipelines, and infrastructure as code.',
    color: '#818CF8',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Autonomous Innovation',
    desc: 'Embedding AI agents and automation directly into core engineering workflows.',
    color: '#F472B6',
    icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
  },
];

const leadership = [
  { name: 'Tejas Daraniya', slug: 'tejas-daraniya', title: 'Chief Executive Officer', initials: 'TD', color: '#22D3EE' },
  { name: 'Nikhil Mahindrakar', slug: 'nikhil-mahindrakar', title: 'Director', initials: 'NM', color: '#818CF8' },
  { name: 'Vasu Khandhediya', slug: 'vasu-khandhediya', title: 'Chief Technology Officer', initials: 'VK', color: '#34D399' },
];

const team: { name: string; role?: string; initials: string }[] = [
  { name: 'Jaimin Manfroliya', role: 'Web Developer', initials: 'JM' },
  { name: 'Parth Suhagiya', role: 'Web Developer', initials: 'PS' },
  { name: 'Vijeet Shah', role: 'QA', initials: 'VS' },
  { name: 'Meet Patel', role: 'QA', initials: 'MP' },
  { name: 'Vimal Vankani', role: 'QA', initials: 'VV' },
  { name: 'Prince Mendapara', role: 'Mobile Development', initials: 'PM' },
  { name: 'Harshil Patel', role: 'Web Developer', initials: 'HP' },
  { name: 'Jay Patel', role: 'Web Developer', initials: 'JP' },
  { name: 'Barkha Kantariya', role: 'HR Manager', initials: 'BK' },
];

const roleColors: Record<string, string> = {
  'Web Developer': '#22D3EE',
  QA: '#34D399',
  'Mobile Development': '#F472B6',
  'HR Manager': '#FBBF24',
};

const milestones = [
  { year: '2012', title: 'Founding & Distributed Systems Core', desc: 'Started in Pune, India building high-throughput financial message brokers.', color: '#22D3EE' },
  { year: '2016', title: 'Global Multi-Cloud Expansion', desc: 'Opened North America & UK headquarters, achieved ISO 27001 & SOC 2 certifications.', color: '#818CF8' },
  { year: '2021', title: 'AI & Data Lakehouse Practice', desc: 'Launched enterprise MLOps accelerator managing 50M+ daily events.', color: '#34D399' },
  { year: '2026', title: 'Autonomous Enterprise Era', desc: 'Operating 24/7 global mesh across 450+ Fortune 1000 organizations.', color: '#F472B6' },
];

const rytumxServices = ['DevSecOps Implementation', 'Kubernetes Hardening', 'Cloud Security Auditing', 'FinOps'];

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
        kicker="Enterprise Profile"
        title={<>Engineering the backbone of <span className="text-gradient">modern global commerce</span></>}
        description="Inovaraa Solutions partners with forward-thinking enterprises to design, build, and run resilient cloud architectures, AI agents, and Zero Trust security fabrics."
      >
        <a href="#leadership" className="btn btn--primary btn--lg">
          Meet the leadership
          <Arrow />
        </a>
        <a href="#partners" className="btn btn--secondary btn--lg">
          Partners &amp; alliances
        </a>
      </PageHero>

      {/* ---------- Values ---------- */}
      <section className="py-24 sm:py-28 relative" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionHeading
              align="left"
              kicker="Core Engineering Principles"
              id="values-heading"
              title={<>What drives <span className="text-gradient">our squads</span></>}
            />
            <p suppressHydrationWarning data-reveal style={{ '--d': '200ms' } as CSSProperties} className="lg:max-w-sm lg:pb-6 text-slate-400 leading-relaxed">
              Four principles guide every architecture decision, every sprint and every release we ship.
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
            kicker="Executive Leadership"
            id="leadership-heading"
            title={<>Architects of <span className="text-gradient">transformation</span></>}
            description="The people setting direction, standards and culture across every Inovaraa engagement."
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
              title={<>The people behind <span className="text-gradient">the platform</span></>}
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
            kicker="Partners & Alliances"
            id="partners-heading"
            title={<>Our associate <span className="text-gradient">company</span></>}
            className="mb-14"
          />

          <div
            suppressHydrationWarning data-reveal="scale"
            className="surface border-glow spotlight rounded-[2rem] p-7 sm:p-10 lg:p-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center"
          >
            <PartnerLink />

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-3xl font-extrabold text-white">RytumX</h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-soft" />
                  DevOps Partner
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                Inovaraa Solutions and RytumX are associated companies. All DevOps work for our clients is delivered by RytumX, a specialist in cloud automation and DevSecOps that builds security into every stage of the software delivery lifecycle.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {rytumxServices.map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">{s}</span>
                ))}
              </div>
              <a href="https://www.rytumx.com/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                Visit rytumx.com
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Milestones ---------- */}
      <section className="py-24 sm:py-28 relative overflow-hidden" aria-labelledby="journey-heading">
        <div className="absolute inset-0 bg-dots-fade opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            kicker="Journey"
            id="journey-heading"
            title={<>Evolution of <span className="text-gradient">scale</span></>}
            className="mb-20"
          />

          <div className="relative">
            {/* Horizontal rail (desktop) */}
            <div className="hidden lg:block absolute top-[7px] left-0 right-0 h-px bg-white/10" aria-hidden="true">
              <div suppressHydrationWarning data-reveal="grow" className="h-full origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400" />
            </div>
            {/* Vertical rail (mobile / tablet) */}
            <div className="lg:hidden absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-cyan-400 via-indigo-400 to-pink-400 opacity-60" aria-hidden="true" />

            <ol className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 list-none p-0 m-0">
              {milestones.map((m, i) => (
                <li
                  key={m.year}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${200 + i * 200}ms` } as CSSProperties}
                  className="relative pl-10 lg:pl-0 lg:pt-12"
                >
                  <span className="absolute left-0 top-1 lg:top-0 w-[15px] h-[15px] rounded-full border-2" style={{ borderColor: m.color, background: 'var(--surface)' }} aria-hidden="true">
                    <span className="absolute inset-[3px] rounded-full pulse-soft" style={{ background: m.color }} />
                  </span>
                  <div className="font-display text-5xl sm:text-6xl font-extrabold leading-none mb-5" style={accent(m.color)}>
                    {m.year}
                  </div>
                  <div className="surface spotlight lift rounded-3xl p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

/* Decorative Inovaraa <-> RytumX link graphic */
function PartnerLink() {
  return (
    <div className="relative h-56 sm:h-64" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-fade opacity-70 rounded-3xl" />
      <svg viewBox="0 0 320 220" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="about-link" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#818CF8" />
            <stop offset="1" stopColor="#34D399" />
          </linearGradient>
        </defs>
        <path d="M84 110 C 140 50, 180 170, 236 110" fill="none" stroke="url(#about-link)" strokeWidth="2" strokeDasharray="4 6" style={{ animation: 'dash-flow 1.4s linear infinite' }} />
        <path d="M84 110 C 140 170, 180 50, 236 110" fill="none" stroke="url(#about-link)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="2 8" style={{ animation: 'dash-flow 2s linear infinite reverse' }} />
        <circle r="4" fill="#22D3EE">
          <animateMotion dur="3s" repeatCount="indefinite" path="M84 110 C 140 50, 180 170, 236 110" />
        </circle>
        <circle r="3" fill="#F472B6">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M236 110 C 180 50, 140 170, 84 110" />
        </circle>
        {[0, 1].map((k) => (
          <circle key={k} cx={k ? 236 : 84} cy="110" r="44" fill="none" stroke={k ? '#34D399' : '#818CF8'} strokeOpacity="0.35">
            <animate attributeName="r" values="44;56;44" dur="3.2s" begin={`${k * 1.2}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.35;0;0.35" dur="3.2s" begin={`${k * 1.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="absolute left-[26.25%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-xl font-black font-display shadow-lg shadow-indigo-500/30">
          A
        </div>
        <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">Inovaraa</span>
      </div>
      <div className="absolute left-[73.75%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 float-slow">
        <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-400 text-white flex items-center justify-center text-xl font-black font-display shadow-lg shadow-emerald-500/30" style={{ backgroundImage: 'linear-gradient(135deg, #34D399, #22D3EE)' }}>
          RX
        </div>
        <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">RytumX</span>
      </div>
    </div>
  );
}
