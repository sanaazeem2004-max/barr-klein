import { ArrowUp } from 'lucide-react'
import Wordmark from './Wordmark'
import { attorneys, navLinks, practiceAreas, licensingNotice, ORIGIN } from '../data/site'

function FooterHeading({ children }) {
  return <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-bronze">{children}</h3>
}

const linkClass = 'inline-block py-1 text-sm text-parchment-muted transition-colors hover:text-parchment'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <Wordmark />
          <p className="mt-6 max-w-xs font-display text-xl italic leading-snug text-parchment/80">
            Constitutional rights are fragile. We know how to protect them.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <FooterHeading>Firm</FooterHeading>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className={linkClass}>{l.label}</a></li>
            ))}
            <li><a href={`${ORIGIN}/disclaimer/`} className={linkClass}>Disclaimer</a></li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <FooterHeading>Practice Areas</FooterHeading>
          <ul className="mt-5 space-y-3">
            {practiceAreas.map((p) => (
              <li key={p.title}><a href={p.href} className={linkClass}>{p.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <FooterHeading>Washington, DC Offices</FooterHeading>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {attorneys.map((a) => (
              <div key={a.name} className="text-sm leading-relaxed">
                <p className="font-semibold text-parchment">{a.name}</p>
                <address className="not-italic text-parchment-muted">
                  {a.office[0]}<br />{a.office[1]}
                </address>
                <div className="flex flex-col items-start">
                  <a href={`tel:${a.tel}`} className={linkClass}>{a.phone}</a>
                  <a href={`mailto:${a.email}`} className={linkClass}>{a.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site border-t border-white/10 py-8">
        <p className="text-xs leading-relaxed text-parchment-dim">{licensingNotice}</p>
        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 text-xs text-parchment-dim sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Barr &amp; Klein PLLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`${ORIGIN}/disclaimer/`} className="transition-colors hover:text-parchment">Disclaimer</a>
            <a href="#top" className="flex items-center gap-2 transition-colors hover:text-bronze">
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
