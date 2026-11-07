import type { Metadata } from 'next'
import { JsonLd, pageMetadata, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Zabibu OS — Local-First Operating Layer',
  'Zabibu OS is an elemental web-native, local-first operating layer from Zabibu Technika, built for a smooth, unified computing environment.',
  '/zabibuos'
)

export default function ZabibuOSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          name: 'Zabibu OS',
          description:
            'An elemental web-native, local-first operating layer from Zabibu Technika.',
          url: 'https://zabibu.lovable.app',
          applicationCategory: 'OperatingSystem',
        })}
      />
      {children}
    </>
  )
}
