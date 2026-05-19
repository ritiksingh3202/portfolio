"use client";

import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/sections/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import { FAQs } from "@/sections/FAQs";
import { contact } from "@/data/about";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects />
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
