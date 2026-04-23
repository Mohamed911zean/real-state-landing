import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WhySection() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video Reveal & Parallax
      gsap.fromTo(videoRef.current, 
        { scale: 1.1, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.5, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )

      // Content Stagger Reveal
      gsap.fromTo(contentRef.current.children, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="py-32 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Video Container */}
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
            <div 
              ref={videoRef}
              className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-neutral-100"
            >
              <video 
                src="/why-us.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700" />
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Our Vision</p>
              <p className="text-xl font-medium leading-relaxed">
                "It's about identity. Progress. Getting unstuck. You’re not just looking for a place. You’re looking for alignment."
              </p>
            </div>
          </div>

          {/* Content Container */}
          <div ref={contentRef} className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight">
                Real Estate, <br />
                <span className="text-neutral-400 italic font-serif">Rewired.</span>
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                At FIND, our agents don’t just work for the brand—they own a part of it. 
                We give top performers real equity, so they’re invested in more than just your transaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-4xl font-serif italic text-neutral-300">01.</span>
                <h3 className="text-xl font-bold">Expert Agents</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Certified, supported, and equipped to deliver five-star service every single time.
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-4xl font-serif italic text-neutral-300">02.</span>
                <h3 className="text-xl font-bold">Owner Mentality</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Our success is tied directly to yours because our agents are stakeholders in the company.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-black/10">
                Start Your Search
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
