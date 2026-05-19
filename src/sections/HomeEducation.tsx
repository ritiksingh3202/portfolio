"use client";

import { m } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/about";
import { SectionBlockHeading } from "@/components/home/SectionBlockHeading";
import { VIEWPORT, EASE } from "@/motion/config";

export function HomeEducation() {
  return (
    <section
      id="education"
      className="home-section scroll-mt-28 py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionBlockHeading icon={GraduationCap} title="Education" />
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-4 md:space-y-5"
        >
          {education.map((item) => (
            <m.article
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: EASE.out }}
              whileHover={{ y: -3 }}
              className="home-card p-5 md:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-[var(--home-heading)] md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--home-muted)]">
                    {item.institution}
                  </p>
                </div>
                <span className="home-date-pill shrink-0 self-start rounded-lg px-3 py-1.5 text-xs font-medium">
                  {item.period}
                </span>
              </div>
              <div className="mt-4 border-t border-[var(--home-card-border)] pt-4">
                <p className="text-sm leading-relaxed text-[var(--home-muted)] md:text-base">
                  {item.description}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
