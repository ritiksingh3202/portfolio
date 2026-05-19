"use client";

import { m, useReducedMotion } from "framer-motion";
import { EASE, DURATION } from "@/motion/config";

type WordRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  as: Tag = "span",
}: WordRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(/(\s+)/).filter((w) => w.length > 0);

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <m.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: delay + i * stagger,
              duration: DURATION.normal,
              ease: EASE.out,
            }}
          >
            {word}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}
