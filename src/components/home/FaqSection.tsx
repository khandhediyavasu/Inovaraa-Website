'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How does Ahaan Technologies guarantee zero downtime during cloud migrations?',
    a: 'We leverage blue-green replication, canary cutover pipelines, and distributed data streaming (Kafka / AWS DMS) to ensure uninterrupted production transactions while switching traffic between legacy systems and the new cloud environment.'
  },
  {
    q: 'How do you safeguard proprietary enterprise data in Generative AI implementations?',
    a: 'All LLM instances are deployed inside your private VPC with strict Zero Trust IAM and zero data retention agreements. We employ semantic vector databases with token masking to ensure sensitive PII never leaves your corporate perimeter.'
  },
  {
    q: 'What response times and uptime SLAs are contractually backed?',
    a: 'We provide contractual 99.999% uptime SLAs for managed multi-cloud environments and guarantee sub-15 minute response times for Critical (P1) operational anomalies 24/7/365, backed by financial penalties for SLA breaches.'
  },
  {
    q: 'How fast can an enterprise engineering pod be spun up?',
    a: 'Our standard pod onboarding takes between 10 to 14 business days, complete with dedicated Solutions Architects, Senior Software Engineers, QA Automation specialists, and DevSecOps practitioners.'
  },
  {
    q: 'Who retains intellectual property rights and codebase ownership?',
    a: 'You retain 100% intellectual property rights and code ownership from day one. All code, Terraform templates, Docker containers, and CI/CD pipelines are pushed directly into your enterprise repositories.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 relative" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Enterprise FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4" id="faq-heading">
            Frequently Addressed Questions
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Need a custom architecture or compliance assessment?{' '}
            <Link href="/contact" className="text-cyan-400 font-semibold hover:underline">
              Speak directly with our Principal Architects →
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.q}
                className={`bg-slate-900/60 backdrop-blur-xl border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-indigo-500/40 shadow-xl shadow-indigo-950/40'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 text-white text-base font-semibold cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-indigo-500/20 text-cyan-400 rotate-180'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
