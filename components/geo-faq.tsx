import { faqItems } from '@/lib/faq'

export function GeoFaq({ items = faqItems }: { items?: typeof faqItems }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-white/10 bg-[#08080b]/80 p-5 open:border-[#8b2cff]/40"
        >
          <summary className="geo-summary cursor-pointer list-none text-base font-semibold text-white">
            <span className="flex items-start justify-between gap-4">
              <span>{item.question}</span>
              <span
                className="mt-0.5 shrink-0 font-mono text-lg leading-none text-[#b887ff] transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-white/60">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
