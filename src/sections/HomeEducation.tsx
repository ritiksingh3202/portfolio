"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/about";
import { SectionBlockHeading } from "@/components/home/SectionBlockHeading";
import { Timeline, type TimelineEntry } from "@/components/motion/Timeline";

const entries: TimelineEntry[] = education.map((item) => ({
  id: item.id,
  title: item.title,
  subtitle: item.institution,
  period: item.period,
  description: item.description,
  logo: "R",
}));

export function HomeEducation() {
  return (
    <section
      id="education"
      className="home-section scroll-mt-28 py-16 sm:py-20 md:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionBlockHeading icon={GraduationCap} title="Education" />
        <Timeline entries={entries} />
      </div>
    </section>
  );
}
