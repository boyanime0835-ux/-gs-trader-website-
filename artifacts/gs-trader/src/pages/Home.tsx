import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Markets from '@/components/Markets';
import Courses from '@/components/Courses';
import Features from '@/components/Features';
import Platforms from '@/components/Platforms';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Markets />
        <Courses />
        <Features />
        <Platforms />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
