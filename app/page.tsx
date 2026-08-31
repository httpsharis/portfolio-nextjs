"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo, projects, timelineData, coreStack } from "@/config/site-config";
import { ArrowRight, Mail, Linkedin, Phone, CheckCircle2, ExternalLink, GraduationCap, Briefcase } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, Variants } from "framer-motion";
import { TechIcon } from "@/components/ui/TechIcons";

// --- Staggered Skew Headline Variants ---
const lineContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const lineChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    skewY: 3.5,
    rotate: -1,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    rotate: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Staggered Pill Container Variants ---
const pillContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const pillChildVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

// --- 1. Interactive 3D Tilt Mockup with Curtain Wipe & Specular Glare ---
function TiltLaptopMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-11deg", "11deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000 w-full py-4">
      {/* Curtain Wipe Reveal Container */}
      <motion.div
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.3 }}
          className="relative w-full aspect-[16/9] bg-[#170b09] rounded-md overflow-hidden border border-[rgba(245,241,234,0.18)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer group"
        >
          <Link href="/projects/writely" className="block w-full h-full relative">
            <Image
              src="/projects/writely-laptop.png"
              alt="Writely Live Writing Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />

            {/* Specular Glare */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: useMotionTemplate`radial-gradient(500px circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.12), transparent 70%)`,
              }}
            />

            {/* Live Indicator */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#1d100e]/85 backdrop-blur-md border border-[rgba(245,241,234,0.15)] font-mono-label text-[10px] text-[#56d9d8] flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3EA66D] animate-ping"></span>
              LIVE WORKSPACE
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

// --- 2. Spotlight Bento Card Component ---
function SpotlightCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-sm border border-[rgba(245,241,234,0.1)] bg-[#261815] p-8 transition-all duration-300 hover:border-[#FF6B4A]/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 107, 74, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </motion.div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <main className="relative pt-32 pb-24 min-h-screen overflow-hidden">
      {/* Background Interactive Ambient Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 opacity-20"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 74, 0.07), transparent 80%)`,
        }}
      />

      {/* 1. Hero Section with Line-by-Line Skew Stagger */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="max-w-4xl">
          {/* Pulsing Status Chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#261815] border border-[rgba(245,241,234,0.14)] font-mono-label text-xs text-[#FF6B4A] mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3EA66D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3EA66D]"></span>
            </span>
            {personalInfo.statusText}
          </motion.div>

          {/* Kinetic Skew Headline */}
          <motion.div
            variants={lineContainerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden mb-8"
          >
            <motion.div variants={lineChildVariants} className="origin-bottom-left">
              <h1 className="text-4xl sm:text-6xl md:text-[80px] font-extrabold tracking-tighter leading-[0.95] text-[#F5F1EA]">
                Senior Full-Stack Architect.
              </h1>
            </motion.div>
            <motion.div variants={lineChildVariants} className="origin-bottom-left mt-2">
              <span className="text-4xl sm:text-6xl md:text-[80px] font-extrabold tracking-tighter leading-[0.95] text-[#FF6B4A]">
                Building scalable digital foundations.
              </span>
            </motion.div>
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs uppercase tracking-wider hover:bg-[#ff856b] transition-all shadow-lg hover:shadow-xl group"
            >
              Explore All Projects ({projects.length})
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(245,241,234,0.25)] text-[#F5F1EA] font-mono-label text-xs uppercase tracking-wider hover:bg-[#261815] transition-all"
            >
              Start A Conversation
            </a>
          </div>
        </div>
      </section>

      {/* 2. Featured Work Section (With Curtain Wipe & 3D Tilt) */}
      <motion.section
        id="featured"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-[#0F3D3E] py-20 mb-16 border-y border-[rgba(245,241,234,0.1)] shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono-label text-[#FF6B4A] tracking-widest text-xs">
                  FEATURED WORK — 01
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#56d9d8]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-[#F5F1EA] mb-3">
                Writely
              </h2>
              <p className="text-xs font-mono-label text-[#56d9d8] mb-4">
                Author&apos;s Writing Studio &amp; Manuscript Engine (Live)
              </p>
              <p className="text-base text-[#e1bfb8] leading-relaxed mb-6">
                A distraction-free manuscript editor designed for long-form writers. Features structured chapter management, character cast notes, real-time word counting, and auto-saving.
              </p>

              {/* Interactive Magnetic Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "Tailwind CSS"].map((t, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#170b09]/80 text-[#F5F1EA] font-mono-label text-[11px] border border-[rgba(245,241,234,0.15)] shadow-sm cursor-default"
                  >
                    <TechIcon name={t} className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://writely-rho.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs uppercase tracking-wider hover:bg-[#ff856b] transition-all shadow-lg group"
                >
                  Launch Live App
                  <ExternalLink size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <Link
                  href="/projects/writely"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(245,241,234,0.25)] text-[#F5F1EA] font-mono-label text-xs uppercase tracking-wider hover:bg-[#170b09]/70 transition-all group"
                >
                  Read Case Study
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform text-[#56d9d8]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Interactive 3D Laptop Mockup with Curtain Wipe */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <TiltLaptopMockup />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Prominent Visual Gateway to All Projects */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 bg-[#261815] border border-[rgba(245,241,234,0.12)] hover:border-[#FF6B4A]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden group"
        >
          <div className="relative z-10 max-w-xl">
            <span className="font-mono-label text-xs text-[#FF6B4A] tracking-widest uppercase block mb-2">
              Full Portfolio Showcase
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EA] tracking-tight mb-2">
              Explore All {projects.length} Production Projects
            </h3>
            <p className="text-sm text-[#e1bfb8] leading-relaxed">
              Browse deep-dive architectural case studies covering custom invoicing platforms, e-commerce engines, and industrial corporate transformations.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs uppercase tracking-widest hover:bg-[#ff856b] transition-all shadow-lg group-hover:shadow-2xl"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#FF6B4A]/10 blur-3xl pointer-events-none group-hover:bg-[#FF6B4A]/20 transition-all duration-700"></div>
        </motion.div>
      </div>

      {/* 3. Experience & Education Timeline Section */}
      <section id="experience" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="flex items-center justify-between mb-12 border-b border-[rgba(245,241,234,0.1)] pb-4">
          <div>
            <span className="font-mono-label text-xs text-[#FF6B4A] tracking-widest uppercase block mb-1">
              Career Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1EA] tracking-tight">
              Experience &amp; Education
            </h2>
          </div>
          <span className="font-mono-label text-xs text-[#56d9d8] hidden sm:block">
            2023 – PRESENT
          </span>
        </div>

        <div className="relative pl-6 md:pl-10 border-l-2 border-[rgba(15,61,62,0.8)] space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Glowing Node Dot */}
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#1d100e] border-2 border-[#FF6B4A] group-hover:bg-[#FF6B4A] group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(255,107,74,0.4)]" />

              <div className="p-6 md:p-8 bg-[#261815] border border-[rgba(245,241,234,0.1)] rounded-sm hover:border-[#FF6B4A]/50 transition-all hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    {item.type === "education" ? (
                      <GraduationCap size={18} className="text-[#56d9d8]" />
                    ) : (
                      <Briefcase size={18} className="text-[#FF6B4A]" />
                    )}
                    <h3 className="text-xl font-bold text-[#F5F1EA]">
                      {item.role}
                    </h3>
                  </div>
                  <span className="font-mono-label text-xs px-2.5 py-1 bg-[#0F3D3E] text-[#56d9d8] self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <div className="font-mono-label text-xs text-[#e1bfb8] mb-4">
                  {item.organization} • {item.location}
                </div>

                <p className="text-sm text-[#e1bfb8] leading-relaxed mb-4">
                  {item.desc}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-[#e1bfb8]/90">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#FF6B4A] font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Rebalanced Bento Grid: About (58%) vs Stack + Connect (42% Stacked) */}
      <section id="stack" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: About Card (~58% / 7 Cols) */}
          <SpotlightCard delay={0.0} className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-mono-label text-[#FF6B4A] mb-4 block tracking-widest text-xs">
                About Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F1EA] mb-6">
                {personalInfo.aboutTitle}
              </h3>
              <p className="text-[#e1bfb8] text-base leading-relaxed whitespace-pre-line mb-6">
                {personalInfo.aboutLong}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[rgba(245,241,234,0.08)] mt-auto">
              <div>
                <div className="font-mono-label text-xs text-[#FF6B4A] font-bold text-xl">3+ Yrs</div>
                <div className="text-xs text-[#e1bfb8]">Full-Stack Experience</div>
              </div>
              <div>
                <div className="font-mono-label text-xs text-[#56d9d8] font-bold text-xl">100%</div>
                <div className="text-xs text-[#e1bfb8]">Live Client Delivery</div>
              </div>
              <div>
                <div className="font-mono-label text-xs text-[#F5F1EA] font-bold text-xl">&lt; 1.0s</div>
                <div className="text-xs text-[#e1bfb8]">Performance Target</div>
              </div>
            </div>
          </SpotlightCard>

          {/* Right: Stacked Column (5 Cols) with Core Stack & Connect */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Core Stack Card with Scale-Bounce Stagger & SVG Icons */}
            <SpotlightCard delay={0.1}>
              <div>
                <span className="font-mono-label text-[#FF6B4A] mb-3 block tracking-widest text-xs">
                  Core Stack
                </span>
                <h3 className="text-2xl font-bold text-[#F5F1EA] mb-4">
                  Built with precision.
                </h3>
              </div>

              {/* Staggered Pills */}
              <motion.div
                variants={pillContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5 pt-2"
              >
                {coreStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={pillChildVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0F3D3E]/80 text-[#F5F1EA] font-mono-label text-xs rounded-full border border-[#56d9d8]/30 hover:border-[#FF6B4A] transition-colors cursor-default shadow-sm"
                  >
                    <TechIcon name={tech.name} className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </SpotlightCard>

            {/* Connect Card with Interactive Clickable Mini-Cards */}
            <SpotlightCard delay={0.2} className="bg-[#170b09]">
              <div>
                <span className="font-mono-label text-[#FF6B4A] mb-3 block tracking-widest text-xs">
                  Connect
                </span>
                <h3 className="text-2xl font-bold text-[#F5F1EA] mb-2">
                  Let&apos;s build.
                </h3>
                <p className="text-xs text-[#e1bfb8] mb-4">
                  Open to client engagements &amp; remote full-stack roles.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-[#FF6B4A]" />
                    <span className="font-mono-label text-xs text-[#F5F1EA] group-hover:text-[#FF6B4A] transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                  <ArrowRight size={13} className="text-[#e1bfb8] group-hover:text-[#FF6B4A] transform group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin size={15} className="text-[#FF6B4A]" />
                    <span className="font-mono-label text-xs text-[#F5F1EA] group-hover:text-[#FF6B4A] transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ExternalLink size={13} className="text-[#e1bfb8] group-hover:text-[#FF6B4A] transition-colors" />
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-3 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#FF6B4A]" />
                    <span className="font-mono-label text-xs text-[#F5F1EA] group-hover:text-[#FF6B4A] transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                  <span className="font-mono-label text-[10px] text-[#56d9d8]">Direct</span>
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 5. Contact Form Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 pt-16 border-t border-[rgba(245,241,234,0.1)]"
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F1EA] mb-3 tracking-tight">
            Start a conversation
          </h2>
          <p className="text-base text-[#e1bfb8]">
            Tell me about your project or technical requirements.
          </p>
        </div>

        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-[#261815] border border-[#3EA66D] text-center"
          >
            <CheckCircle2 size={40} className="text-[#3EA66D] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#F5F1EA] mb-2">Message Sent!</h3>
            <p className="text-[#e1bfb8] text-sm mb-4">
              Thanks {formData.name}. I&apos;ll get back to you at {formData.email} soon.
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: "", email: "", project: "" });
              }}
              className="font-mono-label text-xs text-[#FF6B4A] underline cursor-pointer"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label
                  htmlFor="name"
                  className="font-mono-label text-xs text-[#e1bfb8] block mb-2 transition-colors group-focus-within:text-[#FF6B4A]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Muhammad Haris"
                  className="w-full bg-transparent border-0 border-b border-[rgba(15,61,62,0.8)] text-[#F5F1EA] py-2 px-0 focus:ring-0 focus:border-[#FF6B4A] transition-colors outline-none placeholder:text-[#a88a83]/60"
                />
              </div>

              <div className="relative group">
                <label
                  htmlFor="email"
                  className="font-mono-label text-xs text-[#e1bfb8] block mb-2 transition-colors group-focus-within:text-[#FF6B4A]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="itsharis.dev@gmail.com"
                  className="w-full bg-transparent border-0 border-b border-[rgba(15,61,62,0.8)] text-[#F5F1EA] py-2 px-0 focus:ring-0 focus:border-[#FF6B4A] transition-colors outline-none placeholder:text-[#a88a83]/60"
                />
              </div>
            </div>

            <div className="relative group">
              <label
                htmlFor="project"
                className="font-mono-label text-xs text-[#e1bfb8] block mb-2 transition-colors group-focus-within:text-[#FF6B4A]"
              >
                Project Details
              </label>
              <textarea
                id="project"
                rows={4}
                required
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                placeholder="Briefly describe your requirements..."
                className="w-full bg-transparent border-0 border-b border-[rgba(15,61,62,0.8)] text-[#F5F1EA] py-2 px-0 focus:ring-0 focus:border-[#FF6B4A] transition-colors resize-none outline-none placeholder:text-[#a88a83]/60"
              />
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-[#ff856b] transition-all w-full md:w-auto cursor-pointer shadow-lg hover:shadow-xl"
              >
                Send Inquiry
              </motion.button>
            </div>
          </form>
        )}
      </motion.section>
    </main>
  );
}




