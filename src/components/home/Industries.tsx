'use client';

import Link from 'next/link';

const industries = [
  {
    title: 'Financial Services & FinTech',
    desc: 'High-frequency trading latency reduction, real-time fraud detection ML, and SOC 2 Type II compliance.',
    badge: 'PCI-DSS & SOC 2',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
    )
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant data lakes, AI diagnostic imaging acceleration, and secure EHR interoperability.',
    badge: 'HIPAA Compliant',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    )
  },
  {
    title: 'Smart Manufacturing & IoT',
    desc: 'Predictive equipment maintenance, automated visual quality inspection, and supply chain telemetry.',
    badge: 'Industry 4.0',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
    )
  },
  {
    title: 'Retail & Omnichannel Commerce',
    desc: 'Headless Next.js storefronts, real-time inventory synchronization, and personalized AI recommenders.',
    badge: '99.999% Peak SLA',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    )
  },
  {
    title: 'Energy, CleanTech & Utilities',
    desc: 'Smart grid optimization, emission carbon accounting pipelines, and SCADA network zero-trust protection.',
    badge: 'Smart Grid Mesh',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    )
  },
  {
    title: 'Defense & Aerospace Systems',
    desc: 'Air-gapped secure cloud enclaves, real-time edge telemetry, and FedRAMP compliance frameworks.',
    badge: 'FedRAMP High',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  }
];

export default function Industries() {
  return (
    <section className="py-24 relative" id="industries" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Domain Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4" id="industries-heading">
            Tailored for Regulated &amp; High-Volume Sectors
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Enterprise solutions engineered to satisfy strict regulatory compliance and exponential transaction volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.title}
              href="/industries"
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 rounded-3xl p-6 flex flex-col justify-between min-h-[220px] shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {ind.icon}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {ind.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mt-4">
                <span>View Architecture</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
