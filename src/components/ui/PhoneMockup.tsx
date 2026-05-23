"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";

interface PhoneMockupProps {
  src: string;
  alt: string;
  label?: string;
}

export function PhoneMockup({ src, alt, label }: PhoneMockupProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto w-full max-w-[280px]"
    >
      <div className="phone-frame">
        <div className="phone-frame-inner relative aspect-[9/19.5] bg-muted">
          <Image src={src} alt={alt} fill className="object-cover object-top" sizes="280px" priority />
        </div>
      </div>
      {label && (
        <p className="mt-4 text-center text-sm font-medium text-muted-foreground">{label}</p>
      )}
    </motion.div>
  );
}
