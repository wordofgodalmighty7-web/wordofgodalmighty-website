"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { newsletter, FORMSPREE_FORM_URL } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-60";

export function Newsletter() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isSubmitting = status === "submitting";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_FORM_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const body = (await res.json().catch(() => null)) as {
        error?: string;
        errors?: { message: string }[];
      } | null;

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const message =
        body?.error ??
        body?.errors?.map((err) => err.message).join(" ") ??
        "Something went wrong. Please try again.";
      setErrorMessage(message);
      setStatus("error");
    } catch {
      setErrorMessage("Network error. Please check your connection.");
      setStatus("error");
    }
  }

  return (
    <AnimatedSection id="newsletter" className="section-cinematic">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={newsletter.title} subtitle={newsletter.subtitle} />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-xl"
        >
          <p className="mb-8 text-center text-muted-foreground">{newsletter.description}</p>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
            <input type="hidden" name="_subject" value="Newsletter signup — Word of God Almighty" />
            <input type="hidden" name="form_type" value="newsletter" />
            <label htmlFor="newsletter-email" className="mb-2 block text-sm font-medium text-foreground">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                autoComplete="email"
                className={cn(inputClassName, "flex-1")}
                placeholder="you@example.com"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:opacity-90 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <Mail className="h-4 w-4" aria-hidden />
                )}
                {newsletter.buttonLabel}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="mt-4 flex items-start gap-3 rounded-xl border border-green-500/25 bg-green-500/10 px-4 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <p className="text-sm text-green-700 dark:text-green-300">{newsletter.successMessage}</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                  <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
