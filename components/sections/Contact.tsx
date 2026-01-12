"use client";

import ContactLink from "@/lib/ContactLink";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 max-w-4xl mx-auto">
      
      <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 sm:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 text-center relative overflow-hidden">
        
        {/* Decorative Background Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Let&apos;s Connect</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Feel free to reach out for collaborations, project inquiries, or just a friendly hello. I&apos;m currently available for new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <ContactLink
              href="mailto:itsharis.dev@gmail.com" 
              icon={Mail} 
              text="itsharis.dev@gmail.com" 
            />
            <ContactLink 
              href="tel:+923457371958" 
              icon={Phone} 
              text="+92 345 7371958" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}