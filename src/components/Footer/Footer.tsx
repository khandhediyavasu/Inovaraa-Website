'use client';

import Link from 'next/link';

const serviceLinks = [
  { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
  { label: 'AI & Data Analytics', href: '/services/ai-data-analytics' },
  { label: 'Digital Transformation', href: '/services/digital-transformation' },
  { label: 'Cybersecurity', href: '/services/cybersecurity' },
  { label: 'Managed Services', href: '/services/managed-services' },
  { label: 'Software Development', href: '/services/software-development' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Leadership', href: '/about#leadership' },
  { label: 'Our Work', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Partners & Alliances', href: '/about#partners' },
];

const resourceLinks = [
  { label: 'Knowledge Hub', href: '/blog' },
  { label: 'Industries', href: '/industries' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#03060E] border-t border-white/10 text-slate-400 relative overflow-hidden" role="contentinfo">
      {/* Ambient radial blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Newsletter */}
      <div className="py-12 border-b border-white/5 bg-slate-950/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Stay at the Forefront of Enterprise Tech</h3>
              <p className="text-sm text-slate-400">Curated monthly intelligence on Generative AI, multi-cloud architectures, and FinOps.</p>
            </div>
            <form className="flex gap-3 max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="flex-1 px-4 py-2.5 rounded-full bg-slate-900/90 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500"
                placeholder="Enter your enterprise work email"
                required
                aria-label="Work email"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 shadow-md shadow-indigo-500/30 hover:brightness-110 shrink-0 transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Directory */}
      <div className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2.5" aria-label="Ahaan Technologies — Home">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-base">A</span>
                <span className="text-lg font-black text-white tracking-tight">
                  Ahaan<span className="text-cyan-400">Tech</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Engineering tomorrow&apos;s autonomous enterprises. High-performance cloud architectures, custom AI agents, and Zero Trust cybersecurity.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-semibold w-fit mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 relative">
                  <span className="absolute -inset-1 rounded-full bg-emerald-400/50 animate-ping" />
                </span>
                <span>All Global Systems Operational • 99.999% SLA</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Capabilities</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0" role="list">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0" role="list">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Resources</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0" role="list">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-white/5 relative z-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {year} Ahaan Technologies Enterprise Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span>·</span>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
