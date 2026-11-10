import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Accessibility — Zabibu Technika',
  'Zabibu Technika’s accessibility commitment, the measures on this site, known limitations, and how to give feedback.',
  '/accessibility'
)

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Trust / Accessibility"
      title="Accessibility"
      updated="10 November 2026"
      path="/accessibility"
      description="A site about humane computing should be usable by people with different bodies, devices, and connection speeds. This page explains what we have done and where we still need to improve."
      schema={webPageSchema({
        name: 'Accessibility — Zabibu Technika',
        description: 'Accessibility commitment, measures, known limitations, and feedback.',
        path: '/accessibility',
      })}
    >
      <section>
        <h2 className="text-xl font-bold text-white">Commitment</h2>
        <p className="mt-2">
          We aim to meet WCAG 2.2 AA on this website. That is a target, not a claim of certification.
          The site is designed to be readable, keyboard-operable, and usable on a small screen and a
          slow connection.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Measures</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Semantic headings, landmarks, lists, tables, and native details/summary controls.</li>
          <li>Visible focus styles and keyboard-operable navigation, links, and buttons.</li>
          <li>High-contrast text and a dark theme that avoids pure-white glare on black.</li>
          <li>Text alternatives for logos, product images, and meaningful graphics.</li>
          <li>Reduced-motion support: animations and transitions are disabled when the operating system asks for it.</li>
          <li>Responsive layouts that reflow to a single column on entry-level mobile screens.</li>
          <li>Native audio controls with labels; nothing autoplays.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Known limitations</h2>
        <p className="mt-2">
          Some linked product sites are built and maintained separately and may not meet the same
          standard. Embedded audio controls depend on the browser and operating system. If a
          third-party page blocks keyboard access or zoom, tell us and we will raise it with the
          product team.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Feedback</h2>
        <p className="mt-2">
          If something is hard to use, email{' '}
          <a href="mailto:zabibutechnika@gmail.com?subject=Accessibility%20feedback" className="text-[#b887ff] underline underline-offset-2">
            zabibutechnika@gmail.com
          </a>{' '}
          with the page, the device or assistive technology, and what happened. We will read it and
          fix what we can.
        </p>
      </section>
    </LegalPage>
  )
}
