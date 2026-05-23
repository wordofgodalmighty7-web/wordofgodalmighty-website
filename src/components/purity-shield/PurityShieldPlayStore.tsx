"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { AppProject } from "@/lib/content";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PurityShieldPlayStoreProps {
  project: AppProject;
}

function GooglePlayBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-border bg-foreground px-5 py-3 text-background transition-opacity hover:opacity-90"
      aria-label="Get it on Google Play"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden>
        <path
          fill="currentColor"
          d="M3.6 1.8c-.4.2-.6.6-.6 1.1v18.2c0 .5.2.9.6 1.1l10.2-10.2L3.6 1.8zm11.4 8.5 2.5 2.5-10.2 5.9 7.7-8.4zm2.9-2.5 2.2 1.3c.7.4.7 1.4 0 1.8l-2.2 1.3-2.5-2.5 2.5-2.5zM14 12l2.5 2.5-7.7 4.5 5.2-7zm-1.8-8.5L3.6 10.2 13.8 3.5z"
        />
      </svg>
      <div className="text-left">
        <p className="text-[10px] uppercase leading-none opacity-80">Get it on</p>
        <p className="text-lg font-semibold leading-tight">Google Play</p>
      </div>
    </a>
  );
}

export function PurityShieldPlayStore({ project }: PurityShieldPlayStoreProps) {
  const { playStore, purposeStatement } = project;
  const isLive = playStore.status === "live";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-10"
    >
      <div className="glass rounded-2xl border border-accent/15 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
              isLive
                ? "border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-400"
                : "border-accent/30 bg-accent/10 text-accent",
            )}
          >
            {isLive ? "Now Live" : "Coming Soon"}
          </span>
          <span className="text-sm text-muted-foreground">{project.status.secondary}</span>
        </div>

        <p className="mt-6 font-display text-xl font-semibold leading-snug text-foreground sm:text-2xl">
          {purposeStatement}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {playStore.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/80 bg-background/30 px-4 py-3 text-center"
            >
              <p className="font-display text-2xl font-semibold text-accent">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <GooglePlayBadge href={playStore.url} />
          <a
            href={playStore.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            View listing
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
