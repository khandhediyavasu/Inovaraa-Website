import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Knowledge Hub & Technology Insights | Ahaan Technologies',
  description: 'Stay ahead with expert insights on AI, cloud infrastructure, cybersecurity, and digital transformation from the Ahaan Technologies team.',
  alternates: { canonical: 'https://ahaantechnologies.com/blog' },
};

const categories = ['All Articles', 'AI & Analytics', 'Cloud Infrastructure', 'Cybersecurity', 'Digital Modernization'];

const posts = [
  {
    category: 'AI & Analytics',
    title: 'The Enterprise AI Readiness Framework: 5 Steps to Production-Ready ML',
    excerpt: 'Moving from AI pilots to production requires more than good models. We break down the organizational, data, and infrastructure requirements for enterprise AI success.',
    readTime: '8 min read',
    date: 'Oct 2, 2026',
    slug: 'enterprise-ai-readiness-framework',
    accent: 'text-cyan-400',
    badge: 'Research'
  },
  {
    category: 'Cloud Infrastructure',
    title: 'Multi-Cloud vs Hybrid Cloud: Making the Right Architecture Decision',
    excerpt: 'The cloud strategy you choose today will shape your infrastructure for the next decade. Here is how to evaluate multi-cloud vs hybrid cloud for your enterprise.',
    readTime: '6 min read',
    date: 'Sep 28, 2026',
    slug: 'multi-cloud-vs-hybrid-cloud',
    accent: 'text-emerald-400',
    badge: 'Architecture'
  },
  {
    category: 'Cybersecurity',
    title: 'Zero Trust Security Architecture: Implementation Guide for Enterprises',
    excerpt: 'Zero trust is no longer optional. This step-by-step guide covers how to design and implement a zero trust security architecture without disrupting operations.',
    readTime: '10 min read',
    date: 'Sep 22, 2026',
    slug: 'zero-trust-security-implementation',
    accent: 'text-indigo-400',
    badge: 'Security'
  },
  {
    category: 'Digital Modernization',
    title: 'Why Most Digital Transformation Programs Fail (And How to Avoid It)',
    excerpt: 'Studies show 70% of digital transformation initiatives fail to meet their goals. Here is what differentiates the successful 30% — and how to put your program on the right path.',
    readTime: '7 min read',
    date: 'Sep 15, 2026',
    slug: 'why-digital-transformation-fails',
    accent: 'text-amber-400',
    badge: 'Strategy'
  },
  {
    category: 'Cloud Infrastructure',
    title: 'FinOps in Practice: How to Cut Cloud Costs Without Cutting Capabilities',
    excerpt: 'Cloud costs spiraling out of control? Our FinOps specialists share the frameworks and tools they use to help enterprises reduce cloud spend by 30-60%.',
    readTime: '9 min read',
    date: 'Sep 8, 2026',
    slug: 'finops-cut-cloud-costs',
    accent: 'text-cyan-400',
    badge: 'FinOps'
  },
  {
    category: 'AI & Analytics',
    title: 'Building a Modern Data Platform: From Architecture to Governance',
    excerpt: 'A data platform is only as good as its architecture. We outline the key decisions — from storage layers to governance frameworks — that determine long-term success.',
    readTime: '11 min read',
    date: 'Sep 1, 2026',
    slug: 'modern-data-platform-architecture',
    accent: 'text-pink-400',
    badge: 'Data Mesh'
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Knowledge Hub</div>
          </nav>
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Insights &amp; Blueprints</span>
            <h1 className="text-white my-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Technology Insights from Our Engineers
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Practical architecture blueprints, technical deep dives, and executive strategies on AI, multi-cloud, security, and digital modernization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap mb-12" role="group" aria-label="Filter by category">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`text-xs px-4 py-1.5 rounded-full border transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-indigo-500/20 text-white border-indigo-500/40 shadow-sm'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card glass-card-hover p-8 flex flex-col justify-between min-h-[340px] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge badge--cyan">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>

                  <h2 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-500">⏱️ {post.readTime}</span>
                  <span className="font-semibold text-cyan-400 flex items-center gap-1">
                    Read Blueprint →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="mt-20 bg-gradient-to-r from-indigo-950/60 to-slate-900/80 border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-2">Never Miss a Technical Architecture Release</h2>
            <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">Monthly technical digest of our highest-impact whitepapers and architectures.</p>
            <form action="#" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter work email"
                required
                className="flex-1 px-4 py-2.5 rounded-full bg-slate-950/80 border border-white/15 text-white text-sm outline-none focus:border-cyan-400 placeholder:text-slate-500"
              />
              <button type="submit" className="btn btn--primary btn--sm shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
