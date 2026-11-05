import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kanari — Local diagnostics — Zabibu Technika',
  description:
    'Kanari is a telemetry-free local diagnostic utility for model runtime state, disk pressure, and system health.',
  alternates: { canonical: '/kanari' },
}

export default function KanariLayout({ children }: { children: React.ReactNode }) {
  return children
}
