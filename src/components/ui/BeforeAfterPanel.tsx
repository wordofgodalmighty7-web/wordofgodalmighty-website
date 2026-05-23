"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BeforeAfterStory } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

interface BeforeAfterPanelProps {
  story: BeforeAfterStory;
}

export function BeforeAfterPanel({ story }: BeforeAfterPanelProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr]"
    >
      <div className="glass rounded-2xl border border-border/80 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {story.before.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{story.before.description}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
          <ArrowRight className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <div className="glass rounded-2xl border border-accent/25 bg-accent/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{story.after.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground">{story.after.description}</p>
      </div>
    </motion.div>
  );
}
