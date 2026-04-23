import { useEffect, useRef } from 'react'

/**
 * Returns a ref. Attach to any element you want to parallax.
 * @param {number} speed  - multiplier: 0.1 = subtle, 0.4 = strong
 * @param {string} dir    - 'up' | 'down'  (default 'up')
 */
export function useParallax(speed = 0.2, dir = 'up') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const scrollY = window.scrollY
      const offset = dir === 'up' ? -scrollY * speed : scrollY * speed
      el.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed, dir])

  return ref
}