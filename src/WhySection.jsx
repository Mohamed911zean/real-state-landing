import styles from './WhySection.module.css'

export default function WhySection() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`${styles.title} reveal`}>
            This isn&apos;t just <span>about real estate.</span>
          </h2>
        </div>

        <div className={`${styles.maskContainer} reveal reveal-delay-1`}>
          <div className={styles.maskImageWrapper}>
            <video 
              src="/why-us.mp4" 
              className={styles.maskImage}
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
          {/* Chevron SVG mask over the image */}
          <div className={styles.svgOverlay}>
            <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <defs>
                <mask id="chevronMask">
                  <rect width="100%" height="100%" fill="white" />
                  <path d="M 150 0 L 250 150 L 150 300 L 50 300 L 150 150 L 50 0 Z" fill="black" />
                  <path d="M 350 0 L 450 150 L 350 300 L 250 300 L 350 150 L 250 0 Z" fill="black" />
                  <path d="M 550 0 L 650 150 L 550 300 L 450 300 L 550 150 L 450 0 Z" fill="black" />
                  <path d="M 750 0 L 850 150 L 750 300 L 650 300 L 750 150 L 650 0 Z" fill="black" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="white" mask="url(#chevronMask)" />
            </svg>
          </div>
        </div>

        <div className={styles.captionRow}>
          <p className={`${styles.caption} reveal`}>
            It&apos;s about identity. Progress. Getting unstuck.<br/>
            You&apos;re not just looking for a place. <span className={styles.silver}>You&apos;re looking<br/>for alignment. That&apos;s what we help you find.</span>
          </p>
        </div>

        <div className={styles.bottomGrid}>
          <div className={`${styles.leftBottom} reveal`}>
            <h2 className={styles.rewiredTitle}>Real Estate,<br/>Rewired.</h2>
            <button className={styles.btnPrimary}>
              Start Your Search
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          
          <div className={`${styles.rightBottom} reveal reveal-delay-1`}>
            <p className={styles.stepsLabel}>Steps:</p>
            <div className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <p className={styles.stepText}>
                <strong>Talk to a Real Human.</strong> We match you with an expert who actually listens.
              </p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <p className={styles.stepText}>
                <strong>Get Clarity.</strong> We define what you really need, not just what&apos;s available.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}