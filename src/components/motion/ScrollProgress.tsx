"use client";

import { m, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <m.div
      className="scroll-progress fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-primary"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
