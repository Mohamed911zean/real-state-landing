import styles from './ServicesSection.module.css'

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        
        <div className={styles.header}>
          <h2 className={`${styles.title} reveal`}>
            Support Beyond<br />Buying and Selling
          </h2>
          <div className={`${styles.descWrap} reveal reveal-delay-1`}>
            <p className={styles.desc}>
              The real estate market never stands still — and neither do we. Our experts offer continued support beyond the sale, helping you maximize your investment.
            </p>
            <button className={styles.btnOutline}>
              Discover Our Services
            </button>
          </div>
        </div>

        <div className={styles.list}>
          
          <div className={`${styles.item} reveal reveal-delay-1`}>
            <div className={styles.itemImageWrapper}>
              <img src="/mortgage-services.webp" alt="Mortgage Services" className={styles.itemImage} />
            </div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>Mortgage Services</h3>
              <p className={styles.itemDesc}>
                Helping you secure your dream home with flexible mortgage options.
              </p>
            </div>
            <div className={styles.itemArrow}>→</div>
          </div>

          <div className={`${styles.item} reveal reveal-delay-2`}>
            <div className={styles.itemImageWrapper}>
              <img src="/property-management.webp" alt="Property Management" className={styles.itemImage} />
            </div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>Property Management</h3>
              <p className={styles.itemDesc}>
                Let us handle the details so you can enjoy the rewards.
              </p>
            </div>
            <div className={styles.itemArrow}>→</div>
          </div>

          <div className={`${styles.item} reveal reveal-delay-3`}>
            <div className={styles.itemImageWrapper}>
              <img src="/development.webp" alt="Construction and Real Estate Development" className={styles.itemImage} />
            </div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>Construction and Real Estate Development</h3>
              <p className={styles.itemDesc}>
                Guiding you through the intricacies of building and developing properties with expert insight and support.
              </p>
            </div>
            <div className={styles.itemArrow}>→</div>
          </div>

        </div>

      </div>
    </section>
  )
}