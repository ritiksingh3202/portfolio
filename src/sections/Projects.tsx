"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "EcoSphere AI",
    category: "AI / Sustainability",
    description: "An AI-powered platform for tracking and optimizing carbon footprints for enterprises.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Next.js", "Python", "TensorFlow"],
    link: "#",
    github: "#",
  },
  {
    title: "Nova Fintech",
    category: "Finance / Web App",
    description: "Modern banking dashboard with real-time analytics and crypto integration.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Quantum Mail",
    category: "Productivity",
    description: "Encrypted email client with AI-assisted sorting and privacy-first features.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    tags: ["Rust", "Wasm", "Tailwind"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-baseline gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-serif italic text-primary/40"
          >
            01
          </motion.h2>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-2"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-serif"
            >
              Building Thoughtful <br /> Products
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-8 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 bg-white/5 transition-all duration-500 group-hover:scale-[0.98] group-hover:rounded-[3.5rem] md:group-hover:rounded-[4rem]">
                 <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="p-4 md:p-6 glass rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight className="-rotate-45" size={24} />
                   </div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/50 text-sm md:text-base line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-16 md:mt-24 text-center">
           <button className="px-10 py-4 md:px-12 md:py-5 glass rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-primary hover:text-white transition-all">
              View All Archive
           </button>
        </div>
      </div>
    </section>
  );
}
