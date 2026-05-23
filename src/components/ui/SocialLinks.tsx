import { ShoppingBag, Smartphone, Github, Instagram, Facebook } from "lucide-react";
import { socialLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

const iconMap = {
  etsy: ShoppingBag,
  play: Smartphone,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
} as const;

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName = "h-5 w-5" }: SocialLinksProps) {
  const enabled = socialLinks.filter((link) => link.enabled);

  if (enabled.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {enabled.map((link) => {
        const Icon = iconMap[link.id as keyof typeof iconMap] ?? ShoppingBag;
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
