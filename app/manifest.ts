import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zabibu Technika — AI & Technology Company in Nairobi, Kenya',
    short_name: 'Zabibu',
    description:
      'Sovereign, local-first AI and software from Nairobi, Kenya: edge models, agentic tools, operating systems, and a 20-year research heritage.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#030305',
    theme_color: '#030305',
    lang: 'en',
    icons: [
      {
        src: '/icon.png',
        sizes: '500x500',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
