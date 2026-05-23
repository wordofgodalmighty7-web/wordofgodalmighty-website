"use client";

import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion";

interface PurityShieldFeatureGridProps {
  features: string[];
}

export function PurityShieldFeatureGrid({ features }: PurityShieldFeatureGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="mt-10"
    >
      <div className="mb-6 flex items-center gap-2">
        <Shield className="h-5 w-5 text-accent" />
        <h4 className="font-display text-lg font-semibold text-foreground">Core features</h4>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <motion.div
            key={feature}
            variants={fadeUp}
            className="glass glass-glow rounded-xl px-4 py-4 transition-colors"
          >
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">{feature}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
