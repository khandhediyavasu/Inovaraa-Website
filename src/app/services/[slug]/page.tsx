import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import JsonLd, { ORG_ID, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { SITE } from '@/data/site';

interface ServiceData {
  title: string;
  subtitle: string;
  icon: string;
  overview: string;
  benefits: { title: string; desc: string }[];
  capabilities: { name: string; description: string; highlights: string[] }[];
  process: { step: string; title: string; desc: string }[];
  techStack: string[];
  caseStudy?: { client: string; outcome: string; metrics: string };
  faqs: { q: string; a: string }[];
}

const serviceDatabase: Record<string, ServiceData> = {
  'ai-agents-mcp-servers': {
    title: 'AI Agent & MCP Server Development',
    subtitle: 'Connect Claude, ChatGPT and other AI assistants to your software with custom MCP (Model Context Protocol) servers, AI agents and secure LLM integrations.',
    icon: '🧩',
    overview: 'We design and build MCP servers and AI agents that let AI assistants work with your real systems: your APIs, databases, CRMs, ERPs and internal documents. Each server exposes clear, well-described tools with the right permissions, so the assistant can look things up and take action safely. We build on your existing stack (.NET, Node.js, Python, Angular or React), then handle server setup, deployment, monitoring and support.',
    benefits: [
      { title: 'Build once, works everywhere', desc: 'One MCP server works with every MCP-compatible client, including Claude, ChatGPT, VS Code with GitHub Copilot and Cursor.' },
      { title: 'Your data stays under control', desc: 'Least-privilege tools, authentication and audit logs decide exactly what the AI can read and do.' },
      { title: 'Fits your existing systems', desc: 'We wrap the APIs and databases you already run instead of asking you to rebuild them.' },
      { title: 'Real actions, not just chat', desc: 'Agents can create records, run reports and trigger workflows, with human approval where it matters.' },
    ],
    capabilities: [
      {
        name: 'Custom MCP Server Development',
        description: 'Model Context Protocol servers that expose your product\'s tools, resources and prompts to AI assistants, built with the official TypeScript, Python or C#/.NET SDKs.',
        highlights: ['Tool & schema design', 'Local (stdio) and remote (HTTP) servers', 'OAuth-secured remote access'],
      },
      {
        name: 'AI Agents & Workflow Automation',
        description: 'Agents that plan multi-step work across your systems, such as triaging tickets, preparing reports or updating records, with clear guardrails.',
        highlights: ['Multi-step task automation', 'Human-in-the-loop approvals', 'Tool-use evaluation'],
      },
      {
        name: 'LLM Integration & RAG',
        description: 'Bring large language models into your web and mobile apps, grounded in your own documents and data with retrieval-augmented generation.',
        highlights: ['Claude & OpenAI API integration', 'Document search (RAG)', 'Prompt and output testing'],
      },
      {
        name: 'Server Setup, Deployment & Support',
        description: 'We host and run what we build: Linux server setup, Docker containers, CI/CD pipelines, monitoring and ongoing maintenance on Azure, AWS or your own servers.',
        highlights: ['Linux & Docker setup', 'CI/CD pipelines', 'Monitoring & logging'],
      },
    ],
    process: [
      { step: '01', title: 'Use-case workshop', desc: 'Pick the questions and actions your users need, and the systems the AI must reach.' },
      { step: '02', title: 'Tool & security design', desc: 'Define tools, input schemas, permissions and approval steps before writing code.' },
      { step: '03', title: 'Build & test', desc: 'Implement the MCP server or agent, then test with the MCP Inspector and real AI clients.' },
      { step: '04', title: 'Deploy & support', desc: 'Ship to your infrastructure with authentication, monitoring and ongoing improvements.' },
    ],
    techStack: ['Model Context Protocol (MCP)', 'TypeScript', 'Node.js', 'Python', '.NET / C#', 'Claude API', 'OpenAI API', 'Docker', 'Azure', 'AWS', 'Linux'],
    faqs: [
      { q: 'What is an MCP server?', a: 'An MCP (Model Context Protocol) server is a small service that exposes your software\'s tools and data to AI assistants in a standard way. Once it is connected, an assistant such as Claude or ChatGPT can look up information and take actions in your system, within the permissions you set.' },
      { q: 'Which AI assistants can use an MCP server?', a: 'MCP is an open standard supported by a growing list of clients, including Claude, ChatGPT, Visual Studio Code with GitHub Copilot and Cursor. One server can serve all of them.' },
      { q: 'Can you build an MCP server for our existing .NET or Node.js application?', a: 'Yes. We build MCP servers alongside existing .NET, Node.js and Python systems using the official SDKs, wrapping the APIs and databases you already have.' },
      { q: 'How do you keep an MCP server secure?', a: 'We give every tool the least privilege it needs, validate all inputs on the server, use OAuth for remote servers, require human confirmation for destructive actions, and log every tool call.' },
      { q: 'Do you also handle hosting and server setup?', a: 'Yes. We set up and maintain Linux servers, Docker containers, CI/CD pipelines and monitoring on Azure, AWS or your own infrastructure.' },
    ],
  },
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
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.title,
    description: service.subtitle,
    keywords: [service.title, ...service.techStack, 'Inovaraa Solutions', 'software development company'],
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: `${service.title} | Inovaraa Solutions`, description: service.subtitle, url: `/services/${slug}`, type: 'website', images: ['/opengraph-image'] },
  };
}

