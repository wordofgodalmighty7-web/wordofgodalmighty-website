"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Shirt } from "lucide-react";
import type { EtsyProduct } from "@/lib/content";
import { cn } from "@/lib/utils";

interface EtsyProductCardProps {
  product: EtsyProduct;
  className?: string;
}

export function EtsyProductCard({ product, className }: EtsyProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group glass glass-glow flex shrink-0 snap-center flex-col overflow-hidden rounded-2xl",
        "w-[min(85vw,280px)] md:w-auto",
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {!imageError ? (
          <Image
            src={product.src}
            alt={product.alt}
            fill
            sizes="(max-width: 768px) 85vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-accent/20 via-muted to-background">
            <Shirt className="h-12 w-12 text-accent/60" strokeWidth={1.25} />
            <p className="mt-3 px-4 text-center text-xs text-muted-foreground">
              Add {product.src.split("/").pop()} to public/images/etsy/
            </p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      {product.label && (
        <p className="px-4 py-3 text-center font-display text-sm font-medium text-foreground">
          {product.label}
        </p>
      )}
    </motion.article>
  );
}
