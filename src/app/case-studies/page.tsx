import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore Inovaraa Solutions case studies — real outcomes for real enterprises across cloud, AI, cybersecurity, and digital transformation engagements.',
  alternates: { canonical: '/case-studies' },
};

const cases = [
  {
    industry: 'Financial Services',
    title: 'How a Global Bank Cut Infrastructure Costs by 62% with Multi-Cloud Migration',
    challenge: 'Legacy on-premise infrastructure causing high TCO and slow deployment cycles.',
    result: '62% infrastructure cost reduction, 3x faster release cycles with zero downtime.',
    metric: '-62%',
    metricLabel: 'Infrastructure TCO',
    service: 'Cloud Infrastructure',
    accent: 'text-cyan-400',
    tags: ['Multi-Cloud', 'Kubernetes', 'FinOps']
  },
  {
    industry: 'Healthcare & Life Sciences',
    title: 'AI-Powered Diagnostics Platform Reduces Patient Wait Times by 73%',
    challenge: 'Manual diagnostic workflows creating bottlenecks in 140 hospitals across 3 countries.',
    result: 'Serving 2.4M patients with 73% reduction in diagnostic wait times.',
    metric: '73%',
    metricLabel: 'Faster Triage',
    service: 'AI & Analytics',
    accent: 'text-emerald-400',
    tags: ['Private LLMs', 'Milvus Vector DB', 'HIPAA']
  },
  {
    industry: 'Retail & E-commerce',
    title: 'Real-Time Inventory Intelligence Platform Boosts Revenue by $48M',
    challenge: 'Inventory blind spots across 1,200 stores leading to stockouts and overstock situations.',
    result: '$48M annual revenue impact through intelligent inventory allocation.',
    metric: '+$48M',
    metricLabel: 'Revenue Uplift',
    service: 'Modernization',
    accent: 'text-indigo-400',
    tags: ['Apache Kafka', 'Next.js', 'Zero Trust']
  },
  {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance AI Reduces Heavy Equipment Downtime by 84%',
    challenge: 'Unexpected machinery failures causing $20M+ in annual production losses.',
    result: '84% downtime reduction, $18.5M annual savings in lost production.',
    metric: '-84%',
    metricLabel: 'Downtime Reduced',
    service: 'AI & Analytics',
    accent: 'text-amber-400',
    tags: ['IoT Telemetry', 'MLOps', 'AWS IoT']
  },
  {
    industry: 'Energy & Utilities',
    title: 'Cybersecurity Overhaul Achieves Full NERC CIP Compliance for Utility Provider',
    challenge: 'Major utility facing regulatory non-compliance risk and aging perimeter firewalls.',
    result: 'Full NERC CIP compliance achieved in 9 months, zero incidents since deployment.',
    metric: '0',
    metricLabel: 'Security Breaches',
    service: 'Cybersecurity',
    accent: 'text-cyan-400',
    tags: ['Zero Trust IAM', '24/7 SOC', 'NERC CIP']
  },
  {
    industry: 'Telecom & Media',
    title: 'Digital Transformation Reduces Customer Churn by 31% for Major Telco',
    challenge: 'High customer churn driven by poor digital experience and slow service resolution.',
    result: '31% churn reduction, NPS score improved from 22 to 68.',
    metric: '-31%',
    metricLabel: 'Customer Churn',
    service: 'Digital Transformation',
    accent: 'text-pink-400',
    tags: ['Event-Driven', 'Microservices', 'GraphQL']
  },
];

const accentHex: Record<string, string> = {
  'text-cyan-400': '#22D3EE',
  'text-emerald-400': '#34D399',
  'text-indigo-400': '#818CF8',
  'text-amber-400': '#F59E0B',
  'text-pink-400': '#F472B6',
};

