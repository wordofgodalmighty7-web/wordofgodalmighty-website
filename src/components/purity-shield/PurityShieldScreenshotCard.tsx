"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Smartphone } from "lucide-react";
import type { AppScreenshot } from "@/lib/content";
import { cn } from "@/lib/utils";

interface PurityShieldScreenshotCardProps {
  screenshot: AppScreenshot;
  className?: string;
  size?: "default" | "large";
}

export function PurityShieldScreenshotCard({
  screenshot,
  className,
  size = "default",
}: PurityShieldScreenshotCardProps) {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isLarge = size === "large";

  return (
    <motion.article
      className={cn(
        "group flex shrink-0 snap-center flex-col",
        isLarge ? "w-full max-w-[280px]" : "w-[min(72vw,240px)] md:w-auto",
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "phone-frame glass-glow mx-auto transition-shadow duration-300",
          isLarge ? "w-[min(100%,280px)]" : "w-[min(72vw,240px)]",
        )}
      >
        <div className="phone-frame-inner relative aspect-[9/19.5] overflow-hidden bg-muted">
          {!imageError ? (
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes={
                isLarge
                  ? "(max-width: 768px) 280px, 320px"
                  : "(max-width: 768px) 72vw, (max-width: 1280px) 25vw, 240px"
              }
              className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-accent/25 via-muted to-background p-4">
              <Shield className="h-10 w-10 text-accent/70" strokeWidth={1.25} />
              <Smartphone className="mt-2 h-6 w-6 text-muted-foreground/60" />
              <p className="mt-3 px-3 text-center text-xs text-muted-foreground">
                Add {screenshot.src.split("/").pop()} to public/images/purity-shield/
              </p>
            </div>
          )}
        </div>
      </div>
      {screenshot.label && (
        <p className="mt-3 text-center font-display text-sm font-medium text-foreground">
          {screenshot.label}
        </p>
      )}
    </motion.article>
  );
}
