"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Palette, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-serif italic text-primary/40"
          >
            02
          </motion.h2>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-2"
            >
              Who I Am
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-serif"
            >
              A Story of Design <br /> & Engineering
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="w-full aspect-[4/5] glass rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 relative z-10 p-3 md:p-4">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                 alt="Profile" 
                 className="w-full h-full object-cover rounded-[2.5rem] md:rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            {/* Scalloped edge decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-0" />
          </motion.div>

          <div className="space-y-10 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/60 leading-relaxed font-light"
            >
              <p>
                I believe that great software is more than just code. It&apos;s about creating <span className="text-foreground font-serif italic">moments of delight</span> through thoughtful design and solid engineering.
              </p>
              <p>
                Over the past 5 years, I&apos;ve collaborated with visionary teams to build digital products that are as functional as they are beautiful. My process is deeply rooted in empathy and precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Strategy", desc: "Aligning business goals with user needs." },
                { title: "Design", desc: "Creating visually stunning interfaces." },
                { title: "Development", desc: "Building scalable and performant code." },
                { title: "Success", desc: "Ensuring long-term impact and growth." },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-serif text-xl md:text-2xl italic text-primary">{item.title}</h4>
                  <p className="text-sm text-foreground/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
