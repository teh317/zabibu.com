# Zabibu Technika (zabibu.com)

> **"The future should feel like a place you recognize."**  
> Sovereign, local-first computing architectures, AI reasoning engines, and web applications built for real-world constraints.

---

## 🍇 About Zabibu Technika

**Zabibu Technika** is an independent technology collective based in Nairobi, Kenya. Derived from *Zabibu* (the Swahili word for grape), our mission is to build lightweight, resilient software and artificial intelligence models that respect local context, run on modest edge hardware, and eliminate heavy cloud dependencies.

This repository serves as the central digital portal for the Zabibu Technika product ecosystem.

---

## 🛠️ The Ecosystem

| Product | Focus / Domain | Palette Theme | Live Portal |
| :--- | :--- | :--- | :--- |
| **Zabibu Arif** | Workspace & assistant | Amber / Gold | https://zabibuarif.lovable.app |
| **Arif Agent** | Agentic execution, embedded in Arif | Violet / Teal | https://arifagent.vercel.app |
| **Zabibu Weaver** | Free, open-source, model-agnostic agent | Violet / Cyan | https://zabibuweaver.vercel.app |
| **Ella** | Encrypted journal & care companion | Rose / Coral | https://heyella.netlify.app |
| **Ustadi** | Skills & mastery assistant | — | In development |
| **Zabibu OS** | Local-first operating layer | Cyan / Teal | https://zabibu.lovable.app |
| **Sigana** | Free media & streaming | Emerald / Green | https://sigana.lovable.app |
| **Phosh.cpp** | Open-source llama.cpp edge adapter | Fuchsia / Violet | https://phosh.vercel.app |
| **Fikra Edge Runtime** | Proprietary runtime for Fikra models | Fuchsia / Violet | https://zabibufikra.vercel.app |
| **Zabibu Canary** | Pre-release testing & human-in-the-loop | Amber / Red | https://zabibucanary.vercel.app |
| **Glipter** | On-device sign language engine (KSL-first, Tier 0) | Sky / Violet | https://glipter.vercel.app |
| **Fikra Model 1 - 2B** | 2B local/edge model | Fuchsia / Violet | https://zabibufikra.vercel.app |
| **Fikra Model 2 - 4B** | 4B advanced model | Fuchsia / Violet | https://zabibufikra.vercel.app |

---

## 🏗️ Architecture & Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
* **Styling & Motion:** [Tailwind CSS](https://tailwindcss.com/), Framer Motion, Lucide Icons
* **Dynamic Integrations:** Real-time Medium RSS Reader API (`/api/dispatches`)
* **Design Philosophy:** Dark minimalist glassmorphism, elemental nature themes, ambient edge lighting, and zero-telemetry client privacy.

---

## 🔎 SEO & AI discoverability

- The canonical origin defaults to `https://zabibu.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` to the custom domain once it is live (for example `https://zabibutechnika.com`).
- Set `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` in the deployment environment to claim the site in Search Console and Bing Webmaster Tools.
- Generated endpoints: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/llms.txt`, and `/llms-full.txt`.
- Structured data includes `Organization`, `WebSite`, `WebPage`, `FAQPage`, `AboutPage`, `ItemList`, and `SoftwareApplication` on product pages.
- `robots.ts` explicitly allows major AI crawlers: GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended, CCBot, and Applebot-Extended.
- Every public page has a unique title, description, canonical URL, Open Graph/Twitter card, and the 1200×630 `/images/og-image.png` social image.

### IndexNow webhook

Set `INDEXNOW_KEY` (served at `/indexnow-key.txt`) and `INDEXNOW_WEBHOOK_SECRET` in the deployment environment. The webhook is edge-hosted and accepts 1–10 same-origin paths:

```bash
curl -X POST https://zabibu.vercel.app/api/indexnow \
  -H "Authorization: Bearer $INDEXNOW_WEBHOOK_SECRET" \
  -H "content-type: application/json" \
  -d '{"paths":["/hub","/fikra","/phosh"]}'
```

`GET /api/indexnow/status` reports whether the key and secret are configured without exposing either value. `x-indexnow-signature` is also accepted in place of the bearer token.

### GEO endpoints

- `/llms.txt` — concise company and product context for AI systems.
- `/llms-full.txt` — expanded company story, products, timeline, and FAQ.
- `/api/geo/summary` — JSON summary of the company, products, and FAQ for search agents.
- `/alternatives/why-we-are-better` — a factual cloud-first vs local-first comparison.
- `/badges` — an embeddable badge with descriptive anchor text.

---

## 🎨 Media kit, assets & trust

- `/media-kit` — approved boilerplate, fact sheet, founder bio, brand assets, colours, typography, usage rules, licensing, wallpapers, press contact, and the official tune.
- `/assets` - the full asset library: wordmarks, app icons, product marks, product social cards, stickers, animated GIFs, badges, banners, wallpapers, fonts, PDF kits, and both tune mixes, plus a ZIP bundle.
- `/downloads/audio/zabibu-technika-tune.mp3` and `zabibu-technika-tune-extended.mp3` — the official tune.
- `/trust` — security posture, local-first data sovereignty, responsible AI, and vulnerability disclosure.
- `/privacy`, `/terms`, `/accessibility`, `/changelog`, `/licenses` — public policy and posterity pages.
- `/.well-known/security.txt` and `/humans.txt` — machine-readable disclosure and site credits.
- Typography: **Outfit** for the interface and social card, **JetBrains Mono** for labels and code.

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have Node.js 18+ and `pnpm` (or `npm`) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/zabibutechnika/zabibu.com.git
cd zabibu.com
2. Install dependencies
Bash
pnpm install
# or
npm install
3. Run the development server
Bash
pnpm dev
# or
npm run dev
Open http://localhost:3000 with your browser to view the portal locally.

📁 Key Directory Structure
Plaintext
zabibu.com/
├── app/
│   ├── api/
│   │   └── dispatches/        # Server-side Medium RSS Parser & API Route
│   ├── arif/                  # Zabibu Arif Product Portal
│   ├── hub/                   # Categorized ecosystem hub
│   ├── phosh/                 # Phosh.cpp edge inference portal
│   ├── dispatches/            # Field Notes & Medium RSS Feed Page
│   ├── ella/                  # Ella App Portal
│   ├── fikra/                 # Fikra Model 1 - 2B portal
│   ├── sigana/                # Sigana TV Streaming Portal
│   ├── glipter/               # Glipter on-device sign language portal
│   ├── zabibuos/              # Zabibu OS Operating Layer Portal
│   ├── globals.css            # Global Tailwind & elemental styles
│   └── page.tsx               # Primary home story & company pitch
├── components/                # Portal shell, categorized hub & cards
└── public/
    └── images/                # Product screenshots and branding assets

```

📜 License & Sovereign Rights
Developed with pride in Nairobi by Tehillah Mwangada Kachila & Zabibu Technika. All rights reserved. Open-weights and public tools are distributed under their respective permissive open-source licenses.
