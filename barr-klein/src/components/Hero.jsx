import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CountUp from './motion/CountUp'

const EASE = [0.22, 1, 0.36, 1]

const stats = [
  { value: <CountUp to={30} suffix="+ Years" delay={1.1} />, label: 'Combined experience' },
  { value: 'State & Federal', label: 'Trials, appeals & regulators' },
  { value: 'U.S. Supreme Court', label: 'Bar admission' },
]

// One headline line that slides up from behind a mask.
function MaskLine({ children, delay, reduce, className = '' }) {
  return (
    <span className={`block overflow-hidden pb-[0.12em] ${className}`}>
      <motion.span
        className="block"
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // Statue drifts down slowly; copy eases up and softens as the hero leaves the screen.
  const imageY = useTransform(scrollY, [0, 900], reduce ? [0, 0] : [0, 140])
  const copyY = useTransform(scrollY, [0, 700], reduce ? [0, 0] : [0, -50])
  const copyOpacity = useTransform(scrollY, [0, 700], reduce ? [1, 1] : [1, 0.25])

  const fade = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-900 lg:h-[100svh] lg:max-h-[940px] lg:min-h-[720px]"
    >
      {/* Bronze statue, treated dark and warm in the spirit of the reference */}
      <motion.img
        src="/images/hero-justice.jpg"
        alt=""
        aria-hidden="true"
        style={{ y: imageY }}
        initial={reduce ? false : { scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
        className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-[62%_30%] brightness-[0.5] contrast-[1.2] sepia-[0.35] lg:w-[64%] lg:object-[50%_35%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900 via-ink-900/80 to-ink-900/20 lg:from-35% lg:via-ink-900/60 lg:via-50% lg:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/70" />
      <div className="copper-glow absolute inset-0 -z-10" />

      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="container-site flex flex-1 flex-col justify-center pb-14 pt-28 sm:pb-16 sm:pt-36 lg:pt-28"
      >
        <motion.p {...fade(0.2)} className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-eyebrow text-bronze">
          Free Speech &amp; First Amendment Attorneys
          <motion.span
            aria-hidden="true"
            className="h-px w-14 origin-left bg-bronze/50"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          />
        </motion.p>

        <h1 className="heading-xl mt-6 max-w-4xl text-parchment">
          <MaskLine delay={0.35} reduce={reduce}>Defending Your Rights.</MaskLine>
          <MaskLine delay={0.5} reduce={reduce} className="italic text-bronze">Protecting Your Freedom.</MaskLine>
        </h1>

        <motion.p {...fade(0.8)} className="body-lg mt-6 max-w-xl text-parchment/80">
          Strategic legal advocacy for individuals and organizations facing complex constitutional, regulatory and political
          challenges.
        </motion.p>
        <motion.div {...fade(0.95)} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#practice" className="btn-primary group">
            Explore Our Practice
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="btn-outline">Contact Our Attorneys</a>
        </motion.div>
      </motion.div>

      <motion.div {...fade(1.1)} className="border-t border-white/10 bg-ink-900/70 backdrop-blur-sm">
        <dl className="container-site grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse py-5 sm:px-8 sm:py-7 sm:first:pl-0">
              <dt className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-parchment-dim">{s.label}</dt>
              <dd className="font-display text-2xl font-semibold text-bronze-light sm:text-xl md:text-2xl lg:text-[1.75rem]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}
