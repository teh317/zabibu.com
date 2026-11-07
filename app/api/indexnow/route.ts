import { NextResponse } from 'next/server'
import { absoluteUrl, indexNow, rateLimit, rateLimitKey, signedRequest } from '@/lib/discoverability'

export const runtime = 'edge'

const noStore = { 'cache-control': 'no-store' }

export async function POST(request: Request) {
  const body = await request.text()

  if (!signedRequest(request, body)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: noStore })
  }

  if (!rateLimit(rateLimitKey(request), 20)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429, headers: noStore })
  }

  let payload: unknown
  try {
    payload = JSON.parse(body)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers: noStore })
  }

  const rawPaths =
    payload && typeof payload === 'object' && Array.isArray((payload as { paths?: unknown }).paths)
      ? (payload as { paths: unknown[] }).paths
      : []

  const paths = [
    ...new Set(
      rawPaths
        .filter((path): path is string => typeof path === 'string' && path.startsWith('/'))
        .slice(0, 10)
    ),
  ]

  if (paths.length === 0) {
    return NextResponse.json(
      { error: 'Provide 1–10 same-origin paths, for example {"paths":["/hub"]}' },
      { status: 400, headers: noStore }
    )
  }

  try {
    const result = await indexNow(paths.map(absoluteUrl))
    return NextResponse.json(
      {
        ok: true,
        submitted: paths,
        host: new URL(absoluteUrl('/')).host,
        result,
      },
      { headers: noStore }
    )
  } catch {
    return NextResponse.json({ error: 'Indexing failed' }, { status: 502, headers: noStore })
  }
}
