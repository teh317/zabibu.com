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
| **Zabibu Arif** | Flagship workspace & Socratic companion | Amber / Gold | https://zabibuarif.lovable.app |
| **Fikra Model 1 - 2B** | Edge engine, open weights & Fikra Edge Runtime | Fuchsia / Violet | https://zabibufikra.vercel.app |
| **Ella** | Companion layer & encrypted journaling | Rose / Coral | https://heyella.netlify.app |
| **Arif Agent** | Autonomous, multi-axis execution | Violet / Teal | https://arifagent.vercel.app |
| **ZabibuOS** | Local-first operating layer | Cyan / Teal | https://zabibu.lovable.app |
| **Zabibu Canary** | Code review & human-in-the-loop validation | Amber / Red | https://zabibucanary.vercel.app |
| **Phosh.cpp** | Middleware adapter atop llama.cpp | Fuchsia / Violet | `app/phosh` |
| **Weaver** | Open-source core engine & agentic toolkit | Violet / Cyan | https://zabibuweaver.vercel.app |
| **Kanari** | Telemetry-free local diagnostics | Teal / Emerald | `app/kanari` |
| **Sigana** | Zero-login media center | Emerald / Green | https://sigana.lovable.app |

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
│   ├── phosh/                 # Phosh.cpp middleware portal
│   ├── kanari/                # Kanari diagnostics portal
│   ├── dispatches/            # Field Notes & Medium RSS Feed Page
│   ├── ella/                  # Ella App Portal
│   ├── fikra/                 # Fikra Model 1 - 2B portal
│   ├── sigana/                # Sigana TV Streaming Portal
│   ├── zabibuos/              # ZabibuOS Operating Layer Portal
│   ├── globals.css            # Global Tailwind & elemental styles
│   └── page.tsx               # Primary categorized ecosystem hub
├── components/                # Portal shell, categorized hub & cards
└── public/
    └── images/                # Product screenshots and branding assets

```

📜 License & Sovereign Rights
Developed with pride in Nairobi by Tehillah Mwangada Kachila & Zabibu Technika. All rights reserved. Open-weights and public tools are distributed under their respective permissive open-source licenses.
