"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Sparkles } from "lucide-react";
import { identity, skillTags } from "@/data/home";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";
import { fadeUp, staggerContainer } from "@/motion/variants";

export function HomeAbout() {
  return (
    <section
      id="about"
      className="home-section scroll-mt-28 py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <m.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-xl"
          >
            <m.p
              variants={fadeUp}
              className="mb-4 text-sm text-[var(--home-muted)] sm:text-base"
            >
              {identity.label}
            </m.p>

            <m.h2
              variants={fadeUp}
              className="flex flex-wrap items-center gap-2 text-3xl font-bold leading-tight tracking-tight text-[var(--home-heading)] sm:text-4xl md:text-5xl"
            >
              {identity.headline}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white sm:h-10 sm:w-10">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span>{identity.role}</span>
            </m.h2>

            <m.div variants={fadeUp} className="mt-6 space-y-4 sm:mt-8">
              {identity.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-sm leading-relaxed text-[var(--home-muted)] sm:text-base"
                >
                  {p}
                </p>
              ))}
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
            className="mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:mx-0 lg:ml-auto"
          >
            <div className="home-identity-frame relative overflow-hidden rounded-[2rem] border border-[var(--home-card-border)] bg-[var(--home-card-bg)] p-3 shadow-[var(--home-card-shadow)] sm:rounded-[2.25rem] sm:p-3.5">
              {identity.available && (
                <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1.5 text-[11px] font-medium text-emerald-400 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available as freelancer
                  </span>
                </div>
              )}

              <div className="home-identity-photo relative mt-10 aspect-[3/4] overflow-hidden rounded-[1.5rem] sm:rounded-[1.65rem]">
                <div className="home-identity-glow pointer-events-none absolute inset-0 z-0" />
                <Image
                  src={identity.image}
                  alt="Ritik Raj"
                  fill
                  className="relative z-10 object-cover object-top"
                  sizes="(max-width: 768px) 320px, 360px"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-16">
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillTags.map((tag) => (
                      <span
                        key={tag.label}
                        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium text-white sm:text-[11px]"
                        style={{ backgroundColor: tag.bg }}
                      >
                        {tag.icon && (
                          <span className="opacity-90" aria-hidden>
                            {tag.icon}
                          </span>
                        )}
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
