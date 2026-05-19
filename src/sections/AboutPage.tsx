"use client";

import { ProfileSidebar } from "@/components/about/ProfileSidebar";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutEducation } from "@/components/about/AboutEducation";
import { AboutStakes } from "@/components/about/AboutStakes";
import { AboutContact } from "@/components/about/AboutContact";
import { profile } from "@/data/about";

const COPYRIGHT_YEAR = 2026;

export function AboutPage() {
  return (
    <div className="about-page min-h-screen pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="about-layout">
          <aside className="about-sidebar-slot">
            <ProfileSidebar />
          </aside>

          <div className="about-content-column">
            <section className="about-hero">
              <AboutIntro />
              <AboutStats />
            </section>

            <div className="space-y-14 md:space-y-20 lg:space-y-24">
              <AboutExperience />
              <AboutEducation />
              <AboutStakes />
              <AboutContact />
            </div>

            <AboutPageFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPageFooter() {
  return (
    <footer className="mt-16 lg:mt-24 pt-8 border-t border-glass-border pb-12 lg:pb-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
        <span>Built with Next.js &amp; Framer Motion</span>
        <span className="about-footer-name font-semibold text-foreground text-base lg:text-lg">
          {profile.name}
        </span>
        <span>Portfolio © {COPYRIGHT_YEAR}</span>
      </div>
    </footer>
  );
}
