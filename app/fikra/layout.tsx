import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fikra Model 1 - 2B — Zabibu Technika',
  description:
    'Fikra Model 1 - 2B: small, sharp, open reasoning weights for edge hardware, plus the proprietary Fikra Edge Runtime.',
  alternates: { canonical: '/fikra' },
}

export default function FikraLayout({ children }: { children: React.ReactNode }) {
  return children
}
