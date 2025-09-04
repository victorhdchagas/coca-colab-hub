import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

export const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Coca anuncia novo sorteio de periféricos!',
      summary: 'Participem do nosso mega sorteio com headset gamer, teclado mecânico e mouse de alta performance. Não percam!',
      date: '2024-01-15',
      category: 'Sorteio',
      image: '/placeholder-news-1.jpg'
    },
    {
      id: 2,
      title: 'Live especial de Valorant com convidados',
      summary: 'Nesta sexta-feira teremos uma live especial com streamers convidados para uma partida épica de Valorant.',
      date: '2024-01-12',
      category: 'Gaming',
      image: '/placeholder-news-2.jpg'
    },
    {
      id: 3,
      title: 'Evento de caridade da comunidade se aproxima',
      summary: 'Preparem-se para nosso evento anual de caridade! Este ano estamos apoiando uma instituição local.',
      date: '2024-01-10',
      category: 'Evento',
      image: '/placeholder-news-3.jpg'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sorteio':
        return 'bg-gradient-secondary text-secondary-foreground';
      case 'Gaming':
        return 'bg-gradient-primary text-primary-foreground';
      case 'Evento':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="noticias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fique por{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Dentro
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todas as novidades, sorteios e eventos da nossa comunidade
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <Card 
                key={article.id} 
                className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl">📰</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Imagem da notícia</p>
                    </div>
                  </div>
                  <Badge 
                    className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}
                  >
                    {article.category}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:shadow-glow-primary">
              Ver Todas as Notícias
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};