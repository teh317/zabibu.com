import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Dispatches — Zabibu Technika Field Notes',
  'Field notes, product thinking, and essays on sovereign AI, local-first software, and building technology from Nairobi, Kenya.',
  '/dispatches'
)

export default function DispatchesLayout({ children }: { children: React.ReactNode }) {
  return children
}
