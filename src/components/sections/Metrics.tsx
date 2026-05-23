"use client";

import { motion, useReducedMotion } from "framer-motion";
import { metrics } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function Metrics() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={metrics.title} subtitle={metrics.subtitle} />
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.items.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="glass glass-glow rounded-2xl p-6 text-center transition-all"
            >
              <p className="font-display text-4xl font-semibold text-accent sm:text-5xl">{item.value}</p>
              <p className="mt-2 font-medium text-foreground">{item.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
