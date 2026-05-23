"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import type { AppProject } from "@/lib/content";

interface PurityShieldCtaBandProps {
  project: AppProject;
}

export function PurityShieldCtaBand({ project }: PurityShieldCtaBandProps) {
  const { playStore, ctas } = project;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-10"
    >
      <div className="glass rounded-2xl px-6 py-8 text-center sm:px-10 sm:py-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
          <Smartphone className="h-6 w-6 text-accent" />
        </div>
        <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          Start your journey toward purity in Christ
        </p>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Download Purity Shield Pro on Google Play — block harmful content, build discipline,
          and grow with faith-based guidance designed for real spiritual transformation.
        </p>
        <p className="mt-2 text-sm font-medium text-accent">{playStore.badgeLabel}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          {ctas.map((cta) => {
            const href = cta.href ?? playStore.url;
            const external = cta.external ?? cta.href === undefined;
            return (
              <Button
                key={cta.label}
                href={href}
                variant={cta.variant}
                external={external}
                className="w-full sm:w-auto"
              >
                {cta.label}
              </Button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
