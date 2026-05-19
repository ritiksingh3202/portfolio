"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import {
  featuredProjects,
  type FeaturedProject,
} from "@/data/projectsData";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";
import { fadeUp, staggerContainer } from "@/motion/variants";
type FeaturedProjectsProps = {
  projects?: FeaturedProject[];
};

function ProjectCard({ project }: { project: FeaturedProject }) {
  const initial = project.name.charAt(0).toUpperCase();

  const card = (
    <m.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: DURATION.normal, ease: EASE.out }}
      className="featured-project-card group flex h-full w-full cursor-pointer flex-col"
    >
      <div
        className="featured-project-media relative w-full shrink-0 overflow-hidden rounded-2xl border border-[var(--project-card-border)] bg-[var(--project-media-bg)] shadow-[var(--project-card-shadow)] transition-shadow duration-300 group-hover:shadow-[var(--project-card-hover-shadow)] sm:rounded-[1.35rem]"
        style={{ "--project-glow": project.iconColor } as React.CSSProperties}
      >
        <m.div
          className="absolute inset-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.55, ease: EASE.out }}
        >
          <Image
            src={project.image}
            alt={`${project.name} cover`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 540px"
            priority={project.id <= 2}
          />
        </m.div>
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at 50% 100%, ${project.iconColor}33 0%, transparent 65%)`,
          }}
        />
      </div>

      <div className="flex flex-1 flex-col pt-4 sm:pt-5">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-bold text-white shadow-md sm:h-10 sm:w-10"
            style={{ backgroundColor: project.iconColor }}
          >
            {project.iconImage ? (
              <Image
                src={project.iconImage}
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            ) : (
              initial
            )}
          </span>
          <h3 className="text-lg font-bold tracking-tight text-[var(--project-title)] sm:text-xl">
            {project.name}
          </h3>
        </div>

        <p className="mt-2 min-h-[4.25rem] line-clamp-3 text-sm leading-relaxed text-[var(--project-description)]">
          {project.description}
        </p>

        <span className="mt-auto inline-flex w-fit rounded-full border border-[var(--project-tag-border)] bg-[var(--project-tag-bg)] px-3 py-1 pt-4 text-xs font-medium text-[var(--project-tag-text)]">
          {project.tag}
        </span>
      </div>
    </m.article>
  );

  if (project.href) {
    return (
      <Link href={project.href} className="block h-full w-full outline-none">
        {card}
      </Link>
    );
  }

  return card;
}

function CategoryDivider({ label }: { label: string }) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.normal, ease: EASE.out }}
      className="flex justify-center py-10 sm:py-12 md:justify-start"
    >
      <span className="inline-flex rounded-full border border-[var(--project-divider-border)] bg-[var(--project-divider-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--project-divider-text)] sm:text-sm">
        {label}
      </span>
    </m.div>
  );
}

function ProjectGrid({ projects }: { projects: FeaturedProject[] }) {
  return (
    <m.div
      className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:items-stretch md:gap-x-8 md:gap-y-12 lg:gap-x-10"
      variants={staggerContainer(0.1, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </m.div>
  );
}

export default function FeaturedProjects({
  projects = featuredProjects,
}: FeaturedProjectsProps) {
  const webProjects = projects.filter((p) => p.category === "web");
  const appProjects = projects.filter((p) => p.category === "app");

  return (
    <section
      id="projects"
      className="featured-projects relative scroll-mt-28 overflow-hidden py-20 sm:py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <m.header
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.slow, ease: EASE.out }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--project-title)] sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-[var(--project-description)] sm:text-lg">
            A quick peek at some of the projects I&apos;ve loved building.
          </p>
        </m.header>

        <ProjectGrid projects={webProjects} />

        {appProjects.length > 0 && (
          <>
            <CategoryDivider label="App Development" />
            <ProjectGrid projects={appProjects} />
          </>
        )}
      </div>
    </section>
  );
}
