import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Community — African Sovereign Tech',
  'Join the Zabibu Technika community: product updates, developer discussions, recruitment, and the public forum for sovereign, local-first technology in Africa.',
  '/community'
)

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
