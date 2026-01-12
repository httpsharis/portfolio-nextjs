import { educationData } from "@/config/site-config";
import { GraduationCap, Calendar, Building2 } from "lucide-react";

// 1. SUB-COMPONENT: Single Education Card
// This handles the layout for ONE school
export default function EducationCard({
  degree,
  institution,
  duration,
}: (typeof educationData)[0]) {
  return (
    <div className="relative pl-8 border-l border-neutral-200 dark:border-white/20 pb-12 last:pb-0">
      {/* Timeline Dot */}
      <div className="absolute top-0 -left-1.5 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-neutral-50 dark:ring-neutral-900" />

      {/* Degree Title */}
      <div className="flex items-center gap-2 mb-2">
        <GraduationCap className="text-purple-400" size={20} />
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          {degree}
        </h3>
      </div>

      {/* Institution */}
      <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 mb-2">
        <Building2 size={16} />
        <span className="font-medium">{institution}</span>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <Calendar size={14} />
        <span>{duration}</span>
      </div>
    </div>
  );
}