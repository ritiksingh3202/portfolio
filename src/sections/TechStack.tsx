"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Layers } from "lucide-react";
import { techStack } from "@/data/techStack";
import { SectionBlockHeading } from "@/components/home/SectionBlockHeading";
import { VIEWPORT, EASE } from "@/motion/config";

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="home-section scroll-mt-28 py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionBlockHeading icon={Layers} title="Tech Stack" />
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="home-stakes-grid"
        >
          {techStack.map((tool) => (
            <m.article
              key={tool.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: EASE.out }}
              whileHover={{ y: -3 }}
              className="home-card flex min-h-[4.75rem] items-center gap-3 p-3.5 sm:min-h-[5.25rem] sm:gap-3.5 sm:p-4"
            >
              <div className="home-tech-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl p-2 sm:h-12 sm:w-12">
                <Image
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-snug text-[var(--home-heading)] sm:text-base">
                  {tool.name}
                </h3>
                <p className="text-xs text-[var(--home-muted)] sm:text-sm">
                  {tool.subtitle}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
