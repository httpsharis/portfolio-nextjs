import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechMarqueeSection } from "@/components/sections/TechMarqueeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main id="main-content" className="relative flex-1">
      <HeroSection />
      <SelectedWorkSection />
      <ExperienceSection />
      <TechMarqueeSection />
      <ContactSection />
    </main>
  );
}
