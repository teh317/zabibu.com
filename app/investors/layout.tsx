import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Investors — Zabibu Technika',
  'The Zabibu Technika investment thesis: sovereign AI, local-first software, edge models, and a 20-year research heritage from Nairobi, Kenya.',
  '/investors'
)

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
