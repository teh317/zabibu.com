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
| **Fikra Model 1 - 2B** | 2B local/edge model | Fuchsia / Violet | https://zabibufikra.vercel.app |
| **Fikra Model 2 - 4B** | 4B advanced model | Fuchsia / Violet | https://zabibufikra.vercel.app |

---

## 🏗️ Architecture & Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
* **Styling & Motion:** [Tailwind CSS](https://tailwindcss.com/), Framer Motion, Lucide Icons
* **Dynamic Integrations:** Real-time Medium RSS Reader API (`/api/dispatches`)
* **Design Philosophy:** Dark minimalist glassmorphism, elemental nature themes, ambient edge lighting, and zero-telemetry client privacy.

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
│   ├── zabibuos/              # Zabibu OS Operating Layer Portal
│   ├── globals.css            # Global Tailwind & elemental styles
│   └── page.tsx               # Primary home story & company pitch
├── components/                # Portal shell, categorized hub & cards
└── public/
    └── images/                # Product screenshots and branding assets

```

📜 License & Sovereign Rights
Developed with pride in Nairobi by Tehillah Mwangada Kachila & Zabibu Technika. All rights reserved. Open-weights and public tools are distributed under their respective permissive open-source licenses.
