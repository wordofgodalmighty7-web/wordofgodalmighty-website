"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { site, contact, FORMSPREE_FORM_URL } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-60";

export function Contact() {
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
        "Something went wrong. Please try again or email us directly.";
      setErrorMessage(message);
      setStatus("error");
    } catch {
      setErrorMessage("Network error. Please check your connection or email us directly.");
      setStatus("error");
    }
  }

  return (
    <AnimatedSection id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={contact.title} subtitle={contact.subtitle} />
        <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-muted-foreground">
          {contact.description}
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Email us directly
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 flex items-center gap-3 font-display text-2xl font-medium text-foreground transition-colors hover:text-accent sm:text-3xl"
              >
                <Mail className="h-8 w-8 shrink-0 text-accent" />
                <span className="break-all">{site.email}</span>
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                Official contact for Word of God Almighty — partnerships, support, and inquiries.
              </p>
              <div className="mt-8 flex gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full glass text-accent transition-colors hover:bg-accent/10"
                  aria-label="Send email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    autoComplete="name"
                    className={inputClassName}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    autoComplete="email"
                    className={inputClassName}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className={cn(inputClassName, "resize-none")}
                    placeholder="How can we help you?"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      role="status"
                      className="flex items-start gap-3 rounded-xl border border-green-500/25 bg-green-500/10 px-4 py-3"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="text-sm font-medium text-green-700 dark:text-green-300">
                          Message sent successfully
                        </p>
                        <p className="mt-1 text-sm text-green-600/90 dark:text-green-400/90">
                          Thank you for reaching out. We will get back to you as soon as we can.
                        </p>
                      </div>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3"
                    >
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="text-sm font-medium text-red-700 dark:text-red-300">
                          Unable to send message
                        </p>
                        <p className="mt-1 text-sm text-red-600/90 dark:text-red-400/90">
                          {errorMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending your message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
