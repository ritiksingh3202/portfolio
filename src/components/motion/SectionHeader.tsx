"use client";

import { m } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer } from "@/motion/variants";
import { VIEWPORT } from "@/motion/config";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: React.ReactNode;
}

export function SectionHeader({ number, label, title }: SectionHeaderProps) {
  return (
    <m.div
      className="mb-16 md:mb-24 flex flex-col md:flex-row items-baseline gap-4"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <m.h2
        variants={fadeLeft}
        className="text-5xl md:text-8xl font-semibold italic tracking-tight text-primary/40"
      >
        {number}
      </m.h2>
      <div>
        <m.p
          variants={fadeUp}
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-2"
        >
          {label}
        </m.p>
        <m.h2 variants={fadeUp} className="text-3xl md:text-6xl font-semibold tracking-tight">
          {title}
        </m.h2>
      </div>
    </m.div>
  );
}
