'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Code, Copy, Check, Cpu, Database, Terminal, Layers } from 'lucide-react'
import { useState } from 'react'
import { PortalFrame } from '@/components/portal-shell'

const features = [
  ['2.1B Parameter Efficiency', 'Fine-tuned specifically for dense analytical output and logical reasoning per parameter.', Cpu],
  ['GGUF & 4-bit Quantization', 'Compatible with llama.cpp, Ollama, and Unsloth Studio, running locally using under 2GB of system RAM.', Layers],
  ['Open Sovereign License', 'Permissive usage license empowering developers to build independent commercial agents without per-token API fees.', Check],
] as const

const hardwareProfiles = [
  { name: 'Edge / Single-Board (Raspberry Pi 4/5)', ram: 4, recommendedQuant: 'Q4_K_M', size: '1.4 GB', speed: '~18-24 tok/s', ollamaTag: 'fikra-2b:q4' },
  { name: 'Low-Spec Laptop (4GB - 8GB RAM)', ram: 8, recommendedQuant: 'Q5_K_M', size: '1.7 GB', speed: '~35-45 tok/s', ollamaTag: 'fikra-2b:q5' },
  { name: 'Modern Laptop / M-Series Mac (16GB RAM)', ram: 16, recommendedQuant: 'Q8_0', size: '2.3 GB', speed: '~75-110 tok/s', ollamaTag: 'fikra-2b:q8' },
  { name: 'Workstation / Edge GPU (24GB+ VRAM)', ram: 32, recommendedQuant: 'FP16 (Unquantized)', size: '4.2 GB', speed: '~140+ tok/s', ollamaTag: 'fikra-2b:fp16' },
]

