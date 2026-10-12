import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Careers at Inovaraa Solutions',
  description: 'Work with a small, senior software team in Ahmedabad, India building AI agents, MCP servers and custom software. No open roles right now, but we are always open to talented people: email your CV to info@inovaraa.com.',
  alternates: { canonical: '/careers' },
};

const APPLY_HREF = 'mailto:info@inovaraa.com?subject=Job%20application';

const perks: { title: string; desc: string; color: string; span: string; icon: ReactNode }[] = [
  {
    title: 'A Small, Senior Team',
    desc: 'We are 12 people. Everyone ships, everyone reviews code, and your work is visible from day one.',
    color: '#22D3EE',
    span: 'lg:col-span-2',
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Work With the Founders',
    desc: 'No layers of management. You work directly with our CEO, Director and CTO.',
    color: '#34D399',
    span: '',
    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
  },
  {
    title: 'Real Client Projects',
    desc: 'You build software that real businesses use, not internal demos.',
    color: '#818CF8',
    span: '',
    icon: <><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
  },
  {
    title: 'Learning by Shipping',
    desc: 'You learn fast by working across the whole stack, from database to deployment.',
    color: '#F472B6',
    span: '',
    icon: <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6 6h10" /><path d="M6 10h10" /></>,
  },
  {
    title: 'Ownership',
    desc: 'You own your features end to end, with support when you need it.',
    color: '#FBBF24',
    span: '',
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  },
  {
    title: 'A Modern Stack',
    desc: '.NET, Angular, React and Node.js, plus AI agents and MCP servers. We pick the right tool for each project.',
    color: '#38BDF8',
    span: 'lg:col-span-2',
    icon: <><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></>,
  },
];

const Arrow = () => (
  <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumb="Careers"
        kicker="Careers"
        title={<>Build real software with <span className="text-gradient">a small, senior team</span></>}
        description="Inovaraa Solutions is a 12-person software company based in Ahmedabad, India. We don't have open roles right now, but we're always open to talented people."
      >
        <a href={APPLY_HREF} className="btn btn--primary btn--lg">
          Email your CV
          <Arrow />
        </a>
        <a href="#openings" className="btn btn--secondary btn--lg">
          Current openings
        </a>
      </PageHero>

      {/* ---------- Perks ---------- */}
      <section className="py-24 sm:py-28 relative" aria-labelledby="perks-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionHeading
              align="left"
              kicker="How We Work"
              id="perks-heading"
              title={<>What it&apos;s like <span className="text-gradient">working at Inovaraa</span></>}
            />
            <p suppressHydrationWarning data-reveal style={{ '--d': '200ms' } as CSSProperties} className="lg:max-w-sm lg:pb-6 text-slate-400 leading-relaxed">
              A small team, real projects and direct access to the people making decisions.
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
            title={<>Current <span className="text-gradient">openings</span></>}
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            <div
              suppressHydrationWarning data-reveal="scale"
              className="surface border-glow rounded-[2rem] px-6 py-12 sm:px-12 sm:py-14 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none" aria-hidden="true" />
              <span className="icon-tile relative mx-auto mb-6" style={{ '--tile': '#22D3EE' } as CSSProperties}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
              </span>
              <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-3">No open roles right now</h3>
              <p className="relative text-slate-400 leading-relaxed max-w-xl mx-auto">
                We&apos;re always open to talented people. Email your CV to{' '}
                <a href={APPLY_HREF} className="text-cyan-400 underline underline-offset-4 hover:no-underline">info@inovaraa.com</a>{' '}
                with a short note about what you&apos;d like to work on, and we&apos;ll get in touch when a suitable role opens.
              </p>
              <a href={APPLY_HREF} className="btn btn--primary relative mt-8">
                Email your CV
                <Arrow />
              </a>
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
