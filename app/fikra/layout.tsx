import type { Metadata } from 'next'
import { JsonLd, pageMetadata, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Fikra Model 1 - 2B — Local AI Model',
  'Fikra Model 1 - 2B is Zabibu Technika’s 2-billion parameter model for local execution and edge devices, with Fikra Edge Runtime for enterprise deployment.',
  '/fikra'
)

export default function FikraLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          name: 'Fikra Model 1 - 2B',
          description:
            'A 2-billion parameter AI model built for local execution and edge devices, from Zabibu Technika in Nairobi, Kenya.',
          url: 'https://zabibufikra.vercel.app',
          applicationCategory: 'DeveloperApplication',
        })}
      />
      {children}
    </>
  )
}
