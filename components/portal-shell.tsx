'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const logo = '/images/logo.png'
const nav = [
  { href: '/', label: 'Home' },
  { href: '/hub', label: 'Hub' },
  { href: '/about', label: 'About' },
  { href: '/community', label: 'Community' },
  { href: '/assets', label: 'Assets' },
  { href: '/investors', label: 'Investors' },
  { href: '/dispatches', label: 'Dispatch' },
]
const ecosystem = [
  { href: 'https://zabibuarif.lovable.app', label: 'Zabibu Arif' },
  { href: 'https://zabibufikra.vercel.app', label: 'Fikra Model 1 - 2B' },
  { href: 'https://zabibufikra.vercel.app', label: 'Fikra Model 2 - 4B' },
  { href: 'https://heyella.netlify.app', label: 'Ella' },
  { href: 'https://zabibu.lovable.app', label: 'Zabibu OS' },
  { href: 'https://sigana.lovable.app', label: 'Sigana' },
]
const developers = [
  { href: 'https://arifagent.vercel.app', label: 'Arif Agent' },
  { href: 'https://zabibuweaver.vercel.app', label: 'Zabibu Weaver' },
  { href: 'https://zabibucanary.vercel.app', label: 'Zabibu Canary' },
  { href: 'https://phosh.vercel.app', label: 'Phosh.cpp' },
  { href: 'https://zabibufikra.vercel.app', label: 'Fikra Edge Runtime' },
  { href: 'https://glipter.vercel.app', label: 'Glipter' },
]
const company = [
  { href: '/about', label: 'About' },
  { href: '/investors', label: 'Investors' },
  { href: '/dispatches', label: 'Dispatches' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/community', label: 'Community' },
  { href: '/alternatives/why-we-are-better', label: 'Why local-first' },
  { href: '/badges', label: 'Badges' },
  { href: 'mailto:zabibutechnika@gmail.com', label: 'Contact' },
]

export function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="noise" aria-hidden="true" />
      <header className="sticky top-3 z-50 px-4 md:top-5 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/10 bg-[#08080b]/85 px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,.35)] backdrop-blur-xl md:px-5">
          <Link href="/" aria-label="Zabibu Technika home">
            <img src={logo} alt="Zabibu Technika" className="h-8 w-auto" />
          </Link>
          <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[.16em] text-muted-foreground lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? 'nav-active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/hub"
              className="glow-button pill hidden px-4 py-2 text-[10px] font-bold uppercase tracking-wider sm:inline-flex"
            >
              Open hub <ArrowUpRight className="ml-2 size-3.5" />
            </Link>
            <button
              className="rounded-full border border-white/10 p-1.5 lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-[#08080b]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-[.18em]">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={pathname === item.href ? 'nav-active' : ''}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {children}

      <footer className="relative z-10 border-t border-white/10 bg-black/40 px-5 py-14 backdrop-blur-md md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/">
              <img src={logo} alt="Zabibu Technika" className="h-11 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              Zabibu Technika is an AI and technology company in Nairobi, Kenya, building
              sovereign, local-first software for Africa and the global South.
            </p>
            <p className="mt-6 eyebrow">Nairobi, Kenya / East Africa</p>
          </div>
          <FooterColumn title="Ecosystem" links={ecosystem} />
          <FooterColumn title="Developers" links={developers} />
          <FooterColumn title="Company" links={company} />
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Zabibu Technika. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/media-kit">Media kit</Link>
            <Link href="/media-kit#tune">Tune</Link>
            <Link href="/assets">Assets</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/licenses">Licenses</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="/llms.txt" className="transition-colors hover:text-white">llms.txt</a>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/80">Designed from Nairobi.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <FooterLink key={`${title}-${link.href}`} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const className = 'transition-colors hover:text-white'
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    )
  }
  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">{title}</h1>
      {copy && <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>}
    </div>
  )
}

export function PortalCard({
  title,
  label,
  text,
  href,
  image,
  className = '',
}: {
  title: string
  label: string
  text: string
  href: string
  image?: string
  className?: string
}) {
  return (
    <Link href={href} className={`portal group block overflow-hidden p-6 ${className}`}>
      <div className="mb-7 flex items-start justify-between">
        <span className="tag">{label}</span>
        <span className="text-2xl text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
      </div>
      {image && (
        <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/60">
          <Image src={image} alt={`${title} product interface`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{text}</p>
      <span className="mt-8 inline-block text-[10px] font-bold uppercase tracking-[.2em] text-accent">Open portal</span>
    </Link>
  )
}

export function PortalFrame({
  children,
  className = '',
  backgroundImage,
}: {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
}) {
  return (
    <main className={`relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-20 md:px-10 md:py-28 ${className}`}>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
        />
      )}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background/80" aria-hidden="true" />
      {children}
    </main>
  )
}
