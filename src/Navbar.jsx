import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Search',     href: '#search'    },
  { label: 'Agents',     href: '#agents'    },
  { label: 'Join',       href: '#join'      },
  { label: 'Paperwork',  href: '#paperwork', hasDrop: true },
  { label: 'Resources',  href: '#resources', hasDrop: true },
  { label: 'About',      href: '#about',     hasDrop: true },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()                          // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <div className={styles.inner}>

        {/* ── Logo ───────────────────────────────────────────── */}
        <a href="#hero" className={styles.logo}>
          FIND
        </a>

        {/* ── Desktop nav links ──────────────────────────────── */}
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.label} className={styles.linkItem}>
              <a href={l.href} className={styles.link}>
                {l.label}
                {l.hasDrop && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                    stroke="currentColor" strokeWidth="1.8" className={styles.chevron}>
                    <path d="M2 4l4 4 4-4"/>
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA ────────────────────────────────────────────── */}
        <button className={styles.cta}>Sign In</button>

        {/* ── Mobile hamburger ───────────────────────────────── */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile dropdown ────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button className={styles.ctaMobile}>Sign In</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}