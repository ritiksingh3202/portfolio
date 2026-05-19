"use client";

import { m } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { fadeUp, staggerContainer } from "@/motion/variants";
import { VIEWPORT, EASE } from "@/motion/config";

const skills = [
  { name: "React", icon: "⚛️", level: "Expert" },
  { name: "Next.js", icon: "▲", level: "Expert" },
  { name: "TypeScript", icon: "TS", level: "Senior" },
  { name: "Flutter", icon: "💙", level: "Senior" },
  { name: "Tailwind CSS", icon: "🎨", level: "Expert" },
  { name: "Node.js", icon: "🟢", level: "Advanced" },
  { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
  { name: "GraphQL", icon: "⬡", level: "Advanced" },
  { name: "Docker", icon: "🐳", level: "Intermediate" },
  { name: "AWS", icon: "☁️", level: "Intermediate" },
  { name: "Framer Motion", icon: "✨", level: "Advanced" },
  { name: "Figma", icon: "🎨", level: "Advanced" },
];

export function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-2 text-[10px] md:text-sm">
            My Arsenal
          </p>
          <h2 className="text-3xl md:text-6xl font-bold font-display">Tech Stack</h2>
        </Reveal>

        <m.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <m.div
              key={skill.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.35, ease: EASE.out }}
              className="p-5 md:p-8 glass rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center text-center group cursor-default"
            >
              <m.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-4xl mb-3 md:mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
              >
                {skill.icon}
              </m.div>
              <h3 className="text-lg md:text-xl font-bold mb-1">{skill.name}</h3>
              <p className="text-foreground/40 text-xs md:text-sm">{skill.level}</p>

              <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <m.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={VIEWPORT}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: EASE.out }}
                  className="h-full bg-primary/30"
                />
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
