import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />

      <div className="text-center relative z-10 max-w-lg">
        <div className="text-[10rem] font-black text-white/[0.03] tracking-tight leading-none -mb-8 select-none" aria-hidden="true">
          404
        </div>

        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Route Not Found
        </h1>

        <p className="text-slate-400 text-base leading-relaxed mb-8">
          The requested enterprise resource could not be located in the current mesh topology. Let us direct you to the active services.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <Link href="/" className="btn btn--primary btn--lg">
            ← Return to Homepage
          </Link>
          <Link href="/contact" className="btn btn--secondary btn--lg">
            Contact Support
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">
            Popular Enterprise Portals
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {[
              { label: 'Services', href: '/services' },
              { label: 'About Us', href: '/about' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Knowledge Hub', href: '/blog' },
              { label: 'Careers', href: '/careers' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
