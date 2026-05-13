"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl md:text-3xl font-bold font-display text-primary mb-3 md:mb-4 block">
              PORTFOLIO<span className="text-foreground">.</span>
            </Link>
            <p className="text-foreground/40 max-w-sm text-sm md:text-base">
              Creating digital experiences that matter. Expert in modern web and mobile technologies.
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            {[
              { icon: <Github size={20} />, href: "#" },
              { icon: <Linkedin size={20} />, href: "#" },
              { icon: <Twitter size={20} />, href: "#" },
              { icon: <Instagram size={20} />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-3 glass rounded-full hover:bg-primary hover:text-white transition-all text-foreground/60"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-[12px] md:text-sm text-foreground/40 order-2 md:order-1">
            © {new Date().getFullYear()} PORTFOLIO. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[12px] md:text-sm text-foreground/40 font-medium order-1 md:order-2">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
