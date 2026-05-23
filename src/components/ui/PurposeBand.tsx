"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface PurposeBandProps {
  statement: string;
}

export function PurposeBand({ statement }: PurposeBandProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-8 flex items-start gap-4 rounded-2xl border border-accent/20 bg-accent/5 px-6 py-5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
        <Heart className="h-5 w-5 text-accent" aria-hidden />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Built With Purpose</p>
        <p className="mt-2 font-display text-lg font-medium leading-snug text-foreground sm:text-xl">
          {statement}
        </p>
      </div>
    </motion.div>
  );
}
