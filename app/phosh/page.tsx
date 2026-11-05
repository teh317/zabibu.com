import Link from 'next/link'
import { ArrowUpRight, Boxes, Lock, Terminal } from 'lucide-react'
import { PortalFrame, SectionHeading } from '@/components/portal-shell'

const specs = [
  ['Open edition', 'Phosh client core, MIT throughout.'],
  ['Closed edition', 'Fikra Edge Runtime, proprietary pro/ modules under commercial agreement.'],
  ['Runtime', 'llama.cpp-compatible GGUF models, streaming sessions, persistence, and compaction.'],
  ['Deployment', 'Local kernel middleware for edge devices. No cloud in the loop.'],
] as const

export default function Phosh() {
  return (
    <PortalFrame>
      <SectionHeading
        eyebrow="Developers / Middleware"
        title={
          <>
            Phosh.cpp
            <br />
            <span className="text-gradient">the runtime adapter.</span>
          </>
        }
        copy="A local kernel middleware adapter built atop llama.cpp. One source tree, two editions: the open Phosh client and the proprietary Fikra Edge Runtime."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {specs.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#08080b] p-5">
            <Boxes className="size-5 text-[#b887ff]" />
            <h2 className="mt-5 text-lg font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
          </article>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="tag">MIT + PRO</span>
          <span className="tag">llama.cpp</span>
          <span className="tag">Edge</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">Same core. Two names.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">
          Phosh is the open product. Fikra Edge Runtime is the closed one. The client core is
          identical in both; every commercial module lives behind the runtime edition, so the
          two never drift apart through copy-paste.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:zabibutechnika@gmail.com?subject=Phosh.cpp%20/%20Fikra%20Edge%20Runtime"
            className="glow-button px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Request runtime access <ArrowUpRight className="ml-2 size-4" />
          </a>
          <Link
            href="/fikra"
            className="outline-button px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Fikra Model 1 - 2B
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
          <Terminal className="size-5 text-[#00d5bf]" />
          <h3 className="mt-4 text-lg font-bold text-white">Client surface</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">
            Sessions, streaming, persistence, and compaction work end to end against the
            runtime&apos;s deterministic mock engine. No model file is required to start.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
          <Lock className="size-5 text-[#ffbf3f]" />
          <h3 className="mt-4 text-lg font-bold text-white">Licensing</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">
            The open client is MIT. The proprietary edition is distributed under a commercial
            agreement. The differentiation lives in <code className="text-[#b887ff]">pro/</code>, not in hidden code.
          </p>
        </div>
      </section>
    </PortalFrame>
  )
}
