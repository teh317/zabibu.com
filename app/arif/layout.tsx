import type { Metadata } from 'next'
import { JsonLd, pageMetadata, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Zabibu Arif — AI Workspace & Assistant',
  'Zabibu Arif is a local-first AI workspace and assistant from Zabibu Technika in Nairobi, Kenya. Write, plan, code, and organize your day with the Fikra Engine.',
  '/arif'
)

export default function ArifLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          name: 'Zabibu Arif',
          description:
            'A local-first AI workspace and assistant from Zabibu Technika, powered by the Fikra Engine.',
          url: 'https://zabibuarif.lovable.app',
          applicationCategory: 'BusinessApplication',
        })}
      />
      {children}
    </>
  )
}
