import { skillsData } from "@/config/site-config";

export default function SkillCard({
  title,
  icon: Icon,
  skills,
}: (typeof skillsData)[0]) {
  return (
    <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <Icon className="text-blue-600 dark:text-blue-400" size={24} />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Skills Pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1 text-sm font-medium bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-full text-neutral-600 dark:text-neutral-300"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
