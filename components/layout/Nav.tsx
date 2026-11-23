"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { personalInfo } from "@/config/site-config";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Archive" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#1d100e]/92 backdrop-blur-md border-b border-[rgba(245,241,234,0.12)]"
          : "bg-[#1d100e]/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-20"
      >
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-[#F5F1EA] hover:text-[#FF6B4A] transition-colors duration-200 uppercase"
        >
          {personalInfo.brandName}
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors duration-200 font-mono-label animated-underline"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-[rgba(245,241,234,0.22)] text-[#F5F1EA] font-mono-label hover:bg-[#FF6B4A] hover:text-[#1d100e] hover:border-[#FF6B4A] transition-colors duration-200"
          >
            Resume PDF
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 text-[#F5F1EA] hover:text-[#FF6B4A] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#170b09] border-b border-[rgba(245,241,234,0.12)] px-6 py-6 flex flex-col gap-3"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              onClick={() => setMobileMenuOpen(false)}
              href={item.href}
              className="text-[#e1bfb8] hover:text-[#FF6B4A] font-mono-label py-2"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold"
          >
            Resume PDF
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
