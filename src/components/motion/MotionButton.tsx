"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/motion/config";

interface MotionButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function MotionButton({
  children,
  className,
  onClick,
  type = "button",
}: MotionButtonProps) {
  return (
    <m.button
      type={type}
      onClick={onClick}
      whileHover={{
        y: -2,
        scale: 1.02,
        boxShadow: "0 12px 40px -12px rgba(0, 170, 255, 0.35)",
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ duration: 0.35, ease: EASE.out }}
      className={cn(className)}
    >
      {children}
    </m.button>
  );
}
