import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks } from '../data/site'
import Wordmark from './Wordmark'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-white/5 bg-ink/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-site flex h-20 items-center justify-between" aria-label="Main">
        <a href="#top" className="shrink-0" aria-label="Barr & Klein PLLC, back to top">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative py-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-parchment/80 transition-colors hover:text-parchment"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#contact"
            className="border border-bronze px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-bronze transition-colors hover:bg-bronze hover:text-ink"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-parchment lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-y-auto bg-ink lg:hidden"
          >
            <ul className="container-site flex flex-col pt-4">
              {navLinks.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.05 }}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 border-b border-white/10 py-5 font-display text-3xl text-parchment"
                  >
                    <span className="font-sans text-xs text-bronze">0{i + 1}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-site mt-10 flex flex-col gap-4 pb-10">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">Contact Our Attorneys</a>
              <a href="tel:+12028046676" className="btn-outline"><Phone size={15} /> (202) 804-6676</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