/* ---------- Per-service visual identity (presentation only) ---------- */

type Visual = { short: string; color: string; icon: ReactNode; art: ReactNode };

const visuals: Record<string, Visual> = {
  'ai-agents-mcp-servers': {
    short: 'AI Agents & MCP Servers',
    color: '#818CF8',
    icon: <><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" /></>,
    art: <AiHeroArt />,
  },
  'cloud-infrastructure': {
    short: 'Cloud Infrastructure',
    color: '#38BDF8',
    icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
    art: <CloudHeroArt />,
  },
  'ai-data-analytics': {
    short: 'AI & Data Analytics',
    color: '#A78BFA',
    icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
    art: <AiHeroArt />,
  },
  'digital-transformation': {
    short: 'Digital Transformation',
    color: '#FBBF24',
    icon: <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16" />,
    art: <TransformHeroArt />,
  },
  cybersecurity: {
    short: 'Cybersecurity',
    color: '#34D399',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    art: <SecurityHeroArt />,
  },
  'managed-services': {
    short: 'Managed Services',
    color: '#F472B6',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    art: <OpsHeroArt />,
  },
  'software-development': {
    short: 'Software Development',
    color: '#22D3EE',
    icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
    art: <CodeHeroArt />,
  },
};

const fallbackVisual: Visual = { short: 'Service', color: '#818CF8', icon: <circle cx="12" cy="12" r="9" />, art: null };

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'stack', label: 'Tech stack' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
];

// Highlight the part after the last "&" (or the last two words) in the gradient
function splitTitle(title: string): [string, string] {
  const amp = title.lastIndexOf(' & ');
  if (amp > -1) return [title.slice(0, amp + 3), title.slice(amp + 3)];
  const words = title.split(' ');
  return [words.slice(0, -2).join(' ') + ' ', words.slice(-2).join(' ')];
}

// "52% Cost Reduction" -> ["52%", "Cost Reduction"]
function splitMetric(metric: string): [string, string] {
  const [value, ...rest] = metric.trim().split(' ');
  return [value, rest.join(' ')];
}

const accentText = (hex: string): CSSProperties => ({ color: `color-mix(in srgb, ${hex} 70%, var(--ink))` });

