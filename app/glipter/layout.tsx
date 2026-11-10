import type { Metadata } from 'next'
import { JsonLd, pageMetadata, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Glipter — On-Device Sign Language Engine',
  'Glipter is an offline-first, on-device sign language engine from Zabibu Technika, prioritising Kenyan Sign Language with ASL and experimental BSL profiles.',
  '/glipter'
)

export default function GlipterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          name: 'Glipter',
          description:
            'An offline-first, on-device sign language engine from Zabibu Technika that reads sign through any camera and prioritises Kenyan Sign Language.',
          url: 'https://glipter.vercel.app',
          applicationCategory: 'EducationalApplication',
        })}
      />
      {children}
    </>
  )
}
