"use client";

import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";

export function SectionBlockHeading({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.normal, ease: EASE.out }}
      className="mb-8 flex items-center gap-3 md:mb-10"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--home-card-bg)] border border-[var(--home-card-border)]">
        <Icon className="h-5 w-5 text-[var(--home-heading)]" strokeWidth={1.75} />
      </div>
      <h2 className="text-xl font-bold tracking-tight text-[var(--home-heading)] md:text-2xl">
        {title}
      </h2>
    </m.div>
  );
}
