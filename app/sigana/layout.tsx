import type { Metadata } from 'next'
import { JsonLd, pageMetadata, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Sigana — Free Media & Streaming',
  'Sigana is a free, zero-login media and streaming service from Zabibu Technika, built for low-bandwidth networks and real-world constraints.',
  '/sigana'
)

export default function SiganaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          name: 'Sigana',
          description:
            'A free, zero-login media and streaming service from Zabibu Technika.',
          url: 'https://sigana.lovable.app',
          applicationCategory: 'MultimediaApplication',
        })}
      />
      {children}
    </>
  )
}
