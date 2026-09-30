import { Hero } from "@/components/sections/Hero";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { About } from "@/components/sections/About";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSummary } from "@/components/sections/SkillsSummary";
import { ContactCTA } from "@/components/sections/ContactCTA";

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
