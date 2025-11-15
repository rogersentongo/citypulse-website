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
    <main className="min-h-screen">
      <Hero />
      <IntroSection />
      <PulseFeedSection />
      <FriendsFeedSection />
      <AskNYCSection />
      <Technology />
      <HowItWorks />
      <About />
      <Footer />
    </main>
  );
}
