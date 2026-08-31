"use client";

import Link from "next/link";
import React, { useState } from "react";
import { personalInfo } from "@/config/site-config";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1d100e]/90 backdrop-blur-md border-b border-[rgba(245,241,234,0.1)] transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-20">
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#F5F1EA] hover:text-[#FF6B4A] transition-colors duration-300 uppercase"
        >
          {personalInfo.brandName}
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link 
            href="/#about" 
            className="text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors duration-200 font-mono-label animated-underline"
          >
            About
          </Link>
          <Link 
            href="/#experience" 
            className="text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors duration-200 font-mono-label animated-underline"
          >
            Experience
          </Link>
          <Link 
            href="/projects" 
            className="text-[#e1bfb8] hover:text-[#FF6B4A] transition-colors duration-200 font-mono-label animated-underline"
          >
            Projects
          </Link>
          <Link 
            href="/#stack" 
            className="text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors duration-200 font-mono-label animated-underline"
          >
            Stack
          </Link>
          <Link 
            href="/#contact" 
            className="text-[#e1bfb8] hover:text-[#F5F1EA] transition-colors duration-200 font-mono-label animated-underline"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/#contact" 
            className="inline-block px-6 py-2.5 border border-[rgba(245,241,234,0.2)] text-[#F5F1EA] font-mono-label hover:bg-[#FF6B4A] hover:text-[#1d100e] hover:border-[#FF6B4A] transition-all duration-300 shadow-sm"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F1EA] hover:text-[#FF6B4A] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1d100e] border-b border-[rgba(245,241,234,0.1)] px-6 py-6 flex flex-col gap-4">
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            href="/#about" 
            className="text-[#e1bfb8] hover:text-[#FF6B4A] font-mono-label py-2"
          >
            About
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            href="/#experience" 
            className="text-[#e1bfb8] hover:text-[#FF6B4A] font-mono-label py-2"
          >
            Experience
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            href="/projects" 
            className="text-[#e1bfb8] hover:text-[#FF6B4A] font-mono-label py-2"
          >
            Projects
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            href="/#stack" 
            className="text-[#e1bfb8] hover:text-[#FF6B4A] font-mono-label py-2"
          >
            Stack
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            href="/#contact" 
            className="text-[#e1bfb8] hover:text-[#FF6B4A] font-mono-label py-2"
          >
            Contact
          </Link>
          <Link 
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center px-4 py-3 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}



