import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground font-[Inter]">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
