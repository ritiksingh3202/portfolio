"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setOpen = (val: boolean) => {
    setIsOpen(val);
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const navLinks = [
    { name: "Let's Connect", href: "#contact", icon: "✦" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "/resume", icon: "✧" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled || isOpen ? "py-4 bg-background/80 backdrop-blur-md border-b border-glass-border" : "py-8 bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "text-3xl font-serif italic transition-colors lowercase tracking-tighter relative z-50",
            scrolled || isOpen ? "text-foreground" : "text-white"
          )}
          onClick={() => setOpen(false)}
        >
          ritik
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className={cn(
            "flex items-center gap-8 text-[13px] font-medium transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                {link.icon && <span>{link.icon}</span>} {link.name}
              </Link>
            ))}
          </div>
          
          <button 
            onClick={toggleTheme} 
            className={cn(
              "p-2 hover:opacity-70 transition-opacity",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
             {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden relative z-50">
          <button 
            onClick={toggleTheme} 
            className={cn(
              "p-2 hover:opacity-70 transition-opacity",
              scrolled || isOpen ? "text-foreground" : "text-white"
            )}
          >
             {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setOpen(!isOpen)}
            className={cn(
              "p-2 transition-colors",
              scrolled || isOpen ? "text-foreground" : "text-white"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 h-screen bg-background border-t border-glass-border p-8 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-4xl font-serif lowercase italic text-foreground hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
