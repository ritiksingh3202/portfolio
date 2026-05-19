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

export const experiences = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "Tech Studio",
    period: "2023 — Present",
    description:
      "Leading end-to-end product builds with Next.js, React Native, and cloud backends. Partnering with design to ship polished, performant experiences.",
    logo: "T",
    logoColor: "bg-amber-500/20 text-amber-400",
  },
  {
    id: "2",
    title: "UI/UX & Frontend Engineer",
    company: "Product Labs",
    period: "2021 — 2023",
    description:
      "Designed and developed marketing sites and SaaS dashboards for global brands with a focus on motion, accessibility, and pixel-perfect UI.",
    logo: "P",
    logoColor: "bg-slate-500/20 text-slate-300",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "Startup Foundry",
    period: "2019 — 2021",
    description:
      "Built MVPs and production apps across web and mobile — APIs, databases, and client-facing interfaces from zero to launch.",
    logo: "S",
    logoColor: "bg-emerald-500/20 text-emerald-400",
  },
];

export const education = [
  {
    id: "1",
    title: "Full Stack Development Certification",
    institution: "Online Program",
    period: "2020 — 2021",
    description:
      "Advanced training in modern web stacks — React, Node.js, databases, deployment, and collaborative product delivery.",
  },
  {
    id: "2",
    title: "Bachelor of Technology",
    institution: "Computer Science & Engineering",
    period: "2016 — 2020",
    description:
      "Foundation in algorithms, systems, and software engineering with projects spanning web apps and mobile prototypes.",
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
