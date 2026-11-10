import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Licenses — Zabibu Technika',
  'Licensing for Zabibu Technika brand assets, website content, open-source products, Fikra models, fonts, icons, and the official tune.',
  '/licenses'
)

export default function LicensesPage() {
  return (
    <LegalPage
      eyebrow="Legal / Licenses"
      title="Licenses"
      updated="10 November 2026"
      path="/licenses"
      description="The license on the product or model card controls if it differs from this summary. This page is a map, not a replacement for those terms."
      schema={webPageSchema({
        name: 'Licenses — Zabibu Technika',
        description: 'Licensing for brand assets, website content, products, fonts, icons, and audio.',
        path: '/licenses',
      })}
    >
      <section>
        <h2 className="text-xl font-bold text-white">Brand assets</h2>
        <p className="mt-2">
          The Zabibu Technika name, wordmarks, product marks, badge, social card, wallpapers, and
          the official tune are © Zabibu Technika. All rights reserved. Press, editorial, and
          partner use is permitted under the terms in the{' '}
          <a href="/media-kit" className="text-[#b887ff] underline underline-offset-2">media kit</a>.
          Do not distort, recolour, or use them to imply endorsement without written permission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Website content</h2>
        <p className="mt-2">
          The copy, layout, and visual design of this website are © Zabibu Technika. You may quote
          short passages with attribution and a link. Do not republish the site wholesale.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Open-source products</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Zabibu Weaver</strong> — MIT. Source and license in the{' '}
            <a href="https://github.com/Zabibu-Technika/zabibu" className="text-[#b887ff] underline underline-offset-2">
              Zabibu Technika repository
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Phosh.cpp, open edition</strong> — MIT. The proprietary
            Fikra Edge Runtime edition is separate.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Fikra models</h2>
        <p className="mt-2">
          Fikra model weights follow the license published on the model card. See{' '}
          <a href="https://huggingface.co/zabibutechnika/Zabibu-Fikra-2B" className="text-[#b887ff] underline underline-offset-2">
            the Fikra model card
          </a>{' '}
          for the exact terms. Model names and marks remain Zabibu Technika brand assets.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Proprietary products</h2>
        <p className="mt-2">
          Fikra Edge Runtime, Zabibu Arif, Arif Agent, Zabibu OS, Sigana, Ella, Ustadi, Zabibu
          Canary, and Glipter are proprietary unless their own page or agreement says otherwise.
          Contact the studio for commercial licensing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Fonts and icons</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Outfit</strong> — SIL Open Font License 1.1, via{' '}
            <a href="https://fonts.google.com/specimen/Outfit" className="text-[#b887ff] underline underline-offset-2">
              Google Fonts
            </a>
            .
          </li>
          <li>
            <strong className="text-white">JetBrains Mono</strong> — SIL Open Font License 1.1, via{' '}
            <a href="https://fonts.google.com/specimen/JetBrains+Mono" className="text-[#b887ff] underline underline-offset-2">
              Google Fonts
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Lucide</strong> — ISC license, via{' '}
            <a href="https://lucide.dev" className="text-[#b887ff] underline underline-offset-2">
              lucide.dev
            </a>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Audio</h2>
        <p className="mt-2">
          The Zabibu Technika Tune (standard and extended) is © Zabibu Technika. All rights
          reserved. You may listen, download, and use it in press or editorial coverage of Zabibu
          Technika with attribution. Do not remix, redistribute, or claim it as your own.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Questions</h2>
        <p className="mt-2">
          For licensing, co-branding, or commercial use, email{' '}
          <a href="mailto:zabibutechnika@gmail.com?subject=Licensing" className="text-[#b887ff] underline underline-offset-2">
            zabibutechnika@gmail.com
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-white/40">
        This page is informational. Where a product or model card states a different license, that
        license controls.
      </p>
    </LegalPage>
  )
}
