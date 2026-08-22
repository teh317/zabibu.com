'use client';

import { useState } from 'react';
import { PortalFrame, PortalShell, SectionHeading } from '@/components/portal-shell';

const elementalThemes = [
  { name: 'Hewani', label: 'Air / Sky', accent: '#06B6D4', bg: 'from-cyan-950/40 to-black' },
  { name: 'Ardhi', label: 'Earth / Ochre', accent: '#F59E0B', bg: 'from-amber-950/40 to-black' },
  { name: 'Maji', label: 'Water / Deep', accent: '#3B82F6', bg: 'from-blue-950/40 to-black' },
  { name: 'Moto', label: 'Fire / Ember', accent: '#EF4444', bg: 'from-rose-950/40 to-black' },
];

const capabilities = [
  {
    num: '01',
    title: 'LOCAL-FIRST CORE',
    desc: 'Zero mandatory cloud tethering. Files, credentials, and state reside purely on the physical device.',
  },
  {
    num: '02',
    title: 'ELEMENTAL UX',
    desc: 'Adaptive aesthetic environments calibrated to circadian rhythm, battery state, and light levels.',
  },
  {
    num: '03',
    title: 'LOW-SPEC SOVEREIGNTY',
    desc: 'Designed for sub-1MB runtime footprints, micro-browsers, and resilient African hardware constraints.',
  },
];

export default function ZabibuOS() {
  const [activeTheme, setActiveTheme] = useState(elementalThemes[0]);

  return (
    <PortalShell>
      <PortalFrame>
        <SectionHeading
          eyebrow="ZabibuOS / Elemental Computing"
          title={
            <>
              An operating layer
              <br />
              <span className="text-gradient">that adapts to context.</span>
            </>
          }
          copy="An experimental web-native operating system merging modular multitasking, low-spec optimization, and elemental environments built for true digital sovereignty."
        />

        {/* Prototype Interactive Launch Frame */}
        <div className={`os-demo p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-b ${activeTheme.bg} transition-all duration-500 my-8 shadow-2xl`}>
          {/* Virtual Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: activeTheme.accent }} />
              <span className="font-mono text-xs tracking-wider text-white">
                ZABIBU_OS // {activeTheme.name.toUpperCase()} KERNEL
              </span>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center gap-2 bg-black/50 p-1.5 rounded-xl border border-white/10">
              {elementalThemes.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTheme(item)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeTheme.name === item.name
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Prototype Hero Banner */}
          <div className="py-12 md:py-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
              Active Environment: {activeTheme.name} ({activeTheme.label})
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-6 leading-tight">
              Software guiding hardware. <br />Experience the interface live.
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              Interact with the live browser-native environment, file sandboxes, and modular elemental themes directly in your browser.
            </p>

            {/* Launch Prototype CTA Button */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://zabibu.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2"
              >
                Launch ZabibuOS Prototype ↗
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbC0Nnj5a248TWBGLk2s"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] text-xs font-bold uppercase tracking-wider text-white transition-all"
              >
                Join Kernel Testing Channel
              </a>
            </div>
          </div>

          {/* System Spec Strips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10 font-mono text-[11px] text-zinc-400">
            <div>
              <span className="text-muted-foreground block text-[9px] uppercase">Telemetry</span>
              <span className="text-emerald-400 font-bold">Zero Telemetry (100% Offline)</span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[9px] uppercase">Architecture</span>
              <span className="text-white">Web-Native / Wasm Sandbox</span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[9px] uppercase">Memory Budget</span>
              <span className="text-accent">&lt; 1.2MB Runtime Base</span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[9px] uppercase">Deployment</span>
              <span className="text-white">Cross-Platform / Browser</span>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {capabilities.map((cap) => (
            <div className="portal p-6 border border-white/10" key={cap.num}>
              <span className="tag">{cap.num} // ARCHITECTURE</span>
              <h3 className="mt-6 text-xl font-bold text-white">{cap.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{cap.desc}</p>
            </div>
          ))}
        </div>
      </PortalFrame>
    </PortalShell>
  );
}