const Arrow = ({ className = 'btn-arrow w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDatabase[slug];

  if (!service) {
    notFound();
  }

  const v = visuals[slug] ?? fallbackVisual;
  const [titleHead, titleTail] = splitTitle(service.title);
  const metrics = service.caseStudy ? service.caseStudy.metrics.split('·').map(splitMetric) : [];
  const others = Object.keys(serviceDatabase).filter((s) => s !== slug);

  return (
    <div style={{ '--tile': v.color } as CSSProperties}>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            serviceType: v.short,
            description: service.overview,
            url: `${SITE.url}/services/${slug}`,
            provider: { '@id': ORG_ID, name: SITE.name },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${v.short} capabilities`,
              itemListElement: service.capabilities.map((c) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: c.name, description: c.description } })),
            },
          },
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: v.short, path: `/services/${slug}` },
          ]),
        ]}
      />
      <PageHero
        crumb={`Services / ${v.short}`}
        kicker="Enterprise IT Service"
        title={<>{titleHead}<span className="text-gradient">{titleTail}</span></>}
        description={service.subtitle}
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Schedule a Consultation
          <Arrow />
        </Link>
        <Link href="#capabilities" className="btn btn--secondary btn--lg">
          Explore Capabilities
        </Link>
      </PageHero>

      {/* Showcase: illustration + overview + featured impact */}
      <section id="overview" className="relative pb-24 sm:pb-28 scroll-mt-28" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-stretch">
          <div
            suppressHydrationWarning data-reveal="scale"
            className="surface border-glow relative rounded-[2rem] overflow-hidden min-h-[300px] sm:min-h-[400px]"
          >
            <div className="absolute inset-0 bg-grid-fade opacity-70" aria-hidden="true" />
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full blur-3xl opacity-20"
              style={{ background: v.color }}
              aria-hidden="true"
            />
            <div className="absolute inset-0">{v.art}</div>
            <div className="absolute top-5 left-5 surface-glass rounded-full pl-1.5 pr-4 py-1.5 flex items-center gap-2.5">
              <span className="icon-tile w-8! h-8! rounded-full!">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{v.icon}</svg>
              </span>
              <span className="text-xs font-semibold text-white">{v.short}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div suppressHydrationWarning data-reveal className="kicker mb-5 self-start">Strategic Value</div>
            <h2
              id="overview-heading"
              suppressHydrationWarning data-reveal
              style={{ '--d': '80ms' } as CSSProperties}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] mb-5"
            >
              Engineered for <span className="text-gradient">high-stakes</span> enterprise demands
            </h2>
            <p suppressHydrationWarning data-reveal style={{ '--d': '160ms' } as CSSProperties} className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
              {service.overview}
            </p>

            {service.caseStudy && (
            <div
              suppressHydrationWarning data-reveal
              style={{ '--d': '240ms' } as CSSProperties}
              className="surface spotlight rounded-3xl p-6 sm:p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full pulse-soft" style={{ background: v.color }} aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold" style={accentText(v.color)}>Featured Impact</span>
              </div>
              <div className="font-semibold text-white mb-1.5">{service.caseStudy.client}</div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.caseStudy.outcome}</p>
              <dl className="grid grid-cols-2 gap-3 m-0">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3.5 flex flex-col-reverse">
                    <dt className="text-xs text-slate-400 mt-1">{label}</dt>
                    <dd suppressHydrationWarning data-count className="m-0 font-display text-2xl sm:text-3xl font-extrabold text-gradient leading-none">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Long-form body with sticky side navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-10 xl:gap-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-32 flex flex-col gap-6" aria-label="On this page">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">On this page</div>
              <ol className="list-none p-0 m-0 flex flex-col border-l border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group -ml-px flex items-center gap-3 border-l-2 border-transparent hover:border-cyan-400 pl-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="surface rounded-2xl p-4 flex flex-col gap-3">
              <div className="text-sm font-semibold text-white leading-snug">Discuss your {v.short.toLowerCase()} roadmap</div>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                Book a call <Arrow className="w-3.5 h-3.5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                All services
              </Link>
            </div>
          </nav>
        </aside>

        <div className="min-w-0">
          {/* Mobile / tablet jump links */}
          <nav className="lg:hidden flex flex-wrap gap-2 mb-4" aria-label="On this page">
            {sections.slice(1).map((s) => (
              <a key={s.id} href={`#${s.id}`} className="surface-glass rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                {s.label}
              </a>
            ))}
          </nav>

          {/* Benefits */}
          <section id="benefits" className="py-16 sm:py-20 scroll-mt-28" aria-labelledby="benefits-heading">
            <SectionHeading
              align="left"
              kicker="Key Benefits"
              id="benefits-heading"
              title={<>Outcomes you can <span className="text-gradient">measure</span></>}
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div
                  key={b.title}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 2) * 100}ms` } as CSSProperties}
                  className="surface spotlight lift group relative rounded-[1.75rem] p-7 flex flex-col gap-3 overflow-hidden"
                >
                  <span
                    className="absolute -top-14 -right-14 w-40 h-40 rounded-full blur-3xl opacity-15 group-hover:opacity-35 transition-opacity duration-700"
                    style={{ background: v.color }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between mb-3">
                    <span className="icon-tile w-11! h-11!"><Check className="w-4 h-4" /></span>
                    <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="relative text-xl sm:text-2xl font-extrabold text-white leading-tight">{b.title}</h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section id="capabilities" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="capabilities-heading">
            <SectionHeading
              align="left"
              kicker="Comprehensive Capabilities"
              id="capabilities-heading"
              title={<>What we <span className="text-gradient">deliver</span></>}
              description="Deep domain expertise across the modern digital engineering lifecycle."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.capabilities.map((cap, i) => (
                <article
                  key={cap.name}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 2) * 100}ms` } as CSSProperties}
                  className="surface spotlight lift rounded-[1.75rem] p-7 sm:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{cap.name}</h3>
                    <span className="font-display text-4xl font-extrabold text-outline leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{cap.description}</p>
                  <div className="mt-auto pt-5 border-t border-white/10">
                    <h4 className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold mb-3">Key Deliverables</h4>
                    <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                      {cap.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: `${v.color}22`, border: `1px solid ${v.color}55`, ...accentText(v.color) }}
                          >
                            <Check />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Tech stack */}
          <section id="stack" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="stack-heading">
            <SectionHeading
              align="left"
              kicker="Enterprise Ecosystem"
              id="stack-heading"
              title={<>Technologies we <span className="text-gradient">partner with</span></>}
              className="mb-10"
            />
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-none p-0 m-0">
              {service.techStack.map((tech, i) => (
                <li
                  key={tech}
                  suppressHydrationWarning data-reveal="scale"
                  style={{ '--d': `${(i % 3) * 70}ms` } as CSSProperties}
                  className="surface-glass spotlight lift rounded-2xl px-4 py-3.5 flex items-center gap-3 min-w-0"
                >
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white text-xs font-bold flex items-center justify-center shrink-0" aria-hidden="true">
                    {tech.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)}
                  </span>
                  <span className="text-sm font-semibold text-white truncate">{tech}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section id="process" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="process-heading">
            <SectionHeading
              align="left"
              kicker="Proven Delivery Framework"
              id="process-heading"
              title={<>How we <span className="text-gradient">execute</span></>}
              description="Transparent, milestone-driven engagement designed for predictability."
              className="mb-12"
            />
            <ol className="relative list-none p-0 m-0 flex flex-col gap-5">
              <span className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400 via-indigo-400 to-pink-400 opacity-60" aria-hidden="true" />
              {service.process.map((step, i) => (
                <li
                  key={step.step}
                  suppressHydrationWarning data-reveal="left"
                  style={{ '--d': `${i * 120}ms` } as CSSProperties}
                  className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 sm:gap-6 items-start"
                >
                  <span className="relative z-[1] w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-white font-mono text-sm font-bold flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    {step.step}
                  </span>
                  <div className="surface spotlight lift rounded-3xl p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQs */}
          <section id="faq" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="faq-heading">
            <SectionHeading
              align="left"
              kicker="Frequently Asked Questions"
              id="faq-heading"
              title={<>Got questions? <span className="text-gradient">We have answers.</span></>}
              className="mb-10"
            />
            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  open={i === 0}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${i * 70}ms` } as CSSProperties}
                  className="faq-item group rounded-3xl border border-white/10 bg-white/[0.02] open:border-indigo-400/40 open:bg-[var(--surface)] transition-colors duration-500"
                >
                  <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer px-6 sm:px-7 py-6 flex items-center justify-between gap-6">
                    <h3 className="flex items-baseline gap-4 m-0 text-base sm:text-lg font-semibold text-white">
                      <span className="font-mono text-xs font-normal text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                      <span>{faq.q}</span>
                    </h3>
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-white/5 text-slate-300 transition-transform duration-500 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </span>
                  </summary>
                  <p className="px-6 sm:px-7 pb-7 sm:pl-[4.25rem] text-slate-400 leading-relaxed m-0">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Other services */}
      <section className="relative py-24 sm:py-28" aria-labelledby="more-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading align="left" kicker="Keep exploring" id="more-heading" title={<>More <span className="text-gradient">services</span></>} />
            <div suppressHydrationWarning data-reveal style={{ '--d': '160ms' } as CSSProperties} className="md:pb-6">
              <Link href="/services" className="btn btn--secondary">
                View All Services
                <Arrow />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {others.map((s, i) => {
              const ov = visuals[s] ?? fallbackVisual;
              return (
                <Link
                  key={s}
                  href={`/services/${s}`}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${i * 70}ms`, '--tile': ov.color } as CSSProperties}
                  className="surface spotlight lift group rounded-3xl p-5 flex flex-col gap-5 min-h-[170px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="icon-tile w-11! h-11!">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ov.icon}</svg>
                    </span>
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" aria-hidden="true">
                      <Arrow className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="text-base font-bold text-white leading-snug">{ov.short}</div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-2">{serviceDatabase[s].subtitle}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Hero illustrations, one per service (pure SVG/CSS) ---------- */

const spin = (dur: number, reverse = false): CSSProperties => ({
  transformOrigin: '200px 160px',
  animation: `spin ${dur}s linear infinite${reverse ? ' reverse' : ''}`,
});

function CloudHeroArt() {
  const providers: [string, number][] = [['AWS', -90], ['Azure', 25], ['GCP', 155]];
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <ellipse cx="200" cy="160" rx="160" ry="110" fill="none" stroke="#38BDF8" strokeOpacity="0.18" />
      <ellipse cx="200" cy="160" rx="110" ry="76" fill="none" stroke="#38BDF8" strokeOpacity="0.3" strokeDasharray="3 6" />
      <circle cx="200" cy="160" r="128" fill="none" stroke="#38BDF8" strokeOpacity="0.3" strokeDasharray="2 10" style={spin(40)} />
      {providers.map(([label, deg], i) => {
        const r = (deg * Math.PI) / 180;
        const x = Math.round(200 + 128 * Math.cos(r));
        const y = Math.round(160 + 128 * Math.sin(r));
        return (
          <g key={label}>
            <line x1="200" y1="140" x2={x} y2={y} stroke="#38BDF8" strokeOpacity="0.45" strokeDasharray="4 4" style={{ animation: 'dash-flow 1.4s linear infinite' }} />
            <circle r="3.5" fill="#7DD3FC">
              <animateMotion dur="2.2s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={`M200,140 L${x},${y}`} />
            </circle>
            <g className="float-slow" style={{ animationDelay: `${i * -2}s` }}>
              <circle cx={x} cy={y} r="22" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="1.5" />
              <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#E0F2FE" fontFamily="ui-sans-serif, system-ui">{label}</text>
            </g>
          </g>
        );
      })}
      {/* Kubernetes pods */}
      {[[150, 230], [176, 244], [202, 230], [228, 244], [254, 230]].map(([x, y], i) => (
        <polygon
          key={i}
          points={`${x},${y - 11} ${x + 10},${y - 5} ${x + 10},${y + 6} ${x},${y + 12} ${x - 10},${y + 6} ${x - 10},${y - 5}`}
          fill="#38BDF8"
          fillOpacity="0.25"
          stroke="#7DD3FC"
        >
          <animate attributeName="fill-opacity" values="0.15;0.6;0.15" dur="2.4s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
        </polygon>
      ))}
      <circle cx="200" cy="140" r="40" fill="#0EA5E9" />
      <circle cx="200" cy="140" r="40" fill="none" stroke="#7DD3FC">
        <animate attributeName="r" values="40;62" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <path d="M186 150 h30 a9 9 0 0 0 0-18 a14 14 0 0 0-26-3 a9 9 0 0 0-4 21z" fill="#FFFFFF" />
    </svg>
  );
}

function AiHeroArt() {
  const layers = [
    [80, 130, 180, 230],
    [70, 115, 160, 205, 250],
    [110, 160, 210],
  ];
  const xs = [90, 200, 310];
  const edges: { a: [number, number]; b: [number, number] }[] = [];
  layers.forEach((col, li) => {
    if (li === layers.length - 1) return;
    col.forEach((y) => layers[li + 1].forEach((y2) => edges.push({ a: [xs[li], y], b: [xs[li + 1], y2] })));
  });
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" aria-hidden="true">
      {edges.map(({ a, b }, i) => (
        <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#A78BFA" strokeOpacity="0.18" />
      ))}
      {edges.filter((_, i) => i % 4 === 0).map(({ a, b }, i) => (
        <circle key={`p${i}`} r="3" fill="#C4B5FD">
          <animateMotion dur={`${1.8 + (i % 4) * 0.4}s`} begin={`${(i % 5) * 0.3}s`} repeatCount="indefinite" path={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} />
        </circle>
      ))}
      {layers.map((col, li) =>
        col.map((y, k) => (
          <g key={`${li}-${k}`}>
            <circle cx={xs[li]} cy={y} r="11" fill="#2E1065" stroke="#A78BFA" strokeWidth="1.5" />
            <circle cx={xs[li]} cy={y} r="4" fill="#C4B5FD">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin={`${(li * 4 + k) * 0.18}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))
      )}
      <g className="float-slow">
        <rect x="258" y="30" width="112" height="34" rx="17" fill="#A78BFA" fillOpacity="0.2" stroke="#A78BFA" strokeOpacity="0.6" />
        <path d="M278 40 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#C4B5FD" />
        <rect x="292" y="43" width="62" height="4" rx="2" fill="#C4B5FD" fillOpacity="0.7" />
        <rect x="292" y="51" width="40" height="4" rx="2" fill="#C4B5FD" fillOpacity="0.4" />
      </g>
    </svg>
  );
}

function TransformHeroArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" aria-hidden="true">
      {/* Legacy monolith */}
      <rect x="40" y="90" width="110" height="150" rx="14" fill="#78350F" fillOpacity="0.35" stroke="#FBBF24" strokeOpacity="0.5" strokeDasharray="5 4" />
      {[110, 130, 150, 170, 190, 210].map((y, i) => (
        <rect key={y} x="58" y={y} width={74 - (i % 3) * 12} height="7" rx="3.5" fill="#FBBF24" fillOpacity="0.3" />
      ))}
      <text x="95" y="262" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FBBF24" fillOpacity="0.8" fontFamily="ui-monospace, monospace">LEGACY</text>
      {/* Flow */}
      {[130, 165, 200].map((y, i) => (
        <g key={y}>
          <path d={`M158 ${y} C 200 ${y}, 200 ${80 + i * 70}, 236 ${80 + i * 70}`} fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.7" strokeDasharray="5 5" style={{ animation: `dash-flow ${0.9 + i * 0.2}s linear infinite` }} />
          <circle r="3.5" fill="#FCD34D">
            <animateMotion dur={`${1.6 + i * 0.3}s`} repeatCount="indefinite" path={`M158 ${y} C 200 ${y}, 200 ${80 + i * 70}, 236 ${80 + i * 70}`} />
          </circle>
        </g>
      ))}
      {/* Modern services */}
      {[[244, 52], [306, 52], [244, 122], [306, 122], [244, 192], [306, 192]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="52" height="56" rx="12" fill="#FBBF24" fillOpacity={0.18 + (i % 3) * 0.12} stroke="#FCD34D" strokeOpacity="0.8">
            <animate attributeName="y" values={`${y};${y - 5};${y}`} dur="3.2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
          </rect>
        </g>
      ))}
      <rect x="244" y="270" width="114" height="6" rx="3" fill="#FBBF24" fillOpacity="0.15" />
      <rect x="244" y="270" width="114" height="6" rx="3" fill="#FBBF24">
        <animate attributeName="width" values="0;114;114" keyTimes="0;0.7;1" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function SecurityHeroArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" aria-hidden="true">
      <defs>
        <linearGradient id="sec-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#34D399" stopOpacity="0" />
          <stop offset="1" stopColor="#34D399" stopOpacity="0.45" />
        </linearGradient>
        <clipPath id="sec-shield">
          <path d="M200 92 L244 108 V150 C244 178 224 196 200 206 C176 196 156 178 156 150 V108 Z" />
        </clipPath>
      </defs>
      {[60, 95, 130].map((r) => (
        <circle key={r} cx="200" cy="160" r={r} fill="none" stroke="#34D399" strokeOpacity="0.22" />
      ))}
      <line x1="60" y1="160" x2="340" y2="160" stroke="#34D399" strokeOpacity="0.12" />
      <line x1="200" y1="20" x2="200" y2="300" stroke="#34D399" strokeOpacity="0.12" />
      <g style={spin(5)}>
        <path d="M200 160 L330 160 A130 130 0 0 0 292 68 Z" fill="url(#sec-sweep)" />
      </g>
      {[[120, 96], [290, 118], [268, 236], [110, 220], [318, 196]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#6EE7B7">
          <animate attributeName="opacity" values="0;1;0" dur="5s" begin={`${i * 1}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <path d="M200 92 L244 108 V150 C244 178 224 196 200 206 C176 196 156 178 156 150 V108 Z" fill="#064E3B" stroke="#34D399" strokeWidth="2" />
      <g clipPath="url(#sec-shield)">
        <rect x="150" width="100" height="30" fill="#34D399" fillOpacity="0.35">
          <animate attributeName="y" values="62;206" dur="2.6s" repeatCount="indefinite" />
        </rect>
      </g>
      <rect x="186" y="142" width="28" height="24" rx="5" fill="#6EE7B7" />
      <path d="M192 142 v-7 a8 8 0 0 1 16 0 v7" fill="none" stroke="#6EE7B7" strokeWidth="3.5" />
      <circle cx="200" cy="154" r="3" fill="#064E3B" />
    </svg>
  );
}

function OpsHeroArt() {
  const line = 'M0 70 L30 62 L60 66 L90 40 L120 48 L150 30 L180 38 L210 22 L240 30 L270 16';
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 pt-20 sm:p-10 sm:pt-20" aria-hidden="true">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col gap-5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-white">Service health</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" /> 24/7
          </span>
        </div>
        <svg viewBox="0 0 270 80" className="w-full h-20">
          <defs>
            <linearGradient id="ops-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F472B6" stopOpacity="0.35" />
              <stop offset="1" stopColor="#F472B6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${line} L270 80 L0 80 Z`} fill="url(#ops-fill)" />
          <path d={line} fill="none" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="400" strokeDashoffset="400">
            <animate attributeName="stroke-dashoffset" values="400;0;0" keyTimes="0;0.6;1" dur="5s" repeatCount="indefinite" />
          </path>
          <circle cx="270" cy="16" r="4" fill="#F472B6" className="pulse-soft" />
        </svg>
        <div className="flex flex-col gap-2.5">
          {['Network', 'Infrastructure', 'Backups'].map((label, i) => (
            <div key={label} className="flex items-center gap-3 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" style={{ animationDelay: `${i * 0.4}s` }} />
              <span className="text-slate-300 w-24 shrink-0">{label}</span>
              <span className="flex-1 flex gap-[2px] h-3">
                {Array.from({ length: 24 }, (_, k) => (
                  <span key={k} className="flex-1 rounded-[2px]" style={{ background: '#34D399', opacity: 0.35 + ((k * 7 + i * 5) % 10) / 16 }} />
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeHeroArt() {
  const lines = [
    { w: 42, c: '#818CF8', indent: 0 },
    { w: 66, c: '#22D3EE', indent: 1 },
    { w: 52, c: '#34D399', indent: 2 },
    { w: 60, c: '#F472B6', indent: 2 },
    { w: 46, c: '#22D3EE', indent: 1 },
    { w: 30, c: '#818CF8', indent: 0 },
  ];
  const stages = ['Build', 'Test', 'Deploy'];
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 pt-20 sm:p-10 sm:pt-20" aria-hidden="true">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#070C1C] overflow-hidden font-mono shadow-2xl">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[10px]" style={{ color: '#64748B' }}>services/platform.ts</span>
        </div>
        <div className="p-4 flex flex-col gap-2.5">
          {lines.map((l, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[9px] w-3 text-right" style={{ color: '#475569' }}>{i + 1}</span>
              <span
                className="h-2 rounded-full"
                style={{
                  width: `${l.w}%`,
                  marginLeft: `${l.indent * 14}px`,
                  background: l.c,
                  opacity: 0.85,
                  animation: `reveal-left 900ms cubic-bezier(0.16,1,0.3,1) ${i * 140}ms backwards`,
                }}
              />
            </div>
          ))}
          <span className="w-1.5 h-3 ml-6 pulse-soft" style={{ background: '#22D3EE' }} />
        </div>
      </div>
      <div className="w-full max-w-md flex items-center gap-2">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
            <span className="surface-glass rounded-full px-3 py-1.5 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-soft" style={{ animationDelay: `${i * 0.5}s` }} />
              {s}
            </span>
            {i < stages.length - 1 && <span className="flex-1 h-px bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-60" />}
          </div>
        ))}
      </div>
    </div>
  );
}
