import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ahaan Technologies',
  description: 'Read the Ahaan Technologies Privacy Policy to understand how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ahaantechnologies.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Privacy Policy</div>
          </nav>
          <div className="max-w-2xl mx-auto">
            <span className="eyebrow">Data Governance</span>
            <h1 className="text-white my-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Enterprise Privacy Policy
            </h1>
            <p className="text-sm text-slate-400">Last updated: October 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container max-w-3xl">
          <div className="glass-card p-8 md:p-12 flex flex-col gap-8 text-sm text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>Ahaan Technologies Pvt. Ltd. (&ldquo;Ahaan Technologies,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ahaantechnologies.com or engage with our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate-400">
                <li>Enterprise contact information (name, email, phone, organization)</li>
                <li>Infrastructure and architectural consultation inquiries</li>
                <li>Newsletter and technical whitepaper subscriptions</li>
                <li>Career application records and resumes</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect strictly to respond to technical inquiries, deliver enterprise IT services, provide SLA support, process career applications, and adhere to global legal compliance mandates. We do not sell or monetize personal data.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Enterprise Data Security &amp; Zero Trust</h2>
              <p>We implement defense-in-depth security safeguards including TLS 1.3 encryption in transit, AES-256 encryption at rest, Zero Trust identity access controls, and quarterly third-party penetration audits. We are certified under ISO 27001 and SOC 2 Type II.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Global Privacy Rights (GDPR, CCPA &amp; HIPAA)</h2>
              <p>Depending on your geographic location, you retain rights to inspect, update, or permanently delete personal data records. Direct all compliance requests to <a href="mailto:privacy@ahaantechnologies.com" className="text-cyan-400 underline">privacy@ahaantechnologies.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
