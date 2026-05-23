"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { founderStory } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";

export function FounderStory() {
  return (
    <AnimatedSection id="story">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={founderStory.title} subtitle={founderStory.subtitle} />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {founderStory.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl border border-accent/15 p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our motivation</p>
            <ul className="mt-6 space-y-4">
              {founderStory.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
