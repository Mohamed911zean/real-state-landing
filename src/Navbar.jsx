import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className={`text-3xl font-bold tracking-tighter ${scrolled ? 'text-black' : 'text-white'}`}>
          FIND
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a 
                href={l.href} 
                className={`text-sm font-medium tracking-wide uppercase flex items-center gap-1.5 transition-colors ${
                  scrolled ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
                {l.hasDrop && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                    stroke="currentColor" strokeWidth="2" className="opacity-50">
                    <path d="M2 4l4 4 4-4"/>
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
            scrolled ? 'bg-black text-white hover:bg-black/90' : 'bg-white text-black hover:bg-white/90'
          }`}>
            Sign In
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-black' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[60] flex flex-col p-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-20">
              <span className="text-3xl font-bold tracking-tighter text-black">FIND</span>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-black text-2xl">✕</button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-4xl font-bold text-black tracking-tight"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
            
            <button className="mt-auto w-full py-5 bg-black text-white rounded-full text-xl font-bold">
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
