"use client";

import { Navbar } from "@/components/navbar/Navbar";
import { AboutPage } from "@/sections/AboutPage";

export default function AboutPageRoute() {
  return (
    <main className="min-h-screen bg-background overflow-visible">
      <Navbar />
      <AboutPage />
    </main>
  );
}
