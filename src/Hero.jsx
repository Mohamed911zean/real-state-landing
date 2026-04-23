import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Reveal Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.fromTo(bgRef.current, 
        { scale: 1.2, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.8 }
      )
      .fromTo(titleRef.current.children, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }, 
        "-=1.2"
      )
      .fromTo(contentRef.current.children, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 
        "-=0.6"
      )

      // 2. Scroll Parallax Effects
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      gsap.to(contentRef.current, {
        yPercent: -15,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '80% top',
          scrub: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-6"
    >
      {/* Background Image Layer */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="/house.webp" 
          alt="Real Estate" 
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <div ref={titleRef} className="overflow-hidden mb-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            Find What <br />
            <span className="text-white/90">Moves You</span>
          </h1>
        </div>
        
        <div ref={contentRef} className="space-y-8">
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
            Expert agents. Real guidance. A clear path to find what's next.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all flex items-center gap-2">
              Find Properties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-12 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold">48K+</p>
              <p className="text-sm text-white/60 uppercase tracking-widest">Listings</p>
            </div>
            <div>
              <p className="text-3xl font-bold">12K+</p>
              <p className="text-sm text-white/60 uppercase tracking-widest">Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm text-white/60 uppercase tracking-widest">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}
