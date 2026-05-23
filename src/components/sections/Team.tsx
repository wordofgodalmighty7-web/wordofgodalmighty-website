"use client";

import { motion } from "framer-motion";
import { Crown, Cross, Sparkles, User } from "lucide-react";
import { team } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const trinityIcons = {
  crown: Crown,
  cross: Cross,
  dove: Sparkles,
};

export function Team() {
  return (
    <AnimatedSection id="team" className="bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={team.title} subtitle={team.subtitle} />
        <p className="mx-auto -mt-6 mb-12 max-w-3xl text-center text-lg text-muted-foreground">
          {team.intro}
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.members.map((member) => {
            const isTrinity = member.type === "trinity";
            const Icon =
              member.type === "trinity"
                ? trinityIcons[member.icon as keyof typeof trinityIcons]
                : User;

            return (
              <motion.div key={member.name} variants={fadeUp} className="flex">
                <Card
                  className={cn(
                    "flex w-full flex-col items-center text-center",
                    isTrinity && "border-accent/20 bg-accent/5",
                  )}
                >
                  <div
                    className={cn(
                      "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl",
                      isTrinity
                        ? "bg-accent/15 text-accent shadow-lg shadow-accent/20"
                        : "bg-muted text-foreground",
                    )}
                  >
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
