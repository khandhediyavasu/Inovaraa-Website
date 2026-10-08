import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Ahaan Technologies | Our Mission & Global Engineering Footprint',
  description: 'Learn about Ahaan Technologies — our engineering ethos, mission, leadership team, and track record powering enterprise scale.',
  alternates: { canonical: 'https://ahaantechnologies.com/about' },
};

const values = [
  {
    title: 'Zero Compromise Engineering',
    desc: 'We architect for extreme scale, security, and low-latency from day one.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    )
  },
  {
    title: 'Compound Enterprise ROI',
    desc: 'Every architecture initiative is mapped to verifiable balance sheet performance.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    )
  },
  {
    title: '100% Client IP Ownership',
    desc: 'You own all repositories, models, pipelines, and infrastructure as code.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  },
  {
    title: 'Autonomous Innovation',
    desc: 'Embedding AI agents and automation directly into core engineering workflows.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
    )
  }
];

const leadership = [
  { name: 'Tejas Daraniya', title: 'Chief Executive Officer', initials: 'TD' },
  { name: 'Nikhil Mahindrakar', title: 'Director', initials: 'NM' },
  { name: 'Vasu Khandhediya', title: 'Chief Technology Officer', initials: 'VK' }
];

const team: { name: string; role?: string; initials: string }[] = [
  { name: 'Jaimin Manfroliya', role: 'Web Developer', initials: 'JM' },
  { name: 'Parth Suhagiya', role: 'Web Developer', initials: 'PS' },
  { name: 'Vijeet Shah', role: 'QA', initials: 'VS' },
  { name: 'Meet Patel', role: 'QA', initials: 'MP' },
  { name: 'Vimal Vankani', role: 'QA', initials: 'VV' },
  { name: 'Prince Mendapara', role: 'Mobile Development', initials: 'PM' },
  { name: 'Harshil Patel', role: 'Web Developer', initials: 'HP' },
  { name: 'Jay Patel', role: 'Web Developer', initials: 'JP' },
  { name: 'Barkha Kantariya', role: 'HR Manager', initials: 'BK' }
];

const milestones = [
  { year: '2012', title: 'Founding & Distributed Systems Core', desc: 'Started in Pune, India building high-throughput financial message brokers.' },
  { year: '2016', title: 'Global Multi-Cloud Expansion', desc: 'Opened North America & UK headquarters, achieved ISO 27001 & SOC 2 certifications.' },
  { year: '2021', title: 'AI & Data Lakehouse Practice', desc: 'Launched enterprise MLOps accelerator managing 50M+ daily events.' },
  { year: '2026', title: 'Autonomous Enterprise Era', desc: 'Operating 24/7 global mesh across 450+ Fortune 1000 organizations.' }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">About</div>
          </nav>
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Enterprise Profile</span>
            <h1 className="text-white my-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Engineering the Backbone of Modern Global Commerce
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Ahaan Technologies partners with forward-thinking enterprises to design, build, and run resilient cloud architectures, AI agents, and Zero Trust security fabrics.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Core Engineering Principles</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">What Drives Our Squads</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card glass-card-hover p-8 flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-950/40 relative border-y border-white/5" id="leadership">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Executive Leadership</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">Architects of Transformation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leadership.map((l) => (
              <div key={l.name} className="glass-card glass-card-hover p-6 text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-indigo-500/20">
                  {l.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{l.name}</h3>
                  <div className="text-xs text-cyan-400 font-semibold mt-0.5">{l.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 relative" id="team">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">The People Behind the Platform</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="glass-card glass-card-hover p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-base font-bold shadow-lg shadow-indigo-500/20 shrink-0">
                  {m.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{m.name}</h3>
                  {m.role && <div className="text-xs text-cyan-400 font-semibold mt-0.5">{m.role}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-slate-950/40 relative border-y border-white/5" id="partners">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Partners &amp; Alliances</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">Our Associate Company</h2>
          </div>

          <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-xl font-black shadow-lg shadow-indigo-500/20 shrink-0">
              RX
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">RytumX</h3>
                <span className="badge badge--emerald">DevOps Partner</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Ahaan Technologies and RytumX are associated companies. All DevOps work for our clients is delivered by RytumX, a specialist in cloud automation and DevSecOps that builds security into every stage of the software delivery lifecycle.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['DevSecOps Implementation', 'Kubernetes Hardening', 'Cloud Security Auditing', 'FinOps'].map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{s}</span>
                ))}
              </div>
              <a
                href="https://www.rytumx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
              >
                Visit rytumx.com
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Journey</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">Evolution of Scale</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="glass-card glass-card-hover p-6 relative">
                <div className="text-3xl font-black text-cyan-400 mb-2">{m.year}</div>
                <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Partner with Our Engineering Leadership
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Schedule an executive architecture session with our CTO & Principal Architects.
          </p>
          <Link href="/contact" className="btn btn--primary btn--lg">
            Schedule Architecture Review
          </Link>
        </div>
      </section>
    </>
  );
}
