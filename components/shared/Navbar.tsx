"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navigation } from "../../config/site-config";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

function Divider() {
  return <div className="w-px h-6 bg-neutral-300 dark:bg-white/10 mx-2" />;
}

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        {...navAnimation}
        className="flex items-center gap-2 p-2 bg-white/80 dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-full shadow-2xl"
      >
        <Link href="/" className="font-bold pl-4 text-[20px] text-neutral-900 dark:text-white">
          MH.
        </Link>

        <Divider />

        {navigation.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className="relative group p-3 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
          >
            <Icon
              size={20}
              className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors"
            />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-md text-xs text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {name}
            </span>
          </Link>
        ))}

        <Divider />
        <ThemeToggle />
      </motion.nav>
    </div>
  );
}
