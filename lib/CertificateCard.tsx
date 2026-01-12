import { certificateData } from "@/config/site-config"; // Check path
import { Award, ExternalLink, Calendar } from "lucide-react";

// 1. SUB-COMPONENT: Single Certificate Card
export default function CertificateCard({
  title,
  issuer,
  date,
  link,
}: (typeof certificateData)[0]) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
    >
      <div>
        {/* Header Icon + External Link Arrow */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-600 dark:text-yellow-400">
            <Award size={24} />
          </div>
          <ExternalLink
            size={18}
            className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Issuer */}
        <p className="text-sm font-medium text-neutral-500 mb-4">
          Issued by {issuer}
        </p>
      </div>

      {/* Date (Only show if date exists) */}
      {date && (
        <div className="flex items-center gap-2 text-xs text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 pt-4 mt-auto">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
      )}
    </a>
  );
}
