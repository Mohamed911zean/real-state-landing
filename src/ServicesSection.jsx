import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Mortgage Services",
    description: "Helping you secure your dream home with flexible mortgage options tailored to your needs.",
    image: "/mortgage-services.webp",
    tag: "Finance"
  },
  {
    title: "Property Management",
    description: "Let us handle the details so you can enjoy the rewards of your investment property.",
    image: "/property-management.webp",
    tag: "Management"
  },
  {
    title: "Real Estate Development",
    description: "Guiding you through the intricacies of building and developing properties with expert insight.",
    image: "/development.webp",
    tag: "Development"
  }
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current.children, 
        { y: 60, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
              Support Beyond <br />
              <span className="text-neutral-400">Buying & Selling</span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Our experts offer continued support beyond the sale, helping you maximize your investment and navigate the future of real estate.
            </p>
          </div>
          <button className="px-8 py-4 bg-white border border-neutral-200 text-black rounded-full font-bold hover:bg-black hover:text-white transition-all duration-500 shadow-sm">
            Discover Our Services
          </button>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-neutral-100 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-black">
                  {service.tag}
                </div>
              </div>
              <div className="p-10 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-black transition-colors">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 flex items-center gap-2 text-black font-bold group/btn">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
