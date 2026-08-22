import { PortalFrame, SectionHeading } from '@/components/portal-shell'
export default function Sigana() { return <PortalFrame><SectionHeading eyebrow="Sigana / media commons" title={<>Stories move<br /><span className="text-gradient">through us.</span></>} copy="A community-first TV and ambient media portal for music, oral history, and shared signal." /><div className="sigana-player portal p-6"><div className="equalizer" aria-label="Animated audio equalizer">{Array.from({length: 18}, (_, i) => <span key={i} style={{height: `${25 + (i * 17) % 65}%`}} />)}</div><div className="mt-8 flex items-center justify-between"><span className="font-bold">Nairobi / live room 01</span><span className="text-xs uppercase tracking-widest text-accent">Broadcasting</span></div></div></PortalFrame> }
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
