export function QuotableSummary({
  children,
  cite,
}: {
  children: React.ReactNode
  cite?: string
}) {
  return (
    <blockquote className="summary-chunk relative rounded-2xl border border-white/10 bg-[#08080b]/85 p-6 text-lg leading-8 text-white/80 md:p-8">
      <p>{children}</p>
      {cite && (
        <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
          — {cite}
        </footer>
      )}
    </blockquote>
  )
}
