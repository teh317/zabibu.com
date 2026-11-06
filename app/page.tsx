import Link from 'next/link'
import { ArrowUpRight, BrainCircuit, Cpu, HeartPulse, Layers } from 'lucide-react'
import { AmbientSlideshow } from '@/components/ambient-slideshow'

const pillars = [
  {
    tag: 'Cognition',
    title: 'Zabibu Arif',
    text: 'A Socratic workspace for thinking and drafting. Arif Agent is the autonomous execution layer behind it: code, growth, and business operations on one verified core.',
    href: 'https://zabibuarif.lovable.app',
    detail: '/arif',
    icon: BrainCircuit,
  },
  {
    tag: 'Operating layer',
    title: 'ZabibuOS',
    text: 'A local-first operating layer that treats software as the thing which adapts to the hardware, not the other way around.',
    href: 'https://zabibu.lovable.app',
    detail: '/zabibuos',
    icon: Cpu,
  },
  {
    tag: 'Models & runtime',
    title: 'Fikra Model 1 - 2B',
    text: 'Small, open reasoning weights for edge hardware. Fikra Edge Runtime is the proprietary sibling runtime for local agentic work.',
    href: 'https://zabibufikra.vercel.app',
    detail: '/fikra',
    icon: Layers,
  },
  {
    tag: 'Care',
    title: 'Ella',
    text: 'A private, encrypted journal for the inner life. No cloud, no extraction, and no account required to begin.',
    href: 'https://heyella.netlify.app',
    detail: '/ella',
    icon: HeartPulse,
  },
]

const principles = [
  ['01', 'Local-first', 'The network is optional. The work is not.'],
  ['02', 'Sovereign', 'Your data stays on your machine, under your control.'],
  ['03', 'Constraint-led', 'Designed for 4 GB, metered links, and real power cuts.'],
  ['04', 'Human in the loop', 'A person signs the receipt before the system claims done.'],
  ['05', 'Open where it matters', 'Open weights and open source where the commons benefits.'],
  ['06', 'No extraction', 'No telemetry by default. No account required to start.'],
]

const stats = [
  ['2006', 'Founded in Nairobi'],
  ['600+', 'Users across Arif & Ella'],
  ['20 yrs', 'Independent R&D'],
  ['01', 'Verified core'],
]

export default function Home() {
  return (
    <>
      <AmbientSlideshow />

      <main className="relative z-10">
        {/* Hero — the company argument */}
        <section className="hero-grid relative overflow-hidden px-5 py-24 md:px-10 md:py-36">
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col items-center justify-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 backdrop-blur-md">
              <span className="pulse-dot" aria-hidden="true" /> Nairobi, Kenya · Since 2006
            </span>
            <h1 className="mt-7 max-w-6xl text-balance text-6xl font-black leading-[.88] tracking-[-.08em] md:text-8xl lg:text-9xl">
              Tech should feel like <span className="text-gradient">home.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              Zabibu Technika is an independent research and technology company building
              sovereign, local-first software for the machines, networks, and languages people
              actually have.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/about" className="glow-button pill px-6 py-4 text-xs font-bold uppercase tracking-wider">
                Read our story <ArrowUpRight className="ml-2 size-4" />
              </Link>
              <Link href="#why" className="outline-button pill px-6 py-4 text-xs font-bold uppercase tracking-wider">
                Why we exist
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-9 gap-y-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
              <span>Founded 2006</span>
              <span>600+ users</span>
              <span>20 years of R&amp;D</span>
              <span>One verified core</span>
            </div>
          </div>
        </section>

        {/* Why we exist */}
        <section className="relative border-y border-white/10 bg-[#030305]/30 px-5 py-20 backdrop-blur-[1px] md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why we exist</p>
              <h2 className="mt-3 text-balance text-4xl font-black tracking-tight md:text-6xl">
                The future should feel like a place you recognize.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Most software is designed for a context that is not ours: fast fibre, the newest
                laptop, a card on file, and a model that speaks English first. For most of the
                world, that is not the condition.
              </p>
              <p>
                Zabibu Technika builds for the actual condition. Software that works offline.
                Models that fit a modest machine. Interfaces that respect local language, low
                bandwidth, and a power grid that is not guaranteed. Systems that keep the data
                with the person who made it.
              </p>
              <p>
                This is not a theme. It is a practice, carried from Grape Technologies in 2006 to
                the products shipping today.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-white"
              >
                Read the full story <ArrowUpRight className="size-4" />
              </Link>
            </div>
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-y border-white/10 bg-black/45 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="border-white/10 px-6 py-8 md:border-l md:first:border-l-0">
                <p className="text-4xl font-black tracking-[-.04em] text-white md:text-5xl">{value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we build — a compact pitch, not the hub */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">The practice</p>
              <h2 className="mt-3 text-balance text-4xl font-black tracking-tight md:text-6xl">
                Sovereign systems, <span className="text-gradient">shipped.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Four surfaces show the range: cognition, an operating layer, edge models, and
                care. Each one is built on the same verified core.
              </p>
            </div>
            <Link
              href="/hub"
              className="inline-flex shrink-0 items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-white"
            >
              See the full ecosystem <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="portal flex flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="tag">{pillar.tag}</span>
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">{pillar.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{pillar.text}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
                    <a
                      href={pillar.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:text-white"
                    >
                      Open system <ArrowUpRight className="size-3.5" />
                    </a>
                    <Link
                      href={pillar.detail}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white"
                    >
                      Product page
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* Principles */}
        <section className="border-y border-white/10 bg-black/45 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">How we build</p>
              <h2 className="mt-3 text-balance text-4xl font-black tracking-tight md:text-6xl">
                The principles are the product.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {principles.map(([num, title, text]) => (
                <article key={num} className="rounded-2xl border border-white/10 bg-[#08080b]/80 p-6 backdrop-blur-md">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-white/35">{num}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Founder quote */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="manifesto p-8 md:p-14">
            <p className="eyebrow text-accent">The through-line</p>
            <blockquote className="mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-white md:text-4xl">
              “Founded on curiosity. Driven by intelligence. Zabibu Technika is the evolution of
              a dream that began in 2006 — built not by consuming the leftovers of Silicon Valley,
              but through persistent research, deep discipline, and a commitment to software that
              breathes.”
            </blockquote>
            <div className="mt-8">
              <p className="text-base font-bold text-white">Tehillah Mwangada Kachila</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Founder &amp; Lead Architect, Zabibu Technika
              </p>
            </div>
            <Link
              href="/manifesto"
              className="glow-button pill mt-8 inline-flex px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Read the manifesto <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </div>
        </section>

        {/* Final pitch */}
        <section className="border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-5 py-20 text-center md:px-10 md:py-28">
            <p className="eyebrow justify-center">Build with us</p>
            <h2 className="mx-auto mt-3 max-w-4xl text-balance text-4xl font-black tracking-tight md:text-6xl">
              The future can be built <span className="text-gradient">from here.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Partnerships, licensing, investment, or a hard problem worth solving. The studio is
              open.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="glow-button pill px-6 py-4 text-xs font-bold uppercase tracking-wider">
                Talk to the studio <ArrowUpRight className="ml-2 size-4" />
              </Link>
              <Link href="/investors" className="outline-button pill px-6 py-4 text-xs font-bold uppercase tracking-wider">
                Investor brief
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
