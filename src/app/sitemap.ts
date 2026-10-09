import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';
import { leaders } from '@/data/team';

const services = [
  'ai-agents-mcp-servers',
  'software-development',
  'ai-data-analytics',
  'cloud-infrastructure',
  'digital-transformation',
  'cybersecurity',
  'managed-services',
];

const posts = [
  'what-is-an-mcp-server',
  'enterprise-ai-readiness-framework',
  'multi-cloud-vs-hybrid-cloud',
  'zero-trust-security-implementation',
  'why-digital-transformation-fails',
  'finops-cut-cloud-costs',
  'modern-data-platform-architecture',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const now = new Date('2026-10-09T00:00:00.000Z');

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: s === 'ai-agents-mcp-servers' || s === 'software-development' ? 0.9 : 0.7,
    })),
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...leaders.map((l) => ({ url: `${baseUrl}/team/${l.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((p) => ({ url: `${baseUrl}/blog/${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: p === 'what-is-an-mcp-server' ? 0.8 : 0.5 })),
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
