import { Download } from 'lucide-react'
import type { WallpaperDesign } from '@/lib/media'

export function WallpaperCard({ design }: { design: WallpaperDesign }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#08080b] transition-colors hover:border-[#8b2cff]/40">
      <a href={design.desktop.href} download className="block bg-white/[0.03]">
        <img
          src={design.desktop.preview}
          alt={`${design.title} wallpaper`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-white">{design.title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/55">{design.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em]">
          <a
            href={design.desktop.href}
            download
            className="inline-flex items-center gap-1.5 text-[#ffbf3f] transition-colors hover:text-white"
          >
            Desktop <span className="font-medium text-white/40">4K</span>
            <Download className="size-3.5" />
          </a>
          <a
            href={design.mobile.href}
            download
            className="inline-flex items-center gap-1.5 text-[#ffbf3f] transition-colors hover:text-white"
          >
            Mobile <span className="font-medium text-white/40">1440</span>
            <Download className="size-3.5" />
          </a>
        </div>
        <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
          JPG · 3840 × 2160 / 1440 × 3120 · {design.desktop.size} / {design.mobile.size}
        </p>
      </div>
    </article>
  )
}
