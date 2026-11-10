import { PortalFrame } from '@/components/portal-shell'
import { breadcrumbSchema, JsonLd } from '@/lib/seo'

export function LegalPage({
  eyebrow,
  title,
  updated,
  path,
  description,
  schema,
  children,
}: {
  eyebrow: string
  title: string
  updated: string
  path: string
  description: string
  schema: unknown
  children: React.ReactNode
}) {
  return (
    <PortalFrame>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: title, path }])} />
      <header className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-balance text-4xl font-black tracking-[-.05em] md:text-6xl">{title}</h1>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
          Last updated: {updated}
        </p>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>
      </header>
      <div className="mt-10 max-w-3xl space-y-8 text-base leading-8 text-white/60">{children}</div>
    </PortalFrame>
  )
}
