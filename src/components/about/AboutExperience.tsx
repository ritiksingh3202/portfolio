"use client";

import { m } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/about";
import { SectionHeading } from "./SectionHeading";
import { EASE } from "@/motion/config";

export function AboutExperience() {
  return (
    <section id="experience">
      <SectionHeading icon={Briefcase} title="Experience" />
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="space-y-4 md:space-y-5"
      >
        {experiences.map((item) => (
          <m.article
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: EASE.out }}
            whileHover={{ y: -3 }}
            className="about-card p-5 md:p-6 lg:p-7"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 md:mb-4">
              <div className="flex items-start gap-4 min-w-0">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${item.logoColor}`}
                >
                  {item.logo}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>
              <span className="about-date-pill self-start text-xs font-medium px-3 py-1.5 rounded-lg shrink-0">
                {item.period}
              </span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </m.article>
        ))}
      </m.div>
    </section>
  );
}
