import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--accent)/0.1),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">{t('hero_greeting')}</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
              Yuldashov Amirxon
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-semibold">
              {t('hero_title')}
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero_description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-accent hover:bg-accent/90 text-background font-semibold px-8"
            >
              {t('hero_cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-accent text-accent hover:bg-accent hover:text-background px-8"
            >
              {t('hero_contact')}
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/yuldashov69"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-background transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-background transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};
