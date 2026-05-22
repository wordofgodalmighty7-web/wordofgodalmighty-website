"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp } from "@/lib/motion";

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={about.title} subtitle={about.subtitle} />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
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
                &ldquo;{about.quote.text}&rdquo;
              </blockquote>
              <footer className="mt-6 text-sm font-medium text-accent">
                — {about.quote.attribution}
              </footer>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
