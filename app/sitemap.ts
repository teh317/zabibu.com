import type { MetadataRoute } from 'next'
import { absoluteUrl, projects } from '@/lib/discoverability'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/hub',
    '/about',
    '/community',
    '/dispatches',
    '/investors',
    ...Object.values(projects)
      .map((project) => project.url)
      .filter((url) => url.startsWith('/')),
  ]
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
