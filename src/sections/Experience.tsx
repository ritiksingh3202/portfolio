"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Developer",
    period: "2023 - Present",
    location: "Remote / New York",
    description: "Leading the development of a next-generation SaaS dashboard using Next.js and Go. Mentoring junior developers and implementing CI/CD pipelines.",
  },
  {
    company: "Creative Studio X",
    role: "Frontend Engineer",
    period: "2021 - 2023",
    location: "London, UK",
    description: "Built high-performance marketing sites and interactive web applications for global brands. Focused on animation and pixel-perfect UI.",
  },
  {
    company: "AppLaunch Inc.",
    role: "Mobile App Developer",
    period: "2019 - 2021",
    location: "Berlin, DE",
    description: "Developed and published multiple iOS and Android apps using React Native and Flutter. Integrated complex APIs and real-time features.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-medium tracking-wider uppercase mb-2 text-[10px] md:text-sm"
            >
              My Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-bold font-display"
            >
              Professional Experience
            </motion.h2>
          </div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20 md:left-1/2 md:-translate-x-1/2" />
                
                <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-colors shadow-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                         <div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary">{exp.role}</h3>
                            <p className="text-lg md:text-xl font-medium">{exp.company}</p>
                         </div>
                         <div className="self-start sm:self-center px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded-full text-xs md:text-sm font-medium border border-white/10">
                            {exp.period}
                         </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-foreground/50 text-[12px] md:text-sm mb-4 md:mb-6">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                      </div>
                      
                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-[-4px] top-8 md:left-1/2 md:-translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(0,170,255,0.8)] z-10" />
                  
                  {/* Empty Spacer for desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
