import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

export const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'Campeonato de Valorant da Comunidade',
      description: 'Torneio interno da comunidade com premiação em dinheiro e muito brindes para os participantes.',
      date: '2024-01-20',
      time: '19:00',
      status: 'upcoming',
      participants: '32 players',
      location: 'Discord + Valorant',
      prize: 'R$ 500,00'
    },
    {
      id: 2,
      title: 'Live Solidária - Jogando com a Galera',
      description: 'Uma live especial onde você pode jogar comigo! Toda a arrecadação será doada para caridade.',
      date: '2024-01-18',
      time: '20:00',
      status: 'live',
      participants: 'Comunidade',
      location: 'Twitch',
      prize: 'Solidariedade'
    },
    {
      id: 3,
      title: 'Maratona de Indie Games',
      description: 'Uma maratona de 12 horas jogando os melhores indie games com a participação da comunidade.',
      date: '2024-01-25',
      time: '08:00',
      status: 'upcoming',
      participants: 'Todos',
      location: 'Twitch + Discord',
      prize: 'Diversão garantida'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-destructive text-destructive-foreground animate-pulse';
      case 'upcoming':
        return 'bg-gradient-primary text-primary-foreground';
      case 'ended':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'AO VIVO';
      case 'upcoming':
        return 'EM BREVE';
      case 'ended':
        return 'FINALIZADO';
      default:
        return 'AGENDADO';
    }
  };

  return (
    <section id="eventos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Próximos{' '}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Eventos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não perca nenhum momento especial da nossa comunidade
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 group relative overflow-hidden"
              >
                {/* Status Badge */}
                <Badge 
                  className={`absolute top-4 right-4 z-10 ${getStatusColor(event.status)}`}
                >
                  {getStatusText(event.status)}
                </Badge>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors pr-20">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-foreground font-medium">
                        {new Date(event.date).toLocaleDateString('pt-BR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>

                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-foreground font-medium">{event.time}</span>
                    </div>

                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-foreground font-medium">{event.participants}</span>
                    </div>

                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-foreground font-medium">{event.location}</span>
                    </div>
                  </div>

                  {/* Prize/Goal */}
                  <div className="bg-muted/50 rounded-lg p-3 mt-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Premiação/Meta: </span>
                      <span className="text-foreground font-semibold">{event.prize}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full mt-6" 
                    variant={event.status === 'live' ? 'gaming' : 'hero'}
                  >
                    {event.status === 'live' ? 'Assistir Agora' : 'Saiba Mais'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendar CTA */}
          <div className="text-center mt-12 bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              Não perca nenhum evento!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Adicione nosso calendário de eventos ao seu Google Calendar e receba notificações 
              de todos os eventos da comunidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Adicionar ao Calendário
              </Button>
              <Button variant="outline" size="lg">
                Ver Calendário Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};