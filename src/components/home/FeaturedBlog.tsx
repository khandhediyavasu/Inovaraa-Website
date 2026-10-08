'use client';

import Link from 'next/link';

const posts = [
  {
    category: 'AI & Analytics',
    title: 'The Enterprise AI Readiness Framework: 5 Steps to Production-Ready ML',
    excerpt: 'Moving from AI pilots to production requires more than good models. We break down the organizational, data, and infrastructure requirements for enterprise AI success.',
    readTime: '8 min read',
    date: 'Oct 2, 2026',
    badge: 'Research Paper',
    href: '/blog/enterprise-ai-readiness-framework',
    accent: 'text-cyan-400'
  },
  {
    category: 'Cloud Infrastructure',
    title: 'Multi-Cloud vs Hybrid Cloud: Making the Right Architecture Decision',
    excerpt: 'The cloud strategy you choose today will shape your infrastructure for the next decade. Here is how to evaluate multi-cloud vs hybrid cloud for your enterprise.',
    readTime: '6 min read',
    date: 'Sep 28, 2026',
    badge: 'Architecture Guide',
    href: '/blog/multi-cloud-vs-hybrid-cloud',
    accent: 'text-emerald-400'
  },
  {
    category: 'Cybersecurity',
    title: 'Zero Trust Security Architecture: Implementation Guide for Enterprises',
    excerpt: 'Zero trust is no longer optional. This step-by-step guide covers how to design and implement a zero trust security architecture without disrupting operations.',
    readTime: '10 min read',
    date: 'Sep 22, 2026',
    badge: 'Security Blueprint',
    href: '/blog/zero-trust-security-implementation',
    accent: 'text-indigo-400'
  },
];

export default function FeaturedBlog() {
  return (
    <section className="py-24 relative" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Executive Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight" id="blog-heading">
              From Our Engineering Hub
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer"
          >
            View All Insights →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 rounded-3xl p-6 flex flex-col justify-between min-h-[300px] shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-500">{post.date}</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
                <span className="text-[11px] text-slate-500">⏱️ {post.readTime}</span>
                <span className={`text-xs font-semibold ${post.accent}`}>Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
