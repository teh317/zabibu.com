import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PortalCard, PortalFrame, SectionHeading } from '@/components/portal-shell'

const products = [
  ['Zabibu Arif', 'COGNITION / AMBER', 'Zabibu Arif is an intelligent companion powered by Fikra Engine, combining advanced conversational intelligence with thoughtful, human-centered interactions.', '/arif', '/images/arif.png', 'portal-amber'],
  ['ZabibuOS', 'COMPUTE / CYAN', 'A local-first operating layer for African builders.', '/zabibuos', '/images/zabibu.png', 'portal-cyan'],
  ['Sigana', 'MEDIA / FUCHSIA', 'Premium TV and streaming service. 100% free! No subs, no login, just some of your favorite shows and channels from across the world!', '/sigana', '/images/sigana.png', 'portal-fuchsia'],
  ['Fikra 2B', 'OPEN WEIGHTS / EMERALD', 'Small, sharp reasoning weights you can understand and own.', '/fikra', '/images/fikra.png', 'portal-emerald'],
  ['Ella', 'CARE / ROSE', 'Ella is a journaling app designed to guide users through thoughtful reflections on their daily experiences, emotions, and moods.', '/ella', '/images/ella.png', 'portal-rose'],
  ['The Manifesto', 'PHILOSOPHY / AMBER', 'Our core declaration on sovereign computing, low-bandwidth resilience, and digital rights for Africa.', '/manifesto', '/images/fikra.png', 'portal-amber'],
] as const

export default function Hub() {
  return (
    <PortalFrame>
      <SectionHeading
        eyebrow="Zabibu hub / sovereign systems"
        title={
          <>
            The tools are
            <br />
            <span className="text-gradient">already here.</span>
          </>
        }
        copy="Six focused portals. One Nairobi-rooted technology studio. Choose the system that meets you where you are."
      />

      {/* Products & Portals Grid */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Zabibu ecosystem">
        {products.map(([title, label, text, href, image, accent], index) => (
          <PortalCard
            key={href}
            title={title}
            label={label}
            text={text}
            href={href}
            image={image}
            className={`${accent} ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          />
        ))}
      </section>

      {/* Interactive Manifesto Banner Section */}
      <section className="manifesto relative overflow-hidden mt-16 p-7 md:p-10 rounded-2xl border border-amber-500/30 bg-amber-950/10">
        <p className="eyebrow text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em]">
          The operating principle
        </p>
        <p className="mt-5 max-w-4xl text-2xl font-semibold leading-relaxed md:text-4xl text-white">
          Build for the conditions you know. Make it useful enough to travel.
        </p>
        <div className="mt-8">
          <Link
            href="/manifesto"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            Read the full manifesto <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </PortalFrame>
  )
}
