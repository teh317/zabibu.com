import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Bizkit — Offline-First Business Tools',
  'Bizkit is an offline-first business toolkit from Zabibu Technika for African SMBs, freelancers, and the people keeping economies moving.',
  '/bizkit'
)

export default function BizkitLayout({ children }: { children: React.ReactNode }) {
  return children
}
