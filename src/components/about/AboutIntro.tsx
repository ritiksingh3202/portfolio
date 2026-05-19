"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { intro, profile } from "@/data/about";
import { EASE } from "@/motion/config";

const ROLES = ["Full Stack Developer", "UI/UX Engineer", "Mobile Developer"];
const DEFAULT_ROLE = profile.role;

export function AboutIntro() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, displayed.length + 1);
          setDisplayed(next);
          if (next === current) setTimeout(() => setDeleting(true), 1800);
        } else {
          const next = current.slice(0, displayed.length - 1);
          setDisplayed(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
          }
        }
      },
      deleting ? 40 : 70
    );
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex, mounted]);

  const roleText = mounted ? displayed : DEFAULT_ROLE;

  return (
    <div className="about-hero-intro">
      <m.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE.out }}
        className="text-sm md:text-base text-muted-foreground mb-4 md:mb-5 flex items-center gap-2"
      >
        <span aria-hidden>👋</span> {intro.greeting}
      </m.p>

      <m.h2
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE.out, delay: 0.05 }}
        className="text-[1.85rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.65rem] xl:text-[3rem] font-bold leading-[1.15] tracking-tight text-foreground mb-5 md:mb-6 lg:mb-7"
      >
        <span className="block">I&apos;m {profile.name},</span>
        <span
          className="block text-primary"
          suppressHydrationWarning
        >
          <span className="about-role-text">{roleText}</span>
          {mounted && (
            <span
              className="inline-block w-[2px] h-[0.85em] bg-primary ml-0.5 align-middle animate-pulse"
              aria-hidden
            />
          )}
        </span>
        <span className="block">Based in {profile.location}.</span>
      </m.h2>

      <m.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE.out, delay: 0.12 }}
        className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
      >
        {intro.bio}
      </m.p>
    </div>
  );
}
