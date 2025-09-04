import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Twitch, Youtube, Instagram, Twitter, MessageCircle, Music, ExternalLink } from 'lucide-react';

export const SocialSection = () => {
  const socialPlatforms = [
    {
      name: 'Twitch',
      username: '@canaldococa',
      followers: '15.2K',
      description: 'Lives diárias de games variados',
      icon: Twitch,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:shadow-purple-500/30',
      url: '#'
    },
    {
      name: 'YouTube',
      username: '@CanalDoCoca',
      followers: '28.5K',
      description: 'Melhores momentos e tutoriais',
      icon: Youtube,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      hoverColor: 'hover:shadow-red-500/30',
      url: '#'
    },
    {
      name: 'Discord',
      username: 'Comunidade Coca',
      followers: '3.2K',
      description: 'Chat oficial da comunidade',
      icon: MessageCircle,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      hoverColor: 'hover:shadow-indigo-500/30',
      url: '#'
    },
    {
      name: 'Instagram',
      username: '@canaldococa',
      followers: '8.9K',
      description: 'Bastidores e stories',
      icon: Instagram,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:shadow-pink-500/30',
      url: '#'
    },
    {
      name: 'Twitter/X',
      username: '@canaldococa',
      followers: '5.1K',
      description: 'Updates e interação',
      icon: Twitter,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:shadow-blue-500/30',
      url: '#'
    },
    {
      name: 'TikTok',
      username: '@canaldococa',
      followers: '12.7K',
      description: 'Clipes e momentos engraçados',
      icon: Music,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:shadow-green-500/30',
      url: '#'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conecte-se{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Conosco!
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Siga o Canal do Coca em todas as plataformas e não perca nenhum conteúdo incrível
            </p>
          </div>

          {/* Social Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card 
                  key={platform.name} 
                  className={`bg-gradient-card border-border/50 hover:shadow-2xl ${platform.hoverColor} transition-all duration-300 group cursor-pointer`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${platform.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${platform.color}`} />
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-1">
                      {platform.username}
                    </p>
                    
                    <p className="text-xs text-muted-foreground mb-4">
                      {platform.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        {platform.followers}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        seguidores
                      </span>
                    </div>

                    <Button 
                      className="w-full mt-4" 
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={platform.url} className="flex items-center gap-2">
                        Seguir
                        <IconComponent className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Content/Community Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Community Stats */}
            <Card className="bg-gradient-card border-border/50 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Estatísticas da Comunidade</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total de Seguidores</span>
                    <span className="text-2xl font-bold text-primary">73.6K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Membros do Discord</span>
                    <span className="text-xl font-bold">3.2K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Horas de Stream</span>
                    <span className="text-xl font-bold">1.8K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Países Alcançados</span>
                    <span className="text-xl font-bold">15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-primary border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                  Junte-se à Nossa Comunidade!
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Faça parte de uma comunidade incrível, participe de eventos exclusivos 
                  e conecte-se com outros gamers apaixonados.
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start" 
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar no Discord
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" 
                    size="lg"
                  >
                    <Twitch className="w-5 h-5 mr-2" />
                    Seguir na Twitch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};