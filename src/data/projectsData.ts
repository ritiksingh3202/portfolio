export type ProjectCategory = "web" | "app";

export type FeaturedProject = {
  id: number;
  name: string;
  description: string;
  tag: string;
  category: ProjectCategory;
  image: string;
  iconColor: string;
  iconImage?: string;
  href?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    name: "Commonsia",
    description:
      "A community-driven platform for shared resources, events, and collaboration — built for clarity, speed, and scale.",
    tag: "Web App",
    category: "web",
    image: "/project_assets/commonsia/commonsia_cover.png",
    iconColor: "#6366f1",
  },
  {
    id: 2,
    name: "ResiLens",
    description:
      "Smart property insights and residency planning tools with dashboards designed for fast, confident decisions.",
    tag: "SaaS Landing Page",
    category: "web",
    image: "/project_assets/resilens/resilens_cover.png",
    iconColor: "#0ea5e9",
  },
  {
    id: 3,
    name: "Code Reviewer",
    description:
      "AI-assisted code review workflow that surfaces issues, suggests fixes, and keeps teams shipping with confidence.",
    tag: "Web App",
    category: "web",
    image: "/project_assets/code-review/code-review_cover.png",
    iconColor: "#8b5cf6",
  },
  {
    id: 4,
    name: "My Portfolio",
    description:
      "This site — a motion-rich portfolio showcasing full stack work, thoughtful UI, and premium light/dark experiences.",
    tag: "Portfolio Website",
    category: "web",
    image: "/project_assets/portfolio/portfolio_cover.png",
    iconColor: "#2563eb",
  },
  {
    id: 5,
    name: "LuxeJewel",
    description:
      "Luxury jewelry shopping experience with curated collections, rich product detail, and a polished mobile-first UI.",
    tag: "iOS App",
    category: "app",
    image: "/project_assets/gold-app/gold_cover.png",
    iconColor: "#d97706",
  },
  {
    id: 6,
    name: "Edunova",
    description:
      "Education platform connecting learners with courses, progress tracking, and an intuitive study-first interface.",
    tag: "Android App",
    category: "app",
    image: "/project_assets/edunova-app/edunova_cover.png",
    iconColor: "#10b981",
  },
];
