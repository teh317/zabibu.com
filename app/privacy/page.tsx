import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Privacy — Zabibu Technika',
  'How Zabibu Technika handles data on this website: no advertising cookies, aggregate analytics, contact emails, and your choices.',
  '/privacy'
)

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal / Privacy"
      title="Privacy"
      updated="10 November 2026"
      path="/privacy"
      description="This site is built local-first in spirit: no account is required, no advertising profile is built, and the data you send us is the data you choose to send."
      schema={webPageSchema({
        name: 'Privacy — Zabibu Technika',
        description: 'How Zabibu Technika handles data on this website.',
        path: '/privacy',
      })}
    >
      <section>
        <h2 className="text-xl font-bold text-white">The short version</h2>
        <p className="mt-2">
          You can read this site without an account. We do not sell personal data. We use aggregate
          analytics to understand which pages are useful, and we use the information you send us to
          reply to you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">What this site collects</h2>
        <p className="mt-2">
          <strong className="text-white">Usage data.</strong> We use Vercel Analytics to understand
          aggregate page views, referrers, and performance. It is not used to build an advertising
          profile, and we do not run third-party advertising trackers.
        </p>
        <p className="mt-3">
          <strong className="text-white">Contact data.</strong> If you email us or use a contact
          form, we receive the name, email address, and message you choose to send. That information
          is used to respond and to keep a record of the conversation.
        </p>
        <p className="mt-3">
          <strong className="text-white">Technical logs.</strong> Our hosting provider may process
          standard request logs, such as IP address, user agent, and timestamps, to operate and
          secure the service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Cookies</h2>
        <p className="mt-2">
          We do not use advertising cookies. The core site does not require a login cookie. If you
          follow a link to a product site, that site has its own policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">How we use information</h2>
        <p className="mt-2">
          To operate the site, respond to messages, improve the product pages, protect against
          abuse, and meet legal obligations. We do not sell or rent personal data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Your choices</h2>
        <p className="mt-2">
          You can ask us what personal data we hold about you, request a correction, or request
          deletion by emailing{' '}
          <a href="mailto:zabibutechnika@gmail.com" className="text-[#b887ff] underline underline-offset-2">
            zabibutechnika@gmail.com
          </a>
          . You can also use your browser’s privacy controls to block or clear cookies and
          analytics.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Children</h2>
        <p className="mt-2">
          This site is not directed to children under 13. We do not knowingly collect personal data
          from children. If you believe a child has sent us data, contact us and we will remove it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Third-party links</h2>
        <p className="mt-2">
          Product links may take you to Lovable, Vercel, Netlify, Hugging Face, or other services.
          Those services have their own privacy policies and data practices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Changes</h2>
        <p className="mt-2">
          If this policy changes, the updated date at the top of this page will change. Material
          changes will be noted in the{' '}
          <Link href="/changelog" className="text-[#b887ff] underline underline-offset-2">
            changelog
          </Link>
          .
        </p>
      </section>

      <p className="text-sm text-white/40">
        This is a plain-language summary of our practices, not legal advice.
      </p>
    </LegalPage>
  )
}
