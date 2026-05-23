"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AppScreenshot } from "@/lib/content";
import { staggerReveal, staggerRevealItem, fadeUp } from "@/lib/motion";
import { PurityShieldScreenshotCard } from "./PurityShieldScreenshotCard";

interface PurityShieldScreenshotGalleryProps {
  screenshots: AppScreenshot[];
}

export function PurityShieldScreenshotGallery({ screenshots }: PurityShieldScreenshotGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [featured, ...rest] = screenshots;

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  return (
    <div className="relative mt-8">
      <div className="mb-4 flex items-center justify-between lg:hidden">
        <p className="text-sm text-muted-foreground">Swipe to explore the app</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll screenshots left"
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll screenshots right"
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="gallery-fade-edges relative lg:hidden">
        <div
          ref={scrollRef}
          role="region"
          aria-label="Purity Shield Pro app screenshots"
          className="scrollbar-hide snap-carousel flex gap-5 overflow-x-auto scroll-smooth px-1 pb-2"
        >
          {screenshots.map((shot) => (
            <PurityShieldScreenshotCard key={shot.id} screenshot={shot} />
          ))}
        </div>
      </div>

      {/* Desktop: featured + grid */}
      <div className="hidden lg:block">
        {featured && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 flex flex-col items-center justify-center"
          >
            <PurityShieldScreenshotCard screenshot={featured} size="large" />
          </motion.div>
        )}
        <motion.div
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-6 xl:grid-cols-4"
        >
          {rest.map((shot) => (
            <motion.div key={shot.id} variants={staggerRevealItem} className="flex justify-center">
              <PurityShieldScreenshotCard screenshot={shot} className="w-full max-w-[220px]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tablet: simple grid */}
      <motion.div
        variants={staggerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="hidden gap-5 md:grid md:grid-cols-2 lg:hidden"
      >
        {screenshots.map((shot) => (
          <motion.div key={shot.id} variants={staggerRevealItem} className="flex justify-center">
            <PurityShieldScreenshotCard screenshot={shot} className="w-full max-w-[240px]" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
