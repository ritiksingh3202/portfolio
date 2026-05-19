"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type InfiniteMarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export function InfiniteMarquee({
  children,
  direction = "left",
  speed = 30,
  className,
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div className={cn("flex flex-wrap justify-center gap-4", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "marquee-row overflow-hidden",
        pauseOnHover && "marquee-pause-hover",
        className
      )}
      style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "marquee-track flex w-max items-center gap-4",
          direction === "right" ? "marquee-animate-right" : "marquee-animate-left"
        )}
      >
        <div className="flex shrink-0 items-center gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
