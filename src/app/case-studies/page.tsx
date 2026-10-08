import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Case Studies & Demonstrable ROI | Ahaan Technologies',
  description: 'Explore Ahaan Technologies case studies — real outcomes for real enterprises across cloud, AI, cybersecurity, and digital transformation engagements.',
  alternates: { canonical: 'https://ahaantechnologies.com/case-studies' },
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

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Case Studies</div>
          </nav>
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Demonstrated Impact</span>
            <h1 className="text-white my-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Real Impact for Global Enterprises
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Explore how Ahaan Technologies has delivered measurable compound outcomes across industries and technology domains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((cs) => (
              <div
                key={cs.title}
                className="glass-card glass-card-hover p-8 flex flex-col justify-between min-h-[380px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge badge--cyan">{cs.industry}</span>
                    <span className="text-xs text-slate-500 font-medium">{cs.service}</span>
                  </div>

                  <div className={`text-4xl font-black tracking-tight leading-none ${cs.accent} my-2`}>
                    {cs.metric}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white font-bold mb-4">
                    {cs.metricLabel}
                  </div>

                  <h2 className="text-lg font-bold text-white leading-snug mb-3">{cs.title}</h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    <strong className="text-slate-200">Outcome:</strong> {cs.result}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-400">Verified Client Architecture</span>
                    <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Ready to Deliver Measurable Results for Your Business?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Book a 30-minute discovery session with our Principal Solutions Architects.
          </p>
          <Link href="/contact" className="btn btn--primary btn--lg">
            Schedule Discovery Session
          </Link>
        </div>
      </section>
    </>
  );
}
