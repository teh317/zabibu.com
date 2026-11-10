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
  asset('Glipter', 'Product mark for the on-device sign language engine.', '/downloads/logos/products/glipter.svg', 'SVG'),
]

export type WallpaperDesign = {
  slug: string
  title: string
  description: string
  desktop: MediaAsset
  mobile: MediaAsset
}

function wallpaper(slug: string, title: string, description: string): WallpaperDesign {
  return {
    slug,
    title,
    description,
    desktop: asset(
      `${title} — desktop`,
      `${description} 3840 × 2160.`,
      `/downloads/wallpapers/${slug}-3840x2160.jpg`,
      'JPG',
      {
        dimensions: '3840 × 2160',
        preview: `/downloads/wallpapers/previews/${slug}-preview.jpg`,
      }
    ),
    mobile: asset(
      `${title} — mobile`,
      `${description} 1440 × 3120.`,
      `/downloads/wallpapers/${slug}-1440x3120.jpg`,
      'JPG',
      { dimensions: '1440 × 3120' }
    ),
  }
}

export const wallpaperDesigns: WallpaperDesign[] = [
  wallpaper('mesh', 'Mesh', 'Violet, magenta, and teal light pooled into a soft mesh gradient.'),
  wallpaper('aurora', 'Aurora', 'Teal and violet curtains drifting over a near-black sky.'),
  wallpaper('ribbon', 'Ribbon', 'Two silk ribbons of light crossing in the dark.'),
  wallpaper('eclipse', 'Eclipse', 'A dark disc ringed by a thin rim of teal light.'),
  wallpaper('strata', 'Strata', 'A deep dusk horizon glowing violet and amber.'),
  wallpaper('void', 'Void', 'Concentric orbits around a single amber planet.'),
]

export const wallpapers: MediaAsset[] = wallpaperDesigns.flatMap((design) => [
  design.desktop,
  design.mobile,
])

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

export const fontAssets: MediaAsset[] = [
  asset(
    'Outfit variable font',
    'The primary brand typeface. Variable weights 100–900.',
    '/downloads/fonts/Outfit.ttf',
    'TTF'
  ),
  asset(
    'Outfit license',
    'SIL Open Font License 1.1.',
    '/downloads/fonts/OFL.txt',
    'TXT'
  ),
]

export const mediaKitBundle = asset(
  'Full assets bundle',
  'Every logo, icon, wallpaper, product card, sticker, GIF, badge, PDF kit, font, and both tune mixes in one ZIP.',
  '/downloads/zabibu-technika-media-kit.zip',
  'ZIP',
  { preview: undefined }
)

export const pressKit = asset(
  'Press kit (PDF)',
  'Fact sheet, approved boilerplate, founder bio, product portfolio, usage notes, and press contact.',
  '/downloads/zabibu-technika-press-kit.pdf',
  'PDF',
  { preview: undefined, dimensions: 'A4 · 4 pages' }
)

export const investorKit = asset(
  'Investor kit (PDF)',
  'Public thesis, traction facts, product portfolio, diligence checklist, and data-room contact.',
  '/downloads/zabibu-technika-investor-kit.pdf',
  'PDF',
  { preview: undefined, dimensions: 'A4 · 4 pages' }
)

