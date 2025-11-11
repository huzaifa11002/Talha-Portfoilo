import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import InsightsSection from "@/components/InsightsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
      <SkillsSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
}
