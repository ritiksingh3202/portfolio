"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function ShimmerButton({
  href,
  children,
  className,
  isActive,
  onClick,
}: ShimmerButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      data-cursor-hover
      className={cn(
        "nav-shimmer-btn relative overflow-hidden rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
        isActive && "nav-link-active",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="nav-shimmer-sweep pointer-events-none absolute inset-0 -translate-x-full" aria-hidden />
    </Link>
  );
}
