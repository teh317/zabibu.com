export type HubItem = {
  title: string
  label: string
  text: string
  href?: string
  meta?: string
  logo?: string
  logoBg?: 'light' | 'dark'
}

export type HubSection = {
  number: string
  title: string
  note: string
  grid: string
  items: HubItem[]
}

export const catalogSections: HubSection[] = [
  {
    number: '01',
    title: 'Assistants, Agents & Companions',
    note: '05 products',
    grid: 'lg:grid-cols-3',
    items: [
      {
        title: 'Zabibu Arif',
        logo: '/images/logos/arif.png',
        logoBg: 'dark',
        label: 'Workspace & assistant',
        text: 'Your main workspace and assistant—the central place where you write, plan, code, and organize your daily work, powered by the Fikra Engine for thoughtful, human-centered interactions.',
        href: 'https://zabibuarif.lovable.app',
        meta: 'Flagship',
      },
      {
        title: 'Arif Agent',
        logo: '/images/logos/arifagent.svg',
        logoBg: 'dark',
        label: 'Agentic execution',
        text: 'Zabibu Arif’s hyperspecialized sibling. It handles real-world agentic execution and is embedded directly inside Zabibu Arif to expand its capabilities.',
        href: 'https://arifagent.vercel.app',
        meta: 'Embedded',
      },
      {
        title: 'Zabibu Weaver',
        logo: '/images/logos/weaver.svg',
        logoBg: 'dark',
        label: 'Open-source agent',
        text: 'Our free, open-source agent. It is fully model-agnostic, meaning it is built to work with any kind of AI model you choose rather than being locked to a single option.',
        href: 'https://zabibuweaver.vercel.app',
        meta: 'Open source',
      },
      {
        title: 'Ella',
        logo: '/images/logos/ella-icon.png',
        logoBg: 'light',
        label: 'Journal & care',
        text: 'Your encrypted private journal and care companion, designed to guide users through thoughtful reflections on their daily experiences, emotions, and moods.',
        href: 'https://heyella.netlify.app',
        meta: 'Private',
      },
      {
        title: 'Ustadi',
        label: 'Skills & mastery',
        text: 'A specialized assistant and tool within our ecosystem designed to help users build, master, and elevate practical, real-world skills.',
        meta: 'In development',
      },
    ],
  },
  {
    number: '02',
    title: 'Operating Systems & Media',
    note: '02 products',
    grid: 'lg:grid-cols-2',
    items: [
      {
        title: 'Zabibu OS',
        logo: '/images/logos/zabibuos.png',
        logoBg: 'dark',
        label: 'Operating layer',
        text: 'Our elemental web-native local operating layer designed to provide a smooth, unified computing environment.',
        href: 'https://zabibu.lovable.app',
        meta: 'Local-first',
      },
      {
        title: 'Sigana',
        logo: '/images/logos/sigana.svg',
        logoBg: 'dark',
        label: 'Media & streaming',
        text: 'Premium TV and streaming service. 100% free! No subs, no login, just some of your favorite shows and channels from across the world.',
        href: 'https://sigana.lovable.app',
        meta: 'Free',
      },
    ],
  },
  {
    number: '03',
    title: 'Core Systems, Runtimes & Testing',
    note: '04 products',
    grid: 'lg:grid-cols-2',
    items: [
      {
        title: 'Phosh.cpp',
        logo: '/images/logos/phosh.svg',
        logoBg: 'dark',
        label: 'Edge inference',
        text: 'Our open-source llama.cpp adapter tailored for edge devices. It optimizes speed, thermal management (heating), and context distribution where standard tools fall short.',
        href: 'https://phosh.vercel.app',
        meta: 'Open source',
      },
      {
        title: 'Fikra Edge Runtime',
        logo: '/images/logos/fikra.svg',
        logoBg: 'dark',
        label: 'Enterprise runtime',
        text: 'The proprietary version of Phosh.cpp that we use internally to power and manage our models.',
        href: 'https://zabibufikra.vercel.app',
        meta: 'Proprietary',
      },
      {
        title: 'Zabibu Canary',
        logo: '/images/logos/canary.svg',
        logoBg: 'dark',
        label: 'Pre-release testing',
        text: 'Our pre-release testing channel that checks the impact of your code and codebase across 5 critical setups, requiring a signature to create recorded evidence of a human in the loop during development.',
        href: 'https://zabibucanary.vercel.app',
        meta: 'HITL',
      },
      {
        title: 'Glipter',
        logo: '/images/logos/glipter.svg',
        logoBg: 'dark',
        label: 'Sign language engine',
        text: 'An offline-first, on-device sign language engine. It reads sign through any camera, runs inference locally, and puts Kenyan Sign Language first. A Tier 0 demonstrator with Deaf-led review as the next gate.',
        href: 'https://glipter.vercel.app',
        meta: 'Tier 0',
      },
    ],
  },
  {
    number: '04',
    title: 'The AI Models (The Fikra Lineup)',
    note: '02 models',
    grid: 'lg:grid-cols-2',
    items: [
      {
        title: 'Fikra Model 1 - 2B',
        logo: '/images/logos/fikra.svg',
        logoBg: 'dark',
        label: 'Local model',
        text: 'Our pioneering 2-billion parameter model built specifically for local execution and edge devices.',
        href: 'https://zabibufikra.vercel.app',
        meta: '2B',
      },
      {
        title: 'Fikra Model 2 - 4B',
        logo: '/images/logos/fikra.svg',
        logoBg: 'dark',
        label: 'Advanced model',
        text: 'Our advanced 4-billion parameter model with deeper training, tightly integrated with Zabibu Arif and the upcoming Zabibu OS. It features enhanced code-switching, deep grounding in local realities, vision capabilities, and advanced tool use.',
        href: 'https://zabibufikra.vercel.app',
        meta: '4B',
      },
    ],
  },
]

export const catalogItems = catalogSections.flatMap((section) => section.items)
