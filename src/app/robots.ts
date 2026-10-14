import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

// Search and AI-assistant crawlers, named explicitly so the site stays open to them even if the
// catch-all rule is tightened later. Google-Extended controls whether Gemini may use the content;
// GPTBot/OAI-SearchBot, ClaudeBot, PerplexityBot and Bingbot feed ChatGPT, Claude, Perplexity and Copilot.
const crawlers = [
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'PerplexityBot',
  'Applebot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: crawlers, allow: '/', disallow: ['/api/'] },
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
