import { BentoGrid } from '@/components/bento-grid';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { NavBar } from '@/components/nav-bar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
