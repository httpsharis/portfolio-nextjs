"use client";

import { skillsData } from "@/config/site-config"; // Check path
import SkillCard from "@/lib/SkillCard";

// 2. MAIN COMPONENT: The Loop
export default function Skills() {
  return (
    <section id="stack" className="px-6 md:px-20 mt-20 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Technical Skills
        </h2>
        <span className="hidden sm:block text-sm font-bold uppercase tracking-wider text-neutral-500">
          My Stack
        </span>
      </div>

      {/* The Grid Loop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <SkillCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
