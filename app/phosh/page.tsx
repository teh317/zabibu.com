import Link from 'next/link'
import { ArrowUpRight, Cpu, Gauge, Layers, Lock, Network, ShieldCheck, Workflow, Zap } from 'lucide-react'
import { PortalFrame } from '@/components/portal-shell'

const engine = [
  {
    title: 'Silicon-level optimization',
    text: 'Kernels and execution paths tuned to the actual CPU, GPU, or accelerator. Fewer abstractions between the model and the metal, so more of the machine goes into inference.',
    icon: Cpu,
  },
  {
    title: 'Cloud-grade speed, local',
    text: 'Engineered to break past the usual software ceiling and deliver responsive, cloud-grade inference on the budget hardware people actually own.',
    icon: Gauge,
  },
  {
    title: 'Entirely offline',
    text: 'No network in the inference loop. No API call, no account, no round trip. The model runs where the work happens.',
    icon: Network,
  },
  {
    title: 'Absolute data sovereignty',
    text: 'Prompts, context, and outputs never leave the device. In the enterprise edition, that is a deployment guarantee, not a setting.',
    icon: ShieldCheck,
  },
  {
    title: 'Resilient agentic workflows',
    text: 'Sessions, streaming, persistence, and compaction are designed for long-running work that survives interruptions and restarts.',
    icon: Workflow,
  },
  {
    title: 'Open core, enterprise edge',
    text: 'Phosh.cpp is the open engine. Fikra Edge Runtime is the production-grade layer for teams that need maximum efficiency and local sovereignty.',
    icon: Layers,
  },
]

const editions = [
  {
    name: 'Phosh.cpp',
    tag: 'Open source / MIT',
    line: 'The engine.',
    description:
      'An open-source, silicon-level optimized edge inference engine. It exists to prove that cloud-grade speed does not require a cloud, a data centre, or the newest hardware.',
    points: [
      'Silicon-aware execution for edge devices',
      'Fikra weights run locally, end to end',
      'No account and no network dependency',
      'Open core for builders and researchers',
    ],
    cta: 'Explore GitHub',
    href: 'https://github.com/Zabibu-Technika',
    external: true,
    accent: 'border-white/10 bg-[#08080b]',
  },
  {
    name: 'Fikra Edge Runtime',
    tag: 'Proprietary / Enterprise',
    line: 'The deployment layer.',
    description:
      'A proprietary, production-grade enterprise deployment layer purpose-built to handle Fikra models with maximum efficiency, resilient agentic workflows, and absolute local data sovereignty.',
    points: [
      'Production controls for Fikra model deployment',
      'Maximum efficiency on approved edge hardware',
      'Resilient sessions for long-running agents',
      'Absolute local data sovereignty by design',
    ],
    cta: 'Request enterprise access',
    href: 'mailto:zabibutechnika@gmail.com?subject=Fikra%20Edge%20Runtime%20enterprise%20access',
    external: true,
    accent: 'border-[#ffbf3f]/30 bg-[#ffbf3f]/[0.03]',
  },
]

const architecture = [
  ['01', 'Silicon', 'Execution tuned to the real CPU, GPU, or accelerator.'],
  ['02', 'Engine', 'Phosh.cpp runs Fikra weights locally, with no cloud in the loop.'],
  ['03', 'Runtime', 'Fikra Edge Runtime adds production controls, resilience, and policy.'],
  ['04', 'Agent', 'Sessions, tools, and workflows keep working when the network does not.'],
]

const deployments = [
  {
    title: 'Air-gapped and regulated',
    text: 'Where data cannot leave the building, the model has to come to the data. Phosh.cpp makes that the default, not an exception.',
    icon: Lock,
  },
  {
    title: 'Budget hardware',
    text: 'Old laptops, single-board computers, and 4 GB edge devices. The engine is designed around the machine in front of the user.',
    icon: Cpu,
  },
  {
    title: 'Intermittent connectivity',
    text: 'Metered links, unstable power, and offline field work. Inference still runs, and the agent keeps its state.',
    icon: Zap,
  },
]

