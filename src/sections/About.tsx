"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "5+", label: "Years building" },
  { value: "40+", label: "Shipped projects" },
  { value: "12", label: "Happy clients" },
  { value: "∞", label: "Cups of chai" },
];

interface AboutProps {
  isPage?: boolean;
}

export function About({ isPage = false }: AboutProps) {
  return (
    <section
      id="about"
      className={`relative py-32 px-6 ${isPage ? "min-h-screen" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
            ✦ About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight max-w-4xl">
            I make digital products that feel{" "}
            <em className="not-italic text-gradient">obvious</em>,
            even when they&apos;re not.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;ve been writing software since I was 15. Started with HTML on
              a borrowed laptop, ended up shipping production apps to millions. I
              care about the boring details — first paint times, accessibility,
              the curve on a loading spinner.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently building tools at the intersection of AI and developer
              experience. Previously at{" "}
              <span className="text-foreground">Razorpay</span> and{" "}
              <span className="text-foreground">CRED</span>, leading mobile and
              full-stack squads.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border-t border-border pt-6">
                <div className="font-display text-5xl text-gradient">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}