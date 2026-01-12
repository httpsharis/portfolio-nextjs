"use client";

import { certificateData } from "@/config/site-config";
import CertificateCard from "@/lib/CertificateCard";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="px-6 md:px-20 mt-20 max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex justify-between items-end mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Certifications
        </h2>
        <span className="hidden sm:block text-sm font-bold uppercase tracking-wider text-neutral-500">
          Achievements
        </span>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificateData.map((cert) => (
          <CertificateCard key={cert.id} {...cert} />
        ))}
      </div>
    </section>
  );
}
