// Text wordmark: "BARR & KLEIN" set at 18px, with a small PLLC suffix.
export default function Wordmark({ className = '' }) {
  return (
    <span className={`inline-flex items-baseline gap-2 whitespace-nowrap leading-none ${className}`}>
      <span className="font-sans text-[18px] font-bold uppercase tracking-[0.14em] text-parchment">
        Barr <span className="font-display text-[18px] font-semibold italic normal-case tracking-normal text-bronze">&amp;</span> Klein
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-parchment-dim">PLLC</span>
    </span>
  )
}
