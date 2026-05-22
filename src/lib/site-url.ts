import { site } from "./content";

/** Canonical site URL (env override for staging; production uses wordofgodalmighty.store) */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return site.url;
}
