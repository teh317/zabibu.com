'use client'

import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Cpu, Globe, Users, Sparkles, Terminal, HeartHandshake } from 'lucide-react'
import { PortalFrame } from '@/components/portal-shell'

const pillars = [
  {
    title: 'Sovereign Edge Computing',
    desc: 'Compute must live on the hardware people own. We build models and pipelines optimized for local execution on edge hardware, bypassing expensive cloud APIs and remote data lock-in.',
    icon: Cpu,
  },
  {
    title: 'Low-Bandwidth Resilience',
    desc: 'Software must be built for the real-world conditions of rural networks, variable 3G/4G connectivity, and expensive data bundles. Efficiency is a core civil right.',
    icon: Globe,
  },
  {
    title: 'Zero Telemetry Privacy',
    desc: 'Your thoughts, journals, and analytical workflows belong strictly to you. Our tools utilize client-side encryption and local processing with zero third-party tracking pixels.',
    icon: ShieldCheck,
  },
]

const certifiedPillars = [
  'Open-Source Builders & Systems Engineers',
  'Local AI/ML Researchers & Edge Quantization Specialists',
  'UI/UX Designers Focused on Low-Latency Human Interfaces',
  'Community Advocates for Sovereign Digital Rights in Africa',
]

export default function Manifesto() {
  return (
    <PortalFrame backgroundImage="/images/fikra.png">
      <main className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        {/* Header / Hero */}
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/20 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
            <Sparkles className="size-4" /> Zabibu Technika / Philosophy
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            The Sovereign Computing Manifesto
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Building independent, sharp, and privacy-respecting technology for the next generation of African makers.
          </p>
        </div>

        {/* The Core Declaration */}
        <div className="mt-12 rounded-2xl border border-amber-500/30 bg-black/40 p-8 md:p-10 backdrop-blur-md">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-4">
            Declaration 001 / Sovereign Intent
          </div>
          <blockquote className="text-lg md:text-xl font-medium leading-9 text-amber-100 italic">
            &ldquo;We reject the premise that Africa must remain a passive consumer of distant cloud servers, data-harvesting algorithms, and rent-seeking API subscriptions. We build for the conditions we know.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm leading-7 text-white/70">
            Technology in Africa must be resilient, localized, and self-sustaining. True sovereign computing means that a rural school, an independent entrepreneur in Nairobi, or a software engineer in Lagos can access state-of-the-art analytical intelligence and tools without needing constant high-speed fiber or giving up their private data.
          </p>
        </div>

        {/* The Three Pillars */}
        <section className="mt-16">
          <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
            01 / Core Engineering Principles
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ title, desc, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-6">
                <Icon className="size-6 text-amber-400" />
                <h2 className="mt-5 text-lg font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/60">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Zabibu Technika Certified Team Section */}
        <section className="mt-16 rounded-2xl border border-amber-500/30 bg-amber-950/30 p-8 md:p-10">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-2">
            <Users className="size-4" /> 02 / The Movement
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Zabibu Technika Certified Team
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
            The Certified Team is an alliance of developers, researchers, and creators dedicated to forging a sovereign digital future for Africa. Members contribute code, optimize quantized models, deploy low-bandwidth nodes, and build local privacy tools.
          </p>

          <div className="mt-8 rounded-xl border border-amber-500/20 bg-black/40 p-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">
              Who We Are Looking For
            </span>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {certifiedPillars.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                  <HeartHandshake className="size-4 shrink-0 text-amber-400 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/zabibutechnika"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center gap-2 bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black rounded-lg transition-all"
            >
              Join the Movement <ArrowUpRight className="size-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-amber-500/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-500/10 transition-colors rounded-lg"
            >
              Contact Certified Team <Terminal className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </PortalFrame>
  )
}
