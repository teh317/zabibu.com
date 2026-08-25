'use client'

import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Radio, RadioTower, Signal, Copy, Check, HardDrive, Clock, Flame } from 'lucide-react'
import { useState } from 'react'
import { PortalFrame } from '@/components/portal-shell'

const features = [
  ['Instant Zero-Login Access', 'No signups, accounts, or payment forms required. Select a channel and begin playing instantly.', Radio],
  ['Global Content Index', 'Curated live television feeds, independent creators, and local broadcasts unified under one open portal.', RadioTower],
  ['Low-Bandwidth Transcoding', 'Adaptive bitrate delivery profiles engineered for seamless playback across variable mobile networks.', Signal],
] as const

const connectionProfiles = [
  { name: '2G / EDGE Network', speed: 'Low Speed', bitrateMbPerHour: 120, siganaBitrateMbPerHour: 45 },
  { name: '3G Mobile Data', speed: 'Moderate Speed', bitrateMbPerHour: 600, siganaBitrateMbPerHour: 150 },
  { name: '4G LTE / Bundle', speed: 'High Speed', bitrateMbPerHour: 1500, siganaBitrateMbPerHour: 300 },
  { name: 'Fiber / Wi-Fi', speed: 'Uncapped', bitrateMbPerHour: 3000, siganaBitrateMbPerHour: 600 },
]

export default function Sigana() {
  const [copied, setCopied] = useState(false)
  const [dataBundleMb, setDataBundleMb] = useState(1000) // Default 1GB
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(1) // Default 3G

  const code = 'curl -s https://sigana.lovable.app/api/v1/stream?channel=live | mpv -'
  const activeProfile = connectionProfiles[selectedProfileIndex]

  // Math Calculations for Watch Time (Hours)
  const standardHours = (dataBundleMb / activeProfile.bitrateMbPerHour).toFixed(1)
  const siganaHours = (dataBundleMb / activeProfile.siganaBitrateMbPerHour).toFixed(1)
  const hoursSavedMultiplier = (activeProfile.bitrateMbPerHour / activeProfile.siganaBitrateMbPerHour).toFixed(1)

  return (
    <PortalFrame backgroundImage="/images/sigana.png">
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              <Radio className="size-4" /> Media / community
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">Sigana</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Premium TV and streaming service. 100% free! No subs, no login, just some of your favorite shows and channels from across the world!
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              A community-first streaming network delivering global television, local African storytelling, and independent channels without paywalls or friction.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://sigana.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button inline-flex items-center gap-2 bg-emerald-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black font-semibold"
              >
                Start Streaming Now <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 border border-emerald-500/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-500/10 transition-colors"
              >
                Data Calculator <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-500/30 bg-emerald-950/20 shadow-[0_30px_100px_rgba(16,185,129,.16)]">
            <Image
              src="/images/sigana.png"
              alt="Sigana streaming interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>

        {/* Terminal Code Snippet Block */}
        <div className="mt-12 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
          <div className="flex justify-between font-mono text-xs text-white/60">
            <span>sigana@zabibu:~$ stream_pipe</span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(code)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              aria-label="Copy example"
            >
              {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
            </button>
          </div>
          <pre className="mt-6 whitespace-pre-wrap text-sm leading-8 text-emerald-200">{code}</pre>
        </div>

        {/* Broadcast Matrix Section */}
        <section id="specs" className="mt-20">
          <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
            01 / Broadcast matrix
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map(([title, desc, Icon]) => (
              <article key={title} className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
                <Icon className="size-5 text-emerald-400" />
                <h2 className="mt-6 text-lg font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Data & Airtime Saver Calculator Section */}
        <section id="calculator" className="mt-20 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 md:p-10">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
            02 / Bandwidth Estimator
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Data & Airtime Saver Calculator</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
            Compare standard commercial video streaming data consumption against Sigana&apos;s adaptive low-bandwidth transcoding engine.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Input Controls */}
            <div className="space-y-6">
              {/* Bundle Size Slider */}
              <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-5">
                <div className="flex items-center justify-between font-mono text-xs text-emerald-400 mb-3">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider">
                    <HardDrive className="size-3.5" /> Mobile Bundle Size
                  </span>
                  <span className="text-base font-bold text-white">{dataBundleMb} MB</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="5000"
                  step="250"
                  value={dataBundleMb}
                  onChange={(e) => setDataBundleMb(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="mt-2 flex justify-between font-mono text-[10px] text-white/40">
                  <span>250 MB</span>
                  <span>1.5 GB</span>
                  <span>3.0 GB</span>
                  <span>5.0 GB</span>
                </div>
              </div>

              {/* Connection Profile Buttons */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  Target Mobile Network Profile
                </label>
                <div className="grid gap-2">
                  {connectionProfiles.map((profile, idx) => (
                    <button
                      key={profile.name}
                      onClick={() => setSelectedProfileIndex(idx)}
                      className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
                        selectedProfileIndex === idx
                          ? 'border-emerald-500 bg-emerald-500/20 text-white'
                          : 'border-emerald-500/20 bg-black/20 text-white/60 hover:border-emerald-500/40'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-white">{profile.name}</div>
                        <div className="mt-0.5 font-mono text-xs text-white/40">{profile.speed}</div>
                      </div>
                      <div className="font-mono text-xs text-emerald-400">
                        ~{profile.siganaBitrateMbPerHour} MB/hr
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Display Output */}
            <div className="flex flex-col justify-between rounded-xl border border-emerald-500/20 bg-black/40 p-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-6">
                  <Clock className="size-4" /> Watch-Time Comparison
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-emerald-950/10 p-4">
                    <span className="font-mono text-[10px] uppercase text-white/40">Standard HD Stream</span>
                    <div className="mt-1 text-2xl font-bold text-white/70">{standardHours} hrs</div>
                    <span className="text-[10px] text-white/40 font-mono">Consumes data quickly</span>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4">
                    <span className="font-mono text-[10px] uppercase text-emerald-400">Sigana Transcode</span>
                    <div className="mt-1 text-2xl font-bold text-emerald-400">{siganaHours} hrs</div>
                    <span className="text-[10px] text-emerald-300/80 font-mono">Low-bandwidth mode</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Flame className="size-4" /> Airtime Efficiency Multiplier
                  </div>
                  <p className="mt-1 text-sm text-emerald-200">
                    Sigana gives you <span className="font-bold text-white">{hoursSavedMultiplier}x more watching time</span> on the exact same data bundle!
                  </p>
                </div>
              </div>

              <div className="mt-6 font-mono text-[11px] text-white/40 leading-5">
                * Estimates are calculated using dynamic adaptive bitrates optimized for low-latency streaming without buffering stalls.
              </div>
            </div>
          </div>
        </section>
      </main>
    </PortalFrame>
  )
}
