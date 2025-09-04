import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Trophy, Heart } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { icon: Users, label: 'Seguidores', value: '50K+' },
    { icon: Calendar, label: 'Anos de Stream', value: '5+' },
    { icon: Trophy, label: 'Campeonatos', value: '12' },
    { icon: Heart, label: 'Comunidade', value: '∞' },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Canal do Coca
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma comunidade construída sobre diversão, respeito e paixão por games
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Uma Jornada de Diversão e Conexão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O Canal do Coca nasceu da paixão por jogos e do desejo de criar um espaço 
                onde a diversão e a amizade fossem os protagonistas. Desde o início, nossa 
                missão tem sido clara: construir uma comunidade acolhedora onde todos se sintam 
                em casa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com lives diárias de games variados, desde FPS competitivos até indies 
                relaxantes, o canal oferece entretenimento para todos os gostos. Mas mais 
                que isso, criamos um ambiente onde cada viewer faz parte da família.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa comunidade se destaca pelo respeito mútuo, pela zoeira saudável e 
                pelos momentos memoráveis que compartilhamos juntos. Aqui, você não é 
                apenas um espectador - você é parte da história!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg">
                  Junte-se ao Discord
                </Button>
                <Button variant="outline" size="lg">
                  Ver Horários das Lives
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <Card className="bg-gradient-card border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-foreground">C</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">Canal do Coca</h4>
                      <p className="text-muted-foreground">
                        Placeholder para foto/video do streamer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};