import type { Metadata } from 'next'
import { JsonLd, pageMetadata, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Ella — Encrypted Journal & Care Companion',
  'Ella is an encrypted, local-first journal and care companion from Zabibu Technika, designed for thoughtful daily reflection.',
  '/ella'
)

export default function EllaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          name: 'Ella',
          description:
            'An encrypted, local-first journal and care companion from Zabibu Technika.',
          url: 'https://heyella.netlify.app',
          applicationCategory: 'LifestyleApplication',
        })}
      />
      {children}
    </>
  )
}
