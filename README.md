# Zabibu Technika (zabibu-u5)

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
| **Zabibu Arif** | Socratic Companion & High-Context Reasoning Engine | Amber / Gold | `app/arif` |
| **ZabibuOS** | Local-First Operating System & Elemental UI Layer | Cyan / Teal | `app/zabibuos` |
| **Sigana** | Zero-Login Free Media & Stream Network | Emerald / Green | `app/sigana` |
| **Fikra 2B** | Open 2.1B Reasoning Weights (Gemma Architecture) | Fuchsia / Violet | `app/fikra` |
| **Ella** | Private Encrypted Journaling & Guided Reflection | Rose / Coral | `app/ella` |

---

## 🏗️ Architecture & Stack

* **Framework:** [Next.js 14+](https://nextjs.org/) (App Router, React Server Components)
* **Styling & Motion:** [Tailwind CSS](https://tailwindcss.com/), Framer Motion, Lucide Icons
* **Dynamic Integrations:** Real-time Medium RSS Reader API (`/api/dispatches`)
* **Design Philosophy:** Dark minimalist glassmorphism, elemental nature themes, ambient edge lighting, and zero-telemetry client privacy.

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have Node.js 18+ and `pnpm` (or `npm`) installed on your machine.

### 1. Clone the repository
```bash
git clone [https://github.com/zabibutechnika/zabibu-u5.git](https://github.com/zabibutechnika/zabibu-u5.git)
cd zabibu-u5
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
zabibu-u5/
├── app/
│   ├── api/
│   │   └── dispatches/        # Server-side Medium RSS Parser & API Route
│   ├── arif/                  # Zabibu Arif Product Portal
│   ├── dispatches/            # Field Notes & Medium RSS Feed Page
│   ├── ella/                  # Ella App Portal
│   ├── fikra/                 # Fikra 2B Model Portal
│   ├── sigana/                # Sigana TV Streaming Portal
│   ├── zabibuos/              # ZabibuOS Operating Layer Portal
│   ├── globals.css            # Global Tailwind & Elemental Styles
│   └── page.tsx               # Primary Ecosystem Hub / Landing Page
├── components/                # Reusable UI Shells & Glassmorphic Cards
└── public/
    └── images/                # Product screenshots and branding assets
📜 License & Sovereign Rights
Developed with pride in Nairobi by Tehillah Mwangada Kachila & Zabibu Technika. All rights reserved. Open-weights and public tools are distributed under their respective permissive open-source licenses.
