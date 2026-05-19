"use client";

import { useEffect, useRef, useState } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { impactStats, type ImpactStat } from "@/data/stats";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";
import { staggerContainer, fadeUp } from "@/motion/variants";
import { cn } from "@/lib/utils";

/** 0 → shuffle → count up to target when scrolled into view */
function ShuffleCountUp({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const reduced = useReducedMotion() ?? false;
  const [display, setDisplay] = useState(0);
  const [settling, setSettling] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    if (reduced) {
      setDisplay(value);
      return;
    }

    setDisplay(0);
    setSettling(true);

    const shuffleMs = 520;
    const countMs = 1600;
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;

      if (elapsed < shuffleMs) {
        const intensity = 1 - elapsed / shuffleMs;
        const max = Math.max(value, 9);
        setDisplay(
          Math.floor(Math.random() * max * intensity + Math.random() * 3)
        );
        raf = requestAnimationFrame(tick);
        return;
      }

      if (elapsed < shuffleMs + countMs) {
        const t = (elapsed - shuffleMs) / countMs;
        const eased = 1 - Math.pow(1 - t, 4);
        setDisplay(Math.round(eased * value));
        raf = requestAnimationFrame(tick);
        return;
      }

      setDisplay(value);
      setSettling(false);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, reduced]);

  return (
    <m.span
      ref={ref}
      className={cn(
        "inline-flex items-baseline whitespace-nowrap tabular-nums",
        className
      )}
      animate={
        settling
          ? {
              y: [0, -3, 1, 0],
              filter: ["blur(0px)", "blur(4px)", "blur(1px)", "blur(0px)"],
            }
          : { y: 0, filter: "blur(0px)" }
      }
      transition={{ duration: 0.35, ease: EASE.out }}
    >
      <span>{display}</span>
      <span>{suffix}</span>
    </m.span>
  );
}

function DotGrid() {
  const dots = Array.from({ length: 60 }, (_, i) => {
    const bright = [7, 12, 18, 23, 31, 38, 44, 52].includes(i);
    return bright;
  });

  return (
    <div className="grid grid-cols-10 gap-[5px] sm:gap-1.5" aria-hidden>
      {dots.map((bright, i) => (
        <m.span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full bg-white sm:h-[7px] sm:w-[7px]",
            bright ? "opacity-90" : "opacity-25"
          )}
          initial={{ opacity: 0.15, scale: 0.6 }}
          whileInView={{ opacity: bright ? 0.95 : 0.28, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4 + (i % 10) * 0.03,
            duration: 0.4,
            ease: EASE.out,
          }}
        />
      ))}
    </div>
  );
}

const cardStyles: Record<
  ImpactStat["variant"],
  { className: string; col: string }
> = {
  /* Side cards — equal width */
  experience: {
    col: "md:col-span-3 lg:col-span-3",
    className:
      "bg-[linear-gradient(145deg,#5b21b6_0%,#4c1d95_35%,#1e1b4b_100%)]",
  },
  /* Center — wide like reference experience card */
  projects: {
    col: "md:col-span-6 lg:col-span-6",
    className:
      "bg-[linear-gradient(180deg,rgba(88,28,135,0.5)_0%,rgba(15,10,30,0.9)_60%),url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center",
  },
  satisfaction: {
    col: "md:col-span-3 lg:col-span-3",
    className:
      "bg-[linear-gradient(120deg,#9a3412_0%,#a16207_40%,#4d7c0f_100%)]",
  },
};

const numberClass =
  "text-4xl font-bold leading-none tracking-tight sm:text-5xl lg:text-[3.25rem]";

function StatCard({ stat }: { stat: ImpactStat }) {
  const style = cardStyles[stat.variant];
  const isSatisfaction = stat.variant === "satisfaction";

  return (
    <m.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: DURATION.normal, ease: EASE.out }}
      className={cn(
        "impact-stat-card group relative flex min-h-[128px] overflow-hidden rounded-2xl p-4 text-white shadow-lg sm:min-h-[136px] sm:rounded-[1.75rem] sm:p-5 md:min-h-[144px]",
        style.className,
        style.col
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      {isSatisfaction ? (
        <div className="relative z-10 flex h-full w-full flex-col justify-between gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <ShuffleCountUp
              value={stat.value}
              suffix={stat.suffix}
              className={numberClass}
            />
            <p className="mt-2 max-w-[240px] text-xs leading-snug text-white/85 sm:text-sm">
              {stat.label}
            </p>
          </div>
          <div className="hidden w-[46%] max-w-[160px] shrink-0 lg:block">
            <DotGrid />
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex h-full flex-col justify-between">
          <ShuffleCountUp
            value={stat.value}
            suffix={stat.suffix}
            className={numberClass}
          />
          <p className="mt-auto max-w-[300px] pt-3 text-xs leading-snug text-white/85 sm:text-sm">
            {stat.label}
          </p>
        </div>
      )}
    </m.article>
  );
}

export function ImpactStats() {
  return (
    <section
      id="stats"
      className="impact-stats relative scroll-mt-24 bg-[var(--impact-stats-bg)] px-4 py-8 sm:px-6 sm:py-10 md:py-12"
    >
      <div className="container mx-auto max-w-6xl">
        <m.div
          className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-4 lg:gap-5"
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {impactStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
