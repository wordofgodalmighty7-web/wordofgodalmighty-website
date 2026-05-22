"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { site, navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const uniqueNav = navLinks.filter(
    (link, index, self) => self.findIndex((l) => l.href === link.href) === index,
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {uniqueNav.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-muted-foreground"
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {uniqueNav.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-foreground hover:bg-muted/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
