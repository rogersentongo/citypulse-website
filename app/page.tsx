import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import PrimaryUseCases from '@/components/PrimaryUseCases';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <PrimaryUseCases />
      <Technology />
      <HowItWorks />
      <About />
      <Footer />
    </main>
  );
}
