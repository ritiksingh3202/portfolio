"use client";

import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/sections/Hero";
import { HomeAbout } from "@/sections/HomeAbout";
import { ImpactStats } from "@/sections/ImpactStats";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import { TechStack } from "@/sections/TechStack";
import { HomeExperience } from "@/sections/HomeExperience";
import { HomeEducation } from "@/sections/HomeEducation";
import { FAQs } from "@/sections/FAQs";
import { contact } from "@/data/about";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HomeAbout />
      <ImpactStats />
      <FeaturedProjects />
      <TechStack />
      <HomeExperience />
      <HomeEducation />
      <FAQs />
      <Footer
        name={contact.footerName}
        phone={contact.phone}
        email={contact.email}
        instagramUrl={contact.instagramUrl}
        linkedinUrl={contact.linkedinUrl}
        whatsappNumber={contact.whatsappNumber}
      />
    </main>
  );
}
