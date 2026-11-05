import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phosh.cpp — Fikra Edge Runtime — Zabibu Technika',
  description:
    'Phosh.cpp is an open-source, silicon-level optimized edge inference engine delivering cloud-grade speeds on budget hardware, entirely offline. Fikra Edge Runtime is the proprietary enterprise layer.',
  alternates: { canonical: '/phosh' },
}

export default function PhoshLayout({ children }: { children: React.ReactNode }) {
  return children
}
