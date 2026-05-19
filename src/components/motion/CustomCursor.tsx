"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 26, mass: 0.35 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 26, mass: 0.35 });

  useEffect(() => {
    if (reduced || !finePointer) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, input, textarea, select, label, [data-cursor-hover]"
      );
      setHovering(!!interactive);
    };

    const onDown = () => setPressing(true);
    const onUp = () => setPressing(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [reduced, finePointer, mouseX, mouseY, visible]);

  if (reduced || !finePointer) return null;

  const ringSize = hovering ? 52 : pressing ? 22 : 30;

  return (
    <>
      <m.div
        className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[10001] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: visible ? 1 : 0,
          mixBlendMode: "difference",
        }}
        aria-hidden
      />
      <m.div
        className="custom-cursor-ring pointer-events-none fixed top-0 left-0 z-[10000] rounded-full border-2 border-white"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          mixBlendMode: "difference",
          backgroundColor: hovering ? "rgba(255,255,255,0.12)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        aria-hidden
      />
    </>
  );
}
