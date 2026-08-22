import { NextResponse } from 'next/server'
export function GET() { const key = process.env.INDEXNOW_KEY; return key ? new NextResponse(key, { headers: { 'content-type': 'text/plain' } }) : new NextResponse('Not configured', { status: 404 }) }