type CaseStudy = (typeof cases)[number];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumb="Case Studies"
        kicker="Demonstrated Impact"
        title={<>Real impact for <span className="text-gradient">global enterprises</span></>}
        description="Explore how Inovaraa Solutions has delivered measurable compound outcomes across industries and technology domains."
      >
        <a href="#cases" className="btn btn--primary btn--lg">
          Explore case studies
          <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
        </a>
      </PageHero>

      {/* Industry strip */}
      <section className="pb-16 relative" aria-label="Industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {cases.map((cs, i) => {
              const hex = accentHex[cs.accent] ?? '#22D3EE';
              return (
                <li
                  key={cs.industry}
                  suppressHydrationWarning data-reveal="fade"
                  style={{ '--d': `${i * 60}ms` } as CSSProperties}
                  className="surface-glass rounded-full pl-2.5 pr-4 py-1.5 text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full pulse-soft" style={{ background: hex, animationDelay: `${i * -0.5}s` }} aria-hidden="true" />
                  {cs.industry}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="cases" className="pb-24 sm:pb-28 relative scroll-mt-28" aria-labelledby="cases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Engagements"
            id="cases-heading"
            title={<>Outcomes, <span className="text-gradient">measured</span></>}
            description="Each engagement pairs a business challenge with the architecture that solved it and the number that proves it."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {cases.map((cs, i) => (
              <CaseCard key={cs.title} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CaseCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const hex = accentHex[cs.accent] ?? '#22D3EE';
  const tint = `color-mix(in srgb, ${hex} 70%, var(--ink))`;
  return (
    <article
      suppressHydrationWarning data-reveal
      style={{ '--d': `${(index % 2) * 120}ms` } as CSSProperties}
      className="surface spotlight lift rounded-[1.75rem] p-6 sm:p-8 flex flex-col relative overflow-hidden"
    >
      {/* Decorative metric graphic */}
      <MetricGraphic hex={hex} variant={index % 3} />

      <div className="relative flex flex-wrap items-center justify-between gap-3 mb-8">
        <span
          className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border"
          style={{ color: tint, background: `color-mix(in srgb, ${hex} 12%, transparent)`, borderColor: `color-mix(in srgb, ${hex} 30%, transparent)` }}
        >
          {cs.industry}
        </span>
        <span className="text-xs text-slate-500 font-medium flex items-center gap-2">
          <span className="font-mono">{String(index + 1).padStart(2, '0')}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500" aria-hidden="true" />
          {cs.service}
        </span>
      </div>

      <div className="relative mb-6">
        <div
          suppressHydrationWarning data-count
          className="font-display text-6xl sm:text-7xl font-extrabold tracking-tight leading-none"
          style={{ color: tint }}
        >
          {cs.metric}
        </div>
        <div className="mt-3 text-xs uppercase tracking-[0.14em] text-white font-bold">{cs.metricLabel}</div>
      </div>

      <h2 className="relative text-xl sm:text-2xl font-bold text-white leading-snug mb-6">{cs.title}</h2>

      <dl className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            Challenge
          </dt>
          <dd className="text-sm text-slate-400 leading-relaxed">{cs.challenge}</dd>
        </div>
        <div
          className="rounded-2xl border p-4"
          style={{ background: `color-mix(in srgb, ${hex} 8%, transparent)`, borderColor: `color-mix(in srgb, ${hex} 25%, transparent)` }}
        >
          <dt className="text-[11px] font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5" style={{ color: tint }}>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
            Outcome
          </dt>
          <dd className="text-sm text-slate-300 leading-relaxed">{cs.result}</dd>
        </div>
      </dl>

      <div className="relative mt-auto">
        <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies">
          {cs.tags.map((tag) => (
            <li key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
              {tag}
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t border-white/10 flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
          <span className="text-xs font-semibold text-cyan-400">Verified Client Architecture</span>
        </div>
      </div>
    </article>
  );
}

// Small abstract chart in the card corner (purely decorative)
function MetricGraphic({ hex, variant }: { hex: string; variant: number }) {
  return (
    <svg className="absolute -right-6 -top-6 w-48 h-48 pointer-events-none opacity-40" viewBox="0 0 200 200" aria-hidden="true">
      {variant === 0 &&
        [0, 1, 2, 3].map((i) => <circle key={i} cx="150" cy="50" r={22 + i * 22} fill="none" stroke={hex} strokeOpacity={0.5 - i * 0.1} />)}
      {variant === 1 &&
        [0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={60 + i * 24} y={120 - i * 18} width="14" height={30 + i * 18} rx="4" fill={hex} fillOpacity={0.12 + i * 0.07} />
        ))}
      {variant === 2 && (
        <>
          <path d="M20 150 C 70 140, 90 60, 180 40" fill="none" stroke={hex} strokeOpacity="0.6" strokeWidth="2" strokeDasharray="5 6" style={{ animation: 'dash-flow 2.4s linear infinite' }} />
          <circle cx="180" cy="40" r="5" fill={hex} className="pulse-soft" />
        </>
      )}
    </svg>
  );
}
