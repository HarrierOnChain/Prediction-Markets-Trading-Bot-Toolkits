import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { LiveSignalSection } from './components/LiveSignalSection';
import { BotsSection } from './components/BotsSection';
import { VenuesSection } from './components/VenuesSection';
import { EngineSection } from './components/EngineSection';
import { SafetySection } from './components/SafetySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <LiveSignalSection />
        <BotsSection />
        <VenuesSection />
        <EngineSection />
        <SafetySection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
