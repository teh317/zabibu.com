import { catalogSections } from '@/lib/catalog'
import { faqItems } from '@/lib/faq'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zabibu.vercel.app'

export const projects = {
  arif: {
    name: 'Zabibu Arif',
    description: 'Your main workspace and assistant—the central place where you write, plan, code, and organize your daily work, powered by the Fikra Engine.',
    url: '/arif',
    site: 'https://zabibuarif.lovable.app',
  },
  arifAgent: {
    name: 'Arif Agent',
    description: 'Zabibu Arif’s hyperspecialized sibling for real-world agentic execution, embedded directly inside Zabibu Arif.',
    url: 'https://arifagent.vercel.app',
  },
  weaver: {
    name: 'Zabibu Weaver',
    description: 'Our free, open-source, model-agnostic agent, built to work with any AI model you choose.',
    url: 'https://zabibuweaver.vercel.app',
  },
  ella: {
    name: 'Ella',
    description: 'Your encrypted private journal and care companion for thoughtful daily reflection.',
    url: '/ella',
    site: 'https://heyella.netlify.app',
  },
  zabibuos: {
    name: 'Zabibu OS',
    description: 'Our elemental web-native local operating layer for a smooth, unified computing environment.',
    url: '/zabibuos',
    site: 'https://zabibu.lovable.app',
  },
  sigana: {
    name: 'Sigana',
    description: 'Premium TV and streaming. Free, no subscription, no login.',
    url: '/sigana',
    site: 'https://sigana.lovable.app',
  },
  phosh: {
    name: 'Phosh.cpp',
    description: 'Our open-source llama.cpp adapter tailored for edge devices, optimizing speed, thermal management, and context distribution.',
    url: '/phosh',
    site: 'https://phosh.vercel.app',
  },
  fikraEdge: {
    name: 'Fikra Edge Runtime',
    description: 'The proprietary version of Phosh.cpp used internally to power and manage Fikra models.',
    url: 'https://zabibufikra.vercel.app',
  },
  canary: {
    name: 'Zabibu Canary',
    description: 'Our pre-release testing channel for code impact across five critical setups, with signed human-in-the-loop evidence.',
    url: 'https://zabibucanary.vercel.app',
  },
  glipter: {
    name: 'Glipter',
    description: 'An offline-first, on-device sign language engine that prioritises Kenyan Sign Language, with ASL and experimental BSL profiles.',
    url: '/glipter',
    site: 'https://glipter.vercel.app',
  },
  fikra: {
    name: 'Fikra Model 1 - 2B',
    description: 'Our pioneering 2-billion parameter model, built specifically for local execution and edge devices.',
    url: '/fikra',
    site: 'https://zabibufikra.vercel.app',
  },
  fikra2: {
    name: 'Fikra Model 2 - 4B',
    description: 'Our advanced 4-billion parameter model with deeper training, code-switching, local grounding, vision, and advanced tool use.',
    url: 'https://zabibufikra.vercel.app',
  },
  bizkit: {
    name: 'Bizkit',
    description: 'Offline-first business tools for the people keeping economies moving.',
    url: '/bizkit',
  },
} as const

const socialProfiles = [
  'https://github.com/Zabibu-Technika',
  'https://x.com/zabibutechnika',
  'https://linkedin.com/company/zabibutechnika',
  'https://youtube.com/@zabibutechnika',
  'https://instagram.com/zabibutechnika',
]

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export function projectUrl(project: (typeof projects)[keyof typeof projects]) {
  return project.url.startsWith('/') ? absoluteUrl(project.url) : project.url
}

function catalogMarkdown() {
  return catalogSections
    .map((section) => {
      const items = section.items
        .map((item) => {
          const label = item.href ? `[${item.title}](${item.href})` : item.title
          return `- ${label}: ${item.text}`
        })
        .join('\n')
      return `### ${section.title}\n${items}`
    })
    .join('\n\n')
}

