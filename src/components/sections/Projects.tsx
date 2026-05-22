"use client";

import { Shirt, Shield, Check, ShoppingBag } from "lucide-react";
import { projects } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

function ApparelShowcase() {
  const colors = [
    "from-amber-600/40 to-amber-900/60",
    "from-slate-600/40 to-slate-900/60",
    "from-blue-700/40 to-blue-950/60",
    "from-rose-700/30 to-rose-950/50",
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {colors.map((gradient, i) => (
        <div
          key={gradient}
          className={`flex aspect-square flex-col items-center justify-center rounded-xl bg-gradient-to-br ${gradient} glass`}
        >
          <Shirt className="h-8 w-8 text-white/80" />
          <span className="mt-2 text-xs text-white/70">Design {i + 1}</span>
        </div>
      ))}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto mt-6 max-w-[220px]">
      <div className="rounded-[2rem] border-4 border-foreground/10 bg-foreground/5 p-2 shadow-2xl shadow-accent/10">
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-accent/30 via-muted to-background p-6">
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-10 w-10 text-accent" />
          </div>
          <p className="mt-4 text-center font-display text-sm font-semibold text-foreground">
            Purity Shield Pro
          </p>
          <div className="mt-4 space-y-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-2 rounded-full bg-foreground/10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const apparel = projects.items[0];
  const app = projects.items[1];

  return (
    <AnimatedSection id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={projects.title} subtitle={projects.subtitle} />

        <div className="grid gap-10 lg:grid-cols-2">
          <ProjectCard delay={0}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  {apparel.badge}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  {apparel.name}
                </h3>
                <p className="mt-1 text-accent">{apparel.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">{apparel.description}</p>
            <ul className="mt-4 space-y-2">
              {apparel.highlights?.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <ApparelShowcase />
            {"cta" in apparel && apparel.cta && (
              <div className="mt-6">
                <Button
                  href={apparel.cta.href}
                  variant="primary"
                  external={apparel.cta.href !== "#"}
                >
                  {apparel.cta.label}
                </Button>
              </div>
            )}
          </ProjectCard>

          <ProjectCard delay={0.1}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
              <Shield className="h-3.5 w-3.5" />
              {app.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
              {app.name}
            </h3>
            <p className="mt-1 text-accent">{app.tagline}</p>
            <p className="mt-4 text-muted-foreground">{app.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {app.status?.primary}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {app.status?.secondary}
              </span>
            </div>

            <PhoneMockup />

            <ul className="mt-6 space-y-2">
              {app.features?.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {app.ctas?.map((cta) => (
                <Button key={cta.label} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </Button>
              ))}
            </div>
          </ProjectCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
