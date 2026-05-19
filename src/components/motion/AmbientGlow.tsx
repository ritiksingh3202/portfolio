"use client";

import { m } from "framer-motion";

export function AmbientGlow() {
  return (
    <>
      <m.div
        className="pointer-events-none absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/10 blur-[120px] dark:bg-blue-500/10"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[100px] dark:bg-indigo-500/15"
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 25, -15, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
