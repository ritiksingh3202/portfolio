"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection, hrefToSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/motion/NavLink";
import { EASE, DURATION } from "@/motion/config";

const navLinks = [
  { name: "Let's Connect", href: "/#contact" },
  { name: "Work", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Resume", href: "/resume" },
];

function ThemeToggle({
  theme,
  toggleTheme,
  isSolid,
}: {
  theme: string;
  toggleTheme: () => void;
  isSolid: boolean;
}) {
  return (
    <m.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92, rotate: 15 }}
      transition={{ duration: 0.35, ease: EASE.out }}
      className={cn(
        "p-2 transition-opacity hover:opacity-70",
        isSolid ? "text-foreground" : "text-white"
      )}
      aria-label="Toggle theme"
      data-cursor-hover
    >
      <span className="block" suppressHydrationWarning>
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </m.button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [inContact, setInContact] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(isHome);
  const { scrollY } = useScroll();

  const isSolid = !isHome || scrolled || isOpen || inContact;

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 80);
  });

  const setOpen = (val: boolean) => {
    setIsOpen(val);
    document.body.style.overflow = val ? "hidden" : "unset";
  };

  useEffect(() => {
    if (!isHome) {
      setInContact(false);
      return;
    }

    const contactEl = document.getElementById("contact");
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 }
    );

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  return (
    <m.nav
      initial={reduced ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.normal, ease: EASE.out, delay: 0 }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-[padding,background,backdrop-filter,box-shadow,border-color] duration-500",
        scrolled
          ? "border-b border-glass-border py-3 shadow-[0_1px_0_rgba(15,23,42,0.06)] backdrop-blur-md dark:shadow-none"
          : "border-b border-transparent py-8",
        scrolled && theme === "dark" && "bg-black/60",
        scrolled && theme !== "dark" && "bg-white/70",
        !scrolled && "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={cn(
            "relative z-50 block text-2xl font-semibold lowercase tracking-tight transition-colors",
            isSolid ? "text-foreground" : "text-white"
          )}
          onClick={() => setOpen(false)}
          data-cursor-hover
        >
          ritik
        </Link>

        <DesktopNav
          isSolid={isSolid}
          theme={theme}
          toggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        <MobileNav
          isSolid={isSolid}
          isOpen={isOpen}
          setOpen={setOpen}
          theme={theme}
          toggleTheme={toggleTheme}
          activeSection={activeSection}
        />
      </div>
    </m.nav>
  );
}

function DesktopNav({
  isSolid,
  theme,
  toggleTheme,
  activeSection,
}: {
  isSolid: boolean;
  theme: string;
  toggleTheme: () => void;
  activeSection: ReturnType<typeof useActiveSection>;
}) {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      <div
        className={cn(
          "flex items-center gap-8 text-[13px] font-medium tracking-wide",
          isSolid ? "text-foreground" : "text-white"
        )}
      >
        {navLinks.map((link) => {
          const section = hrefToSection(link.href);
          const isActive = section !== null && activeSection === section;

          return (
            <NavLink
              key={link.name}
              href={link.href}
              className={cn(
                "transition-opacity hover:opacity-80",
                isActive && "opacity-100 underline decoration-white/40 underline-offset-4",
                isSolid && isActive && "decoration-foreground/40"
              )}
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} isSolid={isSolid} />
    </div>
  );
}

function MobileNav({
  isSolid,
  isOpen,
  setOpen,
  theme,
  toggleTheme,
  activeSection,
}: {
  isSolid: boolean;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  theme: string;
  toggleTheme: () => void;
  activeSection: ReturnType<typeof useActiveSection>;
}) {
  return (
    <>
      <MobileControls
        isSolid={isSolid}
        isOpen={isOpen}
        setOpen={setOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: EASE.out }}
            className="absolute top-full right-0 left-0 h-screen overflow-y-auto border-t border-glass-border bg-background p-8 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => {
                const section = hrefToSection(link.href);
                const isActive = section !== null && activeSection === section;

                return (
                  <m.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, ease: EASE.out }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-3xl font-semibold lowercase tracking-tight text-foreground transition-colors hover:text-primary",
                        isActive && "text-primary"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileControls({
  isSolid,
  isOpen,
  setOpen,
  theme,
  toggleTheme,
}: {
  isSolid: boolean;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <div className="relative z-50 flex items-center gap-4 lg:hidden">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} isSolid={isSolid} />
      <m.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(!isOpen)}
        className={cn("p-2", isSolid ? "text-foreground" : "text-white")}
        data-cursor-hover
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </m.button>
    </div>
  );
}
