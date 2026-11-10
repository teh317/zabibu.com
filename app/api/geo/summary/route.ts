import { NextResponse } from 'next/server'
import { catalogSections } from '@/lib/catalog'
import { faqItems } from '@/lib/faq'
import { siteUrl } from '@/lib/discoverability'

export const runtime = 'edge'

export function GET() {
  const products = catalogSections.flatMap((section) =>
    section.items.map((item) => ({
      name: item.title,
      category: section.title,
      description: item.text,
      label: item.label,
      url: item.href ?? null,
    }))
  )

  return NextResponse.json(
    {
      name: 'Zabibu Technika',
      url: siteUrl,
      description:
        'Zabibu Technika is an AI and technology company based in Nairobi, Kenya, building sovereign, local-first software, edge AI models, and operating systems for Africa and the global South.',
      location: { city: 'Nairobi', country: 'Kenya', region: 'Africa' },
      founded: '2006-06',
      founder: 'Tehillah Mwangada Kachila',
      focus: [
        'Edge AI',
        'Local-first software',
        'Agentic AI',
        'Operating systems',
        'African-language AI',
        'Human-in-the-loop verification',
      ],
      products,
      faq: faqItems,
      media: {
        kit: `${siteUrl}/media-kit`,
        downloads: `${siteUrl}/downloads`,
        tune: `${siteUrl}/downloads/audio/zabibu-technika-tune.mp3`,
        tuneExtended: `${siteUrl}/downloads/audio/zabibu-technika-tune-extended.mp3`,
        wallpapers: `${siteUrl}/downloads/wallpapers`,
      },
      citation: `Zabibu Technika. "AI & technology company in Nairobi, Kenya." ${siteUrl}`,
    },
    {
      headers: {
        'cache-control': 'public, max-age=3600, s-maxage=3600',
        'content-type': 'application/json; charset=utf-8',
      },
    }
  )
}
