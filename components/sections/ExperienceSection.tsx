"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { timelineData } from "@/config/site-config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".timeline-progress-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-container",
              start: "top 75%",
              end: "bottom 65%",
              scrub: 0.6,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".timeline-entry").forEach((entry) => {
          gsap.from(entry, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 85%",
              once: true,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 border-t border-[rgba(245,241,234,0.09)] scroll-mt-24"
    >
      <div className="mb-14">
        <p className="font-mono-label text-[#FF6B4A] mb-3">
          02 / EXPERIENCE &amp; EDUCATION
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F1EA]">
          Industry delivery &amp; foundations.
        </h2>
      </div>

      <div className="timeline-container relative pl-8 md:pl-12">
        {/* Static track + GSAP scrubbed progress spine */}
        <div
          aria-hidden="true"
          className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-[rgba(245,241,234,0.14)]"
        />
        <div
          aria-hidden="true"
          className="timeline-progress-line absolute left-3 md:left-4 top-2 bottom-2 w-px bg-[#FF6B4A] origin-top"
        />

        <div className="space-y-10">
          {timelineData.map((entry) => (
            <div
              key={`${entry.organization}-${entry.period}`}
              className="timeline-entry relative"
            >
              {/* Milestone Node */}
              <div
                aria-hidden="true"
                className="absolute -left-[29px] md:-left-[41px] top-1.5 w-6 h-6 bg-[#1d100e] border border-[#FF6B4A] flex items-center justify-center text-[#FF6B4A]"
              >
                {entry.type === "experience" ? (
                  <Briefcase size={12} />
                ) : (
                  <GraduationCap size={12} />
                )}
              </div>

              <div className="bg-[#261815] border border-[rgba(245,241,234,0.1)] p-7 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1EA] tracking-tight">
                      {entry.role}
                    </h3>
                    <p className="text-sm font-medium text-[#56d9d8] mt-0.5">
                      {entry.organization} · {entry.location}
                    </p>
                  </div>
                  <span className="font-mono-label text-xs text-[#e1bfb8] shrink-0">
                    {entry.period}
                  </span>
                </div>

                <p className="text-sm text-[#e1bfb8] leading-relaxed mb-5">
                  {entry.desc}
                </p>

                <ul className="space-y-2.5">
                  {entry.highlights.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-[#F5F1EA]/90 leading-relaxed flex items-start gap-2.5"
                    >
                      <span
                        className="mt-2 h-1 w-2.5 shrink-0 bg-[#FF6B4A]"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
