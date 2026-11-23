"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { personalInfo, projects } from "@/config/site-config";
import { Magnetic } from "@/components/motion/MagneticButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tiltCardRef = useRef<HTMLDivElement>(null);
  const featured = projects[0]; // Saldo — LCP hero visual

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hero-eyebrow", {
          y: 18,
          opacity: 0,
          duration: 0.6,
        })
          .from(
            ".hero-line-inner",
            {
              yPercent: 112,
              duration: 0.9,
              stagger: 0.09,
            },
            "-=0.35",
          )
          .from(
            ".hero-fade",
            {
              y: 22,
              opacity: 0,
              duration: 0.7,
              stagger: 0.08,
            },
            "-=0.45",
          )
          .from(
            ".hero-visual-mask",
            {
              clipPath: "inset(0% 0% 100% 0%)",
              scale: 1.04,
              duration: 1.0,
              ease: "power3.out",
            },
            "-=0.7",
          );

        // Subtle scroll-scrubbed editorial parallax
        gsap.to(".hero-parallax", {
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      // GPU-composited 3D perspective tilt on hero preview (0 React re-renders)
      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
        const card = tiltCardRef.current;
        if (!card) return;

        const rxTo = gsap.quickTo(card, "rotationX", {
          duration: 0.45,
          ease: "power3.out",
        });
        const ryTo = gsap.quickTo(card, "rotationY", {
          duration: 0.45,
          ease: "power3.out",
        });

        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          rxTo(-relY * 8);
          ryTo(relX * 10);
        };

        const onLeave = () => {
          rxTo(0);
          ryTo(0);
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);

        return () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 md:pb-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left: Editorial Copy */}
        <div className="lg:col-span-7 hero-parallax">
          <p className="hero-eyebrow font-mono-label text-[#FF6B4A] mb-6 tracking-[0.14em]">
            {personalInfo.eyebrow}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#F5F1EA] mb-7">
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner block">
                {personalInfo.headlineTop}
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner block text-[#FF6B4A]">
                {personalInfo.headlineAccent}
              </span>
            </span>
          </h1>

          <p className="hero-fade text-base sm:text-lg text-[#e1bfb8] max-w-2xl leading-relaxed mb-9">
            {personalInfo.summary}
          </p>

          {/* Primary CTAs */}
          <div className="hero-fade flex flex-wrap items-center gap-4 mb-10">
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold hover:bg-[#ff856b] transition-colors duration-200"
              >
                Explore Work
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(245,241,234,0.22)] text-[#F5F1EA] font-mono-label hover:border-[#FF6B4A] hover:text-[#FF6B4A] transition-colors duration-200"
              >
                <FileText size={14} aria-hidden="true" />
                1-Page Resume
              </a>
            </Magnetic>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-3 font-mono-label text-[#e1bfb8] hover:text-[#F5F1EA] animated-underline transition-colors"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Grounded Proof Strip */}
          <div className="hero-fade grid grid-cols-3 gap-6 pt-7 border-t border-[rgba(245,241,234,0.1)] max-w-xl">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F1EA]">
                4 Devs
              </p>
              <p className="font-mono-label text-[10px] text-[#a88a83] mt-1">
                Squad Led at DevLogix
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F1EA]">
                2 SWE
              </p>
              <p className="font-mono-label text-[10px] text-[#a88a83] mt-1">
                Production Internships
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F1EA]">
                9 Suites
              </p>
              <p className="font-mono-label text-[10px] text-[#a88a83] mt-1">
                Unit &amp; SQL RLS Tests
              </p>
            </div>
          </div>
        </div>

        {/* Right: Featured LCP Case Study Visual */}
        <div className="lg:col-span-5" style={{ perspective: "1100px" }}>
          <Link
            href={`/projects/${featured.slug}`}
            className="block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B4A] group"
            aria-label={`View ${featured.title} case study`}
          >
            <div
              ref={tiltCardRef}
              className="bg-[#261815] border border-[rgba(245,241,234,0.14)] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.65)] will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="hero-visual-mask relative aspect-[16/10] w-full bg-[#170b09] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={`${featured.title} — ${featured.tagline}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                  fetchPriority="high"
                />
              </div>

              <div className="p-6 border-t border-[rgba(245,241,234,0.09)] flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono-label text-[10px] text-[#56d9d8] mb-1.5">
                    FEATURED ENGINEERING — {featured.year}
                  </p>
                  <h2 className="text-xl font-bold text-[#F5F1EA] tracking-tight group-hover:text-[#FF6B4A] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-xs text-[#e1bfb8] mt-1 line-clamp-2">
                    {featured.tagline}
                  </p>
                </div>
                <span className="shrink-0 w-9 h-9 border border-[rgba(245,241,234,0.16)] flex items-center justify-center text-[#F5F1EA] group-hover:bg-[#FF6B4A] group-hover:text-[#1d100e] group-hover:border-[#FF6B4A] transition-colors">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
