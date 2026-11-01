import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            {t('contact_title')}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {t('contact_description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-in">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  Email
                </h3>
                <a
                  href="mailto:amirxonyuldashov611@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  amirxonyuldashov611@gmail.com
                </a>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Send className="w-5 h-5 text-accent" />
                  Telegram
                </h3>
                <a
                  href="https://t.me/Amrxonnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  @Amrxonnn
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <Input
                  name="name"
                  placeholder={t('contact_name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={t('contact_email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t('contact_message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-background font-semibold"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                {t('contact_send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
