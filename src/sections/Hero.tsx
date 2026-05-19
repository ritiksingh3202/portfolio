"use client";

import { m } from "framer-motion";
import { GrainOverlay } from "@/components/motion/GrainOverlay";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { EASE, DURATION } from "@/motion/config";
import { staggerContainer, textReveal } from "@/motion/variants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-screen flex-col items-center overflow-hidden px-4 pt-32 pb-20"
    >
      <GrainOverlay />
      <AmbientGlow />

      <div className="container relative z-10 mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center gap-2 text-center md:gap-4 lg:gap-6">
        <m.div
          initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: DURATION.slow, ease: EASE.out }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="mb-2 cursor-pointer md:mb-4"
        >
          <m.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 rounded-full border border-white/20 bg-[#1e40af]/50 px-5 py-2 text-[12px] font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#1e40af]/70 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] dark:bg-[#1e40af]/50 md:px-6 md:py-2.5 md:text-[14px]"
          >
            Open To Work{" "}
            <m.span
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)] md:h-2.5 md:w-2.5"
            />
          </m.div>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: DURATION.slow, ease: EASE.out }}
          className="mb-4 font-serif text-sm italic text-white/95 md:mb-6 md:text-lg"
        >
          Hello, from the developer&apos;s desk.
        </m.p>

        <div className="relative mb-6 flex w-full flex-col items-center md:mb-8">
          <m.h1
            variants={staggerContainer(0.08, 0.4)}
            initial="hidden"
            animate="visible"
            className="select-none font-serif text-[48px] leading-[0.95] tracking-tighter text-white text-shadow-xl sm:text-[80px] md:text-[110px] md:leading-[0.85] lg:text-[140px]"
          >
            <m.span variants={textReveal} className="block">
              Crafted code,
            </m.span>
            <div className="-mt-2 flex items-center justify-center gap-6 md:-mt-6 md:gap-10">
              <m.span
                variants={textReveal}
                className="text-[0.6em] font-light italic opacity-80"
                style={{ rotate: -18 }}
              >
                by
              </m.span>
              <m.span variants={textReveal}>design.</m.span>
            </div>
          </m.h1>

          <m.div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-40 -translate-y-1/2 rounded-full bg-white/10 opacity-40 blur-[120px] dark:opacity-40" />
        </div>

        <m.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.2, duration: DURATION.cinematic, ease: EASE.out }}
          className="max-w-3xl px-4 font-serif text-[16px] font-light italic leading-relaxed text-white drop-shadow-md md:text-[22px]"
        >
          I&apos;m Ritik, a Full Stack Developer creating modern web and mobile{" "}
          <br className="hidden md:block" /> experiences where engineering meets
          thoughtful design.
        </m.p>
      </div>
    </section>
  );
}
