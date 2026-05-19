"use client";

import { m, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "@/motion/config";

export function ScrollDownIndicator() {
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (reduced || hidden) return null;

  return (
    <m.div
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: EASE.out }}
    >
      <m.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1 text-white/70"
      >
        <span className="h-8 w-px bg-gradient-to-b from-transparent via-white/60 to-white/30" />
        <ChevronDown size={20} strokeWidth={1.5} />
      </m.div>
    </m.div>
  );
}
