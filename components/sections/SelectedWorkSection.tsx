"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/config/site-config";
import { TechIcon } from "@/components/ui/TechIcons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SelectedWorkSection() {
  const featuredProjects = projects.filter((p) => p.isFeatured);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const previewInnerRef = useRef<HTMLDivElement>(null);

  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Scroll-driven card entrance reveals
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".work-header-reveal", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        });

        const cards = gsap.utils.toArray<HTMLElement>(".work-item-card");
        cards.forEach((card) => {
          gsap.from(card, {
            y: 34,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              once: true,
            },
          });
        });
      });

      // Desktop-only sticky preview scroll synchronization
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".work-item-card");
        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 52%",
            end: "bottom 48%",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  // Smooth clip-path wipe when the active desktop preview changes
  useEffect(() => {
    const el = previewInnerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.fromTo(
      el,
      { clipPath: "inset(6% 0% 0% 0%)", opacity: 0.4, scale: 1.03 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        scale: 1,
        duration: 0.55,
        ease: "power3.out",
      },
    );

    return () => {
      tween.kill();
    };
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 border-t border-[rgba(245,241,234,0.09)] scroll-mt-24"
    >
      {/* Section Header */}
      <div className="work-header-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="font-mono-label text-[#FF6B4A] mb-3">
            01 / SELECTED ENGINEERING WORK
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F1EA]">
            Systems shipped to production.
          </h2>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] animated-underline transition-colors self-start md:self-auto"
        >
          All {projects.length} Case Studies
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>

      {/* Split Editorial Showcase: Scrollable Cards Left + Sticky Visual Stage Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6 space-y-6">
          {featuredProjects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={project.slug}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                className={`work-item-card p-7 border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#261815] border-[#FF6B4A]/55"
                    : "bg-[#170b09]/70 border-[rgba(245,241,234,0.1)] hover:border-[rgba(245,241,234,0.24)]"
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono-label text-[11px] text-[#56d9d8]">
                    0{idx + 1} — {project.category}
                  </span>
                  <span className="font-mono-label text-[11px] text-[#a88a83]">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#F5F1EA] mb-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-[#FF6B4A] transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#e1bfb8] leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Mobile inline visual preview */}
                <div className="lg:hidden relative aspect-[16/9] w-full bg-[#170b09] overflow-hidden border border-[rgba(245,241,234,0.1)] mb-5">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="100vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm text-[#e1bfb8]/90 flex items-start gap-2.5"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B4A]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

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

                <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-[rgba(245,241,234,0.08)]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono-label text-xs text-[#FF6B4A] hover:text-[#F5F1EA] transition-colors"
                  >
                    Read Case Study
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono-label text-xs text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors"
                    >
                      Live Site
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
                      Source
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Sticky Desktop Preview Stage */}
        <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
          <div className="bg-[#261815] border border-[rgba(245,241,234,0.14)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono-label text-[11px] text-[#56d9d8]">
                {activeProject.subtitle}
              </span>
              <span className="font-mono-label text-[11px] text-[#a88a83]">
                0{activeIndex + 1} / 0{featuredProjects.length}
              </span>
            </div>

            {/* Focusable link wraps unclipped container; inner ref runs clipPath */}
            <Link
              href={`/projects/${activeProject.slug}`}
              className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B4A]"
              aria-label={`Open ${activeProject.title} case study`}
            >
              <div className="relative aspect-[16/9] w-full bg-[#170b09] overflow-hidden border border-[rgba(245,241,234,0.12)]">
                <div ref={previewInnerRef} className="relative w-full h-full">
                  <Image
                    key={activeProject.slug}
                    src={activeProject.image}
                    alt={`${activeProject.title} architecture preview`}
                    fill
                    sizes="50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-[#F5F1EA]">
                  {activeProject.title}
                </h4>
                <p className="text-xs text-[#e1bfb8] mt-1">
                  {activeProject.tagline}
                </p>
              </div>
              <Link
                href={`/projects/${activeProject.slug}`}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs hover:bg-[#ff856b] transition-colors"
              >
                Inspect
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
