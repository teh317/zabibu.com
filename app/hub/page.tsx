import { EcosystemHub } from '@/components/ecosystem-hub'
import { PortalFrame } from '@/components/portal-shell'
import { QuotableSummary } from '@/components/quotable-summary'
import { itemListSchema, JsonLd, breadcrumbSchema } from '@/lib/seo'

export default function Hub() {
  return (
    <PortalFrame className="py-10 md:py-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="aurora-blob absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#8b2cff]/20 blur-[120px]" />
        <div className="aurora-blob absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#00d5bf]/10 blur-[130px]" />
        <div className="aurora-blob absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-[#ffbf3f]/10 blur-[120px]" />
      </div>

      <div className="hub-shell relative z-10 p-5 md:p-10">
        <JsonLd data={itemListSchema()} />
        <JsonLd
          data={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Ecosystem Hub', path: '/hub' },
          ])}
        />
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
            <span className="pulse-dot" aria-hidden="true" /> Zabibu hub / sub-apps
          </span>
          <h1 className="mt-6 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">
            Choose a<br />
            <span className="text-gradient">system.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            The full ecosystem, organized by product surface: assistants and companions,
            operating systems and media, core systems and runtimes, and the Fikra model lineup.
          </p>
        </header>
        <div className="mb-10">
          <QuotableSummary cite="Zabibu Technika — product ecosystem">
            The Zabibu Technika ecosystem includes AI assistants, agentic tools, local-first
            operating systems, edge runtimes, testing tools, accessibility and sign-language
            engines, and the Fikra model lineup. Every product is designed in Nairobi, Kenya for
            real-world constraints.
          </QuotableSummary>
        </div>
        <EcosystemHub />
      </div>
    </PortalFrame>
  )
}
