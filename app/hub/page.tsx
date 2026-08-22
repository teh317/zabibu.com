import { PortalCard, PortalFrame, SectionHeading } from '@/components/portal-shell'

const products = [
  ['Zabibu Arif', 'COGNITION / AMBER', 'Zabibu Arif is an intelligent companion powered by Fikra Engine, combining advanced conversational intelligence with thoughtful, human-centered interactions.', '/arif', '/images/arif.png', 'portal-amber'],
  ['ZabibuOS', 'COMPUTE / CYAN', 'A local-first operating layer for African builders.', '/zabibuos', '/images/zabibu.png', 'portal-cyan'],
  ['Sigana', 'MEDIA / FUCHSIA', 'Premium TV and streaming service. 100% free! No subs, no login, just some of your favorite shows and channels from across the world!', '/sigana', '/images/sigana.png', 'portal-fuchsia'],
  ['Fikra 2B', 'OPEN WEIGHTS / EMERALD', 'Small, sharp reasoning weights you can understand and own.', '/fikra', '/images/fikra.png', 'portal-emerald'],
  ['Ella', 'CARE / ROSE', 'Ella is a journaling app designed to guide users through thoughtful reflections on their daily experiences, emotions, and moods.', '/ella', '/images/ella.png', 'portal-rose'],
] as const

export default function Hub() {
  return <PortalFrame><SectionHeading eyebrow="Zabibu hub / sovereign systems" title={<>The tools are<br /><span className="text-gradient">already here.</span></>} copy="Five focused portals. One Nairobi-rooted technology studio. Choose the system that meets you where you are." /><section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Zabibu ecosystem">{products.map(([title, label, text, href, image, accent], index) => <PortalCard key={href} title={title} label={label} text={text} href={href} image={image} className={`${accent} ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`} />)}</section><section className="manifesto mt-16 p-7 md:p-10"><p className="eyebrow">The operating principle</p><p className="mt-5 max-w-4xl text-2xl font-semibold leading-relaxed md:text-4xl">Build for the conditions you know. Make it useful enough to travel.</p></section></PortalFrame>
}
