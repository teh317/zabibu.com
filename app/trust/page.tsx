import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Trust — Security & Responsible AI',
  'How Zabibu Technika approaches security, local-first data sovereignty, responsible AI, and vulnerability disclosure.',
  '/trust'
)

export default function TrustPage() {
  return (
    <LegalPage
      eyebrow="Trust / Security"
      title="Trust"
      updated="10 November 2026"
      path="/trust"
      description="Sovereign software only works if the trust is legible. This page explains the posture behind the products and how to report a problem."
      schema={webPageSchema({
        name: 'Trust — Zabibu Technika',
        description: 'Security, local-first data sovereignty, responsible AI, and vulnerability disclosure.',
        path: '/trust',
      })}
    >
      <section>
        <h2 className="text-xl font-bold text-white">Local-first by architecture</h2>
        <p className="mt-2">
          The products are designed so that models, prompts, and data can stay on the device. The
          network is optional, not a precondition. Where a product needs a cloud service, that choice
          is stated on the product page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">No telemetry by default</h2>
        <p className="mt-2">
          The local-first tools are built without mandatory telemetry or an account requirement.
          This website uses aggregate Vercel Analytics; it does not run advertising trackers or build
          an advertising profile.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Human in the loop</h2>
        <p className="mt-2">
          Zabibu Canary and the Weaver verification model are built around recorded human approval
          and proof receipts. The system should show what ran, what passed, what was skipped, and
          who signed it off.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Responsible AI</h2>
        <p className="mt-2">
          We prefer narrow, inspectable systems over unbounded autonomy: local execution where it is
          possible, explicit permissions, reversible actions, and a human decision before an
          irreversible external effect. This site does not train models on visitor data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Security posture</h2>
        <p className="mt-2">
          The website is served over HTTPS with HSTS, content-type protection, a restrictive frame
          policy, and a minimal permissions policy. We keep the dependency surface small and avoid
          third-party advertising scripts. No system is perfect; we would rather hear about a problem
          than hide it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Vulnerability disclosure</h2>
        <p className="mt-2">
          If you believe you have found a security issue, email{' '}
          <a href="mailto:zabibutechnika@gmail.com?subject=Security%20report" className="text-[#b887ff] underline underline-offset-2">
            zabibutechnika@gmail.com
          </a>{' '}
          with the affected URL, a short reproduction, and the impact. Please do not access other
          people’s data, degrade the service, or publish the issue before we have had a chance to
          respond. Our machine-readable disclosure file is at{' '}
          <a href="/.well-known/security.txt" className="text-[#b887ff] underline underline-offset-2">
            /.well-known/security.txt
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Read more</h2>
        <p className="mt-2">
          <Link href="/privacy" className="text-[#b887ff] underline underline-offset-2">Privacy</Link>
          {' · '}
          <Link href="/terms" className="text-[#b887ff] underline underline-offset-2">Terms</Link>
          {' · '}
          <Link href="/accessibility" className="text-[#b887ff] underline underline-offset-2">Accessibility</Link>
          {' · '}
          <Link href="/licenses" className="text-[#b887ff] underline underline-offset-2">Licenses</Link>
        </p>
      </section>
    </LegalPage>
  )
}
