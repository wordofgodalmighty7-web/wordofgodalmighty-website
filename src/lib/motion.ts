export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Scroll-triggered reveal with clip-path feel */
export const scrollReveal = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(8% 0% 12% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.75, ease: easeOut },
  },
};

/** Staggered children for product grids */
export const staggerReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerRevealItem = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Subtle card lift on hover (use with whileHover when motion allowed) */
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.25, ease: easeOut },
  },
};

/** Default parallax range for useScroll transforms */
export const parallaxRange = ["0%", "30%"] as const;
