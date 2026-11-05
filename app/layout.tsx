import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { jsonLd, siteUrl } from '@/lib/discoverability'
import { PortalShell } from '@/components/portal-shell'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600', '700', '900'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Zabibu Technika — Software that breathes',
  description: 'Sovereign, local-first software built from Nairobi for the global South.',
  generator: 'Zabibu Technika',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#030305',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${outfit.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} /><PortalShell>{children}</PortalShell>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
