import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecosystem Hub — Zabibu Technika',
  description:
    'The Zabibu Technika product ecosystem: assistants and companions, operating systems and media, core systems and runtimes, and the Fikra model lineup.',
  alternates: { canonical: '/hub' },
}

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return children
}
