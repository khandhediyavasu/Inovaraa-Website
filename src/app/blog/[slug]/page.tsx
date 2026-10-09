import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogCover } from '@/components/home/FeaturedBlog';
import JsonLd, { ORG_ID, breadcrumbSchema } from '@/components/seo/JsonLd';
import { SITE } from '@/data/site';
import { leaders } from '@/data/team';

interface BlogPostData {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: { name: string; role: string; avatar: string };
  excerpt: string;
  content: { heading: string; paragraphs: string[] }[];
  keyTakeaways: string[];
}

const blogDatabase: Record<string, BlogPostData> = {
  'what-is-an-mcp-server': {
    title: 'What Is an MCP Server? A Practical Guide to Building Model Context Protocol Servers',
    category: 'AI & Analytics',
    readTime: '9 min',
    date: 'Oct 9, 2026',
    author: { name: 'Vasu Khandhediya', role: 'CTO, Inovaraa Solutions', avatar: 'VK' },
    excerpt: 'MCP lets AI assistants such as Claude and ChatGPT use your APIs, databases and tools in a safe, standard way. Here is what an MCP server is, how it works and how we build production-ready ones.',
    keyTakeaways: [
      'MCP (Model Context Protocol) is an open standard that connects AI assistants to your tools and data through one consistent interface.',
      'An MCP server exposes tools, resources and prompts, and any MCP-compatible client can use them without a custom integration.',
      'A production MCP server needs the same care as any API: authentication, least-privilege access, input validation, logging and tests.'
    ],
    content: [
      {
        heading: 'What is the Model Context Protocol (MCP)?',
        paragraphs: [
          'The Model Context Protocol is an open standard, introduced by Anthropic in November 2024, that defines how AI applications connect to outside systems. Instead of writing a separate plugin for every assistant, you build one MCP server and every compatible client can use it.',
          'A common way to picture it is a USB-C port for AI: one standard connector between models and the business systems they need, such as your CRM, database, ticketing tool or internal documents.'
        ]
      },
      {
        heading: 'How an MCP server works',
        paragraphs: [
          'An AI application (the host) runs an MCP client, which connects to one or more MCP servers. Each server describes what it can do, and the model decides when to use it.',
          '1. Tools: actions the model can call, such as "create_invoice" or "search_orders", each with a JSON Schema describing its inputs.',
          '2. Resources: read-only context the model can load, such as a customer record, a file or a report.',
          '3. Prompts: reusable templates that guide the model through a task in a consistent way.',
          'Servers run locally over standard input/output (stdio) for desktop tools, or remotely over Streamable HTTP so a whole team can share them.'
        ]
      },
      {
        heading: 'Where MCP servers are useful',
        paragraphs: [
          'Any workflow where people copy data between an AI assistant and a business system is a good candidate. Typical examples are letting an assistant look up orders in an ERP, draft and file support tickets, query a reporting database, or search internal documentation with proper access control.',
          'Because MCP is a shared standard, one server works across a growing list of clients, including Claude, ChatGPT, Visual Studio Code with GitHub Copilot, and Cursor. You build the integration once instead of once per assistant.'
        ]
      },
      {
        heading: 'How we build a production-ready MCP server',
        paragraphs: [
          '1. Start from the job: list the questions and actions people actually need, and expose the smallest useful set of tools.',
          '2. Pick an official SDK that matches your stack. There are SDKs for TypeScript, Python, C#/.NET and other languages, so the server can sit next to your existing code.',
          '3. Write clear tool names, descriptions and input schemas. The model chooses tools from these descriptions, so precise wording directly improves accuracy.',
          '4. Test with the MCP Inspector and with real clients, including failure cases such as missing data and invalid input.',
          '5. Deploy it locally for individual use, or as a remote HTTP server behind authentication (OAuth for remote servers) with monitoring and logs.'
        ]
      },
      {
        heading: 'Security checklist for MCP servers',
        paragraphs: [
          'An MCP server gives an AI model real capabilities, so treat it like a public API. Grant each tool the least privilege it needs, validate every input on the server, and keep secrets out of tool responses.',
          'Ask for human confirmation before destructive or financial actions, log every tool call with the user who triggered it, and apply rate limits. Review tool descriptions for prompt-injection risks when tools read untrusted content.'
        ]
      },
      {
        heading: 'Need an MCP server for your product?',
        paragraphs: [
          'Inovaraa Solutions designs, builds and hosts MCP servers and AI agents for teams running .NET, Node.js, Angular, React and Python systems. We handle the tool design, security, server setup and deployment so your users can work with your product directly from their AI assistant.',
          'Tell us which system you want to connect and we will come back with a scope, timeline and estimate.'
        ]
      }
    ]
  },
  'enterprise-ai-readiness-framework': {
    title: 'The Enterprise AI Readiness Framework: 5 Steps to Production-Ready ML',
    category: 'AI & Analytics',
    readTime: '8 min',
    date: 'Oct 2, 2026',
    author: { name: 'Dr. Priya Nair', role: 'Head of AI & Data Science', avatar: 'PN' },
    excerpt: 'Moving from AI pilots to production requires more than good models. We break down the organizational, data, and infrastructure requirements for enterprise AI success.',
    keyTakeaways: [
      'Data hygiene and real-time ingestion pipelines account for 70% of ML project success.',
      'Private VPC LLM deployments are essential to meet enterprise data sovereignty regulations.',
      'Continuous MLOps automated retraining prevents model drift in fluctuating market conditions.'
    ],
    content: [
      {
        heading: 'Why Enterprise AI Pilots Get Stuck in POC Limbo',
        paragraphs: [
          'Over 80% of enterprise AI initiatives fail to reach scalable production environments. The primary reason is rarely the machine learning algorithm itself, but rather the underlying architecture and lack of production-grade operational governance.',
          'When evaluating AI readiness, enterprises must audit four foundational pillars: Data Integrity & Lineage, Scalable Compute Infrastructure, MLOps Lifecycle Automation, and Cross-functional Organizational Alignment.'
        ]
      },
      {
        heading: 'Step 1: Unify Siloed Data with Modern Lakehouses',
        paragraphs: [
          'High-performing AI models require clean, standardized, and continuously updated training data. Implementing modern lakehouse patterns using Snowflake or Databricks allows both batch and real-time streaming ingestion into centralized feature stores.',
          'Automated data quality contracts ensure that schema migrations never break downstream inference models.'
        ]
      },
      {
        heading: 'Step 2: Deploy Guardrailed Generative AI & RAG',
        paragraphs: [
          'For Generative AI applications, Retrieval-Augmented Generation (RAG) combined with private vector databases (such as Pinecone or Milvus) allows LLMs to query enterprise knowledge bases with zero hallucination and complete auditability.',
          'Strict token governance and role-based access control (RBAC) ensure that employees only receive answers sourced from documents they are authorized to access.'
        ]
      },
      {
        heading: 'Step 3: Establish Robust MLOps CI/CD Pipelines',
        paragraphs: [
          'Production AI is not a one-time deployment; it is a continuous lifecycle. Automated retraining pipelines trigger whenever data drift exceeds predefined statistical tolerances.',
          'Model registries ensure full rollback capabilities, A/B canary testing, and comprehensive latency monitoring.'
        ]
      }
    ]
  },
  'multi-cloud-vs-hybrid-cloud': {
    title: 'Multi-Cloud vs Hybrid Cloud: Making the Right Architecture Decision',
    category: 'Cloud',
    readTime: '6 min',
    date: 'Sep 28, 2026',
    author: { name: 'Marcus Vance', role: 'Principal Cloud Architect', avatar: 'MV' },
    excerpt: 'The cloud strategy you choose today will shape your infrastructure for the next decade. Here is how to evaluate multi-cloud vs hybrid cloud for your enterprise.',
    keyTakeaways: [
      'Hybrid cloud is ideal for regulated industries with existing on-premise hardware investments.',
      'Multi-cloud prevents vendor lock-in but introduces cross-cloud networking egress costs if poorly architected.',
      'Kubernetes serves as the universal orchestration plane across any hybrid or multi-cloud topology.'
    ],
    content: [
      {
        heading: 'De-mystifying Multi-Cloud and Hybrid Cloud',
        paragraphs: [
          'While often used interchangeably, multi-cloud and hybrid cloud solve distinctly different business problems. Multi-cloud refers to utilizing services from two or more public hyperscalers (such as AWS and GCP), whereas hybrid cloud connects private on-premise infrastructure with public cloud resources.',
          'Understanding your enterprise compliance mandates, latency requirements, and existing capital expenditure is crucial to selecting the optimal paradigm.'
        ]
      },
      {
        heading: 'When to Choose Hybrid Cloud',
        paragraphs: [
          'Hybrid cloud is the premier choice for financial institutions, defense contractors, and healthcare organizations where specific datasets must legally remain on sovereign on-premise servers, while burst compute workloads take advantage of the public cloud.'
        ]
      },
      {
        heading: 'Managing Multi-Cloud Complexity with Terraform & Kubernetes',
        paragraphs: [
          'To avoid duplicate tooling and fragmented operations across multiple clouds, enterprises must establish an Infrastructure-as-Code (IaC) standard using Terraform and container orchestration with Kubernetes.',
          'A centralized observability platform like Datadog provides a single pane of glass for all multi-cloud metrics.'
        ]
      }
    ]
  },
  'zero-trust-security-implementation': {
    title: 'Zero Trust Security Architecture: Implementation Guide for Enterprises',
    category: 'Cybersecurity',
    readTime: '10 min',
    date: 'Sep 22, 2026',
    author: { name: 'Sarah Chen, CISSP', role: 'Chief Information Security Officer', avatar: 'SC' },
    excerpt: 'Zero trust is no longer optional. This step-by-step guide covers how to design and implement a zero trust security architecture without disrupting operations.',
    keyTakeaways: [
      'Never trust, always verify: Every request must be authenticated, authorized, and encrypted.',
      'Micro-segmentation prevents lateral movement in the event of an endpoint breach.',
      'Identity is the new enterprise perimeter.'
    ],
    content: [
      {
        heading: 'The Death of the Traditional Castle-and-Moat Perimeter',
        paragraphs: [
          'Remote work, SaaS proliferation, and multi-cloud architectures have rendered traditional VPN and perimeter firewalls obsolete. An attacker who breaches one laptop on a flat network can easily traverse the entire corporate infrastructure.',
          'Zero Trust operates on the principle of least privilege, assuming continuous compromise.'
        ]
      },
      {
        heading: 'The Five Pillars of Zero Trust',
        paragraphs: [
          '1. Identity: Multi-factor authentication, risk-based conditional access, and passwordless authentication.',
          '2. Devices: Continuous health and posture verification before granting network access.',
          '3. Networks: Micro-segmentation and software-defined perimeters that isolate sensitive workloads.',
          '4. Applications: Dynamic session validation and automated API contract security.',
          '5. Data: Immutable encryption at rest and in transit, accompanied by DLP monitoring.'
        ]
      }
    ]
  },
  'why-digital-transformation-fails': {
    title: 'Why Most Digital Transformation Programs Fail (And How to Avoid It)',
    category: 'Digital Transformation',
    readTime: '7 min',
    date: 'Sep 15, 2026',
    author: { name: 'Arjun Mehta', role: 'Managing Director, Consulting', avatar: 'AM' },
    excerpt: 'Studies show 70% of digital transformation initiatives fail to meet their goals. Here is what differentiates the successful 30% — and how to put your program on the right path.',
    keyTakeaways: [
      'Transformation is 20% technology and 80% cultural change management.',
      'Break monolithic multi-year plans into rapid 2-week value delivery milestones.',
      'Define clear executive KPIs tied to revenue and customer satisfaction.'
    ],
    content: [
      {
        heading: 'The Illusion of Technology as a Silver Bullet',
        paragraphs: [
          'Buying the latest software licenses does not equal transformation. Without restructuring internal workflows, incentivizing new behaviors, and upskilling teams, organizations simply automate existing inefficiencies.',
          'The most successful enterprises focus on customer journeys first, working backwards into the necessary architectural changes.'
        ]
      },
      {
        heading: 'Adopting the Strangler Fig Modernization Pattern',
        paragraphs: [
          'Instead of risky "big bang" rewrites that take years to deliver value, successful leaders incrementally replace legacy modules with modern microservices, validating user feedback continuously along the way.'
        ]
      }
    ]
  },
  'finops-cut-cloud-costs': {
    title: 'FinOps in Practice: How to Cut Cloud Costs Without Cutting Capabilities',
    category: 'Cloud',
    readTime: '9 min',
    date: 'Sep 8, 2026',
    author: { name: 'David Reynolds', role: 'FinOps Practice Lead', avatar: 'DR' },
    excerpt: 'Cloud costs spiraling out of control? Our FinOps specialists share the frameworks and tools they use to help enterprises reduce cloud spend by 30-60%.',
    keyTakeaways: [
      'Automate the shutdown of non-production dev/staging environments during non-working hours.',
      'Leverage commitments and savings plans strategically for baseline steady-state compute.',
      'Tag every cloud resource with an owner, environment, and cost center.'
    ],
    content: [
      {
        heading: 'The Hidden Traps of Unchecked Cloud Consumption',
        paragraphs: [
          'Unattached EBS volumes, oversized RDS instances, and forgotten test environments quietly siphon hundreds of thousands of dollars from enterprise budgets each year.',
          'FinOps introduces financial accountability to the variable spend model of the cloud.'
        ]
      }
    ]
  },
  'modern-data-platform-architecture': {
    title: 'Building a Modern Data Platform: From Architecture to Governance',
    category: 'AI & Analytics',
    readTime: '11 min',
    date: 'Sep 1, 2026',
    author: { name: 'Kavita Sundaram', role: 'Principal Data Architect', avatar: 'KS' },
    excerpt: 'A data platform is only as good as its architecture. We outline the key decisions — from storage layers to governance frameworks — that determine long-term success.',
    keyTakeaways: [
      'Decouple storage from compute to optimize scaling efficiency and costs.',
      'Implement dbt for modular, version-controlled data transformations.',
      'Treat data as a product with clear SLAs and domain owners.'
    ],
    content: [
      {
        heading: 'The Shift from Centralized Warehouses to Data Mesh',
        paragraphs: [
          'As organizations scale, centralized data engineering teams become critical bottlenecks. The data mesh paradigm empowers domain-specific teams to own and publish data products while adhering to global governance standards.'
        ]
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(blogDatabase).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogDatabase[slug];
  if (!post) return { title: 'Article Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, url: `/blog/${slug}`, images: ['/opengraph-image'] },
  };
}

const categoryColors: Record<string, [string, string]> = {
  'AI & Analytics': ['#6366F1', '#A78BFA'],
  Cloud: ['#0EA5E9', '#22D3EE'],
  Cybersecurity: ['#059669', '#34D399'],
  'Digital Transformation': ['#F59E0B', '#F472B6'],
};

const colorsFor = (category: string) => categoryColors[category] ?? ['#6366F1', '#22D3EE'];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const Arrow = ({ className = 'btn-arrow w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Chevron = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
);

// Paragraphs written as "1. Label: text" render as numbered pillar rows
function Paragraph({ text, accent }: { text: string; accent: string }): ReactNode {
  const match = text.match(/^(\d+)\.\s+([^:]+):\s+(.*)$/);
  if (!match) {
    return <p className="text-[1.0625rem] text-slate-300 leading-[1.85] mb-5">{text}</p>;
  }
  const [, num, label, body] = match;
  return (
    <div className="flex gap-4 items-start py-4 border-t border-white/10 first-of-type:border-t-0">
      <span
        className="icon-tile shrink-0 !w-10 !h-10 !rounded-xl font-display font-extrabold text-sm"
        style={{ '--tile': accent } as CSSProperties}
        aria-hidden="true"
      >
        {num.padStart(2, '0')}
      </span>
      <p className="text-[1.0625rem] text-slate-300 leading-[1.75]">
        <span className="sr-only">{num}. </span>
        <strong className="text-white font-semibold">{label}:</strong> {body}
      </p>
    </div>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogDatabase[slug];

  if (!post) {
    notFound();
  }

  const slugs = Object.keys(blogDatabase);
  const index = slugs.indexOf(slug);
  const colors = colorsFor(post.category);
  const accent = colors[0];
  const sections = post.content.map((section) => ({ ...section, id: slugify(section.heading) }));
  const related = [1, 2].map((offset) => slugs[(index + offset) % slugs.length]);

  // Articles are attributed to the company unless the byline is one of our real leaders
  const leader = leaders.find((l) => l.name === post.author.name);
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: new Date(post.date).toISOString().slice(0, 10),
            mainEntityOfPage: `${SITE.url}/blog/${slug}`,
            url: `${SITE.url}/blog/${slug}`,
            articleSection: post.category,
            keywords: post.keyTakeaways.join(' '),
            author: leader ? { '@id': `${SITE.url}/team/${leader.slug}#person`, name: leader.name } : { '@id': ORG_ID, name: SITE.name },
            publisher: { '@id': ORG_ID, name: SITE.name },
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      {/* Article hero */}
      <section className="relative overflow-hidden pt-36 sm:pt-44 pb-14 sm:pb-20">
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] max-w-none h-[600px] rounded-full pointer-events-none opacity-60"
          style={{ background: `radial-gradient(closest-side, color-mix(in srgb, ${accent} 30%, transparent), transparent)` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div className="min-w-0">
              <nav suppressHydrationWarning data-reveal className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Chevron />
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Chevron />
                <span className="text-cyan-400">{post.category}</span>
              </nav>

              <div suppressHydrationWarning data-reveal style={{ '--d': '60ms' } as CSSProperties} className="kicker mb-6">{post.category}</div>

              <h1
                suppressHydrationWarning data-reveal
                style={{ '--d': '120ms' } as CSSProperties}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.06]"
              >
                {post.title}
              </h1>

              <p suppressHydrationWarning data-reveal style={{ '--d': '180ms' } as CSSProperties} className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>

              <div suppressHydrationWarning data-reveal style={{ '--d': '240ms' } as CSSProperties} className="mt-8 flex items-center gap-x-5 gap-y-4 flex-wrap text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30 ring-2 ring-white/10">
                    {post.author.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold leading-tight">{post.author.name}</div>
                    <div className="text-xs text-slate-500">{post.author.role}</div>
                  </div>
                </div>
                <span className="hidden sm:block w-px h-8 bg-white/10" aria-hidden="true" />
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    Published: {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
                    {post.readTime} read
                  </span>
                </div>
              </div>
            </div>

            <div suppressHydrationWarning data-reveal="right" style={{ '--d': '200ms' } as CSSProperties} className="relative w-full max-w-xl mx-auto lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-dots-fade pointer-events-none" aria-hidden="true" />
              <div className="surface border-glow group rounded-[1.75rem] p-2.5 relative float-slow">
                <BlogCover colors={colors} index={index} category={post.category} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading layout */}
      <section className="pb-24 sm:pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_240px] gap-10 xl:gap-14">
            {/* Sticky table of contents */}
            <aside className="hidden lg:block" aria-label="Table of contents">
              <div className="sticky top-28">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">On this page</p>
                <ol className="relative border-l border-white/10 flex flex-col">
                  <li>
                    <a href="#key-takeaways" className="block -ml-px border-l-2 border-transparent pl-4 py-2 text-sm text-slate-400 hover:text-white hover:border-cyan-400 transition-colors">
                      Key takeaways
                    </a>
                  </li>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="block -ml-px border-l-2 border-transparent pl-4 py-2 text-sm text-slate-400 leading-snug hover:text-white hover:border-cyan-400 transition-colors">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
                <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:underline">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                  All articles
                </Link>
              </div>
            </aside>

            <article className="min-w-0 max-w-[720px] w-full mx-auto lg:mx-0">
              {/* Executive Summary */}
              <div id="key-takeaways" suppressHydrationWarning data-reveal className="surface spotlight rounded-[1.75rem] p-6 sm:p-8 mb-14 scroll-mt-28">
                <div className="flex items-center gap-3 mb-5">
                  <span className="icon-tile !w-10 !h-10 !rounded-xl" style={{ '--tile': '#22D3EE' } as CSSProperties} aria-hidden="true">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Executive Summary &amp; Key Takeaways</h2>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {post.keyTakeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3 text-[0.975rem] text-slate-300 leading-relaxed">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0" aria-hidden="true">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Body */}
              <div className="flex flex-col gap-14">
                {sections.map((section, i) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28" suppressHydrationWarning data-reveal>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-xs font-bold" style={{ color: `color-mix(in srgb, ${accent} 70%, var(--ink))` }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 max-w-16" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                      {section.heading}
                    </h2>
                    <div>
                      {section.paragraphs.map((p, idx) => (
                        <Paragraph key={idx} text={p} accent={accent} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Author card */}
              <div suppressHydrationWarning data-reveal className="surface rounded-[1.75rem] p-6 sm:p-7 mt-16 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-500/30 shrink-0">
                  {post.author.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">Written by</p>
                  <p className="text-white font-semibold">{post.author.name}</p>
                  <p className="text-sm text-slate-400">{post.author.role}</p>
                </div>
              </div>

              {/* Back / discuss */}
              <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
                <Link href="/blog" className="btn btn--secondary">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                  Back to All Articles
                </Link>
                <Link href="/contact" className="btn btn--primary">
                  Discuss with our Engineers
                  <Arrow />
                </Link>
              </div>
            </article>

            {/* Decorative rail on wide screens */}
            <div className="hidden xl:block" aria-hidden="true">
              <div className="sticky top-28 flex justify-center pt-4">
                <svg className="w-44 h-44 spin-slow opacity-70" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="60" fill="none" stroke={colors[0]} strokeOpacity="0.4" strokeDasharray="2 8" />
                  <circle cx="100" cy="100" r="88" fill="none" stroke={colors[1]} strokeOpacity="0.3" />
                  <circle cx="188" cy="100" r="4" fill={colors[1]} />
                  <circle cx="100" cy="40" r="3.5" fill={colors[0]} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep reading */}
      <section className="pb-24 sm:pb-28 relative" aria-labelledby="more-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
            <div>
              <div suppressHydrationWarning data-reveal className="kicker mb-5">Keep reading</div>
              <h2 id="more-heading" suppressHydrationWarning data-reveal style={{ '--d': '80ms' } as CSSProperties} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05]">
                More from the <span className="text-gradient">engineering desk</span>
              </h2>
            </div>
            <Link suppressHydrationWarning data-reveal href="/blog" className="btn btn--secondary shrink-0 self-start sm:self-auto">
              All articles
              <Arrow />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((relSlug, i) => {
              const rel = blogDatabase[relSlug];
              return (
                <Link
                  key={relSlug}
                  href={`/blog/${relSlug}`}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${i * 100}ms` } as CSSProperties}
                  className="surface spotlight lift group rounded-[1.75rem] p-2.5 grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] gap-2 sm:gap-5 items-center"
                >
                  <BlogCover colors={colorsFor(rel.category)} index={slugs.indexOf(relSlug)} category={rel.category} />
                  <div className="p-4 sm:p-2 sm:pr-5">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                      <span>{rel.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500" />
                      <span>{rel.readTime} read</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">{rel.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
