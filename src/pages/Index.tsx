import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { NewsSection } from '@/components/NewsSection';
import { EventsSection } from '@/components/EventsSection';
import { ContactSection } from '@/components/ContactSection';
import { SocialSection } from '@/components/SocialSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <EventsSection />
      <ContactSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
