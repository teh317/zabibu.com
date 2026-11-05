import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phosh.cpp — Fikra Edge Runtime — Zabibu Technika',
  description:
    'Phosh.cpp is a local kernel middleware adapter built atop llama.cpp, with an open MIT client and the proprietary Fikra Edge Runtime edition.',
  alternates: { canonical: '/phosh' },
}

export default function PhoshLayout({ children }: { children: React.ReactNode }) {
  return children
}
