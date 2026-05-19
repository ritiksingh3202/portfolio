"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={cn("relative group", className)}>
      {children}
      <m.span
        className="absolute -bottom-0.5 left-0 h-px bg-current origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 0.6 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%" }}
      />
    </Link>
  );
}
