"use client";

import { SectionHeader } from "@/components/motion/SectionHeader";
import { ProjectCard } from "@/components/motion/ProjectCard";
import type { ProjectData } from "@/components/motion/ProjectCard";
import { MotionButton } from "@/components/motion/MotionButton";
import { Reveal } from "@/components/Reveal";

const projects: ProjectData[] = [
  {
    title: "EcoSphere AI",
    category: "AI / Sustainability",
    description:
      "An AI-powered platform for tracking and optimizing carbon footprints for enterprises.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Next.js", "Python", "TensorFlow"],
    link: "#",
    github: "#",
  },
  {
    title: "Nova Fintech",
    category: "Finance / Web App",
    description:
      "Modern banking dashboard with real-time analytics and crypto integration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Quantum Mail",
    category: "Productivity",
    description:
      "Encrypted email client with AI-assisted sorting and privacy-first features.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    tags: ["Rust", "Wasm", "Tailwind"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          number="01"
          label="Selected Work"
          title={
            <>
              Building Thoughtful <br /> Products
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 md:mt-24 text-center">
          <MotionButton className="px-10 py-4 md:px-12 md:py-5 glass rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-primary hover:text-white transition-all">
            View All Archive
          </MotionButton>
        </Reveal>
      </div>
    </section>
  );
}
