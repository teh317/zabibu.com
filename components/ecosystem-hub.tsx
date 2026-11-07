import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { catalogSections, type HubItem } from '@/lib/catalog'

function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith('mailto:')
}

function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (isExternal(href)) {
    const opensWindow = href.startsWith('http')
    return (
      <a
        href={href}
        className={className}
        {...(opensWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function HubCard({ item }: { item: HubItem }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 transition-colors hover:border-[#8b2cff]/50 hover:shadow-[0_0_30px_rgba(139,44,255,.08)]">
      <div className="flex items-start justify-between gap-3">
        <span className="tag whitespace-nowrap">{item.label}</span>
        {item.meta && (
          <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">{item.meta}</span>
        )}
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-white md:text-2xl">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        {item.href ? (
          <SmartLink
            href={item.href}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] transition-colors hover:text-white"
          >
            Open {item.title} <ArrowUpRight className="size-3.5" />
          </SmartLink>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">No public link yet</span>
        )}
      </div>
    </article>
  )
}

export function EcosystemHub() {
  return (
    <div className="space-y-14">
      {catalogSections.map((section) => (
        <section key={section.number} aria-labelledby={`hub-section-${section.number}`}>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">
                Section {section.number}
              </span>
              <h2 id={`hub-section-${section.number}`} className="text-xl font-bold tracking-tight text-white md:text-2xl">
                {section.title}
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">{section.note}</span>
          </div>
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${section.grid}`}>
            {section.items.map((item) => (
              <HubCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
