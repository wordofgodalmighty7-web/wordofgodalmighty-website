import Link from "next/link";
import { site, navLinks } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const uniqueNav = navLinks.filter(
    (link, index, self) => self.findIndex((l) => l.href === link.href) === index,
  );

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-foreground">{site.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{site.tagline}</p>
            <a
              href={site.url}
              className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:opacity-80"
            >
              {site.domain}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {uniqueNav.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-sm text-foreground transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="section-divider my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved. Built for Christ and His Kingdom.
        </p>
      </div>
    </footer>
  );
}
