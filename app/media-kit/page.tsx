import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Download, FileArchive, Music } from 'lucide-react'
import { AssetCard } from '@/components/asset-card'
import { PortalFrame } from '@/components/portal-shell'
import { QuotableSummary } from '@/components/quotable-summary'
import { WallpaperCard } from '@/components/wallpaper-card'
import {
  audioAssets,
  brandAssets,
  brandColors,
  iconAssets,
  investorKit,
  mediaKitBundle,
  pressKit,
  productAssets,
  wallpaperDesigns,
} from '@/lib/media'
import {
  audioObjectSchema,
  breadcrumbSchema,
  JsonLd,
  pageMetadata,
  webPageSchema,
} from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Media Kit — Brand, Logos & Tune',
  'Download the Zabibu Technika media kit: logos, icons, wallpapers, brand colours, typography, licensing, and the official tune.',
  '/media-kit'
)

const facts = [
  ['Company', 'Zabibu Technika'],
  ['Founded', 'June 2006 · Grape Technologies'],
  ['Founder', 'Tehillah Mwangada Kachila'],
  ['Headquarters', 'Nairobi, Kenya'],
  ['Focus', 'AI, edge models, local-first software'],
  ['Users', '600+ across Arif & Ella'],
  ['Products', '13 surfaces across AI, OS, media, accessibility, tooling'],
  ['Press', 'zabibutechnika@gmail.com'],
]

const usage = [
  ['Clear space', 'Keep at least the height of the grape mark around the logo.'],
  ['Do not distort', 'Scale proportionally. Never stretch, skew, or rotate the mark.'],
  ['Do not recolour', 'Use the white wordmark on dark, the black wordmark on light, and the grape in purple.'],
  ['No endorsement', 'Do not imply a partnership or endorsement without written permission.'],
  ['Link home', 'When using the badge, link to https://zabibu.vercel.app with descriptive anchor text.'],
  ['Ask first', 'Commercial co-branding, merchandise, and remixes need written permission.'],
]

