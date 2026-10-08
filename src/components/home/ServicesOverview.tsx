'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 'cloud',
    category: 'Cloud & Infra',
    title: 'Cloud Infrastructure & Kubernetes',
    subtitle: 'Multi-cloud orchestration across AWS, Azure, & GCP with automated FinOps and zero-downtime scaling.',
    href: '/services/cloud-infrastructure',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    badge: 'Multi-Cloud Leader',
    stats: '52% Cost Reduction',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    tags: ['Terraform IaC', 'Kubernetes EKS/AKS', 'ArgoCD GitOps', 'FinOps Spot Engine']
  },
  {
    id: 'ai',
    category: 'AI & Intelligence',
    title: 'Enterprise AI & Autonomous Agents',
    subtitle: 'Production LLMs, private RAG pipelines, and predictive ML models integrated securely into enterprise workflows.',
    href: '/services/ai-data-analytics',
    accentColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/30',
    badge: 'GenAI 2026 Ready',
    stats: '128k Context RAG',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    tags: ['Private LLMs', 'Milvus / Pinecone RAG', 'Databricks Lakehouse', 'MLOps CI/CD']
  },
  {
    id: 'cyber',
    category: 'Cyber Defense',
    title: 'Zero Trust Cybersecurity & SOC Defense',
    subtitle: 'End-to-end security posture management, identity-aware perimeter defense, and 24/7 AI-augmented SOC response.',
    href: '/services/cybersecurity',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    badge: 'Zero Breach Guarantee',
    stats: 'Sub-15m Containment',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    tags: ['Zero Trust IAM', 'CrowdStrike EDR', 'Wiz Cloud Security', 'SOC2 / ISO 27001']
  },
  {
    id: 'digital',
    category: 'Modernization',
    title: 'Digital Transformation & Modernization',
    subtitle: 'Deconstruct brittle legacy monoliths into event-driven microservices with continuous business continuity.',
    href: '/services/digital-transformation',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    badge: 'Agile Strangler Fig',
    stats: '3.4x Faster Release',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16"/>
      </svg>
    ),
    tags: ['Event-Driven Kafka', 'BPA & RPA Automation', 'Omnichannel CX', 'Domain Design']
  },
  {
    id: 'managed',
    category: 'Operations',
    title: '24/7 Managed NOC & SRE Operations',
    subtitle: 'Contractual 99.999% SLA uptime management with AI anomaly triaging and automated disaster recovery failover.',
    href: '/services/managed-services',
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    badge: '99.999% SLA Uptime',
    stats: 'Sub-5m P1 Response',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    tags: ['24/7 White-Glove NOC', 'Proactive Health Tracing', 'RPO < 5m DRaaS', 'ITIL ITSM']
  },
  {
    id: 'software',
    category: 'Engineering',
    title: 'Custom Enterprise Software Engineering',
    subtitle: 'Bespoke high-performance software systems built with modular TypeScript, Next.js, Go, and distributed data layers.',
    href: '/services/software-development',
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/30',
    badge: 'Full IP Ownership',
    stats: '50M+ Events/Day',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    tags: ['Modular Microservices', 'Next.js & TypeScript', 'GraphQL & gRPC APIs', 'Automated QA Pods']
  }
];

const categories = ['All Services', 'AI & Intelligence', 'Cloud & Infra', 'Cyber Defense', 'Engineering'];

export default function ServicesOverview() {
  const [selectedCat, setSelectedCat] = useState('All Services');

  const filtered = services.filter((s) => {
    if (selectedCat === 'All Services') return true;
    if (selectedCat === 'AI & Intelligence') return s.category === 'AI & Intelligence';
    if (selectedCat === 'Cloud & Infra') return s.category === 'Cloud & Infra' || s.category === 'Operations';
    if (selectedCat === 'Cyber Defense') return s.category === 'Cyber Defense';
    if (selectedCat === 'Engineering') return s.category === 'Engineering' || s.category === 'Modernization';
    return true;
  });

  return (
    <section className="py-24 relative" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Enterprise Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4" id="services-heading">
            Architected for Extreme Scale &amp; Resilience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore our modular technology practices designed to modernize infrastructure, embed AI intelligence, and protect your digital assets.
          </p>

          {/* Filter Pills */}
          <div className="flex gap-2 justify-center flex-wrap mt-8" role="group" aria-label="Filter services by capability">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((svc) => (
            <div
              key={svc.id}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${svc.accentColor} group-hover:scale-110 transition-transform shadow-inner`}>
                    {svc.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {svc.subtitle}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {svc.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className={`text-xs font-bold ${svc.accentColor}`}>
                    ⚡ {svc.stats}
                  </span>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    Explore Details
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
