import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import PulseFeedSection from '@/components/PulseFeedSection';
import FriendsFeedSection from '@/components/FriendsFeedSection';
import AskNYCSection from '@/components/AskNYCSection';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <IntroSection />
      <PulseFeedSection />
      <FriendsFeedSection />
      <AskNYCSection />
      <HowItWorks />
      <div className="flex flex-col gap-24 md:gap-32">
        <Technology />
        <About />
        <Footer />
      </div>
    </main>
  );
}
