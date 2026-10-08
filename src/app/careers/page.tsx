import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at Ahaan Technologies | Join Our Global Engineering Pods',
  description: 'Explore career opportunities at Ahaan Technologies. Join 4,200+ professionals driving AI, cloud, and digital transformation for enterprises worldwide.',
  alternates: { canonical: 'https://ahaantechnologies.com/careers' },
};

const openings = [
  { title: 'Principal Cloud & Kubernetes Architect', dept: 'Cloud Infrastructure', location: 'New York / Remote', type: 'Full-time' },
  { title: 'Senior AI/ML & LLM Engineer', dept: 'AI & Analytics', location: 'Bangalore / Hybrid', type: 'Full-time' },
  { title: 'Staff Cybersecurity Analyst (SOC / Threat Hunting)', dept: 'Cybersecurity', location: 'London / Remote', type: 'Full-time' },
  { title: 'Enterprise Digital Transformation Lead', dept: 'Consulting', location: 'Singapore / Hybrid', type: 'Full-time' },
  { title: 'Site Reliability & FinOps Engineer', dept: 'Cloud Infrastructure', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Principal Data Platform Architect (Snowflake / dbt)', dept: 'AI & Analytics', location: 'New York / Hybrid', type: 'Full-time' },
  { title: 'Senior Full Stack Engineer (Next.js / Go)', dept: 'Software Development', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Technical Program Director (Cloud Migration)', dept: 'PMO', location: 'Dubai / Remote', type: 'Full-time' },
];

const perks = [
  {
    title: 'Remote-First Global Culture',
    desc: 'Work from anywhere with asynchronous autonomy and distributed engineering pods.',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    )
  },
  {
    title: 'Continuous Mastery Budget',
    desc: '$3,500 annual personal learning stipend plus fully covered cloud certifications.',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
    )
  },
  {
    title: 'Top-Tier Compensation & Equity',
    desc: 'Top 10% market-calibrated salary benchmarks with performance bonuses and equity.',
    icon: (
      <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    )
  },
  {
    title: 'Comprehensive Health & Wellness',
    desc: 'Zero-deductible healthcare, dental, vision, and mental wellness coverage.',
    icon: (
      <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    )
  },
  {
    title: 'Flexible Autonomous Time Off',
    desc: 'Flexible paid time off with mandatory 4-week annual recharge policies.',
    icon: (
      <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  },
  {
    title: 'State-of-the-Art Gear',
    desc: 'Latest M3/M4 Max MacBook Pro, 4K display, and ergonomic home setup allowance.',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
    )
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Careers</div>
          </nav>
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Join Our Squads</span>
            <h1 className="text-white my-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Build the Autonomous Future of Enterprise Tech
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Join 4,200+ elite engineers, solutions architects, and AI researchers solving mission-critical computing challenges worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Engineering Culture</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">Why Elite Builders Thrive at Ahaan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="glass-card glass-card-hover p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-slate-950/40 relative border-y border-white/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">Current Engineering Openings</h2>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {openings.map((role) => (
              <div
                key={role.title}
                className="glass-card glass-card-hover p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">{role.dept}</div>
                  <h3 className="text-lg font-bold text-white">{role.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>📍 {role.location}</span>
                    <span>·</span>
                    <span>💼 {role.type}</span>
                  </div>
                </div>

                <Link href="/contact" className="btn btn--secondary btn--sm shrink-0">
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Do not See the Exact Role for You?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            We are always scouting for world-class systems engineers, AI specialists, and architects.
          </p>
          <Link href="/contact" className="btn btn--primary btn--lg">
            Send Open Application
          </Link>
        </div>
      </section>
    </>
  );
}
