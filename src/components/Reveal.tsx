"use client";

import { m, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion() ?? false;

  const hiddenMap = {
    up: { opacity: 0, y: 28, filter: "blur(8px)" },
    left: { opacity: 0, x: -24 },
    right: { opacity: 0, x: 24 },
    scale: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
  };

  const visibleMap = {
    up: { opacity: 1, y: 0, filter: "blur(0px)" },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1, filter: "blur(0px)" },
  };

  const hidden = reduced ? { opacity: 0 } : hiddenMap[direction];
  const visible = reduced ? { opacity: 1 } : visibleMap[direction];

  return (
    <m.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: reduced ? 0 : DURATION.slow,
        delay,
        ease: EASE.out,
      }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
