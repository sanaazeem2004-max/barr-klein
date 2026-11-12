import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

// Background image that drifts slightly slower than the page while its section is on screen.
// It is rendered 160px taller than its frame (80px above and below) so the drift never shows an edge.
export default function ParallaxImage({ src, className = '', frameClassName = '', strength = 60 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-strength, strength])

  return (
    <div ref={ref} aria-hidden="true" className={`absolute inset-0 -z-20 overflow-hidden ${frameClassName}`}>
      <motion.img
        src={src}
        alt=""
        loading="lazy"
        style={{ y }}
        className={`absolute inset-x-0 -top-20 h-[calc(100%+160px)] w-full object-cover ${className}`}
      />
    </div>
  )
}
