import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Outfit } from 'next/font/google'
import { jsonLd, siteUrl } from '@/lib/discoverability'
import { OG_IMAGE, OG_IMAGE_ALT } from '@/lib/seo'
import { PortalShell } from '@/components/portal-shell'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zabibu Technika — AI & Technology Company in Nairobi, Kenya',
    template: '%s — Zabibu Technika',
  },
  description:
    'Zabibu Technika is a Nairobi-rooted AI and technology company building sovereign, local-first software, edge AI models, and operating systems for Africa and the global South.',
  keywords: [
    'Zabibu Technika',
    'AI company in Kenya',
    'AI companies in Africa',
    'technology company in Nairobi',
    'Kenyan AI company',
    'African AI models',
    'edge AI',
    'local-first software',
    'sovereign AI',
    'Fikra model',
    'Fikra Model 1 - 2B',
    'Fikra Model 2 - 4B',
    'Zabibu Arif',
    'Arif Agent',
    'Zabibu Weaver',
    'Zabibu OS',
    'Phosh.cpp',
    'Fikra Edge Runtime',
    'Zabibu Canary',
    'Ella journal',
    'Sigana',
    'Glipter sign language',
  ],
  authors: [{ name: 'Tehillah Mwangada Kachila', url: siteUrl }],
  creator: 'Tehillah Mwangada Kachila',
  publisher: 'Zabibu Technika',
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: 'Zabibu Technika',
    title: 'Zabibu Technika — AI & Technology Company in Nairobi, Kenya',
    description:
      'Sovereign, local-first AI and software from Nairobi, Kenya: edge models, agentic tools, operating systems, and a 20-year research heritage.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zabibu Technika — AI & Technology Company in Nairobi, Kenya',
    description:
      'Sovereign, local-first AI and software from Nairobi, Kenya: edge models, agentic tools, operating systems, and a 20-year research heritage.',
    images: [OG_IMAGE],
    creator: '@zabibutechnika',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Zabibu Technika',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#030305',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${outfit.variable} ${mono.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />
        <PortalShell>{children}</PortalShell>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
