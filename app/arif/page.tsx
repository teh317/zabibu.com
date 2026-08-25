'use client'

import Image from 'next/image'
import { ArrowDown, ArrowUpRight, BrainCircuit, Sparkles, WifiOff } from 'lucide-react'
import { PortalFrame } from '@/components/portal-shell'

const features = [
  ['Socratic Mode & Dialogue', 'Reconstructs incoming queries through probing questions to discover latent intent before executing complex tasks.', BrainCircuit],
  ['Edge Token Efficiency', 'Optimized context-window compaction enabling complex inference pipelines over low-bandwidth rural networks.', WifiOff],
  ['Zero Telemetry Privacy', 'Conversational history remains local to the user client with local key derivation for session encryption.', Sparkles],
] as const

export default function Arif() {
  return (
    <PortalFrame backgroundImage="/images/arif.png">
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-400/10 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400"><Sparkles className="size-4" /> Flagship / Cognition</div>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">Zabibu Arif <span className="text-amber-400">✨</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">Zabibu Arif is an intelligent companion powered by Fikra Engine, combining advanced conversational intelligence with thoughtful, human-centered interactions.</p>
            <p className="mt-5 max-w-2xl leading-7 text-white/55">Equipped with an interactive Socratic mode, Arif engages in diagnostic dialogue to probe the core intention underneath your queries, maintaining high-context reasoning without transmitting private state off-device.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="https://zabibuarif.lovable.app" target="_blank" rel="noopener noreferrer" className="glow-button inline-flex items-center gap-2 bg-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black">Launch Arif Engine <ArrowUpRight className="size-4" /></a><a href="#specs" className="inline-flex items-center gap-2 border border-amber-500/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-amber-400">Explore specs <ArrowDown className="size-4" /></a></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-amber-500/30 bg-amber-950/20 shadow-[0_30px_100px_rgba(245,158,11,.18)]"><Image src="/images/arif.png" alt="Zabibu Arif interface" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" /></div>
        </div>
        <section id="specs" className="mt-20"><div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">01 / System matrix</div><div className="grid gap-4 md:grid-cols-3">{features.map(([title, desc, Icon]) => <article key={title} className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6"><Icon className="size-5 text-amber-400" /><h2 className="mt-6 text-lg font-bold text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-white/55">{desc}</p></article>)}</div></section>
      </main>
    </PortalFrame>
  )
}
