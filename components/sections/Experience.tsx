"use client";

import { expData } from "@/config/site-config"; // Make sure path matches your file
import ExperienceCard from "@/lib/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 mt-20 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12 border-b border-neutral-100 dark:border-neutral-800 pb-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Experience
        </h2>
        <span className="hidden sm:block text-sm font-bold uppercase tracking-wider text-neutral-500">
          Career Path
        </span>
      </div>

      {/* The Loop */}
      <div className="space-y-0">
        {expData.map((item) => (
          <ExperienceCard
            key={item.id}
            {...item} // Passes title, company, etc. automatically
          />
        ))}
      </div>
    </section>
  );
}
