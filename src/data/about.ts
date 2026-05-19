/** Placeholder content — replace in a follow-up pass */

export const contact = {
  phone: "+91 9608408949",
  email: "ritikraj.ip@gmail.com",
  whatsappNumber: "919608408949",
  linkedinUrl: "https://www.linkedin.com/in/ritik-raj-7093701bb/",
  instagramUrl: "https://www.instagram.com/ritiksingh6252/",
  footerName: "Ritik Raj",
};

export const profile = {
  name: "Ritik Raj",
  role: "Full Stack Developer",
  location: "India",
  available: true,
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  cvUrl: "/resume",
  contactHref: "#about-contact",
};

export const socialLinks = [
  { label: "Instagram", href: contact.instagramUrl, icon: "instagram" as const },
  { label: "Twitter", href: "#", icon: "twitter" as const },
  { label: "YouTube", href: "#", icon: "youtube" as const },
  { label: "Dribbble", href: "#", icon: "dribbble" as const },
  { label: "Behance", href: "#", icon: "behance" as const },
];

export const intro = {
  greeting: "Say Hello",
  bio: "I'm a Full Stack Developer with a strong eye for UI/UX, building modern web and mobile products where engineering meets thoughtful design. I focus on clean interfaces, smooth interactions, and shipping work that feels premium in both dark and light mode.",
};

export const stats = [
  { value: "30+", label: "Completed Projects" },
  { value: "5+", label: "Years of Experience" },
  { value: "12+", label: "Happy Clients" },
  { value: "8+", label: "Awards Received" },
];

const fullStackBio =
  "Full stack developer with hands-on experience turning ideas into thoughtful, intuitive web and mobile products. I've worked with teams and clients across different domains — each project pushing me to build smarter, cleaner, and more meaningful experiences.";

export const experiences = [
  {
    id: "1",
    title: "Full-Stack Developer & CTO",
    company: "Commonsia",
    period: "March 2026 — Present",
    description: fullStackBio,
    logo: "C",
    logoColor: "bg-indigo-500/20 text-indigo-400",
  },
  {
    id: "2",
    title: "UI/UX Designer and Frontend Engineer",
    company: "TechTimes.ai",
    period: "June 2024 — Nov 2025",
    description:
      "Designed and built product interfaces and frontend experiences — from UX flows and visual design to responsive, production-ready implementation.",
    logo: "T",
    logoColor: "bg-sky-500/20 text-sky-400",
  },
];

export const education = [
  {
    id: "1",
    title: "Bachelor of Architecture",
    institution: "IIT Roorkee",
    period: "2023 — 2028",
    description: fullStackBio,
  },
];

export const stakes = [
  { name: "Figma", subtitle: "Design Tool", emoji: "🎨" },
  { name: "Next.js", subtitle: "Web Framework", emoji: "▲" },
  { name: "React Native", subtitle: "Mobile Development", emoji: "📱" },
  { name: "TypeScript", subtitle: "Language", emoji: "TS" },
  { name: "Tailwind CSS", subtitle: "Styling", emoji: "🌊" },
  { name: "Framer Motion", subtitle: "Animation", emoji: "✨" },
];

export const contactInfo = [
  { label: "Contact No", value: contact.phone, icon: "phone" as const },
  { label: "Email", value: contact.email, icon: "email" as const },
  {
    label: "Address",
    value: "Available for remote work worldwide",
    icon: "location" as const,
  },
];
