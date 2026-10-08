import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
  if (!post) return { title: 'Article Not Found | Ahaan Technologies' };

  return {
    title: `${post.title} | Ahaan Technologies`,
    description: post.excerpt,
    alternates: { canonical: `https://ahaantechnologies.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogDatabase[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">{post.category}</div>
          </nav>
          <div className="max-w-4xl">
            <span className="eyebrow">{post.category}</span>
            <h1 className="text-white my-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap text-slate-400 text-sm mt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  {post.author.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold leading-tight">{post.author.name}</div>
                  <div className="text-xs text-slate-500">{post.author.role}</div>
                </div>
              </div>
              <span>·</span>
              <span>Published: {post.date}</span>
              <span>·</span>
              <span>⏱️ {post.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container max-w-4xl">
          {/* Executive Summary */}
          <div className="glass-card p-8 mb-12 bg-slate-900/90 border-cyan-500/20">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">⚡</span> Executive Summary &amp; Key Takeaways
            </h2>
            <ul className="flex flex-col gap-3">
              {post.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="flex flex-col gap-10">
            {post.content.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-base text-slate-300 leading-loose mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Share / Next CTA */}
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
            <Link href="/blog" className="btn btn--secondary btn--sm">
              ← Back to All Articles
            </Link>
            <Link href="/contact" className="btn btn--primary btn--sm">
              Discuss with our Engineers →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
