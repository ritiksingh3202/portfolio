"use client";

import { m } from "framer-motion";
import { Layers } from "lucide-react";
import { stakes } from "@/data/about";
import { SectionHeading } from "./SectionHeading";
import { EASE } from "@/motion/config";

export function AboutStakes() {
  return (
    <section id="stakes">
      <SectionHeading icon={Layers} title="Stakes" />
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="about-stakes-grid"
      >
        {stakes.map((tool) => (
          <m.div
            key={tool.name}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: EASE.out }}
            whileHover={{ y: -3 }}
            className="about-card p-4 md:p-5 flex items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl about-icon-wrap text-lg font-semibold">
              {tool.emoji}
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-foreground">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.subtitle}</p>
            </div>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
