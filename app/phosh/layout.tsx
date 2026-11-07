import type { Metadata } from 'next'
import { JsonLd, pageMetadata, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Phosh.cpp — Edge AI Inference Engine',
  'Phosh.cpp is an open-source, silicon-level optimized llama.cpp adapter for edge devices from Zabibu Technika, with the proprietary Fikra Edge Runtime.',
  '/phosh'
)

export default function PhoshLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          name: 'Phosh.cpp',
          description:
            'An open-source, silicon-level optimized edge inference engine for llama.cpp, from Zabibu Technika in Nairobi, Kenya.',
          url: 'https://phosh.vercel.app',
          applicationCategory: 'DeveloperApplication',
        })}
      />
      {children}
    </>
  )
}
