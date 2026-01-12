"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

type HeroButtonProps = {
  text: string;
  href: string;
  icon?: LucideIcon;
  isPrimary?: boolean;
};

export default function HeroButton({
  text,
  href,
  icon: Icon,
  isPrimary,
}: HeroButtonProps) {
  const baseStyles = `
    inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
    ${
      isPrimary
        ? "bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-80 hover:scale-105 shadow-lg dark:shadow-white/10"
        : "border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105"
    }
  `;

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {Icon && <Icon size={20} />}
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={baseStyles}>
      {Icon && <Icon size={20} />}
      {text}
    </Link>
  );
}
