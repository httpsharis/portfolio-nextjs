"use client";

import { Download, Github, Linkedin } from "lucide-react";
import HeroButton from "@/lib/HeroButton"; // Update this import path if needed
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="mt-14 px-6 md:p-20 max-w-5xl mx-auto">
      {/* 1. Location Badge (Fade In) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full"
      >
        Lahore, Pakistan
      </motion.div>

      {/* 2. Main Heading (Fade In + Delay) */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight text-neutral-900 dark:text-white"
      >
        Hello, I&apos;m Muhammad Haris. <br />
        <span className="text-neutral-500 dark:text-neutral-400">
          MERN Stack Developer.
        </span>
      </motion.h1>

      {/* 3. Description (Fade In + Delay) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8"
      >
        Motivated developer with a strong foundation in frontend and backend
        technologies. Experienced in building responsive web applications using
        React.js, Node.js, and Tailwind CSS. Passionate about creating
        pixel-perfect UI/UX and optimizing application performance.
      </motion.p>

      {/* 4. Buttons (Fade In + Delay) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <HeroButton text="Contact Me" href="#contact" isPrimary={true} />

        <HeroButton
          text="Download CV"
          href="https://drive.google.com/file/d/19m6Yx7Q-UEdsKgvYmiv7dF1sQY5WpOxz/view?usp=sharing"
          icon={Download}
        />
        <HeroButton
          text="Github"
          href="https://github.com/httpsharis"
          icon={Github}
        />
        <HeroButton
          text="LinkedIn"
          href="https://linkedin.com/in/devharis"
          icon={Linkedin}
        />
      </motion.div>
    </section>
  );
}
