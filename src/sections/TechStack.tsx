"use client";

import React from "react";
import { motion } from "framer-motion";

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
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-medium tracking-wider uppercase mb-2 text-[10px] md:text-sm"
          >
            My Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold font-display"
          >
            Tech Stack
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.05 }}
              className="p-5 md:p-8 glass rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center text-center group cursor-default"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 scale-100 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1">{skill.name}</h3>
              <p className="text-foreground/40 text-xs md:text-sm">{skill.level}</p>
              
              <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                   className="h-full bg-primary/30"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
