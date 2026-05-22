"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedSection({ id, children, className }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      variants={prefersReducedMotion ? undefined : fadeUp}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      className={cn("relative py-20 sm:py-28", className)}
    >
      {children}
    </motion.section>
  );
}
