"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EtsyProduct } from "@/lib/content";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { EtsyProductCard } from "./EtsyProductCard";

interface EtsyProductGalleryProps {
  products: EtsyProduct[];
}

export function EtsyProductGallery({ products }: EtsyProductGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  return (
    <div className="relative mt-8">
      <div className="mb-4 flex items-center justify-between md:hidden">
        <p className="text-sm text-muted-foreground">Swipe to explore designs</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll gallery left"
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll gallery right"
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile: horizontal carousel */}
      <div className="gallery-fade-edges relative md:hidden">
        <div
          ref={scrollRef}
          role="region"
          aria-label="Etsy t-shirt design gallery"
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <EtsyProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Desktop: responsive grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={fadeUp}>
            <EtsyProductCard product={product} className="w-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
