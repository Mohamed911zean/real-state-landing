import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRegion}>
        <div className="container">
          <div className={styles.topGrid}>
            
            <div className={styles.brandCol}>
              <a href="#hero" className={styles.logo}>
                FIND<span className={styles.logoDot}>.</span>
              </a>
              <p className={styles.brandDesc}>
                New York City's premier real estate team, bringing clarity and confidence to your next move.
              </p>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li><a href="#search">Search Properties</a></li>
                <li><a href="#about">About FIND</a></li>
                <li><a href="#agents">Our Agents</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Connect</h4>
              <ul className={styles.linkList}>
                <li><a href="mailto:hello@findrealestate.com">hello@findrealestate.com</a></li>
                <li><a href="tel:1234567890">+1 (212) 555-0198</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
              </ul>
            </div>

            <div className={styles.ctaCol}>
              <h4 className={styles.colTitle}>Newsletter</h4>
              <p className={styles.ctaDesc}>Get NYC market insights delivered straight to your inbox.</p>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" className={styles.input} />
                <button type="submit" className={styles.submitBtn}>Join</button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.bottomRegion}>
        <div className="container">
          <div className={styles.bottomFlex}>
            <p className={styles.copy}>&copy; {new Date().getFullYear()} FIND Real Estate. All rights reserved.</p>
            <div className={styles.legal}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
