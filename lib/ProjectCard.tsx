import { projects } from "@/config/site-config";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  title,
  desc,
  link,
  tags,
}: (typeof projects)[0]) {
  return (
    <div className="group relative flex flex-col sm:flex-row sm:items-start justify-between gap-6 p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors bg-white dark:bg-transparent">
      {/* Left: Title & Description */}
      <div className="mb-4 sm:mb-0 flex-1">
        <a
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2"
        >
          {title}
          <ExternalLink
            size={14}
            className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200"
          />
        </a>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Right: Tech Stack Tags */}
      <div className="flex gap-2 flex-wrap sm:max-w-[200px] sm:justify-end shrink-0 mt-2 sm:mt-0">
        {tags.map((t, index) => (
          <span
            key={index}
            className="text-xs font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
