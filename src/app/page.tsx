"use client";

import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { MobileApps } from "@/sections/MobileApps";
import { TechStack } from "@/sections/TechStack";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MobileApps />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
