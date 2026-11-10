import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Terms — Zabibu Technika',
  'The terms for using the Zabibu Technika website, brand assets, and linked products.',
  '/terms'
)

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal / Terms"
      title="Terms"
      updated="10 November 2026"
      path="/terms"
      description="These terms cover this website and the brand assets we publish. Each product may have its own license or terms."
      schema={webPageSchema({
        name: 'Terms — Zabibu Technika',
        description: 'Terms for using the Zabibu Technika website and brand assets.',
        path: '/terms',
      })}
    >
      <section>
        <h2 className="text-xl font-bold text-white">Acceptance</h2>
        <p className="mt-2">
          By using this website, you agree to these terms. If you do not agree, do not use the site.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">The site</h2>
        <p className="mt-2">
          This site is an information and marketing surface for Zabibu Technika and its products. It
          is provided as-is. We may change, suspend, or remove any part of it at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Intellectual property</h2>
        <p className="mt-2">
          The Zabibu Technika name, wordmarks, product marks, website copy, and visual design are
          owned by Zabibu Technika unless a page says otherwise. Brand assets are made available for
          press and editorial use under the terms in the{' '}
          <Link href="/media-kit" className="text-[#b887ff] underline underline-offset-2">
            media kit
          </Link>
          . Do not use them to imply endorsement without written permission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Product licenses</h2>
        <p className="mt-2">
          Open-source products are governed by their own licenses: Zabibu Weaver is MIT, and the
          Phosh.cpp open edition is MIT. Fikra models follow the license on their model card. Fikra
          Edge Runtime and the other hosted products are proprietary. The full breakdown is on the{' '}
          <Link href="/licenses" className="text-[#b887ff] underline underline-offset-2">
            licenses page
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Acceptable use</h2>
        <p className="mt-2">
          Do not attempt to disrupt the site, scrape it in a way that degrades service, bypass
          security controls, or use the brand to mislead people. Do not upload or send unlawful,
          harmful, or infringing material.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">No warranty</h2>
        <p className="mt-2">
          The site is provided without warranties of any kind, express or implied. Product
          descriptions are informative and do not replace the documentation or license of the
          product itself.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Limitation</h2>
        <p className="mt-2">
          To the maximum extent permitted by law, Zabibu Technika is not liable for indirect or
          consequential loss arising from use of this site. Nothing here limits rights that cannot be
          limited by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Governing law</h2>
        <p className="mt-2">
          These terms are governed by the laws of Kenya. Any dispute will be handled in the courts of
          Kenya, unless a mandatory law says otherwise.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p className="mt-2">
          Questions about these terms:{' '}
          <a href="mailto:zabibutechnika@gmail.com" className="text-[#b887ff] underline underline-offset-2">
            zabibutechnika@gmail.com
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-white/40">
        This is a plain-language summary, not legal advice.
      </p>
    </LegalPage>
  )
}
