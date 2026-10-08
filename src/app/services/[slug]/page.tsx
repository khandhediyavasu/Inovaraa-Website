import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ServiceData {
  title: string;
  subtitle: string;
  icon: string;
  overview: string;
  benefits: { title: string; desc: string }[];
  capabilities: { name: string; description: string; highlights: string[] }[];
  process: { step: string; title: string; desc: string }[];
  techStack: string[];
  caseStudy: { client: string; outcome: string; metrics: string };
  faqs: { q: string; a: string }[];
}

const serviceDatabase: Record<string, ServiceData> = {
  'cloud-infrastructure': {
    title: 'Cloud Infrastructure & Modernization Services',
    subtitle: 'Accelerate agility, reduce operational costs, and achieve enterprise resilience across AWS, Azure, and Google Cloud.',
    icon: '☁️',
    overview: 'Our cloud engineers and solutions architects guide your enterprise through every phase of cloud maturity — from initial architecture and migration to Kubernetes orchestration, FinOps optimization, and 24/7 SRE operations.',
    benefits: [
      { title: '40-60% Cost Reduction', desc: 'Continuous FinOps governance and automated right-sizing eliminate cloud waste.' },
      { title: '99.99% Guaranteed Uptime', desc: 'Fault-tolerant multi-region architecture engineered for zero single points of failure.' },
      { title: '10x Faster Deployment', desc: 'Infrastructure as Code (Terraform) and GitOps CI/CD pipelines automate releases.' },
      { title: 'Enterprise Security & Compliance', desc: 'Zero trust controls compliant with SOC2, HIPAA, ISO 27001, and GDPR.' }
    ],
    capabilities: [
      {
        name: 'Multi-Cloud & Hybrid Architecture',
        description: 'Design unified infrastructure combining on-premise data centers and leading public clouds with centralized governance.',
        highlights: ['Workload portability', 'Hybrid networking & direct connects', 'Disaster recovery failover']
      },
      {
        name: 'Cloud Migration & Modernization',
        description: 'Migrate mission-critical legacy applications using re-architecting, containerization, and microservices strategies.',
        highlights: ['Zero-downtime database migration', 'Legacy app refactoring', 'Lift-and-optimize execution']
      },
      {
        name: 'Kubernetes & Container Platforms',
        description: 'Production-grade container orchestration using EKS, AKS, GKE, and OpenShift with automated scaling and mesh observability.',
        highlights: ['Istio service mesh', 'Helm & ArgoCD GitOps', 'Automated horizontal scaling']
      },
      {
        name: 'FinOps & Cloud Cost Optimization',
        description: 'Comprehensive financial operations that track unit economics, manage reserved instances, and cut cloud waste.',
        highlights: ['Real-time cost telemetry', 'Automated anomaly alerts', 'Spot instance orchestration']
      }
    ],
    process: [
      { step: '01', title: 'Discovery & Readiness Audit', desc: 'Assess existing workloads, technical debt, security posture, and TCO benchmarks.' },
      { step: '02', title: 'Target Architecture Design', desc: 'Define landing zones, IAM policies, network topology, and automation toolchains.' },
      { step: '03', title: 'Phased Migration Execution', desc: 'Pilot wave migrations with automated verification and zero disruption to end-users.' },
      { step: '04', title: 'Continuous SRE & FinOps', desc: '24/7 site reliability engineering, proactive monitoring, and continuous cost optimization.' }
    ],
    techStack: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker', 'ArgoCD', 'Prometheus', 'Datadog'],
    caseStudy: {
      client: 'Global FinTech Leader with 10M+ Users',
      outcome: 'Migrated 450+ microservices to Kubernetes with zero downtime and cut infrastructure spend.',
      metrics: '52% Cost Reduction · 99.995% Uptime'
    },
    faqs: [
      { q: 'How do you prevent downtime during enterprise cloud migrations?', a: 'We employ blue-green deployment strategies, continuous data replication, and rigorous pre-cutover testing to ensure uninterrupted services during migration.' },
      { q: 'Which cloud providers do you support?', a: 'We are certified partners for AWS, Microsoft Azure, and Google Cloud Platform, and also support hybrid architectures with VMware and OpenShift.' },
      { q: 'How does your FinOps service deliver ROI?', a: 'Our FinOps engineers typically identify 30% to 50% in immediate savings within the first 60 days through automated resource scheduling, reserved capacity planning, and architectural refactoring.' }
    ]
  },
  'ai-data-analytics': {
    title: 'Enterprise AI & Data Analytics Solutions',
    subtitle: 'Harness Generative AI, machine learning, and modern data platforms to turn raw data into strategic business advantage.',
    icon: '🧠',
    overview: 'We help leading enterprises build end-to-end data architectures, deploy custom machine learning algorithms, and integrate Generative AI agents securely into core operational workflows.',
    benefits: [
      { title: 'Actionable Intelligence', desc: 'Real-time telemetry and predictive forecasting to drive executive decision-making.' },
      { title: 'Secure Enterprise AI', desc: 'Private LLM deployments and RAG architectures that keep proprietary data safe.' },
      { title: 'Scalable Data Foundation', desc: 'Modern Lakehouse architectures that scale seamlessly to petabytes of data.' },
      { title: 'Measurable Business ROI', desc: 'AI solutions mapped directly to conversion, retention, and operational efficiency.' }
    ],
    capabilities: [
      {
        name: 'Generative AI & Agentic Systems',
        description: 'Build enterprise-grade LLM applications, retrieval-augmented generation (RAG), and autonomous AI agents.',
        highlights: ['Private vector databases', 'Custom fine-tuning & prompt engineering', 'Hallucination guardrails & safety']
      },
      {
        name: 'Modern Data Platforms & Lakehouses',
        description: 'Consolidate siloed data across the enterprise using Snowflake, Databricks, and Apache Iceberg architectures.',
        highlights: ['Streaming data pipelines', 'Automated ETL/ELT with dbt', 'Data cataloging & lineage']
      },
      {
        name: 'Predictive Machine Learning',
        description: 'Custom ML models for customer churn prevention, demand forecasting, predictive maintenance, and fraud detection.',
        highlights: ['MLOps automated training', 'Feature store governance', 'Model drift monitoring']
      },
      {
        name: 'Data Governance & Compliance',
        description: 'Enforce enterprise data quality, role-based access control, and privacy compliance across all analytics layers.',
        highlights: ['GDPR & CCPA compliance', 'Data masking & tokenization', 'Automated data contracts']
      }
    ],
    process: [
      { step: '01', title: 'Data Landscape Assessment', desc: 'Audit data sources, quality, governance, and business opportunities.' },
      { step: '02', title: 'Platform Architecture & MVP', desc: 'Build scalable ingestion pipelines and validate high-impact AI prototypes.' },
      { step: '03', title: 'Production ML & LLM Deployment', desc: 'Deploy fault-tolerant AI models with rigorous evaluation benchmarks and guardrails.' },
      { step: '04', title: 'Enterprise Enablement & MLOps', desc: 'Establish self-service BI dashboards, MLOps automation, and team training.' }
    ],
    techStack: ['Python', 'Databricks', 'Snowflake', 'PyTorch', 'LangChain', 'OpenAI', 'dbt', 'Apache Kafka', 'PostgreSQL'],
    caseStudy: {
      client: 'Tier-1 Healthcare Provider Network',
      outcome: 'Built an AI-assisted diagnostic data pipeline reducing patient record indexing time by 80%.',
      metrics: '80% Faster Processing · 98.4% Accuracy'
    },
    faqs: [
      { q: 'How do you ensure our corporate data is not leaked to public AI models?', a: 'We deploy private, dedicated LLM instances in your isolated cloud VPC or on-premise cluster with zero data retention or public training exposure.' },
      { q: 'How long does an initial AI pilot project take?', a: 'Our structured AI accelerator typically delivers a functioning Proof-of-Value (PoV) within 4 to 6 weeks.' },
      { q: 'Can you work with our existing data warehouse?', a: 'Yes, we seamlessly integrate with Snowflake, BigQuery, Redshift, Databricks, and legacy relational databases.' }
    ]
  },
  'digital-transformation': {
    title: 'Digital Transformation & Enterprise Modernization',
    subtitle: 'Re-engineer core business workflows, modernize legacy monoliths, and create high-converting omnichannel customer experiences.',
    icon: '🔄',
    overview: 'Digital transformation is more than tech upgrades — it is holistic organizational evolution. We blend strategic consulting, modern software architecture, and agile change management to future-proof your enterprise.',
    benefits: [
      { title: 'Accelerated Time-to-Market', desc: 'Decompose monolithic bottlenecks into agile, decoupled services.' },
      { title: 'Unified Customer Journeys', desc: 'Seamless experiences across web, mobile, in-store, and partner ecosystems.' },
      { title: 'Automated Operations', desc: 'Eliminate manual handoffs with intelligent robotic process automation (RPA).' },
      { title: 'Higher Employee Productivity', desc: 'Modern digital workplace tools and intuitive internal software.' }
    ],
    capabilities: [
      {
        name: 'Legacy Monolith Modernization',
        description: 'Systematically replace brittle mainframe and legacy systems using strangler fig patterns and API orchestration.',
        highlights: ['Microservices decomposition', 'API gateways & contracts', 'Zero-downtime transition']
      },
      {
        name: 'Intelligent Process Automation (IPA)',
        description: 'Combine RPA, OCR, and AI to automate complex back-office workflows and document management.',
        highlights: ['Claims & invoice processing', 'Automated compliance reporting', 'Exception workflow routing']
      },
      {
        name: 'Customer Experience (CX) Redesign',
        description: 'Human-centered digital interfaces and omnichannel platforms designed for maximum conversion and delight.',
        highlights: ['User research & journey mapping', 'Design systems & component libraries', 'Performance optimization']
      },
      {
        name: 'Digital Strategy & Change Enablement',
        description: 'Strategic roadmapping, organizational alignment, and training programs to ensure lasting cultural adoption.',
        highlights: ['Agile team coaching', 'KPI & OKR alignment', 'Governance frameworks']
      }
    ],
    process: [
      { step: '01', title: 'Value Stream Mapping', desc: 'Identify bottlenecks, friction points, and ROI multiplier opportunities.' },
      { step: '02', title: 'Target Operating Model', desc: 'Blueprint technical architecture, customer journeys, and roadmap milestones.' },
      { step: '03', title: 'Iterative Agile Execution', desc: 'Deliver business value in 2-week sprints with continuous user validation.' },
      { step: '04', title: 'Scale & Optimization', desc: 'Roll out across divisions with telemetry-driven refinement and change training.' }
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'GraphQL', 'Kafka', 'Camunda', 'Salesforce', 'Figma', 'TypeScript'],
    caseStudy: {
      client: 'Multinational Logistics & Supply Chain Giant',
      outcome: 'Modernized 15-year-old dispatch system into an automated real-time tracking platform.',
      metrics: '3.4x Faster Dispatch · $12M Annual Savings'
    },
    faqs: [
      { q: 'How do you minimize business disruption during transformation?', a: 'We use incremental modernization patterns (e.g. Strangler Fig) where new services are introduced step-by-step alongside legacy systems.' },
      { q: 'How is digital transformation success measured?', a: 'We define quantifiable OKRs upfront, including time-to-market, cost per transaction, customer satisfaction (CSAT), and employee productivity.' }
    ]
  },
  'cybersecurity': {
    title: 'Enterprise Cybersecurity & Zero Trust Services',
    subtitle: 'Protect your brand, critical infrastructure, and customer trust with end-to-end security posture management and 24/7 SOC defense.',
    icon: '🔒',
    overview: 'As cyber threats escalate in sophistication, perimeter defense is no longer sufficient. We architect Zero Trust security ecosystems, provide continuous vulnerability management, and operate 24/7 threat hunting operations.',
    benefits: [
      { title: 'Zero Trust Protection', desc: 'Every user, device, and API request is authenticated and verified continuously.' },
      { title: '24/7 Threat Hunting', desc: 'Dedicated SOC analysts leveraging AI SIEM to neutralize threats in real time.' },
      { title: 'Audit & Compliance Assurance', desc: 'Guaranteed adherence to SOC 2 Type II, ISO 27001, HIPAA, and GDPR standards.' },
      { title: 'Rapid Incident Containment', desc: 'Sub-15 minute mean time to detect (MTTD) and remediate active security anomalies.' }
    ],
    capabilities: [
      {
        name: 'Zero Trust Architecture Implementation',
        description: 'Replace VPNs and legacy perimeters with identity-aware proxies, micro-segmentation, and least-privilege access.',
        highlights: ['Okta / Azure AD IAM integration', 'Software-defined perimeter', 'Device health verification']
      },
      {
        name: '24/7 Managed Detection & Response (MDR)',
        description: 'Continuous monitoring, AI-driven anomaly detection, and rapid containment across endpoints and cloud environments.',
        highlights: ['Next-gen SIEM & SOAR', 'Threat intelligence feeds', 'Dedicated incident response hotline']
      },
      {
        name: 'Offensive Security & Red Teaming',
        description: 'Rigorous penetration testing, red teaming, and source code audits to discover vulnerabilities before adversaries do.',
        highlights: ['Web & API penetration testing', 'Cloud configuration audits', 'Social engineering simulations']
      },
      {
        name: 'Regulatory Compliance & GRC',
        description: 'Comprehensive governance, risk assessment, and audit preparation for enterprise certification standards.',
        highlights: ['SOC 2 Type II readiness', 'ISO 27001 roadmap', 'Third-party vendor risk scoring']
      }
    ],
    process: [
      { step: '01', title: 'Comprehensive Threat Audit', desc: 'Penetration testing, attack surface mapping, and compliance gap analysis.' },
      { step: '02', title: 'Security Architecture Hardening', desc: 'Deploy Zero Trust policies, IAM safeguards, and endpoint defense agents.' },
      { step: '03', title: 'SOC Integration & Playbooks', desc: 'Configure automated SOAR playbooks and 24/7 incident response telemetry.' },
      { step: '04', title: 'Continuous Red Teaming', desc: 'Ongoing breach simulations, patch governance, and security awareness coaching.' }
    ],
    techStack: ['CrowdStrike', 'Splunk', 'Wiz', 'HashiCorp Vault', 'Okta', 'Microsoft Sentinel', 'Tenable', 'Wireshark'],
    caseStudy: {
      client: 'Cross-Border Payments Provider',
      outcome: 'Architected Zero Trust framework and achieved SOC2 Type II certification with zero critical vulnerabilities.',
      metrics: '100% Audit Pass · 0 Security Breaches'
    },
    faqs: [
      { q: 'How quickly can your 24/7 SOC be onboarded?', a: 'Our standard SOC onboarding takes between 2 to 3 weeks, including telemetry ingestion, custom alerting rules, and escalation playbooks.' },
      { q: 'Do you provide emergency incident response if we are under active attack?', a: 'Yes, our emergency incident response retainer provides guaranteed 1-hour response times to isolate threats and begin forensic recovery.' }
    ]
  },
  'managed-services': {
    title: 'Enterprise Managed IT Services & 24/7 NOC',
    subtitle: 'Eliminate operational downtime, guarantee SLA compliance, and free your engineering teams to focus on core revenue innovation.',
    icon: '⚙️',
    overview: 'We act as an extension of your IT leadership, providing proactive 24/7 infrastructure monitoring, Tier 1-3 helpdesk support, automated patch management, and disaster recovery execution.',
    benefits: [
      { title: '99.99% SLA Guarantee', desc: 'Contractual uptime commitments backed by automated failover and rapid response.' },
      { title: 'Predictable IT OpEx', desc: 'Fixed monthly pricing models that eliminate unexpected maintenance budget spikes.' },
      { title: 'Tier 1 to Tier 3 Support', desc: 'Certified engineers handling everything from end-user support to kernel-level troubleshooting.' },
      { title: 'Proactive Problem Management', desc: 'AI root cause analysis resolves system degradation before users experience outages.' }
    ],
    capabilities: [
      {
        name: '24/7 Network & Systems NOC',
        description: 'Continuous monitoring of servers, networks, databases, and microservices with automated alert triaging.',
        highlights: ['Sub-5 minute critical response', 'Full-stack telemetry observability', 'Automated runbook execution']
      },
      {
        name: 'Enterprise IT Service Management (ITSM)',
        description: 'ITIL-aligned incident, problem, and change management workflows with customized Jira/ServiceNow portals.',
        highlights: ['White-glove helpdesk support', 'Asset lifecycle management', 'Comprehensive SLA reporting']
      },
      {
        name: 'Disaster Recovery as a Service (DRaaS)',
        description: 'Automated off-site backups, continuous data replication, and scheduled disaster recovery drill simulations.',
        highlights: ['RPO < 5 minutes, RTO < 15 minutes', 'Immutable ransomware-proof backups', 'Multi-region failover tests']
      },
      {
        name: 'Patch & Vulnerability Management',
        description: 'Scheduled patching for OS, hypervisors, and middleware with zero production service degradation.',
        highlights: ['Automated pre-patch staging tests', 'CVE tracking & emergency patching', 'Compliance audit log records']
      }
    ],
    process: [
      { step: '01', title: 'Operations & Asset Discovery', desc: 'Map all infrastructure assets, service dependencies, and current SLA performance.' },
      { step: '02', title: 'Runbook & Toolchain Setup', desc: 'Standardize monitoring thresholds, escalation trees, and ITSM ticketing pipelines.' },
      { step: '03', title: 'Shadowing & Warm Cutover', desc: 'Two-week co-management period ensuring zero knowledge gaps before full handover.' },
      { step: '04', title: 'Continuous Service Improvement', desc: 'Monthly governance reviews, capacity forecasting, and proactive automation rollouts.' }
    ],
    techStack: ['ServiceNow', 'Datadog', 'Jira Service Desk', 'Ansible', 'Veeam', 'PagerDuty', 'Dynatrace', 'Zabbix'],
    caseStudy: {
      client: 'E-Commerce Platform with $500M+ GMV',
      outcome: 'Maintained 100% uptime through Black Friday peak traffic while reducing mean time to resolve (MTTR) by 64%.',
      metrics: '100% Peak Uptime · 64% Lower MTTR'
    },
    faqs: [
      { q: 'What response times are covered in your SLAs?', a: 'We offer sub-15 minute response times for Critical (P1) incidents 24/7/365, with contractual financial penalties for SLA violations.' },
      { q: 'Can we retain control of our cloud accounts and credentials?', a: 'Absolutely. We operate via delegated role-based access control (RBAC) and never require root ownership of your accounts.' }
    ]
  },
  'software-development': {
    title: 'Custom Enterprise Software Development',
    subtitle: 'Engineered for extreme performance, security, and scalability. From core SaaS platforms to mission-critical business applications.',
    icon: '💻',
    overview: 'We build enterprise software that stands the test of time. Using modern modular architectures, rigorous automated testing, and agile collaboration, our engineering squads deliver software that drives tangible business growth.',
    benefits: [
      { title: 'Clean, Scalable Architecture', desc: 'Domain-driven design and decoupled microservices that handle exponential user growth.' },
      { title: 'High Velocity Delivery', desc: 'Dedicated cross-functional squads deploying tested features in continuous 2-week sprints.' },
      { title: 'Built-in Quality Assurance', desc: '>90% automated test coverage with unit, integration, and end-to-end regression suites.' },
      { title: 'Full IP & Code Ownership', desc: 'You retain 100% intellectual property, repository access, and documentation from day one.' }
    ],
    capabilities: [
      {
        name: 'Custom Web & Mobile Applications',
        description: 'Responsive, lightning-fast web applications and native iOS/Android mobile solutions built with modern toolchains.',
        highlights: ['React / Next.js / Vue.js', 'React Native / Flutter', 'Progressive Web Apps (PWA)']
      },
      {
        name: 'API Design & Microservices Ecosystems',
        description: 'High-throughput, resilient backend services engineered with REST, GraphQL, and event-driven gRPC protocols.',
        highlights: ['High-throughput message brokers', 'Distributed transaction management', 'Automated OpenAPI specifications']
      },
      {
        name: 'Enterprise ERP, CRM & Portals',
        description: 'Bespoke internal business software tailored precisely to your unique operational processes and data schemas.',
        highlights: ['Custom workflow engines', 'Role-based access matrix', 'Legacy database integrations']
      },
      {
        name: 'DevSecOps & Automated QA',
        description: 'Embed security scanning, automated linting, container builds, and deployment verification into every pull request.',
        highlights: ['GitHub Actions / GitLab CI', 'Playwright / Cypress E2E', 'Static analysis (SonarQube)']
      }
    ],
    process: [
      { step: '01', title: 'Architecture & Technical Discovery', desc: 'Define domain models, API contracts, database schemas, and performance targets.' },
      { step: '02', title: 'Interactive UX/UI Prototyping', desc: 'Design intuitive wireframes and interactive design systems in Figma.' },
      { step: '03', title: 'Agile Sprint Development', desc: 'Ship working software increments every two weeks with live client demos.' },
      { step: '04', title: 'Automated QA & Production Launch', desc: 'Perform stress testing, security audits, and execute zero-downtime deployment.' }
    ],
    techStack: ['TypeScript', 'Next.js', 'Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker', 'AWS'],
    caseStudy: {
      client: 'B2B SaaS Analytics Platform',
      outcome: 'Built high-throughput data processing app handling 50M+ daily events with sub-200ms latency.',
      metrics: '50M+ Events/Day · <200ms Latency'
    },
    faqs: [
      { q: 'Who owns the intellectual property and source code?', a: 'You retain 100% ownership of all source code, design assets, and intellectual property developed throughout the project.' },
      { q: 'How do you structure development teams?', a: 'We provide dedicated pods composed of a Product Lead, Senior Software Engineers, QA Automation Specialists, and DevOps Engineers.' }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceDatabase).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDatabase[slug];
  if (!service) return { title: 'Service Not Found | Ahaan Technologies' };

  return {
    title: `${service.title} | Ahaan Technologies`,
    description: service.subtitle,
    alternates: { canonical: `https://ahaantechnologies.com/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDatabase[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div><Link href="/services" className="hover:text-white transition-colors">Services</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">{service.title.split(' ')[0]}</div>
          </nav>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-400 text-xs font-semibold mb-4">
              <span>{service.icon}</span> Enterprise IT Service
            </div>
            <h1 className="text-white my-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
              {service.subtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Schedule a Consultation
              </Link>
              <Link href="#capabilities" className="btn btn--secondary btn--lg">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Key Benefits */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="eyebrow">Strategic Value</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white my-4 tracking-tight">
                Engineered for High-Stakes Enterprise Demands
              </h2>
              <p className="text-base text-slate-400 leading-relaxed mb-6">
                {service.overview}
              </p>
              <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 border-l-4 border-l-cyan-400">
                <div className="text-[11px] uppercase tracking-wider font-bold text-cyan-400 mb-1">Featured Impact</div>
                <div className="font-semibold text-white text-sm mb-2">{service.caseStudy.client}</div>
                <p className="text-xs text-slate-400 m-0">{service.caseStudy.outcome}</p>
                <div className="mt-3 font-bold text-emerald-400 text-sm">
                  {service.caseStudy.metrics}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b) => (
                <div key={b.title} className="glass-card glass-card-hover p-6 flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">✓</div>
                  <h3 className="text-base font-bold text-white">{b.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 bg-slate-950/40 relative border-y border-white/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Comprehensive Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">What We Deliver</h2>
            <p className="text-sm text-slate-400 mt-2">Deep domain expertise across the modern digital engineering lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {service.capabilities.map((cap) => (
              <div key={cap.name} className="glass-card glass-card-hover p-8 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white">{cap.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Key Deliverables:</h4>
                  <ul className="flex flex-col gap-2">
                    {cap.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-bold">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 relative">
        <div className="container text-center">
          <div className="mb-8">
            <span className="eyebrow">Enterprise Ecosystem</span>
            <h2 className="text-2xl font-bold text-white mt-2">Technologies We Partner With</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {service.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-950/60 relative border-y border-white/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Proven Delivery Framework</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">How We Execute</h2>
            <p className="text-sm text-slate-400 mt-2">Transparent, milestone-driven engagement designed for predictability.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="glass-card glass-card-hover p-6">
                <div className="text-3xl font-black text-cyan-400 mb-3">{step.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 relative">
        <div className="container max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">Got Questions? We Have Answers.</h2>
          </div>

          <div className="flex flex-col gap-4">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed m-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Ready to Transform Your {service.title.split(' ')[0]} Capabilities?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Book a 30-minute discovery call with our principal solutions architects.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn--primary btn--lg">
              Book a Free Consultation
            </Link>
            <Link href="/services" className="btn btn--secondary btn--lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
