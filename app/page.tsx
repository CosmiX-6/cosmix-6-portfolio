import { Hero } from "@/components/sections/Hero";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSummary } from "@/components/sections/SkillsSummary";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <FeaturedProjects />
      <SkillsSummary />
      <ContactCTA />
    </>
  );
}
