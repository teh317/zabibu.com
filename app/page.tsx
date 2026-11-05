import { ArrowUpRight } from 'lucide-react'
import { EcosystemHub } from '@/components/ecosystem-hub'
import { PortalFrame } from '@/components/portal-shell'

export default function Home() {
  return (
    <PortalFrame className="py-10 md:py-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#8b2cff]/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#00d5bf]/10 blur-[130px]" />
        <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-[#ffbf3f]/10 blur-[120px]" />
      </div>

      <div className="hub-shell relative z-10 p-5 md:p-10">
        <header className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
            <span className="pulse-dot" aria-hidden="true" /> Zabibu Technika / Product ecosystem
          </span>
          <h1 className="mt-6 text-balance text-5xl font-black tracking-[-.06em] md:text-8xl">
            The stack,
            <br />
            <span className="text-gradient">categorized.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            Flagship surfaces, system architecture, open infrastructure, and experimental media.
            One Nairobi-rooted studio. Choose the system that meets you where you are.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#ecosystem"
              className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Explore the ecosystem <ArrowUpRight className="ml-2 size-4" />
            </a>
            <a
              href="mailto:zabibutechnika@gmail.com"
              className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Talk to the studio
            </a>
          </div>
        </header>

        <div id="ecosystem" className="mt-14">
          <EcosystemHub />
        </div>

        <section className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Direct line</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Partnerships, licensing, recruitment, and press route directly to the studio.
            </p>
          </div>
          <a
            href="mailto:zabibutechnika@gmail.com"
            className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            zabibutechnika@gmail.com <ArrowUpRight className="ml-2 size-4" />
          </a>
        </section>
      </div>
    </PortalFrame>
  )
}
