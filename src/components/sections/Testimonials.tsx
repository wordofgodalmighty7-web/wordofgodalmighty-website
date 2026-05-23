"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-accent text-accent" : "text-muted-foreground/30",
          )}
        />
      ))}
    </div>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="" className="h-12 w-12 rounded-full object-cover" />
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 font-medium text-accent">
      {initials}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const items = testimonials.items;
  const current = items[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, prefersReducedMotion]);

  return (
    <AnimatedSection id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={testimonials.title} subtitle={testimonials.subtitle} />
        {testimonials.disclaimer && (
          <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-xs text-muted-foreground/80">
            {testimonials.disclaimer}
          </p>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="glass relative overflow-hidden rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/20" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <StarRating rating={current.rating} />
                <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <Avatar name={current.name} src={current.avatarSrc} />
                  <div>
                    <p className="font-medium text-foreground">{current.name}</p>
                    <p className="text-sm text-muted-foreground">{current.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground/80">{current.source}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
