import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, BrainCircuit, Cpu, HeartPulse, Radio } from 'lucide-react'
import { PortalCard, PortalFrame, PortalShell, SectionHeading } from '@/components/portal-shell'
import { AmbientSlideshow } from '@/components/ambient-slideshow'

const cards = [
  {
    title: 'Zabibu Arif',
    label: 'FLAGSHIP / COGNITION',
    text: 'A Socratic cognitive engine for the questions underneath the question.',
    href: '/arif',
    image: '/images/arif.png',
  },
  {
    title: 'ZabibuOS',
    label: 'ELEMENTAL COMPUTING',
    text: 'A local-first operating layer for African builders and real-world constraints.',
    href: '/zabibuos',
    image: '/images/zabibu.png',
  },
  {
    title: 'Sigana',
    label: 'MEDIA / COMMUNITY',
    text: 'A community-first media space for stories, sound, and shared signal.',
    href: '/sigana',
    image: '/images/sigana.png',
  },
  {
    title: 'Fikra 2B',
    label: 'OPEN WEIGHTS',
    text: 'Small, sharp, open reasoning weights for the next generation of makers.',
    href: '/fikra',
    image: '/images/fikra.png',
  },
  {
    title: 'Ella',
    label: 'CARE / PRIVACY',
    text: 'An encrypted companion for tending to your inner world.',
    href: '/ella',
    image: '/images/ella.png',
  },
]

export default function Home() {
  return (
    <PortalShell>
      {/* Global Ambient Slideshow Background spanning the entire page */}
      <AmbientSlideshow />

      <main id="top" className="relative z-10">
        {/* Hero Section */}
        <section className="hero-grid relative overflow-hidden px-5 py-28 md:px-10 md:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <p className="eyebrow mb-7 inline-flex border border-primary/40 bg-primary/10 px-3 py-2 rounded-full">
                Tech should feel like home.
              </p>
              <h1 className="text-balance text-6xl font-black leading-[.9] tracking-[-.08em] md:text-9xl">
                Software<br />that <span className="text-gradient">breathes.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
                Zabibu Technika is a Nairobi-rooted technology company building sovereign, local-first systems for thought, commerce, care, and community.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/about" className="glow-button px-6 py-4 text-xs font-bold uppercase tracking-wider">
                  What is Zabibu? <ArrowUpRight className="ml-2 size-4" />
                </Link>
                <Link href="#ecosystem" className="outline-button px-6 py-4 text-xs font-bold uppercase tracking-wider">
                  Enter the hub
                </Link>
              </div>
            </div>

            {/* Hero Visual Artifact featuring ARIF preview */}
            <div className="bento-art relative min-h-[370px] border border-primary/40 bg-card/80 backdrop-blur-xl p-5 shadow-[0_30px_100px_rgba(124,58,237,.22)] overflow-hidden rounded-3xl">
              <div className="absolute inset-0 opacity-40">
                <Image 
                  src="/images/arif.png" 
                  alt="Zabibu ARIF Preview" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/80 to-transparent" />
              <div className="absolute inset-5 border border-cyan-300/30 p-4 flex flex-col justify-between z-10 rounded-2xl">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-cyan-200">
                  <span>ZABIBU / HUB_01</span>
                  <span className="pulse-dot" />
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="mini-tile bg-primary/35 flex items-center gap-2 p-2 rounded-xl"><BrainCircuit size={16}/><span>ARIF</span></div>
                    <div className="mini-tile bg-cyan-400/20 flex items-center gap-2 p-2 rounded-xl"><Cpu size={16}/><span>OS</span></div>
                    <div className="mini-tile bg-accent/30 flex items-center gap-2 p-2 rounded-xl"><HeartPulse size={16}/><span>ELLA</span></div>
                    <div className="mini-tile bg-fuchsia-500/25 flex items-center gap-2 p-2 rounded-xl"><Radio size={16}/><span>SIGANA</span></div>
                  </div>
                  <p className="font-mono text-xs leading-5 text-white/80">
                    // built for the edge<br />// designed from Nairobi<br />// open to the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Grid with Screenshots */}
        <PortalFrame>
          <SectionHeading
            eyebrow="The hub"
            title={
              <>
                Many doors.<br />
                <span className="text-gradient">One living stack.</span>
              </>
            }
            copy="A high-agency ecosystem for the full human context: how we think, make, trade, tell stories, and care for ourselves."
          />
          <div id="ecosystem" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <Link 
                key={card.title} 
                href={card.href}
                className={`portal p-6 flex flex-col justify-between group hover:border-accent/50 transition-all ${
                  i === 0 ? 'lg:col-span-2 border-amber-500/30 bg-amber-500/[0.02]' : ''
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="tag text-[10px]">{card.label}</span>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>

                  {card.image && (
                    <div className="mb-5 rounded-2xl overflow-hidden border border-white/10 bg-black/60 aspect-video relative">
                      <Image 
                        src={card.image} 
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.text}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                  Explore system ↗
                </div>
              </Link>
            ))}
          </div>
        </PortalFrame>

        {/* Why We Exist Section */}
        <section className="border-y border-white/10 bg-white/[.02] px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why we exist</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
                Technology with Nairobi in its nervous system.
              </h2>
            </div>
            <div className="text-lg leading-8 text-muted-foreground">
              <p>We make tools that respect context. They work on the hardware people have, remain useful when connectivity disappears, and leave room for local imagination.</p>
              <p className="mt-6">Zabibu is not a theme. It is a practice: sovereign systems, open-handed engineering, and an insistence that the future can be built from here.</p>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                Read the full story <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Manifesto Banner */}
        <PortalFrame className="pb-24">
          <div className="manifesto p-8 md:p-14 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-950/30 to-amber-950/30">
            <p className="eyebrow text-accent">Dispatch 001</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl text-white">
              The future should feel like a place you recognize.
            </h2>
            <Link href="/dispatches" className="mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 text-xs font-bold uppercase tracking-wider text-black font-bold rounded-2xl">
              Read dispatches <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </PortalFrame>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/40 px-5 py-16 md:px-10 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <span className="text-xl font-black tracking-tight text-white">ZABIBU TECHNIKA</span>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Building local-first computational infrastructure, cognitive models, and community spaces from Nairobi to the world.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Ecosystem</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/arif" className="hover:text-white transition-colors">Zabibu Arif</Link></li>
                <li><Link href="/zabibuos" className="hover:text-white transition-colors">ZabibuOS</Link></li>
                <li><Link href="/sigana" className="hover:text-white transition-colors">Sigana</Link></li>
                <li><Link href="/fikra" className="hover:text-white transition-colors">Fikra 2B</Link></li>
                <li><Link href="/ella" className="hover:text-white transition-colors">Ella</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Company</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/dispatches" className="hover:text-white transition-colors">Dispatches</Link></li>
                <li><Link href="/manifesto" className="hover:text-white transition-colors">Manifesto</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Zabibu Technika. All rights reserved.</p>
            <p className="mt-4 md:mt-0 font-mono text-[11px] text-accent/80">Designed from Nairobi.</p>
          </div>
        </footer>
      </main>
    </PortalShell>
  )
}
