import { PortalFrame, SectionHeading } from '@/components/portal-shell'
export default function Bizkit() { return <PortalFrame><SectionHeading eyebrow="Zabibu Biscuit / bizkit" title={<>Commerce that<br /><span className="text-gradient">keeps moving.</span></>} copy="Offline-first tools for African SMBs, freelancers, and the people who make economies move." /><div className="portal p-8 md:p-12"><div className="grid gap-4 md:grid-cols-3"><div className="os-tile">INVOICES<br /><strong>042</strong></div><div className="os-tile">SYNC STATUS<br /><strong>LOCAL</strong></div><div className="os-tile">TODAY<br /><strong>KES 18.4K</strong></div></div><p className="mt-10 max-w-xl text-muted-foreground">Bizkit is being shaped with the businesses it serves. Join the pilot to help us build the right primitives.</p><a href="mailto:zabibutechnika@gmail.com" className="glow-button mt-7 px-5 py-3 text-xs font-bold uppercase tracking-wider">Join the pilot</a></div></PortalFrame> }
<div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
  <span className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400">
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
    Private R&D / Stealth
  </span>
  <a
    href="https://whatsapp.com/channel/0029VbC0Nnj5a248TWBGLk2s"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-white transition-all"
  >
    Request Spec ↗
  </a>
</div>
