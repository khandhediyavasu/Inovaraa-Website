'use client';

import Link from 'next/link';

const caseStudies = [
  {
    client: 'Tier-1 Global Investment Bank',
    industry: 'Financial Services',
    title: 'Multi-Cloud Migration & Automated FinOps at Petabyte Scale',
    metric: '-62%',
    metricLabel: 'Infrastructure TCO',
    submetric: '450+ Microservices Migrated · 0 Downtime',
    tags: ['Multi-Cloud', 'Kubernetes EKS', 'Terraform', 'FinOps'],
    href: '/case-studies',
    accent: 'text-cyan-400'
  },
  {
    client: 'National Hospital Network',
    industry: 'Healthcare & Life Sciences',
    title: 'Private RAG Architecture & AI Diagnostics Acceleration',
    metric: '73%',
    metricLabel: 'Faster Clinical Triage',
    submetric: 'Serving 2.4M Patients · HIPAA Compliant',
    tags: ['Private LLMs', 'Milvus Vector DB', 'AWS Bedrock', 'HIPAA'],
    href: '/case-studies',
    accent: 'text-emerald-400'
  },
  {
    client: 'Fortune 100 Retail Giant',
    industry: 'Omnichannel Commerce',
    title: 'Event-Driven Real-Time Supply Chain & Order Engine',
    metric: '+$48M',
    metricLabel: 'Annual Revenue Uplift',
    submetric: '1,200+ Stores Synced · <50ms Order Latency',
    tags: ['Apache Kafka', 'Next.js Commerce', 'Zero-Trust IAM'],
    href: '/case-studies',
    accent: 'text-indigo-400'
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 relative" id="case-studies" aria-labelledby="casestudies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Demonstrated Enterprise ROI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4" id="casestudies-heading">
            Case Studies in Compound Impact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            See how the world&apos;s most demanding enterprises scale, secure, and modernize with Ahaan Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.title}
              href={cs.href}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Verified Case Study
                  </span>
                </div>

                <div className={`text-4xl sm:text-5xl font-black ${cs.accent} tracking-tight leading-none my-2`}>
                  {cs.metric}
                </div>
                <div className="text-xs uppercase tracking-wider text-white font-bold mb-4">
                  {cs.metricLabel}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug mb-2 group-hover:text-cyan-400 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {cs.submetric}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors pt-3 border-t border-white/10">
                  <span>Read Full Architecture Breakdown</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
          >
            View All Enterprise Case Studies
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
