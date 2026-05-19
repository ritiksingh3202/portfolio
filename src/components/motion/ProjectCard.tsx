"use client";

import { m } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/motion/variants";
import { VIEWPORT, EASE } from "@/motion/config";

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false });

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <m.div
      ref={cardRef}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
      className="group cursor-pointer"
    >
      <m.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5, ease: EASE.out }}
      >
        <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-8 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 bg-white/5 transition-shadow duration-500 group-hover:shadow-[0_24px_80px_-24px_rgba(0,170,255,0.25)]">
          {glow.active && (
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: `radial-gradient(500px circle at ${glow.x}px ${glow.y}px, rgba(0,170,255,0.18), transparent 45%)`,
              }}
            />
          )}
          <m.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: EASE.out }}
          />
          <HoverOverlay />
        </div>

        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-foreground/50 text-sm md:text-base line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </m.div>
    </m.div>
  );
}

function HoverOverlay() {
  return (
    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
      <div className="p-4 md:p-6 glass rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
        <ArrowRight className="-rotate-45" size={24} />
      </div>
    </div>
  );
}
