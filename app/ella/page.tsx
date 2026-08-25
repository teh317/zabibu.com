'use client'

import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Check, Heart, LockKeyhole, PenLine, Flame, Sparkles, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { PortalFrame } from '@/components/portal-shell'

const features = [
  ['Client-Side Encryption', 'Journal entries are encrypted locally before saving. Passkeys never leave your browser instance.', LockKeyhole],
  ['Guided Introspective Prompts', 'Adaptive mood tracking and gentle writing prompts to help unpack daily experiences.', PenLine],
  ['Zero Third-Party Telemetry', 'Built without tracking pixels, session recording tools, or ad networks.', Check],
] as const

export default function Ella() {
  const [saved, setSaved] = useState(false)
  const [unsentMessage, setUnsentMessage] = useState('')
  const [isBurning, setIsBurning] = useState(false)
  const [isBurned, setIsBurned] = useState(false)

  const handleBurn = () => {
    if (!unsentMessage.trim()) return
    setIsBurning(true)
    setTimeout(() => {
      setUnsentMessage('')
      setIsBurning(false)
      setIsBurned(true)
    }, 1800)
  }

  const handleReset = () => {
    setIsBurned(false)
    setUnsentMessage('')
  }

  return (
    <PortalFrame backgroundImage="/images/ella.png">
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/20 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400">
              <Heart className="size-4" /> Care / privacy
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">Ella</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Ella is a journaling app designed to guide users through thoughtful reflections on their daily experiences, emotions, and moods.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              An encrypted companion for tending to your inner world, featuring local storage and guided introspective prompts that keep your thoughts entirely private.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://heyella.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button inline-flex items-center gap-2 bg-rose-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white font-semibold"
              >
                Open Private Journal <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#burn-box"
                className="inline-flex items-center gap-2 border border-rose-500/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-rose-400 hover:bg-rose-500/10 transition-colors"
              >
                Unsent Message Box <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-rose-500/30 bg-rose-950/20 shadow-[0_30px_100px_rgba(244,63,94,.16)]">
            <Image
              src="/images/ella.png"
              alt="Ella journaling interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>

        {/* Terminal Scratchpad Snippet */}
        <div className="mt-12 rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6">
          <div className="flex justify-between font-mono text-xs text-white/60 mb-2">
            <span>ella@zabibu:~$ private_scratchpad</span>
            <span className="text-rose-400/80 font-mono text-[10px] uppercase">Encrypted Locally</span>
          </div>
          <textarea
            id="entry"
            className="mt-3 min-h-32 w-full resize-none bg-black/25 p-4 text-sm leading-7 text-white outline-none ring-1 ring-white/10 focus:ring-rose-500/60 rounded-xl"
            placeholder="Start anywhere..."
          />
          <button
            onClick={() => {
              setSaved(true)
              setTimeout(() => setSaved(false), 3000)
            }}
            className="glow-button mt-4 bg-rose-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white rounded-lg"
          >
            {saved ? 'Saved privately to device' : 'Save reflection'}
          </button>
        </div>

        {/* Care Matrix Section */}
        <section id="specs" className="mt-20">
          <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-rose-400">
            01 / Care matrix
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map(([title, desc, Icon]) => (
              <article key={title} className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6">
                <Icon className="size-5 text-rose-400" />
                <h2 className="mt-6 text-lg font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* The Unsent Message (Burn Box) Section */}
        <section id="burn-box" className="mt-20 rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6 md:p-10">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-rose-400">
            02 / Emotional Catharsis Tool
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">The Unsent Message Box</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
            Write down a thought, frustration, or unspoken word you are carrying today. Once released, your message is instantly dissolved and purged from browser memory forever.
          </p>

          <div className="mt-8 rounded-xl border border-rose-500/20 bg-black/40 p-6">
            {!isBurned ? (
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-rose-400 mb-3">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider">
                    <Flame className="size-3.5" /> Confidential Release Box
                  </span>
                  <span className="text-[10px] text-white/40">Zero Telemetry • Client-Only</span>
                </div>

                <div className="relative">
                  <textarea
                    value={unsentMessage}
                    onChange={(e) => setUnsentMessage(e.target.value)}
                    disabled={isBurning}
                    placeholder="Type the message you'll never send..."
                    className={`min-h-40 w-full resize-none rounded-xl bg-black/40 p-4 text-sm leading-7 text-rose-100 outline-none ring-1 ring-white/10 focus:ring-rose-500/60 transition-all duration-1000 ${
                      isBurning ? 'opacity-0 scale-95 blur-md filter' : 'opacity-100 scale-100 blur-0'
                    }`}
                  />

                  {isBurning && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-rose-400 animate-pulse">
                      <Sparkles className="size-8 text-rose-400 animate-spin" />
                      <span className="font-mono text-xs uppercase tracking-widest text-rose-200">
                        Dissolving & Purging Memory...
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-[10px] text-white/40">
                    * Nothing is transmitted or saved anywhere.
                  </span>
                  <button
                    onClick={handleBurn}
                    disabled={!unsentMessage.trim() || isBurning}
                    className="glow-button inline-flex items-center gap-2 bg-rose-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white disabled:opacity-40 rounded-lg transition-all"
                  >
                    <Flame className="size-4" /> Release & Burn Message
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400">
                  <Check className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Your message has been dissolved.</h3>
                <p className="max-w-md mx-auto text-xs leading-6 text-white/60">
                  The weight is off your mind and completely purged from memory. Take a deep breath and carry on with your day.
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 border border-rose-500/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-rose-400 hover:bg-rose-500/10 transition-colors rounded-lg mt-2"
                >
                  <RefreshCw className="size-3.5" /> Write Another Message
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </PortalFrame>
  )
}
