import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { SITE } from '@/data/site';

const serviceLinks = [
  { label: 'AI Agents & MCP Servers', href: '/services/ai-agents-mcp-servers' },
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

const socials = [
  {
    label: 'LinkedIn',
    href: SITE.linkedin,
    icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
  },
  {
    label: 'X (Twitter)',
    href: SITE.twitter,
    icon: <path d="M4 4l16 16M20 4L4 20" />,
  },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-5">{title}</h4>
      <ul className="flex flex-col gap-3 list-none p-0 m-0" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
              <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all duration-300" aria-hidden="true" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-[#03060E] text-slate-400 pt-24" role="contentinfo">
      <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* CTA band */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div suppressHydrationWarning data-reveal="scale" className="border-glow relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#111a3a] via-[#0b1328] to-[#08101f] border border-white/10 px-6 py-12 sm:px-14 sm:py-16">
          <Beams />
          <div className="relative z-[2] grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="kicker mb-5">Let&apos;s build together</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.02]">
                Have an idea?<br />
                <span className="text-gradient">Let&apos;s ship it.</span>
              </h2>
              <p className="mt-5 text-base text-slate-400 max-w-lg">
                Tell us what you want to build. We&apos;ll come back within 24 hours with a plan, a timeline and the team to make it happen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start a Project
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <Link href="/projects" className="btn btn--secondary btn--lg">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Directory */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="group flex items-center gap-2.5 w-fit" aria-label={`${SITE.name} — Home`}>
              <Logo size="lg" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              We design, build and run software for healthcare, logistics, finance and growing businesses, from first sprint to production.
            </p>

            <NewsletterForm />

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/60 hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
                </a>
              ))}
              <span className="ml-2 inline-flex items-center gap-2 text-xs text-emerald-300">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                </span>
                Available for new projects
              </span>
            </div>
          </div>

          <LinkColumn title="Capabilities" links={serviceLinks} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Resources" links={resourceLinks} />
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative select-none pointer-events-none" aria-hidden="true">
        <div className="font-display font-extrabold leading-none text-center text-[15vw] tracking-[-0.05em] translate-y-[18%] footer-wordmark">
          INOVARAA
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5 bg-[#03060E]/80 backdrop-blur-sm text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {year} Inovaraa Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Animated light beams travelling along a grid inside the CTA card
function Beams() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="beam-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0" />
          <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="1" stopColor="#818CF8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[60, 140, 220, 300, 380].map((y) => (
        <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="rgba(255,255,255,0.04)" />
      ))}
      {[150, 350, 550, 750, 950, 1150].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="rgba(255,255,255,0.04)" />
      ))}
      {[
        { y: 140, dur: '6s', delay: '0s' },
        { y: 300, dur: '8s', delay: '2s' },
        { y: 60, dur: '7s', delay: '4s' },
      ].map((b) => (
        <rect key={b.y} y={b.y - 1} width="220" height="2" fill="url(#beam-g)">
          <animate attributeName="x" from="-240" to="1200" dur={b.dur} begin={b.delay} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}
