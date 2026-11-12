import Navbar from './components/Navbar'
import ScrollProgress from './components/motion/ScrollProgress'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import About from './components/About'
import Attorneys from './components/Attorneys'
import WhyChooseUs from './components/WhyChooseUs'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-bronze focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <PracticeAreas />
        <About />
        <Attorneys />
        <WhyChooseUs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
