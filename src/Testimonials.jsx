import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Bernadette Hogan",
    role: "Homeowner",
    text: "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. Tireless and dedicated.",
    initials: "BH"
  },
  {
    name: "Johanna Nieto",
    role: "First-time Buyer",
    text: "Working with Mathew was an absolute pleasure, and I highly recommend him to any serious homebuyer—especially first-time buyers like myself.",
    initials: "JN"
  },
  {
    name: "Giavridis Theodore",
    role: "New Yorker",
    text: "After 12 years in NYC, I have had my best broker experience by far with Fay Blau. She knows the neighborhood like the back of her hand.",
    initials: "GT"
  }
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Trusted by Thousands</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            See how we've helped clients achieve their real estate dreams, one successful move at a time.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="pb-16 testimonials-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-neutral-900 p-12 rounded-3xl h-full flex flex-col justify-between border border-neutral-800">
                <div className="space-y-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl font-medium leading-relaxed italic text-neutral-200">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-10 border-t border-neutral-800 mt-10">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{t.name}</p>
                    <p className="text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
