"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import type { ApparelProject } from "@/lib/content";

interface EtsyCtaBandProps {
  project: ApparelProject;
}

export function EtsyCtaBand({ project }: EtsyCtaBandProps) {
  const { etsy, ctas } = project;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-10"
    >
      <div className="glass rounded-2xl px-6 py-8 text-center sm:px-10 sm:py-10">
        <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          Shop faith-inspired apparel on Etsy
        </p>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Visit our official {etsy.shopName} storefront to explore the full collection, support
          the mission, and wear designs that glorify Christ.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          {ctas.map((cta) => (
            <Button
              key={cta.label}
              href={etsy.shopUrl}
              variant={cta.variant}
              external
              className="w-full sm:w-auto"
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
