"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects, type ProjectCategory } from "@/config/site-config";
import { TechIcon } from "@/components/ui/TechIcons";

gsap.registerPlugin(useGSAP);

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Full-Stack",
  "Mobile & AI",
  "Systems",
];

export default function ProjectsArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");
  const containerRef = useRef<HTMLElement>(null);

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".archive-card", {
          y: 26,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      });
      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [selectedCategory] },
  );

  return (
    <main id="main-content" ref={containerRef} className="relative z-10 flex-1 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono-label text-xs text-[#FF6B4A] hover:text-[#F5F1EA] transition-colors mb-8"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back to Home
        </Link>

        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[rgba(245,241,234,0.1)] mb-12">
          <div className="max-w-2xl">
            <p className="font-mono-label text-[#FF6B4A] mb-3">
              ENGINEERING ARCHIVE
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F1EA] mb-4">
              Selected Work.
            </h1>
            <p className="text-base text-[#e1bfb8] leading-relaxed">
              Verified production applications, client portals, mobile ledgers,
              and networked systems with architectural notes and trade-offs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={`px-4 py-2 font-mono-label text-xs border transition-colors cursor-pointer ${
                    active
                      ? "bg-[#FF6B4A] text-[#1d100e] border-[#FF6B4A] font-bold"
                      : "bg-[#261815] text-[#e1bfb8] border-[rgba(245,241,234,0.14)] hover:border-[#FF6B4A]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, idx) => {
            const isHeroCard = idx === 0;
            return (
              <article
                key={project.slug}
                className={`archive-card group flex flex-col justify-between bg-[#261815] border border-[rgba(245,241,234,0.12)] hover:border-[#FF6B4A]/55 transition-colors duration-300 ${
                  isHeroCard && selectedCategory === "All"
                    ? "md:col-span-2 lg:flex-row"
                    : ""
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`block relative bg-[#170b09] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B4A] ${
                    isHeroCard && selectedCategory === "All"
                      ? "w-full lg:w-7/12 aspect-[16/9] border-b lg:border-b-0 lg:border-r border-[rgba(245,241,234,0.1)]"
                      : "w-full aspect-[16/9] border-b border-[rgba(245,241,234,0.1)]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.tagline}`}
                    fill
                    sizes={
                      isHeroCard && selectedCategory === "All"
                        ? "(max-width: 1024px) 100vw, 58vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={isHeroCard}
                    fetchPriority={isHeroCard ? "high" : undefined}
                    loading={isHeroCard ? undefined : "lazy"}
                  />
                </Link>

                <div
                  className={`p-7 flex flex-col justify-between ${
                    isHeroCard && selectedCategory === "All" ? "lg:w-5/12" : "flex-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="font-mono-label text-[11px] text-[#56d9d8]">
                        {project.category}
                      </span>
                      <span className="font-mono-label text-[11px] text-[#a88a83]">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#F5F1EA] tracking-tight mb-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[#FF6B4A] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#e1bfb8] leading-relaxed mb-5">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1d100e] border border-[rgba(245,241,234,0.1)] font-mono-label text-[10px] text-[#e1bfb8]"
                        >
                          <TechIcon name={tag} className="w-3 h-3 text-[#FF6B4A]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-[rgba(245,241,234,0.08)]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono-label text-xs text-[#FF6B4A] hover:text-[#F5F1EA] transition-colors"
                    >
                      Case Study
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono-label text-xs text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors"
                      >
                        Live
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono-label text-xs text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors"
                      >
                        <Github size={13} aria-hidden="true" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
