"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Pause, Play } from "lucide-react";
import { coreStack } from "@/config/site-config";
import { TechIcon } from "@/components/ui/TechIcons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function TechMarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1TweenRef = useRef<gsap.core.Tween | null>(null);
  const row2TweenRef = useRef<gsap.core.Tween | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const firstRow = coreStack.slice(0, 8);
  const secondRow = coreStack.slice(8);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const t1 = gsap.to(".marquee-track-1", {
          xPercent: -50,
          duration: 30,
          ease: "none",
          repeat: -1,
        });

        const t2 = gsap.fromTo(
          ".marquee-track-2",
          { xPercent: -50 },
          {
            xPercent: 0,
            duration: 34,
            ease: "none",
            repeat: -1,
          },
        );

        row1TweenRef.current = t1;
        row2TweenRef.current = t2;

        // Subtle velocity boost on scroll without jerky reversals
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            if (t1.paused()) return;
            const boost = Math.min(Math.abs(self.getVelocity()) / 1200, 1.6);
            gsap.to([t1, t2], {
              timeScale: 1 + boost,
              duration: 0.35,
              overwrite: true,
              onComplete: () => {
                if (!t1.paused()) {
                  gsap.to([t1, t2], { timeScale: 1, duration: 0.6 });
                }
              },
            });
          },
        });

        return () => {
          t1.kill();
          t2.kill();
          row1TweenRef.current = null;
          row2TweenRef.current = null;
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const togglePlayback = () => {
    const nextPaused = !isPaused;
    setIsPaused(nextPaused);
    const tweens = [row1TweenRef.current, row2TweenRef.current].filter(
      (t): t is gsap.core.Tween => t !== null,
    );
    gsap.killTweensOf(tweens);
    tweens.forEach((t) => {
      t.timeScale(1);
      t.paused(nextPaused);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 border-t border-[rgba(245,241,234,0.09)] scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-mono-label text-[#FF6B4A] mb-3">
            03 / TECHNICAL STACK
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F1EA]">
            Tools used in production.
          </h2>
        </div>

        {/* WCAG 2.2.2 Pause/Play control — label toggles without aria-pressed */}
        <button
          type="button"
          onClick={togglePlayback}
          className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 border border-[rgba(245,241,234,0.18)] text-[#e1bfb8] hover:text-[#F5F1EA] hover:border-[#FF6B4A] font-mono-label text-xs transition-colors"
        >
          {isPaused ? (
            <>
              <Play size={13} aria-hidden="true" />
              Play ticker
            </>
          ) : (
            <>
              <Pause size={13} aria-hidden="true" />
              Pause ticker
            </>
          )}
        </button>
      </div>

      {/* Motion-enabled velocity marquee (falls back to clean static grid on reduced motion) */}
      <div className="space-y-4 overflow-hidden motion-reduce:hidden">
        <div className="flex w-max marquee-track-1 will-change-transform">
          {[...firstRow, ...firstRow].map((item, idx) => (
            <div
              key={`r1-${item.name}-${idx}`}
              aria-hidden={idx >= firstRow.length ? true : undefined}
              className="mr-4 flex items-center gap-3 px-6 py-4 bg-[#261815] border border-[rgba(245,241,234,0.1)] shrink-0"
            >
              <TechIcon name={item.name} className="w-5 h-5 text-[#FF6B4A]" />
              <div>
                <p className="text-sm font-bold text-[#F5F1EA]">{item.name}</p>
                <p className="font-mono-label text-[10px] text-[#a88a83]">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-max marquee-track-2 will-change-transform">
          {[...secondRow, ...secondRow].map((item, idx) => (
            <div
              key={`r2-${item.name}-${idx}`}
              aria-hidden={idx >= secondRow.length ? true : undefined}
              className="mr-4 flex items-center gap-3 px-6 py-4 bg-[#170b09] border border-[rgba(245,241,234,0.1)] shrink-0"
            >
              <TechIcon name={item.name} className="w-5 h-5 text-[#56d9d8]" />
              <div>
                <p className="text-sm font-bold text-[#F5F1EA]">{item.name}</p>
                <p className="font-mono-label text-[10px] text-[#a88a83]">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static reduced-motion grid */}
      <div className="hidden motion-reduce:grid grid-cols-2 sm:grid-cols-4 gap-4">
        {coreStack.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 px-5 py-4 bg-[#261815] border border-[rgba(245,241,234,0.1)]"
          >
            <TechIcon name={item.name} className="w-5 h-5 text-[#FF6B4A]" />
            <div>
              <p className="text-sm font-bold text-[#F5F1EA]">{item.name}</p>
              <p className="font-mono-label text-[10px] text-[#a88a83]">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
