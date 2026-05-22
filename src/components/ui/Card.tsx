import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className, glow = true }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        glow && "glass-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
