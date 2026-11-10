import type { Metadata } from 'next'
import { siteUrl } from '@/lib/discoverability'
import { catalogSections } from '@/lib/catalog'
import { faqItems } from '@/lib/faq'

export const OG_IMAGE = '/images/og-image.png'
export const OG_IMAGE_ALT = 'Zabibu Technika — AI and technology company in Nairobi, Kenya'

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url: path,
      siteName: 'Zabibu Technika',
      title,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
      creator: '@zabibutechnika',
    },
  }
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function softwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web, Linux, macOS, Windows, Android',
}: {
  name: string
  description: string
  url: string
  applicationCategory?: string
  operatingSystem?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    publisher: { '@id': `${siteUrl}/#organization` },
  }
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function itemListSchema() {
  const entries = catalogSections.flatMap((section) =>
    section.items.map((item) => ({ section, item }))
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Zabibu Technika product ecosystem',
    description:
      'The Zabibu Technika ecosystem: AI assistants, agents, operating systems, edge runtimes, testing tools, and the Fikra model lineup.',
    numberOfItems: entries.length,
    itemListElement: entries.map(({ section, item }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: item.title,
        description: item.text,
        ...(item.href ? { url: item.href } : {}),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Linux, macOS, Windows, Android',
        category: section.title,
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    })),
  }
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${siteUrl}/about`,
    name: 'About Zabibu Technika — AI and technology company in Nairobi, Kenya',
    description:
      'The story, mission, and research heritage of Zabibu Technika, an AI and technology company founded in Nairobi, Kenya in 2006.',
    mainEntity: { '@id': `${siteUrl}/#organization` },
    isPartOf: { '@id': `${siteUrl}/#website` },
  }
}

export function webPageSchema({
  name,
  description,
  path,
  mainEntity,
}: {
  name: string
  description: string
  path: string
  mainEntity?: Record<string, unknown>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: path.startsWith('http') ? path : `${siteUrl}${path}`,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    ...(mainEntity ? { mainEntity } : {}),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function audioObjectSchema({
  name,
  description,
  contentUrl,
}: {
  name: string
  description: string
  contentUrl: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AudioObject',
    name,
    description,
    contentUrl: contentUrl.startsWith('http') ? contentUrl : `${siteUrl}${contentUrl}`,
    encodingFormat: 'audio/mpeg',
    uploadDate: '2026-11-10',
    creator: { '@id': `${siteUrl}/#organization` },
  }
}
