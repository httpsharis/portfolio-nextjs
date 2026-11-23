"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
      () => {
        gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
        const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

        let visible = false;
        const onMove = (e: PointerEvent) => {
          if (!visible) {
            visible = true;
            gsap.to(el, { opacity: 1, duration: 0.4, ease: "power2.out" });
          }
          xTo(e.clientX);
          yTo(e.clientY);
        };

        const onLeave = () => {
          visible = false;
          gsap.to(el, { opacity: 0, duration: 0.3 });
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        document.addEventListener("mouseleave", onLeave);

        return () => {
          window.removeEventListener("pointermove", onMove);
          document.removeEventListener("mouseleave", onLeave);
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 h-[520px] w-[520px] rounded-full opacity-0 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 107, 74, 0.085) 0%, rgba(86, 217, 216, 0.03) 45%, transparent 72%)",
      }}
    />
  );
}
