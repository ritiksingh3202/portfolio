"use client";

import { useEffect } from "react";
import { ScrollProgress } from "./ScrollProgress";
import { CustomCursor } from "./CustomCursor";
import { useFinePointer, usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MotionShell({ children }: { children: React.ReactNode }) {
  const finePointer = useFinePointer();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    document.documentElement.classList.toggle(
      "has-custom-cursor",
      finePointer && !reduced
    );
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [finePointer, reduced]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </>
  );
}
