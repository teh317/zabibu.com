import { Download } from 'lucide-react'
import type { MediaAsset } from '@/lib/media'

const imageFormats = new Set(['PNG', 'SVG', 'JPG', 'WEBP', 'GIF'])

export function AssetCard({ asset, compact = false }: { asset: MediaAsset; compact?: boolean }) {
  const isImage = imageFormats.has(asset.format) && asset.preview

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#08080b] p-5 transition-colors hover:border-[#8b2cff]/40">
      {isImage ? (
        <div className={`mb-4 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 ${asset.previewBg === 'light' ? 'bg-white' : 'bg-white/[0.03]'} ${compact ? 'min-h-20 p-4' : 'min-h-32 p-6'}`}>
          <img
            src={asset.preview}
            alt={asset.title}
            loading="lazy"
            className={`${compact ? 'max-h-12' : 'max-h-24'} w-auto max-w-full object-contain`}
          />
        </div>
      ) : (
        <div className="mb-4 flex min-h-20 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
          {asset.format}
        </div>
      )}
      <h3 className="text-base font-bold text-white">{asset.title}</h3>
      <p className="mt-1 text-sm leading-6 text-white/55">{asset.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
        <span>
          {asset.format}
          {asset.dimensions ? ` · ${asset.dimensions}` : ''}
        </span>
        <span>{asset.size}</span>
      </div>
      <a
        href={asset.href}
        download
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] transition-colors hover:text-white"
      >
        Download <Download className="size-3.5" />
      </a>
      {asset.note && <p className="mt-2 text-[10px] leading-5 text-white/30">{asset.note}</p>}
    </article>
  )
}
