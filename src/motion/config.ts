/** Centralized motion timing & easing — luxury, calm, cinematic */

export const EASE = {
  /** Apple / Linear-style deceleration */
  out: [0.16, 1, 0.3, 1] as const,
  /** Smooth entrance */
  inOut: [0.65, 0, 0.35, 1] as const,
  /** Subtle overshoot-free settle */
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  /** Premium spring-like without bounce */
  expo: [0.19, 1, 0.22, 1] as const,
};

export const DURATION = {
  fast: 0.35,
  normal: 0.6,
  slow: 0.9,
  cinematic: 1.2,
  hero: 1.4,
};

export const VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "-80px",
} as const;

export const STAGGER = {
  fast: 0.06,
  normal: 0.1,
  slow: 0.14,
};
