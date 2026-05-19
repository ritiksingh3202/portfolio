export type TechStackItem = {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
};

/** Icons live in /public/tech-stack/ — dev tools first, design tools last */
export const techStack: TechStackItem[] = [
  {
    id: "react",
    name: "React",
    subtitle: "Frontend Library",
    icon: "/tech-stack/react.svg",
  },
  {
    id: "nextjs",
    name: "Next.js",
    subtitle: "Web Framework",
    icon: "/tech-stack/nextjs-icon.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    subtitle: "Language",
    icon: "/tech-stack/typescript.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    subtitle: "Styling",
    icon: "/tech-stack/tailwind-css.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    subtitle: "Runtime",
    icon: "/tech-stack/nodejs-logo.svg",
  },
  {
    id: "express",
    name: "Express",
    subtitle: "Backend Framework",
    icon: "/tech-stack/express.png",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    subtitle: "Database",
    icon: "/tech-stack/mongodb.png",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    subtitle: "Database",
    icon: "/tech-stack/Postgresql_elephant.svg.png",
  },
  {
    id: "prisma",
    name: "Prisma",
    subtitle: "ORM",
    icon: "/tech-stack/prisma.svg",
  },
  {
    id: "flutter",
    name: "Flutter",
    subtitle: "Mobile Development",
    icon: "/tech-stack/flutter.svg",
  },
  {
    id: "github",
    name: "GitHub",
    subtitle: "Version Control",
    icon: "/tech-stack/github.svg",
  },
  {
    id: "openai",
    name: "OpenAI",
    subtitle: "AI Tools",
    icon: "/tech-stack/openai.svg",
  },
  {
    id: "cursor",
    name: "Cursor",
    subtitle: "AI IDE",
    icon: "/tech-stack/cursor.png",
  },
  {
    id: "notion",
    name: "Notion",
    subtitle: "Productivity",
    icon: "/tech-stack/Notion-logo.svg.png",
  },
  {
    id: "framer",
    name: "Framer",
    subtitle: "No Code Development",
    icon: "/tech-stack/framer.svg",
  },
  {
    id: "figma",
    name: "Figma",
    subtitle: "Design Tool",
    icon: "/tech-stack/Figma-logo.svg",
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    subtitle: "Vector Design",
    icon: "/tech-stack/Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    subtitle: "Image Editing",
    icon: "/tech-stack/Adobe_Photoshop_CC_icon.svg.png",
  },
];
