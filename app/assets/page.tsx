import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BookOpen, Download, FileArchive, FileText, Music } from 'lucide-react'
import { AssetCard } from '@/components/asset-card'
import { WallpaperCard } from '@/components/wallpaper-card'
import { PortalFrame } from '@/components/portal-shell'
import { siteUrl } from '@/lib/discoverability'
import {
  assetGroups,
  audioAssets,
  investorKit,
  kitAssets,
  mediaKitBundle,
  pressKit,
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
  'Assets — Logos, Icons, Kits & Merch',
  'The Zabibu Technika asset library: media kit, press kit, investor kit, logos, icons, product marks, product social cards, badges, stickers, animated GIFs, social banners, wallpapers, fonts, and the official tune.',
  '/assets'
)

const sections = assetGroups.filter((group) => group.id !== 'kits')
const allAssets = assetGroups.flatMap((group) => group.items)

const kitIcons = {
  zip: FileArchive,
  pdf: FileText,
  html: BookOpen,
}

export default function AssetsPage() {
  return (
    <PortalFrame>
      <JsonLd
        data={webPageSchema({
          name: 'Zabibu Technika assets',
          description:
            'Media kit, press kit, investor kit, logos, icons, product marks, social cards, badges, stickers, animated GIFs, banners, wallpapers, fonts, and the official tune.',
          path: '/assets',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Assets', path: '/assets' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Zabibu Technika asset library',
          numberOfItems: allAssets.length,
          itemListElement: allAssets.map((asset, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'CreativeWork',
              name: asset.title,
              description: asset.description,
              contentUrl: `${siteUrl}${asset.href}`,
              encodingFormat: asset.format,
            },
          })),
        }}
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
        <p className="eyebrow">Assets</p>
        <h1 className="mt-3 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">
          Everything we make, <span className="text-gradient">ready to use.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Media kit, press kit, investor kit, logos, icons, product marks, social cards, badges,
          stickers, animated GIFs, banners, wallpapers, fonts, and the official tune — in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={mediaKitBundle.href}
            download
            className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Download everything ({mediaKitBundle.size}) <Download className="ml-2 size-4" />
          </a>
          <Link href="/media-kit" className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            Open the media kit <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </header>

      <nav className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-y border-white/10 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50" aria-label="Asset categories">
        <a href="#kits" className="hover:text-white">Kits</a>
        <a href="#brand" className="hover:text-white">Brand</a>
        <a href="#icons" className="hover:text-white">Icons</a>
        <a href="#products" className="hover:text-white">Product marks</a>
        <a href="#product-cards" className="hover:text-white">Social cards</a>
        <a href="#social" className="hover:text-white">Banners</a>
        <a href="#badges" className="hover:text-white">Badges</a>
        <a href="#stickers" className="hover:text-white">Stickers</a>
        <a href="#gifs" className="hover:text-white">GIFs</a>
        <a href="#wallpapers" className="hover:text-white">Wallpapers</a>
        <a href="#audio" className="hover:text-white">Tune</a>
        <a href="#type" className="hover:text-white">Fonts</a>
      </nav>

      <section id="kits" className="mt-14 scroll-mt-28">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="eyebrow">Start here</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Media, press, and investor kits.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col rounded-2xl border border-white/10 bg-[#08080b] p-6">
            <BookOpen className="size-5 text-[#b887ff]" />
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">HTML · Media kit</p>
            <h3 className="mt-1 text-lg font-bold text-white">Media kit</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Fact sheet, boilerplate, logos, colours, type, usage rules, wallpapers, and the tune.
            </p>
            <Link href="/media-kit" className="mt-auto inline-flex items-center gap-1.5 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white">
              Open media kit <ArrowUpRight className="size-3.5" />
            </Link>
          </article>
          {kitAssets.map((asset) => {
            const Icon = asset.format === 'ZIP' ? kitIcons.zip : kitIcons.pdf
            return (
              <article key={asset.href} className="flex flex-col rounded-2xl border border-white/10 bg-[#08080b] p-6">
                <Icon className="size-5 text-[#ffbf3f]" />
                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
                  {asset.format} · {asset.dimensions ?? asset.size}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{asset.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{asset.description}</p>
                <a
                  href={asset.href}
                  download
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
                >
                  Download <Download className="size-3.5" />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      {sections.map((group) => (
        <section key={group.id} id={group.id} className="mt-14 scroll-mt-28">
          <div className="mb-4 border-b border-white/10 pb-3">
            <p className="eyebrow">{group.eyebrow}</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">{group.title}</h2>
          </div>
          {group.id === 'audio' ? (
            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((asset) => (
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
                    <a href={asset.href} download className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white">
                      Download <Download className="size-3.5" />
                    </a>
                  </div>
                  <p className="mt-3 text-[10px] leading-5 text-white/30">{asset.note}</p>
                </article>
              ))}
            </div>
          ) : group.id === 'wallpapers' ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {wallpaperDesigns.map((design) => (
                <WallpaperCard key={design.slug} design={design} />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((asset) => (
                <AssetCard key={asset.href} asset={asset} compact={group.id === 'icons' || group.id === 'products' || group.id === 'badges'} />
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="mt-14 rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <FileArchive className="size-5 text-[#ffbf3f]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffbf3f]">Usage &amp; licensing</p>
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Use the assets accurately.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">
          Brand assets are © Zabibu Technika. Press and editorial use is permitted with attribution
          and without implying endorsement. Do not distort, recolour, or crop the wordmark. For
          commercial co-branding, contact the studio. Read the full{' '}
          <Link href="/licenses" className="text-[#b887ff] underline underline-offset-2">licensing notes</Link>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:zabibutechnika@gmail.com?subject=Brand%20assets%20/%20licensing"
            className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Ask about licensing <ArrowUpRight className="ml-2 size-4" />
          </a>
          <Link href="/media-kit" className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            Media kit
          </Link>
          <a href={pressKit.href} download className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            Press kit PDF
          </a>
          <a href={investorKit.href} download className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            Investor kit PDF
          </a>
        </div>
      </section>
    </PortalFrame>
  )
}
