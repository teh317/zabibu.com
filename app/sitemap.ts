import type { MetadataRoute } from 'next'
import { absoluteUrl, projects } from '@/lib/discoverability'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/hub',
    '/about',
    '/community',
    '/dispatches',
    '/investors',
    '/manifesto',
    '/contact',
    '/alternatives/why-we-are-better',
    '/badges',
    '/media-kit',
    '/assets',
    '/privacy',
    '/terms',
    '/trust',
    '/accessibility',
    '/changelog',
    '/licenses',
  ]

  const projectPaths = Object.values(projects)
    .map((project) => project.url)
    .filter((url) => url.startsWith('/'))

  const paths = [...new Set([...staticPaths, ...projectPaths])]

  return paths.map((path) => {
    const changeFrequency: 'weekly' | 'monthly' = path === '/' ? 'weekly' : 'monthly'
    const priority =
      path === '/'
        ? 1
        : path === '/hub'
          ? 0.9
          : path === '/about'
            ? 0.8
            : path === '/media-kit' || path === '/assets'
              ? 0.8
              : path.startsWith('/arif') ||
                path.startsWith('/fikra') ||
                path.startsWith('/zabibuos') ||
                path.startsWith('/sigana') ||
                path.startsWith('/ella') ||
                path.startsWith('/phosh') ||
                path.startsWith('/glipter')
              ? 0.8
              : 0.6

    return {
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency,
      priority,
      ...(path === '/'
        ? { images: [absoluteUrl('/images/og-image.png')] }
        : {}),
    }
  })
}
