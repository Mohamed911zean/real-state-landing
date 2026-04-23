import { useRef } from 'react'
// Swiper with required modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel, A11y } from 'swiper/modules'
// Swiper core styles
import 'swiper/css'
import 'swiper/css/free-mode'
import styles from './Testimonials.module.css'

/* ── Data ─────────────────────────────────────────────── */
const testimonials = [
  {
    id: 1,
    name: 'Bernadette Hogan',
    role: 'Home Buyer, New York',
    stars: 5,
    text: '"Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He\'s a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!"',
  },
  {
    id: 2,
    name: 'Tyleen',
    role: 'Condo Buyer, Miami',
    stars: 5,
    text: '"Shirin was truly a blessing to work with. She helped us find our perfect condo in a great area. She was patient and very understanding. I would recommend working with her if you are in need of someone who will go out of their way to make sure you find the home of your dreams."',
  },
  {
    id: 3,
    name: 'Johanna Nieto',
    role: 'First-Time Buyer, Los Angeles',
    stars: 5,
    text: '"Working with Mathew was an absolute pleasure, and I highly recommend him to any serious homebuyer—especially first-time buyers like myself. From the start, Mathew\'s problem-solving skills stood out. Thank you for making this happen—we are truly happy in our new home!"',
  },
  {
    id: 4,
    name: 'Matt Powers',
    role: 'Home Buyer, Chicago',
    stars: 5,
    text: '"Shirin was an invaluable resource, consultant, and general guide through the home-buying process from the initial search to closing. She immediately understood what we were looking for and helped tailor our search in the right direction."',
  },
  {
    id: 5,
    name: 'Giavridis Theodore',
    role: 'Renter, Upper West Side',
    stars: 5,
    text: '"After 12 years in NYC, I have had my best broker experience by far with Fay Blau. Fay helped me find a beautiful apartment on the Upper West Side that fit my needs like a glove. She knows the neighborhood like the back of her hand."',
  },
]

/* ── Stars helper ──────────────────────────────────────── */
function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

/* ── Component ─────────────────────────────────────────── */
export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.eyebrow} reveal`} data-delay="0">Reviews</p>
          <h2 className={`${styles.title} reveal`} data-delay="0.1">
            Don&apos;t Take Our<br />Word for It.
          </h2>
        </div>
      </div>

      {/* ── Full-bleed Swiper carousel ──────────────────────── */}
      <div className={styles.swiperOuter}>
        <Swiper
          modules={[FreeMode, Mousewheel, A11y]}
          freeMode={{ enabled: true, momentum: true, momentumRatio: 0.6 }}
          mousewheel={{ forceToAxis: true }}
          slidesPerView="auto"
          spaceBetween={20}
          grabCursor
          className={styles.swiper}
          a11y={{ enabled: true }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.id} className={styles.slide}>
              <div className={`${styles.card} reveal`} data-delay={`${i * 0.08}`}>
                <Stars count={t.stars} />
                <p className={styles.text}>{t.text}</p>
                <div className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className={styles.authorName}>{t.name}</p>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.dragHint}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <span>Drag to explore</span>
      </div>
    </section>
  )
}