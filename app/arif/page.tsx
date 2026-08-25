'use client'

import Image from 'next/image'
import { ArrowDown, ArrowUpRight, BrainCircuit, Copy, Check, Sparkles, MessageSquareText, Filter, CheckCircle2, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { PortalFrame } from '@/components/portal-shell'

const features = [
  ['Socratic Dialogue Engine', 'Reconstructs incoming queries through probing questions to discover latent intent before executing complex tasks.', BrainCircuit],
  ['Edge Token Efficiency', 'Optimized context-window compaction enabling complex inference pipelines over low-bandwidth rural networks.', Sparkles],
  ['Zero Telemetry Privacy', 'Conversational history remains local to the user client with local key derivation for session encryption.', Check],
] as const

interface PresetScenario {
  label: string
  query: string
  standardResponse: string
  arifFilter: {
    coreIntent: string
    actionPlan: string[]
    diagnosticQuestion: string
  }
}

const presets: PresetScenario[] = [
  {
    label: '💼 Business Setup in Kenya',
    query: 'How do I register a business in Kenya?',
    standardResponse: 'Starting a business in Kenya involves several administrative procedures. First, you must consider the legal structure of your enterprise, such as a sole proprietorship, partnership, or limited liability company (LLC)... [3 more paragraphs of background history on eCitizen]',
    arifFilter: {
      coreIntent: 'Need an actionable 3-step compliance path for eCitizen registration without legal fluff.',
      actionPlan: [
        'Perform Name Search & Reservation on the eCitizen BRS portal (KES 150).',
        'Upload Director IDs, PINs, and passport photos for Memorandum generation.',
        'Pay the KES 10,650 flat registration fee to receive your CR12 & Certificate of Incorporation.'
      ],
      diagnosticQuestion: 'Is this a single-director company, or do you have foreign shareholders requiring alien certificates?'
    }
  },
  {
    label: '⚡ Tech Infrastructure',
    query: 'How should I host my web app for low internet speeds?',
    standardResponse: 'When targeting areas with variable internet speeds, edge hosting and cloud deployment architectures are critical. Modern cloud providers offer multi-region content delivery networks (CDNs) that cache static assets near users...',
    arifFilter: {
      coreIntent: 'Minimize payload size and rely on client-heavy local caching over unreliable mobile data.',
      actionPlan: [
        'Implement Service Workers for 100% offline-first static asset caching.',
        'Use native system fonts instead of pulling 400KB remote WebFont bundles.',
        'Bypass heavy REST/GraphQL payloads using SQLite/CRDT local synchronization.'
      ],
      diagnosticQuestion: 'Are your users performing read-only browsing or sub-1MB offline database writes?'
    }
  },
  {
    label: '🚀 App Growth Strategy',
    query: 'Why is my app user retention dropping?',
    standardResponse: 'User retention is a critical metric for long-term app success. To analyze drop-off rates, you should first examine your onboarding funnel, run cohort retention analysis, send push notifications, and build email marketing flows...',
    arifFilter: {
      coreIntent: 'Identify immediate onboarding friction and value-realization roadblocks.',
      actionPlan: [
        'Audit time-to-value: Can a guest reach the core feature within 2 clicks?',
        'Eliminate mandatory account signups before demonstrating main app utility.',
        'Check network waterfall logs for payload sizes choking on 3G connections.'
      ],
      diagnosticQuestion: 'At what exact step in your onboarding flow does the highest drop-off percentage occur?'
    }
  }
]

export default function Arif() {
  const [copied, setCopied] = useState(false)
  const [activePresetIndex, setActivePresetIndex] = useState(0)
  const [customQuery, setCustomQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'arif' | 'standard'>('arif')

  const code = 'from zabibu_arif import evaluate\n\nresponse = evaluate("Identify hidden assumptions before execution.")'
  const currentPreset = presets[activePresetIndex]

  return (
    <PortalFrame backgroundImage="/images/arif.png">
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/20 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              <BrainCircuit className="size-4" /> Flagship Cognition
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">Zabibu Arif</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Zabibu Arif is an intelligent companion powered by Fikra Engine, combining advanced conversational intelligence with thoughtful, human-centered interactions.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              Equipped with an interactive Socratic mode, Arif engages in diagnostic dialogue to probe the core intention underneath your queries, maintaining high-context reasoning without transmitting private state off-device.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://zabibuarif.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button inline-flex items-center gap-2 bg-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black font-semibold"
              >
                Launch Arif Engine <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#filter-demo"
                className="inline-flex items-center gap-2 border border-amber-500/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-500/10 transition-colors"
              >
                Try Direct Filter <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-amber-500/30 bg-amber-950/20 shadow-[0_30px_100px_rgba(245,158,11,.16)]">
            <Image
              src="/images/arif.png"
              alt="Zabibu Arif interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>

        {/* Terminal Code Snippet Block */}
        <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6">
          <div className="flex justify-between font-mono text-xs text-white/60">
            <span>arif@zabibu:~$ run reasoning_pipe</span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(code)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              aria-label="Copy example"
            >
              {copied ? <Check className="size-4 text-amber-400" /> : <Copy className="size-4" />}
            </button>
          </div>
          <pre className="mt-6 whitespace-pre-wrap text-sm leading-8 text-amber-200">{code}</pre>
        </div>

        {/* Model Matrix Section */}
        <section id="specs" className="mt-20">
          <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
            01 / System matrix
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map(([title, desc, Icon]) => (
              <article key={title} className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6">
                <Icon className="size-5 text-amber-400" />
                <h2 className="mt-6 text-lg font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* The Direct Answer Filter Section */}
        <section id="filter-demo" className="mt-20 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 md:p-10">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
            02 / Diagnostic Engine Demo
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">The Direct Answer Filter</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
            See how Arif strips out standard AI filler and conversational fluff to deliver concise execution steps alongside targeted diagnostic questions.
          </p>

          {/* Preset Buttons */}
          <div className="mt-8 flex flex-wrap gap-2">
            {presets.map((preset, idx) => (
              <button
                key={preset.label}
                onClick={() => {
                  setActivePresetIndex(idx)
                  setCustomQuery('')
                }}
                className={`rounded-xl border px-4 py-2 text-xs font-bold transition-all ${
                  activePresetIndex === idx && !customQuery
                    ? 'border-amber-500 bg-amber-500/20 text-amber-300'
                    : 'border-amber-500/20 bg-black/20 text-white/60 hover:border-amber-500/40'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Prompt Input Box */}
          <div className="mt-6 rounded-xl border border-amber-500/20 bg-black/40 p-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-amber-400 uppercase tracking-widest mb-2">
              <MessageSquareText className="size-3" /> Input Prompt Query
            </div>
            <input
              type="text"
              value={customQuery || currentPreset.query}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder="Or type any question..."
              className="w-full bg-transparent font-medium text-white outline-none placeholder:text-white/30 text-sm md:text-base"
            />
          </div>

          {/* Toggle Switch */}
          <div className="mt-6 flex items-center justify-between rounded-xl border border-amber-500/20 bg-black/60 p-1.5">
            <button
              onClick={() => setActiveTab('arif')}
              className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'arif'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Filter className="size-3.5" /> Arif Socratic Filter
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'standard'
                  ? 'bg-white/10 text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Standard Fluff AI
            </button>
          </div>

          {/* Output Display Box */}
          <div className="mt-4 rounded-xl border border-amber-500/20 bg-black/40 p-6 min-h-[220px]">
            {activeTab === 'arif' ? (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
                    Core Intention Identified
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {customQuery ? `Diagnostic intent analysis for: "${customQuery}"` : currentPreset.arifFilter.coreIntent}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
                    3-Step Action Plan
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {(customQuery
                      ? [
                          'Deconstruct query into actionable core execution steps.',
                          'Eliminate conversational intro & concluding fluff.',
                          'Identify single critical missing variable before proceeding.'
                        ]
                      : currentPreset.arifFilter.actionPlan
                    ).map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 className="size-4 shrink-0 text-amber-400 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-amber-500/30 bg-amber-950/40 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <HelpCircle className="size-4" /> Diagnostic Socratic Follow-Up
                  </div>
                  <p className="mt-1 text-sm text-amber-200/90 italic">
                    {customQuery
                      ? 'What specific constraint (e.g., budget, timeframe, or target audience) dictates your execution priority?'
                      : currentPreset.arifFilter.diagnosticQuestion}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  Standard Unfiltered Model Output
                </span>
                <p className="text-sm leading-7 text-white/60 italic">
                  {customQuery
                    ? `Thank you for your question about "${customQuery}". That is a very interesting topic! When considering this area, there are many important factors to take into account before coming to a decision... [continues with 4 paragraphs of generic setup text]`
                    : currentPreset.standardResponse}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </PortalFrame>
  )
}
