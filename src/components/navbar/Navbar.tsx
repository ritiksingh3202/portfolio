"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/motion/NavLink";
import { Magnetic } from "@/components/motion/Magnetic";
import { fadeDown } from "@/motion/variants";
import { EASE } from "@/motion/config";

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
        "p-2 hover:opacity-70 transition-opacity",
        isSolid ? "text-foreground" : "text-white"
      )}
      aria-label="Toggle theme"
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
  const [scrolled, setScrolled] = useState(false);
  const [inContact, setInContact] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isSolid = !isHome || scrolled || isOpen || inContact;

  const setOpen = (val: boolean) => {
    setIsOpen(val);
    document.body.style.overflow = val ? "hidden" : "unset";
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isSolid
          ? "py-4 bg-background/90 backdrop-blur-md border-b border-glass-border shadow-[0_1px_0_rgba(15,23,42,0.06)] dark:shadow-none"
          : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Magnetic strength={0.15}>
          <Link
            href="/"
            className={cn(
              "text-3xl font-serif italic transition-colors lowercase tracking-tighter relative z-50 block",
              isSolid ? "text-foreground" : "text-white"
            )}
            onClick={() => setOpen(false)}
          >
            ritik
          </Link>
        </Magnetic>

        <DesktopNav
          isSolid={isSolid}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <MobileNav
          isSolid={isSolid}
          isOpen={isOpen}
          setOpen={setOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </m.nav>
  );
}

function DesktopNav({
  isSolid,
  theme,
  toggleTheme,
}: {
  isSolid: boolean;
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <div className="hidden lg:flex items-center gap-10">
      <div
        className={cn(
          "flex items-center gap-8 text-[13px] font-medium",
          isSolid ? "text-foreground" : "text-white"
        )}
      >
        {navLinks.map((link) => (
          <Magnetic key={link.name} strength={0.2}>
            <NavLink href={link.href}>{link.name}</NavLink>
          </Magnetic>
        ))}
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
}: {
  isSolid: boolean;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  theme: string;
  toggleTheme: () => void;
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
            className="absolute top-full left-0 right-0 h-screen bg-background border-t border-glass-border p-8 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, ease: EASE.out }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-serif lowercase italic text-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </m.div>
              ))}
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
    <div className="flex items-center gap-4 lg:hidden relative z-50">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} isSolid={isSolid} />
      <m.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(!isOpen)}
        className={cn("p-2", isSolid ? "text-foreground" : "text-white")}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </m.button>
    </div>
  );
}