export const productCards: MediaAsset[] = [
  asset('Zabibu Arif card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/zabibu-arif-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Arif Agent card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/arif-agent-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Zabibu Weaver card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/zabibu-weaver-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Ella card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/ella-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Ustadi card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/ustadi-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Zabibu OS card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/zabibu-os-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Sigana card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/sigana-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Phosh.cpp card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/phosh-cpp-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Fikra Edge Runtime card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/fikra-edge-runtime-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Zabibu Canary card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/zabibu-canary-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Fikra Model 1 - 2B card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/fikra-model-1-2b-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
  asset('Fikra Model 2 - 4B card', '1200 × 630 social card with the product mark and explainer.', '/downloads/products/fikra-model-2-4b-1200x630.jpg', 'JPG', { dimensions: '1200 × 630' }),
]

export const socialAssets: MediaAsset[] = [
  asset('Social banner', '1500 × 500 banner for X, LinkedIn, or a project page.', '/downloads/social/zabibu-technika-social-banner-1500x500.jpg', 'JPG', { dimensions: '1500 × 500' }),
  asset('Profile avatar', '1080 × 1080 avatars for social profiles and community spaces.', '/downloads/social/zabibu-technika-avatar-1080x1080.png', 'PNG', { dimensions: '1080 × 1080' }),
]

export const badgeAssets: MediaAsset[] = [
  asset('Built with Zabibu Weaver', 'Embeddable badge for projects built on the open-source agent.', '/downloads/badges/built-with-zabibu-weaver.svg', 'SVG', { dimensions: '260 × 56' }),
  asset('Secured by Zabibu Canary', 'Badge for projects that pass the human-in-the-loop review gate.', '/downloads/badges/secured-by-zabibu-canary.svg', 'SVG', { dimensions: '260 × 56' }),
  asset('Powered by Fikra', 'Badge for projects using the Fikra model family.', '/downloads/badges/powered-by-fikra.svg', 'SVG', { dimensions: '260 × 56' }),
  asset('Local-first', 'Badge for software that works without a mandatory cloud.', '/downloads/badges/local-first.svg', 'SVG', { dimensions: '260 × 56' }),
  asset('Made in Nairobi', 'Badge for work made in Nairobi, Kenya.', '/downloads/badges/made-in-nairobi.svg', 'SVG', { dimensions: '260 × 56' }),
]

export const kitAssets: MediaAsset[] = [mediaKitBundle, pressKit, investorKit]

export const stickerAssets: MediaAsset[] = [
  asset('Zabibu Technika sticker', '512 × 512 transparent sticker with the wordmark and company line.', '/downloads/stickers/zabibu-technika-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Local-first sticker', '512 × 512 transparent sticker for local-first software.', '/downloads/stickers/local-first-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Made in Nairobi sticker', '512 × 512 transparent sticker for Nairobi-made work.', '/downloads/stickers/made-in-nairobi-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Fikra sticker', '512 × 512 transparent sticker for the Fikra model family.', '/downloads/stickers/fikra-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Zabibu Arif sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/zabibu-arif-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Arif Agent sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/arif-agent-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Zabibu Weaver sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/zabibu-weaver-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Ella sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/ella-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Ustadi sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/ustadi-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Zabibu OS sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/zabibu-os-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Sigana sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/sigana-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Phosh.cpp sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/phosh-cpp-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Fikra Edge Runtime sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/fikra-edge-runtime-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Zabibu Canary sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/zabibu-canary-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Fikra Model 1 - 2B sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/fikra-model-1-2b-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Fikra Model 2 - 4B sticker', '512 × 512 transparent product sticker.', '/downloads/stickers/fikra-model-2-4b-512.png', 'PNG', { dimensions: '512 × 512' }),
  asset('Glipter sticker', '512 × 512 transparent sticker for the on-device sign language engine.', '/downloads/stickers/glipter-512.png', 'PNG', { dimensions: '512 × 512' }),
]

export const gifAssets: MediaAsset[] = [
  asset('Brand loop', 'Animated wordmark and “Tech should feel like home.” loop.', '/downloads/gifs/zabibu-technika-brand-loop-600.gif', 'GIF', { preview: '/downloads/gifs/zabibu-technika-brand-loop-600-preview.png', dimensions: '600 × 600', note: 'Animated GIF · loops forever' }),
  asset('Fikra heartbeat', 'Animated Fikra heart with the model-family line.', '/downloads/gifs/fikra-heartbeat-600.gif', 'GIF', { preview: '/downloads/gifs/fikra-heartbeat-600-preview.png', dimensions: '600 × 600', note: 'Animated GIF · loops forever' }),
  asset('Weaver proof loop', 'Animated terminal proof sequence for Zabibu Weaver.', '/downloads/gifs/zabibu-weaver-proof-600.gif', 'GIF', { preview: '/downloads/gifs/zabibu-weaver-proof-600-preview.png', dimensions: '600 × 600', note: 'Animated GIF · loops forever' }),
  asset('Canary watch loop', 'Animated canary with a human-in-the-loop scan line.', '/downloads/gifs/zabibu-canary-watch-600.gif', 'GIF', { preview: '/downloads/gifs/zabibu-canary-watch-600-preview.png', dimensions: '600 × 600', note: 'Animated GIF · loops forever' }),
  asset('Ecosystem loop', 'Animated marquee of the 13-product ecosystem.', '/downloads/gifs/zabibu-ecosystem-loop-600.gif', 'GIF', { preview: '/downloads/gifs/zabibu-ecosystem-loop-600-preview.png', dimensions: '600 × 600', note: 'Animated GIF · loops forever' }),
]

export const assetGroups = [
  {
    id: 'kits',
    eyebrow: 'Start here',
    title: 'Media, press, and investor kits',
    items: kitAssets,
  },
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
    id: 'product-cards',
    eyebrow: 'Product cards',
    title: 'Social cards for every product',
    items: productCards,
  },
  {
    id: 'social',
    eyebrow: 'Social',
    title: 'Banners and avatars',
    items: socialAssets,
  },
  {
    id: 'badges',
    eyebrow: 'Badges',
    title: 'Embeddable badges',
    items: badgeAssets,
  },
  {
    id: 'stickers',
    eyebrow: 'Stickers',
    title: 'Product and brand stickers',
    items: stickerAssets,
  },
  {
    id: 'gifs',
    eyebrow: 'GIFs',
    title: 'Animated loops',
    items: gifAssets,
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
  {
    id: 'type',
    eyebrow: 'Typography',
    title: 'Brand fonts',
    items: fontAssets,
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
