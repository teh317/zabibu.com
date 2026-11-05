import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type HubLink = {
  label: string
  href: string
}

type HubItem = {
  title: string
  label: string
  text: string
  href: string
  image?: string
  snippet?: string
  meta?: string
  span?: string
  wide?: boolean
  secondary?: HubLink[]
}

type HubSection = {
  number: string
  title: string
  note: string
  items: HubItem[]
}

const sections: HubSection[] = [
  {
    number: '01',
    title: 'Flagship Products',
    note: '03 consumer surfaces',
    items: [
      {
        title: 'Zabibu Arif',
        label: 'Workspace / Flagship',
        text: 'The flagship workspace. A Socratic companion for thinking, drafting, planning, and running the work around the work.',
        href: 'https://zabibuarif.lovable.app',
        image: '/images/arif.png',
        meta: 'LIVE',
        span: 'md:col-span-2 lg:col-span-2',
        wide: true,
        secondary: [{ label: 'Product page', href: '/arif' }],
      },
      {
        title: 'Fikra Model 1 - 2B',
        label: 'Edge Engine',
        text: 'Small, sharp, open reasoning weights. The family also powers Fikra Edge Runtime, the proprietary sibling runtime for local agentic work.',
        href: 'https://zabibufikra.vercel.app',
        image: '/images/fikra-site.jpg',
        meta: 'Open weights',
        span: 'lg:col-span-1',
        secondary: [
          { label: 'Hugging Face', href: 'https://huggingface.co/zabibutechnika/Zabibu-Fikra-2B' },
          { label: 'Fikra Edge Runtime', href: 'mailto:zabibutechnika@gmail.com?subject=Fikra%20Edge%20Runtime%20access' },
        ],
      },
      {
        title: 'Ella',
        label: 'Companion / Privacy',
        text: 'A private, encrypted companion for reflection and care. Promoted to the flagship line for the human context beyond work.',
        href: 'https://heyella.netlify.app',
        image: '/images/ella.png',
        meta: 'LIVE',
        span: 'lg:col-span-1',
        secondary: [{ label: 'Product page', href: '/ella' }],
      },
    ],
  },
  {
    number: '02',
    title: 'Development & System Architecture',
    note: '02 system layers',
    items: [
      {
        title: 'Arif Agent',
        label: 'Agentic Execution',
        text: 'The autonomous, multi-axis execution layer behind Zabibu Arif. Code, growth, and business operations on one verified core.',
        href: 'https://arifagent.vercel.app',
        image: '/images/arifagent.jpg',
        meta: 'Autonomous',
        span: 'md:col-span-1 lg:col-span-2',
        secondary: [{ label: 'Product page', href: '/arif' }],
      },
      {
        title: 'ZabibuOS',
        label: 'Operating Layer',
        text: 'A local-first operating layer for African builders and real-world constraints. Built for the hardware people actually have.',
        href: 'https://zabibu.lovable.app',
        image: '/images/zabibu.png',
        meta: 'Local-first',
        span: 'md:col-span-1 lg:col-span-2',
        secondary: [{ label: 'Product page', href: '/zabibuos' }],
      },
    ],
  },
  {
    number: '03',
    title: 'For Developers',
    note: '04 open tools',
    items: [
      {
        title: 'Zabibu Canary',
        label: 'Code Review',
        text: 'A local-first pre-push gate for AI-made changes. Plain-English risk reports, five-sector damage maps, and signed human approvals.',
        href: 'https://zabibucanary.vercel.app',
        snippet: '$ zabibucanary review --staged\n8 files · risk 100/100\nsecurity 3/3 · trust 3/3\nSTOP — fix these first',
        meta: 'Open source',
        span: 'lg:col-span-1',
        secondary: [{ label: 'GitHub', href: 'https://github.com/Zabibu-Technika/zabibu-canary' }],
      },
      {
        title: 'Phosh.cpp',
        label: 'Middleware',
        text: 'Local kernel middleware adapter atop llama.cpp. One source tree, two editions: the open Phosh client and the proprietary Fikra Edge Runtime.',
        href: '/phosh',
        snippet: '$ cmake -S . -B build\n  -DPHOSH_EDITION=open\n$ ./phosh --local',
        meta: 'MIT + Pro',
        span: 'lg:col-span-1',
        secondary: [{ label: 'Runtime access', href: 'mailto:zabibutechnika@gmail.com?subject=Phosh.cpp%20/%20Fikra%20Edge%20Runtime' }],
      },
      {
        title: 'Weaver',
        label: 'Core Engine',
        text: 'The open-source coding agent that proves its work. Proof receipts, a deterministic gate, decision memory, and undo without git.',
        href: 'https://zabibuweaver.vercel.app',
        snippet: '$ weaver proof\n✓ typecheck 1.1s\n✓ test 2.4s\n[proof] proved 3/3',
        meta: 'Open source',
        span: 'lg:col-span-1',
        secondary: [{ label: 'GitHub', href: 'https://github.com/Zabibu-Technika/zabibu' }],
      },
      {
        title: 'Kanari',
        label: 'Diagnostics',
        text: 'A telemetry-free local diagnostic utility for model runtime state, disk pressure, and system health. No account, no network call.',
        href: '/kanari',
        snippet: '$ kanari --local\nruntime: 2 models\ntelemetry: off\ndisk: 14.2 GB free',
        meta: 'Local only',
        span: 'lg:col-span-1',
        secondary: [{ label: 'Request access', href: 'mailto:zabibutechnika@gmail.com?subject=Kanari%20access' }],
      },
    ],
  },
  {
    number: '04',
    title: 'Experimental & Media',
    note: '01 media experiment',
    items: [
      {
        title: 'Sigana',
        label: 'Media Center',
        text: 'A free, zero-login media center built for low-bandwidth networks. No subscription, no account, just signal.',
        href: 'https://sigana.lovable.app',
        image: '/images/sigana.png',
        meta: 'Free / No login',
        span: 'md:col-span-2 lg:col-span-4',
        wide: true,
        secondary: [{ label: 'Product page', href: '/sigana' }],
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

function CardFooter({ item }: { item: HubItem }) {
  return (
    <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-white/10 pt-4">
      <SmartLink
        href={item.href}
        className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbf3f] transition-colors hover:text-white"
      >
        Open system <ArrowUpRight className="size-3.5" />
      </SmartLink>
      {item.secondary && item.secondary.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {item.secondary.map((link) => (
            <SmartLink
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-white"
            >
              {link.label}
            </SmartLink>
          ))}
        </div>
      )}
    </div>
  )
}

function CardBody({ item }: { item: HubItem }) {
  const media = item.image ? (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/60">
      <Image
        src={item.image}
        alt={`${item.title} interface`}
        fill
        sizes={item.wide ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  ) : null

  const snippet = item.snippet ? (
    <div className="rounded-xl border border-white/10 bg-black/70 p-4 font-mono text-[10px] leading-6 text-white/55">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="size-1.5 rounded-full bg-white/20" />
      </div>
      <pre className="whitespace-pre-wrap">{item.snippet}</pre>
    </div>
  ) : null

  const visual = media ?? snippet

  const tagRow = (
    <div className="flex items-start justify-between gap-3">
      <span className="tag whitespace-nowrap">{item.label}</span>
      {item.meta && <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">{item.meta}</span>}
    </div>
  )

  const titleAndText = (
    <>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-white md:text-2xl">{item.title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-white/55">{item.text}</p>
    </>
  )

  if (item.wide) {
    return (
      <div className="grid gap-5 md:grid-cols-[1.05fr_.95fr] md:items-center">
        <div>
          {tagRow}
          {titleAndText}
        </div>
        {media}
      </div>
    )
  }

  return (
    <div>
      {tagRow}
      {visual && <div className="mt-4">{visual}</div>}
      {titleAndText}
    </div>
  )
}

function HubCard({ item }: { item: HubItem }) {
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 transition-colors hover:border-[#8b2cff]/50 hover:shadow-[0_0_30px_rgba(139,44,255,.08)] ${item.span ?? ''}`}
    >
      <SmartLink href={item.href} className="block">
        <CardBody item={item} />
      </SmartLink>
      <CardFooter item={item} />
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {section.items.map((item) => (
              <HubCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
