import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & Autonomous Architectures | Ahaan Technologies',
  description: 'Explore Ahaan Technologies full portfolio of enterprise IT services: cloud infrastructure, AI analytics, digital transformation, cybersecurity, managed services, and software development.',
  alternates: { canonical: 'https://ahaantechnologies.com/services' },
};

const services = [
  {
    title: 'Cloud Infrastructure & Kubernetes',
    description: 'Design, migrate, and optimize your cloud environment across AWS, Azure, and GCP. We build scalable, cost-efficient, and resilient cloud architectures tailored to your enterprise needs.',
    href: '/services/cloud-infrastructure',
    features: ['Multi-cloud & hybrid cloud strategy', 'Zero-downtime database migration', 'Kubernetes & container orchestration', 'FinOps & automated cost governance', 'Site reliability engineering (SRE)', 'Cloud-native development'],
    industries: ['Finance', 'Healthcare', 'Retail'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
    )
  },
  {
    title: 'Enterprise AI & Autonomous Agents',
    description: 'Transform your data into a strategic asset. Our AI and analytics experts build everything from streaming data pipelines to production ML models and real-time intelligence platforms.',
    href: '/services/ai-data-analytics',
    features: ['Private RAG & vector databases', 'Machine learning model development', 'LLM fine-tuning & prompt guardrails', 'Data Lakehouses (Snowflake/Databricks)', 'Business intelligence dashboards', 'AI strategy & governance'],
    industries: ['Healthcare', 'Manufacturing', 'Finance'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
    )
  },
  {
    title: 'Digital Transformation & Modernization',
    description: 'End-to-end modernization of your business — from customer experience to back-office operations. We combine technology expertise with change management to deliver lasting transformation.',
    href: '/services/digital-transformation',
    features: ['Legacy monolith decomposition', 'Business process automation (RPA)', 'Customer experience redesign', 'Event-driven Kafka architecture', 'Change management programs', 'Digital maturity assessment'],
    industries: ['Retail', 'Manufacturing', 'Government'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16"/></svg>
    )
  },
  {
    title: 'Zero Trust Cybersecurity & SOC Defense',
    description: 'Enterprise-grade security that protects your assets, data, and reputation. From zero trust architecture to 24/7 SOC operations, we keep threats at bay while keeping your business moving.',
    href: '/services/cybersecurity',
    features: ['Zero trust identity & access (IAM)', '24/7 Security Operations Center (SOC)', 'Penetration testing & red teaming', 'GDPR, HIPAA, SOC2 compliance', 'Cloud posture management (Wiz)', 'Incident response & forensics'],
    industries: ['Finance', 'Healthcare', 'Defense'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  },
  {
    title: '24/7 Managed NOC & SRE Operations',
    description: 'Let us run your IT operations so your team can focus on innovation. Our managed services include 24/7 monitoring, proactive maintenance, and guaranteed SLA performance.',
    href: '/services/managed-services',
    features: ['24/7 NOC & SOC operations', 'Proactive infrastructure telemetry', 'IT helpdesk & ITSM (ITIL)', 'Patch management & CVE mitigation', 'Disaster recovery as a service (DRaaS)', 'Vendor & license governance'],
    industries: ['All Enterprise Sectors'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    )
  },
  {
    title: 'Custom Enterprise Software Engineering',
    description: 'Custom enterprise applications built with modern architectures, delivered with agile methodology. From greenfield development to platform re-architecture, we build software that scales.',
    href: '/services/software-development',
    features: ['Modular microservices architecture', 'High-throughput GraphQL & REST APIs', 'Next.js & React Native applications', 'Enterprise SaaS platforms', 'Automated testing & QA pods', 'DevSecOps CI/CD pipelines'],
    industries: ['FinTech', 'E-commerce', 'Healthcare'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    )
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Services</div>
          </nav>
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Enterprise Capabilities</span>
            <h1 className="text-white my-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              End-to-End IT Services Designed for Autonomous Scale
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether you need to modernize infrastructure, deploy private AI agents, or secure mission-critical workloads — Ahaan Technologies delivers the expertise to make it happen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <div className="flex flex-col gap-8">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="glass-card glass-card-hover p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                      {svc.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">0{i + 1}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{svc.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">{svc.description}</p>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {svc.industries.map((ind) => (
                      <span key={ind} className="badge badge--cyan">{ind}</span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Link href={svc.href} className="btn btn--primary btn--sm">
                      Explore {svc.title.split(' ')[0]}
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-950/50 border border-white/5 rounded-xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Core Deliverables</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <span className="text-emerald-400 font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Not Sure Which Architecture Fits Your Workload?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Our Principal Architects will assess your infrastructure and benchmark potential ROI savings.
          </p>
          <Link href="/contact" className="btn btn--accent btn--lg">
            Schedule a Free Architecture Audit
          </Link>
        </div>
      </section>
    </>
  );
}
