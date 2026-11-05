export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zabibutechnika.com'

export const projects = {
  arif: {
    name: 'Zabibu Arif',
    description: 'The flagship workspace: a Socratic cognitive engine for the questions underneath the question.',
    url: '/arif',
    site: 'https://zabibuarif.lovable.app',
  },
  arifAgent: {
    name: 'Arif Agent',
    description: 'The autonomous, multi-axis execution layer behind Zabibu Arif: code, growth, and business operations on one verified core.',
    url: 'https://arifagent.vercel.app',
  },
  zabibuos: {
    name: 'ZabibuOS',
    description: 'A local-first operating layer for African builders and real-world constraints.',
    url: '/zabibuos',
    site: 'https://zabibu.lovable.app',
  },
  sigana: {
    name: 'Sigana',
    description: 'A free, zero-login media center built for low-bandwidth networks.',
    url: '/sigana',
    site: 'https://sigana.lovable.app',
  },
  fikra: {
    name: 'Fikra Model 1 - 2B',
    description: 'Small, sharp, open reasoning weights. The family also powers the proprietary Fikra Edge Runtime.',
    url: '/fikra',
    site: 'https://zabibufikra.vercel.app',
  },
  canary: {
    name: 'Zabibu Canary',
    description: 'A local-first pre-push gate for AI-made changes, with plain-English risk reports and signed human approvals.',
    url: 'https://zabibucanary.vercel.app',
  },
  weaver: {
    name: 'Weaver',
    description: 'The open-source coding agent that proves its work: proof receipts, a deterministic gate, and undo without git.',
    url: 'https://zabibuweaver.vercel.app',
  },
  phosh: {
    name: 'Phosh.cpp',
    description: 'An open-source, silicon-level optimized edge inference engine for cloud-grade speeds on budget hardware, entirely offline.',
    url: '/phosh',
  },
  kanari: {
    name: 'Kanari',
    description: 'A telemetry-free local diagnostic utility for model runtime state, disk pressure, and system health.',
    url: '/kanari',
  },
  bizkit: {
    name: 'Bizkit',
    description: 'Offline-first business tools for the people keeping economies moving.',
    url: '/bizkit',
  },
  ella: {
    name: 'Ella',
    description: 'An encrypted companion for tending to your inner world.',
    url: '/ella',
    site: 'https://heyella.netlify.app',
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
