"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-accent/40",
  secondary: "glass text-foreground hover:bg-muted/80",
  outline:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className,
  );

  const motionProps = prefersReducedMotion
    ? {}
    : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } };

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-block">
      <Link href={href} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}
