import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollReveal — replaces the old IntersectionObserver approach.
 * Uses GSAP ScrollTrigger to animate any element with the `.reveal` class.
 * Integrates automatically with Lenis via the ScrollTrigger.update call in useLenis.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    els.forEach((el) => {
      // Set initial hidden state via GSAP (overrides any CSS transition)
      gsap.set(el, { opacity: 0, y: 28 })

      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            delay: parseFloat(el.dataset.delay || 0),
          })
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])
}