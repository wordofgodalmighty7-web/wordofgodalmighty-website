"use client";

import { motion } from "framer-motion";
import { vision } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/motion";

export function Vision() {
  return (
    <AnimatedSection id="vision" className="bg-muted/20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {vision.title}
          </p>
          <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{vision.theme}</span>
          </h2>
          <div className="section-divider mx-auto my-10 max-w-md" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {vision.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
