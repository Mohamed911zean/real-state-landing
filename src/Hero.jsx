import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Hero.module.css'
import {
  containerVariants,
  wordVariants,
  subtitleVariants,
  statsVariants,
  searchVariants,
  badgeVariants,
} from './animations/heroVariants'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────── Static data ──────────────────── */
const STATS = [
  { value: '48K+', label: 'Active Listings'  },
  { value: '12K+', label: 'Happy Clients'    },
  { value: '98%',  label: 'Satisfaction Rate'},
]
const HEADLINE_LINES = ['Find What', 'Moves You']
const PROPERTY_TYPES = ['Buy', 'Rent', 'Sell']
const QUICK_CITIES   = ['New York', 'Los Angeles', 'Miami', 'Chicago']

/* ──────────────────── Component ──────────────────────── */
export default function Hero() {
  const heroRef    = useRef(null)
  const bgInnerRef = useRef(null)    // GSAP Ken-Burns target
  const contentRef = useRef(null)    // GSAP scroll-parallax target

  const [activeTab, setActiveTab] = useState('Buy')
  const [searchVal, setSearchVal] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [showModal, setShowModal] = useState(false)

  /* ── 1. GSAP Ken-Burns & Parallax on background layers ─────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Very slow infinite zoom on the main house to keep it feeling alive
      gsap.to('.hero-layer-house', {
        scale: 1.05,
        duration: 20,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Scroll-driven Parallax
      // The back text moves up slower
      gsap.to('.hero-layer-back', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // The house moves up slightly
      gsap.to('.hero-layer-house', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // The clouds/smoke in front move up faster to create depth
      gsap.to('.hero-layer-front', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Content fades out + drifts up faster
      gsap.to(contentRef.current, {
        yPercent: -12,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  /* ── 3. Lock scroll when modal open ──────────────────────── */
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showModal])

  const handleSearch = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  /* ──────────────────── Render ───────────────────────────── */
  return (
    <>
      <section className={styles.hero} ref={heroRef} id="hero">

        {/* ── Background: Multi-layered Parallax ────────────── */}
        <div className={styles.bgWrapper}>
          <div className={styles.bgInner} ref={bgInnerRef}>
            {/* Layer 1: FIND Text behind building */}
            <img 
              src="/back.webp" 
              alt="" 
              className={`${styles.bgLayer} ${styles.layerBack} hero-layer-back`} 
              fetchPriority="high"
            />
            {/* Layer 2: Main Building */}
            <img
              src="/house.webp"
              alt="Luxury real estate building"
              className={`${styles.bgLayer} ${styles.layerHouse} hero-layer-house`}
              fetchPriority="high"
              loading="eager"
            />
            {/* Layer 3: Clouds */}
            <img 
              src="/cloud.webp" 
              alt="" 
              className={`${styles.bgLayer} ${styles.layerCloud} hero-layer-front`} 
            />
            {/* Layer 4: Smoke */}
            <img 
              src="/smoke.webp" 
              alt="" 
              className={`${styles.bgLayer} ${styles.layerSmoke} hero-layer-front`} 
            />
            
            <div className={styles.bgOverlayTop}    />
            <div className={styles.bgOverlayBottom} />
          </div>
        </div>

        {/* ── Content ────────────────────────────────────────── */}
        <div className={styles.content} ref={contentRef}>

          {/* Badge */}
          <motion.div
            className={styles.badge}
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.badgeDot} />
            Premium Real Estate Platform
          </motion.div>

          {/* Headline — word-by-word stagger via Framer Motion */}
          <motion.h1
            className={styles.headline}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label={HEADLINE_LINES.join(' ')}
          >
            {HEADLINE_LINES.map((line, li) => (
              <span key={li} className={styles.headlineLine}>
                {line.split(' ').map((word, wi) => (
                  <motion.span
                    key={wi}
                    variants={wordVariants}
                    style={{ display: 'inline-block' }}
                  >
                    {word}{wi < line.split(' ').length - 1 ? '\u00A0' : ''}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Expert agents. Real guidance. A clear path to find what&apos;s next.
          </motion.p>

          {/* Stats */}
          <motion.div
            className={styles.statsRow}
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            {STATS.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Search bar */}
          <motion.form
            className={`${styles.searchBar} ${isFocused ? styles.searchBarFocused : ''}`}
            variants={searchVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSearch}
            noValidate
          >
            {/* Property type tabs */}
            <div className={styles.tabs}>
              {PROPERTY_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className={styles.searchDivider} />

            {/* Location input */}
            <div className={styles.searchInputWrap}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="City, neighborhood, or address…"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                aria-label="Search location"
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              className={styles.searchBtn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="17" height="17">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <span>Search</span>
            </motion.button>
          </motion.form>

          {/* Quick-city chips */}
          <motion.div
            className={styles.quickFilters}
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.quickLabel}>Popular:</span>
            {QUICK_CITIES.map((city) => (
              <button
                key={city}
                className={styles.quickChip}
                type="button"
                onClick={() => { setSearchVal(city); setShowModal(true) }}
              >
                {city}
              </button>
            ))}
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.span
            className={styles.scrollLine}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
          <span className={styles.scrollText}>Scroll</span>
        </motion.div>

      </section>

      {/* ── MODAL ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className={styles.modalOverlay}
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className={styles.modal}
              key="modal"
              initial={{ opacity: 0, y: 48, scale: 0.94 }}
              animate={{ opacity: 1, y: 0,  scale: 1  }}
              exit={{ opacity: 0, y: 24, scale: 0.96  }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              <h2 className={styles.modalTitle}>Find properties</h2>
              <p className={styles.modalSub}>
                Buy, rent, sell, or lease — our agents are here to help.
              </p>

              <div className={styles.modalGrid}>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Email Address*</label>
                  <input className={styles.modalInput} type="email" placeholder="Enter your email" />
                </div>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Phone Number*</label>
                  <input className={styles.modalInput} type="tel" placeholder="Enter your phone" />
                </div>
              </div>

              <div className={styles.modalRow3}>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Price*</label>
                  <input className={styles.modalInput} type="number" placeholder="Min price" />
                </div>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>&nbsp;</label>
                  <input className={styles.modalInput} type="number" placeholder="Max price" />
                </div>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Deal Type*</label>
                  <select className={styles.modalInput} defaultValue="">
                    <option value="" disabled>Choose your deal type</option>
                    <option>Buy</option>
                    <option>Rent</option>
                    <option>Sell</option>
                    <option>Lease</option>
                  </select>
                </div>
              </div>

              <motion.button
                className={styles.modalBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(false)}
              >
                Next <span className={styles.modalBtnArrow}>→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}