export default function Phosh() {
  return (
    <PortalFrame>
      {/* Hero */}
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="eyebrow">Developers / Edge inference</p>
          <h1 className="mt-3 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">
            Phosh.cpp
            <br />
            <span className="text-gradient">the edge inference engine.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            An open-source, silicon-level optimized edge inference engine engineered to break
            past standard software limits and deliver cloud-grade speeds on budget hardware —
            entirely offline.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-white/55">
            Its proprietary sibling, <span className="font-semibold text-[#ffbf3f]">Fikra Edge Runtime</span>,
            is the production-grade enterprise deployment layer for Fikra models: maximum
            efficiency, resilient agentic workflows, and absolute local data sovereignty.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:zabibutechnika@gmail.com?subject=Fikra%20Edge%20Runtime%20enterprise%20access"
              className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Request enterprise access <ArrowUpRight className="ml-2 size-4" />
            </a>
            <Link
              href="/fikra"
              className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Meet Fikra Model 1 - 2B
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            <span>Open core · MIT</span>
            <span>Offline</span>
            <span>Edge hardware</span>
            <span>Enterprise runtime</span>
          </div>
        </div>

        <div className="terminal" aria-label="Phosh.cpp local inference session">
          <div className="mb-4 flex items-center justify-between border-b border-[#00d5bf]/15 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            <span>phosh@edge:~$</span>
            <span className="text-[#00d5bf]">local only</span>
          </div>
          <pre className="whitespace-pre-wrap text-[11px] leading-7 text-white/60">{`$ phosh run fikra-model-1 --offline
[phosh] backend: silicon-optimized
[phosh] model:   fikra-model-1 · local
[phosh] network: disabled
[phosh] session: persistent
[phosh] ready`}</pre>
        </div>
      </div>

      {/* The gap */}
      <section className="mt-20 grid gap-10 border-t border-white/10 pt-14 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">The gap</p>
          <h2 className="mt-3 text-balance text-4xl font-black tracking-tight md:text-6xl">
            The cloud is a dependency. <span className="text-gradient">Phosh.cpp removes it.</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-white/60">
          <p>
            Standard inference stacks assume a data centre: abundant memory, stable power, a fast
            network, and someone else&apos;s computer. Most of the world does not run on those
            assumptions.
          </p>
          <p>
            Phosh.cpp works at the silicon level to fit the model to the machine, not the machine
            to the model. The result is an engine that can deliver cloud-grade responsiveness on
            budget hardware, with the network switched off and the data left where it belongs.
          </p>
        </div>
      </section>

      {/* Engine capabilities */}
      <section className="mt-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">01 / The engine</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Built below the usual software ceiling.
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">06 capabilities</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {engine.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
                <Icon className="size-5 text-[#00d5bf]" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Two editions */}
      <section className="mt-20">
        <div className="mb-7 border-b border-white/10 pb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">02 / Two editions</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            One engine. An open core and an enterprise edge.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {editions.map((edition) => (
            <article key={edition.name} className={`flex flex-col rounded-2xl border p-7 md:p-8 ${edition.accent}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="tag">{edition.tag}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">{edition.line}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-3xl">{edition.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{edition.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                {edition.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#00d5bf]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={edition.href}
                {...(edition.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] transition-colors hover:text-white"
              >
                {edition.cta} <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mt-20">
        <div className="mb-7 border-b border-white/10 pb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">03 / The stack</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Silicon to agent, with nothing in the cloud.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {architecture.map(([num, title, text]) => (
            <article key={num} className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
              <span className="font-mono text-[10px] tracking-[0.18em] text-white/35">{num}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Deployment fit */}
      <section className="mt-20">
        <div className="mb-7 border-b border-white/10 pb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">04 / Where it belongs</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Built for the places the cloud cannot go.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {deployments.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
                <Icon className="size-5 text-[#ffbf3f]" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="manifesto mt-20 p-8 md:p-12">
        <p className="eyebrow text-accent">Fikra Edge Runtime</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl">
          Local sovereignty is an enterprise requirement now.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/60">
          Deploy Fikra models on hardware you control, with an inference loop that never leaves
          the building. Fikra Edge Runtime is the production layer: efficiency, resilient agentic
          workflows, and data sovereignty by design.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:zabibutechnika@gmail.com?subject=Fikra%20Edge%20Runtime%20enterprise%20access"
            className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Request enterprise access <ArrowUpRight className="ml-2 size-4" />
          </a>
          <Link href="/fikra" className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            Fikra Model 1 - 2B
          </Link>
          <Link
            href="/hub"
            className="inline-flex items-center px-2 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
          >
            Back to the hub
          </Link>
        </div>
      </section>
    </PortalFrame>
  )
}
