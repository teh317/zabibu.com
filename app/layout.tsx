import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600', '700', '900'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Zabibu Technika — Software that breathes',
  description: 'Sovereign, local-first software built from Nairobi for the global South.',
  generator: 'Zabibu Technika',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${outfit.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
