import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, intro, center = false, id }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${center ? 'eyebrow-center' : ''}`}>{eyebrow}</p>
      <h2 id={id} className="heading-lg mt-5 text-parchment">{title}</h2>
      {intro && <p className="body-lg mt-5">{intro}</p>}
    </Reveal>
  )
}
