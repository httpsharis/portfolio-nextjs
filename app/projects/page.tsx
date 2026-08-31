"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/config/site-config";
import { ArrowRight, ExternalLink, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { TechIcon } from "@/components/ui/TechIcons";

function ProjectSpotlightCard({
  project,
  idx,
  isHero = false,
}: {
  project: (typeof projects)[0];
  idx: number;
  isHero?: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const colSpanClass = isHero ? "md:col-span-12" : "md:col-span-6";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      className={`${colSpanClass} group relative flex flex-col ${isHero ? "lg:flex-row" : ""} justify-between bg-[#261815] border border-[rgba(245,241,234,0.12)] hover:border-[#FF6B4A]/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.65)]`}
    >
      {/* Specular Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 107, 74, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* Mockup Image Preview */}
      <Link
        href={`/projects/${project.slug}`}
        className={`block relative ${isHero ? "w-full lg:w-3/5 aspect-[16/9]" : "w-full aspect-[16/9]"} bg-[#170b09] overflow-hidden ${isHero ? "lg:border-r border-b lg:border-b-0" : "border-b"} border-[rgba(245,241,234,0.1)]`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={isHero ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          priority={isHero}
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>

        {/* Live Indicator Chip */}
        <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-[#1d100e]/90 backdrop-blur-md border border-[rgba(245,241,234,0.15)] font-mono-label text-[10px] text-[#3EA66D] flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3EA66D] animate-ping"></span>
          LIVE PRODUCTION
        </div>

        {/* Hover slide-up "Explore Case Study →" overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-[#FF6B4A] text-[#1d100e] py-3 px-5 font-mono-label font-bold text-xs uppercase tracking-wider flex items-center justify-between transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-30 shadow-lg">
          <span>Read Full Case Study</span>
          <ArrowRight size={15} />
        </div>
      </Link>

      {/* Content Card */}
      <div className={`relative z-10 p-6 md:p-8 flex flex-col justify-between flex-grow ${isHero ? "lg:w-2/5" : ""}`}>
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, isHero ? 5 : 3).map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0F3D3E]/80 text-[#F5F1EA] font-mono-label text-[11px] rounded-full border border-[#56d9d8]/20"
              >
                <TechIcon name={t} className="w-3 h-3 text-[#FF6B4A]" />
                {t}
              </span>
            ))}
          </div>

          <Link href={`/projects/${project.slug}`} className="group/title block">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F1EA] mb-2 group-hover/title:text-[#FF6B4A] transition-colors">
              {project.title}
            </h2>
          </Link>
          <p className="text-xs font-mono-label text-[#56d9d8] mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-[#e1bfb8] leading-relaxed mb-6">
            {project.desc}
          </p>

          {isHero && project.bullets && (
            <ul className="hidden sm:block space-y-1.5 text-xs text-[#e1bfb8]/90 mb-6">
              {project.bullets.slice(0, 2).map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FF6B4A] font-bold">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[rgba(245,241,234,0.08)] flex items-center justify-between">
          <a
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono-label font-bold text-[#FF6B4A] hover:text-[#F5F1EA] transition-colors"
          >
            Launch Live App <ExternalLink size={14} />
          </a>

          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] transition-colors flex items-center gap-1.5 group/btn"
          >
            Case Study <ArrowRight size={13} className="transform group-hover/btn:translate-x-1 transition-transform text-[#56d9d8]" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filterTabs = ["All", "Full-Stack", "Next.js / React", "Client Work"];

  const filteredProjects = projects.filter((proj) => {
    if (filter === "All") return true;
    if (filter === "Full-Stack") {
      return proj.tags.some((t) => ["MongoDB", "Express.js", "Node.js", "Full-Stack", "REST APIs"].includes(t));
    }
    if (filter === "Next.js / React") {
      return proj.tags.some((t) => ["Next.js", "React.js"].includes(t));
    }
    if (filter === "Client Work") {
      return proj.id === 2 || proj.id === 4; // Haseeb Traders & MZ Cooling
    }
    return true;
  });

  return (
    <main className="pt-32 pb-24 min-h-screen max-w-7xl mx-auto px-6 md:px-12">
      {/* Navigation Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono-label text-xs text-[#FF6B4A] hover:text-[#F5F1EA] transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="transform group-hover:-translate-x-1.5 transition-transform" />
        Back to Home
      </Link>

      {/* Header Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(245,241,234,0.1)]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-label text-xs text-[#FF6B4A] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#3EA66D] animate-pulse"></span>
              PRODUCTION DIRECTORY
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F1EA] uppercase tracking-tighter mb-3">
              Selected Work
            </h1>
            <p className="text-base sm:text-lg text-[#e1bfb8] max-w-2xl leading-relaxed">
              A curated collection of live production platforms, automated invoicing engines, and high-performance client websites.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-[#261815] border border-[rgba(245,241,234,0.1)] shrink-0 font-mono-label">
            <div>
              <div className="text-xs text-[#e1bfb8]">TOTAL BUILDS</div>
              <div className="text-xl font-bold text-[#FF6B4A]">04 Systems</div>
            </div>
            <div>
              <div className="text-xs text-[#e1bfb8]">STATUS</div>
              <div className="text-xl font-bold text-[#3EA66D]">100% Live</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtering Tabs */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-[rgba(245,241,234,0.1)] pb-4">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`font-mono-label text-xs uppercase tracking-widest px-4 py-2 transition-all cursor-pointer rounded-sm ${
              filter === tab
                ? "bg-[#FF6B4A] text-[#1d100e] font-bold shadow-md"
                : "text-[#e1bfb8] hover:text-[#F5F1EA] hover:bg-[#261815]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bento Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isHero = filter === "All" && idx === 0;
            return (
              <ProjectSpotlightCard
                key={project.id}
                project={project}
                idx={idx}
                isHero={isHero}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}



