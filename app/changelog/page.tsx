import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Changelog — Zabibu Technika',
  'A dated record of changes to the Zabibu Technika website, brand assets, and public product surfaces.',
  '/changelog'
)

const entries = [
  {
    date: '10 November 2026',
    title: 'Glipter joins the ecosystem',
    body: 'Added Glipter to the hub: an offline-first, on-device sign language engine that prioritises Kenyan Sign Language. Published a product page with the on-device pipeline, current KSL/ASL/BSL coverage, the published limits of the Tier 0 demonstrator, and the roadmap to a Deaf-reviewed translator. Added the Glipter mark to the logo set, a matching sticker, and updated the ecosystem loop and media kit counts to 13 surfaces.',
  },
  {
    date: '10 November 2026',
    title: 'Media kit, assets page, and the tune',
    body: 'Published the assets page, media kit, press kit, investor kit, and download library: wordmarks, icons, product marks, product social cards, stickers, animated GIFs, badges, banners, avatars, six original 4K desktop and mobile wallpapers, the standard and extended Zabibu Technika Tune, fonts, licensing notes, and the full ZIP bundle. Applied Outfit to the site and the 1200 × 630 website card, added reduced-motion support, focus styles, and trust, privacy, terms, accessibility, and licensing pages.',
  },
  {
    date: '9 November 2026',
    title: 'Product logos on the hub',
    body: 'Added each product’s own logo or favicon to its card on the hub, sourced from the live product site. Ustadi remains without a logo until it has a public site.',
  },
  {
    date: '8 November 2026',
    title: 'Search and AI discovery layer',
    body: 'Added unique page metadata, Organization and product schema, FAQPage, ItemList, breadcrumbs, sitemap, robots rules for AI crawlers, llms.txt and llms-full.txt, a GEO summary API, and an edge IndexNow webhook.',
  },
  {
    date: '7 November 2026',
    title: 'Hub explainers and product naming',
    body: 'Rebuilt the hub around four product sections with a plain-language explainer on every card. Renamed ZabibuOS to Zabibu OS, Weaver to Zabibu Weaver, and removed Kanari from the public surface.',
  },
  {
    date: '6 November 2026',
    title: 'Phosh.cpp and Fikra Edge Runtime positioning',
    body: 'Rewrote the Phosh.cpp page around the edge inference engine story, with Fikra Edge Runtime as the proprietary enterprise layer.',
  },
  {
    date: '5 November 2026',
    title: 'Website redesign',
    body: 'Moved the company site to the Zabibu Technika visual language: OLED black, Outfit, floating pill navigation, and a rounded shell. Published the separate Weaver, Arif, and Fikra marketing sites.',
  },
  {
    date: 'June 2006',
    title: 'The origin',
    body: 'Founded in Nairobi as Grape Technologies Inc. by Tehillah Mwangada Kachila, beginning the research practice that became Zabibu Technika.',
  },
]

export default function ChangelogPage() {
  return (
    <LegalPage
      eyebrow="Company / Changelog"
      title="Changelog"
      updated="10 November 2026"
      path="/changelog"
      description="A dated record of what changed on the public surface. Product-internal releases are tracked in each product repository."
      schema={webPageSchema({
        name: 'Changelog — Zabibu Technika',
        description: 'A dated record of changes to the Zabibu Technika website and public product surfaces.',
        path: '/changelog',
      })}
    >
      <ol className="relative border-l border-white/10 pl-6">
        {entries.map((entry) => (
          <li key={`${entry.date}-${entry.title}`} className="mb-10 last:mb-0">
            <span className="absolute -left-[5px] mt-2 size-2 rounded-full bg-[#8b2cff]" aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b887ff]">{entry.date}</p>
            <h2 className="mt-2 text-lg font-bold text-white">{entry.title}</h2>
            <p className="mt-2 text-sm leading-7 text-white/60">{entry.body}</p>
          </li>
        ))}
      </ol>
      <p className="text-sm text-white/40">
        For the asset library, see the{' '}
        <Link href="/assets" className="text-[#b887ff] underline underline-offset-2">
          assets page
        </Link>
        . For the brand story, see the{' '}
        <Link href="/media-kit" className="text-[#b887ff] underline underline-offset-2">
          media kit
        </Link>
        .
      </p>
    </LegalPage>
  )
}
