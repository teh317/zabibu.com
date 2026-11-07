'use client'

import { useState } from 'react'
import { AtSign, Briefcase, Check, Copy } from 'lucide-react'

const site = 'https://zabibu.vercel.app'
const shareText =
  'Zabibu Technika — AI & technology company in Nairobi, Kenya. Sovereign, local-first software, Fikra models, and edge AI.'

export function ShareCitation() {
  const [copied, setCopied] = useState(false)

  async function copyCitation() {
    const citation = `Zabibu Technika. "AI & technology company in Nairobi, Kenya." ${site} (accessed ${new Date().toLocaleDateString('en-KE')}).`
    try {
      await navigator.clipboard.writeText(citation)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(site)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pill-button inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider"
      >
        <AtSign className="size-3.5" /> Share on X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(site)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pill-button inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider"
      >
        <Briefcase className="size-3.5" /> Share on LinkedIn
      </a>
      <button
        type="button"
        onClick={copyCitation}
        className="pill-button inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider"
        aria-live="polite"
      >
        {copied ? <Check className="size-3.5 text-[#00d5bf]" /> : <Copy className="size-3.5" />}
        {copied ? 'Citation copied' : 'Copy citation'}
      </button>
    </div>
  )
}
