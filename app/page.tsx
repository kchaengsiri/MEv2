import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { NavBar } from '@/components/nav-bar';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';

import { PROJECTS, TECH_CATEGORIES } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection projects={PROJECTS} />
        <SkillsSection skills={TECH_CATEGORIES} />
      </main>
      <Footer />
    </>
  );
}
