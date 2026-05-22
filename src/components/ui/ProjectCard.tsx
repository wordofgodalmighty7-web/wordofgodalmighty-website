"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ProjectCard({ children, className, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={cn("h-full", className)}
    >
      <Card className="h-full overflow-hidden">{children}</Card>
    </motion.div>
  );
}
