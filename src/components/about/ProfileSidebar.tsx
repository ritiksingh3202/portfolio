"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { Download, Send, Instagram, Twitter, Youtube, Globe } from "lucide-react";
import { profile, socialLinks } from "@/data/about";
import { EASE } from "@/motion/config";
import { cn } from "@/lib/utils";

const iconMap = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  dribbble: Globe,
  behance: Globe,
} as const;

export function ProfileSidebar() {
  return (
    <m.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE.out }}
      className="about-card about-sidebar-card"
    >
      <div className="about-sidebar-photo about-photo-frame mb-3 lg:mb-4">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 34vw, 380px"
          priority
        />
      </div>

      {profile.available && (
        <div className="flex justify-center mb-2.5 lg:mb-3 shrink-0">
          <span className="inline-flex items-center gap-1.5 rounded-full about-badge px-3 py-1.5 text-[11px] lg:text-xs font-medium text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            Available for work
          </span>
        </div>
      )}

      <h1 className="text-center text-lg sm:text-xl lg:text-[1.35rem] font-bold tracking-tight text-foreground mb-2.5 lg:mb-3 shrink-0">
        {profile.name}
      </h1>

      <div className="flex items-center justify-center gap-1.5 lg:gap-2 mb-3 lg:mb-4 shrink-0">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <m.a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: EASE.out }}
              className="flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-lg about-social-btn text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-3.5 w-3.5" />
            </m.a>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2 lg:gap-2.5 mt-auto shrink-0">
        <m.a
          href={profile.cvUrl}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: EASE.out }}
          className={cn(
            "flex items-center justify-center gap-1.5 rounded-xl about-btn-secondary",
            "px-2.5 py-2.5 text-[11px] lg:text-xs font-semibold text-foreground transition-colors"
          )}
        >
          <Download className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">Download CV</span>
        </m.a>
        <m.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: EASE.out }}
          className="min-w-0"
        >
          <Link
            href={profile.contactHref}
            className={cn(
              "flex items-center justify-center gap-1.5 rounded-xl w-full",
              "bg-primary text-white px-2.5 py-2.5 text-[11px] lg:text-xs font-semibold",
              "hover:brightness-110 transition-all about-primary-btn"
            )}
          >
            <Send className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Contact Me</span>
          </Link>
        </m.div>
      </div>
    </m.aside>
  );
}
