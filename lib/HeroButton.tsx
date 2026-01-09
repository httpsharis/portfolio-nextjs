import { LucideIcon } from "lucide-react";

type ButtonProps = {
  text: string;
  href: string;
  icon?: LucideIcon;
  isPrimary?: boolean; // True = Black Button ; False = Outline Button
};

export default function HeroButton({
  text,
  href,
  icon: Icon,
  isPrimary,
}: ButtonProps) {
  return (
    <a
      target="_blank"
      href={href}
      className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-opacity hover:opacity-80 
        ${
          isPrimary
            ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
            : "border border-neutral-200 dark:border-neutral-800"
        }`}
    >
      {/* If Icon exist show it */}
      {Icon && <Icon size={20} />}
      {text}
    </a>
  );
}
