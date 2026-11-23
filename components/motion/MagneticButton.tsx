"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({
  children,
  strength = 8,
  className = "inline-block",
}: MagneticProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
      () => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          xTo(relX * strength * 2);
          yTo(relY * strength * 2);
        };

        const onLeave = () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.55,
            ease: "elastic.out(1, 0.45)",
          });
        };

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);

        return () => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        };
      },
    );

    return () => mm.revert();
  }, [strength]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
