/**
 * heroVariants.js
 * Centralized, reusable Framer Motion animation variants for the Hero section.
 * All cubic-bezier curves are tuned for a premium, 60fps feel.
 */

// ── Container that staggers its children ──────────────────────────────
export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
}

// ── Individual word / line reveal ─────────────────────────────────────
export const wordVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    rotateX: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1], // expo-out feel
    },
  },
}

// ── Subtitle paragraph ────────────────────────────────────────────────
export const subtitleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.55,
    },
  },
}

// ── Stats row ─────────────────────────────────────────────────────────
export const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.7,
    },
  },
}

// ── Search bar ────────────────────────────────────────────────────────
export const searchVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.75,
    },
  },
}

// ── Scroll-driven hero wrapper (fades out as you scroll) ──────────────
export const heroPanVariants = {
  top: { opacity: 1 },
  scrolled: { opacity: 0, transition: { duration: 0.3 } },
}

// ── Badge / pill ──────────────────────────────────────────────────────
export const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85, y: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
      delay: 0.1,
    },
  },
}
