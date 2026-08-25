'use client'

import Link from 'next/link'
import {
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Globe,
  Users,
  Sparkles,
  Terminal,
  HeartHandshake,
  Send,
  CheckCircle2,
  Lock,
  Zap,
  PenTool
} from 'lucide-react'
import { useState } from 'react'
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
  'Investors & Allies Committed to Sovereign Digital Infrastructure',
]

export default function Manifesto() {
  // State for the interactive Pledge Generator
  const [pledgeName, setPledgeName] = useState('')
  const [pledged, setPledged] = useState(false)

  // State for the Emailing System
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Investor / Strategic Partner')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!pledgeName.trim()) return
    setPledged(true)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return
    setLoading(true)

    // Constructs mailto directly to Zabibu Technica's core address
    const subject = encodeURIComponent(`[Sovereign Movement] ${role} Inquiry - ${email}`)
    const body = encodeURIComponent(`Role: ${role}\nSender Email: ${email}\n\nDispatch Message:\n${message}`)
    
    setTimeout(() => {
      window.location.href = `mailto:zabibutechnika@gmail.com?subject=${subject}&body=${body}`
      setLoading(false)
      setSent(true)
    }, 600)
  }

  return (
    <PortalFrame backgroundImage="/images/fikra.png">
      <main className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        {/* Header / Hero */}
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/20 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
            <Sparkles className="size-4" /> Zabibu Technica / Philosophy
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

        {/* Interactive Pledge Generator (Motivating Section) */}
        <section className="mt-16 rounded-2xl border border-amber-500/30 bg-black/40 p-8 md:p-10">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-2">
            <PenTool className="size-4" /> 02 / The Sovereign Pledge
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Sign the Oath of Digital Autonomy
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
            Add your identity or handle to the collective agreement. We commit to writing software that runs locally, respects user privacy, and survives network failure.
          </p>

          {!pledged ? (
            <form onSubmit={handlePledgeSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your name or handle (e.g., @nairobi_builder)"
                value={pledgeName}
                onChange={(e) => setPledgeName(e.target.value)}
                className="flex-1 rounded-xl border border-amber-500/30 bg-amber-950/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button
                type="submit"
                disabled={!pledgeName.trim()}
                className="glow-button inline-flex items-center justify-center gap-2 bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black rounded-xl disabled:opacity-40"
              >
                Sign Manifesto <Zap className="size-4" />
              </button>
            </form>
          ) : (
            <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-950/30 p-6 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
                  <CheckCircle2 className="size-4" /> Verified Sovereign Signatory
                </div>
                <div className="mt-2 text-xl font-bold text-white">{pledgeName}</div>
                <div className="mt-1 font-mono text-[10px] text-white/50">
                  TOKEN: #ZT-SOVEREIGN-{Math.floor(1000 + Math.random() * 9000)} • LOCATION: NAIROBI / GLOBAL EDGE
                </div>
              </div>
              <button
                onClick={() => setPledged(false)}
                className="text-xs font-mono uppercase text-amber-400/80 hover:underline"
              >
                Sign as someone else
              </button>
            </div>
          )}
        </section>

        {/* Zabibu Technika Certified Team Section */}
        <section className="mt-16 rounded-2xl border border-amber-500/30 bg-amber-950/30 p-8 md:p-10">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-2">
            <Users className="size-4" /> 03 / The Alliance
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Zabibu Technika Certified Team
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
            The Certified Team is an alliance of developers, researchers, investors, and creators dedicated to forging a sovereign digital future for Africa.
          </p>

          <div className="mt-8 rounded-xl border border-amber-500/20 bg-black/40 p-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">
              Who Belongs Here
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
        </section>

        {/* Investor & Contributor Contact Dispatch (Direct Email Terminal) */}
        <section id="contact-dispatch" className="mt-16 rounded-2xl border border-amber-500/30 bg-black/50 p-8 md:p-10">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-2">
            <Terminal className="size-4" /> 04 / Direct Dispatch
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Partner With Zabibu Technica
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
            Whether you are an investor seeking to capitalize sovereign African computing or a builder ready to ship open weights, transmit your dispatch directly to our core studio team.
          </p>

          {!sent ? (
            <form onSubmit={handleEmailSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="investor@fund.africa or builder@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-amber-500/20 bg-amber-950/10 p-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-2">
                    Your Capacity
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-xl border border-amber-500/20 bg-amber-950/20 p-3.5 text-sm text-white outline-none focus:border-amber-400"
                  >
                    <option value="Investor / Strategic Partner" className="bg-black text-white">Investor / Strategic Partner</option>
                    <option value="Systems Engineer / Researcher" className="bg-black text-white">Systems Engineer / AI Researcher</option>
                    <option value="Community / Ecosystem Ally" className="bg-black text-white">Community / Ecosystem Ally</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-2">
                  Dispatch Note
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your proposal, thesis, or engineering alignment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-amber-500/20 bg-amber-950/10 p-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                  <Lock className="size-3 text-amber-400" /> Direct encrypted route to zabibutechnika@gmail.com
                </span>
                <button
                  type="submit"
                  disabled={loading || !email || !message}
                  className="glow-button inline-flex items-center gap-2 bg-amber-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black rounded-xl disabled:opacity-40"
                >
                  {loading ? 'Preparing Route...' : 'Transmit Dispatch'} <Send className="size-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-950/20 p-6 text-center space-y-3">
              <CheckCircle2 className="size-8 text-amber-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Dispatch Prepared</h3>
              <p className="text-xs text-white/60 max-w-md mx-auto">
                Your mail client has been opened with the route to <span className="text-amber-400">zabibutechnika@gmail.com</span>. Once sent, our core studio will respond within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="font-mono text-[11px] text-amber-400 uppercase tracking-wider hover:underline pt-2 block mx-auto"
              >
                Send Another Dispatch
              </button>
            </div>
          )}
        </section>
      </main>
    </PortalFrame>
  )
}
