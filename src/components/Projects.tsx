import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    title: 'Beauty Salon Website',
    description: 'A stylish and responsive beauty salon website built with TailwindCSS. Features modern design, smooth animations, and mobile-first approach.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    link: 'http://beauty-salon-tailwindcss.vercel.app/',
    github: '#',
    tags: ['TailwindCSS', 'HTML', 'JavaScript', 'Responsive'],
  },
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            {t('projects_title')}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="bg-accent hover:bg-accent/90 text-background"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('project_view')}
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
