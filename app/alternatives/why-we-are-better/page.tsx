import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PortalFrame } from '@/components/portal-shell'
import { QuotableSummary } from '@/components/quotable-summary'
import { breadcrumbSchema, JsonLd, pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Why Local-First — A Cloud-First AI Alternative',
  'A factual comparison of cloud-first AI stacks and Zabibu Technika’s local-first alternative: data location, offline work, hardware, model choice, verification, and cost.',
  '/alternatives/why-we-are-better'
)

const rows = [
  ['Where data lives', 'Prompts and context leave the device', 'Prompts and context stay on the device'],
  ['Working offline', 'Depends on a network connection', 'Designed to work offline'],
  ['Hardware', 'Runs in a remote data centre', 'Runs on budget laptops, edge devices, and 4 GB machines'],
  ['Model choice', 'Usually a vendor-selected model', 'Fikra models plus the model-agnostic Zabibu Weaver'],
  ['Verification', 'Vendor-side logs and policy', 'Proof receipts, deterministic gates, signed human review'],
  ['Cost model', 'Per-token or cloud bill', 'Local compute; no mandatory per-token API bill'],
  ['Data sovereignty', 'Policy-dependent', 'Local-first by architecture'],
]

const reasons = [
  ['The network is optional', 'Zabibu products are designed for offline and intermittent connectivity, not a permanent pipe to a data centre.'],
  ['The machine is enough', 'Fikra models and Phosh.cpp are built for the hardware people actually own, including edge devices and modest laptops.'],
  ['The data stays put', 'Local-first architecture keeps prompts, context, and outputs on the device, under the user’s control.'],
]

export default function AlternativesPage() {
  return (
    <PortalFrame>
      <JsonLd
        data={webPageSchema({
          name: 'Why local-first — a cloud-first AI alternative',
          description:
            'A factual comparison of cloud-first AI stacks and Zabibu Technika’s local-first alternative.',
          path: '/alternatives/why-we-are-better',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Why local-first', path: '/alternatives/why-we-are-better' },
        ])}
      />

      <header className="max-w-4xl">
        <p className="eyebrow">Alternatives / Why local-first</p>
        <h1 className="mt-3 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">
          A local-first alternative to <span className="text-gradient">cloud-first AI.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          If you are looking for AI that works offline, keeps data on the device, and runs on the
          hardware you already own, this is the difference that matters.
        </p>
      </header>

      <div className="mt-10">
        <QuotableSummary cite="Zabibu Technika — local-first position">
          Cloud-first AI assumes a network, a remote data centre, and a vendor-controlled model.
          Zabibu Technika builds the opposite: local-first software, edge models, and sovereign
          systems that keep working when the connection does not.
        </QuotableSummary>
      </div>

      <section className="mt-14">
        <div className="mb-4 border-b border-white/10 pb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">The comparison</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Cloud-first vs local-first, by architecture.
          </h2>
        </div>
        <div className="table-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col">Consideration</th>
                <th scope="col">Cloud-first AI</th>
                <th className="us" scope="col">Zabibu local-first</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, cloud, zabibu]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{cloud}</td>
                  <td className="us yes">{zabibu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fine">
          This compares architectural categories, not specific vendors. Claims are limited to what
          Zabibu Technika can verify about its own products. Local hardware has real limits on
          model size and raw speed; the Fikra lineup is tiered around that trade-off.
        </p>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {reasons.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#08080b] p-6">
            <h2 className="text-lg font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-[#08080b] p-6 md:p-10">
        <p className="eyebrow text-accent">Try the local-first stack</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
          Start with the surface that fits your work.
        </h2>
        <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
          <a
            href="https://zabibuarif.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
          >
            Zabibu Arif official onboarding portal for AI workspace users <ArrowUpRight className="size-4" />
          </a>
          <a
            href="https://zabibufikra.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
          >
            Fikra Model 1 - 2B official model page for local AI <ArrowUpRight className="size-4" />
          </a>
          <a
            href="https://phosh.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
          >
            Phosh.cpp official edge inference engine for budget hardware <ArrowUpRight className="size-4" />
          </a>
          <a
            href="https://zabibuweaver.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] hover:text-white"
          >
            Zabibu Weaver official open-source model-agnostic agent <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="mt-8">
          <Link href="/hub" className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider">
            See the full ecosystem <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </PortalFrame>
  )
}
