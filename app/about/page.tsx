import type { Metadata } from 'next';
import { PortalFrame, SectionHeading } from '@/components/portal-shell';
import { QuotableSummary } from '@/components/quotable-summary';
import { aboutPageSchema, JsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(
  'About — AI & Technology Company in Nairobi, Kenya',
  'Zabibu Technika is an AI and technology company founded in Nairobi, Kenya in 2006. Learn about its mission, 20-year research heritage, and sovereign, local-first products.',
  '/about'
);

const timeline = [
  {
    year: '2006',
    title: 'Founded as Grape Technologies Inc.',
    description: 'Inception as an independent research studio by Tehillah Mwangada Kachila, rooted in foundational interface curiosity.',
  },
  {
    year: '2006–2023',
    title: 'Foundational R&D & Concept Studio',
    description: 'Seventeen years of deep exploration across adaptive interface design, security architectures, and intelligent systems.',
  },
  {
    year: '2023',
    title: 'Research Publication & Virosauda',
    description: 'Published the Agentic Artificial Intelligence paper and introduced the Virosauda perceptual imaging system.',
  },
  {
    year: 'Late 2024',
    title: 'First Public Launch: Ella',
    description: 'Transitioned to public software deployment with Ella, a local-first encrypted journaling companion serving 200+ global users.',
  },
  {
    year: '2025–2026',
    title: 'Sovereign Consumer Ecosystem',
    description: 'Expansion into Zabibu Arif (400+ active users), Zabibu OS, Sigana TV, Ustadi Dashboard, and the LISP security framework.',
  },
];

const products = [
  {
    tag: 'FLAGSHIP AI',
    title: 'Zabibu Arif',
    category: 'Agentic Intelligence & Cognitive Sparring',
    desc: 'Conversational, contextually aware companion engineered for low-spec hardware and sub-1MB micro-browsers. 400+ active users.',
    link: 'https://bit.ly/zabibuarif',
  },
  {
    tag: 'OPERATING SYSTEM',
    title: 'Zabibu OS',
    category: 'Elemental Web-Native Computing',
    desc: 'Modular, human-centered desktop and mobile environment built on the principle of software guiding hardware.',
    link: 'https://zabibu.lovable.app',
  },
  {
    tag: 'MEDIA & STREAMING',
    title: 'Sigana',
    category: 'Thoughtful Television & Curated Feeds',
    desc: 'Lightweight, community-first ambient media platform merging live channels and digital feeds with zero bloat.',
    link: 'https://sigana.lovable.app',
  },
  {
    tag: 'DIGITAL WELL-BEING',
    title: 'Ella',
    category: 'Local-First Journaling Companion',
    desc: 'Privacy-first, zero-cloud reflective journal combining emotional intelligence with local encryption. 200+ users.',
    link: 'https://heyella.netlify.app',
  },
  {
    tag: 'ACCESSIBILITY & LANGUAGE',
    title: 'Glipter',
    category: 'On-Device Sign Language Engine',
    desc: 'Offline-first sign recognition built for Kenyan Sign Language, with local inference, no upload, and published limits as a Tier 0 demonstrator.',
    link: 'https://glipter.vercel.app',
  },
  {
    tag: 'SECURITY ARCHITECTURE',
    title: 'LISP Protocol',
    category: 'Lux Integrated Security Protocol',
    desc: 'Self-verifying software framework blending steganography, autonomous tamper detection, and IP origin defense.',
  },
  {
    tag: 'SIGNAL PROCESSING',
    title: 'Virosauda',
    category: 'Computational Aesthetic Modeling',
    desc: 'Advanced ISP research introducing adaptive perceptual color mapping and dynamic tone behavior.',
  },
  {
    tag: 'PRODUCTIVITY',
    title: 'Ustadi Dashboard',
    category: 'Adaptive Workspace Interface',
    desc: 'Minimalist personal dashboard unifying work, scheduling, and communication into a single flow-state canvas.',
  },
];

const researchThemes = [
  'Adaptive UI & Emotional Computing',
  'Self-Verifying Software Architectures',
  'Agentic Context Modeling & Micro-AI',
  'Cloud-Optional & Local-First Storage',
  'Human-Centered Sovereign Operating Systems',
];

export default function About() {
  return (

      <PortalFrame>
        <JsonLd data={aboutPageSchema()} />
        {/* Header */}
        <SectionHeading
          eyebrow="Company Overview & Heritage"
          title={
            <>
              A 20-year legacy.
              <br />
              <span className="text-gradient">Humane computing from Kenya.</span>
            </>
          }
          copy="Zabibu Technika is an AI and technology company based in Nairobi, Kenya, engineering sovereign software, edge AI frameworks, and secure systems."
        />

        {/* Quick Facts Strip */}
        <QuotableSummary cite="Zabibu Technika — company definition">
          Zabibu Technika is an AI and technology company based in Nairobi, Kenya. Founded in 2006
          as Grape Technologies, it builds sovereign, local-first software, edge AI models, and
          operating systems for Africa and the global South.
        </QuotableSummary>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Founded</p>
            <p className="text-lg font-bold text-white mt-1">June 2006</p>
            <p className="text-xs text-accent">Orig. Grape Technologies</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Founder & Lead</p>
            <p className="text-lg font-bold text-white mt-1">Tehillah Kachila</p>
            <p className="text-xs text-muted-foreground">Kenya Headquarters</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Primary Focus</p>
            <p className="text-lg font-bold text-white mt-1">R&D & Consumer Tech</p>
            <p className="text-xs text-muted-foreground">Edge AI & Sovereign OS</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Deployment</p>
            <p className="text-lg font-bold text-white mt-1">600+ Global Users</p>
            <p className="text-xs text-accent">Across Arif & Ella</p>
          </div>
        </div>

        {/* Mission & Vision Bento */}
        <div className="grid gap-6 md:grid-cols-2 my-12">
          <article className="portal p-8 border-l-2 border-l-amber-500">
            <span className="tag">01 // MISSION</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Engineering Clarity. Designing Emotion.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To engineer technologies that are secure, intelligent, and deeply human—bridging art, science, and usability in every product we release to the global South and beyond.
            </p>
          </article>
          <article className="portal p-8 border-l-2 border-l-purple-500">
            <span className="tag">02 // VISION</span>
            <h3 className="mt-4 text-2xl font-bold text-white">The Sovereign Computing Paradigm</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To become a leading innovator in humane computing—building systems that think, protect, and inspire without extracting data or demanding cloud dependency.
            </p>
          </article>
        </div>

        {/* Company Evolution Timeline */}
        <div className="my-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-8">Evolution Timeline (2006 — Present)</h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="portal p-6 flex flex-col md:flex-row gap-6 items-start">
                <span className="font-mono text-sm font-bold text-accent min-w-[120px]">{item.year}</span>
                <div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product & Research Portfolio */}
        <div className="my-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-8">Ecosystem & Research Initiatives</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((prod, i) => (
              <article className="portal p-6 flex flex-col justify-between" key={i}>
                <div>
                  <span className="tag text-[10px]">{prod.tag}</span>
                  <h4 className="mt-4 text-xl font-bold text-white">{prod.title}</h4>
                  <p className="text-xs font-mono text-accent mt-0.5">{prod.category}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{prod.desc}</p>
                </div>
                {prod.link && (
                  <a
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-accent hover:underline"
                  >
                    Open System ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Active Research Themes */}
        <div className="my-16 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Active Research Themes</h3>
          <div className="flex flex-wrap gap-2">
            {researchThemes.map((theme, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full text-xs bg-white/[0.05] border border-white/10 text-zinc-300">
                {theme}
              </span>
            ))}
          </div>
        </div>

        {/* Founder & Legacy Tribute */}
        <div className="my-16 portal p-8 md:p-12 relative overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.04] to-purple-500/[0.04]">
          <span className="tag">LEADERSHIP & ORIGIN</span>
          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-white">A Life's Work and Legacy</h3>
          <blockquote className="mt-4 text-zinc-300 italic text-base md:text-lg leading-relaxed border-l-2 border-accent pl-4 my-6">
            "Founded on curiosity. Driven by intelligence. Zabibu Technika is the evolution of a dream that began in 2006—built not by consuming the leftovers of Silicon Valley, but through persistent research, deep discipline, and a commitment to software that breathes."
          </blockquote>
          <div className="mt-6">
            <p className="text-base font-bold text-white">Tehillah Mwangada Kachila</p>
            <p className="text-xs text-muted-foreground font-mono">Founder & Lead Architect, Zabibu Technika</p>
          </div>
        </div>
      </PortalFrame>
  
  );
}
