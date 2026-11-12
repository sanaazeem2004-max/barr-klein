import { Mail, Phone, ArrowUpRight, Check } from 'lucide-react'
import { attorneys, ORIGIN } from '../data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function AttorneyCard({ a, delay }) {
  return (
    <Reveal delay={delay} as="article" className="group grid h-full overflow-hidden border border-white/10 bg-ink-700 md:grid-cols-[2fr_3fr] lg:grid-cols-1 xl:grid-cols-[2fr_3fr]">
      {/* Photo column stretches to the full height of the text column (down to the email/phone row) */}
      <div className="relative aspect-[500/537] overflow-hidden sm:aspect-[4/3] md:aspect-auto md:min-h-full lg:aspect-[4/3] xl:aspect-auto">
        <img
          src={a.image}
          alt={`Portrait of ${a.name}`}
          loading="lazy"
          width="500"
          height="537"
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] grayscale-[35%] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <span className="absolute bottom-0 left-0 h-1 w-16 bg-bronze" />
      </div>

      <div className="flex flex-col p-7 sm:p-8">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-bronze">{a.role}</p>
        <h3 className="mt-2 font-display text-[2.1rem] font-semibold leading-none text-parchment">{a.name}</h3>
        <p className="mt-5 text-[0.95rem] leading-relaxed text-parchment-muted">{a.bio}</p>

        <ul className="mt-6 space-y-2.5">
          {a.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-snug text-parchment/85">
              <Check size={16} className="mt-0.5 shrink-0 text-bronze" />
              {h}
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-parchment-dim">
          <span className="font-semibold uppercase tracking-[0.15em] text-parchment-muted">Admissions</span>
          <br />
          {a.admissions}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-sm">
          <a href={`mailto:${a.email}`} className="flex items-center gap-2 text-parchment transition-colors hover:text-bronze">
            <Mail size={15} className="text-bronze" /> {a.email}
          </a>
          <a href={`tel:${a.tel}`} className="flex items-center gap-2 text-parchment transition-colors hover:text-bronze">
            <Phone size={15} className="text-bronze" /> {a.phone}
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Attorneys() {
  return (
    <section id="attorneys" aria-labelledby="attorneys-title" className="relative bg-ink-800 py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading id="attorneys-title" eyebrow="Our Attorneys" title="Meet the partners" />
          <Reveal delay={0.1}>
            <a href={`${ORIGIN}/attorney-profiles/`} className="btn-outline group">
              Full attorney profiles
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {attorneys.map((a, i) => (
            <AttorneyCard key={a.name} a={a} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
