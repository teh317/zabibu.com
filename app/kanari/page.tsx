import Link from 'next/link'
import { ArrowUpRight, Activity, HardDrive, Lock, WifiOff } from 'lucide-react'
import { PortalFrame, SectionHeading } from '@/components/portal-shell'

const capabilities = [
  ['Runtime state', 'Inspect loaded models, context pressure, and active sessions without a dashboard account.', Activity],
  ['Disk pressure', 'Surface model cache size, free space, and eviction candidates before a write fails.', HardDrive],
  ['No telemetry', 'Nothing leaves the machine. No account, no analytics, no background network call.', WifiOff],
  ['Local only', 'Built for the machine in front of you, including the one that is not online.', Lock],
] as const

export default function Kanari() {
  return (
    <PortalFrame>
      <SectionHeading
        eyebrow="Developers / Diagnostics"
        title={
          <>
            Kanari
            <br />
            <span className="text-gradient">local truth.</span>
          </>
        }
        copy="A telemetry-free local diagnostic utility for model runtime state, disk pressure, and system health. No account, no network call."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map(([title, text, Icon]) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
            <Icon className="size-5 text-[#00d5bf]" />
            <h2 className="mt-5 text-lg font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
          </article>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="tag">Local only</span>
          <span className="tag">Zero telemetry</span>
          <span className="tag">Offline</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">A diagnostic tool should not phone home.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">
          Kanari reads the state of the machine and the model runtime, then reports it locally.
          It does not create an account, does not ship analytics, and does not need a network
          connection to tell you why a local model is under pressure.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:zabibutechnika@gmail.com?subject=Kanari%20access"
            className="glow-button px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Request access <ArrowUpRight className="ml-2 size-4" />
          </a>
          <Link
            href="/hub"
            className="outline-button px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
          >
            Back to the hub
          </Link>
        </div>
      </section>
    </PortalFrame>
  )
}
