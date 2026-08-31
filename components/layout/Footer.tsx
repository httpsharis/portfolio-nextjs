import React from "react";
import { personalInfo } from "@/config/site-config";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#170b09] border-t border-[rgba(245,241,234,0.1)] transition-opacity">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-12 gap-6">
        <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#F5F1EA] uppercase">
          {personalInfo.brandName}
        </span>
        <p className="font-mono-label text-[#e1bfb8] text-xs">
          © 2026 {personalInfo.brandName} — BUILT WITH RIGOR.
        </p>
        <div className="flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] underline decoration-[#FF6B4A]/30 transition-colors duration-300"
          >
            Github
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] underline decoration-[#FF6B4A]/30 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] underline decoration-[#FF6B4A]/30 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

