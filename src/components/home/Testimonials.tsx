'use client';

const testimonials = [
  {
    quote: 'Ahaan Technologies re-architected our multi-region Kubernetes fleet and deployed automated FinOps governance. We realized 58% in infrastructure savings with zero downtime.',
    author: 'Sarah Mitchell',
    role: 'Chief Technology Officer',
    company: 'GlobalBank Financial',
    initials: 'SM',
    badge: 'FinTech · 10M+ Users',
    accent: 'text-cyan-400'
  },
  {
    quote: 'Their enterprise AI team designed our private clinical RAG pipeline in under 8 weeks. What used to take our analysts days is now queryable in sub-second latency with 100% HIPAA compliance.',
    author: 'Dr. Rajesh Kumar',
    role: 'VP of Data & AI Systems',
    company: 'MediHealth Group',
    initials: 'RK',
    badge: 'HealthTech Network',
    accent: 'text-emerald-400'
  },
  {
    quote: 'The Strangler Fig modernization executed by Ahaan allowed us to decommission our 15-year legacy ERP without a single hour of customer service disruption. Truly best-in-class engineers.',
    author: 'Amanda Chen',
    role: 'Chief Digital Officer',
    company: 'OmniRetail Global',
    initials: 'AC',
    badge: 'Fortune 500 Retail',
    accent: 'text-indigo-400'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-slate-950/30" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Enterprise Validation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4" id="testimonials-heading">
            Trusted by Leaders at Scale
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Direct feedback from engineering executives who rely on Ahaan Technologies for mission-critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400 text-sm">
                    {'★★★★★'}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {t.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-indigo-500/30">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} · <span className="text-cyan-400 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
