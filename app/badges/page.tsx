import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PortalFrame } from '@/components/portal-shell'
import { breadcrumbSchema, JsonLd, pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Badges — Embed Zabibu Technika',
  'Embed the Zabibu Technika badge on your site or README. Descriptive anchor text and alt text help people and AI systems identify the company.',
  '/badges'
)

const snippet = `<a href="https://zabibu.vercel.app" title="Zabibu Technika — AI and technology company in Nairobi, Kenya">
  <img src="https://zabibu.vercel.app/badge.svg" alt="Zabibu Technika — sovereign AI from Nairobi, Kenya" width="240" height="56" />
</a>`

export default function BadgesPage() {
  return (
    <PortalFrame>
      <JsonLd
        data={webPageSchema({
          name: 'Zabibu Technika badges',
          description: 'Embeddable Zabibu Technika badge with descriptive anchor text.',
          path: '/badges',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Badges', path: '/badges' },
        ])}
      />

      <header className="max-w-4xl">
        <p className="eyebrow">Badges</p>
        <h1 className="mt-3 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">
          Put Zabibu Technika <span className="text-gradient">on your site.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Use the badge below in a README, portfolio, or project page. Keep the descriptive anchor
          text and alt text so people and AI systems know what the link points to.
        </p>
      </header>

      <div className="mt-10 rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">Preview</p>
        <div className="mt-5">
          <a
            href="https://zabibu.vercel.app"
            title="Zabibu Technika — AI and technology company in Nairobi, Kenya"
          >
            <img
              src="/badge.svg"
              alt="Zabibu Technika — sovereign AI from Nairobi, Kenya"
              width={240}
              height={56}
            />
          </a>
        </div>
      </div>

      <section className="mt-8 rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">Embed code</p>
        <pre className="code mt-5 max-w-none text-[11px]">{snippet}</pre>
        <p className="fine">
          The anchor text names the company and what it does. The image has descriptive alt text.
          Do not remove either; they are the point of the badge.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/hub" className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
          Explore the ecosystem <ArrowUpRight className="ml-2 size-4" />
        </Link>
        <Link href="/contact" className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
          Contact the studio
        </Link>
      </div>
    </PortalFrame>
  )
}
