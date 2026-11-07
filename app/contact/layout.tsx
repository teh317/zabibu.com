import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Contact — Zabibu Technika',
  'Contact Zabibu Technika in Nairobi, Kenya for partnerships, licensing, press, community, or support. Reach the studio at zabibutechnika@gmail.com.',
  '/contact'
)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
