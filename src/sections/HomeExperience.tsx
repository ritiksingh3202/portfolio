"use client";

import { Briefcase } from "lucide-react";
import { experiences } from "@/data/about";
import { SectionBlockHeading } from "@/components/home/SectionBlockHeading";
import { Timeline, type TimelineEntry } from "@/components/motion/Timeline";

const entries: TimelineEntry[] = experiences.map((item) => ({
  id: item.id,
  title: item.title,
  subtitle: item.company,
  period: item.period,
  description: item.description,
  logo: item.logo,
}));

export function HomeExperience() {
  return (
    <section
      id="experience"
      className="home-section scroll-mt-28 py-16 sm:py-20 md:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionBlockHeading icon={Briefcase} title="Experience" />
        <Timeline entries={entries} />
      </div>
    </section>
  );
}
