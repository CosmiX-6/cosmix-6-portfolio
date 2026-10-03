import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { About } from "@/components/sections/About";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSummary } from "@/components/sections/SkillsSummary";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.akashlabs.dev" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <About />
      <ExperienceTimeline />
      <FeaturedProjects />
      <SkillsSummary />
      <ContactCTA />
    </>
  );
}
