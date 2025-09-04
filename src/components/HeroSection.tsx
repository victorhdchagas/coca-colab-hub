import { Button } from '@/components/ui/button';
import { Twitch, MessageCircle, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Gaming setup background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bem-vindo à{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Comunidade
            </span>
            <br />
            do{' '}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Canal do Coca
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aqui a zoeira e a diversão não têm limites. Junte-se a nós para lives épicas, 
            gameplay incrível e uma comunidade unida!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            asChild
          >
            <a href="#" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Entrar no Discord
            </a>
          </Button>
          
          <Button 
            variant="gaming" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            asChild
          >
            <a href="#" className="flex items-center gap-2">
              <Twitch className="w-5 h-5" />
              Assistir ao Vivo
            </a>
          </Button>
        </div>

        {/* Live Status */}
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto border border-border">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">AO VIVO AGORA</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Jogando: Valorant - Ranked Push!
          </p>
          <div className="flex items-center justify-center mt-3 space-x-2">
            <span className="text-2xl font-bold text-primary">2.4k</span>
            <span className="text-sm text-muted-foreground">espectadores</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};