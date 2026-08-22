import type { MetadataRoute } from 'next'
import { absoluteUrl, projects } from '@/lib/discoverability'
export default function sitemap(): MetadataRoute.Sitemap { const paths = ['/', '/about', '/community', '/dispatches', '/investors', ...Object.values(projects).map((p) => p.url)]; return paths.map((path) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: 'weekly', priority: path === '/' ? 1 : .7 })) }
