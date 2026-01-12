"use client";

import { educationData } from "@/config/site-config";
import EducationCard from "@/lib/EducationCard";

// 2. MAIN COMPONENT: The Section Loop
export default function Education() {
  return (
    <section id="education" className="px-6 md:px-20 mt-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-12 border-b border-neutral-100 dark:border-neutral-800 pb-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Education
        </h2>
        <span className="hidden sm:block text-sm font-bold uppercase tracking-wider text-neutral-500">
          Academic Background
        </span>
      </div>

      {/* The Loop */}
      <div className="space-y-0">
        {educationData.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
