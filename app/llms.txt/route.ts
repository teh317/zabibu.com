import { NextResponse } from 'next/server'
import { llmsText } from '@/lib/discoverability'
export function GET() { return new NextResponse(llmsText(), { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' } }) }
