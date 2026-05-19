"use client";

import { m } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { VIEWPORT, EASE } from "@/motion/config";

const mobileApps = [
  {
    name: "ZenFlow",
    type: "Meditation & Wellness",
    description:
      "A calming interface for daily mindfulness and sleep tracking.",
    icon: "🧘",
    color: "from-blue-100 to-indigo-100",
  },
  {
    name: "Groceri",
    type: "E-commerce",
    description:
      "Fast and intuitive grocery delivery app with smart lists.",
    icon: "🛒",
    color: "from-emerald-100 to-teal-100",
  },
];

export function MobileApps() {
  return (
    <section id="mobile" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          number="03"
          label="Native Specialist"
          title={
            <>
              Crafting Mobile <br /> Masterpieces
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            {mobileApps.map((app, index) => (
              <Reveal key={app.name} delay={index * 0.1} direction="left">
                <m.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: EASE.out }}
                  className="flex flex-col sm:flex-row items-start gap-6 p-6 md:p-8 glass rounded-[2.5rem] md:rounded-[3rem] border border-white/5 group hover:border-primary/30 transition-colors duration-500"
                >
                  <m.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.35, ease: EASE.out }}
                    className={`w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-3xl md:text-4xl shadow-sm`}
                  >
                    {app.icon}
                  </m.div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-serif">{app.name}</h3>
                    <p className="text-foreground/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                      {app.type}
                    </p>
                    <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </m.div>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <div className="pt-6 md:pt-8 flex flex-wrap gap-6">
                <m.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: EASE.out }}
                  className="flex items-center gap-3 text-[12px] md:text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <Apple size={18} /> App Store
                </m.button>
                <m.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: EASE.out }}
                  className="flex items-center gap-3 text-[12px] md:text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <PlayCircle size={18} /> Play Store
                </m.button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="scale" className="order-1 lg:order-2 flex justify-center lg:sticky lg:top-32 py-12 md:py-0">
            <m.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, ease: EASE.out }}
              className="relative scale-90 sm:scale-100"
            >
              <div className="w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] border-[10px] border-zinc-900 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-3xl z-20" />
                <div className="relative w-full h-full bg-slate-50/50 backdrop-blur-md p-6 pt-12 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20" />
                  <div className="h-40 w-full rounded-[2rem] bg-indigo-50" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-[1.5rem] bg-emerald-50" />
                    <div className="h-32 rounded-[1.5rem] bg-rose-50" />
                  </div>
                  <div className="mt-auto h-20 w-full rounded-[2rem] bg-slate-100" />
                </div>
              </div>

              <m.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-16 h-16 md:w-24 md:h-24 glass rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-2xl border border-white/20"
              >
                ✨
              </m.div>
            </m.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
