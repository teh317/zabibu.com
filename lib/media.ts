import fs from 'node:fs'
import path from 'node:path'

export type MediaAsset = {
  title: string
  description: string
  href: string
  format: string
  dimensions?: string
  preview?: string
  previewBg?: 'light' | 'dark'
  audio?: boolean
  note?: string
  size: string
}

function fileSize(relativePath: string) {
  try {
    const bytes = fs.statSync(path.join(process.cwd(), 'public', relativePath)).size
    return bytes >= 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.max(1, Math.round(bytes / 1024))} KB`
  } catch {
    return '—'
  }
}

function asset(
  title: string,
  description: string,
  href: string,
  format: string,
  extra: Partial<MediaAsset> = {}
): MediaAsset {
  return {
    title,
    description,
    href,
    format,
    preview: extra.audio ? undefined : href,
    size: fileSize(href.replace(/^\//, '')),
    ...extra,
  }
}

export const brandAssets: MediaAsset[] = [
  asset(
    'Zabibu Technika wordmark — white',
    'Primary wordmark for dark backgrounds. Transparent PNG.',
    '/downloads/logos/zabibu-technika-wordmark-white.png',
    'PNG',
    { dimensions: '800 × 325' }
  ),
  asset(
    'Zabibu Technika wordmark — black',
    'Wordmark for light backgrounds. Transparent PNG.',
    '/downloads/logos/zabibu-technika-wordmark-black.png',
    'PNG',
    { dimensions: '800 × 325', previewBg: 'light' }
  ),
  asset(
    'Zabibu Technika wordmark — alternate',
    'Alternate logo layout for editorial and cover use.',
    '/downloads/logos/zabibu-technika-wordmark-alt.png',
    'PNG'
  ),
  asset(
    'Zabibu Technika badge',
    'Compact embeddable badge with descriptive anchor text guidance.',
    '/downloads/logos/zabibu-technika-badge.svg',
    'SVG',
    { dimensions: '240 × 56' }
  ),
  asset(
    'Zabibu Technika social card',
    'The official 1200 × 630 website card, set in Outfit.',
    '/downloads/logos/zabibu-technika-social-card-1200x630.png',
    'PNG',
    { dimensions: '1200 × 630' }
  ),
]

export const iconAssets: MediaAsset[] = [
  asset('App icon — 500 px', 'Primary square icon on a transparent background.', '/downloads/icons/zabibu-technika-icon-500.png', 'PNG', { dimensions: '500 × 500' }),
  asset('Apple touch icon — 180 px', 'Home-screen icon for iOS and iPadOS.', '/downloads/icons/zabibu-technika-icon-180.png', 'PNG', { dimensions: '180 × 180' }),
  asset('Favicon — 32 px', 'Browser favicon size.', '/downloads/icons/zabibu-technika-icon-32.png', 'PNG', { dimensions: '32 × 32' }),
]

export const productAssets: MediaAsset[] = [
  asset('Zabibu Arif', 'Product mark for the flagship workspace.', '/downloads/logos/products/zabibu-arif.png', 'PNG'),
  asset('Arif Agent', 'Product mark for the agentic execution layer.', '/downloads/logos/products/arif-agent.svg', 'SVG'),
  asset('Zabibu Weaver', 'Product mark for the open-source agent.', '/downloads/logos/products/zabibu-weaver.svg', 'SVG'),
  asset('Ella', 'Product mark for the encrypted journal.', '/downloads/logos/products/ella.png', 'PNG', { previewBg: 'light' }),
  asset('Zabibu OS', 'Product mark for the local-first operating layer.', '/downloads/logos/products/zabibu-os.png', 'PNG'),
  asset('Sigana', 'Product mark for the media centre.', '/downloads/logos/products/sigana.svg', 'SVG'),
  asset('Phosh.cpp', 'Product mark for the edge inference engine.', '/downloads/logos/products/phosh.svg', 'SVG'),
  asset('Fikra — light', 'Fikra model-family mark for dark backgrounds.', '/downloads/logos/products/fikra.svg', 'SVG'),
  asset('Fikra — off-white', 'Fikra model-family mark in the alternate off-white treatment.', '/downloads/logos/products/fikra-offwhite.png', 'PNG'),
  asset('Fikra — colour', 'Fikra model-family mark in colour.', '/downloads/logos/products/fikra.png', 'PNG'),
  asset('Zabibu Canary', 'Product mark for the pre-release testing channel.', '/downloads/logos/products/zabibu-canary.svg', 'SVG'),
]

export const wallpapers: MediaAsset[] = [
  asset('Nairobi Night — desktop', 'Tech should feel like home. 1920 × 1080.', '/downloads/wallpapers/nairobi-night-1920x1080.jpg', 'JPG', { dimensions: '1920 × 1080' }),
  asset('Nairobi Night — mobile', 'Tech should feel like home. 1080 × 1920.', '/downloads/wallpapers/nairobi-night-1080x1920.jpg', 'JPG', { dimensions: '1080 × 1920' }),
  asset('Build From Here — desktop', 'Build from here. 1920 × 1080.', '/downloads/wallpapers/build-from-here-1920x1080.jpg', 'JPG', { dimensions: '1920 × 1080' }),
  asset('Build From Here — mobile', 'Build from here. 1080 × 1920.', '/downloads/wallpapers/build-from-here-1080x1920.jpg', 'JPG', { dimensions: '1080 × 1920' }),
  asset('Signal — desktop', 'Sovereign systems, shipped. 1920 × 1080.', '/downloads/wallpapers/signal-1920x1080.jpg', 'JPG', { dimensions: '1920 × 1080' }),
  asset('Signal — mobile', 'Sovereign systems, shipped. 1080 × 1920.', '/downloads/wallpapers/signal-1080x1920.jpg', 'JPG', { dimensions: '1080 × 1920' }),
]

export const audioAssets: MediaAsset[] = [
  asset(
    'Zabibu Technika Tune',
    'The official standard mix.',
    '/downloads/audio/zabibu-technika-tune.mp3',
    'MP3',
    { audio: true, note: '© Zabibu Technika. All rights reserved.' }
  ),
  asset(
    'Zabibu Technika Tune — Extended',
    'The extended mix for longer edits and ambient use.',
    '/downloads/audio/zabibu-technika-tune-extended.mp3',
    'MP3',
    { audio: true, note: '© Zabibu Technika. All rights reserved.' }
  ),
]

export const mediaKitBundle = asset(
  'Full media kit',
  'Every logo, icon, wallpaper, both tune mixes, and the usage README in one ZIP.',
  '/downloads/zabibu-technika-media-kit.zip',
  'ZIP',
  { preview: undefined }
)

export const assetGroups = [
  {
    id: 'brand',
    eyebrow: 'Brand',
    title: 'Logos and wordmarks',
    items: brandAssets,
  },
  {
    id: 'icons',
    eyebrow: 'Icons',
    title: 'App icons and favicons',
    items: iconAssets,
  },
  {
    id: 'products',
    eyebrow: 'Products',
    title: 'Product marks',
    items: productAssets,
  },
  {
    id: 'wallpapers',
    eyebrow: 'Wallpapers',
    title: 'Desktop and mobile wallpapers',
    items: wallpapers,
  },
  {
    id: 'audio',
    eyebrow: 'Audio',
    title: 'The Zabibu Technika Tune',
    items: audioAssets,
  },
]

export const brandColors = [
  ['Purple', '#8b2cff'],
  ['Amber', '#ffbf3f'],
  ['Teal', '#00d5bf'],
  ['OLED black', '#030305'],
  ['Off-white', '#f4f1f8'],
  ['Muted', '#a1a1aa'],
] as const
