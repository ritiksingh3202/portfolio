"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "about",
  "projects",
  "tech-stack",
  "experience",
  "education",
  "faqs",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.15, 0.35, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

export function hrefToSection(href: string): SectionId | null {
  const hash = href.includes("#") ? href.split("#")[1] : null;
  if (!hash) return null;
  return SECTION_IDS.includes(hash as SectionId) ? (hash as SectionId) : null;
}
