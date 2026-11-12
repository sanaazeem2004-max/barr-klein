import { Scale, Landmark, BookOpen, Building2 } from 'lucide-react'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import CountUp from './motion/CountUp'

const pillars = [
  { icon: Scale, title: '30+ years combined', text: 'Uncompromising advocates in trials and appeals.' },
  { icon: BookOpen, title: 'Constitutional law', text: 'The First Amendment, privacy and journalism practices.' },
  { icon: Landmark, title: 'State & federal courts', text: 'Litigating wherever our clients’ rights are at stake.' },
  { icon: Building2, title: 'Regulatory & political law', text: 'Campaign finance, nonprofit compliance, business formation.' },
]

export default function About() {
  const reduce = useReducedMotion()
  const frameRef = useRef(null)
  const inView = useInView(frameRef, { once: true, margin: '-80px' })
  const show = inView || reduce
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          {/* The unclipped frame is the in-view trigger; a fully clipped element can't reliably detect visibility itself. */}
          <div ref={frameRef} className="frame-corners mx-3 sm:mx-4">
            {/* Curtain reveal: the photo uncovers from the bottom while settling from a slight zoom */}
            <motion.div
              className="overflow-hidden"
              initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={show ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
              transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.img
                src="/images/supreme-court.jpg"
                alt="The United States Supreme Court building at sunset"
                loading="lazy"
                initial={reduce ? false : { scale: 1.2 }}
                animate={show ? { scale: 1 } : undefined}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/3] max-h-[680px] w-full object-cover object-[30%_center] brightness-90 sepia-[0.15] lg:aspect-[4/5]"
              />
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={show ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 bg-ink/90 px-6 py-5 backdrop-blur-sm sm:px-8 sm:py-6"
            >
              <p className="font-display text-5xl font-semibold leading-none text-bronze"><CountUp to={30} suffix="+" delay={1.1} /></p>
              <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-parchment-muted">
                Years of combined
                <br />
                experience
              </p>
            </motion.div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">About the Firm</p>
            <h2 id="about-title" className="heading-lg mt-5">
              Uncompromising advocates for <em className="text-bronze">individual rights</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-3xl space-y-5 text-[1.02rem] leading-relaxed text-parchment-muted">
            <p>
              With a combined experience of over thirty years, Benjamin Barr and Stephen Klein are uncompromising advocates in
              state and federal courts, in trials and appeals, and before regulatory bodies. Especially known for our experience
              with constitutional law, we advise clients on business formation, nonprofit compliance, campaign finance law,
              privacy law, the First Amendment, and journalism practices.
            </p>
            <p>
              If you are being censored, whether by the government’s heavy hand or clever red tape, or being sued by someone
              who’s just trying to shut you up, please be in touch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-10 border-l-2 border-bronze pl-6 font-display text-2xl italic leading-snug text-parchment sm:text-[1.7rem]">
              “We are united by the principle that individual rights — your rights — come first.”
            </blockquote>
          </Reveal>

          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.05 * i} className="flex gap-4 bg-ink p-5 sm:p-6">
                <Icon size={22} strokeWidth={1.4} className="mt-0.5 shrink-0 text-bronze" />
                <div>
                  <h3 className="font-semibold text-parchment">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-parchment-dim">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