export function llmsText() {
  return `# Zabibu Technika

> Zabibu Technika is an AI and technology company based in Nairobi, Kenya. Founded in 2006 as Grape Technologies, it builds sovereign, local-first software, edge AI models, and operating systems for Africa and the global South.

## Company facts
- Founded: June 2006 (as Grape Technologies)
- Headquarters: Nairobi, Kenya
- Focus: sovereign and local-first software, edge AI, operating systems, agentic tools, and African-language AI.
- Users: 600+ across Zabibu Arif and Ella.
- Contact: zabibutechnika@gmail.com
- Canonical site: ${siteUrl}

## Product ecosystem
${catalogMarkdown()}

## Key pages
- [Home](${absoluteUrl('/')}): The company story and pitch.
- [About](${absoluteUrl('/about')}): Mission, vision, timeline, and research heritage.
- [Ecosystem Hub](${absoluteUrl('/hub')}): Every product with a plain-language explainer.
- [Community](${absoluteUrl('/community')}): The public forum and recruitment route.
- [Investors](${absoluteUrl('/investors')}): Investment thesis and briefing.
- [Dispatches](${absoluteUrl('/dispatches')}): Field notes and product thinking.
- [Manifesto](${absoluteUrl('/manifesto')}): The sovereign computing declaration.
- [Contact](${absoluteUrl('/contact')}): Direct line to the studio.
- [Why local-first](${absoluteUrl('/alternatives/why-we-are-better')}): A factual cloud-first vs local-first comparison.
- [Badges](${absoluteUrl('/badges')}): An embeddable badge with descriptive anchor text.
- [Media kit](${absoluteUrl('/media-kit')}): Brand story, fact sheet, logos, colours, type, licensing, wallpapers, and the official tune.
- [Assets](${absoluteUrl('/assets')}): Logos, icons, product marks, social cards, stickers, animated GIFs, badges, banners, wallpapers, fonts, PDF kits, and both tune mixes.
- [Trust](${absoluteUrl('/trust')}): Security, local-first data posture, responsible AI, and vulnerability disclosure.
- [Accessibility](${absoluteUrl('/accessibility')}): Accessibility commitment and feedback.
- [Changelog](${absoluteUrl('/changelog')}): Dated record of public changes.
- [Licenses](${absoluteUrl('/licenses')}): Brand, content, product, font, icon, and audio licensing.
- [Privacy](${absoluteUrl('/privacy')}): Data practices.
- [Terms](${absoluteUrl('/terms')}): Website terms.
- [Machine-readable summary](${absoluteUrl('/api/geo/summary')}): JSON for AI systems and search agents.

## Canonical
${siteUrl}

## Full context
- [Expanded company and product context for AI systems](${absoluteUrl('/llms-full.txt')})

<!-- Generated server-side from the public Zabibu Technika product catalog. -->
`
}

export function llmsFullText() {
  const faq = faqItems
    .map((item) => `### ${item.question}\n${item.answer}`)
    .join('\n\n')

  return `# Zabibu Technika — full context

> AI and technology company in Nairobi, Kenya. Sovereign, local-first software, edge AI models, and operating systems for Africa and the global South.

## Identity
- Legal / brand name: Zabibu Technika
- Earlier name: Grape Technologies Inc.
- Founded: June 2006
- Founder and lead architect: Tehillah Mwangada Kachila
- Headquarters: Nairobi, Kenya
- Area served: Kenya, Africa, and the global South
- Website: ${siteUrl}
- Contact: zabibutechnika@gmail.com

## Mission
Engineering clarity. Designing emotion. Build technologies that are secure, intelligent, and deeply human, bridging art, science, and usability for the global South and beyond.

## Vision
The sovereign computing paradigm: systems that think, protect, and inspire without extracting data or demanding cloud dependency.

## Why Zabibu Technika exists
Most software is designed for fast fibre, the newest laptop, a card on file, and a model that speaks English first. Most of the world does not live in that context. Zabibu Technika builds for the actual condition: software that works offline, models that fit a modest machine, interfaces that respect local language and low bandwidth, and systems that keep data with the person who made it.

## Timeline
- 2006: Founded as Grape Technologies Inc. in Nairobi.
- 2006–2023: Seventeen years of foundational R&D across adaptive interfaces, security architecture, and intelligent systems.
- 2023: Published the Agentic Artificial Intelligence paper and introduced the Virosauda perceptual imaging system.
- Late 2024: Launched Ella, a local-first encrypted journal, serving 200+ users.
- 2025–2026: Expanded into Zabibu Arif (400+ users), Zabibu OS, Sigana, the Fikra model lineup, Phosh.cpp, Zabibu Canary, and the LISP security framework.

## Products
${catalogMarkdown()}

## Media, assets, and trust
- Media kit: ${absoluteUrl('/media-kit')}
- Assets: ${absoluteUrl('/assets')} (logos, icons, product marks, product social cards, stickers, GIFs, badges, banners, avatars, wallpapers, fonts)
- Press kit PDF: ${absoluteUrl('/downloads/zabibu-technika-press-kit.pdf')}
- Investor kit PDF: ${absoluteUrl('/downloads/zabibu-technika-investor-kit.pdf')}
- Official tune (standard): ${absoluteUrl('/downloads/audio/zabibu-technika-tune.mp3')}
- Official tune (extended): ${absoluteUrl('/downloads/audio/zabibu-technika-tune-extended.mp3')}
- Trust and security: ${absoluteUrl('/trust')}
- Accessibility: ${absoluteUrl('/accessibility')}
- Licenses: ${absoluteUrl('/licenses')}
- Privacy: ${absoluteUrl('/privacy')}
- Terms: ${absoluteUrl('/terms')}
- Changelog: ${absoluteUrl('/changelog')}

## Frequently asked questions
${faq}

## Social profiles
${socialProfiles.map((url) => `- ${url}`).join('\n')}

## Canonical
${siteUrl}

<!-- Full-context file for AI systems and search engines. Generated server-side. -->
`
}

