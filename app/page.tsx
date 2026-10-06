import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SelectedSignals } from "@/components/sections/SelectedSignals";
import { HowIThink } from "@/components/sections/HowIThink";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsSummary } from "@/components/sections/SkillsSummary";
import { CurrentlyExploring } from "@/components/sections/CurrentlyExploring";
import { LabSection } from "@/components/sections/LabSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.akashlabs.dev" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedSignals />
      <HowIThink />
      <FeaturedProjects />
      <ExperienceTimeline />
      <SkillsSummary />
      <CurrentlyExploring />
      <LabSection />
      <ContactCTA />
    </>
  );
}
