import { expData } from "@/config/site-config";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceCard({
  title,
  company,
  location,
  duration,
  duties,
}: (typeof expData)[0]) {
  return (
    <div className="relative pl-8 border-l border-neutral-200 dark:border-white/20 pb-12 last:pb-0">
      {/* Timeline Dot */}
      <div className="absolute top-0 -left-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-neutral-50 dark:ring-neutral-900" />

      {/* Header: Role & Company */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-xl font-bold dark:text-white text-neutral-900">
          {title}
        </h3>
        <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
          {company}
        </span>
      </div>

      {/* Meta Info: Date & Location */}
      <div className="flex flex-wrap gap-4 text-sm text-neutral-400 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          {duration}
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          {location}
        </div>
      </div>

      {/* Duties List */}
      <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-300">
        {duties.map((duty, index) => (
          <li
            key={index}
            className="pl-1 text-neutral-600 dark:text-neutral-300"
          >
            {duty}
          </li>
        ))}
      </ul>
    </div>
  );
}