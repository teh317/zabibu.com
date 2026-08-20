'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MessageCircle, Radio, Send } from 'lucide-react'

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? 'zabibutechnika/zabibu-u5',
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? '',
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? 'Announcements',
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? '',
}

export default function CommunityPage() {
  const [sent, setSent] = useState(false)
  const giscusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!giscusRef.current || !giscusConfig.repoId || !giscusConfig.categoryId) return
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    Object.entries({
      'data-repo': giscusConfig.repo,
      'data-repo-id': giscusConfig.repoId,
      'data-category': giscusConfig.category,
      'data-category-id': giscusConfig.categoryId,
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'dark_dimmed',
      'data-lang': 'en',
      'data-loading': 'lazy',
    }).forEach(([key, value]) => script.setAttribute(key, value))
    giscusRef.current.appendChild(script)
    return () => { giscusRef.current?.replaceChildren() }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 md:px-10 md:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary">Community / 01</p>
            <h1 className="mt-5 max-w-4xl font-sans text-5xl font-semibold tracking-[-0.06em] text-balance md:text-7xl">
              A sovereign stack is built in public.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Join the builders, thinkers, and curious minds shaping Zabibu Technika from Nairobi outward. Giscus turns this page into a living GitHub Discussions forum—no separate account or database required.
            </p>
          </div>
          <a className="glass-panel group flex items-center justify-between gap-5 p-6" href="https://whatsapp.com/channel/0029VbC0Nnj5a248TWBGLk2s" target="_blank" rel="noreferrer">
            <span className="flex items-center gap-4"><Radio className="text-primary" /> <span><strong className="block">Join the broadcast</strong><span className="text-sm text-muted-foreground">Dispatches on WhatsApp</span></span></span>
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-accent">The forum</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Feedback wall</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Ask a hard question, share a field note, or tell us what should exist next. Sign in with GitHub to join the discussion.</p>
            <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground"><MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" /> Comments are stored in GitHub Discussions and mapped to this route.</div>
          </div>
          <div className="glass-panel min-h-[430px] p-5 md:p-8">
            {!giscusConfig.repoId || !giscusConfig.categoryId ? (
              <div className="mb-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm leading-6 text-accent-foreground">
                Giscus is ready to mount. Add <code>NEXT_PUBLIC_GISCUS_REPO_ID</code> and <code>NEXT_PUBLIC_GISCUS_CATEGORY_ID</code> from giscus.app to activate the discussion thread for this repository.
              </div>
            ) : null}
            <div ref={giscusRef} className="giscus" aria-label="Giscus community discussion" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
        <div className="glass-panel flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div><p className="eyebrow text-primary">Stay in the loop</p><h2 className="mt-3 text-2xl font-semibold">Get the occasional dispatch.</h2></div>
          <form className="flex w-full max-w-md gap-2" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            <label className="sr-only" htmlFor="community-email">Email address</label>
            <input id="community-email" type="email" required placeholder="you@example.com" className="min-w-0 flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground" type="submit">{sent ? 'Subscribed' : 'Subscribe'} <Send className="size-4" /></button>
          </form>
        </div>
      </section>
    </main>
  )
}
