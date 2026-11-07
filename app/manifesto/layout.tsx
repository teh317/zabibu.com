import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Manifesto — Sovereign Computing',
  'The Zabibu Technika manifesto on sovereign computing, local-first software, digital rights, and building the future from Nairobi, Kenya.',
  '/manifesto'
)

export default function ManifestoLayout({ children }: { children: React.ReactNode }) {
  return children
}
