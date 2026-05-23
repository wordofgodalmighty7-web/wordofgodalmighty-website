"use client";

import { projects, type ApparelProject, type AppProject } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EtsyShowcase } from "@/components/etsy/EtsyShowcase";
import { PurityShieldShowcase } from "@/components/purity-shield/PurityShieldShowcase";

export function Projects() {
  const apparel = projects.items.find((p) => p.type === "apparel") as ApparelProject;
  const app = projects.items.find((p) => p.type === "app") as AppProject;

  return (
    <AnimatedSection id="projects">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading title={projects.title} subtitle={projects.subtitle} />
        <EtsyShowcase project={apparel} />
        <PurityShieldShowcase project={app} />
      </div>
    </AnimatedSection>
  );
}
