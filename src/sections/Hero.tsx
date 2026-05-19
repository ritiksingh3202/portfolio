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
      className="relative min-h-screen h-screen flex flex-col items-center overflow-hidden bg-sky-gradient pt-32 pb-20 px-4"
    >
      <GrainOverlay />
      <AmbientGlow />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center flex-1 justify-center gap-2 md:gap-4 lg:gap-6 max-w-5xl">
        <m.div
          initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: DURATION.slow, ease: EASE.out }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="mb-2 md:mb-4 cursor-pointer"
        >
          <m.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#1e40af]/50 backdrop-blur-md px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-white/20 flex items-center gap-3 text-[12px] md:text-[14px] font-semibold text-white shadow-lg transition-all hover:bg-[#1e40af]/70 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] dark:bg-[#1e40af]/50"
          >
            Open To Work{" "}
            <m.span
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
            />
          </m.div>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: DURATION.slow, ease: EASE.out }}
          className="text-white/95 text-sm md:text-lg font-serif italic mb-4 md:mb-6"
        >
          Hello, from the developer&apos;s desk.
        </m.p>

        <div className="relative mb-6 md:mb-8 w-full flex flex-col items-center">
          <m.h1
            variants={staggerContainer(0.08, 0.4)}
            initial="hidden"
            animate="visible"
            className="text-[48px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-serif text-white tracking-tighter leading-[0.95] md:leading-[0.85] select-none text-shadow-xl"
          >
            <m.span variants={textReveal} className="block">
              Crafted.code,
            </m.span>
            <div className="flex items-center justify-center gap-6 md:gap-10 -mt-2 md:-mt-6">
              <m.span
                variants={textReveal}
                className="italic font-light opacity-80 text-[0.6em]"
                style={{ rotate: -18 }}
              >
                by
              </m.span>
              <m.span variants={textReveal}>design.</m.span>
            </div>
          </m.h1>

          <m.div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-white/10 blur-[120px] -z-10 rounded-full opacity-40 dark:opacity-40" />
        </div>

        <m.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.2, duration: DURATION.cinematic, ease: EASE.out }}
          className="max-w-3xl text-white text-[16px] md:text-[22px] leading-relaxed font-serif font-light px-4 italic drop-shadow-md"
        >
          I&apos;m Ritik, a Full Stack Developer creating modern web and mobile{" "}
          <br className="hidden md:block" /> experiences where engineering meets
          thoughtful design.
        </m.p>
      </div>
    </section>
  );
}
