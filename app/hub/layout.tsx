import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Ecosystem Hub — AI, Software & Models',
  'Explore the Zabibu Technika ecosystem: AI assistants, agentic tools, local-first operating systems, edge runtimes, testing tools, accessibility and sign-language engines, and the Fikra model lineup. Built in Nairobi, Kenya.',
  '/hub'
)

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return children
}
