import { NextResponse } from 'next/server'
import { llmsFullText } from '@/lib/discoverability'

export function GET() {
  return new NextResponse(llmsFullText(), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
