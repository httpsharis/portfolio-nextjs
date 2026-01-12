import { LucideIcon } from "lucide-react";

export default function ContactLink({ href, icon: Icon, text }: { href: string; icon: LucideIcon; text: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-center gap-3 text-lg sm:text-xl font-medium text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
        <Icon size={20} className="text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
      </div>
      <span>{text}</span>
    </a>
  );
}