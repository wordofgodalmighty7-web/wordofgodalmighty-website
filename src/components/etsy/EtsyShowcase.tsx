"use client";

import { motion } from "framer-motion";
import { Check, ShoppingBag } from "lucide-react";
import type { ApparelProject } from "@/lib/content";
import { scrollReveal } from "@/lib/motion";
import { Card } from "@/components/ui/Card";
import { BeforeAfterPanel } from "@/components/ui/BeforeAfterPanel";
import { PurposeBand } from "@/components/ui/PurposeBand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EtsyProductGallery } from "./EtsyProductGallery";
import { EtsyCtaBand } from "./EtsyCtaBand";

interface EtsyShowcaseProps {
  project: ApparelProject;
}

export function EtsyShowcase({ project }: EtsyShowcaseProps) {
  return (
    <ScrollReveal className="mb-16">
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <Card className="overflow-hidden" glow>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                <ShoppingBag className="h-3.5 w-3.5" />
                {project.badge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1 text-accent">{project.tagline}</p>
            </div>
            <a
              href={project.etsy.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
            >
              @{project.etsy.shopName}
            </a>
          </div>

          <p className="mt-4 max-w-3xl text-muted-foreground">{project.description}</p>

          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <BeforeAfterPanel story={project.beforeAfter} />
          <PurposeBand statement={project.purposeStatement} />

          <p className="mt-10 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our collection
          </p>
          <p className="mt-2 max-w-2xl text-foreground/90">{project.etsy.galleryIntro}</p>

          <EtsyProductGallery products={project.products} />
          <EtsyCtaBand project={project} />
        </Card>
      </motion.div>
    </ScrollReveal>
  );
}
