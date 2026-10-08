import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve | Enterprise IT Solutions by Sector',
  description: 'Ahaan Technologies delivers industry-specific IT solutions for financial services, healthcare, manufacturing, retail, energy, aerospace, education, and telecom.',
  alternates: { canonical: 'https://ahaantechnologies.com/industries' },
};

const industries = [
  {
    title: 'Financial Services & FinTech',
    slug: 'financial-services',
    desc: 'Regulatory compliance, digital banking, fraud detection, and real-time analytics for banks, insurers, and fintechs.',
    challenges: ['Regulatory compliance (GDPR, SOX, PCI-DSS)', 'Legacy core banking modernization', 'Real-time fraud detection with sub-10ms inference', 'Digital customer experience & open banking APIs'],
    services: ['Cybersecurity', 'AI & Analytics', 'Cloud Infrastructure', 'Digital Transformation'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
    )
  },
  {
    title: 'Healthcare & Life Sciences',
    slug: 'healthcare',
    desc: 'HIPAA-compliant platforms, clinical AI, patient engagement, and interoperability solutions for health systems and pharma.',
    challenges: ['HIPAA & clinical data sovereignty compliance', 'Interoperability & HL7 FHIR pipelines', 'Clinical decision support AI with zero hallucination', 'Patient experience digitization & EHR integration'],
    services: ['AI & Analytics', 'Cybersecurity', 'Software Development', 'Managed Services'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    )
  },
  {
    title: 'Smart Manufacturing & Industry 4.0',
    slug: 'manufacturing',
    desc: 'Industry 4.0 transformation including IoT, predictive maintenance, smart supply chain, and quality intelligence.',
    challenges: ['Legacy OT/IT integration & air-gapping', 'Predictive equipment maintenance with edge sensors', 'End-to-end supply chain telemetry visibility', 'Automated computer vision quality control'],
    services: ['AI & Analytics', 'Digital Transformation', 'Cloud Infrastructure', 'IoT'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
    )
  },
  {
    title: 'Retail & Omnichannel E-commerce',
    slug: 'retail',
    desc: 'Omnichannel platforms, demand forecasting, personalization engines, and supply chain optimization for retailers.',
    challenges: ['Omnichannel inventory unification across 1,000+ stores', 'Real-time inventory intelligence & stockout prevention', 'Sub-second customer personalization at scale', 'High-concurrency flash sale traffic resilience'],
    services: ['Digital Transformation', 'AI & Analytics', 'Software Development'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    )
  },
  {
    title: 'Energy, CleanTech & Utilities',
    slug: 'energy',
    desc: 'Smart grid technology, sustainability analytics, NERC CIP compliance, and operational intelligence for energy providers.',
    challenges: ['NERC CIP regulatory compliance audits', 'Smart grid modernization & load balancing', 'Carbon accounting & ESG emission tracking', 'SCADA infrastructure zero-trust perimeter defense'],
    services: ['Cybersecurity', 'AI & Analytics', 'Managed Services'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    )
  },
  {
    title: 'Aerospace & Mission-Critical Defense',
    slug: 'aerospace',
    desc: 'Mission-critical systems, secure defense infrastructure, simulation platforms, and compliance for aerospace organizations.',
    challenges: ['ITAR, CMMC & FedRAMP High compliance', 'Ultra-resilient failover with sub-second RTO', 'Air-gapped classified cloud environments', 'Software-defined supply chain traceability'],
    services: ['Cybersecurity', 'Software Development', 'Cloud Infrastructure'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Industries</div>
          </nav>
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Sector Depth</span>
            <h1 className="text-white my-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Industry Expertise That Goes Deeper Than Technology
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our domain specialists understand your sector&apos;s unique compliance regulations, data sovereignty rules, and operational priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <div className="flex flex-col gap-8">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="glass-card glass-card-hover p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mb-4">
                    {ind.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">{ind.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{ind.desc}</p>
                  
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Target Industry Solutions</h3>
                  <div className="flex flex-wrap gap-2">
                    {ind.services.map((svc) => (
                      <span key={svc} className="badge badge--cyan">{svc}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/50 border border-white/5 rounded-xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Sector Challenges We Solve</h3>
                  <ul className="flex flex-col gap-3">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link href="/contact" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5">
                      Discuss {ind.title.split(' ')[0]} Architecture →
                    </Link>
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
            Need a Solution for Your Specific Industry?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Our domain practice leads are ready to review your regulatory and operational requirements.
          </p>
          <Link href="/contact" className="btn btn--primary btn--lg">
            Consult a Domain Specialist
          </Link>
        </div>
      </section>
    </>
  );
}
