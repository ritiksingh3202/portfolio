"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Layers } from "lucide-react";
import { techStack } from "@/data/techStack";
import { SectionBlockHeading } from "@/components/home/SectionBlockHeading";
import { InfiniteMarquee } from "@/components/motion/InfiniteMarquee";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";

function TechChip({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="tech-marquee-chip shrink-0" data-cursor-hover>
      <div className="home-tech-icon flex h-10 w-10 items-center justify-center rounded-lg p-1.5">
        <Image
          src={icon}
          alt={`${name} logo`}
          width={36}
          height={36}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="whitespace-nowrap text-sm font-semibold text-[var(--home-heading)]">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  const midpoint = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, midpoint);
  const row2 = techStack.slice(midpoint);

  return (
    <section
      id="tech-stack"
      className="home-section scroll-mt-28 overflow-hidden py-16 sm:py-20 md:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionBlockHeading icon={Layers} title="Tech Stack" />
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.slow, ease: EASE.out }}
          className="space-y-4 md:space-y-5"
        >
          <InfiniteMarquee direction="left" speed={30}>
            {row1.map((tool) => (
              <TechChip key={tool.id} name={tool.name} icon={tool.icon} />
            ))}
          </InfiniteMarquee>
          <InfiniteMarquee direction="right" speed={30}>
            {row2.map((tool) => (
              <TechChip key={tool.id} name={tool.name} icon={tool.icon} />
            ))}
          </InfiniteMarquee>
        </m.div>
      </div>
    </section>
  );
}
