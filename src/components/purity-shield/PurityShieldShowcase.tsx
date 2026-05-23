"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import type { AppProject } from "@/lib/content";
import { scrollReveal } from "@/lib/motion";
import { Card } from "@/components/ui/Card";
import { BeforeAfterPanel } from "@/components/ui/BeforeAfterPanel";
import { PurposeBand } from "@/components/ui/PurposeBand";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PurityShieldScreenshotGallery } from "./PurityShieldScreenshotGallery";
import { PurityShieldFeatureGrid } from "./PurityShieldFeatureGrid";
import { PurityShieldPlayStore } from "./PurityShieldPlayStore";
import { PurityShieldCtaBand } from "./PurityShieldCtaBand";

interface PurityShieldShowcaseProps {
  project: AppProject;
}

export function PurityShieldShowcase({ project }: PurityShieldShowcaseProps) {
  const heroScreenshot = project.screenshots[0];

  return (
    <ScrollReveal>
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
                <Shield className="h-3.5 w-3.5" />
                {project.badge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1 text-accent">{project.tagline}</p>
            </div>
            <a
              href={project.playStore.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
            >
              Google Play
            </a>
          </div>

          <p className="mt-4 max-w-3xl text-muted-foreground">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400">
              {project.status.primary}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {project.status.secondary}
            </span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <BeforeAfterPanel story={project.beforeAfter} />
            </div>
            {heroScreenshot && (
              <PhoneMockup
                src={heroScreenshot.src}
                alt={heroScreenshot.alt}
                label={heroScreenshot.label}
              />
            )}
          </div>

          <PurposeBand statement={project.purposeStatement} />

          <PurityShieldPlayStore project={project} />

          <p className="mt-10 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            App preview
          </p>
          <p className="mt-2 max-w-2xl text-foreground/90">{project.galleryIntro}</p>

          <PurityShieldScreenshotGallery screenshots={project.screenshots} />
          <PurityShieldFeatureGrid features={project.features} />
          <PurityShieldCtaBand project={project} />
        </Card>
      </motion.div>
    </ScrollReveal>
  );
}
