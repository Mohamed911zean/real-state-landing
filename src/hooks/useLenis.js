import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useLenis — initialises a Lenis smooth-scroll instance and wires it into
 * GSAP's ScrollTrigger so every trigger reacts to smooth-scrolled positions.
 *
 * Call once at the root of your app.
 * Returns the lenis instance ref in case children need to listen to scroll events.
 */
export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration:   1.2,                         // scroll inertia (seconds)
      easing:     (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out expo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite:   false,
    })

    lenisRef.current = lenis

    // Keep GSAP ScrollTrigger in sync with Lenis scroll position
    lenis.on('scroll', ScrollTrigger.update)

    // Drive Lenis via GSAP ticker for perfectly synced 60fps
    const ticker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}
