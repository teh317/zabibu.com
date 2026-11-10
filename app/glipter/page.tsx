import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Cpu,
  FileText,
  FlaskConical,
  Hand,
  Languages,
  Mic,
  MonitorSmartphone,
  ShieldCheck,
  WifiOff,
} from 'lucide-react'
import { PortalFrame } from '@/components/portal-shell'
import { breadcrumbSchema, JsonLd } from '@/lib/seo'

const pipeline = [
  ['01', 'Camera', 'getUserMedia reads the frame in the browser. Nothing is uploaded.'],
  ['02', 'Landmarks', 'MediaPipe Hands, vendored locally, tracks 21 points per hand.'],
  ['03', 'Features', 'Wrist-centred, scale-normalised coordinates, pairwise distances, and joint angles.'],
  ['04', 'Model', 'A tiny neural network runs in plain JavaScript. No server, no GPU.'],
  ['05', 'Grammar', 'Letters become words; KSL gets a conservative subject-object-verb move.'],
]

const capabilities = [
  {
    title: 'Kenyan Sign Language, first-class',
    text: 'KSL is the default profile, not an afterthought. Fingerspelling runs on the static alphabet model.',
    icon: Hand,
  },
  {
    title: 'ASL and a KSL word pilot',
    text: 'ASL ships with the static A–Z alphabet. The KSL word model is a four-sign pilot: FATHER, HELLO, IS, MY.',
    icon: Languages,
  },
  {
    title: 'Experimental BSL',
    text: 'A rule-based BSL profile for exploration. No permissively licensed BSL landmark corpus is bundled yet.',
    icon: FlaskConical,
  },
  {
    title: 'Transcripts you can keep',
    text: 'Every recognised sign is logged with timestamps and confidence, then exported as TXT, CSV, or JSON.',
    icon: FileText,
  },
  {
    title: 'Handshape library and practice',
    text: 'Every reference card is rendered from a real landmark sample. Guided practice gives instant feedback, one letter at a time.',
    icon: BookOpen,
  },
  {
    title: 'A two-way voice bridge',
    text: 'Speech becomes text for hearing speakers, and text becomes speech for the signed conversation. TTS prefers a local voice.',
    icon: Mic,
  },
  {
    title: 'Kiosk mode',
    text: 'A full-screen capture surface with no app chrome, built for tablets and public counters.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Private by architecture',
    text: 'The service worker precaches the app shell, recognition has no backend, and camera frames stay on the device.',
    icon: ShieldCheck,
  },
]

const limits = [
  'Tier 0 demonstrator. It is not a validated accessibility tool and is not a substitute for a professional interpreter.',
  'Model profiles are pending review by native Deaf signers. A model card is not consent or validation.',
  'ASL and KSL fingerspelling cover static handshapes only. J and Z need motion.',
  'The KSL word model knows four glosses: FATHER, HELLO, IS, and MY.',
  'BSL is rule-based and experimental, with no permissively licensed BSL landmark corpus bundled.',
  'No facial grammar, mouthing, or non-manual signals, all of which are part of real sign languages.',
  'Browser speech recognition may use an online service, and TTS may use a remote voice if no local voice is installed.',
  'Do not use Glipter in medical, legal, or other high-stakes settings.',
]

const roadmap = [
  ['Tier 0', 'Demonstrator', 'Real datasets, offline PWA, self-tests, and credits.', true],
  ['Tier 1', 'Working MVP', 'Full alphabets, about 50 static signs, motion signs, transcript export, and a Deaf review loop.', false],
  ['Tier 2', 'Real translator', 'Continuous signing, sign segmentation, around 500 signs, language auto-detect, and text to sign.', false],
  ['Tier 3', 'Community platform', 'No-code profile authoring, dataset contribution, versioned review, and ONNX plug-ins.', false],
  ['Tier 4', 'Universal edge', 'Any supported sign language, offline, sub-100 ms, kiosks and $30 devices, with Deaf-led validation everywhere.', false],
] as const

