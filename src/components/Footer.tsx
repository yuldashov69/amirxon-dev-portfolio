import { Mail, Send, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Yuldashov Amirxon
              </h3>
              <p className="text-muted-foreground">
                Frontend Developer
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <a
                  href="mailto:amirxonyuldashov611@gmail.com"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  amirxonyuldashov611@gmail.com
                </a>
                <a
                  href="https://t.me/Yuldwv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Send className="w-4 h-4" />
                  @Yuldwv
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2 text-muted-foreground">
                <a href="#home" className="block hover:text-accent transition-colors">
                  {t('nav_home')}
                </a>
                <a href="#about" className="block hover:text-accent transition-colors">
                  {t('nav_about')}
                </a>
                <a href="#projects" className="block hover:text-accent transition-colors">
                  {t('nav_projects')}
                </a>
                <a href="#contact" className="block hover:text-accent transition-colors">
                  {t('nav_contact')}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Yuldashov Amirxon. {t('footer_rights')}.
            </p>
            <p className="flex items-center justify-center gap-2 mt-2">
              {t('footer_built')} <Heart className="w-4 h-4 text-accent fill-accent" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
