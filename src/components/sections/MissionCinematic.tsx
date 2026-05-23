"use client";

import { motion, useReducedMotion } from "framer-motion";
import { mission } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/motion";

function MissionBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-mesh absolute inset-0 opacity-80" />
      {mission.videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          src={mission.videoSrc}
        />
      ) : null}
      {!prefersReducedMotion && (
        <>
          <div className="glow-orb glow-orb-accent -left-32 top-1/4 h-64 w-64" />
          <div className="glow-orb glow-orb-muted -right-24 bottom-1/4 h-72 w-72" />
        </>
      )}
    </div>
  );
}

export function MissionCinematic() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="about" className="section-cinematic">
      <MissionBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={mission.title} subtitle={mission.subtitle} />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto -mt-4 max-w-4xl text-center font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl lg:text-4xl"
        >
          {mission.headline}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground"
        >
          {mission.spiritualPurpose}
        </motion.p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {mission.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 40)}
                variants={fadeUp}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Card className="relative overflow-hidden border-accent/20">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <blockquote className="relative font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                &ldquo;{mission.quote.text}&rdquo;
              </blockquote>
              <footer className="mt-6 text-sm font-medium text-accent">
                — {mission.quote.attribution}
              </footer>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Mission timeline
          </p>
          <ol className="relative mx-auto mt-10 max-w-2xl space-y-0">
            {!prefersReducedMotion && (
              <div
                className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:left-1/2 sm:-ml-px"
                aria-hidden
              />
            )}
            {mission.timeline.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8"
              >
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background text-xs font-bold text-accent">
                  {index + 1}
                </div>
                <div className="glass flex-1 rounded-xl px-5 py-4">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {item.year}
                    </span>
                    <span className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
