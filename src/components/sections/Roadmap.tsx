"use client";

import { motion } from "framer-motion";
import { Check, Wrench, Sparkles } from "lucide-react";
import { roadmap } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const statusConfig = {
  live: {
    icon: Check,
    label: "Live",
    className: "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400",
  },
  launching: {
    icon: Wrench,
    label: "Launching",
    className: "border-accent/30 bg-accent/10 text-accent",
  },
  future: {
    icon: Sparkles,
    label: "Future",
    className: "border-border bg-muted/50 text-muted-foreground",
  },
} as const;

export function Roadmap() {
  return (
    <AnimatedSection id="roadmap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={roadmap.title} subtitle={roadmap.subtitle} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4"
        >
          {roadmap.items.map((item) => {
            const config = statusConfig[item.status];
            const Icon = config.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="glass flex flex-col gap-4 rounded-2xl p-6 transition-all hover:border-accent/20 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
                      config.className,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {config.label}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">{item.project}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
