import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSummary } from "@/components/sections/SkillsSummary";
import { ToolsRow } from "@/components/sections/ToolsRow";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { HowIWork } from "@/components/sections/HowIWork";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.akashlabs.dev" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <SkillsSummary />
      <ToolsRow />
      <ExperienceTimeline />
      <HowIWork />
      <ContactCTA />
    </>
  );
}
