import { NextResponse } from 'next/server'
import { siteUrl } from '@/lib/discoverability'

export const runtime = 'edge'

export function GET() {
  return NextResponse.json(
    {
      configured: Boolean(process.env.INDEXNOW_KEY && process.env.INDEXNOW_WEBHOOK_SECRET),
      host: new URL(siteUrl).host,
      endpoint: '/api/indexnow',
      method: 'POST',
      maxPaths: 10,
    },
    { headers: { 'cache-control': 'no-store' } }
  )
}
