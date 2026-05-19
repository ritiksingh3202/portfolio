"use client";

import { m, useReducedMotion } from "framer-motion";
import { staggerContainer, textReveal, withReducedMotion } from "@/motion/variants";
import { STAGGER } from "@/motion/config";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span" | "motionDiv";
  delay?: number;
  splitBy?: "words" | "lines";
}

export function TextReveal({
  children,
  className,
  as: Tag = "motionDiv",
  delay = 0,
  splitBy = "words",
}: TextRevealProps) {
  const reduced = useReducedMotion() ?? false;
  const container = withReducedMotion(
    staggerContainer(STAGGER.normal, delay),
    reduced
  );
  const item = withReducedMotion(textReveal, reduced);

  const parts =
    splitBy === "lines"
      ? children.split("\n")
      : children.split(" ").map((w, i, arr) =>
          i < arr.length - 1 ? `${w} ` : w
        );

  const Component = Tag === "motionDiv" ? m.div : m[Tag];

  return (
    <Component
      className={cn(className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {parts.map((part, i) => (
        <m.span
          key={`${part}-${i}`}
          variants={item}
          className="inline-block"
          style={{ display: splitBy === "lines" ? "block" : "inline-block" }}
        >
          {part}
        </m.span>
      ))}
    </Component>
  );
}