export default function MediaKitPage() {
  return (
    <PortalFrame>
      <JsonLd
        data={webPageSchema({
          name: 'Zabibu Technika media kit',
          description:
            'Brand assets, logos, icons, wallpapers, typography, licensing, and the official Zabibu Technika tune.',
          path: '/media-kit',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Media kit', path: '/media-kit' },
        ])}
      />
      {audioAssets.map((asset) => (
        <JsonLd
          key={asset.href}
          data={audioObjectSchema({
            name: asset.title,
            description: asset.description,
            contentUrl: asset.href,
          })}
        />
      ))}

      <header className="max-w-4xl">
        <p className="eyebrow">Media kit / Brand &amp; press</p>
        <h1 className="mt-3 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">
          The brand, the story, <span className="text-gradient">the assets.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Everything a journalist, partner, or builder needs to represent Zabibu Technika
          accurately: the approved story, logos, icons, wallpapers, colours, type, licensing, and
          the official tune.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={mediaKitBundle.href}
            download
            className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Download the full kit ({mediaKitBundle.size}) <Download className="ml-2 size-4" />
          </a>
          <Link
            href="/assets"
            className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Open the asset library <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </header>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Fact sheet</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            The short version.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="bg-[#08080b] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{label}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <QuotableSummary cite="Zabibu Technika — approved boilerplate">
          Zabibu Technika is an AI and technology company based in Nairobi, Kenya. Founded in 2006
          as Grape Technologies, it builds sovereign, local-first software, edge AI models, and
          operating systems for Africa and the global South.
        </QuotableSummary>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Founder</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Tehillah Mwangada Kachila</h2>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
            Founder &amp; Lead Architect
          </p>
        </div>
        <p className="text-base leading-7 text-white/60">
          Tehillah Mwangada Kachila founded the studio in Nairobi in 2006 as Grape Technologies and
          leads its research and product work across local-first AI, edge inference, and sovereign
          operating systems. The through-line is a commitment to software that works for the
          conditions people actually live in.
        </p>
      </section>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Brand</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Logos and wordmarks.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brandAssets.map((asset) => (
            <AssetCard key={asset.href} asset={asset} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Icons</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            App icons and favicons.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {iconAssets.map((asset) => (
            <AssetCard key={asset.href} asset={asset} compact />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Products</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Product marks.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productAssets.map((asset) => (
            <AssetCard key={asset.href} asset={asset} compact />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Colour</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            The palette.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brandColors.map(([name, hex]) => (
            <div key={hex} className="rounded-xl border border-white/10 bg-[#08080b] p-4">
              <div className="h-14 rounded-lg border border-white/10" style={{ backgroundColor: hex }} />
              <p className="mt-3 text-sm font-semibold text-white">{name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">{hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Typography</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Outfit, with JetBrains Mono for labels.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-8">
            <p className="text-6xl font-black tracking-[-.06em] text-white">Aa</p>
            <h3 className="mt-5 text-xl font-bold text-white">Outfit</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              The primary typeface for headlines, body, and interface. Geometric, high-contrast,
              and set tight. Weights 300–900.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://fonts.google.com/specimen/Outfit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
              >
                Google Fonts <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href="/downloads/fonts/Outfit.ttf"
                download
                className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
              >
                Download TTF <Download className="size-3.5" />
              </a>
              <a
                href="/downloads/fonts/OFL.txt"
                download
                className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 hover:text-white"
              >
                OFL
              </a>
            </div>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-8">
            <p className="font-mono text-6xl tracking-[-.04em] text-white">Aa</p>
            <h3 className="mt-5 text-xl font-bold text-white">JetBrains Mono</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Technical labels, code, metadata, and the small uppercase system that anchors the
              interface.
            </p>
            <a
              href="https://fonts.google.com/specimen/JetBrains+Mono"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
            >
              Google Fonts <ArrowUpRight className="size-3.5" />
            </a>
          </article>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Wallpapers</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Take the atmosphere with you.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wallpaperDesigns.map((design) => (
            <WallpaperCard key={design.slug} design={design} />
          ))}
        </div>
      </section>

      <section id="tune" className="mt-14 scroll-mt-28">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow text-accent">The tune</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            The Zabibu Technika Tune.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {audioAssets.map((asset) => (
            <article key={asset.href} className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b887ff]">
                <Music className="size-4" /> Official audio
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{asset.title}</h3>
              <p className="mt-1 text-sm leading-6 text-white/55">{asset.description}</p>
              <audio controls preload="none" aria-label={asset.title} className="mt-4 w-full">
                <source src={asset.href} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
                  {asset.format} · {asset.size}
                </span>
                <a
                  href={asset.href}
                  download
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
                >
                  Download <Download className="size-3.5" />
                </a>
              </div>
              <p className="mt-3 text-[10px] leading-5 text-white/30">{asset.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Usage</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Keep the mark intact.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {usage.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#08080b] p-5">
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <FileArchive className="size-5 text-[#ffbf3f]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffbf3f]">Licensing &amp; press</p>
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Use the brand accurately. Ask before you co-brand.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">
          Brand assets are © Zabibu Technika. Press and editorial use is permitted with attribution
          and without implying endorsement. Zabibu Weaver is MIT; the Phosh.cpp open edition is MIT;
          Fikra models follow their model-card licenses; Fikra Edge Runtime is proprietary. Read the
          full <Link href="/licenses" className="text-[#b887ff] underline underline-offset-2">licensing notes</Link>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:zabibutechnika@gmail.com?subject=Press%20/%20Media%20kit"
            className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Press contact <ArrowUpRight className="ml-2 size-4" />
          </a>
          <a href={pressKit.href} download className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            Press kit PDF
          </a>
          <a href={investorKit.href} download className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            Investor kit PDF
          </a>
          <Link href="/assets" className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            All assets
          </Link>
        </div>
      </section>
    </PortalFrame>
  )
}
