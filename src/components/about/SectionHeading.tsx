"use client";

import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { EASE } from "@/motion/config";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
}

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: EASE.out }}
      className="flex items-center gap-3 mb-6 md:mb-8"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl about-icon-wrap">
        <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
      </div>
      <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </m.div>
  );
}