export default function Glipter() {
  return (
    <PortalFrame>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Hub', path: '/hub' },
          { name: 'Glipter', path: '/glipter' },
        ])}
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="eyebrow">Access &amp; language / On-device AI</p>
          <h1 className="mt-3 text-balance text-5xl font-black tracking-[-.06em] md:text-7xl">
            Glipter
            <br />
            <span className="text-gradient">sign language, on the device.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            An offline-first sign language engine that reads sign through any camera, runs
            inference locally, and puts Kenyan Sign Language first. There is no cloud in the
            recognition path.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-white/55">
            Glipter is a Tier 0 demonstrator: real hand tracking, real datasets, and published
            limits. It is built for the rural schools, public kiosks, and low-end phones where the
            interpreter gap is widest.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://glipter.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Open Glipter Studio <ArrowUpRight className="ml-2 size-4" />
            </a>
            <a
              href="#limits"
              className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Read the limits <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            <span>Tier 0 · demonstrator</span>
            <span>KSL · first-class</span>
            <span>On-device</span>
            <span>Offline-capable</span>
          </div>
        </div>

        <div className="terminal" aria-label="Glipter on-device recognition session">
          <div className="mb-4 flex items-center justify-between border-b border-[#38bdf8]/15 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            <span>glipter@device:~$</span>
            <span className="text-[#38bdf8]">no upload</span>
          </div>
          <pre className="whitespace-pre-wrap text-[11px] leading-7 text-white/60">{`$ glipter live --language ksl
[camera]   getUserMedia · local
[hands]    1 hand · 21 landmarks
[features] normalized · 42 values
[model]    ksl-static-v1 · on-device
[gloss]    HELLO
[english]  Hello
[export]   txt · csv · json`}</pre>
        </div>
      </div>

      <section className="mt-20 grid gap-10 border-t border-white/10 pt-14 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">The gap</p>
          <h2 className="mt-3 text-balance text-4xl font-black tracking-tight md:text-6xl">
            Built for the places <span className="text-gradient">the cloud forgot.</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-white/60">
          <p>
            There are not enough human sign language interpreters. In some schools the ratio has
            been reported as high as one interpreter for three hundred deaf students. Cloud-heavy
            avatar products cannot reach the rural schools, public kiosks, and low-end phones where
            that gap is widest.
          </p>
          <p>
            Glipter takes the opposite path: sign to text, on-device, offline-capable, and built
            language by language with the communities who use it. The product question stays
            simple: does this help a deaf student in Nairobi communicate with their teacher today,
            better than not having it?
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">01 / How it works</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Five steps, zero network in the loop.
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">On-device pipeline</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {pipeline.map(([number, title, text]) => (
            <article key={number} className="rounded-2xl border border-white/10 bg-[#08080b] p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#38bdf8]">{number}</span>
              <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">02 / What ships today</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
              A real pipeline, not a mock-up.
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">08 capabilities</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-[#08080b] p-5">
                <Icon className="size-5 text-[#00d5bf]" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="limits" className="mt-20 scroll-mt-28 rounded-2xl border border-[#ffbf3f]/25 bg-[#ffbf3f]/[0.03] p-6 md:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <AlertTriangle className="size-5 text-[#ffbf3f]" aria-hidden="true" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffbf3f]">Published limits</p>
        </div>
        <h2 className="mt-4 max-w-3xl text-balance text-2xl font-bold tracking-tight text-white md:text-3xl">
          What Glipter is not.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
          Every profile is pending review by native Deaf signers of that language. The limits are
          published with the numbers, because an accessibility product that overclaims is worse
          than one that is honestly incomplete.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {limits.map((limit) => (
            <li key={limit} className="flex gap-3 text-sm leading-6 text-white/60">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#ffbf3f]" aria-hidden="true" />
              <span>{limit}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-6 text-white/45">
          Camera access requires HTTPS or localhost. The interface, learn mode, demo, and self-test
          work without a camera.
        </p>
      </section>

      <section className="mt-20">
        <div className="mb-7 border-b border-white/10 pb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b887ff]">03 / Roadmap</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            From demonstrator to universal edge.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {roadmap.map(([tier, name, text, current]) => (
            <article
              key={tier}
              className={`rounded-2xl border p-5 ${
                current ? 'border-[#38bdf8]/40 bg-[#38bdf8]/[0.05]' : 'border-white/10 bg-[#08080b]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#38bdf8]">{tier}</span>
                {current && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">Now</span>
                )}
              </div>
              <h3 className="mt-3 text-base font-bold text-white">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 border-t border-white/10 pt-14 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <WifiOff className="size-4 text-[#00d5bf]" aria-hidden="true" />
            <p className="eyebrow">Privacy</p>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Frames stay on the device.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Glipter ships its own MediaPipe assets, models, and interface. The service worker
            precaches the app shell on first visit, later launches work with no network, and the
            recognition path has no backend. There is no upload of camera frames.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="size-4 text-[#38bdf8]" aria-hidden="true" />
            <p className="eyebrow">Built by</p>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Zabibu Technika, in Nairobi.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Glipter is an edge-AI product from Zabibu Technika, led by Tehillah Kachila. Research,
            product, and engineering are done in-house; every language profile is intended to move
            through Deaf-led review before real-world use.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://glipter.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Open Glipter Studio <ArrowUpRight className="ml-2 size-4" />
            </a>
            <Link
              href="/hub"
              className="outline-button pill px-5 py-3 text-[11px] font-bold uppercase tracking-wider"
            >
              Back to the hub <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      <p className="mt-14 border-t border-white/10 pt-6 text-xs leading-6 text-white/40">
        Glipter is a Tier 0 demonstrator. It is not a validated accessibility tool and is not a
        substitute for a professional interpreter. Every language profile requires Deaf-led review
        before real-world use.
      </p>
    </PortalFrame>
  )
}
