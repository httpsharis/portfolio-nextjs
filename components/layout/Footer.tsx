import React from "react";
import Link from "next/link";
import { personalInfo } from "@/config/site-config";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-12 bg-[#170b09] border-t border-[rgba(245,241,234,0.1)]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-12 gap-6">
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-[#F5F1EA] hover:text-[#FF6B4A] transition-colors uppercase"
        >
          {personalInfo.brandName}
        </Link>
        <p className="font-mono-label text-[#a88a83] text-xs text-center">
          © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} — {personalInfo.location.toUpperCase()}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] animated-underline transition-colors duration-200"
          >
            Resume
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] animated-underline transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] animated-underline transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono-label text-[#e1bfb8] hover:text-[#FF6B4A] animated-underline transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
