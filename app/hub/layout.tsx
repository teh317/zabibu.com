import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecosystem Hub — Zabibu Technika',
  description:
    'The Zabibu Technika product ecosystem: flagship products, system architecture, developer infrastructure, and experimental media.',
  alternates: { canonical: '/hub' },
}

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return children
}
