export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zabibutechnika.com'

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

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export function projectUrl(project: (typeof projects)[keyof typeof projects]) {
  return project.url.startsWith('/') ? absoluteUrl(project.url) : project.url
}

export function llmsText() {
  return `# Zabibu Technika\n\n> A Nairobi-rooted technology company building sovereign, local-first systems for thought, commerce, care, and community.\n\n## Start here\n- [About](${absoluteUrl('/about')}): Mission, principles, and Nairobi roots.\n- [Hub](${absoluteUrl('/hub')}): The complete product ecosystem.\n- [Community](${absoluteUrl('/community')}): Join the public conversation.\n\n## Products\n${Object.values(projects).map((p) => `- [${p.name}](${projectUrl(p)}): ${p.description}`).join('\n')}\n\n## Editorial\n- [Dispatches](${absoluteUrl('/dispatches')}): Field notes and product thinking.\n\n<!-- Source: Zabibu Technika public product pages; generated server-side. -->`
}

export function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Zabibu Technika',
        url: siteUrl,
        description: 'A Nairobi-rooted technology company building sovereign, local-first systems.',
      },
      { '@type': 'WebSite', name: 'Zabibu Technika', url: siteUrl },
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
  return request.headers.get('x-indexnow-signature') === expected && body.length <= 32_000
}
