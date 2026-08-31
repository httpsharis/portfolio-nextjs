import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/config/site-config";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Lightbulb, Compass } from "lucide-react";
import { TechIcon } from "@/components/ui/TechIcons";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | HARIS.DEV`,
    description: project.desc,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono-label text-xs text-[#FF6B4A] hover:text-[#F5F1EA] transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Selected Work
        </Link>

        {/* 1. Case Study Header */}
        <header className="pb-10 border-b border-[rgba(245,241,234,0.12)] mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono-label text-xs text-[#FF6B4A] tracking-widest uppercase mb-3">
                <span>CASE STUDY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#56d9d8]"></span>
                <span className="text-[#56d9d8]">{project.subtitle}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#F5F1EA] mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-[#e1bfb8] leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs uppercase tracking-wider hover:bg-[#ff856b] transition-all shadow-lg group"
              >
                Launch Live App
                <ExternalLink size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(245,241,234,0.2)] text-[#F5F1EA] font-mono-label text-xs uppercase tracking-wider hover:bg-[#261815] transition-all"
                >
                  GitHub Source <Github size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Chips with SVG Icons */}
          <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-[rgba(245,241,234,0.06)]">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#261815] text-[#F5F1EA] font-mono-label text-xs border border-[rgba(245,241,234,0.12)] shadow-sm"
              >
                <TechIcon name={tag} className="w-3.5 h-3.5 text-[#FF6B4A]" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 2. Main Screenshot Hero (Consistent 16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-[16/9] bg-[#170b09] overflow-hidden border border-[rgba(245,241,234,0.18)] mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <Image
            src={project.image}
            alt={`${project.title} Preview`}
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* 3. The Story Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Compass className="text-[#FF6B4A]" size={24} />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EA] tracking-tight uppercase">
              The Story
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="p-8 bg-[#261815] border border-[rgba(245,241,234,0.1)] flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-xs text-[#FF6B4A] block mb-3 tracking-widest">
                  01 / THE PROBLEM
                </span>
                <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                  What problem was this solving?
                </h3>
                <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                  {project.story.problem}
                </p>
              </div>
            </div>

            {/* Tech Choices */}
            <div className="p-8 bg-[#261815] border border-[rgba(245,241,234,0.1)] flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-xs text-[#56d9d8] block mb-3 tracking-widest">
                  02 / TECHNICAL CHOICES
                </span>
                <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                  Why this specific stack?
                </h3>
                <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                  {project.story.techChoices}
                </p>
              </div>
            </div>

            {/* Hardest Technical Decision */}
            <div className="p-8 bg-[#170b09] border border-[rgba(245,241,234,0.1)] flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-xs text-[#FF6B4A] block mb-3 tracking-widest">
                  03 / ARCHITECTURE CALL
                </span>
                <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                  Hardest technical decision made
                </h3>
                <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                  {project.story.hardestDecision}
                </p>
              </div>
            </div>

            {/* Hindsight & Learnings */}
            <div className="p-8 bg-[#170b09] border border-[rgba(245,241,234,0.1)] flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-xs text-[#56d9d8] block mb-3 tracking-widest">
                  04 / HINDSIGHT
                </span>
                <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                  What would be done differently now?
                </h3>
                <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                  {project.story.hindsight}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Screenshot Gallery (If multiple gallery items exist) */}
        {project.gallery.length > 1 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-[#F5F1EA] mb-8 uppercase tracking-tight">
              Interface Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[16/9] bg-[#170b09] border border-[rgba(245,241,234,0.12)] overflow-hidden shadow-xl"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} Interface ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Challenges & Learnings (Numbered Format) */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-[#FF6B4A]" size={24} />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EA] tracking-tight uppercase">
              Key Engineering Challenges &amp; Solutions
            </h2>
          </div>

          <div className="space-y-6">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A]/40 transition-colors"
              >
                <h3 className="text-xl font-bold text-[#F5F1EA] mb-4 flex items-center gap-3">
                  <span className="font-mono-label text-sm text-[#FF6B4A]">{challenge.title}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-1">
                    <span className="font-mono-label text-[11px] text-[#e1bfb8] uppercase block">
                      The Challenge
                    </span>
                    <p className="text-sm text-[#e1bfb8] leading-relaxed">
                      {challenge.problem}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono-label text-[11px] text-[#56d9d8] uppercase block">
                      The Architectural Solution
                    </span>
                    <p className="text-sm text-[#F5F1EA] leading-relaxed font-medium">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Footer Navigation (Previous / All / Next) */}
        <nav className="pt-12 border-t border-[rgba(245,241,234,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 text-sm font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] transition-colors group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1.5 transition-transform" />
            <span>PREV: {prevProject.title}</span>
          </Link>

          <Link
            href="/projects"
            className="px-6 py-2.5 bg-[#0F3D3E] text-[#F5F1EA] font-mono-label text-xs uppercase tracking-widest hover:bg-[#FF6B4A] hover:text-[#1d100e] transition-all"
          >
            All Projects
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 text-sm font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] transition-colors group"
          >
            <span>NEXT: {nextProject.title}</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
