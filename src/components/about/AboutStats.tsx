"use client";

import { m } from "framer-motion";
import { stats } from "@/data/about";
import { EASE } from "@/motion/config";

export function AboutStats() {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 lg:gap-x-10"
    >
      {stats.map((stat) => (
        <m.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: EASE.out }}
        >
          <div className="text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-foreground leading-none">
            {stat.value}
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
        </m.div>
      ))}
    </m.div>
  );
}