export function jsonLd() {
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`
  const webPageId = `${siteUrl}/#webpage`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Zabibu Technika',
        alternateName: ['Zabibu', 'Grape Technologies Inc.'],
        url: siteUrl,
        slogan: 'Tech should feel like home.',
        description:
          'Zabibu Technika is an AI and technology company based in Nairobi, Kenya, building sovereign, local-first software, edge AI models, and operating systems for Africa and the global South.',
        foundingDate: '2006-06',
        founder: {
          '@type': 'Person',
          name: 'Tehillah Mwangada Kachila',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
        areaServed: [
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'Place', name: 'Africa' },
          { '@type': 'Place', name: 'Global South' },
        ],
        knowsAbout: [
          'Artificial intelligence',
          'Edge AI',
          'Local-first software',
          'Agentic AI',
          'African-language AI',
          'Operating systems',
          'Open-source software',
          'Model quantization',
          'Human-in-the-loop verification',
        ],
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/icon.png'),
          width: 500,
          height: 500,
        },
        image: absoluteUrl('/images/og-image.png'),
        sameAs: socialProfiles,
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'zabibutechnika@gmail.com',
          contactType: 'customer support',
          availableLanguage: ['English', 'Swahili'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: 'Zabibu Technika',
        description:
          'Sovereign, local-first AI and software from Nairobi, Kenya, for Africa and the global South.',
        publisher: { '@id': organizationId },
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': webPageId,
        url: siteUrl,
        name: 'Zabibu Technika — AI & Technology Company in Nairobi, Kenya',
        description:
          'Zabibu Technika is a Nairobi-rooted AI and technology company building sovereign, local-first software, edge AI models, and operating systems for Africa and the global South.',
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        inLanguage: 'en',
      },
    ],
  }
}

export function validProjectId(id: string) {
  return /^[a-z0-9-]{1,32}$/.test(id)
}

export async function indexNow(urls: string[], signal?: AbortSignal) {
  const key = process.env.INDEXNOW_KEY
  if (!key || urls.length === 0 || urls.length > 10) return { skipped: true }
  const allowed = urls.every((url) => {
    try {
      return new URL(url).origin === new URL(siteUrl).origin
    } catch {
      return false
    }
  })
  if (!allowed) throw new Error('URL origin not allowed')
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ host: new URL(siteUrl).host, key, urlList: urls }),
      signal: signal ?? controller.signal,
    })
    return { status: response.status, ok: response.ok }
  } finally {
    clearTimeout(timeout)
  }
}

export function rateLimitKey(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anonymous'
}
const buckets = new Map<string, { count: number; reset: number }>()
export function rateLimit(key: string, limit = 10) {
  const now = Date.now()
  const current = buckets.get(key)
  if (!current || current.reset < now) {
    buckets.set(key, { count: 1, reset: now + 60_000 })
    return true
  }
  if (current.count >= limit) return false
  current.count += 1
  return true
}

export function signedRequest(request: Request, body: string) {
  const expected = process.env.INDEXNOW_WEBHOOK_SECRET
  if (!expected) return false
  const signature = request.headers.get('x-indexnow-signature')
  const authorization = request.headers.get('authorization')
  const bearer = authorization?.startsWith('Bearer ') ? authorization.slice(7) : null
  return (signature === expected || bearer === expected) && body.length <= 32_000
}
