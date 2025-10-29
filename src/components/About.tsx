import { useLanguage } from '@/contexts/LanguageContext';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 70 },
  { name: 'TailwindCSS', level: 80 },
  { name: 'Bootstrap', level: 70 },
  { name: 'Python', level: 80 },
  { name: 'C++', level: 70 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Figma', level: 70 },
];

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            {t('about_title')}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about_description')}
              </p>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Facts</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span className="font-medium text-foreground">Yuldashov Amirxon</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age:</span>
                    <span className="font-medium text-foreground">17 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium text-foreground">Uzbekistan</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="font-medium text-foreground">amirxonyuldashov611@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">{t('skills_title')}</h3>
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
