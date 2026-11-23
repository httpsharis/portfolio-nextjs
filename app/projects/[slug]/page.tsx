import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { personalInfo, projects, siteUrl } from "@/config/site-config";
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

  // Social crawlers prefer raster OG images over SVG
  const ogImage = project.image.endsWith(".svg")
    ? "/projects/saldo-app.jpg"
    : project.image;

  return {
    title: `${project.title} — Engineering Case Study`,
    description: `${project.tagline} ${project.desc}`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study | ${personalInfo.brandName}`,
      description: project.desc,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 675,
          alt: `${project.title} Architecture Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Engineering Case Study`,
      description: project.tagline,
      images: [ogImage],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteUrl}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteUrl}/projects/${project.slug}`,
          },
        ],
      },
      {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.desc,
        programmingLanguage: project.tags,
        codeRepository: project.github,
        url: project.link ?? `${siteUrl}/projects/${project.slug}`,
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <main id="main-content" className="relative z-10 flex-1 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono-label text-xs text-[#FF6B4A] hover:text-[#F5F1EA] transition-colors mb-8 group"
        >
          <ArrowLeft
            size={15}
            aria-hidden="true"
            className="transform group-hover:-translate-x-1 transition-transform"
          />
          Back to Selected Work
        </Link>

        {/* Case Study Header */}
        <header className="pb-10 border-b border-[rgba(245,241,234,0.12)] mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <p className="font-mono-label text-xs text-[#56d9d8] tracking-widest uppercase mb-3">
                CASE STUDY · {project.subtitle}
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F1EA] mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-[#e1bfb8] leading-relaxed">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs hover:bg-[#ff856b] transition-colors"
                >
                  Launch Live App
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(245,241,234,0.22)] text-[#F5F1EA] font-mono-label text-xs hover:border-[#FF6B4A] hover:text-[#FF6B4A] transition-colors"
                >
                  <Github size={14} aria-hidden="true" />
                  GitHub Source
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-[rgba(245,241,234,0.08)]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#261815] text-[#F5F1EA] font-mono-label text-xs border border-[rgba(245,241,234,0.12)]"
              >
                <TechIcon name={tag} className="w-3.5 h-3.5 text-[#FF6B4A]" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Visual (LCP candidate) */}
        <div className="relative w-full aspect-[16/9] bg-[#170b09] overflow-hidden border border-[rgba(245,241,234,0.16)] mb-16 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
          <Image
            src={project.image}
            alt={`${project.title} Preview`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>

        {/* Architecture Breakdown */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Compass className="text-[#FF6B4A]" size={22} aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EA] tracking-tight">
              Architecture &amp; Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#261815] border border-[rgba(245,241,234,0.1)]">
              <span className="font-mono-label text-xs text-[#FF6B4A] block mb-3">
                01 / THE PROBLEM
              </span>
              <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                What problem was this solving?
              </h3>
              <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                {project.story.problem}
              </p>
            </div>

            <div className="p-8 bg-[#261815] border border-[rgba(245,241,234,0.1)]">
              <span className="font-mono-label text-xs text-[#56d9d8] block mb-3">
                02 / TECHNICAL CHOICES
              </span>
              <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                Why this specific stack?
              </h3>
              <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                {project.story.techChoices}
              </p>
            </div>

            <div className="p-8 bg-[#170b09] border border-[rgba(245,241,234,0.1)]">
              <span className="font-mono-label text-xs text-[#FF6B4A] block mb-3">
                03 / ARCHITECTURE CALL
              </span>
              <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                Hardest engineering decision
              </h3>
              <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                {project.story.hardestDecision}
              </p>
            </div>

            <div className="p-8 bg-[#170b09] border border-[rgba(245,241,234,0.1)]">
              <span className="font-mono-label text-xs text-[#56d9d8] block mb-3">
                04 / HINDSIGHT
              </span>
              <h3 className="text-xl font-bold text-[#F5F1EA] mb-3">
                What I&apos;d evolve next
              </h3>
              <p className="text-sm md:text-base text-[#e1bfb8] leading-relaxed">
                {project.story.hindsight}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 1 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-[#F5F1EA] mb-8 tracking-tight">
              Interface Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, i) => (
                <div
                  key={imgUrl}
                  className="relative w-full aspect-[16/9] bg-[#170b09] border border-[rgba(245,241,234,0.12)] overflow-hidden"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} Interface ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenges */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-[#FF6B4A]" size={22} aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EA] tracking-tight">
              Key Engineering Challenges
            </h2>
          </div>

          <div className="space-y-6">
            {project.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-8 bg-[#261815] border border-[rgba(245,241,234,0.1)]"
              >
                <h3 className="font-mono-label text-sm text-[#FF6B4A] mb-4">
                  {challenge.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono-label text-[10px] text-[#a88a83] mb-1.5">
                      PROBLEM
                    </p>
                    <p className="text-sm text-[#e1bfb8] leading-relaxed">
                      {challenge.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] text-[#56d9d8] mb-1.5">
                      SOLUTION
                    </p>
                    <p className="text-sm text-[#F5F1EA] leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next / Previous Case Studies */}
        <nav
          aria-label="Case study pagination"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-[rgba(245,241,234,0.12)]"
        >
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-6 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A]/60 transition-colors"
          >
            <span className="font-mono-label text-[10px] text-[#a88a83] flex items-center gap-1.5 mb-2">
              <ArrowLeft size={13} aria-hidden="true" />
              PREVIOUS PROJECT
            </span>
            <p className="text-lg font-bold text-[#F5F1EA]">{prevProject.title}</p>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-6 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A]/60 transition-colors sm:text-right"
          >
            <span className="font-mono-label text-[10px] text-[#a88a83] inline-flex items-center gap-1.5 mb-2">
              NEXT PROJECT
              <ArrowRight size={13} aria-hidden="true" />
            </span>
            <p className="text-lg font-bold text-[#F5F1EA]">{nextProject.title}</p>
          </Link>
        </nav>
      </div>
    </main>
  );
}
