import { useLenis }       from './hooks/useLenis'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar         from './Navbar'
import Hero           from './Hero'
import WhySection     from './WhySection'
import ServicesSection from './ServicesSection'
import Testimonials   from './Testimonials'
import Footer         from './Footer'

function App() {
  /* 1. Boot Lenis smooth-scroll — must be called before ScrollTrigger reveals */
  useLenis()

  /* 2. Wire GSAP ScrollTrigger reveal for all .reveal elements */
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <WhySection />
      <ServicesSection />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
