export const identity = {
  label: "I'm Ritik Raj",
  headline: "Hey,",
  role: "full stack developer",
  paragraphs: [
    "Full stack developer with hands-on experience turning ideas into thoughtful, intuitive web and mobile products. I've worked with teams and clients across different domains, and each project pushes me to build smarter, cleaner, and more meaningful experiences.",
    "I love what I do, and I'm always exploring new ways to blend engineering with design. Whether it's motion, interaction, or layout, I'm all in.",
  ],
  available: true,
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
};

export type SkillTag = {
  label: string;
  bg: string;
  icon?: string;
};

export const skillTags: SkillTag[] = [
  { label: "Full Stack Developer", bg: "#7c2d12", icon: "◫" },
  { label: "UI/UX Engineer", bg: "#1e3a5f", icon: "◇" },
  { label: "React & Next.js", bg: "#450a0a", icon: "▣" },
  { label: "Mobile Apps", bg: "#134e4a", icon: "⚡" },
];
