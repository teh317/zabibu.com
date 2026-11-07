import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type HubItem = {
  title: string
  label: string
  text: string
  href?: string
  meta?: string
}

type HubSection = {
  number: string
  title: string
  note: string
  grid: string
  items: HubItem[]
}

const sections: HubSection[] = [
  {
    number: '01',
    title: 'Assistants, Agents & Companions',
    note: '05 products',
    grid: 'lg:grid-cols-3',
    items: [
      {
        title: 'Zabibu Arif',
        label: 'Workspace & assistant',
        text: 'Your main workspace and assistant—the central place where you write, plan, code, and organize your daily work, powered by the Fikra Engine for thoughtful, human-centered interactions.',
        href: 'https://zabibuarif.lovable.app',
        meta: 'Flagship',
      },
      {
        title: 'Arif Agent',
        label: 'Agentic execution',
        text: 'Zabibu Arif’s hyperspecialized sibling. It handles real-world agentic execution and is embedded directly inside Zabibu Arif to expand its capabilities.',
        href: 'https://arifagent.vercel.app',
        meta: 'Embedded',
      },
      {
        title: 'Zabibu Weaver',
        label: 'Open-source agent',
        text: 'Our free, open-source agent. It is fully model-agnostic, meaning it is built to work with any kind of AI model you choose rather than being locked to a single option.',
        href: 'https://zabibuweaver.vercel.app',
        meta: 'Open source',
      },
      {
        title: 'Ella',
        label: 'Journal & care',
        text: 'Your encrypted private journal and care companion, designed to guide users through thoughtful reflections on their daily experiences, emotions, and moods.',
        href: 'https://heyella.netlify.app',
        meta: 'Private',
      },
      {
        title: 'Ustadi',
        label: 'Skills & mastery',
        text: 'A specialized assistant and tool within our ecosystem designed to help users build, master, and elevate practical, real-world skills.',
        meta: 'In development',
      },
    ],
  },
  {
    number: '02',
    title: 'Operating Systems & Media',
    note: '02 products',
    grid: 'lg:grid-cols-2',
    items: [
      {
        title: 'Zabibu OS',
        label: 'Operating layer',
        text: 'Our elemental web-native local operating layer designed to provide a smooth, unified computing environment.',
        href: 'https://zabibu.lovable.app',
        meta: 'Local-first',
      },
      {
        title: 'Sigana',
        label: 'Media & streaming',
        text: 'Premium TV and streaming service. 100% free! No subs, no login, just some of your favorite shows and channels from across the world.',
        href: 'https://sigana.lovable.app',
        meta: 'Free',
      },
    ],
  },
  {
    number: '03',
    title: 'Core Systems, Runtimes & Testing',
    note: '03 products',
    grid: 'lg:grid-cols-3',
    items: [
      {
        title: 'Phosh.cpp',
        label: 'Edge inference',
        text: 'Our open-source llama.cpp adapter tailored for edge devices. It optimizes speed, thermal management (heating), and context distribution where standard tools fall short.',
        href: 'https://phosh.vercel.app',
        meta: 'Open source',
      },
      {
        title: 'Fikra Edge Runtime',
        label: 'Enterprise runtime',
        text: 'The proprietary version of Phosh.cpp that we use internally to power and manage our models.',
        href: 'https://zabibufikra.vercel.app',
        meta: 'Proprietary',
      },
      {
        title: 'Zabibu Canary',
        label: 'Pre-release testing',
        text: 'Our pre-release testing channel that checks the impact of your code and codebase across 5 critical setups, requiring a signature to create recorded evidence of a human in the loop during development.',
        href: 'https://zabibucanary.vercel.app',
        meta: 'HITL',
      },
    ],
  },
  {
    number: '04',
    title: 'The AI Models (The Fikra Lineup)',
    note: '02 models',
    grid: 'lg:grid-cols-2',
    items: [
      {
        title: 'Fikra Model 1 - 2B',
        label: 'Local model',
        text: 'Our pioneering 2-billion parameter model built specifically for local execution and edge devices.',
        href: 'https://zabibufikra.vercel.app',
        meta: '2B',
      },
      {
        title: 'Fikra Model 2 - 4B',
        label: 'Advanced model',
        text: 'Our advanced 4-billion parameter model with deeper training, tightly integrated with Zabibu Arif and the upcoming Zabibu OS. It features enhanced code-switching, deep grounding in local realities, vision capabilities, and advanced tool use.',
        href: 'https://zabibufikra.vercel.app',
        meta: '4B',
      },
    ],
  },
]

function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith('mailto:')
}

function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (isExternal(href)) {
    const opensWindow = href.startsWith('http')
    return (
      <a
        href={href}
        className={className}
        {...(opensWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function HubCard({ item }: { item: HubItem }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 transition-colors hover:border-[#8b2cff]/50 hover:shadow-[0_0_30px_rgba(139,44,255,.08)]">
      <div className="flex items-start justify-between gap-3">
        <span className="tag whitespace-nowrap">{item.label}</span>
        {item.meta && (
          <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">{item.meta}</span>
        )}
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-white md:text-2xl">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        {item.href ? (
          <SmartLink
            href={item.href}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] transition-colors hover:text-white"
          >
            Open product <ArrowUpRight className="size-3.5" />
          </SmartLink>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">No public link yet</span>
        )}
      </div>
    </article>
  )
}

export function EcosystemHub() {
  return (
    <div className="space-y-14">
      {sections.map((section) => (
        <section key={section.number} aria-labelledby={`hub-section-${section.number}`}>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">
                Section {section.number}
              </span>
              <h2 id={`hub-section-${section.number}`} className="text-xl font-bold tracking-tight text-white md:text-2xl">
                {section.title}
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">{section.note}</span>
          </div>
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${section.grid}`}>
            {section.items.map((item) => (
              <HubCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
