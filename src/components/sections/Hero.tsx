"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-mesh absolute inset-0" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="cross-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 20v40M20 40h40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cross-pattern)" />
      </svg>
      {!prefersReducedMotion && (
        <motion.div
          className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16">
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
        >
          <motion.p variants={fadeUp} className="mb-4">
            <a
              href={site.url}
              className="text-sm font-medium uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-80"
            >
              {site.domain}
            </a>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {hero.heading}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {hero.subheading}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {hero.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
