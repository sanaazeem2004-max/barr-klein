import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { attorneys, ORIGIN } from '../data/site'
import Reveal from './Reveal'
import ParallaxImage from './motion/ParallaxImage'

export default function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <ParallaxImage src="/images/gavel-wood.jpg" strength={70} className="brightness-[0.35] sepia-[0.5]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bronze-deep/80 via-ink-900/85 to-ink-900" />

      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">Contact Us</p>
          <h2 id="contact-title" className="heading-xl mt-6">
            Your Rights <span className="italic text-bronze">Come First.</span>
          </h2>
          <p className="body-lg mt-6 max-w-lg text-parchment/80">
            Facing a legal challenge? Speak with our attorneys about your situation.
          </p>
          <a href={`${ORIGIN}/contact/`} className="btn-primary group mt-10">
            Contact Our Attorneys
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
          {attorneys.map((a, i) => (
            <Reveal key={a.name} delay={0.1 + i * 0.1} className="h-full">
              <div className="h-full border border-white/10 bg-ink-900/60 p-7 backdrop-blur-md">
                <p className="font-display text-2xl font-semibold text-parchment">{a.name}</p>
                <div className="mt-1 h-px w-10 bg-bronze" />
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href={`tel:${a.tel}`} className="flex items-center gap-3 text-parchment/90 transition-colors hover:text-bronze">
                      <Phone size={16} className="shrink-0 text-bronze" /> {a.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${a.email}`} className="flex items-center gap-3 break-all text-parchment/90 transition-colors hover:text-bronze">
                      <Mail size={16} className="shrink-0 text-bronze" /> {a.email}
                    </a>
                  </li>
                  <li className="flex gap-3 text-parchment-muted">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-bronze" />
                    <address className="not-italic leading-relaxed">
                      {a.office[0]}
                      <br />
                      {a.office[1]}
                    </address>
                  </li>
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
