"use client";

import { useRef } from "react";
import {
  m,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { EASE } from "@/motion/config";

const AVATAR_GRADIENTS: Record<string, string> = {
  C: "from-indigo-500 via-violet-500 to-purple-600",
  T: "from-sky-400 via-blue-500 to-indigo-600",
  R: "from-amber-500 via-orange-500 to-rose-600",
  default: "from-zinc-500 to-zinc-700",
};

export type TimelineEntry = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  logo: string;
};

type TimelineProps = {
  entries: TimelineEntry[];
};

function TimelineCard({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const reduced = useReducedMotion();
  const isLeft = index % 2 === 0;
  const gradient = AVATAR_GRADIENTS[entry.logo] ?? AVATAR_GRADIENTS.default;

  const card = (
    <div className="home-card group p-5 sm:p-6 md:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div
          className={`flex min-w-0 items-center gap-4 ${isLeft ? "md:flex-row-reverse md:text-right" : ""}`}
        >
          <div
            className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold text-white shadow-[0_6px_16px_-4px_rgba(15,23,42,0.25)] ring-1 ring-white/25 sm:h-12 sm:w-12 sm:text-[15px] ${gradient}`}
          >
            {entry.logo}
          </div>
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-[var(--home-heading)] md:text-[17px]">
              {entry.title}
            </h3>
            <p className="mt-1 text-[13px] font-medium text-[var(--home-muted-strong)] md:text-sm">
              {entry.subtitle}
            </p>
          </div>
        </div>
        <span className="home-date-pill shrink-0 self-start rounded-full px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-wider whitespace-nowrap sm:text-[11px] md:text-[12px]">
          {entry.period}
        </span>
      </div>
      <div className="mt-5 border-t border-[var(--home-divider)] pt-5">
        <p className="text-[14px] leading-relaxed text-[var(--home-muted)] md:text-[15px]">
          {entry.description}
        </p>
      </div>
    </div>
  );

  return (
    <m.article
      initial={reduced ? false : { opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: EASE.out, delay: index * 0.08 }}
      className="timeline-card relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6"
    >
      <div
        className={`min-w-0 ${isLeft ? "md:col-start-1 md:pr-6 md:text-right" : "md:col-start-3 md:pl-6"}`}
      >
        <div className={isLeft ? "md:ml-auto md:max-w-md" : "md:mr-auto md:max-w-md"}>
          {card}
        </div>
      </div>

      <div className="timeline-node relative z-10 hidden justify-center md:col-start-2 md:flex">
        <div className="timeline-dot h-4 w-4 rounded-full border-2 border-primary bg-[var(--home-section-bg)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]" />
      </div>

      <div className="hidden md:col-start-3 md:block" aria-hidden />
    </m.article>
  );
}

export function Timeline({ entries }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
  });

  const lineHeight = useTransform(lineProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="timeline-root relative">
      <div className="timeline-line-track absolute top-0 bottom-0 left-4 w-px bg-[var(--home-card-border)] md:left-1/2 md:-translate-x-px">
        {!reduced ? (
          <m.div
            className="timeline-line-fill absolute top-0 left-0 w-full origin-top bg-primary"
            style={{ height: lineHeight }}
          />
        ) : (
          <div className="timeline-line-fill absolute top-0 left-0 h-full w-full bg-primary/40" />
        )}
      </div>

      <div className="relative space-y-10 pl-10 md:space-y-14 md:pl-0">
        {entries.map((entry, index) => (
          <TimelineCard key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}
