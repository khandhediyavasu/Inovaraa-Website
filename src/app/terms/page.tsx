import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Ahaan Technologies',
  description: 'Review the Terms of Service for engaging with Ahaan Technologies IT services, architectures, and platforms.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ahaantechnologies.com/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Terms of Service</div>
          </nav>
          <div className="max-w-2xl mx-auto">
            <span className="eyebrow">Legal Framework</span>
            <h1 className="text-white my-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-400">Effective Date: October 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container max-w-3xl">
          <div className="glass-card p-8 md:p-12 flex flex-col gap-8 text-sm text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
              <p>By accessing ahaantechnologies.com or entering into master service agreements with Ahaan Technologies Pvt. Ltd., you agree to be bound by these Terms of Service and applicable enterprise SLAs.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property &amp; Code Ownership</h2>
              <p>Unless explicitly stipulated in a specific statement of work, all customized source code, infrastructure templates, and application logic developed for clients become the exclusive intellectual property of the client upon settlement of invoices.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Service Level Agreements (SLAs)</h2>
              <p>Managed services and NOC infrastructure operations are delivered under contractual 99.999% uptime commitments with sub-15 minute critical response warranties.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
              <p>Except in cases of gross negligence, neither party shall be liable for indirect, consequential, or punitive damages arising from the delivery or execution of digital transformation programs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
