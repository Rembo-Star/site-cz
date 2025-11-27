import { HeroSection } from './components/HeroSection';
import { ActiveProfiles } from './components/ActiveProfiles';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0D0D0F] min-h-screen">
      <HeroSection />
      <ActiveProfiles />
      <Benefits />
      <SocialProof />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
}
