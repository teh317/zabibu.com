import type { MetadataRoute } from 'next'
import { absoluteUrl, siteUrl } from '@/lib/discoverability'

const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'PerplexityBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'CCBot',
  'Applebot-Extended',
  'Bingbot',
  'Googlebot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/api/'] })),
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: new URL(siteUrl).origin,
  }
}
