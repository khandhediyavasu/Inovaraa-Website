'use client';

const steps = [
  {
    number: '01',
    phase: 'Discovery & Architecture Audit',
    title: 'Workload & TCO Analysis',
    description: 'We audit your technical debt, data pipelines, security posture, and cloud unit economics to establish clear ROI milestones.',
    metric: '14-Day Rapid Audit',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    )
  },
  {
    number: '02',
    phase: 'Architecture Blueprint',
    title: 'Zero Trust & Cloud Landing Zones',
    description: 'Design decoupled microservices, automated IaC Terraform templates, and model evaluation guardrails for enterprise reliability.',
    metric: 'Production-Grade IaC',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    )
  },
  {
    number: '03',
    phase: 'Agile POD Execution',
    title: 'Incremental Sprint Delivery',
    description: 'Dedicated cross-functional engineering pods deploy working increments every 2 weeks using automated GitOps pipelines.',
    metric: '2-Week Sprint Velocity',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },
  {
    number: '04',
    phase: 'Autonomous SRE & Scale',
    title: 'Continuous Optimization',
    description: '24/7 telemetry monitoring, automated FinOps cost trimming, and AI model drift retraining ensure peak performance.',
    metric: '99.999% SLA Guarantee',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    )
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative bg-slate-950/40 border-y border-white/5" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Execution Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4" id="process-heading">
            Predictable, Milestone-Driven Delivery
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            How we eliminate project risk and deliver compound ROI across complex enterprise engineering initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xl font-black text-white/20">
                    {step.number}
                  </span>
                </div>

                <div className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-1">
                  {step.phase}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10">
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                  ⚡ {step.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
