"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState("");
  const fullText = "Haris.dev";

  useEffect(() => {
    // Typing effect logic
    const handleTyping = async () => {
      await new Promise((r) => setTimeout(r, 200)); // Initial delay

      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i));
        await new Promise((r) => setTimeout(r, 100)); // Typing speed
      }

      await new Promise((r) => setTimeout(r, 1000)); // Wait a bit
      onComplete(); // Trigger exit in parent
    };

    handleTyping();
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
    >
      {/* 1. Glowing Background Orb */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"
      />

      {/* 2. Typing Text */}
      <div className="relative z-10 font-bold text-5xl md:text-7xl font-mono">
        <span>{text}</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 text-blue-500"
        >
          _
        </motion.span>
      </div>

      {/* 3. Loading Bar */}
      <div className="absolute bottom-20 w-64 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-full bg-blue-500"
        />
      </div>

      <p className="absolute bottom-10 text-neutral-500 text-xs uppercase tracking-widest">
        Initializing Portfolio
      </p>
    </motion.div>
  );
}
