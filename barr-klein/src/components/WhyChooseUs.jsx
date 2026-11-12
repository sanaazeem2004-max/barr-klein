import { reasons } from '../data/site'
import Reveal from './Reveal'
import ParallaxImage from './motion/ParallaxImage'

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="relative isolate overflow-hidden bg-ink-900 py-24 sm:py-32">
      {/* Atmospheric statue backdrop, echoing the reference's middle band */}
      <ParallaxImage
        src="/images/justice-statue.jpg"
        frameClassName="lg:right-1/2"
        strength={50}
        className="object-[40%_center] opacity-25 blur-[2px] sepia-[0.6]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/40 via-ink-900/90 to-ink-900" />
      <div className="copper-glow absolute inset-0 -z-10" />

      <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="flex flex-col justify-center pb-6 md:col-span-2 md:pb-8 lg:col-span-1 lg:pb-0 lg:pr-6">
          <p className="eyebrow">Why Barr &amp; Klein</p>
          <h2 id="why-title" className="heading-lg mt-5">
            Counsel built for <em className="text-bronze">high stakes</em>
          </h2>
          <p className="body-lg mt-5">
            Our practice is eclectic, but our purpose is singular: to advance your goals and your voice.
          </p>
        </Reveal>

        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.07} className={`h-full ${i === reasons.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}>
            <div className="group relative h-full border border-white/[0.06] bg-ink-700/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:bg-ink-600/80 sm:p-9">
              <span className="font-display text-[2.6rem] font-semibold leading-none text-bronze/90">0{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-parchment">{r.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-parchment-muted">{r.text}</p>
              <span className="absolute bottom-0 left-8 h-px w-0 bg-bronze transition-all duration-500 group-hover:w-16 sm:left-9" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
