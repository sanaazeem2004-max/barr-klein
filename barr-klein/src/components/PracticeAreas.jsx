import { ArrowUpRight } from 'lucide-react'
import { practiceAreas } from '../data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function PracticeCard({ area, index }) {
  const Icon = area.icon
  return (
    <a
      href={area.href}
      className="group relative flex h-full min-h-[25rem] flex-col overflow-hidden bg-ink-700 p-7 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(196,154,92,0.35)] motion-reduce:hover:translate-y-0 sm:min-h-[28rem] lg:p-8"
    >
      <img
        src={area.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale-[50%] transition-all duration-700 group-hover:scale-105 group-hover:opacity-55 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/10" />
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-bronze transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center border border-bronze/40 bg-ink-900/40 text-bronze transition-colors duration-300 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink">
          <Icon size={22} strokeWidth={1.4} />
        </span>
        <span className="font-display text-2xl font-semibold text-bronze/90">0{index + 1}</span>
      </div>

      <div className="relative mt-24 flex flex-1 flex-col sm:mt-28">
        <h3 className="min-h-[2.2em] font-display lg:min-h-[3.3em] text-[1.75rem] font-semibold leading-[1.1] text-parchment">{area.title}</h3>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-parchment-muted">{area.description}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-bronze">
          Learn more
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  )
}

export default function PracticeAreas() {
  return (
    <section id="practice" aria-labelledby="practice-title" className="copper-glow relative bg-ink-800 py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="practice-title" eyebrow="Practice Areas" title="Where we stand for our clients" />
          <Reveal delay={0.1} className="max-w-md">
            <p className="body-lg">
              We fight for our clients’ rights against local, state, and federal regulators — and other opponents who act like
              them. Constitutional rights are fragile, and we know how to protect them.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {practiceAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08} className="h-full">
              <PracticeCard area={area} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