export default function Fikra() {
  const [copied, setCopied] = useState(false)
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(1)
  const [cmdCopied, setCmdCopied] = useState(false)

  const code = 'from zabibu_fikra import reason\n\nresponse = reason("Build for the conditions you know.")'
  const activeProfile = hardwareProfiles[selectedProfileIndex]
  const runCommand = `ollama run zabibutechnika/${activeProfile.ollamaTag}`

  return (
    <PortalFrame backgroundImage="/images/fikra.png">
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-950/20 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">
              <Code className="size-4" /> Open weights
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">Fikra Model 1 - 2B</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Small, sharp, open reasoning weights built on Gemma architecture for the next generation of makers.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              An ultra-efficient 2-billion parameter model optimized for structured reasoning, code generation, and local agentic deployment on edge hardware.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://huggingface.co/zabibutechnika/Zabibu-Fikra-2B"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button inline-flex items-center gap-2 bg-fuchsia-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
              >
                Download Weights <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 border border-fuchsia-500/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-fuchsia-400 hover:bg-fuchsia-500/10 transition-colors"
              >
                Hardware Calculator <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-fuchsia-500/30 bg-fuchsia-950/20 shadow-[0_30px_100px_rgba(217,70,239,.16)]">
            <Image
              src="/images/fikra.png"
              alt="Fikra Model 1 - 2B model interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-fuchsia-500/25 bg-fuchsia-950/10 p-5 md:flex-row md:items-center">
          <div>
            <span className="tag">Proprietary sibling</span>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60">
              <span className="font-semibold text-white">Fikra Edge Runtime</span> is the
              production-grade enterprise deployment layer for Fikra models: maximum efficiency,
              resilient agentic workflows, and absolute local data sovereignty — exposed through
              the <span className="text-fuchsia-300">Phosh.cpp</span> engine.
            </p>
          </div>
          <Link
            href="/phosh"
            className="inline-flex shrink-0 items-center gap-2 border border-fuchsia-500/30 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-fuchsia-300 transition-colors hover:bg-fuchsia-500/10"
          >
            Explore Phosh.cpp <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Terminal Code Snippet Block */}
        <div className="mt-12 rounded-2xl border border-fuchsia-500/30 bg-fuchsia-950/20 p-6">
          <div className="flex justify-between font-mono text-xs text-white/60">
            <span>fikra@zabibu:~$ run inference</span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(code)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              aria-label="Copy example"
            >
              {copied ? <Check className="size-4 text-fuchsia-400" /> : <Copy className="size-4" />}
            </button>
          </div>
          <pre className="mt-6 whitespace-pre-wrap text-sm leading-8 text-fuchsia-200">{code}</pre>
        </div>

        {/* Model Matrix Section */}
        <section id="specs" className="mt-20">
          <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-fuchsia-400">
            01 / Model matrix
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map(([title, desc, Icon]) => (
              <article key={title} className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-950/20 p-6">
                <Icon className="size-5 text-fuchsia-400" />
                <h2 className="mt-6 text-lg font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Hardware & Quantization Calculator Section */}
        <section id="calculator" className="mt-20 rounded-2xl border border-fuchsia-500/30 bg-fuchsia-950/20 p-6 md:p-10">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fuchsia-400">
            02 / Quantization Estimator
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Edge Performance Calculator</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
            Select your target deployment hardware to calculate memory footprints, optimal GGUF quantization formats, and expected token speeds.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Device Selector */}
            <div className="space-y-3">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-fuchsia-400">
                Target Device Architecture
              </label>
              <div className="grid gap-2">
                {hardwareProfiles.map((profile, idx) => (
                  <button
                    key={profile.name}
                    onClick={() => setSelectedProfileIndex(idx)}
                    className={`flex items-center justify-between rounded-xl border p-4 text-left transition-all ${
                      selectedProfileIndex === idx
                        ? 'border-fuchsia-500 bg-fuchsia-500/20 text-white'
                        : 'border-fuchsia-500/20 bg-black/20 text-white/60 hover:border-fuchsia-500/40'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-white">{profile.name}</div>
                      <div className="mt-1 font-mono text-xs text-white/40">Target RAM: {profile.ram} GB</div>
                    </div>
                    <div className="font-mono text-xs font-bold text-fuchsia-400">
                      {profile.recommendedQuant}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Metric Displays */}
            <div className="flex flex-col justify-between rounded-xl border border-fuchsia-500/20 bg-black/40 p-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fuchsia-400 mb-6">
                  <Database className="size-4" /> Real-Time Footprint
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/20 p-4">
                    <span className="font-mono text-[10px] uppercase text-white/40">RAM Footprint</span>
                    <div className="mt-1 text-2xl font-bold text-white">{activeProfile.size}</div>
                  </div>
                  <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/20 p-4">
                    <span className="font-mono text-[10px] uppercase text-white/40">Inference Speed</span>
                    <div className="mt-1 text-2xl font-bold text-fuchsia-400">{activeProfile.speed}</div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/20 p-4">
                  <span className="font-mono text-[10px] uppercase text-white/40">Optimal Format</span>
                  <div className="mt-1 text-base font-bold text-white">
                    {activeProfile.recommendedQuant} GGUF
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Maintains logical reasoning output within standard target hardware memory limits.
                  </p>
                </div>
              </div>

              {/* Execution Snippet */}
              <div className="mt-6 rounded-xl border border-fuchsia-500/30 bg-fuchsia-950/40 p-4 font-mono">
                <div className="flex items-center justify-between text-[10px] text-white/40 uppercase mb-2">
                  <span className="flex items-center gap-1"><Terminal className="size-3 text-fuchsia-400" /> Terminal Execution</span>
                  <span>Ollama CLI</span>
                </div>
                <div className="flex items-center justify-between gap-2 overflow-x-auto text-xs text-fuchsia-200">
                  <code>{runCommand}</code>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(runCommand)
                      setCmdCopied(true)
                      setTimeout(() => setCmdCopied(false), 2000)
                    }}
                    className="flex items-center gap-1 rounded border border-fuchsia-500/30 bg-fuchsia-500/20 px-2 py-1 text-[10px] font-bold text-fuchsia-300 hover:bg-fuchsia-500/30 transition-colors"
                  >
                    {cmdCopied ? <Check className="size-3 text-fuchsia-400" /> : <Copy className="size-3" />}
                    {cmdCopied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PortalFrame>
  )
}
