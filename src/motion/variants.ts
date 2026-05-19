import type { Variants } from "framer-motion";
import { DURATION, EASE, STAGGER } from "./config";

const instant = { duration: 0 };

/** Fade + upward reveal */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

/** Fade + downward (navbar) */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

/** Subtle scale settle */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

/** Horizontal slide */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

/** Stagger container for children */
export function staggerContainer(
  stagger = STAGGER.normal,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

/** Per-word / per-line text reveal */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: "1.1em", filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.cinematic, ease: EASE.expo },
  },
};

/** Project card scroll reveal */
export const projectCard: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

/** Category pill slide-in */
export const categoryPill: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

/** Card hover parent */
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: DURATION.fast, ease: EASE.out },
  },
};

/** Reduced-motion safe variants */
export function withReducedMotion(
  variants: Variants,
  reduced: boolean
): Variants {
  if (!reduced) return variants;
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: instant },
  };
}
